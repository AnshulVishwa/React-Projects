package com.example.reactivedemo.service;

import com.example.reactivedemo.model.Product;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import jakarta.annotation.PostConstruct;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Service layer to manage product data.
 * This service uses an in-memory map as a mock database.
 */
@Service
public class ProductService {

    // Using ConcurrentHashMap for thread-safety, though not strictly necessary
    // for this simple reactive example, it's good practice.
    private final Map<Integer, Product> productMap = new ConcurrentHashMap<>();

    /**
     * Initializes the service with some mock data when the bean is created.
     */
    @PostConstruct
    private void init() {
        // Populate mock data
        productMap.put(1, new Product(1, "Laptop", 1200.00));
        productMap.put(2, new Product(2, "Mouse", 45.00));
        productMap.put(3, new Product(3, "Keyboard", 80.00));
        productMap.put(4, new Product(4, "Monitor", 250.00));
    }

    /**
     * Fetches all products reactively.
     * @return a Flux (0..N) of Products.
     */
    public Flux<Product> findAll() {
        // Create a Flux from the values of our in-memory map
        return Flux.fromIterable(productMap.values());
    }

    /**
     * Fetches a single product by its ID.
     * @param id The ID of the product.
     * @return a Mono (0..1) of the Product, or an empty Mono if not found.
     */
    public Mono<Product> findById(int id) {
        // Mono.justOrEmpty wraps an object or emits an empty signal if the object is null.
        return Mono.justOrEmpty(productMap.get(id));
    }
}

