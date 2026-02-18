package online.threadly.product3.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List; // Import List
import java.util.UUID;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    // Change 'images' to a List<String> to hold multiple paths
    @ElementCollection // Tells JPA to map this collection to a separate table
    private List<String> images;

    private String brand;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Double rating;
    private Integer ratingCount;
    private Integer stock;

    // Use BigDecimal for price
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    private Boolean isFeatured;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    @PrePersist
    public void prePersist() {
        System.out.println("Hello i am printing ");
        this.createdAt = LocalDateTime.now();
    }



}