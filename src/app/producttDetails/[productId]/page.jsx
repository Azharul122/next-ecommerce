import ProductDetails from "@/app/Components/ProductDetails/ProductDetails";
import axios from "axios";
const getSingleProductData = async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${id}`
    );
    return data?.product;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

const ProductDetail = async ({ params }) => {
  const data = await getSingleProductData(params?.productId);

  return <ProductDetails product={data}></ProductDetails>;
};

export default ProductDetail;
