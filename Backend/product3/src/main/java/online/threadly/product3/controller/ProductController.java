package online.threadly.product3.controller;

import online.threadly.product3.dao.Response;
import online.threadly.product3.model.Product;
import online.threadly.product3.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<Response> createProduct(@RequestBody Product product) {
        var createdProduct=productService.createProduct(product);
        if(product==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Response("Sorry",null));
        }
        return ResponseEntity.ok(new Response("Created",createdProduct));

    }

    @PostMapping("/bulk")
    public List<Product> createProducts(@RequestBody List<Product> products) {
        return productService.createProducts(products);
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Response> getProduct(@PathVariable String slug){
        Optional<Product> product=productService.getProductbySlug(slug);
        if(product.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response("Product Not Found",null));
        }
        return ResponseEntity.ok(new Response("Found",product.get()));

    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getProduct(@PathVariable UUID id){
        Product product=productService.getProduct(id);
        if(product==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response("TMKBP",null));
        }
        return ResponseEntity.ok(new Response("Product fetched",product));
    }





}