import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-full md:h-full rounded-t-xl  relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute w-full h-full bg-[#181818] hidden bg-opacity-0 group-hover:bg-opacity-90 group-hover:flex justify-center items-center gap-4 transition-all duration-500 ">
          <Link
            href={gitUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="relative rounded-full border border-[#ADB7BE]  h-12 w-12 text-[#ADB7BE] hover:text-white hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-8 w-8 absolute  " />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={previewUrl}
            className="relative rounded-full border border-[#ADB7BE]  h-12 w-12 text-[#ADB7BE] hover:text-white hover:border-white flex items-center justify-center"
          >
            <EyeIcon className="h-8 w-8 absolute  " />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl py-6 px-4 text-white bg-[#181818]">
        <h5 className="text-xl font-semibold mt-2 mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
