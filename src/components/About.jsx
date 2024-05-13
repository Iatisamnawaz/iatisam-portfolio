import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card border-2 
      border-solid border-palleteThree">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-palleteOne rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-palleteFour text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Welcome to my website! I'm a passionate technology enthusiast with a solid foundation in Computer Science, earned through my BSc.(Hons) degree from Goldsmiths, University of London, and a foundation year at Latrobe College, Melbourne. As a DevOps Engineer Intern at Parkyeri, I honed my skills in Agile methodologies and cross-functional collaboration, contributing to a 20% increase in development efficiency. My experiences at Bright Network and Edulaxy Hybrid further sharpened my project management and development prowess, resulting in tangible improvements in project timelines and user engagement. Through personal projects like scalable web applications and data analysis endeavors, I've showcased my proficiency in a wide array of technologies and methodologies. Let's explore how we can innovate together in the ever-evolving tech landscape!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
