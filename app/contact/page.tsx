import ContactInfoCard from "@/components/ContactInfoCard";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-background dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-center text-primary dark:text-primary">
          Contact Us
        </h1>

        <ContactInfoCard />
{/* 
        <div className="text-center mt-8">
          <Link
            href="mailto:research@kuleuven.be"
            className="text-primary hover:underline text-lg dark:text-primary-dark"
          >
            Email us directly
          </Link> */}
        {/* </div> */}
      </div>
    </div>
  );
}