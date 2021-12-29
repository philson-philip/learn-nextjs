import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-green-600">
        Product <span className="text-yellow-500">{productId}</span> Details
        Page
      </h1>
    </div>
  );
}

export default ProductDetails;
