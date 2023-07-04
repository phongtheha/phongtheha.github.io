import { AiFillAppstore } from "react-icons/ai";
import { IoMdAnalytics } from "react-icons/io";
import {  FaBrain} from "react-icons/fa";
import { SiProgress} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdAnalytics } from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { BsWindowFullscreen } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import {TbFileTextAi} from "react-icons/tb";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <IoMdAnalytics/>,
    title: "Data Science",
    des: "Have been doing data science for 6+ years in both academic and professional settings",
  },
  {
    id: 2,
    icon: <FaBrain />,
    title: "Machine Learning",
    des: "Have been doing research in AI/ML since undergrad and have been deploying ML models to solve real-world business problems",
  },
  {
    id: 3,
    icon: <BsWindowFullscreen />,
    title: "Front End Development",
    des: "Have recently been learning about front end development, including React and NextJS to deploy web apps for my ML projects",
  },
  {
    id: 4,
    icon: <BsRobot />,
    title: "Robotic Process Automation",
    des: "I worked on several RPA project in UiPath at American Water for a year",
  },
  {
    id: 5,
    icon: <AiOutlineLaptop />,
    title: "Software Engineering",
    des: "Worked on multiple SWE projects at American Water, such as deploying API endpoints for our products",
  },
  {
    id: 6,
    icon: <TbFileTextAi />,
    title: "Natural Language Processing (NLP)",
    des: "Most of my work so far have been focused on using Deep Learning to solve NLP problems, such as word embedding, large language modeling, chatbots, search ranking, etc",
  },
];
