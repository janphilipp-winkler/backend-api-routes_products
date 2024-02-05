import Link from "next/link";
import useSWR from "swr";

export default function HomePage() {
  const { data: products, isLoading } = useSWR("/api/products");

  if (!products || isLoading) {
    return "Loading...";
  }

  return (
    <div>
      <h1>Welcome to Next.js API Routes AKA FISH PARADISE</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
