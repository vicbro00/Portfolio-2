import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = {
  'css-frameworks': {
    title: 'Social Media UI',
    image: '/images/css-frameworks-teaser.jpg',
    description: 'A responsive social media prototype focusing on Bootstrap layouts.',
    tech: 'HTML, CSS, Bootstrap',
    improvement: 'Fixed the mobile menu navigation links. Initially the links were in blue and had a line underneath them. So I fixed it so they are in black, except the page the user is currently on, and then removed the text decorations.',
    liveLink: 'https://vicbro00.github.io/CSS-frameworks/',
    repoLink: 'https://github.com/vicbro00/CSS-frameworks',
    improvementLink: 'https://github.com/vicbro00/CSS-frameworks/commit/9c22921f602485fe848824ebaa1de02237f8139f',
  },
  'js1-frameworks': {
    title: 'E-com Store',
    image: '/images/js1-frameworks-teaser.jpg',
    description: 'A full React online shop with state management and API integration.',
    tech: 'React, Tailwind/Bootstrap, Zustand',
    improvement: 'Added a fallback image to the checkout function. In the previous code, there was no fallback image, so if the app failed to fetch the image of the proudct, there would be nothing to display.',
    liveLink: 'https://jsframeworksvictoria.netlify.app/',
    repoLink: 'https://github.com/NoroffFEU/jsfw-2025-v1-victoria-jsframeworks',
    improvementLink: 'https://github.com/NoroffFEU/jsfw-2025-v1-victoria-jsframeworks/commit/22876f2716488fb30bf2e7abc154705a49179a92',
  },
  'semester-project-2': {
    title: 'Auction Hub',
    image: '/images/semester-project-2-teaser.jpg',
    description: 'A front-end auction platform where users can bid on items and manage listings.',
    tech: 'Vanilla JavaScript, Tailwind, Noroff API',
    improvement: 'Fixed links on the login.html page in the head section. Previously I had linked the same fonts three times, so I removed the duplicate ones. Adding to this I also fixed a h1 line, where i had not wrapped the link in an <a> attribute.',
    liveLink: 'https://vicbro00.github.io/Semester-Project-2/index.html',
    repoLink: 'https://github.com/vicbro00/Semester-Project-2',
    improvementLink: 'https://github.com/vicbro00/Semester-Project-2/commit/84dc0b33f7a47e16ca78c8bc8de443fc5eadd519',
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) return <div className="container mt-5">Project not found.</div>;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link to this project copied to clipboard!");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1>{project.title}</h1>
          <button className="btn btn-outline-secondary btn-sm mb-4" onClick={copyToClipboard}>
            Copy Link
          </button>
          
          <img src={project.image} alt={project.title} className="img-fluid rounded shadow mb-4" />
          <figcaption className="text-muted text-center mb-4">Project teaser image</figcaption>
          
          <h3>Project Description</h3>
          <p>{project.description}</p>
          
          <div className="bg-light p-4 rounded my-4">
            <h4>The Improvement</h4>
            <p>{project.improvement}</p>
          </div>

          <h5>Tech Stack:</h5>
          <p className="badge bg-primary p-2">{project.tech}</p>

          <div className="mt-4">
            <a href={project.liveLink} className="btn btn-success me-3" target="_blank" rel="noreferrer">View Live Site</a>
            <a href={project.repoLink} className="btn btn-dark" target="_blank" rel="noreferrer">GitHub Repo</a>
            {project.improvementLink && (
              <a href={project.improvementLink} className="btn btn-info ms-3" target="_blank" rel="noreferrer">View Improvement</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}