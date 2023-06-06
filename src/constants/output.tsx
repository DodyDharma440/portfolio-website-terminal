import React from "react";
import HelpItem from "../components/HelpItem";
import SocialItem from "../components/SocialItem";

export const help = (
  <div className="flex flex-col my-2">
    <HelpItem command="whoami" label="Display your public IP Address" />
    <HelpItem command="whois" label="Who is Dodi Aditya?" />
    <HelpItem command="social" label="Display social networks" />
    <HelpItem command="experiences" label="Display work experiences" />
    <HelpItem command="educations" label="Display my educations" />
    <HelpItem command="skills" label="View some skills" />
    <HelpItem command="projects" label="Display projects" />
    <HelpItem command="mail" label="Mail to Dodi Aditya" />
    <HelpItem command="website" label="Open UI based my portfolio website" />
    <HelpItem command="open <url>" label="Open inputed url in new tab" />
    <HelpItem command="clear" label="Clear terminal" />
    <HelpItem command="help" label="Display available commands" />
  </div>
);

export const experiences = (
  <div className="flex flex-col p-4 text-yellow-200">
    <p>Frontend Developer - Dimedika - 2021 - Now</p>
    <p>Frontend Developer - PT. Ganeshcom Mitra Solusi Digital - 2021 - Now</p>
  </div>
);

export const skills = (
  <div className="flex flex-col gap-4 p-4">
    <div className="flex flex-col">
      <p>Strong Skills:</p>
      {[
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React JS",
        "Next JS",
        "Node JS",
        "NPM",
        "Yarn",
      ].map((s, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-400">{s}</span>
        </React.Fragment>
      ))}
    </div>
    <div className="flex flex-col">
      <p>Moderate Skills:</p>
      {["Express", "Storybook"].map((s, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-400">{s}</span>
        </React.Fragment>
      ))}
    </div>
    <div className="flex flex-col">
      <p>Still Learning:</p>
      {["Golang", "Swift", "Figma"].map((s, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-400">{s}</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const profile = (
  <div className="p-4 text-yellow-100">
    {[
      "Hello, my name is I Made Dodi Aditya Ari Dharma or you can call me Dodi",
      "I was born on May 12, 2003, and now I'm still 20 years old.",
      "Currently I work as a frontend developer and also a student majoring in informatics engineering.",
      "I am interested in exploring knowledge in the field of technology, especially in the field of web development.",
      "I have an honest personality, able to work in a team, and also always respect others.",
      "My hobbies are coding, playing games, and playing Balinese traditional music.",
    ].map((d, index) => {
      return (
        <React.Fragment key={index}>
          {d}
          <br />
        </React.Fragment>
      );
    })}
  </div>
);

export const socials = (
  <div className="flex flex-col p-4 gap-[2px]">
    <SocialItem
      label="github"
      url="https://github.com/DodyDharma440"
      value="github/DodyDharma440"
    />
    <SocialItem
      label="linkedin"
      url="https://www.linkedin.com/in/dodi-aditya-237154206"
      value="linkedin/dodi-aditya"
    />
    <SocialItem
      label="instagram"
      url="https://www.instagram.com/dodi.aditya_"
      value="instagram/dodi.aditya_"
    />
    <SocialItem
      label="facebook"
      url="https://facebook.com/dodyaridharma"
      value="instagram/dodyaridharma"
    />
    <SocialItem
      label="twitter"
      url="https://twitter.com/dodiaditya_"
      value="twitter/dodiaditya_"
    />
  </div>
);

export const opening = (data: string) => (
  <>
    <span className="text-yellow-300">Opening </span>{" "}
    <span className="ml-2 text-green-300">{data}...</span>
  </>
);

export const history = (data: string[]) => {
  return (
    <div className="p-4">
      {data.map((h, index) => (
        <React.Fragment key={index}>
          <span className="text-yellow-300">{h}</span>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};
