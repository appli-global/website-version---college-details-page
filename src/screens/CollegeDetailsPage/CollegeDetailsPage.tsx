import React from "react";
import { BookingDetailsSection } from "./sections/BookingDetailsSection/BookingDetailsSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { UserProfileSection } from "./sections/UserProfileSection";

export const CollegeDetailsPage = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="39:14888"
    >
      <div className="bg-white w-full max-w-[1440px] relative">
        <div className="relative w-full">
          <UserProfileSection />

          <div className="flex w-full">
            <div className="w-[14%]"></div>
            <div className="w-[34%]">
              <ReviewsSection />
            </div>
            <div className="w-[4%]"></div>
            <div className="w-[34%]">
              <ImageGallerySection />
            </div>
            <div className="w-[14%]"></div>
          </div>

          <div className="flex w-full">
            <div className="w-[14%]"></div>
            <div className="w-[72%]">
              <BookingDetailsSection />
            </div>
            <div className="w-[14%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
