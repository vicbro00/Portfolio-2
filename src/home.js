import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 'css-frameworks', title: 'Social App', desc: 'Bootstrap UI project...' },
  { id: 'js1-frameworks', title: 'Online shop', desc: 'React project...' },
  { id: 'semester-project-2', title: 'Auction Hub', desc: 'Vanilla JS project...' }
];

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        {projects.map(project => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card shadow-sm h-100">
              <img src={`/images/${project.id}-teaser.jpg`} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5>{project.title}</h5>
                <p className="small">{project.desc}</p>
                <Link to={`/project/${project.id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}