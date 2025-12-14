import { WishlistItem } from "@/types/wishlist";
import { siteConfig } from "@/config/siteConfig";
import { getAccessToken } from "@/hooks/use-auth";

export const getWishlist = async (): Promise<WishlistItem[]> => {
  try {
    const API_BASE_URL = siteConfig.backendUrl;

    const response = await fetch(`${API_BASE_URL}/api/wishlist/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch wishlist");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred while fetching wishlist.");
  }
};

export const addToWishlist = async ({
  productId,
}: {
  productId: number;
}): Promise<WishlistItem> => {
  try {
    // Add validation to ensure productId is provided and is a number
    if (!productId || typeof productId !== "number") {
      throw new Error("Product ID is required and must be a number");
    }

    const API_BASE_URL = siteConfig.backendUrl;

    const response = await fetch(`${API_BASE_URL}/api/wishlist/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({ product_id: productId }),
    });

    return response.json();
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred while adding to wishlist.");
  }
};

export const removeFromWishlist = async ({
  wishlistItemId,
}: {
  wishlistItemId: number;
}): Promise<void> => {
  try {
    const API_BASE_URL = siteConfig.backendUrl;

    const response = await fetch(
      `${API_BASE_URL}/api/wishlist/${wishlistItemId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );


    // Check for 204 No Content response
    if (response.status !== 204) {
      throw new Error("Unexpected response status when removing from wishlist");
    }
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "An unexpected error occurred while removing from wishlist."
    );
  }
};
