import { Button } from "@/components/ui/button";
import { Category } from "@/types";

interface CategoryFilterProps {
  categories: readonly Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
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
  );
};
