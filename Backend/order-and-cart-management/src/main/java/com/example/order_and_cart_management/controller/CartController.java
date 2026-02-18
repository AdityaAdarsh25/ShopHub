package com.example.order_and_cart_management.controller;

import com.example.order_and_cart_management.dto.AddToCartRequest;
import com.example.order_and_cart_management.dto.AddToCartResponse;
import com.example.order_and_cart_management.service.CartService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @PostMapping
    public ResponseEntity<AddToCartResponse> addItemToCart(@RequestHeader("X-USER-ID") UUID userId, @RequestBody AddToCartRequest addtoCartRequest){
        return ResponseEntity.ok(cartService.addToCart(userId,addtoCartRequest));
    }


}
