import React from 'react';
import { useUserContext } from '../context/UserContext';

function MyStocks() {
  const { stocks, setStocks } = useUserContext();

  const handleEdit = (id) => {
    // Placeholder for edit functionality
    alert(`Edit stock with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Remove stock by filtering it out of the array
    const updatedStocks = stocks.filter((stock) => stock.id !== id);
    setStocks(updatedStocks);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Stocks</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {stocks.map((stock) => (
          <div
            key={stock.id}
            className="bg-white shadow rounded-lg p-4 border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{stock.name}</h2>
              <p className="text-gray-600">
                <strong>Ticker:</strong> {stock.ticker}
              </p>
              <p className="text-gray-600">
                <strong>Quantity:</strong> {stock.quantity}
              </p>
              <p className="text-gray-600">
                <strong>Buy Price:</strong> ${stock.buyPrice.toFixed(2)}
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleEdit(stock.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(stock.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyStocks;
