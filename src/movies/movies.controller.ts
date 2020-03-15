import { Controller, Get, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from "./movie.model";

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) { }
    
    @Get()
    getAllMovies(): Movie[] {
        return this.moviesService.getAllMovies();
    }

    @Post()
    createMovie(@Body('url') url: string): Movie {
        return this.moviesService.createMovie(url);
    }
}
