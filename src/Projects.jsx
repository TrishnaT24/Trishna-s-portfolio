import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
      githubLink: "https://github.com/your-username/jodi-junction",
      image: jodi
    },
    {
      title: "YOROKOBI",
      description: "Restaurant queue management system with JWT authentication, real-time updates, remote queue joining, and Leaflet-based map for locating nearby restaurants.",
      techStack: ["NodeJS", "MongoDB", "Express", "ReactJS", "JavaScript", "Tailwind"],
      githubLink: "https://github.com/your-username/yorokobi",
      image: yoro
    },
    {
      title: "CF Extension",
      description: "Codeforces problem recommender using KNN to suggest problems based on difficulty and popularity, with a Flask-based RESTful API for real-time updates.",
      techStack: ["Python", "JavaScript", "Flask"],
      githubLink: "https://github.com/your-username/cf-extension",
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
      description :"Built a task creation and distribution system, to manage work across a team or project, for quick task assesment.`",
      techStack:["Distributed Systems","Mongodb","Express","Node","React"],
      githubLink:"https://github.com/TrishnaT24/DC-proj",
      image:taskboard

    }
  ]

  return (
    <div>
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-slate-500 to-blue-300 bg-clip-text text-transparent">My Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Here are some of my recent works
          </p>
          
          <div className="flex justify-center">
            <Carousel className="w-full max-w-4xl">
              <CarouselContent className="-ml-5">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-10 md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col h-96 items-center justify-between p-6">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-40 object-cover rounded-md mb-4"
                          />
                          <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                          <p className="text-sm text-gray-600 text-center mb-2">{project.description}</p>
                          <div className="text-sm text-gray-500 mb-2">
                            <span className="font-semibold">Tech Stack: </span>
                            {project.techStack.join(", ")}
                          </div>
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-indigo-600 hover:underline text-sm"
                          >
                            View on GitHub
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects