package com.example.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String stockName;
    private String ticker;
    private int quantity;
    private double buyPrice;

    // Constructors, getters, setters, and toString method

    public Stock() {
    }

    public Stock(String stockName, String ticker, int quantity, double buyPrice) {
        this.stockName = stockName;
        this.ticker = ticker;
        this.quantity = quantity;
        this.buyPrice = buyPrice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getBuyPrice() {
        return buyPrice;
    }

    public void setBuyPrice(double buyPrice) {
        this.buyPrice = buyPrice;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "id=" + id +
                ", stockName='" + stockName + '\'' +
                ", ticker='" + ticker + '\'' +
                ", quantity=" + quantity +
                ", buyPrice=" + buyPrice +
                '}';
    }
}
