import { Injectable } from '@nestjs/common';
import { Movie } from "./movie.model";
import * as uuid from "uuid";

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAllMovies() {
        return this.movies;
    }

    createMovie(url: string) {
        const movie: Movie = {
            id: uuid(),
            url,
            status: true
        }

        this.movies.push(movie);
        return movie;
    }
}
