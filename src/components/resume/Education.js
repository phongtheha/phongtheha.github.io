import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 justify-center items-center"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] justify-center items-center text-center">2011 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold justify-center items-center text-center">Educational Qualifications</h2>
        </div>
        <div className="mt-4 lgl:mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6">
          <ResumeCard
            title="University of California, Berkeley"
            subTitle="Master of Engineering in Electrical Engineering and Computer Science (EECS)"
            result="2022-2023"
            des={"GPA: 3.90/4.0\n\nConcentration in Data Science and Systems\n\nRelevant Technical Coursework: \nMachine Learning (A)\nNatural Language Processing (A)\nDeep Reinforcement Learning (A)\n User Interface Design and Development (A-)\nPrinciples of Data Science (Audited) \n\n Leadership Coursework: Marketing and Product Management (A), Entrepreneurship (A) \nCommunications for Engineering Leaders (A-), Organizational Behaviors (A-)"}
          />
          <ResumeCard
            title="Temple University"
            subTitle="Bachelor of Arts in Mathematics"
            result="2015-2019"
            des={"GPA: 3.90/4.0\n\nMajored in Mathematics, \n with Minors in Computer Science and Economics, and Certificate in Data Science\n\nRelevant Coursework: \nData Structures & Algorithms (A), Statistics (A), Linear Algebra (A), Calculus1,2&3 (A)\nMachine Learning (A), Data Science (A), Real & Complex Analysis (A)\nAbstract Algebra (A), Probability Theory (A-), Differential Equations (A), Numerical Analysis (A)"}
          />
          <ResumeCard
            title="Viet Duc High School"
            subTitle="High School Diploma"
            result="2011-2013"
            des={"GPA: 86.50%\nOne of the top high schools in Hanoi, Vietnam"}
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" The Complete 2023 Web Development Bootcamp By Angela Yu"
            subTitle="Udemy - (01/01/2023 - 20/06/2023) [6 months]"
            result="Online"
            des="Learnt MERN stack and made various project using the skills in this course. Check out my Github for project info !"
          />
          <ResumeCard
            title=" Machine Learning in Python"
            subTitle="Acmegrade (Partner Mood Indigo IIT Bombay) - (10/06/2022 - 30/08/2022) [2-3 months]"
            result="Online"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in USA isn't easy."
          />
          <ResumeCard
            title="Neo4j"
            subTitle="GRAPHACADEMY - (Issued on 4th November 2022)"
            result="Online"
            des=" Learned basics of Neo4j - a database management system "
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education