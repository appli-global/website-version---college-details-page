import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const UserProfileSection = (): JSX.Element => {
  // Navigation tabs data
  const navigationTabs = [
    { id: "basic-info", label: "Basic Info", active: true },
    { id: "must-know", label: "Must Know" },
    { id: "placements", label: "Placements" },
    { id: "companies", label: "Companies" },
    { id: "admission", label: "Admission" },
    { id: "amenities", label: "Amenities" },
    { id: "about", label: "About" },
    { id: "location", label: "Location" },
    { id: "reviews", label: "Reviews" },
    { id: "alumies", label: "Alumies" },
    { id: "awards", label: "Awards" },
    { id: "media", label: "Media" },
    { id: "policies", label: "Policies" },
    { id: "other", label: "Other" },
    { id: "cources", label: "Cources" },
  ];

  return (
    <header className="flex flex-col w-full items-start justify-between pt-2.5 pb-0 px-[200px] sticky top-0 z-50 bg-white border-b border-[#0000001a]">
      <div className="flex items-center justify-between relative self-stretch w-full">
        {/* Logo */}
        <div className="flex flex-col items-start gap-[6.53px] p-[5.22px]">
          <div className="relative w-[94.16px] h-[29.56px]">
            <img
              className="absolute w-[58px] h-[25px] top-[3px] left-9"
              alt="Text"
              src="https://c.animaapp.com/mceait1kxMyQ7N/img/text.svg"
            />
            <img
              className="absolute w-[30px] h-[30px] top-0 left-0"
              alt="Icon"
              src="https://c.animaapp.com/mceait1kxMyQ7N/img/icon.svg"
            />
          </div>
        </div>

        {/* SearchIcon Bar */}
        <div className="flex w-[400px] h-14 items-center justify-center gap-2.5">
          <div className="flex h-14 items-center justify-between pl-4 pr-5 py-0 relative flex-1 grow bg-white rounded-[100px] border border-solid border-[#0000001f]">
            <div className="flex items-center gap-5 w-full">
              <div className="flex items-center gap-3.5 w-full">
                <SearchIcon className="w-5 h-5 text-slate-500" />
                <Input
                  className="border-0 shadow-none focus-visible:ring-0 p-0 h-auto [font-family:'Inter',Helvetica] font-normal text-slate-500 text-base placeholder:text-slate-500"
                  placeholder="Find colleges, courses"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <Button className="h-12 px-6 py-0 bg-text-icon-primary rounded-lg border border-solid border-[#0000001a] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[-0.16px] leading-6">
          Log in
        </Button>
      </div>

      {/* Navigation Tabs */}
      <ScrollArea className="w-full">
        <div className="flex items-center">
          {navigationTabs.map((tab) => (
            <div
              key={tab.id}
              className={`inline-flex h-12 items-center justify-center px-[18px] py-2.5 ${
                tab.active ? "border-b-[3px] border-[#1c1c1c]" : ""
              }`}
            >
              <div
                className={`[font-family:'Inter',Helvetica] text-sm text-center tracking-[-0.14px] leading-5 whitespace-nowrap ${
                  tab.active
                    ? "font-bold text-[#1c1c1c]"
                    : "font-medium text-slate-500"
                }`}
              >
                {tab.label}
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </header>
  );
};
