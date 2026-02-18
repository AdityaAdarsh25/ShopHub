package com.example.order_and_cart_management.service;

import com.example.order_and_cart_management.dto.AddToCartRequest;
import com.example.order_and_cart_management.dto.AddToCartResponse;
import com.example.order_and_cart_management.exception.BadRequestException;
import com.example.order_and_cart_management.model.Cart;
import com.example.order_and_cart_management.model.CartItem;
import com.example.order_and_cart_management.repository.CartItemRepository;
import com.example.order_and_cart_management.repository.CartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@AllArgsConstructor
@Service
public class CartService {
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    public AddToCartResponse addToCart(UUID userId, AddToCartRequest request){
        if(request.getQuantity()==null || request.getQuantity()<=0){
            throw new BadRequestException("Quantity must be greater than 0");
        }

        Cart cart= cartRepository.findByUserId(userId).orElseGet(() -> {
            Cart newCart = new Cart();
            newCart.setUserId(userId);
            return cartRepository.save(newCart);
        });
        CartItem cartItem=cartItemRepository.findByCartIdAndProductId(cart.getId(),request.getProductId()).orElseGet(()->{
            CartItem newCartItem=new CartItem();
            newCartItem.setCart(cart);
            newCartItem.setProductId(request.getProductId());
            newCartItem.setQuantity(0);
            return newCartItem;
        });
        cartItem.setQuantity(cartItem.getQuantity()+request.getQuantity());
        cartItemRepository.save(cartItem);

        return new AddToCartResponse("Added to cart succesfully",cart.getId());



    }
}
