import { useRouter } from "next/router";

function ReviewDetails() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-blue-600">
        Review <span className="text-yellow-500">{reviewId}</span> for Product{" "}
        <span className="text-yellow-500">{productId}</span>
      </h1>
    </div>
  );
}

export default ReviewDetails;
