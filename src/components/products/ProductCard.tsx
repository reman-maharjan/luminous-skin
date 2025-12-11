"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { Product } from "@/data/products";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-3">
        {/* Image Container */}
        <Link href={`/product/${product.id}`} className="block">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Discount Badge */}
            {discount && (
              <span className="absolute top-3 left-3 px-2 py-1 bg-foreground text-background text-xs font-medium rounded-lg">
                -{discount}%
              </span>
            )}

            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsWishlisted(!isWishlisted);
              }}
              className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isWishlisted 
                  ? "bg-foreground text-background" 
                  : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-card"
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
            </button>

            {/* Add to Cart Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3 right-3 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
          </div>
        </Link>

        {/* Content */}
        <Link href={`/product/${product.id}`} className="block space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.brand}
          </p>
          <h3 className="font-medium text-foreground leading-snug line-clamp-2 group-hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 pt-1">
            <span className="font-semibold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </Link>
      </div>
    </motion.div>
  );
};
