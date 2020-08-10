import React from 'react'
import Project from './Project';
import projects from '../content/projects';

export default function Projects() {
    return (
        <section className="project-container">
            <h2 className="heading-secondary">
                Some of my projects &#8628;
            </h2>
            {projects.map(project => {
                return <Project details={project} key={project.title} />
            })}
            <h2 className="heading-tertiary">
                Many more projects are <strong>in progress</strong> and will be showcased soon! <span role="img" aria-label="fire-emoji">🔥</span>
            </h2>
        </section>
    );
}