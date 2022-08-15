package fr.epita.netflix.controllers;

import fr.epita.netflix.datamodel.User;
import fr.epita.netflix.exceptions.BadRequestAlertException;
import fr.epita.netflix.repository.UserRepository;
import fr.epita.netflix.service.CloakConfiguration;
import org.apache.tomcat.util.http.HeaderUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/netflix")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {

        List<User> users = new ArrayList<>();
            userRepository.getUsers().forEach(users::add);
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user) throws URISyntaxException {

        if (user.getId() != null) {

            throw new BadRequestAlertException("New user cannot have an ID");

        } else {
            User newUser = userRepository.createUser(user);
            CloakConfiguration cloakConfiguration = new CloakConfiguration(user.getLogin(), user.getFirstName(), user.getLastName(), user.getEmail());
            cloakConfiguration.configuration();
            return ResponseEntity.created(new URI("/netflix/users/" + newUser.getId())).body(newUser);
        }
    }


    @DeleteMapping("/users/{username}")
    public ResponseEntity<HttpStatus> deleteUsers(@PathVariable("username") String userName) {
        userRepository.deleteByName(userName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
