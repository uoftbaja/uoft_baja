import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ImageGallery />
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            The U of T Baja Team aims to give students of many disciplines an
            avenue to hone their skills in a supportive environment through
            designing, building and competing in the{" "}
            <a
              href="https://www.bajasae.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Baja SAE competition
            </a>{" "}
            with an entirely student designed vehicle. The U of T Baja team was
            originally founded in 2012 and competed for almost 10 years before
            the team dissolved. In the fall of 2024 the team was restarted from
            scratch and is actively being rebuilt. Our goal is to have an
            entirely rebuilt car to compete with by Spring 2026.
          </p>
          <Link
            href="/about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
