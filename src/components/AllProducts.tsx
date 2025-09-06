import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, productCategories, getProductsByCategory } from "@/data/products";
import ProductCardEnhanced from "./ProductCardEnhanced";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid3X3, List, SortAsc, SortDesc, Leaf } from "lucide-react";

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // Filter and sort products
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

  const filteredAndSortedProducts = (() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseInt(a.price.replace(/[₹,]/g, "")) - parseInt(b.price.replace(/[₹,]/g, ""));
        case "price-high":
          return parseInt(b.price.replace(/[₹,]/g, "")) - parseInt(a.price.replace(/[₹,]/g, ""));
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  })();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-sm">
            <Leaf className="w-4 h-4 mr-2" />
            Complete Collection
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-luxury">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Browse our complete collection of premium organic herbal products with detailed information, 
            weight options, and comprehensive benefits for your wellness journey.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-gradient-card rounded-xl p-8 mb-12 space-y-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products, benefits, or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 luxury-border"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "luxury-gradient text-white" : "luxury-border"}
              >
                All Products
              </Button>
              {productCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "luxury-gradient text-white" : "luxury-border"}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 luxury-border">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`rounded-none ${viewMode === "grid" ? "luxury-gradient text-white" : ""}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`rounded-none ${viewMode === "list" ? "luxury-gradient text-white" : ""}`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span>Showing {filteredAndSortedProducts.length} of {products.length} products</span>
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="ml-2">
                  {productCategories.find(cat => cat.id === selectedCategory)?.name}
                </Badge>
              )}
            </div>
            {searchTerm && (
              <Badge variant="outline" className="luxury-border">
                Search: "{searchTerm}"
              </Badge>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === "grid" 
            ? "md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1 max-w-4xl mx-auto"
        }`}>
          {filteredAndSortedProducts.map((product) => (
            <ProductCardEnhanced 
              key={product.id} 
              product={product}
              showDetails={viewMode === "list"}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🌿</div>
            <h3 className="text-3xl font-bold text-foreground mb-4">No products found</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filter criteria to find what you're looking for.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              size="lg"
              className="luxury-gradient text-white"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;