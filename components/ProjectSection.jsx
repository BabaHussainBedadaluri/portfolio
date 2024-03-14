import React from "react";
import ProjectCard from "./ProjectCard";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";

const projectData = [
  {
    id: 1,
    title: "Project 1",
    imgUrl: "/images/project/sample.png",
    description:
      "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).",
    gitUrl:
      "https://github.com/BabaHussainBedadaluri/new-weather-forecast-app.git",
    previewUrl:
      "https://babahussainbedadaluri.github.io/new-weather-forecast-app/",
  },
  {
    id: 2,
    title: "Project 2",
    imgUrl: "/images/project/sample.png",

    description:
      "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).",
    gitUrl:
      "https://github.com/BabaHussainBedadaluri/new-weather-forecast-app.git",
    previewUrl:
      "https://babahussainbedadaluri.github.io/new-weather-forecast-app/",
  },
  {
    id: 3,
    title: "Project 3",
    imgUrl: "/images/project/sample.png",

    description:
      "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).",
    gitUrl:
      "https://github.com/BabaHussainBedadaluri/new-weather-forecast-app.git",
    previewUrl:
      "https://babahussainbedadaluri.github.io/new-weather-forecast-app/",
  },
  {
    id: 4,
    title: "Project 4",
    imgUrl: "/images/project/sample.png",

    description:
      "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).",
    gitUrl:
      "https://github.com/BabaHussainBedadaluri/new-weather-forecast-app.git",
    previewUrl:
      "https://babahussainbedadaluri.github.io/new-weather-forecast-app/",
  },
];

const ProjectSection = () => {
  return (
    <>
      <h1 className=" text-center text-4xl font-bold text-white mt-4 mb-9">
        My Projects
      </h1>
      <div className=" grid md:grid-cols-3 md:gap-8 gap-12  ">
        {projectData.map((p) => (
          <ProjectCard
            key={p.id}
            imgUrl={p.imgUrl}
            title={p.title}
            description={p.description}
            gitUrl={p.gitUrl}
            previewUrl={p.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
