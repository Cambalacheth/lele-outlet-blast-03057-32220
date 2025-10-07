import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  discount: string;
  products: string;
}

const CategoryCard = ({ icon: Icon, title, discount, products }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-1 text-2xl font-black text-primary">{discount}</p>
        <p className="text-sm text-muted-foreground">{products}</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
