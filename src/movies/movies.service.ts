import { Injectable } from '@nestjs/common';
import { Movie } from "./movie.model";
import * as uuid from "uuid";
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';
import { moveCursor } from 'readline';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAllMovies(): Movie[] {
        return this.movies;
    }

    getMoviesWithFilters(filterDto: GetMoviesFilterDto): Movie[] {
        const { status } = filterDto;

        let movies = this.getAllMovies();
        return movies.filter(movie => movie.status === status);
    }

    getMovieById(id: string): Movie {
        return this.movies.find(movie => movie.id === id);
    }

    createMovie(createMovieDto: CreateMovieDto): Movie {
        const { url } = createMovieDto;
        const movie: Movie = {
            id: uuid(),
            url,
            status: true
        }

        this.movies.push(movie);
        return movie;
    }

    deleteMovie(id: string): void {
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    updateMovieStatus(id: string, status: boolean): Movie {
        const movie = this.getMovieById(id);
        movie.status = status;
        return movie;
    }
}
