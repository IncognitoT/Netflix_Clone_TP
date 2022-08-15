package fr.epita.netflix.exceptions;

public class BadRequestAlertException extends RuntimeException {
    public BadRequestAlertException(String message) {
        super(message);
    }
}
