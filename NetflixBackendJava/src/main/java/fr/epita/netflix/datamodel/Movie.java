package fr.epita.netflix.datamodel;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.*;
@Entity
@Table(name="movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "date")
    private ZonedDateTime date;

    @Column(name = "external_id")
    private String externalId;

    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public String getTitle() {

        return title;
    }

    public Movie title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {

        this.title = title;
    }

    public ZonedDateTime getDate() {

        return date;
    }

    public Movie date(ZonedDateTime date) {
        this.date = date;
        return this;
    }

    public void setDate(ZonedDateTime date) {

        this.date = date;
    }

    public String getExternalId() {

        return externalId;
    }

    public Movie externalId(String externalId) {
        this.externalId = externalId;
        return this;
    }

}
