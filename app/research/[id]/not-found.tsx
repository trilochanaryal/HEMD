import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Research Not Found</h2>
      <p className="text-gray-600 mb-4">
        The research item you're looking for doesn't exist.
      </p>
      <Link
        href="/research"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Back to Research
      </Link>
    </div>
  );
}