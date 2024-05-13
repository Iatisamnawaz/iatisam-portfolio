import React from "react";
import github from '../assets/icons/github.svg'
import liveLink from '../assets/icons/external-link.svg'

function ProjectCard({ 
  project
 }) {
  return (
    <>
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.repo || project.demo}
        target="_blank"
        className={"w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard"}
      >
        <img
          className="w-full rounded-md"
          src={project.image}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.repo || project.demo} target="_blank">
            <h3 className="text-lg font-bold">{project.name}</h3>
          </a>
          <div className="space-x-2 flex">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                <img
                  src={liveLink}
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer">
                <img
                  src={github}
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{project.description}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-1 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                {/* <Link href={/projects/tag/${kebabCase(tag)}}>
                  
                </Link> */}
                <div className="m-1 rounded-lg text-sm bg-palleteThree py-1 px-2 cursor-pointer hover:opacity-75 text-palleteOne">
                                    {tag.name}

                  </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </>
  );
}

export default ProjectCard;