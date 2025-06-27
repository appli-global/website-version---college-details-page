import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const ReviewsSection = (): JSX.Element => {
  // University basic information
  const universityInfo = {
    name: "Greenfield University",
    subtitle: "a Private University",
    established: "ESTD. 1945",
    rating: "4.8",
    reviewCount: "1289 Reviews",
    logo: "https://c.animaapp.com/mceait1kxMyQ7N/img/image.png",
  };

  // University details
  const detailsInfo = [
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-outline-bank.svg",
      label: "AFFILIATED",
      value: "National University",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-bill.svg",
      label: "PART OF",
      value: "Koshys Global Academia",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-location.svg",
      label: "LOCATED",
      value: "Bengaluru, Karnataka",
    },
  ];

  // Accreditation badges
  const accreditations = [
    {
      id: "nirf",
      title: "NIRF\nRanking",
      isRare: true,
      images: {
        main: "https://c.animaapp.com/mceait1kxMyQ7N/img/shadows-3.svg",
        bg: "https://c.animaapp.com/mceait1kxMyQ7N/img/bg-6.svg",
        stroke: "https://c.animaapp.com/mceait1kxMyQ7N/img/stroke-3.svg",
        maskGroup: "https://c.animaapp.com/mceait1kxMyQ7N/img/mask-group.png",
        shine: "https://c.animaapp.com/mceait1kxMyQ7N/img/shine-3.svg",
        edgeShine: "https://c.animaapp.com/mceait1kxMyQ7N/img/edge-shine-3.svg",
        bgInner: "https://c.animaapp.com/mceait1kxMyQ7N/img/bg-7.svg",
        insidePattern: [
          "https://c.animaapp.com/mceait1kxMyQ7N/img/inside-pattern-3.svg",
          "https://c.animaapp.com/mceait1kxMyQ7N/img/inside-pattern-1.svg",
          "https://c.animaapp.com/mceait1kxMyQ7N/img/inside-pattern-2.svg",
          "https://c.animaapp.com/mceait1kxMyQ7N/img/inside-pattern-4.svg",
          "https://c.animaapp.com/mceait1kxMyQ7N/img/inside-pattern.svg",
        ],
        maskGroupInner:
          "https://c.animaapp.com/mceait1kxMyQ7N/img/mask-group-1.png",
        nirfLogo: "https://c.animaapp.com/mceait1kxMyQ7N/img/nirf-logo.svg",
        subtractIcon:
          "https://c.animaapp.com/mceait1kxMyQ7N/img/subtract-22.svg",
      },
    },
    {
      id: "naac",
      title: "NAAC\nAccredited",
      isRare: true,
      images: {
        main: "https://c.animaapp.com/mceait1kxMyQ7N/img/shadows.svg",
        bg: "https://c.animaapp.com/mceait1kxMyQ7N/img/bg.svg",
        stroke: "https://c.animaapp.com/mceait1kxMyQ7N/img/stroke-2.svg",
        maskGroup: "https://c.animaapp.com/mceait1kxMyQ7N/img/mask-group-2.png",
        shine: "https://c.animaapp.com/mceait1kxMyQ7N/img/shine-2.svg",
        edgeShine: "https://c.animaapp.com/mceait1kxMyQ7N/img/edge-shine.svg",
        bgInner: "https://c.animaapp.com/mceait1kxMyQ7N/img/bg-3.svg",
        maskGroupInner:
          "https://c.animaapp.com/mceait1kxMyQ7N/img/mask-group-3.png",
        vector: [
          "https://c.animaapp.com/mceait1kxMyQ7N/img/vector-1.svg",
          "https://c.animaapp.com/mceait1kxMyQ7N/img/vector-2.svg",
          "https://c.animaapp.com/mceait1kxMyQ7N/img/vector.svg",
        ],
        subtractIcon:
          "https://c.animaapp.com/mceait1kxMyQ7N/img/subtract-22.svg",
      },
    },
    {
      id: "ugc",
      title: "UGC\nApproved",
      isRare: false,
      images: {
        main: "https://c.animaapp.com/mceait1kxMyQ7N/img/shadows-2.svg",
        bg: "https://c.animaapp.com/mceait1kxMyQ7N/img/bg-1.svg",
        stroke: "https://c.animaapp.com/mceait1kxMyQ7N/img/stroke.svg",
        maskGroup: "https://c.animaapp.com/mceait1kxMyQ7N/img/mask-group-4.png",
        shine: "https://c.animaapp.com/mceait1kxMyQ7N/img/shine.svg",
        edgeShine: "https://c.animaapp.com/mceait1kxMyQ7N/img/edge-shine-1.svg",
        bgInner: "https://c.animaapp.com/mceait1kxMyQ7N/img/bg-4.svg",
        color: "https://c.animaapp.com/mceait1kxMyQ7N/img/color.svg",
        pattern: "https://c.animaapp.com/mceait1kxMyQ7N/img/pattern.png",
        innerEmboss:
          "https://c.animaapp.com/mceait1kxMyQ7N/img/inner-emboss-texture.png",
        maskGroupInner:
          "https://c.animaapp.com/mceait1kxMyQ7N/img/mask-group-5.png",
        group: "https://c.animaapp.com/mceait1kxMyQ7N/img/group-47671.png",
      },
    },
    {
      id: "nba",
      title: "NBA\nAccredited",
      isRare: false,
      images: {
        main: "https://c.animaapp.com/mceait1kxMyQ7N/img/shadows-1.svg",
        bg: "https://c.animaapp.com/mceait1kxMyQ7N/img/bg-1.svg",
        stroke: "https://c.animaapp.com/mceait1kxMyQ7N/img/stroke.svg",
        maskGroup: "https://c.animaapp.com/mceait1kxMyQ7N/img/mask-group-6.png",
        shine: "https://c.animaapp.com/mceait1kxMyQ7N/img/shine.svg",
        edgeShine: "https://c.animaapp.com/mceait1kxMyQ7N/img/edge-shine-1.svg",
        bgInner: "https://c.animaapp.com/mceait1kxMyQ7N/img/bg-5.svg",
        color: "https://c.animaapp.com/mceait1kxMyQ7N/img/color-1.svg",
        pattern: "https://c.animaapp.com/mceait1kxMyQ7N/img/pattern-1.png",
        innerEmboss:
          "https://c.animaapp.com/mceait1kxMyQ7N/img/inner-emboss-texture-1.png",
        maskGroupInner:
          "https://c.animaapp.com/mceait1kxMyQ7N/img/mask-group-7.png",
        vector: "https://c.animaapp.com/mceait1kxMyQ7N/img/vector-3.svg",
        group: "https://c.animaapp.com/mceait1kxMyQ7N/img/group-47670.png",
      },
    },
  ];

  return (
    <Card className="flex flex-col w-full items-start justify-center gap-8 rounded-xl border-none">
      <CardContent className="p-0 w-full">
        {/* University Header Section */}
        <div className="flex items-start gap-8 relative w-full">
          <div className="inline-flex items-center gap-[13.27px] p-[13.27px] bg-white rounded-[106.12px] border-[1.06px] border-solid border-[#ffffff66] shadow-[0px_21.22px_42.45px_-15.92px_#585c5f1a]">
            <img
              className="w-[103.47px] h-[103.47px]"
              alt="University logo"
              src={universityInfo.logo}
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-3 pt-0 pb-1">
            <h1 className="w-fit mt-[-1.00px] font-semibold text-black text-[28px] tracking-[-0.56px] leading-9 font-sans">
              {universityInfo.name}
              <br />
              {universityInfo.subtitle}
            </h1>

            <div className="w-fit bg-[linear-gradient(90deg,rgba(100,116,139,0.5)_0%,rgba(100,116,139,1)_30%,rgba(100,116,139,1)_70%,rgba(100,116,139,0.5)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-medium text-transparent text-xs text-center tracking-[1.92px] leading-[normal] font-sans">
              {universityInfo.established}
            </div>

            <div className="flex items-center gap-2">
              <Badge className="bg-[#e7fff2] text-[#19a568] font-semibold">
                {universityInfo.rating}
              </Badge>
              <span className="font-semibold text-text-icon-primary text-sm">
                {universityInfo.reviewCount}
              </span>
            </div>
          </div>
        </div>

        {/* University Details Section */}
        <div className="flex items-start gap-8 mt-8 w-full">
          {detailsInfo.map((detail, index) => (
            <div key={index} className="flex flex-col items-start gap-2 flex-1">
              <img className="w-6 h-6" alt={detail.label} src={detail.icon} />
              <span className="w-fit font-normal text-slate-500 text-[10px] text-center tracking-[1.00px] leading-[normal] whitespace-nowrap font-sans">
                {detail.label}
              </span>
              <span className="w-full font-normal text-[#1c1c1c] text-sm tracking-[0] leading-5 font-sans">
                {detail.value}
              </span>
            </div>
          ))}
        </div>

        {/* Accreditations Section */}
        <div className="flex flex-col items-start gap-5 py-8 mt-8 w-full bg-[linear-gradient(270deg,rgba(53,64,90,0)_0%,rgba(53,64,90,0.1)_50%,rgba(53,64,90,0)_100%)]">
          <div className="flex items-center gap-5 w-full">
            <div className="flex-1 mt-[-1.00px] bg-[linear-gradient(90deg,rgba(100,116,139,0.5)_0%,rgba(100,116,139,1)_30%,rgba(100,116,139,1)_70%,rgba(100,116,139,0.5)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-medium text-transparent text-xs text-center tracking-[1.92px] leading-[normal] font-sans">
              ACCREDITATIONS
            </div>
          </div>

          <ScrollArea className="w-full">
            <div className="flex items-start gap-2 w-full">
              {accreditations.map((accreditation) => (
                <div
                  key={accreditation.id}
                  className="flex flex-col w-[100px] items-center gap-4 flex-shrink-0"
                >
                  {/* Badge/Medal Visualization */}
                  <div
                    className="relative w-[88px] h-[88px]"
                    style={{
                      backgroundImage: `url(${accreditation.images.main})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div
                      className="relative h-[88px]"
                      style={{
                        backgroundImage: `url(${accreditation.images.bg})`,
                        backgroundSize: "100% 100%",
                      }}
                    >
                      <img
                        className="absolute w-[88px] h-[88px] top-0 left-0"
                        alt="Stroke"
                        src={accreditation.images.stroke}
                      />
                      <img
                        className="absolute w-[86px] h-[86px] top-px left-px"
                        alt="Mask group"
                        src={accreditation.images.maskGroup}
                      />
                      <img
                        className="absolute w-[86px] h-[86px] top-px left-px"
                        alt="Shine"
                        src={accreditation.images.shine}
                      />
                      <img
                        className="absolute w-[86px] h-[86px] top-px left-px"
                        alt="Edge shine"
                        src={accreditation.images.edgeShine}
                      />
                      <img
                        className="absolute w-[72px] h-[72px] top-2 left-2"
                        alt="Bg"
                        src={accreditation.images.bgInner}
                      />

                      {/* Conditional rendering based on accreditation type */}
                      {accreditation.id === "nirf" && (
                        <>
                          {accreditation.images.insidePattern.map(
                            (pattern, index) => (
                              <img
                                key={index}
                                className="absolute w-[60px] h-[60px] top-3.5 left-3.5"
                                alt="Inside pattern"
                                src={pattern}
                              />
                            ),
                          )}
                          <img
                            className="absolute w-[60px] h-[60px] top-3.5 left-3.5"
                            alt="Mask group"
                            src={accreditation.images.maskGroupInner}
                          />
                          <div className="absolute top-6 left-5 [text-shadow:0.16px_0.16px_0.07px_#0000004f] bg-[linear-gradient(21deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.7)_29%,rgba(255,255,255,0.87)_53%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-black text-transparent text-[25px] text-center tracking-[-1.00px] leading-[31.3px] whitespace-nowrap font-sans">
                            100
                          </div>
                          <img
                            className="absolute w-3 h-2 top-[59px] left-[38px]"
                            alt="Nirf logo"
                            src={accreditation.images.nirfLogo}
                          />
                        </>
                      )}

                      {accreditation.id === "naac" && (
                        <>
                          <img
                            className="absolute w-[72px] h-[72px] top-2 left-2"
                            alt="Mask group"
                            src={accreditation.images.maskGroupInner}
                          />
                          {accreditation.images.vector.map((vector, index) => (
                            <img
                              key={index}
                              className={`absolute ${index === 0 ? "w-2.5 h-2.5 top-16 left-[39px]" : index === 1 ? "w-1.5 h-1.5 top-[63px] left-[51px]" : "w-1.5 h-1.5 top-[63px] left-[31px]"}`}
                              alt="Vector"
                              src={vector}
                            />
                          ))}
                        </>
                      )}

                      {(accreditation.id === "ugc" ||
                        accreditation.id === "nba") && (
                        <>
                          <div className="absolute w-[60px] h-[60px] top-3.5 left-3.5">
                            <div className="relative h-[60px]">
                              <img
                                className="absolute w-[54px] h-[49px] top-[3px] left-[3px]"
                                alt="Color"
                                src={accreditation.images.color}
                              />
                              <img
                                className="absolute w-[54px] h-[49px] top-[3px] left-[3px]"
                                alt="Pattern"
                                src={accreditation.images.pattern}
                              />
                              <img
                                className="absolute w-[60px] h-[60px] top-0 left-0"
                                alt="Inner emboss texture"
                                src={accreditation.images.innerEmboss}
                              />
                            </div>
                          </div>
                          <img
                            className="absolute w-[75px] h-[75px] top-1.5 left-1.5"
                            alt="Mask group"
                            src={accreditation.images.maskGroupInner}
                          />

                          {accreditation.id === "ugc" && (
                            <div className="absolute w-9 h-[33px] top-[22px] left-[26px]">
                              <div
                                className="w-[35px] h-8"
                                style={{
                                  backgroundImage:
                                    "url(https://c.animaapp.com/mceait1kxMyQ7N/img/layer-1.png)",
                                  backgroundSize: "100% 100%",
                                }}
                              />
                            </div>
                          )}

                          {accreditation.id === "nba" && (
                            <img
                              className="absolute w-[39px] h-5 top-8 left-[26px]"
                              alt="Vector"
                              src={accreditation.images.vector}
                            />
                          )}

                          <img
                            className="absolute w-[11px] h-[9px] top-16 left-[39px]"
                            alt="Group"
                            src={accreditation.images.group}
                          />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Accreditation Title */}
                  <div className="w-full font-normal text-[#1c1c1c] text-xs text-center tracking-[0] leading-[normal] font-sans">
                    {accreditation.title}
                  </div>

                  {/* Rare Badge (if applicable) */}
                  {accreditation.isRare && (
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-[#35405a1a] rounded-[100px] border-[0.5px] border-solid border-[#00000014] shadow-[inset_0px_0px_6px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                      <div className="relative w-3 h-3">
                        <div className="h-3">
                          <div className="w-3 h-3">
                            <div className="relative h-3">
                              <img
                                className="absolute w-2.5 h-2.5 top-px left-px"
                                alt="Subtract"
                                src={accreditation.images.subtractIcon}
                              />
                              <img
                                className="absolute w-3 h-3 top-0 left-0"
                                alt="Vector"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-fit mt-[-0.50px] bg-[linear-gradient(255deg,rgba(115,115,129,1)_0%,rgba(89,89,89,1)_62%,rgba(115,115,129,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-normal text-transparent text-[10px] tracking-[-0.10px] leading-[normal] whitespace-nowrap font-sans">
                        Rare
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};
