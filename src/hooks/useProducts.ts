import { useState, useMemo } from "react";
import { Product, Category } from "@/types";
import { products } from "@/data/products";

export const useProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("Все");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "Все" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return {
    products: filteredProducts,
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
  };
};
