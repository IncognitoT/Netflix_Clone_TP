package fr.epita.netflix.datamodel;

import org.apache.commons.lang3.StringUtils;



import javax.persistence.*;
import java.util.Locale;


@Entity
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @Column(length = 50, unique = true)
    private String login;

    @Column(name = "password", length = 60)
    private String password;


    @Column(name = "first_name", length = 50)
    private String firstName;


    @Column(name = "last_name", length = 50)
    private String lastName;

    @Column(length = 254, unique = true)
    private String email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {

        return login;
    }


    public void setLogin(String login) {
        this.login = StringUtils.lowerCase(login, Locale.ENGLISH);
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
