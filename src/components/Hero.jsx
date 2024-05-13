import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';
import { download, downloadHover, resume } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
              <h1
                className={`${styles.heroHeadText} text-battleGray font-poppins uppercase`}
              >
                Hi, I'm{' '}
                <span
                  className="sm:text-palleteFour sm:text-[90px] 
                  text-palleteFour text-[50px] font-mova
                  font-extrabold uppercase"
                >
                  Iatisam
                </span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-secondary `}>
                I am a <span className="font-bold text-palleteThree">DevOps</span> Engineer. <br className="sm:block hidden" />
                and I love <span className="font-bold text-palleteThree">building</span> Websites.
              </p>
              <div className="mt-8 flex flex-row">
              <div >
              <a  href={"https://github.com/Iatisamnawaz"} target="_blank" rel="noreferrer">
                <img
                  src="src/assets/icons/github.svg"
                  width={32}
                  height={32}
                  alt="Link Icon"
                />
              </a>
             
              </div>
              <div className="ml-4 ">
              <a  href={"https://www.linkedin.com/in/iatisam-nawaz-16820121b/"} target="_blank" rel="noreferrer">
                <img
                  src="src/assets/projects/linkedin.png"
                  width={32}
                  height={32}
                  alt="Link Icon"
                />
              </a>
             
              </div>
              <div className="ml-4 ">
              <a  href={"mailto:iatisamnawa35@gmail.com"} target="_blank" rel="noreferrer">
                <img
                  src="src/assets/projects/email.png"
                  width={32}
                  height={32}
                  alt="Link Icon"
                />
              </a>
              </div>
              
              </div>
              <div >
              <button
               className="live-demo flex justify-between 
               sm:text-[18px] text-[14px] text-timberWolf 
               font-bold font-beckman items-center py-5 pl-3 pr-3 
               whitespace-nowrap gap-1 sm:w-[95px] sm:h-[58px] 
               w-[125px] h-[46px] rounded-[10px] bg-palleteOne 
               sm:mt-[22px] mt-[16px] hover:bg-palleteOne 
               hover:text-palleteThree transition duration-[0.2s] 
               ease-in-out transition-colors hover:border-solid 
               hover:border-2 border-palleteThree"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/18m2su8CUwlzDHCLxqO-VrD2jyLdTih2U/view?usp=sharing', //paste the link to your resume here
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              RESUME
              
            </button>
              </div>
          </div>

          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
              border-solid border-palleteThree flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-palleteThree mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={shaq}
            alt="shaquille"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
