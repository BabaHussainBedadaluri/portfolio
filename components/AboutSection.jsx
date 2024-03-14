"use client";
import Image from "next/image";
import React from "react";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex items-center flex-wrap gap-6">
        <Image
          className="bg-[#BED1CF] p-1  rounded-lg"
          src="/logo/html-5.svg"
          width={50}
          height={50}
        />
        <Image
          className="bg-white p-1 rounded-lg"
          src="/logo/css-3.svg"
          width={50}
          height={50}
        />
        <Image src="/logo/tailwind-css.svg" width={150} height={150} />
        <Image src="/logo/javascript.svg" width={50} height={50} />
        <Image src="/logo/react-logo.svg" width={50} height={50} />
        <Image src="/logo/redux-logo.png" width={100} height={100} />

        <Image
          className="bg-[#7DBD07] p-1 rounded-lg"
          src="/logo/nextjs.svg"
          width={50}
          height={50}
        />

        <Image src="/logo/node-logo.png" width={50} height={50} />
        <Image
          className="bg-[#BED1CF] p-2 rounded-lg"
          src="/logo/express.svg"
          width={75}
          height={75}
        />
        <Image src="/logo/mongodb-logo.svg" width={100} height={100} />
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc">
        <li>
          Possessing two years of hands-on experience in developing responsive
          web applications.
        </li>
        <li>
          Proficient in crafting high-quality code and application interfaces
          using cutting-edge technologies such as React.js, Next.js, Node.js,
          Express.js, and MongoDB.
        </li>
        <li>
          Demonstrating exceptional adaptability to new technologies and
          adeptness in code debugging.
        </li>
        <li>
          Exhibiting strong analytical skills and a proactive approach to
          addressing challenges.
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc">
        <li>Bachelor's Degree in Electrical and Electronics Engineering</li>
        <li>Diploma in Electrical and Electronics Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certifications",
    content: (
      <ul className="list-disc">
        <li>Azure Fundamentals Certified (AZ-900)</li>
        <li>Google Could Practitioner (GCP)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center p-0 xl-gap-16 sm:py-16 xl:px-4 ">
        <Image src="/images/laptop.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white font-bold text-center mb-4">
            About
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur iure accusantium fugiat consequuntur repellat! Deserunt
            delectus consequatur amet asperiores esse earum eum vitae ipsum
            laboriosam quibusdam recusandae facere, impedit id.
          </p>
          <div className=" flex mt-5 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              children={"Skills"}
            />
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              children={"Education"}
            />
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              children={"Certification"}
            />
          </div>
          <div className="mt-5 ml-5">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
