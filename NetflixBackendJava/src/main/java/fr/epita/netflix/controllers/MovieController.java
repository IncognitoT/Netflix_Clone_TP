package fr.epita.netflix.controllers;

import fr.epita.netflix.datamodel.Movie;
import fr.epita.netflix.exceptions.BadRequestAlertException;
import fr.epita.netflix.exceptions.ResourceNotFoundException;
import fr.epita.netflix.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/netflix")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @PostMapping("/movies")
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) throws URISyntaxException {
        if (movie.getId() != null) {
            throw new BadRequestAlertException("A new movie cannot already have an ID");
        }
        Movie result = movieRepository.createMovie(movie);
        return ResponseEntity.created(new URI("/netflix/movies/" + result.getId()))
                .body(result);
    }

    @GetMapping("/movies")
    public List<Movie> getAllMovies() {
        return movieRepository.getMovies();
    }


    @GetMapping("/movies/{id}")
    public ResponseEntity<Movie> getMovie(@PathVariable Long id) {
        Movie movie = movieRepository.getById(id);
        if(!movie.getId().equals(id)){
            throw new ResourceNotFoundException("Not found movie with id = " + id);
        }
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }

}
