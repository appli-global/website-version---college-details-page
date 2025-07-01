import React from "react";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";

export const CollegeDetailsPage = (): JSX.Element => {
  return (
    <main
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="39:14888"
    >
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        <div className="w-[141px] h-[141px] absolute top-[183px] left-[195px] bg-[#118aed99] rounded-[70.5px] blur-[50px] opacity-50" />

        <FrameSubsection />
        <FrameWrapperSubsection />
        <DivWrapperSubsection />
      </div>
    </main>
  );
};
