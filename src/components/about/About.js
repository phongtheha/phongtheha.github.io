import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="About Me" des="Who am I" />
      </div>
      <div className="text-base font-bodyFont leading-6 tracking-wide">
        I recently graduated from UC Berkeley with a Master's degree in Computer Science (EECS). I have 3 years of professional experience as a data scientist/ ML Engineer and 2 years of experience doing ML and DS research.
        <br /> <br />
        As a data scientist with experience in ML, deep learning, natural language processing (NLP), and robotic process automation (RPA), I excel at deploying ML models in both research and industry production settings. In addition, I am deeply committed to advancing diversity and inclusion within the tech industry, and I believe that machine learning and AI have the potential to make a significant impact in creating a more just and equitable society.
        <br /> <br />
        <b className="text-designColor"> What I'm  looking for 👀:  </b>Full-time opportunities in Data Science, AI/ML and SWE, starting July 2023. Open to relocation.
        </div>
      <div className="flex justify-center items-center text-center">
        <Title title="" des="What I do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default About;
