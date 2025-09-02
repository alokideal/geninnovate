import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ProductCard from "./ProductCard";
import { products, productCategories } from "@/data/products";
import { Search } from "lucide-react";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.benefits.some(benefit => benefit.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete Product Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Browse our entire range of premium organic herbal products. All items are FSSAI certified and sourced directly from rural India.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            size="sm"
          >
            All Products ({products.length})
          </Button>
          {productCategories.map((category) => {
            const categoryProducts = products.filter(p => p.category === category.id);
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"} 
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
              >
                {category.name} ({categoryProducts.length})
              </Button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="text-sm">
            Showing {filteredProducts.length} products
            {searchQuery && ` for "${searchQuery}"`}
          </Badge>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                image={product.image}
                title={product.name}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
                benefits={product.benefits}
                rating={product.rating}
                inStock={product.inStock}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No products found matching your criteria</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
        
        {/* Product Categories Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 bg-muted/30 rounded-lg p-8">
          {productCategories.map((category, index) => {
            const categoryProducts = products.filter(p => p.category === category.id);
            return (
              <div key={category.id} className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Badge variant="outline">{categoryProducts.length} Products Available</Badge>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;