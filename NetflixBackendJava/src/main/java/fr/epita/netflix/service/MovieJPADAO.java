package fr.epita.netflix.service;

import fr.epita.netflix.datamodel.Movie;
import fr.epita.netflix.datamodel.Role;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

public class MovieJPADAO extends JPADAO<Movie> {

    public MovieJPADAO(SessionFactory sf) {

        super(sf);
    }

    @Override
    public Query<Movie> getAll(Session session) {

        Query<Movie> query = session.createQuery(
                "from Movie m "
        );

        query.getQueryString();
        return query;
    }

    @Override
    public Query<Movie> get(Long id, Session session) {

        Query<Movie> query = session.createQuery(
                "from Movie m " +
                        "where (:id is null or :id = m.id) "
        );
        query.setParameter("id", id);
        query.getQueryString();
        return query;
    }

}
