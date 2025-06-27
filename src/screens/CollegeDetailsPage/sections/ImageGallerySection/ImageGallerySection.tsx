import { HeartIcon, ShareIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ImageGallerySection = (): JSX.Element => {
  // Gallery images data
  const galleryImages = [
    {
      url: "https://c.animaapp.com/mceait1kxMyQ7N/img/frame-1430104093.svg",
      className: "relative flex-1 grow h-[340px] bg-cover bg-[50%_50%]",
    },
    {
      url: "https://c.animaapp.com/mceait1kxMyQ7N/img/frame-1430104094.svg",
      className:
        "relative flex-1 self-stretch w-full grow bg-cover bg-[50%_50%]",
    },
    {
      url: "https://c.animaapp.com/mceait1kxMyQ7N/img/frame-1430104095.png",
      className:
        "flex flex-col items-end justify-end gap-2.5 p-4 relative flex-1 self-stretch w-full grow bg-cover bg-[50%_50%]",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-10 pt-14 pb-0 px-0">
      {/* Image Gallery */}
      <div className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto] rounded-2xl overflow-hidden">
        <div
          className={galleryImages[0].className}
          style={{ backgroundImage: `url(${galleryImages[0].url})` }}
        />

        <div className="flex flex-col items-start gap-1.5 relative flex-1 self-stretch grow">
          <div
            className={galleryImages[1].className}
            style={{ backgroundImage: `url(${galleryImages[1].url})` }}
          />

          <div
            className="flex flex-col items-end justify-end gap-2.5 p-4 relative flex-1 self-stretch w-full grow"
            style={{
              background: `url(${galleryImages[2].url}) 50% 50% / cover, linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(217,217,217,1) 100%)`,
            }}
          >
            <Button
              variant="outline"
              className="h-[34px] items-center justify-center gap-1.5 pl-2.5 pr-3.5 py-2 rounded border-[0.5px] border-solid border-[#00000014] shadow-[inset_0px_0px_4px_#0000001a,2px_2px_10px_#00000026] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] bg-[linear-gradient(53deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0.95)_100%)]"
            >
              <img
                className="w-4 h-4"
                alt="Gallery icon"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-category.svg"
              />
              <span className="font-medium text-text-icon-primary text-sm">
                See all 145 photos
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-4 self-end">
        <Button
          variant="outline"
          className="flex items-center gap-2.5 px-4 py-2 bg-[#ffffff] rounded-[100px]"
        >
          <ShareIcon className="w-5 h-5" />
          <span className="font-medium text-[#1c1c1c] text-sm leading-5">
            ShareIcon
          </span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2.5 px-4 py-2 bg-[#ffffff] rounded-[100px]"
        >
          <HeartIcon className="w-5 h-5" />
          <span className="font-medium text-[#1c1c1c] text-sm leading-5">
            Wishlist
          </span>
        </Button>
      </div>

      {/* Course Offerings Card */}
      <Card className="flex flex-col items-center justify-center gap-4 pt-8 pb-0 px-8 relative self-stretch w-full flex-[0_0_auto] bg-foundationsurfacewhite rounded-2xl border border-solid border-[#0000000d] shadow-primary-shadow">
        <CardContent className="p-0 w-full">
          <div className="flex items-start justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-5 relative flex-1 grow">
              <h2 className="relative self-stretch mt-[-1.00px] font-semibold text-black text-2xl tracking-[-0.48px] leading-[30px]">
                Course Offerings 179
              </h2>
            </div>

            <div className="flex flex-col h-14 flex-1 grow rounded-lg overflow-hidden items-center justify-center relative">
              <Button className="bg-[#ed1164] flex items-center justify-center gap-1.5 px-4 py-1.5 relative flex-1 self-stretch w-full grow hover:bg-[#d10f59]">
                View Courses
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-4">
            <div className="flex flex-col items-start justify-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-normal text-slate-500 text-xs tracking-[0] leading-[normal]">
                    ANNUAL FEE RANGE
                  </span>

                  <span className="relative w-fit font-semibold text-foundationgreynormal text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    ₹1.8Lakh - 7Lakh
                  </span>
                </div>

                <div className="flex items-center gap-2 pl-2 pr-4 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-[100px] bg-[linear-gradient(90deg,rgba(55,99,218,0.15)_0%,rgba(55,99,218,0)_100%)]">
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <img
                      className="relative w-5 h-5"
                      alt="Ellipse"
                      src="https://c.animaapp.com/mceait1kxMyQ7N/img/ellipse-1143-10.png"
                    />
                    <img
                      className="w-[16.89px] relative h-5"
                      alt="Subtract"
                      src="https://c.animaapp.com/mceait1kxMyQ7N/img/subtract-20.png"
                    />
                    <img
                      className="w-[16.81px] object-cover relative h-5"
                      alt="Subtract"
                      src="https://c.animaapp.com/mceait1kxMyQ7N/img/subtract-21.png"
                    />
                  </div>

                  <div className="relative flex-1 font-normal text-xs tracking-[0] leading-[normal]">
                    <span className="font-semibold text-slate-500">
                      345313+
                    </span>
                    <span className="text-slate-500">
                      {" "}
                      students applied last month{" "}
                    </span>
                  </div>
                </div>

                <Separator className="w-full h-px" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 px-2.5 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] overflow-hidden">
              <div className="text-[#17a459] relative w-fit mt-[-1.00px] font-normal text-xs text-center leading-[normal]">
                <span className="font-semibold tracking-[0]">
                  Application Ongoing
                </span>
                <span className="tracking-[0]"> for selected courses</span>
              </div>
              <div className="absolute w-[257px] h-6 top-[47px] left-[85px] bg-[#84ebb4] blur-[25px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
