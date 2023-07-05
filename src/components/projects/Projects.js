import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="What I've been working on recently"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Digital Afterlife"
          des="Capstone Project at UC Berkeley. Fine-tuned large language models (LLMs) including OpenAI's GPT3 to create digital clones of actual people"
          src={projectOne}
          boolGithub={false}
          boolWebsite={false}

        />
        <ProjectsCard
          title="QuantumQruiters"
          des="A user-friendly web application for practicing behavioral interviews using React and Next.Js. Integrated LangChain, OpenAI’s GPT 3.5, and Whisper APIs for Speech-to-Text to provide comprehensive, AI-
          powered, LLM generated feedback to user’s interview performances"
          src={projectTwo}
          boolGithub={false}
          boolWebsite={false}
        />
        <ProjectsCard
          title="Iterative Mimick - Job Titles Normalization"
          des="Published at COLING 2020. Created a new NLP algorithm for better character-level embedding generation. Applied to solve the problem of job titles normalization"
          src={projectThree}
          githubLink=""
          websiteLink="https://aclanthology.org/2020.coling-main.104.pdf"
          boolGithub={false}
          boolWebsite={true}
        />
        <ProjectsCard
          title="Pikachu Electric Calculator"
          des="Assignment for CS 260 at Berkeley. A cute pikachu themed website for a simple time-distance conversion calculator"
          src={projectFour}
          githubLink="https://github.com/phongtheha/PikachuElectricCalculator"
          websiteLink=""
          boolGithub={true}
          boolWebsite={false}
        />
        <ProjectsCard
          title="Transformer Encoder from Scratch"
          des="Built a transformer encoder from scratch with Pytorch and trained on Imdb sentiment dataset to achieve 90% accuracy
          on test set, comparable to fine-tuning a pre-trained BERT"
          src={projectFive}
          githubLink="https://github.com/phongtheha/TransformerFromScratch"
          websiteLink=""
          boolGithub={true}
          boolWebsite={false}
        />
        <ProjectsCard
          title="Data Science Projects"
          des="A collection of data science notebooks for different projects, such as EDA, Webscraping of Indeed.com, Twitter API Analysis, etc"
          src={projectSix}
          githubLink="https://github.com/phongtheha/Data-Science-Projects"
          websiteLink=""
          boolGithub={true}
          boolWebsite={false}
        />
      </div>
    </section>
  );
}

export default Projects