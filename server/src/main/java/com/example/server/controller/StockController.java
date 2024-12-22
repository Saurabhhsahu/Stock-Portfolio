package com.example.server.controller;

import com.example.server.model.Stock;
import com.example.server.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    // Add a new stock
    @PostMapping
    public ResponseEntity<Stock> addStock(@RequestBody Stock stock) {
        Stock createdStock = stockService.addStock(stock);
        return new ResponseEntity<>(createdStock, HttpStatus.CREATED);
    }

    // Update an existing stock
    @PutMapping("/{id}")
    public ResponseEntity<Stock> updateStock(@PathVariable Long id, @RequestBody Stock stock) {
        Stock updatedStock = stockService.updateStock(id, stock);
        if (updatedStock != null) {
            return new ResponseEntity<>(updatedStock, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Delete a stock
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStock(@PathVariable Long id) {
        boolean isDeleted = stockService.deleteStock(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Get all stocks
    @GetMapping
    public ResponseEntity<List<Stock>> getAllStocks() {
        List<Stock> stocks = stockService.getAllStocks();
        return new ResponseEntity<>(stocks, HttpStatus.OK);
    }

    // Calculate portfolio value
    @GetMapping("/portfolio-value")
    public ResponseEntity<Double> calculatePortfolioValue() {
        double portfolioValue = stockService.calculatePortfolioValue();
        return new ResponseEntity<>(portfolioValue, HttpStatus.OK);
    }
}
