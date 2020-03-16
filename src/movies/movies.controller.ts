import { Controller, Get, Post, Delete, Body, Param, Patch, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from "./movie.model";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) { }
    
    @Get()
    getMovies(@Query() filterDto: GetMoviesFilterDto): Movie[] {
        if (Object.keys(filterDto).length) {
            return this.moviesService.getMoviesWithFilters(filterDto);
        }
        return this.moviesService.getAllMovies();
    }

    @Get("/:id")
    getMovieById(@Param('id') id: string): Movie {
        return this.moviesService.getMovieById(id);
    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto): Movie {
        return this.moviesService.createMovie(createMovieDto);
    }

    @Patch("/:id/:status")
    updateMovieStatus(
        @Param('id') id: string,
        @Param('status') status: boolean
    ): Movie {
        return this.moviesService.updateMovieStatus(id, status);
    }

    @Delete('/:id')
    deleteMovie(@Param('id') id: string): void {
        this.moviesService.deleteMovie(id);
    }

}
