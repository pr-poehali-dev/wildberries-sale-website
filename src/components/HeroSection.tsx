import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  return (
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
  );
};
