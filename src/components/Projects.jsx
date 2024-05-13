import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import ProjectCard from './ProjectCard';

// const ProjectCard = ({
//   id,
//   name,
//   description,
//   languages,
//   image,
//   repo,
//   demo,
//   tags,
//   index,
//   active,
//   handleClick,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const controls = useAnimation();

//   const springConfig = {
//     type: 'spring',
//     stiffness: 400,
//     damping: 10,
//   };

//   const handleHoverStart = () => {
//     setIsHovered(true);
//     controls.start({ scale: 1.1, transition: springConfig });
//   };

//   const handleHoverEnd = () => {
//     setIsHovered(false);
//     controls.start({ scale: 1, transition: springConfig });
//   };
  
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)
    
//     }>
      
//         <div className="bg-palleteOne w-full rounded-2xl p-3
//          sm:w-[350px] h-[380px] border-solid border-2
//           border-palleteOne hover:border-palleteTwo ">
//           <div className="relative h-[200px] w-full">
//             <img
//               src={image}
//               alt={name}
//               className="h-full w-full rounded-2xl object-cover"
//             />
//             <div className="card-img_hover absolute inset-0 m-1 flex justify-end">
//               <div
//                 onClick={() => window.open(repo, "_blank")}
//                 className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
//               >
//                 <img
//                   src={github}
//                   alt="github"
//                   className="h-1/2 w-1/2 object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mt-5 ">
//             <div class="flex justify-between">
//             <div class=""><h3 className="text-2xl font-bold text-white">{name}</h3></div>
//             <div class="">
//               <button
//               className="live-demo flex justify-between 
//               sm:text-[11px] text-[10px] text-timberWolf 
//               font-bold font-beckman items-center py-5 pl-2 pr-3 
//               whitespace-nowrap gap-1 sm:w-[41px] sm:h-[38px]
//               w-[125px] h-[36px] rounded-[10px] border-2 
//               border-solid border-palleteTwo 
//               sm: hover:bg-palleteThree 
//               hover:text-palleteOne transition duration-[0.2s] 
//               ease-in-out"
//               onClick={() => window.open(demo, '_blank')}
//               onMouseOver={() => {
//                 document
//                   .querySelector('.btn-icon')
//               }}
//               onMouseOut={() => {
//                 document
//                   .querySelector('.btn-icon')
//               }}>
//               LIVE
//             </button>

//             </div>
//             </div>
            
            
//             <p className="text-secondary mt-2 text-[14px]">{description}</p>
//           </div>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {tags.map((tag) => (
//               <p key={tag.name} className={`text-[14px] text-${tag.name}`}>
//                 #{tag.name}
//               </p>
//             ))}
           
//           </div>
//         </div>
//     </motion.div>
//   );
// };

const Projects = () => {
  const [active, setActive] = useState('project-2');

  // Filter projects into different categories
  // const webDevelopmentProjects = projects.filter(project => project.category === 'Web Development');
  // const dataAnalysisProjects = projects.filter(project => project.category === 'Data Analysis');
  // const appDevelopmentProjects = projects.filter(project => project.category === 'App Development');
  // const gamesDevelopmentProjects = projects.filter(project => project.category === 'Games Development');

  return (
    <>
    <motion.div variants={textVariant()}>
         <p className={`${styles.sectionSubText} `}>Case Studies</p>
         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
    </motion.div>
    <div className="w-full flex">
         <motion.p
           variants={fadeIn('', '', 0.1, 1)}
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

      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.map((item) => {
          return (
            <ProjectCard key={item.id} project={item} />
          );
        })}
      </div>
      </>

  );
};


export default SectionWrapper(Projects, 'projects');
