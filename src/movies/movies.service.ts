import { Injectable } from '@nestjs/common';
import { Movie } from "./movie.model";
import * as uuid from "uuid";
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAllMovies() {
        return this.movies;
    }

    createMovie(createMovieDto: CreateMovieDto) {
        const { url } = createMovieDto;
        const movie: Movie = {
            id: uuid(),
            url,
            status: true
        }

        this.movies.push(movie);
        return movie;
    }
}
