"use client"

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const dummyData = Array.from({ length: 10 }, (_, i) => ({
  profile: {
    firstname: "Amandy",
    lastname: "Rousure",
    HireRating: 5,
    profilePhoto: "/happiness_variant.png",
  },
  project: {
    projectTitle: `Make Birthday Video ${i + 1}`,
    projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bidPrice: "$100",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isExpired: false,
  },
}));

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // How many cards to show per view

  const hasPrevious = currentIndex > 0;
  const hasMore = currentIndex + visibleCount < dummyData.length;

  const prevSlide = () => {
    if (hasPrevious) setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (hasMore) setCurrentIndex((prev) => prev + 1);
  };

  const visibleItems = dummyData.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevSlide}
          disabled={!hasPrevious}
          className="p-2 bg-gray-200 rounded disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={!hasMore}
          className="p-2 bg-gray-200 rounded disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-300">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-40 bg-gray-100">
              <Image
                src="/next.svg"
                alt="Project Media"
                className="w-full h-full object-cover"
                width={12}
                height={36}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Image
                  src={item.profile.profilePhoto}
                  alt={item.profile.firstname}
                  className="rounded-full object-cover"
                  width={20}
                  height={20}
                />
                <div className="text-sm font-medium">
                  {item.profile.firstname} {item.profile.lastname}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1">
                {item.project.projectTitle}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {item.project.projectDesc}
              </p>
              <div className="text-sm font-bold text-blue-600">
                Bid Price: {item.project.bidPrice}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
