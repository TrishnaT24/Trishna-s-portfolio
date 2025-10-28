
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import cfimage from "./images/cf.png";
import yoro from "./images/yorokobi.png";
import taskboard from "./images/taskboard.png";
import idcard from "./images/idcard.png";
import jodi from "./images/jodi.jpeg";

function Projects() {
  const projects = [
    {
      title: "Jodi Junction",
      description: "A wedding management system with secure Firebase authentication, shopping cart, todo list, budget filter, real-time chat, and Leaflet map for vendor exploration.",
      techStack: ["ReactJS", "Firebase", "JavaScript", "CSS"],
      githubLink: "https://github.com/TrishnaT24/node_tut",
      image: jodi
    },
    {
      title: "YOROKOBI",
      description: "Restaurant queue management system with JWT auth, real-time updates, remote queue joining, and map for nearby restaurants.",
      techStack: ["MERN Stack", "JS", "Tailwind"],
      githubLink: "https://github.com/TrishnaT24/yorokobi_1",
      image: yoro
    },
    {
      title: "CF Extension",
      description: "Codeforces problem recommender using KNN to suggest problems based on difficulty and popularity, with a Flask-based RESTful API for real-time updates.",
      techStack: ["Python", "JavaScript", "Flask"],
      githubLink: "https://github.com/TrishnaT24/cf-extension",
      image:cfimage
    },
    {
      title: "ID Card generator",
      description :"Built a website to help the college faculty easily generate an id card by taking details from students and allow to download it. ",
      techStack:["Mongodb","Express","Node","React"],
      githubLink:"https://github.com/TrishnaT24/ID-card-generator",
      image:idcard
    },
    { title: "Task Distribution System",
      description :"Task creation and distribution system, to manage work across a team or project.",
      techStack:["Distributed Systems","Mongodb","Express","Node","React"],
      githubLink:"https://github.com/TrishnaT24/DC-proj",
      image:taskboard

    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-slate-500 to-blue-300 bg-clip-text text-transparent">My Projects</span>
        </h1>
        <p className="text-lg sm:text-xl text-white mb-12 max-w-2xl mx-auto">Here are some of my recent works</p>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                <Card className="h-full bg-gray-900 border-0">
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-400 flex-grow mb-3">{project.description}</p>
                    <div className="text-xs text-gray-500 mb-3">Tech: {project.techStack.join(", ")}</div>
                    <a href={project.githubLink} target="_blank" className="text-indigo-400 hover:underline text-sm">GitHub</a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;