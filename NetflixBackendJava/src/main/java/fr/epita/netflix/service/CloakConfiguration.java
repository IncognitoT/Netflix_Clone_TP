package fr.epita.netflix.service;

import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.CreatedResponseUtil;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.ClientRepresentation;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;

import javax.ws.rs.core.Response;
import java.util.Arrays;
import java.util.Collections;

public class CloakConfiguration {

    private String username;
    private String first_name;
    private String last_name;
    private String email_id;

    public CloakConfiguration(String username, String fname, String lname, String email) {
        this.username = username;
        this.first_name = fname;
        this.last_name = lname;
        this.email_id = email;
    }

    public void configuration(){

        String serverUrl = "http://localhost:8080/auth/";
        String realm = "netflix";
        String clientId = "netflix";
        String clientSecret = "";
        String usernameClient = "thoshith";
        String passwordClient = "qwerty123";


        Keycloak keycloak = KeycloakBuilder.builder()
                .serverUrl(serverUrl)
                .realm(realm)
                .grantType(OAuth2Constants.PASSWORD)
                .clientId(clientId)
                .username(usernameClient)
                .password(passwordClient)
                .resteasyClient(new ResteasyClientBuilder()
                        .connectionPoolSize(10).build())
                .build();


        UserRepresentation user = new UserRepresentation();
        user.setEnabled(true);
        user.setUsername(this.username);
        user.setFirstName(this.first_name);
        user.setLastName(this.last_name);
        user.setEmail(this.email_id);
        user.setAttributes(Collections.singletonMap("origin", Arrays.asList("demo")));


        RealmResource realmResource = keycloak.realm(realm);
        UsersResource usersRessource = realmResource.users();

        Response response = usersRessource.create(user);
        String userId = CreatedResponseUtil.getCreatedId(response);


        CredentialRepresentation passwordCred = new CredentialRepresentation();
        passwordCred.setTemporary(false);
        passwordCred.setType(CredentialRepresentation.PASSWORD);
        passwordCred.setValue("qwerty123");

        UserResource userResource = usersRessource.get(userId);


        userResource.resetPassword(passwordCred);
    }

}
