import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    const product = getProductById(request.query.id);
    if (!product) {
      response.status(404).json({ message: "Product not found" });
      return;
    }
    response.status(200).json(product);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
