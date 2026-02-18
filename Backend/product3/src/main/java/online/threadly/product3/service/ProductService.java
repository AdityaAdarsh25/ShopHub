package online.threadly.product3.service;

import online.threadly.product3.Repository.productRepository;
import online.threadly.product3.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {

    private final productRepository productRepository;

    // The repository is injected via the constructor.
    public ProductService(productRepository productRepository) {
        this.productRepository = productRepository;
    }


    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> createProducts(List<Product> products) {
        return productRepository.saveAll(products);
    }



    public Product getProduct(UUID id) {
        return productRepository.findById(id).orElse(null);
    }


    public Optional<Product> getProductbySlug(String slug) {
        return productRepository.findBySlug(slug);
    }
}