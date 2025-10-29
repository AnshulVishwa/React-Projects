    package com.example.reactivedemo.controller;
    
    import com.example.reactivedemo.model.Product;
    import com.example.reactivedemo.service.ProductService;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PathVariable;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;
    import reactor.core.publisher.Flux;
    import reactor.core.publisher.Mono;
    
    /**
     * REST Controller for managing products.
     * This controller exposes endpoints for fetching products reactively.
     */
    @RestController // <-- Checks this is here!
    @RequestMapping("/products") // <-- Checks this is here!
    public class ProductController {
    
        private final ProductService productService;
    
        // We use constructor injection to get the ProductService bean
        public ProductController(ProductService productService) {
            this.productService = productService;
        }
    
        /**
         * Endpoint to get all products.
         * Responds to GET /products
         * @return a Flux<Product> which will be serialized as a JSON array.
         */
        @GetMapping // <-- Checks this is here!
        public Flux<Product> getAllProducts() {
            return productService.findAll();
        }
    
        /**
         * Endpoint to get a single product by its ID.
         * Responds to GET /products/{id}
         * @param id The product ID from the path variable.
         * @return a Mono<Product> which will be serialized as a JSON object.
         * We can also return a Mono<ResponseEntity<Product>> for more control
         * over the HTTP response (e.g., sending a 404).
         */
        @GetMapping("/{id}") // <-- Checks this is here!
        public Mono<ResponseEntity<Product>> getProductById(@PathVariable int id) {
            return productService.findById(id)
                    .map(product -> ResponseEntity.ok(product)) // If found, wrap in 200 OK
                    .defaultIfEmpty(ResponseEntity.notFound().build()); // If empty, return 404 Not Found
        }
    }
    

