import {
  BanknoteIcon,
  GridIcon,
  HeartIcon,
  MapPinIcon,
  ShareIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Data for accreditation badges
const accreditations = [
  {
    id: "nirf",
    title: "NIRF\nRanking",
    badgeImages: {
      shadows: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/shadows.svg",
      bg: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/bg.svg",
      stroke: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/stroke.svg",
      maskGroup: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/mask-group.png",
      shine: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/shine.svg",
      edgeShine: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/edge-shine.svg",
      bgInner: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/bg-4.svg",
      insidePattern1:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/inside-pattern.svg",
      insidePattern2:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/inside-pattern-1.svg",
      insidePattern3:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/inside-pattern-4.svg",
      insidePattern4:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/inside-pattern-3.svg",
      insidePattern5:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/inside-pattern-2.svg",
      maskGroupInner:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/mask-group-1.png",
      nirfLogo: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/nirf-logo.svg",
      subtract: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-22.svg",
    },
    hasRareBadge: true,
  },
  {
    id: "naac",
    title: "NAAC\nAccredited",
    badgeImages: {
      shadows: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/shadows-1.svg",
      bg: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/bg-1.svg",
      stroke: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/stroke-1.svg",
      maskGroup: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/mask-group-2.png",
      shine: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/shine-1.svg",
      edgeShine: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/edge-shine-1.svg",
      bgInner: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/bg-5.svg",
      maskGroupInner:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/mask-group-3.png",
      vector1: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vector.svg",
      vector2: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vector-1.svg",
      vector3: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vector-3.svg",
      subtract: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-22.svg",
    },
    hasRareBadge: true,
  },
  {
    id: "ugc",
    title: "UGC\nApproved",
    badgeImages: {
      shadows: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/shadows-2.svg",
      bg: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/bg-2.svg",
      stroke: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/stroke-2.svg",
      maskGroup: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/mask-group-4.png",
      shine: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/shine-2.svg",
      edgeShine: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/edge-shine-2.svg",
      bgInner: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/bg-6.svg",
      color: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/color.svg",
      pattern: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/pattern.png",
      innerEmbossTexture:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/inner-emboss-texture.png",
      maskGroupInner:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/mask-group-5.png",
      layer1: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/layer-1.png",
      group: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/group-47671.png",
    },
    hasRareBadge: false,
  },
  {
    id: "nba",
    title: "NBA\nAccredited",
    badgeImages: {
      shadows: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/shadows-3.svg",
      bg: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/bg-2.svg",
      stroke: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/stroke-2.svg",
      maskGroup: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/mask-group-6.png",
      shine: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/shine-2.svg",
      edgeShine: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/edge-shine-2.svg",
      bgInner: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/bg-7.svg",
      color: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/color-1.svg",
      pattern: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/pattern-1.png",
      innerEmbossTexture:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/inner-emboss-texture-1.png",
      maskGroupInner:
        "https://c.animaapp.com/mckdw3fnaZFcWZ/img/mask-group-7.png",
      vector: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vector-2.svg",
      group: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/group-47670.png",
    },
    hasRareBadge: false,
  },
];

// Data for university info
const universityInfo = [
  {
    icon: <BanknoteIcon className="w-6 h-6" />,
    label: "AFFILIATED",
    value: "National University",
  },
  {
    icon: (
      <img
        className="w-6 h-6"
        alt="Vuesax linear bill"
        src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-bill.svg"
      />
    ),
    label: "PART OF",
    value: "Koshys Global Academia",
  },
  {
    icon: <MapPinIcon className="w-6 h-6" />,
    label: "LOCATED",
    value: "Bengaluru, Karnataka",
  },
];

// Gallery images data
const galleryImages = [
  "https://c.animaapp.com/mckdw3fnaZFcWZ/img/frame-1430104093.svg",
  "https://c.animaapp.com/mckdw3fnaZFcWZ/img/frame-1430104094.svg",
  "https://c.animaapp.com/mckdw3fnaZFcWZ/img/frame-1430104095.png",
];

export const FrameWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex items-start gap-[61px] w-full">
      {/* Left Column - University Info */}
      <div className="flex flex-col w-[488px] items-start justify-center gap-8 pt-14 pb-0 px-0 relative rounded-xl">
        {/* University Header */}
        <div className="flex items-start gap-8 relative self-stretch w-full">
          <div className="inline-flex items-center gap-[13.27px] p-[13.27px] relative bg-[#ffffff] rounded-[106.12px] border-[1.06px] border-solid border-[#ffffff66] shadow-[0px_21.22px_42.45px_-15.92px_#585c5f1a]">
            <img
              className="relative w-[103.47px] h-[103.47px]"
              alt="University logo"
              src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/image.png"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-3 pt-0 pb-1 px-0">
            <h1 className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[28px] tracking-[-0.56px] leading-9">
              Greenfield University
              <br />a Private University
            </h1>

            <div className="w-fit bg-[linear-gradient(90deg,rgba(100,116,139,0.5)_0%,rgba(100,116,139,1)_30%,rgba(100,116,139,1)_70%,rgba(100,116,139,0.5)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-medium text-transparent text-xs text-center tracking-[1.92px] leading-[normal] [font-family:'Inter',Helvetica]">
              ESTD. 1945
            </div>

            <div className="flex items-center gap-2">
              <Badge className="bg-[#e7fff2] rounded px-2 py-0.5">
                <span className="font-semibold text-[#19a568] text-sm">
                  4.8
                </span>
              </Badge>
              <span className="font-semibold text-text-icon-primary text-sm [font-family:'Inter',Helvetica]">
                1289 Reviews
              </span>
            </div>
          </div>
        </div>

        {/* University Details */}
        <div className="flex items-start gap-8 relative self-stretch w-full">
          {universityInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 relative flex-1 grow"
            >
              {info.icon}
              <div className="w-fit font-normal text-slate-500 text-[10px] text-center tracking-[1.00px] leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica]">
                {info.label}
              </div>
              <div className="self-stretch font-normal text-[#1c1c1c] text-sm tracking-[0] leading-5 [font-family:'Inter',Helvetica]">
                {info.value}
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations Section */}
        <div className="flex flex-col items-start gap-5 px-0 py-8 relative self-stretch w-full bg-[linear-gradient(270deg,rgba(53,64,90,0)_0%,rgba(53,64,90,0.1)_50%,rgba(53,64,90,0)_100%)]">
          <div className="flex items-center gap-5 relative self-stretch w-full">
            <div className="flex-1 mt-[-1.00px] bg-[linear-gradient(90deg,rgba(100,116,139,0.5)_0%,rgba(100,116,139,1)_30%,rgba(100,116,139,1)_70%,rgba(100,116,139,0.5)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-medium text-transparent text-xs text-center tracking-[1.92px] leading-[normal] [font-family:'Inter',Helvetica]">
              ACCREDITATIONS
            </div>
          </div>

          <div className="flex items-start gap-2 relative self-stretch w-full overflow-x-scroll">
            {accreditations.map((accreditation) => (
              <div
                key={accreditation.id}
                className="flex flex-col max-w-[100px] w-[100px] items-center gap-4 relative"
              >
                <div
                  className="relative w-[88px] h-[88px]"
                  style={{
                    backgroundImage: `url(${accreditation.badgeImages.shadows})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <div
                    className="relative h-[88px]"
                    style={{
                      backgroundImage: `url(${accreditation.badgeImages.bg})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <img
                      className="absolute w-[88px] h-[88px] top-0 left-0"
                      alt="Stroke"
                      src={accreditation.badgeImages.stroke}
                    />
                    <img
                      className="absolute w-[86px] h-[86px] top-px left-px"
                      alt="Mask group"
                      src={accreditation.badgeImages.maskGroup}
                    />
                    <img
                      className="absolute w-[86px] h-[86px] top-px left-px"
                      alt="Shine"
                      src={accreditation.badgeImages.shine}
                    />
                    <img
                      className="absolute w-[86px] h-[86px] top-px left-px"
                      alt="Edge shine"
                      src={accreditation.badgeImages.edgeShine}
                    />
                    <img
                      className="absolute w-[72px] h-[72px] top-2 left-2"
                      alt="Bg"
                      src={accreditation.badgeImages.bgInner}
                    />

                    {accreditation.id === "nirf" && (
                      <>
                        <img
                          className="absolute w-[60px] h-[60px] top-3.5 left-3.5"
                          alt="Inside pattern"
                          src={accreditation.badgeImages.insidePattern1}
                        />
                        <img
                          className="absolute w-[60px] h-[60px] top-3.5 left-3.5"
                          alt="Inside pattern"
                          src={accreditation.badgeImages.insidePattern2}
                        />
                        <img
                          className="absolute w-[60px] h-[60px] top-3.5 left-3.5"
                          alt="Inside pattern"
                          src={accreditation.badgeImages.insidePattern3}
                        />
                        <img
                          className="absolute w-[60px] h-[60px] top-3.5 left-3.5"
                          alt="Inside pattern"
                          src={accreditation.badgeImages.insidePattern4}
                        />
                        <img
                          className="absolute w-[60px] h-[60px] top-3.5 left-3.5"
                          alt="Inside pattern"
                          src={accreditation.badgeImages.insidePattern5}
                        />
                        <img
                          className="absolute w-[60px] h-[60px] top-3.5 left-3.5"
                          alt="Mask group"
                          src={accreditation.badgeImages.maskGroupInner}
                        />
                        <div className="absolute top-6 left-5 [text-shadow:0.16px_0.16px_0.07px_#0000004f] bg-[linear-gradient(21deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.7)_29%,rgba(255,255,255,0.87)_53%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-black text-transparent text-[25px] text-center tracking-[-1.00px] leading-[31.3px] whitespace-nowrap">
                          100
                        </div>
                        <img
                          className="absolute w-3 h-2 top-[59px] left-[38px]"
                          alt="Nirf logo"
                          src={accreditation.badgeImages.nirfLogo}
                        />
                      </>
                    )}

                    {accreditation.id === "naac" && (
                      <>
                        <img
                          className="absolute w-[72px] h-[72px] top-2 left-2"
                          alt="Mask group"
                          src={accreditation.badgeImages.maskGroupInner}
                        />
                        <img
                          className="absolute w-2.5 h-2.5 top-16 left-[39px]"
                          alt="Vector"
                          src={accreditation.badgeImages.vector1}
                        />
                        <img
                          className="absolute w-1.5 h-1.5 top-[63px] left-[51px]"
                          alt="Vector"
                          src={accreditation.badgeImages.vector2}
                        />
                        <img
                          className="absolute w-1.5 h-1.5 top-[63px] left-[31px]"
                          alt="Vector"
                          src={accreditation.badgeImages.vector3}
                        />
                      </>
                    )}

                    {accreditation.id === "ugc" && (
                      <>
                        <div className="absolute w-[60px] h-[60px] top-3.5 left-3.5">
                          <div className="relative h-[60px]">
                            <img
                              className="absolute w-[54px] h-[49px] top-[3px] left-[3px]"
                              alt="Color"
                              src={accreditation.badgeImages.color}
                            />
                            <img
                              className="absolute w-[54px] h-[49px] top-[3px] left-[3px]"
                              alt="Pattern"
                              src={accreditation.badgeImages.pattern}
                            />
                            <img
                              className="top-0 left-0 absolute w-[60px] h-[60px]"
                              alt="Inner emboss texture"
                              src={accreditation.badgeImages.innerEmbossTexture}
                            />
                          </div>
                        </div>
                        <img
                          className="absolute w-[75px] h-[75px] top-1.5 left-1.5"
                          alt="Mask group"
                          src={accreditation.badgeImages.maskGroupInner}
                        />
                        <div className="absolute w-9 h-[33px] top-[22px] left-[26px]">
                          <div
                            className="w-[35px] h-8"
                            style={{
                              backgroundImage: `url(${accreditation.badgeImages.layer1})`,
                              backgroundSize: "100% 100%",
                            }}
                          />
                        </div>
                        <img
                          className="absolute w-[11px] h-[9px] top-16 left-[39px]"
                          alt="Group"
                          src={accreditation.badgeImages.group}
                        />
                      </>
                    )}

                    {accreditation.id === "nba" && (
                      <>
                        <div className="absolute w-[60px] h-[60px] top-3.5 left-3.5">
                          <div className="relative h-[60px]">
                            <img
                              className="absolute w-[54px] h-[49px] top-[3px] left-[3px]"
                              alt="Color"
                              src={accreditation.badgeImages.color}
                            />
                            <img
                              className="absolute w-[54px] h-[49px] top-[3px] left-[3px]"
                              alt="Pattern"
                              src={accreditation.badgeImages.pattern}
                            />
                            <img
                              className="top-0 left-0 absolute w-[60px] h-[60px]"
                              alt="Inner emboss texture"
                              src={accreditation.badgeImages.innerEmbossTexture}
                            />
                          </div>
                        </div>
                        <img
                          className="absolute w-[75px] h-[75px] top-1.5 left-1.5"
                          alt="Mask group"
                          src={accreditation.badgeImages.maskGroupInner}
                        />
                        <img
                          className="absolute w-[39px] h-5 top-8 left-[26px]"
                          alt="Vector"
                          src={accreditation.badgeImages.vector}
                        />
                        <img
                          className="absolute w-[11px] h-[9px] top-16 left-[39px]"
                          alt="Group"
                          src={accreditation.badgeImages.group}
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className="self-stretch font-normal text-[#1c1c1c] text-xs text-center tracking-[0] leading-[normal] [font-family:'Inter',Helvetica]">
                  {accreditation.title}
                </div>

                {accreditation.hasRareBadge && (
                  <div className="inline-flex items-center justify-center gap-1 px-2 py-1 relative bg-[#35405a1a] rounded-[100px] border-[0.5px] border-solid border-[#00000014] shadow-[inset_0px_0px_6px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                    <div className="relative w-3 h-3">
                      <div className="h-3">
                        <div className="w-3 h-3">
                          <div className="relative h-3">
                            <img
                              className="absolute w-2.5 h-2.5 top-px left-px"
                              alt="Subtract"
                              src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-22.svg"
                            />
                            <img
                              className="absolute w-3 h-3 top-0 left-0"
                              alt="Vector"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-fit mt-[-0.50px] bg-[linear-gradient(255deg,rgba(115,115,129,1)_0%,rgba(89,89,89,1)_62%,rgba(115,115,129,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-normal text-transparent text-[10px] tracking-[-0.10px] leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica]">
                      Rare
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Gallery and Course Info */}
      <div className="flex flex-col w-[491px] items-start gap-10 pt-14 pb-0 px-0 relative">
        {/* Action Buttons */}
        <div className="inline-flex items-center gap-4 absolute top-2.5 right-0">
          <Button
            variant="outline"
            className="bg-white rounded-full flex items-center gap-2.5"
          >
            <ShareIcon className="w-5 h-5" />
            <span className="font-medium text-[#1c1c1c] text-sm">
              ShareIcon
            </span>
          </Button>
          <Button
            variant="outline"
            className="bg-white rounded-full flex items-center gap-2.5"
          >
            <HeartIcon className="w-5 h-5" />
            <span className="font-medium text-[#1c1c1c] text-sm">Wishlist</span>
          </Button>
        </div>

        {/* Gallery Section */}
        <div className="flex items-start gap-1.5 relative self-stretch w-full rounded-2xl overflow-hidden">
          <div
            className="relative flex-1 grow h-[340px]"
            style={{
              backgroundImage: `url(${galleryImages[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          />
          <div className="flex flex-col items-start gap-1.5 relative flex-1 self-stretch grow">
            <div
              className="relative flex-1 self-stretch w-full grow"
              style={{
                backgroundImage: `url(${galleryImages[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            />
            <div
              className="flex flex-col items-end justify-end gap-2.5 p-4 relative flex-1 self-stretch w-full grow"
              style={{
                background: `url(${galleryImages[2]}) 50% 50% / cover, linear-gradient(0deg, rgba(217,217,217,1) 0%, rgba(217,217,217,1) 100%)`,
              }}
            >
              <Button
                variant="outline"
                className="h-[34px] pl-2.5 pr-3.5 py-2 rounded border-[0.5px] border-solid border-[#00000014] shadow-[inset_0px_0px_4px_#0000001a,2px_2px_10px_#00000026] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] bg-[linear-gradient(53deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0.95)_100%)]"
              >
                <GridIcon className="w-4 h-4 mr-1.5" />
                <span className="font-medium text-text-icon-primary text-sm">
                  See all 145 photos
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Course Offerings Card */}
        <Card className="flex flex-col items-center justify-center gap-4 pt-8 pb-0 px-8 self-stretch w-full bg-foundationsurfacewhite rounded-2xl border border-solid border-[#0000000d] shadow-primary-shadow">
          <CardContent className="p-0 w-full">
            <div className="flex items-start justify-center gap-10 relative self-stretch w-full">
              <div className="flex flex-col items-start gap-5 relative flex-1 grow">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[-0.48px] leading-[30px]">
                  Course Offerings 179
                </h2>
              </div>

              <div className="flex flex-col h-14 flex-1 grow rounded-lg overflow-hidden items-center justify-center relative">
                <Button className="bg-[#ed1164] flex items-center justify-center gap-1.5 px-4 py-1.5 relative flex-1 self-stretch w-full grow rounded-lg">
                  <span className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-5 whitespace-nowrap">
                    View Courses
                  </span>
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full mt-4">
              <div className="flex flex-col items-start justify-center gap-8 relative self-stretch w-full">
                <div className="flex flex-col items-start justify-center gap-5 relative self-stretch w-full">
                  <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-slate-500 text-xs tracking-[0] leading-[normal]">
                      ANNUAL FEE RANGE
                    </div>

                    <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-foundationgreynormal text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      ₹1.8Lakh - 7Lakh
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-2 pr-4 py-2 relative self-stretch w-full rounded-[100px] bg-[linear-gradient(90deg,rgba(55,99,218,0.15)_0%,rgba(55,99,218,0)_100%)]">
                    <div className="inline-flex items-center relative">
                      <img
                        className="relative w-5 h-5"
                        alt="Ellipse"
                        src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/ellipse-1143-10.png"
                      />
                      <img
                        className="relative w-[16.89px] h-5"
                        alt="Subtract"
                        src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-20.png"
                      />
                      <img
                        className="relative w-[16.81px] h-5 object-cover"
                        alt="Subtract"
                        src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-21.png"
                      />
                    </div>

                    <div className="relative flex-1 [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal]">
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

              <div className="flex items-center justify-center gap-2.5 px-2.5 py-3 relative self-stretch w-full bg-[#ffffff] overflow-hidden">
                <div className="text-[#17a459] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-xs text-center leading-[normal]">
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
    </section>
  );
};
