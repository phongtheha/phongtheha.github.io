import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] text-center">
              2019 - 2022
            </p>
            <h2 className="text-4xl font-bold text-center">Industry Experience</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Data Scientist - RPA"
              subTitle="American Water Works"
              result="2021-2022"
              des={"•Used data analytics and process mining to assess 40 automation opportunities with business stakeholders and pinpointed 5 leading use cases for 2021, which was projected to save 2 millions dollars \n• Led end-to-end implementation of Accounts Payable Reporting Automation process using UiPath, SQL, Excel VBA,automated 100% of manual effort, increased frequency from semi-daily to daily, and saved 2000 manual hours"}
            />
            <ResumeCard
              title="Data Scientist - Machine Learning"
              subTitle="American Water Works"
              result="2019-2021"
              des={"• Managed full data science & machine learning (ML) pipelines encompassing EDA, data cleaning, feature engineering, feature selection, ML model building, evaluation, deployment to production on AWS, and delivering actionable business insights\n• Example projects include: Customer Feedback Text Classification, Call Center Volume Prediction using RNNs, NLP for Better Search Ranking Algorithm, and Human Resource Chatbot \n•Check out my PDF Resume (Download CV button below) for more details"}
            />
            <ResumeCard
              title="Data Analyst Intern"
              subTitle="Bureau of Labor Statistics"
              result="2017"
              des={"• Conducted research on the employment dynamics of five fastest growing occupations and industries in the past 20 years to verify employment projections hypotheses using BLS’s Occupation Employment Statistics data series. \n• Wrote press release and led presentation with time-series visualization to the Mid-Atlantic BLS office"}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] text-center">
              2017-2019
            </p>
            <h2 className="text-4xl font-bold text-center">Research Experience</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Machine Learning Researcher - NLP"
              subTitle="Temple University"
              result="2018-2019"
              des={"• Cleaned and analyzed large text dataset of 1+ millions career profiles. Performed clustering and data visualization using Tableau, matplotlib and seaborn to discover career trends in the job market \n• Developed an ML algorithm with Tensorflow called Iterative Mimicking (IM) that resulted in a better character-level embedding generator, capable of assigning a vector for any input strings, including OOV and rare words \n• Applied the proposed algorithm to solve the problem of job title normalization by representing all job titles and job descriptions in a joint semantic vector space. Outperformed 4 competitive baselines by 11% in accuracy"}
            />
            <ResumeCard
              title="Research Assistant"
              subTitle="Temple Economics Department (2017 - 2018)"
              result="2017-2018"
              des={"• Scraped research data from hundreds of sites using BeautifulSoup and wrangle data frames with pandas \n• Assisted Economics Department Chair with data visualization and data analysis using STATA and Python"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
