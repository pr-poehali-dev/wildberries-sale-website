import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
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
  );
};
