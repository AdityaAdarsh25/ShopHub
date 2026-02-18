package com.example.order_and_cart_management.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<Map<String,Object>> handleBadExceptionRequest(BadRequestException exception){
        return buildResponse(HttpStatus.BAD_REQUEST,exception.getMessage());
    }

    private ResponseEntity<Map<String, Object>> buildResponse(HttpStatus httpStatus, String message) {
        Map<String,Object> body=new HashMap<>();
        body.put("message",message);
        body.put("error", httpStatus.getReasonPhrase());
        body.put("status",httpStatus.value());
        body.put("timestamp", LocalDateTime.now());
        return new ResponseEntity<>(body,httpStatus);
    }
}
