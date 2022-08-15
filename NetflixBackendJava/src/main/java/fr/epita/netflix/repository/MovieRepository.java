package fr.epita.netflix.repository;

import fr.epita.netflix.datamodel.Movie;
import fr.epita.netflix.service.MovieJPADAO;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import javax.transaction.Transactional;
import java.util.List;

public class MovieRepository {
    private final SessionFactory sessionFactory;
    private final MovieJPADAO movieJPADAO;

    public MovieRepository(SessionFactory sf,
                          MovieJPADAO movieDAO
    ) {
        this.sessionFactory = sf;
        this.movieJPADAO = movieDAO;
    }

    @Transactional
    public Movie createMovie(Movie movie){
        this.movieJPADAO.create(movie);
        return getMovies().get(0);
    }

    public List<Movie> getMovies() {
        Session session = getSession();
        List<Movie> searchResult = this.movieJPADAO.search();
        return searchResult;
    }

    public Movie getById(Long id){
        Session session = getSession();
        List<Movie> searchResult = this.movieJPADAO.search(id);
        return searchResult.get(0);
    }

    private Session getSession() {

        Session currentSession = null;
        try {
            currentSession = this.sessionFactory.getCurrentSession();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        if (currentSession != null && currentSession.isOpen()) {
            return currentSession;
        } else {
            return this.sessionFactory.openSession();
        }
    }

}
