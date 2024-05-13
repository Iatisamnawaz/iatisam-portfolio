import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIntwo, textVarianttwo, staggerContainer } from '../utils/motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [active, setActive] = useState('project-2');

  // Filter projects into different categories
  // const webDevelopmentProjects = projects.filter(project => project.category === 'Web Development');
  // const dataAnalysisProjects = projects.filter(project => project.category === 'Data Analysis');
  // const appDevelopmentProjects = projects.filter(project => project.category === 'App Development');
  // const gamesDevelopmentProjects = projects.filter(project => project.category === 'Games Development');

  return (
    <>
    <div className="mt-[5rem]">

    <motion.div variants={textVarianttwo()}>
         <p className={`${styles.sectionSubText} `}>Case Studies</p>
         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
    </motion.div>
   
    <div className="w-full flex">
         <motion.p
           variants={fadeIntwo('', '', 0.1, 1)}
           className="mt-1 text-taupe text-[18px] max-w-3xl leading-[30px]">
           These projects demonstrate my expertise with practical examples of
           some of my work, including brief descriptions and links to code
           repositories and live demos. They showcase my ability to tackle
           intricate challenges, adapt to various technologies, and efficiently
           oversee projects.
        </motion.p>
       </div>

    <div className="flex w-full">
      
      </div>

      <div className="grid grid-cols-1 mt-10 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.map((item) => {
          return (
            <ProjectCard key={item.id} project={item} />
          );
        })}
      </div>
      </div>
      </>

  );
};


export default SectionWrapper(Projects, 'projects');
