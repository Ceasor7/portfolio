'use client';
import { database } from '@/src/app/firebaseConfig';
import { get, ref } from 'firebase/database';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import projectOne from '../../../public/kmf.PNG';

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsRef = ref(database, 'projects');
    get(projectsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const projectsArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setProjects(projectsArray);
        } else {
          console.log('No Data available');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="flex dark:bg-accentDark/90 rounded-md py-10 px-10 flex-col items-center justify-center">
        <Image
          src={projectOne}
          alt="Project One"
          className="h-24 w-56 rounded-3xl"
        />
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-200 p-4 rounded-md shadow-md"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              <a
                href={project.github}
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.deploy}
                className="ml-4 text-blue-500 hover:underline"
              >
                Deployment
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
