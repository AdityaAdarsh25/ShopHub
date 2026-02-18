package online.threadly.product3.Repository;

import online.threadly.product3.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface productRepository extends JpaRepository<Product, UUID>{
    Optional<Product> findBySlug(String slug);

    List<Product> findAllByBrand(String brand);
}
