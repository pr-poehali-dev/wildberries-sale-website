import Icon from "@/components/ui/icon";

export const HowItWorks = () => {
  return (
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
  );
};
