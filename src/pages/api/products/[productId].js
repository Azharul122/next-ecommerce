import Products from "@/app/Backend/Models/products";
import dbConnect from "@/app/Backend/config/dbConnect";

export default async function singleProduct(req, res) {
    await dbConnect()
    const productId = req.query.productId;


    if (productId) {
        // If product ID is provided, retrieve a single product
        const product = await Products.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found.',
            });
        }

        return res.status(200).json({
            message: 'Product fetched successfully',
            product,
        });
    }
}