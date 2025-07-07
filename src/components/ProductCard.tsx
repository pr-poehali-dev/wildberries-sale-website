import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
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
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
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
          onClick={() => onAddToCart(product)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В корзину
        </Button>
      </CardContent>
    </Card>
  );
};
