import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  discount: number;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    "Все",
    "Электроника",
    "Одежда",
    "Дом и сад",
    "Спорт",
    "Красота",
    "Книги",
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Смартфон Samsung Galaxy A54",
      price: 25990,
      originalPrice: 29990,
      image: "/img/fdd4805c-f238-44b6-89e2-7dfef42b4e90.jpg",
      category: "Электроника",
      rating: 4.8,
      reviews: 1247,
      discount: 13,
    },
    {
      id: 2,
      name: "Беспроводные наушники Sony WH-1000XM4",
      price: 18990,
      originalPrice: 22990,
      image: "/img/0e7fba7e-8285-4b69-b5a7-a9541cf2d369.jpg",
      category: "Электроника",
      rating: 4.9,
      reviews: 892,
      discount: 17,
    },
    {
      id: 3,
      name: "Кофемашина Delonghi Magnifica S",
      price: 39990,
      originalPrice: 45990,
      image: "/img/04b8dac7-d350-4fec-9dc6-7dfaf1977de8.jpg",
      category: "Дом и сад",
      rating: 4.7,
      reviews: 543,
      discount: 13,
    },
    {
      id: 4,
      name: "Спортивный костюм Nike Dri-FIT",
      price: 8990,
      originalPrice: 12990,
      image: "/img/04b8dac7-d350-4fec-9dc6-7dfaf1977de8.jpg",
      category: "Спорт",
      rating: 4.6,
      reviews: 324,
      discount: 31,
    },
    {
      id: 5,
      name: "Умные часы Apple Watch SE",
      price: 32990,
      originalPrice: 36990,
      image: "/img/fdd4805c-f238-44b6-89e2-7dfef42b4e90.jpg",
      category: "Электроника",
      rating: 4.8,
      reviews: 1876,
      discount: 11,
    },
    {
      id: 6,
      name: "Набор косметики L'Oreal Paris",
      price: 2990,
      originalPrice: 4990,
      image: "/img/0e7fba7e-8285-4b69-b5a7-a9541cf2d369.jpg",
      category: "Красота",
      rating: 4.5,
      reviews: 678,
      discount: 40,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Store" className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-gray-900">
                  WB Market
                </span>
              </div>
            </div>

            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="relative">
                    <Icon name="ShoppingCart" className="h-4 w-4" />
                    {getTotalItems() > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange-500">
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина ({getTotalItems()})</SheetTitle>
                    <SheetDescription>
                      Проверьте товары перед оформлением заказа
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {cart.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">
                        Корзина пуста
                      </p>
                    ) : (
                      <>
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-16 w-16 object-cover rounded-md"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 truncate">
                                {item.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {item.price.toLocaleString()} ₽
                              </p>
                              <div className="flex items-center space-x-2 mt-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="h-8 w-8 p-0"
                                >
                                  <Icon name="Minus" className="h-3 w-3" />
                                </Button>
                                <span className="text-sm font-medium">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="h-8 w-8 p-0"
                                >
                                  <Icon name="Plus" className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Icon name="Trash2" className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <Separator />
                        <div className="flex justify-between items-center font-semibold text-lg">
                          <span>Итого:</span>
                          <span>{getTotalPrice().toLocaleString()} ₽</span>
                        </div>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                          Оформить заказ
                        </Button>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Лучшие товары с Wildberries
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Мы покупаем и доставляем товары прямо к вашей двери
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" className="h-5 w-5" />
              <span>Быстрая доставка</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-5 w-5" />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CreditCard" className="h-5 w-5" />
              <span>Безопасная оплата</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-orange-500 hover:bg-orange-600"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Популярные товары
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      -{product.discount}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-3">
                    {product.category}
                  </CardDescription>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                      <span className="text-sm font-medium ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {product.price.toLocaleString()} ₽
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => addToCart(product)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                    корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Выберите товар
              </h3>
              <p className="text-gray-600">
                Найдите нужный товар в нашем каталоге или воспользуйтесь поиском
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="ShoppingCart" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Оформите заказ
              </h3>
              <p className="text-gray-600">
                Добавьте товары в корзину и укажите адрес доставки
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Получите доставку
              </h3>
              <p className="text-gray-600">
                Мы покупаем товар на Wildberries и доставляем его к вам
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Store" className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">WB Market</span>
              </div>
              <p className="text-gray-400">
                Лучшие товары с Wildberries с доставкой прямо к вашей двери
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@wbmarket.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Доставка</h4>
              <div className="space-y-2 text-gray-400">
                <p>• По всей России</p>
                <p>• Сроки: 3-7 дней</p>
                <p>• Бесплатно от 2000 ₽</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-gray-400">
                <p>• О нас</p>
                <p>• Условия работы</p>
                <p>• Возврат товара</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 WB Market. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
