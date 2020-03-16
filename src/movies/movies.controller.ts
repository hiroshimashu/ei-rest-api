import { Controller, Get, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from "./movie.model";
import { CreateMovieDto } from "./dto/create-movie.dto";

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) { }
    
    @Get()
    getAllMovies(): Movie[] {
        return this.moviesService.getAllMovies();
    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto): Movie {
        return this.moviesService.createMovie(createMovieDto);
    }
}
