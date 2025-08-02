import {
  IconBarcode,
  IconCalculator,
  IconCash,
  IconCheck,
  IconCreditCard,
  IconFilter,
  IconMinus,
  IconPercentage,
  IconPlus,
  IconPrinter,
  IconSearch,
  IconShoppingCart,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";

// Enhanced sample products for demo
const sampleProducts = [
  {
    id: 1,
    name: "Coca Cola 330ml",
    price: 150,
    barcode: "1234567890",
    category: "Beverages",
    stock: 45,
    image: "🥤",
    description: "Refreshing cola drink",
  },
  {
    id: 2,
    name: "White Bread Loaf",
    price: 120,
    barcode: "2345678901",
    category: "Bakery",
    stock: 23,
    image: "🍞",
    description: "Fresh baked bread",
  },
  {
    id: 3,
    name: "Fresh Milk 1L",
    price: 300,
    barcode: "3456789012",
    category: "Dairy",
    stock: 31,
    image: "🥛",
    description: "Full cream milk",
  },
  {
    id: 4,
    name: "Basmati Rice 5kg",
    price: 1200,
    barcode: "4567890123",
    category: "Groceries",
    stock: 12,
    image: "🍚",
    description: "Premium basmati rice",
  },
  {
    id: 5,
    name: "Chicken Breast 1kg",
    price: 800,
    barcode: "5678901234",
    category: "Meat",
    stock: 8,
    image: "🍗",
    description: "Fresh chicken breast",
  },
  {
    id: 6,
    name: "Hand Soap",
    price: 80,
    barcode: "6789012345",
    category: "Personal Care",
    stock: 67,
    image: "🧼",
    description: "Antibacterial soap",
  },
  {
    id: 7,
    name: "Orange Juice 1L",
    price: 250,
    barcode: "7890123456",
    category: "Beverages",
    stock: 19,
    image: "🧃",
    description: "100% pure orange juice",
  },
  {
    id: 8,
    name: "Chocolate Cake",
    price: 450,
    barcode: "8901234567",
    category: "Bakery",
    stock: 6,
    image: "🍰",
    description: "Rich chocolate cake",
  },
  {
    id: 9,
    name: "Greek Yogurt",
    price: 180,
    barcode: "9012345678",
    category: "Dairy",
    stock: 24,
    image: "🥛",
    description: "Creamy Greek yogurt",
  },
  {
    id: 10,
    name: "Pasta 500g",
    price: 95,
    barcode: "0123456789",
    category: "Groceries",
    stock: 35,
    image: "🍝",
    description: "Italian pasta",
  },
  {
    id: 11,
    name: "Salmon Fillet 1kg",
    price: 1500,
    barcode: "1122334455",
    category: "Meat",
    stock: 5,
    image: "🐟",
    description: "Fresh salmon fillet",
  },
  {
    id: 12,
    name: "Shampoo 400ml",
    price: 320,
    barcode: "2233445566",
    category: "Personal Care",
    stock: 18,
    image: "🧴",
    description: "Moisturizing shampoo",
  },
];

const categories = [
  "All",
  "Beverages",
  "Bakery",
  "Dairy",
  "Groceries",
  "Meat",
  "Personal Care",
];

const paymentMethods = [
  { id: "cash", name: "Cash", icon: IconCash, color: "bg-green-500" },
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: IconCreditCard,
    color: "bg-blue-500",
  },
  {
    id: "mobile",
    name: "Mobile Payment",
    icon: IconBarcode,
    color: "bg-purple-500",
  },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
}

interface Transaction {
  id: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  paymentMethod: string;
  customer?: Customer;
  timestamp: Date;
}

