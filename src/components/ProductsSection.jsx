import { ChevronDown } from "lucide-react";
import ProductCard from "./ProductCard ";

const ProductsSection = ({ productFilter, setProductFilter }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Products</h2>
        <div className="relative">
          <button className="flex items-center text-sm text-green-600 border border-green-600 rounded-md px-3 py-1">
            {productFilter}
            <ChevronDown className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="neutral" />
        <ProductCard sentiment="negative" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
        <ProductCard sentiment="positive" />
      </div>
    </div>
  );
};

export default ProductsSection;
