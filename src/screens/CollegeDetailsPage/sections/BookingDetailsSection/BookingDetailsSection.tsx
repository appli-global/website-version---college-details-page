import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";

export const BookingDetailsSection = (): JSX.Element => {
  // Must Know features data
  const mustKnowItems = [
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-teacher.svg",
      title: "Scholarship",
      description: "Merit-based scholarship available",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-3dcube.svg",
      title: "Private College",
      description: "This is a private college",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-building-4.svg",
      title: "Great Campus and facilities",
      description: "Bigger campus with 20+ acer area",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-device-message.svg",
      title: "Remote Learning",
      description: "Opportunities on selected courses",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-document-text.svg",
      title: "Online Examination",
      description: "Online exam facilities available",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-crown.svg",
      title: "Engineering Specialized",
      description: "Specialized in engineering courses",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-user.svg",
      title: "Boys Only College",
      description: "This college only give admission to boys",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-moneys.svg",
      title: "Good Placement Package",
      description: "Avg package 20 lakhs p.a.",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-brifecase-tick.svg",
      title: "Best Placement Rate",
      description: "90% of the students get placements",
    },
  ];

  // Admission process steps
  const admissionSteps = [
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-document-text.svg",
      title: "Submit Application",
      description: "Share your academic details for verification.",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-document-text.svg",
      title: "Application Acknowledgment",
      description:
        "You'll be notified once the college acknowledges your application. If there's no response, a refund will be initiated.",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-clipboard-text.svg",
      title: "Give Entrance Exam",
      description: "Applicable for selected courses.",
      hasInfo: true,
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-profile-tick.svg",
      title: "Application Acceptance",
      description:
        "Colleges will review your academic details and profile to decide your application status.",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-document-copy.svg",
      title: "Verify Documents",
      description: "Verify documents asked by the college",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-verify.svg",
      title: "Admission Confirmed",
      description: "Cheers! best of luck for your future",
      isSuccess: true,
    },
  ];

  // Top amenities
  const amenities = [
    "Smart Classrooms",
    "Library",
    "Labs",
    "Wifi/Internet",
    "Hostels",
    "Playground",
  ];

  // Location and commute data
  const commuteOptions = [
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-outline-train.svg",
      title: "400m from Majestic Metro Station",
      subtitle: "8 min walk from campus",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-outline-bus.svg",
      title: "1.5km from Banshankari Bus Stop",
      subtitle: "20 min walk from campus",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-outline-train.svg",
      title: "5Km for city Railway Station",
      subtitle: "20 mins away by auto/cab.",
    },
    {
      icon: "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-outline-car.svg",
      title: "Ride-Sharing Options",
      subtitle: "Ola, Uber, Rapido easily accessible near campus gate.",
    },
  ];

  // Student reviews data
  const studentReviews = [
    {
      name: "Rashmin kour",
      location: "Bengaluru, India",
      avatar: "https://c.animaapp.com/mceait1kxMyQ7N/img/ellipse-21.svg",
      date: "4 Jan 2024",
      title: "Incredible college atmosphere",
      review:
        "The university has a thorough and efficient process for handling required paperwork, making the enrollment experience smooth and hassle-free.",
    },
    {
      name: "Rakesh Singh",
      location: "Bengaluru, India",
      avatar: "https://c.animaapp.com/mceait1kxMyQ7N/img/ellipse-21-1.svg",
      date: "4 Jan 2024",
      title: "Incredible college atmosphere",
      review:
        "The university has a thorough and efficient process for handling required paperwork, making the enrollment experience smooth and hassle-free.",
    },
    {
      name: "Sushavon Paul",
      location: "Bengaluru, India",
      avatar: "https://c.animaapp.com/mceait1kxMyQ7N/img/ellipse-21-2.svg",
      date: "4 Jan 2024",
      title: "Incredible college atmosphere",
      review:
        "The university has a thorough and efficient process for handling required paperwork, making the enrollment experience smooth and hassle-free.",
    },
  ];

  // Alumni data
  const alumni = [
    {
      image: "https://c.animaapp.com/mceait1kxMyQ7N/img/image-3.svg",
      name: "Sourav Solanki",
      position: "SWE II @ Broadcom",
    },
    {
      image: "https://c.animaapp.com/mceait1kxMyQ7N/img/image-2.svg",
      name: "Rashmin Kour",
      position: "Principal Engineer @ AWS",
    },
    {
      image: "https://c.animaapp.com/mceait1kxMyQ7N/img/image-6.svg",
      name: "Menakshi Sharma",
      position: "SWE @ Google",
      hasFacebook: true,
    },
  ];

  // Top placement companies
  const placementCompanies = [
    {
      logo: "https://c.animaapp.com/mceait1kxMyQ7N/img/microsoft-logo--2012--svg-1.png",
      alt: "Microsoft logo",
      width: "113px",
    },
    {
      logo: "https://c.animaapp.com/mceait1kxMyQ7N/img/amazon-logo-svg-1.png",
      alt: "Amazon logo svg",
      width: "79px",
    },
    {
      logo: "https://c.animaapp.com/mceait1kxMyQ7N/img/google-2015-logo-svg-1.png",
      alt: "Google logo svg",
      width: "71px",
    },
    {
      logo: "https://c.animaapp.com/mceait1kxMyQ7N/img/logonetflix-1.png",
      alt: "Logonetflix",
      width: "79px",
    },
    {
      logo: "https://c.animaapp.com/mceait1kxMyQ7N/img/meta-platforms-inc--logo-svg-1.png",
      alt: "Meta platforms inc",
      width: "119px",
    },
    {
      logo: "https://c.animaapp.com/mceait1kxMyQ7N/img/apple-logo-black.svg",
      alt: "Apple logo black",
      width: "60px",
    },
  ];

  // Media and news mentions
  const newsItems = [
    {
      title: "Greenfield University (Deemed To Be University)",
      source: "ANI",
      date: "25 Mar 2025",
    },
    {
      title: "Innovative Learning at Evergreen Academy",
      source: "ANI",
      date: "25 Mar 2025",
    },
    {
      title: "Greenfield University (Deemed To Be University)",
      source: "ANI",
      date: "25 Mar 2025",
    },
  ];

  // Course data
  const courseCategories = [
    {
      title: "Bachelor of Science (B.Sc)",
      expanded: true,
    },
    {
      title: "Master in Business Administration (MBA)",
      expanded: true,
    },
    {
      title: "Master in Business Administration (MBA)",
      expanded: false,
    },
    {
      title: "Master in Business Administration (MBA)",
      expanded: false,
    },
  ];

  // Course cards data
  const courseCards = [
    {
      status: "open",
      title: "B.Sc in Mathematics",
      tags: ["UG", "3 Years", "Full Time", "64 Seats"],
      applicationFee: "₹1,000",
      firstYearFee: "₹1,80,000",
      closingDays: 3,
      closingColor: "#d00416",
    },
    {
      status: "open",
      title: "B.Sc in Mathematics",
      tags: ["UG", "3 Years", "Full Time"],
      specialTag: { text: "30 Seats", color: "#d05504" },
      applicationFee: "₹1,000",
      firstYearFee: "₹1,80,000",
      closingDays: 7,
      closingColor: "#d05504",
    },
    {
      status: "open",
      title: "B.Sc in Mathematics",
      tags: ["UG", "3 Years", "Full Time", "64 Seats"],
      applicationFee: "₹1,000",
      firstYearFee: "₹1,80,000",
      closingDays: 3,
      closingColor: "#d00416",
    },
    {
      status: "not-open",
      title: "B.Sc in Mathematics",
      tags: ["UG", "3 Years", "Full Time"],
      specialTag: { text: "10 Seats", color: "#d00416" },
      applicationFee: "₹1,000",
      firstYearFee: "₹1,80,000",
    },
    {
      status: "closed",
      title: "B.Sc in Mathematics",
      tags: ["UG", "3 Years", "Full Time", "64 Seats"],
      applicationFee: "₹1,000",
      firstYearFee: "₹1,80,000",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-12 pt-12 pb-0 px-0">
      {/* Must Know Section */}
      <div className="flex flex-col w-full max-w-[488px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Must Know
        </h2>

        <div className="flex flex-col items-start gap-5 w-full">
          {mustKnowItems.map((item, index) => (
            <div
              key={`must-know-${index}`}
              className="flex flex-col items-start w-full"
            >
              <div className="flex items-center gap-5 w-full">
                <div className="flex w-12 h-12 items-center justify-center gap-2.5 bg-[#f5f6f7] rounded-xl">
                  <img className="w-6 h-6" alt={item.title} src={item.icon} />
                </div>

                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="w-full font-medium text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
                    {item.title}
                  </div>
                  <div className="w-full font-normal text-slate-500 text-sm tracking-[-0.28px] leading-[22px]">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="w-[488px]" />

      {/* Placement & Packages Section */}
      <div className="flex flex-col w-full max-w-[488px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Placement &amp; Packages
        </h2>

        <Card className="w-full border border-solid border-[#0000001a] rounded-2xl">
          <CardContent className="p-0">
            <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 relative w-full">
              <div className="font-semibold text-slate-500 text-sm">
                PLACEMENT RATE
              </div>
              <div className="font-extrabold text-[40px] tracking-[-0.80px] bg-[linear-gradient(130deg,rgba(22,132,74,1)_0%,rgba(31,193,107,1)_51%,rgba(22,132,74,1)_100%)] bg-clip-text text-transparent">
                90%
              </div>
              <div className="font-normal text-[#16161680] text-base tracking-[-0.32px]">
                since last 3 year
              </div>
              <div className="absolute w-[186px] h-[186px] top-[-137px] left-[150px] bg-[#1fc16b] rounded-[93.11px] rotate-[-120deg] blur-2xl opacity-30" />
            </div>

            <Separator className="w-full" />

            <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 relative w-full">
              <div className="font-semibold text-slate-500 text-sm">
                HIGHEST PACKAGE
              </div>
              <div className="font-normal text-[#16161680] text-base tracking-[-0.32px]">
                per annum
              </div>
              <div className="absolute w-[186px] h-[186px] top-[-137px] left-[150px] bg-[#ed1164] rounded-[93.11px] rotate-[-120deg] blur-2xl opacity-30" />
            </div>

            <Separator className="w-full" />

            <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 relative w-full">
              <div className="font-semibold text-slate-500 text-sm">
                AVERAGE PACKAGE
              </div>
              <div className="font-extrabold text-[40px] tracking-[-0.80px]">
                <span className="font-extrabold text-black tracking-[-0.32px]">
                  20
                </span>
                <span className="font-bold text-black tracking-[-0.32px]">
                  &nbsp;
                </span>
                <span className="text-black tracking-[-0.32px]">Lakhs</span>
              </div>
              <div className="font-normal text-[#16161680] text-base tracking-[-0.32px]">
                per annum
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="w-full font-normal text-slate-500 text-xs text-center tracking-[-0.24px] leading-[18px]">
          Placement information is submitted and maintained by Greenfield
          University
        </div>
      </div>

      <Separator className="w-[488px]" />

      {/* Top Placement Companies Section */}
      <div className="flex flex-col w-full max-w-[488px] items-start gap-5 overflow-hidden">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Top Placement Companies
        </h2>

        <ScrollArea className="w-full">
          <div className="flex items-center gap-[22px] w-[751px]">
            {placementCompanies.map((company, index) => (
              <div
                key={`company-${index}`}
                className="inline-flex flex-col items-start gap-2.5 p-2.5"
              >
                <img
                  className="w-[113px] h-6 object-cover"
                  alt={company.alt}
                  src={company.logo}
                  style={{ width: company.width }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-[22px] w-[751px] mt-5">
            {placementCompanies.map((company, index) => (
              <div
                key={`company-row2-${index}`}
                className="inline-flex flex-col items-start gap-2.5 p-2.5"
              >
                <img
                  className="h-6 object-cover"
                  alt={company.alt}
                  src={company.logo}
                  style={{ width: company.width }}
                />
              </div>
            ))}
          </div>
        </ScrollArea>

        <Button className="w-[200px] h-12 bg-[#ed116414] text-brand-primary hover:bg-[#ed116420]">
          View all 35 companies
        </Button>
      </div>

      <Separator className="w-[488px]" />

      {/* Admission Process Section */}
      <div className="flex flex-col w-full max-w-[488px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Admission Process
        </h2>

        <div className="flex flex-col items-start w-full">
          {admissionSteps.map((step, index) => (
            <React.Fragment key={`admission-step-${index}`}>
              <div className="flex items-center gap-5 w-full">
                <div
                  className={`w-12 h-12 flex items-center justify-center gap-2.5 rounded-xl ${step.isSuccess ? "bg-[#1fc16b1a]" : "bg-[#ecf0ff]"}`}
                >
                  <img className="w-6 h-6" alt={step.title} src={step.icon} />
                </div>

                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex items-center gap-2 w-full">
                    <div className="font-medium text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
                      {step.title}
                    </div>
                    {step.hasInfo && (
                      <img
                        className="w-4 h-4"
                        alt="Info"
                        src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-info-circle.svg"
                      />
                    )}
                  </div>
                  <div className="w-full font-normal text-slate-500 text-sm tracking-[-0.28px] leading-[22px]">
                    {step.description}
                  </div>
                </div>
              </div>

              {index < admissionSteps.length - 1 && (
                <div className="flex w-12 items-center justify-center gap-2.5">
                  <img
                    className="w-px h-7 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/line-30.svg"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Separator className="w-[488px]" />

      {/* Top Amenities Section */}
      <div className="flex flex-col w-full max-w-[460px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Top Amenities
        </h2>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            {amenities.map((amenity, index) => (
              <div
                key={`amenity-${index}`}
                className="flex h-11 items-center gap-3 w-full rounded-xl"
              >
                <img
                  className="w-7 h-7"
                  alt="Amenity icon"
                  src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-book-saved.svg"
                />
                <div className="font-normal text-[#1c1c1c] text-base text-center leading-[18px]">
                  {amenity}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-[200px] h-12 bg-[#ed116414] text-brand-primary hover:bg-[#ed116420]">
          View all
        </Button>
      </div>

      <Separator className="w-[488px]" />

      {/* About College Section */}
      <div className="flex flex-col w-full max-w-[460px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          About college
        </h2>

        <div className="flex flex-col items-start gap-1 w-full">
          <p className="font-normal text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
            Nestled in the vibrant city of Bangalore, the Kengeri Campus is a
            hub of academic excellence and innovation. This college offers a
            diverse range of programs, fostering a rich learning environment for
            students from all walks of life. With state-of-the-art facilities,
            experienced faculty, and a commitment to holistic development,
            Kengeri Campus prepares its students for successful careers in
            various fields. The campus is also known for its active student
            community, engaging extracurricular activities, and a strong
            emphasis on research and development.
          </p>
          <button className="font-semibold text-foundationgreynormal text-base leading-7 underline">
            Read more
          </button>
        </div>
      </div>

      <Separator className="w-full" />

      {/* Location & Commute Section */}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Location &amp; Commute
        </h2>

        <div className="flex items-start gap-[60px] w-full">
          <div className="flex flex-col items-start gap-5 flex-1">
            {commuteOptions.map((option, index) => (
              <React.Fragment key={`commute-${index}`}>
                <div className="flex items-center gap-4 w-full rounded-xl">
                  <img
                    className="w-7 h-7"
                    alt="Transport icon"
                    src={option.icon}
                  />
                  <div className="flex flex-col items-start justify-center gap-3 flex-1">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="font-normal text-[#1c1c1c] text-base leading-[18px]">
                        {option.title}
                      </div>
                      <div className="font-normal text-slate-500 text-sm leading-[18px]">
                        {option.subtitle}
                      </div>
                    </div>

                    {index < 3 && (
                      <div className="inline-flex items-center gap-2 pl-1 pr-2 py-1 bg-[#ecf0ff] rounded-lg">
                        <img
                          className="w-5 h-5"
                          alt="Route"
                          src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-route-square.svg"
                        />
                        <div className="font-medium text-[#3762d9] text-sm leading-[18px]">
                          Get Direction
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {index < commuteOptions.length - 1 && (
                  <Separator className="w-full" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-start gap-3 flex-1 rounded-2xl overflow-hidden relative">
            <img
              className="w-full h-auto object-cover"
              alt="Map"
              src="https://c.animaapp.com/mceait1kxMyQ7N/img/rectangle-23887.png"
            />
            <div className="p-2 absolute top-[11px] right-4 border border-solid border-[#1616161a] shadow-[0px_4px_12px_#00000033] inline-flex items-center justify-center gap-2.5 bg-white rounded-full">
              <img
                className="w-5 h-5"
                alt="Maximize"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-maximize-4.svg"
              />
            </div>
            <div className="absolute w-12 h-[53px] top-[163px] left-[223px] bg-[url(https://c.animaapp.com/mceait1kxMyQ7N/img/union.svg)] bg-[100%_100%]">
              <img
                className="absolute w-6 h-6 top-3 left-[13px]"
                alt="Building"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-building-4.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator className="w-full" />

      {/* What Students Say Section */}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          What Students Say
        </h2>

        <div className="flex flex-col items-start gap-1 w-full">
          <div className="flex items-end justify-center w-full">
            <div className="relative w-[30.48px] h-[30.48px]">
              <img
                className="absolute w-[69px] h-[69px] -top-3.5 left-[-19px]"
                alt="Star"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/star.png"
              />
            </div>
            <div className="relative w-[45px] h-[45px]">
              <img
                className="absolute w-[83px] h-[82px] top-[-13px] left-[-19px]"
                alt="Star"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/star-1.png"
              />
            </div>
            <div className="relative w-20 h-20">
              <img
                className="absolute w-[120px] h-[119px] top-[-13px] -left-5"
                alt="Star"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/star-2.png"
              />
            </div>
            <div className="relative w-[45px] h-[45px]">
              <img
                className="absolute w-[83px] h-[82px] top-[-13px] left-[-19px]"
                alt="Star"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/star-3.png"
              />
            </div>
            <img
              className="relative w-[61.79px] h-[64.49px] mb-[-20.23px]"
              alt="Star"
              src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-star.svg"
            />
          </div>

          <div className="text-6xl font-bold text-center tracking-[-1.20px] bg-[linear-gradient(129deg,rgba(102,102,102,1)_0%,rgba(0,0,0,1)_51%,rgba(102,102,102,1)_100%)] bg-clip-text text-transparent w-full">
            4.8
          </div>

          <div className="font-normal text-[#16161680] text-base text-center tracking-[-0.32px] leading-[22px] w-full">
            488 reviews
          </div>
        </div>

        <div className="flex items-start gap-4 w-full overflow-x-auto">
          {studentReviews.map((review, index) => (
            <Card
              key={`review-${index}`}
              className="w-[281px] border border-solid border-[#16161614]"
            >
              <CardContent className="p-4 flex flex-col gap-5">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-5">
                    <img
                      className="w-12 h-12 object-cover"
                      alt="Avatar"
                      src={review.avatar}
                    />
                    <div className="flex flex-col items-start justify-center">
                      <div className="font-semibold text-foundationgreynormal text-base tracking-[-0.32px] leading-6">
                        {review.name}
                      </div>
                      <div className="font-light text-slate-500 text-sm tracking-[-0.28px] leading-5">
                        {review.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img
                          key={`star-${index}-${star}`}
                          className="w-5 h-5"
                          alt="Star"
                          src="https://c.animaapp.com/mceait1kxMyQ7N/img/icon-grade.svg"
                        />
                      ))}
                    </div>
                    <div className="font-light text-slate-500 text-sm tracking-[-0.28px] leading-5">
                      {review.date}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="font-semibold text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
                    {review.title}
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col items-start gap-4 w-full">
                      <div className="font-normal text-slate-500 text-base tracking-[-0.32px] leading-[22px]">
                        {review.review}
                      </div>
                    </div>
                    <button className="font-semibold text-foundationgreynormal text-base leading-7 underline">
                      Read all
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="w-[200px] h-12 bg-[#ed116414] text-brand-primary hover:bg-[#ed116420]">
          View all
        </Button>
      </div>

      <Separator className="w-full" />

      {/* Alumni Success Stories Section */}
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex items-start justify-between w-full">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            Alumni Success Stories
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white rounded-full border border-solid border-[#0000001a] opacity-20 flex items-center justify-center">
              <img
                className="w-6 h-6"
                alt="Previous"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-left.svg"
              />
            </button>
            <button className="p-2 bg-white rounded-full border border-solid border-[#0000001a] flex items-center justify-center">
              <img
                className="w-6 h-6"
                alt="Next"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-right.svg"
              />
            </button>
          </div>
        </div>

        <div className="flex h-[460px] items-center gap-4 w-full overflow-x-auto">
          {alumni.map((person, index) => (
            <div
              key={`alumni-${index}`}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                className="w-[280px] h-[460px] object-cover"
                alt={person.name}
                src={person.image}
              />
              <div className="flex flex-col w-[280px] items-start gap-1 p-5 absolute bottom-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.6)_100%)]">
                <div className="font-semibold text-white text-xl tracking-[-0.40px]">
                  {person.name}
                </div>
                <div className="opacity-60 font-normal text-white text-sm tracking-[-0.28px]">
                  {person.position}
                </div>
              </div>
              {person.hasFacebook && (
                <img
                  className="absolute w-6 h-6 top-5 right-5"
                  alt="Facebook"
                  src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-facebook.svg"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Separator className="w-full" />

      {/* Awards & Recognition Section */}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Awards &amp; Recognition
        </h2>
        <div className="flex items-start gap-4 w-full">
          <img
            className="w-[146px]"
            alt="Award"
            src="https://c.animaapp.com/mceait1kxMyQ7N/img/awards---recgnition.svg"
          />
          <img
            className="w-[146px]"
            alt="Award"
            src="https://c.animaapp.com/mceait1kxMyQ7N/img/awards---recgnition-2.svg"
          />
          <img
            className="w-[146px]"
            alt="Award"
            src="https://c.animaapp.com/mceait1kxMyQ7N/img/awards---recgnition-1.svg"
          />
        </div>
      </div>

      <Separator className="w-full" />

      {/* Media and News Mentions Section */}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Media and News Mentions
        </h2>
        <div className="flex items-start gap-4 w-full">
          {newsItems.map((item, index) => (
            <Card key={`news-${index}`} className="w-[220px] overflow-hidden">
              <div className="w-full h-[155px] bg-[url(https://c.animaapp.com/mceait1kxMyQ7N/img/frame-1171275941.svg)] bg-cover bg-center" />
              <CardContent className="p-3 flex flex-col items-start justify-center gap-2 border-r border-b border-l border-[#16161614] rounded-b-2xl">
                <div className="font-semibold text-[#1c1c1c] text-sm tracking-[-0.28px] leading-[18.9px]">
                  {item.title}
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="font-normal text-slate-500 text-xs leading-[18px]">
                    {item.source}
                  </div>
                  <div className="w-1 h-1 bg-[#d9d9d9] rounded-sm" />
                  <div className="font-normal text-slate-500 text-xs leading-[18px]">
                    {item.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="w-full" />

      {/* Student Support & Policies Section */}
      <div className="flex items-start gap-[60px] w-full">
        <div className="flex flex-col items-start gap-5 flex-1">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            Student Support System
          </h2>
          <div className="flex flex-col items-start gap-1 w-full">
            <p className="font-normal text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
              Includes academic mentoring, career guidance, mental health
              support, medical services, and more.
            </p>
            <button className="font-semibold text-foundationgreynormal text-base leading-7 underline">
              Read more
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 flex-1">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            Policies, Safety &amp; Regulations
          </h2>
          <div className="flex flex-col items-start gap-1 w-full">
            <p className="font-normal text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
              A complete framework for campus security, emergency support,
              anti-ragging enforcement, and student conduct regulation.
            </p>
            <button className="font-semibold text-foundationgreynormal text-base leading-7 underline">
              Read more
            </button>
          </div>
        </div>

        <div className="flex-1 opacity-0" />
      </div>

      <Separator className="w-full" />

      {/* College Website & Social Media Section */}
      <div className="flex items-start gap-[60px] w-full">
        <div className="flex flex-col items-start gap-5 flex-1">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            College Website
          </h2>
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col items-start gap-1 flex-1">
                <div className="font-normal text-slate-500 text-sm tracking-[-0.28px] leading-[22px]">
                  Website
                </div>
                <div className="font-medium text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
                  www.greenfielduniversity.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 flex-1">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            Social Media
          </h2>
          <div className="flex items-start gap-3 w-full">
            <div className="flex w-12 h-12 items-center justify-center bg-[#ed11651a] rounded-xl">
              <img
                className="w-6 h-6"
                alt="Facebook"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-facebook.svg"
              />
            </div>
            <div className="flex w-12 h-12 items-center justify-center bg-[#ed11651a] rounded-xl">
              <img
                className="w-6 h-6"
                alt="Instagram"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-instagram.svg"
              />
            </div>
            <div className="flex w-12 h-12 items-center justify-center bg-[#ed11651a] rounded-xl">
              <img
                className="w-6 h-6"
                alt="Twitch"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-twitch.svg"
              />
            </div>
            <div className="flex w-12 h-12 items-center justify-center bg-[#ed11651a] rounded-xl">
              <img
                className="w-6 h-6"
                alt="Dribbble"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-bold-dribbble.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 flex-1">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            Additional Resources
          </h2>
          <div className="flex items-center justify-center pl-1 pr-4 py-1 w-full rounded-2xl border border-solid border-[#1616161a]">
            <div className="flex items-center gap-5 flex-1">
              <div className="w-14 h-14 bg-[#ecf0ff] flex items-center justify-center rounded-xl">
                <img
                  className="w-6 h-6"
                  alt="Document"
                  src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-document-text.svg"
                />
              </div>
              <div className="flex flex-col items-start flex-1">
                <div className="font-semibold text-[#1c1c1c] text-sm tracking-[-0.28px] leading-[22px]">
                  Brochure 1
                </div>
                <div className="font-normal text-slate-500 text-xs tracking-[-0.24px] leading-[22px]">
                  25 KB
                </div>
              </div>
            </div>
            <img
              className="w-6 h-6"
              alt="Download"
              src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-import.svg"
            />
          </div>
        </div>
      </div>

      <Separator className="w-full" />

      {/* Courses & Fees Section */}
      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Courses &amp; Fees
        </h2>

        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex items-center gap-5 w-full">
            <div className="flex w-[400px] h-14 items-center justify-center relative">
              <div className="flex h-14 items-center justify-between pl-4 pr-5 py-0 flex-1 bg-white rounded-full border border-solid border-[#0000001f]">
                <div className="flex items-center gap-2.5 pl-0 pr-5 py-0 flex-1">
                  <img
                    className="w-5 h-5"
                    alt="Search"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-search-normal.svg"
                  />
                  <div className="flex flex-col items-start justify-center gap-1 flex-1">
                    <div className="flex items-center justify-center w-full">
                      <div className="flex-1 font-normal text-slate-500 text-base tracking-[-0.32px] leading-4">
                        Find courses at Greenfield University
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-px h-10 bg-gray-200" />

            <ScrollArea className="w-[335px] h-9">
              <div className="flex items-start gap-2">
                <Badge
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span className="font-medium text-[#1c1c1c] text-sm tracking-[-0.28px]">
                    All Filter
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Settings"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-setting-4.svg"
                  />
                </Badge>
                <Badge
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span className="font-medium text-[#1c1c1c] text-sm tracking-[-0.28px]">
                    Sort by
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Arrow down"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-down.svg"
                  />
                </Badge>
                <Badge
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span className="font-medium text-[#1c1c1c] text-sm tracking-[-0.28px]">
                    Program Type
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Arrow down"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-down.svg"
                  />
                </Badge>
                <Badge
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span className="font-medium text-[#1c1c1c] text-sm tracking-[-0.28px]">
                    Admission Status
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Arrow down"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-down.svg"
                  />
                </Badge>
                <Badge
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span className="font-medium text-[#1c1c1c] text-sm tracking-[-0.28px]">
                    Fee Range
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Arrow down"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-down.svg"
                  />
                </Badge>
                <Badge
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span className="font-medium text-[#1c1c1c] text-sm tracking-[-0.28px]">
                    Course Criteria
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Arrow down"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-down.svg"
                  />
                </Badge>
                <Badge
                  variant="outline"
                  className="h-9 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span className="font-medium text-[#1c1c1c] text-sm tracking-[-0.28px]">
                    Course Duration
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Arrow down"
                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-down.svg"
                  />
                </Badge>
              </div>
            </ScrollArea>
          </div>

          {courseCategories.map((category, categoryIndex) => (
            <div
              key={`category-${categoryIndex}`}
              className="flex flex-col items-start gap-3 w-full"
            >
              <div className="flex items-start justify-center gap-10 w-full">
                <div className="flex-1 font-semibold text-slate-500 text-base tracking-[-0.32px] leading-[22px]">
                  {category.title}
                </div>
                <img
                  className="w-6 h-6"
                  alt="Arrow"
                  src={
                    category.expanded
                      ? "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-up.svg"
                      : "https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-down.svg"
                  }
                />
              </div>

              {category.expanded && (
                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="flex flex-wrap items-start gap-5 w-full">
                    {courseCards.slice(0, 3).map((course, courseIndex) => (
                      <Card
                        key={`course-${categoryIndex}-${courseIndex}`}
                        className="w-[335px] border border-solid border-[#16161614] shadow-global-tokens-e2 overflow-hidden"
                      >
                        <div className="flex h-10 items-center justify-between w-full">
                          <div className="inline-flex items-center gap-2 p-2.5 bg-[linear-gradient(90deg,rgba(31,193,107,0.1)_0%,rgba(31,193,107,0)_100%)]">
                            <div className="w-1.5 h-1.5 bg-[#38a971] rounded-[3px]" />
                            <div className="font-semibold text-[#38a971] text-xs tracking-[-0.36px] leading-[16.8px]">
                              Admission Open!
                            </div>
                          </div>
                          <div className="h-10 bg-[#ecf0ff] flex items-center justify-center gap-1.5 px-4 py-1.5">
                            <div className="font-medium text-[#3762d9] text-sm leading-5">
                              Shortlist
                            </div>
                            <img
                              className="w-5 h-5"
                              alt="Archive"
                              src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-outline-archive.svg"
                            />
                          </div>
                        </div>

                        <CardContent className="p-0">
                          <div className="flex flex-col items-start gap-5 w-full">
                            <div className="flex flex-col items-start gap-3 px-4 py-0 w-full">
                              <div className="flex flex-col items-start gap-1.5 w-full">
                                <div className="font-semibold text-[#1d1d1f] text-xl tracking-[-0.20px]">
                                  {course.title}
                                </div>
                              </div>
                              <div className="flex flex-wrap items-start gap-[5px] w-full">
                                {course.tags.map((tag, tagIndex) => (
                                  <Badge
                                    key={`tag-${categoryIndex}-${courseIndex}-${tagIndex}`}
                                    variant="secondary"
                                    className="bg-[#35405a0d] font-normal text-slate-500 text-sm leading-6"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {course.specialTag && (
                                  <Badge
                                    className={`bg-[#fb92371a] font-normal text-[${course.specialTag.color}] text-sm leading-6`}
                                  >
                                    {course.specialTag.text}
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col items-start w-full">
                              <div className="flex items-center gap-2 px-4 py-2 w-full bg-[linear-gradient(90deg,rgba(55,99,218,0.15)_0%,rgba(55,99,218,0)_100%)]">
                                <div className="flex items-center">
                                  <img
                                    className="w-5 h-5"
                                    alt="Students"
                                    src="https://c.animaapp.com/mceait1kxMyQ7N/img/ellipse-1143.png"
                                  />
                                </div>
                                <div className="font-normal text-xs">
                                  <span className="font-semibold text-slate-500">
                                    500+
                                  </span>
                                  <span className="text-slate-500">
                                    {" "}
                                    students applied
                                  </span>
                                </div>
                              </div>
                              <Separator className="w-full" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between px-4 py-0 w-full">
                            <div className="flex flex-col items-start justify-center gap-2 flex-1">
                              <div className="font-normal text-slate-500 text-xs">
                                APPLICATION FEE
                              </div>
                              <div className="font-semibold text-[#1d1d1f] text-base">
                                {course.applicationFee}
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-2 flex-1">
                              <div className="font-normal text-slate-500 text-xs">
                                FIRST YEAR FEE
                              </div>
                              <div className="font-semibold text-[#1d1d1f] text-base">
                                {course.firstYearFee}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-4 px-4 py-5 w-full">
                            <Button className="w-full h-12 bg-[#ed1164] text-white hover:bg-[#ed1164]/90">
                              Apply
                            </Button>
                          </div>
                        </CardContent>

                        {course.closingDays && (
                          <div className="flex items-center justify-center gap-2.5 px-2.5 py-3 w-full bg-white overflow-hidden relative">
                            <div
                              className={`font-normal text-[${course.closingColor}] text-xs text-center`}
                            >
                              <span>Application will close in </span>
                              <span className="font-semibold">
                                {course.closingDays} days
                              </span>
                            </div>
                            <div
                              className={`absolute w-[257px] h-6 top-[47px] left-[39px] bg-[#fb3748] blur-[25px] opacity-70`}
                            />
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-start gap-5 w-full">
                    {courseCards.slice(3, 5).map((course, courseIndex) => (
                      <Card
                        key={`course-alt-${categoryIndex}-${courseIndex}`}
                        className="w-[335px] border border-solid border-[#16161614] shadow-global-tokens-e2 overflow-hidden pb-4"
                      >
                        <div className="flex h-10 items-center justify-between w-full">
                          <div
                            className={`inline-flex items-center gap-2 p-2.5 ${
                              course.status === "not-open"
                                ? "bg-[linear-gradient(90deg,rgba(53,64,90,0.1)_0%,rgba(53,64,90,0)_100%)]"
                                : "bg-[linear-gradient(90deg,rgba(255,219,67,0.1)_0%,rgba(255,219,67,0)_100%)]"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-[3px] ${
                                course.status === "not-open"
                                  ? "bg-slate-500"
                                  : "bg-[#dfb400]"
                              }`}
                            />
                            <div
                              className={`font-semibold text-xs tracking-[-0.36px] leading-[16.8px] ${
                                course.status === "not-open"
                                  ? "text-slate-500"
                                  : "text-[#dfb400]"
                              }`}
                            >
                              {course.status === "not-open"
                                ? "Admissions not Open"
                                : "Admissions Closed"}
                            </div>
                          </div>
                          <div className="h-10 bg-[#ecf0ff] flex items-center justify-center gap-1.5 px-4 py-1.5">
                            <div className="font-medium text-[#3762d9] text-sm leading-5">
                              Shortlist
                            </div>
                            <img
                              className="w-5 h-5"
                              alt="Archive"
                              src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-outline-archive.svg"
                            />
                          </div>
                        </div>

                        <CardContent className="p-0">
                          <div className="flex flex-col items-start gap-5 w-full">
                            <div className="flex flex-col items-start gap-5 w-full">
                              <div className="flex flex-col items-start gap-3 px-4 py-0 w-full">
                                <div className="flex flex-col items-start gap-1.5 w-full">
                                  <div className="font-semibold text-[#1d1d1f] text-xl tracking-[-0.20px]">
                                    {course.title}
                                  </div>
                                </div>
                                <div className="flex flex-wrap items-start gap-[5px] w-full">
                                  {course.tags.map((tag, tagIndex) => (
                                    <Badge
                                      key={`tag-alt-${categoryIndex}-${courseIndex}-${tagIndex}`}
                                      variant="secondary"
                                      className="bg-[#35405a0d] font-normal text-slate-500 text-sm leading-6"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                  {course.specialTag && (
                                    <Badge
                                      className={`bg-[#fb37481a] font-normal text-[${course.specialTag.color}] text-sm leading-6`}
                                    >
                                      {course.specialTag.text}
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              <div className="flex flex-col items-start w-full">
                                <div className="flex items-center gap-2 px-4 py-2 w-full bg-[linear-gradient(90deg,rgba(55,99,218,0.15)_0%,rgba(55,99,218,0)_100%)]">
                                  <div className="flex items-center">
                                    <img
                                      className="w-5 h-5"
                                      alt="Students"
                                      src="https://c.animaapp.com/mceait1kxMyQ7N/img/ellipse-1143.png"
                                    />
                                  </div>
                                  <div className="font-normal text-xs">
                                    <span className="font-semibold text-slate-500">
                                      500+
                                    </span>
                                    <span className="text-slate-500">
                                      {" "}
                                      students applied
                                    </span>
                                  </div>
                                </div>
                                <Separator className="w-full" />
                              </div>
                            </div>

                            <div className="flex items-center justify-between px-4 py-0 w-full">
                              <div className="flex flex-col items-start justify-center gap-2 flex-1">
                                <div className="font-normal text-slate-500 text-xs">
                                  APPLICATION FEE
                                </div>
                                <div className="font-semibold text-[#1d1d1f] text-base">
                                  {course.applicationFee}
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-center gap-2 flex-1">
                                <div className="font-normal text-slate-500 text-xs">
                                  FIRST YEAR FEE
                                </div>
                                <div className="font-semibold text-[#1d1d1f] text-base">
                                  {course.firstYearFee}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              <Separator className="w-full" />
            </div>
          ))}
        </div>
      </div>

      <Separator className="w-full" />

      {/* Explore Relevant Colleges Section */}
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex items-start justify-between w-full">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            Explore Relevant Colleges
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white rounded-full border border-solid border-[#0000001a] opacity-20 flex items-center justify-center">
              <img
                className="w-6 h-6"
                alt="Previous"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-left.svg"
              />
            </button>
            <button className="p-2 bg-white rounded-full border border-solid border-[#0000001a] flex items-center justify-center">
              <img
                className="w-6 h-6"
                alt="Next"
                src="https://c.animaapp.com/mceait1kxMyQ7N/img/vuesax-linear-arrow-right.svg"
              />
            </button>
          </div>
        </div>

        <ScrollArea className="w-full">
          <div className="flex items-start gap-4 w-full">
            <img
              className="w-[335px]"
              alt="College card"
              src="https://c.animaapp.com/mceait1kxMyQ7N/img/college-card-1.svg"
            />
            <img
              className="w-[335px]"
              alt="College card"
              src="https://c.animaapp.com/mceait1kxMyQ7N/img/college-card-4.svg"
            />
            <img
              className="w-[335px]"
              alt="College card"
              src="https://c.animaapp.com/mceait1kxMyQ7N/img/college-card.svg"
            />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
