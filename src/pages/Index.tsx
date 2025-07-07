import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { CartSheet } from "@/components/CartSheet";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts";
import { categories } from "@/data/products";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const {
    products,
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
  } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartItemsCount={getTotalItems()}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <HeroSection />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ProductGrid products={products} onAddToCart={addToCart} />

      <CartSheet
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        totalPrice={getTotalPrice()}
        totalItems={getTotalItems()}
      />

      <HowItWorks />

      <Footer />
    </div>
  );
};

export default Index;
