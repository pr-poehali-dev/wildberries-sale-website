import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { CartItem } from "@/types";

interface CartSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  totalPrice: number;
  totalItems: number;
}

export const CartSheet = ({
  isOpen,
  onOpenChange,
  cart,
  onUpdateQuantity,
  onRemoveFromCart,
  totalPrice,
  totalItems,
}: CartSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Корзина ({totalItems})</SheetTitle>
          <SheetDescription>
            Проверьте товары перед оформлением заказа
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Корзина пуста</p>
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
                          onUpdateQuantity(item.id, item.quantity - 1)
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
                          onUpdateQuantity(item.id, item.quantity + 1)
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
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Icon name="Trash2" className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between items-center font-semibold text-lg">
                <span>Итого:</span>
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Оформить заказ
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
