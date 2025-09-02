import Header from "@/components/Header";
import AllProducts from "@/components/AllProducts"; 
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AllProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Products;