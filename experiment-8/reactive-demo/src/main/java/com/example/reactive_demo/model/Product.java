package com.example.reactivedemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a Product.
 * @Data generates getters, setters, toString, equals, and hashCode.
 * @AllArgsConstructor generates a constructor with all fields.
 * @NoArgsConstructor generates a default no-argument constructor.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
	
	private int id;
	private String name;
	private double price;

}