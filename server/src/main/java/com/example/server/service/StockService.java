package com.example.server.service;

import com.example.server.model.Stock;
import com.example.server.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    // Add a new stock
    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    // Update an existing stock
    public Stock updateStock(Long id, Stock stock) {
        if (stockRepository.existsById(id)) {
            stock.setId(id);
            return stockRepository.save(stock);
        }
        return null; // Handle not found
    }

    // Delete a stock
    public boolean deleteStock(Long id) {
        if (stockRepository.existsById(id)) {
            stockRepository.deleteById(id);
            return true;
        }
        return false; // Handle not found
    }

    // Fetch all stocks
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    // Calculate portfolio value
    public double calculatePortfolioValue() {
        List<Stock> stocks = stockRepository.findAll();
        double totalValue = 0;
        for (Stock stock : stocks) {
            totalValue += stock.getQuantity() * stock.getBuyPrice();
        }
        return totalValue;
    }
}
