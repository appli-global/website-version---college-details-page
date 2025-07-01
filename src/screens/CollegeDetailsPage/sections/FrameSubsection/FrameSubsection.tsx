import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FrameSubsection = (): JSX.Element => {
  // Must Know features data
  const mustKnowFeatures = [
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-teacher.svg",
      title: "Scholarship",
      description: "Merit-based scholarship available",
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-3dcube.svg",
      title: "Private College",
      description: "This is a private college",
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-building-4.svg",
      title: "Great Campus and facilities",
      description: "Bigger campus with 20+ acer area",
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-device-message.svg",
      title: "Remote Learning",
      description: "Opportunities on selected courses",
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-document-text.svg",
      title: "Online Examination",
      description: "Online exam facilities available",
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-crown.svg",
      title: "Engineering Specialized",
      description: "Specialized in engineering courses",
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-user.svg",
      title: "Boys Only College",
      description: "This college only give admission to boys",
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-moneys.svg",
      title: "Good Placement Package",
      description: "Avg package 20 lakhs p.a.",
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-brifecase-tick.svg",
      title: "Best Placement Rate",
      description: "90% of the students get placements",
    },
  ];

  // Admission process steps
  const admissionSteps = [
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-document-text.svg",
      title: "Submit Application",
      description: "Share your academic details for verification.",
      showLine: true,
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-document-text.svg",
      title: "Application Acknowledgment",
      description:
        "You'll be notified once the college acknowledges your application. If there's no response, a refund will be initiated.",
      showLine: true,
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-clipboard-text.svg",
      title: "Give Entrance Exam",
      description: "Applicable for selected courses.",
      showInfo: true,
      showLine: true,
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-profile-tick.svg",
      title: "Application Acceptance",
      description:
        "Colleges will review your academic details and profile to decide your application status.",
      showLine: true,
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-document-copy.svg",
      title: "Verify Documents",
      description: "Verify documents asked by the college",
      showLine: true,
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-verify.svg",
      title: "Admission Confirmed",
      description: "Cheers! best of luck for your future",
      isSuccess: true,
      showLine: false,
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

  // Location & commute data
  const commutes = [
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-outline-train.svg",
      title: "400m from Majestic Metro Station",
      subtitle: "8 min walk from campus",
      showDirection: true,
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-outline-bus.svg",
      title: "1.5km from Banshankari Bus Stop",
      subtitle: "20 min walk from campus",
      showDirection: true,
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-outline-train.svg",
      title: "5Km for city Railway Station",
      subtitle: "20 mins away by auto/cab.",
      showDirection: true,
    },
    {
      icon: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-outline-car.svg",
      title: "Ride-Sharing Options",
      subtitle: "Ola, Uber, Rapido easily accessible near campus gate.",
      showDirection: false,
    },
  ];

  // Student reviews
  const studentReviews = [
    {
      avatar: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/ellipse-21.svg",
      name: "Rashmin kour",
      location: "Bengaluru, India",
      date: "4 Jan 2024",
      title: "Incredible college atmosphere",
      review:
        "The university has a thorough and efficient process for handling required paperwork, making the enrollment experience smooth and hassle-free.",
    },
    {
      avatar: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/ellipse-21-1.svg",
      name: "Rakesh Singh",
      location: "Bengaluru, India",
      date: "4 Jan 2024",
      title: "Incredible college atmosphere",
      review:
        "The university has a thorough and efficient process for handling required paperwork, making the enrollment experience smooth and hassle-free.",
    },
    {
      avatar: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/ellipse-21-2.svg",
      name: "Sushavon Paul",
      location: "Bengaluru, India",
      date: "4 Jan 2024",
      title: "Incredible college atmosphere",
      review:
        "The university has a thorough and efficient process for handling required paperwork, making the enrollment experience smooth and hassle-free.",
    },
  ];

  // Alumni success stories
  const alumniStories = [
    {
      image: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/image-3.svg",
      name: "Sourav Solanki",
      position: "SWE II @ Broadcom",
    },
    {
      image: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/image-2.svg",
      name: "Rashmin Kour",
      position: "Principal Engineer @ AWS",
    },
    {
      image: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/image-4.svg",
      name: "Menakshi Sharma",
      position: "SWE @ Google",
    },
  ];

  // News mentions
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
      courses: [
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "64 Seats"],
          status: "Admission Open!",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          closingIn: "3 days",
          statusColor: "green",
        },
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "30 Seats"],
          status: "Admission Open!",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          closingIn: "7 days",
          statusColor: "orange",
          seatWarning: true,
        },
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "64 Seats"],
          status: "Admission Open!",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          closingIn: "3 days",
          statusColor: "green",
        },
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "10 Seats"],
          status: "Admissions not Open",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          statusColor: "gray",
          seatWarning: true,
          seatWarningColor: "red",
        },
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "64 Seats"],
          status: "Admissions Closed",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          statusColor: "yellow",
        },
      ],
    },
    {
      title: "Master in Business Administration (MBA)",
      expanded: true,
      courses: [
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "64 Seats"],
          status: "Admission Open!",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          closingIn: "3 days",
          statusColor: "green",
        },
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "64 Seats"],
          status: "Admission Open!",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          closingIn: "3 days",
          statusColor: "green",
        },
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "64 Seats"],
          status: "Admissions not Open",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          statusColor: "gray",
        },
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "64 Seats"],
          status: "Admissions not Open",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          statusColor: "gray",
        },
        {
          title: "B.Sc in Mathematics",
          tags: ["UG", "3 Years", "Full Time", "64 Seats"],
          status: "Admissions Closed",
          applicationFee: "₹1,000",
          firstYearFee: "₹1,80,000",
          statusColor: "yellow",
        },
      ],
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

  // Top placement companies
  const placementCompanies = [
    {
      logo: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/microsoft-logo--2012--svg-1.png",
      alt: "Microsoft logo",
    },
    {
      logo: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/amazon-logo-svg-1.png",
      alt: "Amazon logo svg",
    },
    {
      logo: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/google-2015-logo-svg-1.png",
      alt: "Google logo svg",
    },
    {
      logo: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/logonetflix-1.png",
      alt: "Logonetflix",
    },
    {
      logo: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/meta-platforms-inc--logo-svg-1.png",
      alt: "Meta platforms inc",
    },
    {
      logo: "https://c.animaapp.com/mckdw3fnaZFcWZ/img/apple-logo-black.svg",
      alt: "Apple logo black",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-12 pt-12 pb-0 px-0">
      {/* Must Know Section */}
      <div className="flex flex-col w-full max-w-[488px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Must Know
        </h2>

        <div className="flex flex-col items-start gap-5 w-full">
          {mustKnowFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div className="flex items-center gap-5 w-full">
                <div className="flex w-12 h-12 items-center justify-center gap-2.5 bg-[#f5f6f7] rounded-xl">
                  <img
                    className="w-6 h-6"
                    alt={feature.title}
                    src={feature.icon}
                  />
                </div>

                <div className="flex flex-col items-start gap-1 flex-1">
                  <h3 className="font-medium text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-slate-500 text-sm tracking-[-0.28px] leading-[22px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="w-full max-w-[488px]" />

      {/* Placement & Packages Section */}
      <div className="flex flex-col w-full max-w-[488px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Placement &amp; Packages
        </h2>

        <Card className="w-full border border-solid border-[#0000001a] rounded-2xl">
          <CardContent className="p-0">
            <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 relative">
              <p className="font-semibold text-slate-500 text-sm">
                PLACEMENT RATE
              </p>
              <p className="font-extrabold text-[40px] tracking-[-0.80px] bg-gradient-to-br from-[rgba(22,132,74,1)] via-[rgba(31,193,107,1)] to-[rgba(22,132,74,1)] text-transparent bg-clip-text">
                90%
              </p>
              <p className="font-normal text-[#16161680] text-base tracking-[-0.32px]">
                since last 3 year
              </p>
              <div className="absolute w-[186px] h-[186px] top-[-137px] left-[150px] bg-[#1fc16b] rounded-[93.11px] rotate-[-120deg] blur-2xl opacity-30" />
            </div>

            <Separator className="w-full" />

            <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 relative">
              <p className="font-semibold text-slate-500 text-sm">
                HIGHEST PACKAGE
              </p>
              <p className="font-normal text-[#16161680] text-base tracking-[-0.32px]">
                per annum
              </p>
              <div className="absolute w-[186px] h-[186px] top-[-137px] left-[150px] bg-[#ed1164] rounded-[93.11px] rotate-[-120deg] blur-2xl opacity-30" />
            </div>

            <Separator className="w-full" />

            <div className="flex flex-col items-center justify-center gap-1 px-3 py-7">
              <p className="font-semibold text-slate-500 text-sm">
                AVERAGE PACKAGE
              </p>
              <p className="font-extrabold text-[40px] tracking-[-0.80px]">
                <span className="font-extrabold text-black tracking-[-0.32px]">
                  20
                </span>
                <span className="font-bold text-black tracking-[-0.32px]">
                  &nbsp;
                </span>
                <span className="text-black tracking-[-0.32px]">Lakhs</span>
              </p>
              <p className="font-normal text-[#16161680] text-base tracking-[-0.32px]">
                per annum
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-slate-500 text-xs text-center tracking-[-0.24px] leading-[18px] w-full">
          Placement information is submitted and maintained by Greenfield
          University
        </p>
      </div>

      <Separator className="w-full max-w-[488px]" />

      {/* Top Placement Companies */}
      <div className="flex flex-col w-full max-w-[488px] items-start gap-5 overflow-hidden">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Top Placement Companies
        </h2>

        <div className="flex w-full items-center gap-[22px] overflow-x-auto">
          {placementCompanies.map((company, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-start gap-2.5 p-2.5 flex-shrink-0"
            >
              <img
                className="h-6 object-contain"
                alt={company.alt}
                src={company.logo}
              />
            </div>
          ))}
        </div>

        <div className="flex w-full items-center gap-[22px] overflow-x-auto">
          {placementCompanies.map((company, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-start gap-2.5 p-2.5 flex-shrink-0"
            >
              <img
                className="h-6 object-contain"
                alt={company.alt}
                src={company.logo}
              />
            </div>
          ))}
        </div>

        <Button className="w-[200px] h-12 bg-[#ed116414] text-brand-primary hover:bg-[#ed116420]">
          View all 35 companies
        </Button>
      </div>

      <Separator className="w-full max-w-[488px]" />

      {/* Admission Process */}
      <div className="flex flex-col w-full max-w-[488px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Admission Process
        </h2>

        <div className="flex flex-col items-start w-full">
          {admissionSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-5 w-full">
                <div
                  className={`w-12 h-12 flex items-center justify-center gap-2.5 rounded-xl ${step.isSuccess ? "bg-[#1fc16b1a]" : "bg-[#ecf0ff]"}`}
                >
                  <img className="w-6 h-6" alt={step.title} src={step.icon} />
                </div>

                <div className="flex flex-col items-start gap-1 flex-1">
                  <div className="flex items-center gap-2 w-full">
                    <h3 className="font-medium text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
                      {step.title}
                    </h3>
                    {step.showInfo && (
                      <img
                        className="w-4 h-4"
                        alt="Info"
                        src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-info-circle.svg"
                      />
                    )}
                  </div>
                  <p className="font-normal text-slate-500 text-sm tracking-[-0.28px] leading-[22px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {step.showLine && (
                <div className="flex w-12 items-center justify-center">
                  <img
                    className="w-px h-7"
                    alt="Line"
                    src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/line-30.svg"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Separator className="w-full max-w-[488px]" />

      {/* Top Amenities */}
      <div className="flex flex-col w-full max-w-[460px] items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Top Amenities
        </h2>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex h-11 items-center gap-3 w-full rounded-xl"
              >
                <img
                  className="w-7 h-7"
                  alt="Amenity icon"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-book-saved.svg"
                />
                <p className="font-normal text-[#1c1c1c] text-base text-center leading-[18px]">
                  {amenity}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-[200px] h-12 bg-[#ed116414] text-brand-primary hover:bg-[#ed116420]">
          View all
        </Button>
      </div>

      <Separator className="w-full max-w-[488px]" />

      {/* About College */}
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

      {/* Location & Commute */}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Location &amp; Commute
        </h2>

        <div className="flex items-start gap-[60px] w-full">
          <div className="flex flex-col items-start gap-5 flex-1">
            {commutes.map((commute, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-4 w-full rounded-xl">
                  <img
                    className="w-7 h-7"
                    alt="Transport icon"
                    src={commute.icon}
                  />

                  <div className="flex flex-col items-start justify-center gap-3 flex-1">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <p className="font-normal text-[#1c1c1c] text-base leading-[18px]">
                        {commute.title}
                      </p>
                      <p className="font-normal text-slate-500 text-sm leading-[18px]">
                        {commute.subtitle}
                      </p>
                    </div>

                    {commute.showDirection && (
                      <div className="inline-flex items-center gap-2 pl-1 pr-2 py-1 bg-[#ecf0ff] rounded-lg">
                        <img
                          className="w-5 h-5"
                          alt="Direction"
                          src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-route-square.svg"
                        />
                        <span className="font-medium text-[#3762d9] text-sm leading-[18px]">
                          Get Direction
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {index < commutes.length - 1 && (
                  <Separator className="w-full" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex h-[420px] items-start gap-3 flex-1 rounded-2xl overflow-hidden relative">
            <img
              className="w-full h-full object-cover"
              alt="Map"
              src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/rectangle-23887.png"
            />
            <button className="p-2 absolute top-[11px] right-[11px] border border-solid border-[#1616161a] shadow-[0px_4px_12px_#00000033] inline-flex items-center justify-center gap-2.5 bg-white rounded-full">
              <img
                className="w-5 h-5"
                alt="Maximize"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-maximize-4.svg"
              />
            </button>
            <div className="absolute w-12 h-[53px] top-[163px] left-[223px] bg-[url(https://c.animaapp.com/mckdw3fnaZFcWZ/img/union.svg)] bg-[100%_100%]">
              <img
                className="absolute w-6 h-6 top-3 left-[13px]"
                alt="Building"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-building-4.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator className="w-full" />

      {/* What Students Say */}
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex items-start justify-between w-full">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            What Students Say
          </h2>

          <div className="inline-flex items-center gap-4">
            <button className="inline-flex items-center justify-center p-2 bg-white rounded-full border border-solid border-[#0000001a] opacity-20">
              <img
                className="w-6 h-6"
                alt="Previous"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-left.svg"
              />
            </button>
            <button className="inline-flex items-center justify-center p-2 bg-white rounded-full border border-solid border-[#0000001a]">
              <img
                className="w-6 h-6"
                alt="Next"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-right.svg"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 w-full">
          <div className="flex items-end justify-center w-full">
            <div className="relative w-[30.48px] h-[30.48px]">
              <div className="relative w-[30px] h-[30px]">
                <img
                  className="absolute w-[69px] h-[69px] -top-3.5 left-[-19px]"
                  alt="Star"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/star.png"
                />
              </div>
            </div>
            <div className="relative w-[45px] h-[45px]">
              <div className="relative h-[45px]">
                <img
                  className="absolute w-[83px] h-[82px] top-[-13px] left-[-19px]"
                  alt="Star"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/star-1.png"
                />
              </div>
            </div>
            <div className="relative w-20 h-20">
              <div className="relative h-20">
                <img
                  className="absolute w-[120px] h-[119px] top-[-13px] -left-5"
                  alt="Star"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/star-2.png"
                />
              </div>
            </div>
            <div className="relative w-[45px] h-[45px]">
              <div className="relative h-[45px]">
                <img
                  className="absolute w-[83px] h-[82px] top-[-13px] left-[-19px]"
                  alt="Star"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/star-3.png"
                />
              </div>
            </div>
            <img
              className="relative w-[61.79px] h-[64.49px] mb-[-20.23px]"
              alt="Star"
              src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-star.svg"
            />
          </div>

          <h3 className="w-full text-center font-bold text-6xl tracking-[-1.20px] bg-gradient-to-br from-[rgba(102,102,102,1)] via-[rgba(0,0,0,1)] to-[rgba(102,102,102,1)] text-transparent bg-clip-text">
            4.8
          </h3>
          <p className="w-full text-center font-normal text-[#16161680] text-base tracking-[-0.32px] leading-[22px]">
            488 reviews
          </p>
        </div>

        <div className="flex items-start gap-4 w-full overflow-x-auto">
          {studentReviews.map((review, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[281px] border border-solid border-[#16161614]"
            >
              <CardContent className="p-4 flex flex-col gap-5">
                <div className="flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-5">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="inline-flex flex-col items-start justify-center">
                      <p className="font-semibold text-foundationgreynormal text-base tracking-[-0.32px] leading-6">
                        {review.name}
                      </p>
                      <p className="font-light text-slate-500 text-sm tracking-[-0.28px] leading-5">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="inline-flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img
                          key={star}
                          className="w-5 h-5"
                          alt="Star"
                          src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/icon-grade-5.svg"
                        />
                      ))}
                    </div>
                    <p className="font-light text-slate-500 text-sm tracking-[-0.28px] leading-5">
                      {review.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 w-full">
                  <h4 className="font-semibold text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
                    {review.title}
                  </h4>
                  <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col items-start gap-4 w-full">
                      <p className="font-normal text-slate-500 text-base tracking-[-0.32px] leading-[22px]">
                        {review.review}
                      </p>
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

      {/* Alumni Success Stories */}
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex items-start justify-between w-full">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            Alumni Success Stories
          </h2>

          <div className="inline-flex items-center gap-4">
            <button className="inline-flex items-center justify-center p-2 bg-white rounded-full border border-solid border-[#0000001a] opacity-20">
              <img
                className="w-6 h-6"
                alt="Previous"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-left.svg"
              />
            </button>
            <button className="inline-flex items-center justify-center p-2 bg-white rounded-full border border-solid border-[#0000001a]">
              <img
                className="w-6 h-6"
                alt="Next"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-right.svg"
              />
            </button>
          </div>
        </div>

        <div className="flex h-[460px] items-center gap-4 w-full overflow-x-auto">
          {alumniStories.map((alumni, index) => (
            <div
              key={index}
              className="inline-flex items-start gap-4 relative flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <img
                className="w-[280px] h-[460px] object-cover"
                alt={alumni.name}
                src={alumni.image}
              />
              <div className="flex flex-col w-[280px] items-start gap-1 p-5 absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]">
                <h3 className="font-semibold text-white text-xl tracking-[-0.40px]">
                  {alumni.name}
                </h3>
                <p className="opacity-60 font-normal text-white text-sm tracking-[-0.28px]">
                  {alumni.position}
                </p>
              </div>
              {index === 2 && (
                <img
                  className="absolute w-6 h-6 top-5 right-5"
                  alt="Facebook"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-facebook.svg"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Separator className="w-full" />

      {/* Awards & Recognition */}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Awards &amp; Recognition
        </h2>

        <div className="flex items-start gap-4 w-full">
          <img
            className="w-[146px]"
            alt="Awards recognition"
            src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/awards---recgnition-1.svg"
          />
          <img
            className="w-[146px]"
            alt="Awards recognition"
            src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/awards---recgnition-2.svg"
          />
          <img
            className="w-[146px]"
            alt="Awards recognition"
            src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/awards---recgnition.svg"
          />
        </div>
      </div>

      <Separator className="w-full" />

      {/* Media and News Mentions */}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Media and News Mentions
        </h2>

        <div className="flex items-start gap-4 w-full overflow-x-auto">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="flex flex-col w-[220px] items-start justify-end relative bg-white rounded-2xl overflow-hidden flex-shrink-0"
            >
              <div className="relative self-stretch w-full h-[155px] bg-[url(https://c.animaapp.com/mckdw3fnaZFcWZ/img/frame-1171275941.svg)] bg-cover bg-center" />
              <div className="flex flex-col items-start justify-center gap-2 p-3 w-full rounded-b-2xl border-r border-b border-l border-[#16161614]">
                <h3 className="font-semibold text-[#1c1c1c] text-sm tracking-[-0.28px] leading-[18.9px]">
                  {news.title}
                </h3>
                <div className="flex items-center gap-2 w-full">
                  <span className="font-normal text-slate-500 text-xs leading-[18px]">
                    {news.source}
                  </span>
                  <div className="w-1 h-1 bg-[#d9d9d9] rounded-sm" />
                  <span className="font-normal text-slate-500 text-xs leading-[18px]">
                    {news.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="w-full" />

      {/* Student Support & Policies */}
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

        <div className="flex flex-col items-start gap-5 flex-1 opacity-0">
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
      </div>

      <Separator className="w-full" />

      {/* College Website & Social Media */}
      <div className="flex items-start gap-[60px] w-full">
        <div className="flex flex-col items-start gap-5 flex-1">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            College Website
          </h2>
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex items-center gap-5 w-full">
              <div className="flex flex-col items-start gap-1 flex-1">
                <p className="font-normal text-slate-500 text-sm tracking-[-0.28px] leading-[22px]">
                  Website
                </p>
                <p className="font-medium text-[#1c1c1c] text-base tracking-[-0.32px] leading-[22px]">
                  www.greenfielduniversity.com
                </p>
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
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-facebook.svg"
              />
            </div>
            <div className="flex w-12 h-12 items-center justify-center bg-[#ed11651a] rounded-xl">
              <img
                className="w-6 h-6"
                alt="Instagram"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-instagram.svg"
              />
            </div>
            <div className="flex w-12 h-12 items-center justify-center bg-[#ed11651a] rounded-xl">
              <img
                className="w-6 h-6"
                alt="Twitch"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-twitch.svg"
              />
            </div>
            <div className="flex w-12 h-12 items-center justify-center bg-[#ed11651a] rounded-xl">
              <img
                className="w-6 h-6"
                alt="Dribbble"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-bold-dribbble.svg"
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
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-document-text.svg"
                />
              </div>
              <div className="flex flex-col items-start flex-1">
                <h3 className="font-semibold text-[#1c1c1c] text-sm tracking-[-0.28px] leading-[22px]">
                  Brochure 1
                </h3>
                <p className="font-normal text-slate-500 text-xs tracking-[-0.24px] leading-[22px]">
                  25 KB
                </p>
              </div>
            </div>
            <img
              className="w-6 h-6"
              alt="Download"
              src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-import.svg"
            />
          </div>
        </div>
      </div>

      <Separator className="w-full" />

      {/* Courses & Fees */}
      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
          Courses &amp; Fees
        </h2>

        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex items-center gap-5 w-full">
            <div className="flex w-[400px] h-14 items-center justify-center relative">
              <div className="flex h-14 items-center justify-between pl-4 pr-5 py-0 flex-1 bg-white rounded-full border border-solid border-[#0000001f]">
                <div className="flex items-center gap-2.5 flex-1">
                  <img
                    className="w-5 h-5"
                    alt="Search"
                    src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-search-normal.svg"
                  />
                  <Input
                    className="flex-1 border-none shadow-none focus-visible:ring-0 placeholder:text-slate-500"
                    placeholder="Find courses at Greenfield University"
                  />
                </div>
              </div>
            </div>

            <Separator orientation="vertical" className="h-10" />

            <div className="flex w-[335px] h-9 items-start gap-2 overflow-x-auto">
              <Badge
                variant="outline"
                className="h-9 px-4 py-2 gap-2 rounded-full bg-white"
              >
                All Filter
                <img
                  className="w-4 h-4"
                  alt="Settings"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-setting-4.svg"
                />
              </Badge>
              <Badge
                variant="outline"
                className="h-9 px-4 py-2 gap-2 rounded-full bg-white"
              >
                Sort by
                <img
                  className="w-4 h-4"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-down.svg"
                />
              </Badge>
              <Badge
                variant="outline"
                className="h-9 px-4 py-2 gap-2 rounded-full bg-white"
              >
                Program Type
                <img
                  className="w-4 h-4"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-down.svg"
                />
              </Badge>
              <Badge
                variant="outline"
                className="h-9 px-4 py-2 gap-2 rounded-full bg-white"
              >
                Admission Status
                <img
                  className="w-4 h-4"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-down.svg"
                />
              </Badge>
              <Badge
                variant="outline"
                className="h-9 px-4 py-2 gap-2 rounded-full bg-white"
              >
                Fee Range
                <img
                  className="w-4 h-4"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-down.svg"
                />
              </Badge>
              <Badge
                variant="outline"
                className="h-9 px-4 py-2 gap-2 rounded-full bg-white"
              >
                Course Criteria
                <img
                  className="w-4 h-4"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-down.svg"
                />
              </Badge>
              <Badge
                variant="outline"
                className="h-9 px-4 py-2 gap-2 rounded-full bg-white"
              >
                Course Duration
                <img
                  className="w-4 h-4"
                  alt="Arrow down"
                  src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-down.svg"
                />
              </Badge>
            </div>
          </div>

          {courseCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="flex flex-col items-start gap-3 w-full"
            >
              <div className="flex items-start justify-center gap-10 w-full">
                <h3 className="flex-1 font-semibold text-slate-500 text-base tracking-[-0.32px] leading-[22px]">
                  {category.title}
                </h3>
                <img
                  className="w-6 h-6"
                  alt="Arrow"
                  src={
                    category.expanded
                      ? "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-up.svg"
                      : "https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-down.svg"
                  }
                />
              </div>

              {category.expanded && category.courses && (
                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="flex flex-wrap items-start gap-5 w-full">
                    {category.courses.slice(0, 3).map((course, courseIndex) => (
                      <Card
                        key={courseIndex}
                        className="flex-shrink-0 w-[335px] border border-solid border-[#16161614] shadow-global-tokens-e2 overflow-hidden"
                      >
                        <div className="flex h-10 items-center justify-between">
                          <div
                            className={`inline-flex items-center justify-center gap-2 p-2.5 bg-gradient-to-r ${
                              course.statusColor === "green"
                                ? "from-[rgba(31,193,107,0.1)] to-transparent"
                                : course.statusColor === "orange"
                                  ? "from-[rgba(255,219,67,0.1)] to-transparent"
                                  : course.statusColor === "yellow"
                                    ? "from-[rgba(255,219,67,0.1)] to-transparent"
                                    : "from-[rgba(53,64,90,0.1)] to-transparent"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-[3px] ${
                                course.statusColor === "green"
                                  ? "bg-[#38a971]"
                                  : course.statusColor === "orange"
                                    ? "bg-[#dfb400]"
                                    : course.statusColor === "yellow"
                                      ? "bg-[#dfb400]"
                                      : "bg-slate-500"
                              }`}
                            />
                            <span
                              className={`font-semibold text-xs tracking-[-0.36px] leading-[16.8px] ${
                                course.statusColor === "green"
                                  ? "text-[#38a971]"
                                  : course.statusColor === "orange"
                                    ? "text-[#dfb400]"
                                    : course.statusColor === "yellow"
                                      ? "text-[#dfb400]"
                                      : "text-slate-500"
                              }`}
                            >
                              {course.status}
                            </span>
                          </div>
                          <div className="inline-flex h-10 rounded-bl-xl overflow-hidden">
                            <div className="bg-[#ecf0ff] flex items-center justify-center gap-1.5 px-4 py-1.5 h-full">
                              <span className="font-medium text-[#3762d9] text-sm whitespace-nowrap">
                                Shortlist
                              </span>
                              <img
                                className="w-5 h-5"
                                alt="Archive"
                                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-outline-archive.svg"
                              />
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-0">
                          <div className="flex flex-col items-start gap-5">
                            <div className="flex flex-col items-start gap-5 w-full">
                              <div className="flex flex-col items-start gap-3 px-4 py-0 w-full">
                                <div className="flex flex-col items-start gap-1.5 w-full">
                                  <h4 className="font-semibold text-[#1d1d1f] text-xl tracking-[-0.20px]">
                                    {course.title}
                                  </h4>
                                </div>

                                <div className="flex flex-wrap items-start gap-[5px] w-full">
                                  {course.tags.map((tag, tagIndex) => (
                                    <Badge
                                      key={tagIndex}
                                      variant="outline"
                                      className={`px-2.5 py-0.5 ${
                                        course.seatWarning && tagIndex === 3
                                          ? course.seatWarningColor === "red"
                                            ? "bg-[#fb37481a] text-[#d00416]"
                                            : "bg-[#fb92371a] text-[#d05504]"
                                          : "bg-[#35405a0d] text-slate-500"
                                      }`}
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col items-start w-full">
                                <div className="flex items-center gap-2 px-4 py-2 w-full bg-gradient-to-r from-[rgba(55,99,218,0.15)] to-transparent">
                                  <div className="inline-flex items-center">
                                    <img
                                      className="w-5 h-5"
                                      alt="Students"
                                      src="https://c.animaapp.com/mckdw3fnaZ
FcWZ/img/ellipse-1143.png"
                                    />
                                    <img
                                      className="w-[16.89px] h-5"
                                      alt="Student"
                                      src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-20.png"
                                    />
                                    <img
                                      className="w-[16.81px] h-5 object-cover"
                                      alt="Student"
                                      src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-21.png"
                                    />
                                  </div>
                                  <p className="font-normal text-xs">
                                    <span className="font-semibold text-slate-500">
                                      500+
                                    </span>
                                    <span className="text-slate-500">
                                      {" "}
                                      students applied
                                    </span>
                                  </p>
                                </div>
                                <Separator className="w-full" />
                              </div>
                            </div>

                            <div className="flex items-center justify-between px-4 py-0 w-full">
                              <div className="flex flex-col items-start justify-center gap-2 flex-1">
                                <p className="font-normal text-slate-500 text-xs">
                                  APPLICATION FEE
                                </p>
                                <p className="font-semibold text-[#1d1d1f] text-base">
                                  {course.applicationFee}
                                </p>
                              </div>
                              <div className="flex flex-col items-start justify-center gap-2 flex-1">
                                <p className="font-normal text-slate-500 text-xs">
                                  FIRST YEAR FEE
                                </p>
                                <p className="font-semibold text-[#1d1d1f] text-base whitespace-nowrap">
                                  {course.firstYearFee}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-4 px-4 py-0 w-full">
                              {course.status.includes("Open") && (
                                <Button className="h-12 w-full bg-[#ed1164] text-white hover:bg-[#d01058]">
                                  Apply
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>

                        {course.closingIn && (
                          <div className="flex items-center justify-center gap-2.5 px-2.5 py-3 w-full bg-white overflow-hidden relative">
                            <p
                              className={`font-normal text-xs text-center ${
                                course.statusColor === "orange"
                                  ? "text-[#d05504]"
                                  : "text-[#d00416]"
                              }`}
                            >
                              Application will close in{" "}
                              <span className="font-semibold">
                                {course.closingIn}
                              </span>
                            </p>
                            <div
                              className={`absolute w-[257px] h-6 top-[47px] left-[39px] ${
                                course.statusColor === "orange"
                                  ? "bg-[#fb9237]"
                                  : "bg-[#fb3748] opacity-70"
                              } blur-[25px]`}
                            />
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-start gap-5 w-full">
                    {category.courses.slice(3, 5).map((course, courseIndex) => (
                      <Card
                        key={courseIndex}
                        className="flex-shrink-0 w-[335px] border border-solid border-[#16161614] shadow-global-tokens-e2 overflow-hidden pb-4"
                      >
                        <div className="flex h-10 items-center justify-between">
                          <div
                            className={`inline-flex items-center justify-center gap-2 p-2.5 bg-gradient-to-r ${
                              course.statusColor === "green"
                                ? "from-[rgba(31,193,107,0.1)] to-transparent"
                                : course.statusColor === "orange"
                                  ? "from-[rgba(255,219,67,0.1)] to-transparent"
                                  : course.statusColor === "yellow"
                                    ? "from-[rgba(255,219,67,0.1)] to-transparent"
                                    : "from-[rgba(53,64,90,0.1)] to-transparent"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-[3px] ${
                                course.statusColor === "green"
                                  ? "bg-[#38a971]"
                                  : course.statusColor === "orange"
                                    ? "bg-[#dfb400]"
                                    : course.statusColor === "yellow"
                                      ? "bg-[#dfb400]"
                                      : "bg-slate-500"
                              }`}
                            />
                            <span
                              className={`font-semibold text-xs tracking-[-0.36px] leading-[16.8px] ${
                                course.statusColor === "green"
                                  ? "text-[#38a971]"
                                  : course.statusColor === "orange"
                                    ? "text-[#dfb400]"
                                    : course.statusColor === "yellow"
                                      ? "text-[#dfb400]"
                                      : "text-slate-500"
                              }`}
                            >
                              {course.status}
                            </span>
                          </div>
                          <div className="inline-flex h-10 rounded-bl-xl overflow-hidden">
                            <div className="bg-[#ecf0ff] flex items-center justify-center gap-1.5 px-4 py-1.5 h-full">
                              <span className="font-medium text-[#3762d9] text-sm whitespace-nowrap">
                                Shortlist
                              </span>
                              <img
                                className="w-5 h-5"
                                alt="Archive"
                                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-outline-archive.svg"
                              />
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-0">
                          <div className="flex flex-col items-start gap-5">
                            <div className="flex flex-col items-start gap-5 w-full">
                              <div className="flex flex-col items-start gap-3 px-4 py-0 w-full">
                                <div className="flex flex-col items-start gap-1.5 w-full">
                                  <h4 className="font-semibold text-[#1d1d1f] text-xl tracking-[-0.20px]">
                                    {course.title}
                                  </h4>
                                </div>

                                <div className="flex flex-wrap items-start gap-[5px] w-full">
                                  {course.tags.map((tag, tagIndex) => (
                                    <Badge
                                      key={tagIndex}
                                      variant="outline"
                                      className={`px-2.5 py-0.5 ${
                                        course.seatWarning && tagIndex === 3
                                          ? course.seatWarningColor === "red"
                                            ? "bg-[#fb37481a] text-[#d00416]"
                                            : "bg-[#fb92371a] text-[#d05504]"
                                          : "bg-[#35405a0d] text-slate-500"
                                      }`}
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col items-start w-full">
                                <div className="flex items-center gap-2 px-4 py-2 w-full bg-gradient-to-r from-[rgba(55,99,218,0.15)] to-transparent">
                                  <div className="inline-flex items-center">
                                    <img
                                      className="w-5 h-5"
                                      alt="Students"
                                      src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/ellipse-1143.png"
                                    />
                                    <img
                                      className="w-[16.89px] h-5"
                                      alt="Student"
                                      src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-20.png"
                                    />
                                    <img
                                      className="w-[16.81px] h-5 object-cover"
                                      alt="Student"
                                      src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/subtract-21.png"
                                    />
                                  </div>
                                  <p className="font-normal text-xs">
                                    <span className="font-semibold text-slate-500">
                                      500+
                                    </span>
                                    <span className="text-slate-500">
                                      {" "}
                                      students applied
                                    </span>
                                  </p>
                                </div>
                                <Separator className="w-full" />
                              </div>
                            </div>

                            <div className="flex items-center justify-between px-4 py-0 w-full">
                              <div className="flex flex-col items-start justify-center gap-2 flex-1">
                                <p className="font-normal text-slate-500 text-xs">
                                  APPLICATION FEE
                                </p>
                                <p className="font-semibold text-[#1d1d1f] text-base">
                                  {course.applicationFee}
                                </p>
                              </div>
                              <div className="flex flex-col items-start justify-center gap-2 flex-1">
                                <p className="font-normal text-slate-500 text-xs">
                                  FIRST YEAR FEE
                                </p>
                                <p className="font-semibold text-[#1d1d1f] text-base whitespace-nowrap">
                                  {course.firstYearFee}
                                </p>
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

      {/* Explore Relevant Colleges */}
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex items-start justify-between w-full">
          <h2 className="font-semibold text-black text-2xl tracking-[-0.48px]">
            Explore Relevant Colleges
          </h2>

          <div className="inline-flex items-center gap-4">
            <button className="inline-flex items-center justify-center p-2 bg-white rounded-full border border-solid border-[#0000001a] opacity-20">
              <img
                className="w-6 h-6"
                alt="Previous"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-left.svg"
              />
            </button>
            <button className="inline-flex items-center justify-center p-2 bg-white rounded-full border border-solid border-[#0000001a]">
              <img
                className="w-6 h-6"
                alt="Next"
                src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/vuesax-linear-arrow-right.svg"
              />
            </button>
          </div>
        </div>

        <div className="flex items-start gap-4 w-full overflow-x-auto">
          <img
            className="max-w-[335px] w-[375px]"
            alt="College card"
            src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/college-card.svg"
          />
          <img
            className="max-w-[335px] w-[375px]"
            alt="College card"
            src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/college-card-1.svg"
          />
          <img
            className="max-w-[335px] w-[375px]"
            alt="College card"
            src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/college-card-2.svg"
          />
        </div>
      </div>
    </section>
  );
};
