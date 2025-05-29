import type { Route } from "./+types/home";
import Main from "../components/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "It's Me | Full Stack Developer Portfolio" },
    {
      name: "description",
      content:
        "A modern, interactive portfolio website for a full stack developer. Explore projects, skills, experience, and download my CV. Built with React, TypeScript, and the latest web technologies.",
    },
  ];
}

export default function Home() {
  return <Main />;
}