export default function POSInterface() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // State management
  const [cart, setCart] = useState<CartItem[]>([]);
  const [barcode, setBarcode] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(8); // 8% VAT
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [customer] = useState<Customer | null>(null);
  const [lastTransaction, setLastTransaction] = useState<Transaction | null>(
    null
  );
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Enhanced functions
  const addToCart = (product: (typeof sampleProducts)[0]) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, image: product.image }];
    });
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Advanced calculations
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discountPercentage) / 100;
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = (taxableAmount * taxPercentage) / 100;
  const total = taxableAmount + taxAmount;

  // Search and filter functions
  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.barcode.includes(searchTerm);
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBarcodeSearch = () => {
    const product = sampleProducts.find((p) => p.barcode === barcode);
    if (product) {
      addToCart(product);
      setBarcode("");
    } else {
      // Show error feedback
      alert("Product not found!");
    }
  };

  const handlePayment = async (paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod);
    setIsProcessingPayment(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create transaction
    const transaction: Transaction = {
      id: `TXN-${Date.now()}`,
      items: [...cart],
      subtotal,
      discount: discountAmount,
      tax: taxAmount,
      total,
      paymentMethod,
      customer: customer || undefined,
      timestamp: new Date(),
    };

    setLastTransaction(transaction);
    setCart([]);
    setDiscountPercentage(0);
    setIsProcessingPayment(false);
    setShowPaymentModal(false);
    setShowReceiptModal(true);
  };

  const clearCart = () => {
    setCart([]);
    setDiscountPercentage(0);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="demo-area"
        className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Interactive POS Demo
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <FormattedMessage id="demo.posInterface.Title" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
                <FormattedMessage id="demo.posInterface.Title2" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <FormattedMessage id="demo.posInterface.subtitle" />
            </p>
          </motion.div>

          {/* Enhanced POS Interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[700px]">
              {/* Enhanced Products Panel */}
              <div className="lg:col-span-2 p-6 border-r border-gray-200">
                {/* Search and Filter Section */}
                <div className="mb-6 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="flex-1 relative">
                      <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search products or scan barcode..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A65FC] focus:border-transparent"
                      />
                    </div>

                    {/* Category Filter */}
                    <div className="relative">
                      <IconFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A65FC] appearance-none bg-white min-w-[150px]"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Barcode Scanner */}
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <IconBarcode className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Scan barcode here..."
                        value={barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A65FC]"
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleBarcodeSearch()
                        }
                      />
                    </div>
                    <button
                      onClick={handleBarcodeSearch}
                      className="px-6 py-2 bg-[#0A65FC] text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Enhanced Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addToCart(product)}
                      className="p-4 border border-gray-200 rounded-xl hover:border-[#0A65FC] hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="w-full h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 flex items-center justify-center text-2xl group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                        {product.image}
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                        {product.name}
                      </h4>
                      <p className="text-[#0A65FC] font-bold text-lg">
                        LKR {product.price.toLocaleString()}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-xs text-gray-500">
                          {product.category}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${product.stock > 20
                              ? "bg-green-100 text-green-700"
                              : product.stock > 5
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                        >
                          {product.stock} left
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Cart Panel */}
              <div className="p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Current Sale
                  </h3>
                  {cart.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Cart Items */}
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <IconShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">No items in cart</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-lg">
                            {item.image}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              LKR {item.price.toLocaleString()} each
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            <IconMinus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            <IconPlus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 ml-2 transition-colors"
                          >
                            <IconTrash className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Discount and Tax Section */}
                {cart.length > 0 && (
                  <div className="space-y-3 mb-4 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center gap-2">
                      <IconPercentage className="w-4 h-4 text-gray-500" />
                      <label className="text-sm font-medium text-gray-700">
                        Discount %
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={discountPercentage}
                        onChange={(e) =>
                          setDiscountPercentage(Number(e.target.value))
                        }
                        className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#0A65FC]"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <IconCalculator className="w-4 h-4 text-gray-500" />
                      <label className="text-sm font-medium text-gray-700">
                        Tax %
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="25"
                        value={taxPercentage}
                        onChange={(e) =>
                          setTaxPercentage(Number(e.target.value))
                        }
                        className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#0A65FC]"
                      />
                    </div>
                  </div>
                )}

                {/* Bill Summary */}
                {cart.length > 0 && (
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>LKR {subtotal.toLocaleString()}</span>
                    </div>
                    {discountPercentage > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Discount ({discountPercentage}%):</span>
                        <span>-LKR {discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span>Tax ({taxPercentage}%):</span>
                      <span>LKR {taxAmount.toLocaleString()}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total:</span>
                      <span className="text-2xl font-bold text-[#0A65FC]">
                        LKR {total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Payment Button */}
                <button
                  disabled={cart.length === 0}
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full mt-4 py-3 bg-[#0A65FC] text-white rounded-lg font-bold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <IconCash className="w-5 h-5 mr-2" />
                  Process Payment
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Payment Method
                </h3>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <IconX className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {paymentMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() =>
                        !isProcessingPayment && handlePayment(method.id)
                      }
                      disabled={isProcessingPayment}
                      className={`w-full p-4 border-2 rounded-xl flex items-center space-x-3 transition-all ${selectedPaymentMethod === method.id &&
                          isProcessingPayment
                          ? "border-[#0A65FC] bg-blue-50"
                          : "border-gray-200 hover:border-[#0A65FC] hover:bg-blue-50"
                        } ${isProcessingPayment
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                        }`}
                    >
                      <div
                        className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center text-white`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-gray-900">
                          {method.name}
                        </div>
                        {selectedPaymentMethod === method.id &&
                          isProcessingPayment && (
                            <div className="text-sm text-blue-600">
                              Processing...
                            </div>
                          )}
                      </div>
                      {selectedPaymentMethod === method.id &&
                        isProcessingPayment && (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0A65FC]"></div>
                        )}
                    </button>
                  );
                })}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Amount:</span>
                  <span className="text-[#0A65FC]">
                    LKR {total.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Receipt Modal */}
      <AnimatePresence>
        {showReceiptModal && lastTransaction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Payment Successful!
                </h3>
                <p className="text-gray-600">
                  Transaction completed successfully
                </p>
              </div>

              {/* Receipt */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-6 bg-gray-50">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-lg">EzyMart POS</h4>
                  <p className="text-sm text-gray-600">
                    Receipt #{lastTransaction.id}
                  </p>
                  <p className="text-xs text-gray-500">
                    {lastTransaction.timestamp.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {lastTransaction.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span>
                        LKR {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <hr className="border-dashed my-3" />

                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>LKR {lastTransaction.subtotal.toLocaleString()}</span>
                  </div>
                  {lastTransaction.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount:</span>
                      <span>
                        -LKR {lastTransaction.discount.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>LKR {lastTransaction.tax.toLocaleString()}</span>
                  </div>
                  <hr className="border-dashed my-2" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>LKR {lastTransaction.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed text-center">
                  <p className="text-xs text-gray-500">
                    Payment Method:{" "}
                    {
                      paymentMethods.find(
                        (m) => m.id === lastTransaction.paymentMethod
                      )?.name
                    }
                  </p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowReceiptModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 py-3 bg-[#0A65FC] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center">
                  <IconPrinter className="w-4 h-4 mr-2" />
                  Print
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
