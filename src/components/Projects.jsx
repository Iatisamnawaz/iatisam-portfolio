import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  languages,
  image,
  repo,
  demo,
  tags,
  index,
  active,
  handleClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const springConfig = {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  };

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({ scale: 1.1, transition: springConfig });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({ scale: 1, transition: springConfig });
  };

  const getTechnologyIcons = () => {
    const icons = [];
    tags.forEach((tag) => {
      const technology = technologies.find((tech) => tech.name === tag.name);
      if (technology) {
        icons.push(technology.icon);
      }
    });
    return icons;
  };


  return (
    <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] 
    h-[420px] cursor-pointer card-shadow`}
    onClick={() => handleClick(id)}
    onHoverStart={handleHoverStart}
    onHoverEnd={handleHoverEnd}
    animate={controls}
    whileHover={{ scale: 1.1 }}
    style={{
      zIndex: isHovered ? 1 : 0,
      boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.5)' : 'none',
    }}>
    <div
      className={`absolute top-0 left-0 z-10 bg-palleteOne 
      h-full w-full opacity-[0.9] rounded-[24px] 
      ${isHovered ? 'border-solid border-2 border-palleteThree' : ''}`}></div>

    <img
      src={image}
      alt={name}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

{!isHovered && (
        <div className="absolute bottom-0 left-0 z-20 p-4 space-x-2 flex flex-wrap max-w-full">
          {getTechnologyIcons().map((icon, index) => (
            <div className="w-8 h-8" key={index}>
              {/* <BallCanvas icon={icon} /> Render the BallCanvas component with the icon */}
            </div>
          ))}
        </div>
      )}


      

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20 border-solid border-2px border-palleteThree">
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-palleteFour uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            <p
              className="text-palleteThree sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
                <h2>Languages: {languages}</h2>
              
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-palleteThree 
              hover:text-palleteOne transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  // Filter projects into different categories
  const webDevelopmentProjects = projects.filter(project => project.category === 'Web Development');
  const dataAnalysisProjects = projects.filter(project => project.category === 'Data Analysis');
  const appDevelopmentProjects = projects.filter(project => project.category === 'App Development');
  const gamesDevelopmentProjects = projects.filter(project => project.category === 'Games Development');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        
        {/* Render Web Development Projects */}
        <div className="mt-[50px]">
        <h3 className="text-palleteFour text-[30px] font-bold font-beckman tracking-[2px] mb-7">
          Web Development </h3>
          <div className="flex lg:flex-row flex-col min-h-[10vh] gap-5">
            {webDevelopmentProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </div>

        {/* Render Data Analysis Projects */}
        <div className="mt-[50px]">
          <div className="overflow-x-hidden w-full pt-5">
        <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold mb-10 pt-4 md:pt-0 md:w-max">
        <h3 className="text-palleteFour text-[30px] font-bold font-beckman tracking-[2px] mb-7">
          Data Analysis </h3>
        </h2>
      </div>
        
          
          <div className="flex lg:flex-row flex-col min-h-[10vh] gap-5">
            {dataAnalysisProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </div>

        {/* Render App Development Projects */}
        <div className="mt-[50px]">
          <h3 className="text-palleteFour text-[30px] font-bold font-beckman tracking-[2px] mb-7">
            App Development Projects</h3>
          <div className="flex lg:flex-row flex-col min-h-[10vh] gap-5">
            {appDevelopmentProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </div>

        {/* Render App Development Projects */}
        <div className="mt-[50px]">
          <h3 className="text-palleteFour text-[30px] font-bold font-beckman tracking-[2px] mb-7">
            Games Development Projects</h3>
          <div className="flex lg:flex-row flex-col min-h-[10vh] gap-5">
            {gamesDevelopmentProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </div>
        
      </motion.div>
    </div>
  );
};


export default SectionWrapper(Projects, 'projects');
