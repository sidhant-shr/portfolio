"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages and Databases: JAVASCRIPT, TYPESCRIPT, PYTHON, SOLIDITY, RUST, BASH, C/C++, DART, HTML/CSS, FIREBASE, MYSQL, POSTGRES, MONGODB</li>
        <li>Devops: DOCKER, CI/CD, GOOGLE CLOUD PLATFORM, LOGGING</li>
        <li>Libraries and Frameworks: REACTJS, FLUTTER, NEXTJS, TAILWIND CSS, ETHERS-JS, ETHERS-RS, WEB3-JS, IC-CDK, ACTIX, TOKIO, NODE.JS, EXPRESS, BEAUTIFUL SOUP(WEB SCRAPING), NUMPY, MATPLOTLIB</li>
        <li>Tools: DOCKER HUB, GITHUB, POSTMAN, HARDHAT, TRUFFLE, GOOGLE COLLAB, FIGMA SERVICENOW PLATFORM, JIRA, TRELLO</li>
        <li>Extracurricular: PUBLIC SPEAKING,PRESENTATIONS, VOLUNTEERING (GIVE INDIA), BLACK-BELT SHOTOKAN KARATE</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SRM University, Chennai</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Cloud Platform Essential - Google </li>
        <li>Service Now(App Engine Studio, Flow Designer) -ServiceNow </li>
        <li>Postman API Fundamentals Student Expert - Postman </li>
        <li>Oracle DataBase Foundations - Oracle</li>
        <li>Smart Contracts - University at Buffalo</li>
        <li>AWS Academy Data Center Technician - Amazon Web Services</li>
        <li>Python - University of Michigan </li>


        
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack blockchain developer with a passion for creating
            interactive and responsive web and mobile applications.  I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
