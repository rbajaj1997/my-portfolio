import React from 'react'
import Project from './Project';
import projects from '../content/projects';

export default function Projects() {
    return (
        <section className="project-container">
            {projects.map(project => {
                return <Project details={project} key={project.title} />
            })}
        </section>
    );
}