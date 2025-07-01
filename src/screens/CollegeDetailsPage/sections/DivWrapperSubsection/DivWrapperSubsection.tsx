import { ArrowRightIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const DivWrapperSubsection = (): JSX.Element => {
  // Navigation tab data
  const navigationTabs = [
    { name: "Basic Info", active: true },
    { name: "Must Know", active: false },
    { name: "Placements", active: false },
    { name: "Companies", active: false },
    { name: "Admission", active: false },
    { name: "Amenities", active: false },
    { name: "About", active: false },
    { name: "Location", active: false },
    { name: "Reviews", active: false },
    { name: "Alumies", active: false },
    { name: "Awards", active: false },
    { name: "Media", active: false },
    { name: "Policies", active: false },
    { name: "Other", active: false },
    { name: "Cources", active: false },
  ];

  return (
    <header className="flex flex-col w-full items-start justify-between pt-2.5 pb-0 px-6 md:px-12 lg:px-[200px] sticky top-0 z-10 bg-white border-b border-[#0000001a]">
      <div className="flex items-center justify-between relative self-stretch w-full">
        {/* Logo */}
        <div className="flex flex-col items-start gap-[6.53px] p-[5.22px] relative">
          <div className="relative w-[94.16px] h-[29.56px]">
            <img
              className="absolute w-[58px] h-[25px] top-[3px] left-9"
              alt="Text"
              src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/text.svg"
            />
            <img
              className="absolute w-[30px] h-[30px] top-0 left-0"
              alt="Icon"
              src="https://c.animaapp.com/mckdw3fnaZFcWZ/img/icon.svg"
            />
          </div>
        </div>

        {/* SearchIcon Bar */}
        <div className="flex w-full max-w-[400px] h-14 items-center justify-center gap-2.5 relative">
          <div className="flex h-14 items-center justify-between pl-4 pr-5 py-0 relative flex-1 grow bg-white rounded-[100px] border border-solid border-[#0000001f]">
            <div className="flex items-center gap-5 relative flex-1 grow">
              <div className="flex items-center gap-3.5 relative flex-1 grow">
                <SearchIcon className="w-5 h-5 text-slate-500" />
                <Input
                  className="border-0 p-0 h-auto shadow-none focus-visible:ring-0 [font-family:'Inter',Helvetica] font-normal text-slate-500 text-base"
                  placeholder="Find colleges, courses"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <Button className="h-12 px-6 py-0 bg-text-icon-primary rounded-lg border border-solid border-[#0000001a] [font-family:'Inter',Helvetica] font-medium text-white text-base">
          Log in
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex w-full max-w-[1040px] items-center relative overflow-hidden overflow-x-scroll">
        {navigationTabs.map((tab, index) => (
          <div
            key={`tab-${index}`}
            className={`inline-flex h-12 items-center justify-center gap-2.5 px-[18px] py-2.5 relative ${
              tab.active
                ? "border-b-[3px] [border-bottom-style:solid] border-[#1c1c1c]"
                : "self-stretch"
            }`}
          >
            <div
              className={`relative w-fit [font-family:'Inter',Helvetica] ${
                tab.active
                  ? "font-bold text-[#1c1c1c]"
                  : "font-medium text-slate-500"
              } text-sm text-center tracking-[-0.14px] leading-5 whitespace-nowrap`}
            >
              {tab.name}
            </div>
          </div>
        ))}

        {/* Scroll Button */}
        <div className="flex w-[100px] h-12 items-center justify-end gap-2.5 p-2.5 absolute top-0 right-0 bg-[linear-gradient(270deg,rgba(255,255,255,1)_55%,rgba(255,255,255,0)_100%)]">
          <Button
            variant="ghost"
            size="icon"
            className="flex w-8 h-8 justify-center items-center rounded-full bg-white p-0"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
