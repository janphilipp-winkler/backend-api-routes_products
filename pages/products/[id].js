import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const {
    data: product,
    isLoading,
    error,
  } = useSWR(router.query.id ? `/api/products/${router.query.id}` : null);

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>NOT FOUND</p>;
  }

  const { name, description, price, currency, category } = product;

  return (
    <>
      <Link href={"/products"}>back to overview</Link>
      <h2>
        {name} ({category}, {description}, {price}
        {currency})
      </h2>
    </>
  );
}
