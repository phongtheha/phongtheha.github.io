import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col text-center gap-4">
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Out to Innovate Scholarships"
            subTitle="Issued by NOGLSTP"
            result="2022"
            des="Scholarship for LGBTQ+ students in STEM field"
          />
          <ResumeCard
            title="Fung Institute Opportunity Grant"
            subTitle="Issued by UC Berkeley"
            result="2022"
            des="Scholarship for UC Berkeley MEng Students"
          />
          <ResumeCard
            title="Phi Beta Kappa"
            subTitle="Award to top 10% of graduating class"
            result="2019"
            des="The most prestigious honor society in the US"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col text-center gap-4">
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Phyllis Zayon Steinberg Memorial Award in Mathematics"
            subTitle="Issued by Mathematics Department at Temple University"
            result="2019"
            des="Presented to a member of the graduating class who has demonstrated superior achievements in the math program and has promise in the field of mathematics"
          />
          <ResumeCard
            title="Dean's List"
            subTitle="Temple University"
            result="2015-2019"
            des="Made Dean's List every semester"
          />
          <ResumeCard
            title="Provost Scholarship, University Honors Program"
            subTitle="Temple University"
            result="2015-2019"
            des="Scholarship to attend Temple University"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
