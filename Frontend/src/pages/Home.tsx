import { Button } from "@/components/ui/button"
import Navbar from "../components/layout/Navbar"
import { Star, ShoppingCart, Zap, Truck, Shield, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const Home = () => {
  // Mock data for products
  const topProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299.99",
      originalPrice: "$399.99",
      category: "Electronics",
      image: "🎧",
      rating: 4.8,
      reviews: 328,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Luxury Skincare Set",
      price: "$89.99",
      originalPrice: "$129.99",
      category: "Beauty",
      image: "💄",
      rating: 4.9,
      reviews: 512,
      badge: "Trending",
    },
    {
      id: 3,
      name: "Smart Coffee Maker",
      price: "$159.99",
      originalPrice: "$199.99",
      category: "Appliances",
      image: "☕",
      rating: 4.7,
      reviews: 245,
      badge: "New",
    },
    {
      id: 4,
      name: "Ultra-Fast Phone Charger",
      price: "$49.99",
      originalPrice: "$79.99",
      category: "Electronics",
      image: "🔌",
      rating: 4.6,
      reviews: 789,
      badge: "Best Deal",
    },
    {
      id: 5,
      name: "Natural Organic Shampoo",
      price: "$24.99",
      originalPrice: "$34.99",
      category: "Beauty",
      image: "🧴",
      rating: 4.8,
      reviews: 425,
      badge: "Eco-Friendly",
    },
    {
      id: 6,
      name: "Stainless Steel Blender",
      price: "$129.99",
      originalPrice: "$179.99",
      category: "Appliances",
      image: "🔪",
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
    },
  ];

  const categories = [
    {
      name: "Electronics",
      icon: "📱",
      description: "Latest gadgets & devices",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Beauty & Personal Care",
      icon: "💄",
      description: "Skincare & cosmetics",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Home Appliances",
      icon: "🏠",
      description: "Smart home devices",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Fashion",
      icon: "👔",
      description: "Clothing & accessories",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Sports & Outdoors",
      icon: "⚽",
      description: "Athletic gear",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Books & Media",
      icon: "📚",
      description: "Digital & physical",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Checkout",
      description: "100% encrypted transactions",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "2-3 business days",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Best Quality",
      description: "Verified products only",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Your Next Favorite Product
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Shop from thousands of premium products with guaranteed quality, fast shipping, and unbeatable prices.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Start Shopping
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="text-8xl animate-bounce">🛍️</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Explore our wide range of premium products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index}>
                <Card className="h-48 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className={`w-full h-full bg-gradient-to-br ${category.color} p-8 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/90">{category.description}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-white font-semibold">
                        Explore <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">Top Products</h2>
              <p className="text-gray-600 text-lg">Best sellers and customer favorites</p>
            </div>
            <Button variant="outline" className="gap-2">
              View All <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden bg-gray-100 h-64 flex items-center justify-center">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
                <button className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ShoppingCart size={20} />
                </button>
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 font-medium mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{product.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="ml-auto text-green-600 font-semibold">
                    {Math.round(
                      ((parseFloat(product.originalPrice.slice(1)) -
                        parseFloat(product.price.slice(1))) /
                        parseFloat(product.originalPrice.slice(1))) *
                        100
                    )}
                    % off
                  </span>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 my-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Special Offer Just for You!</h2>
          <p className="text-xl text-white/90 mb-8">
            Get 20% off on your first purchase with code <span className="font-bold bg-white/20 px-3 py-1 rounded">WELCOME20</span>
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive deals, new arrivals, and special offers.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ShopHub</h3>
              <p className="text-sm">Your one-stop destination for premium products at unbeatable prices.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm">
              <p>&copy; 2026 ShopHub. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">Facebook</a>
                <a href="#" className="hover:text-white transition">Twitter</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;