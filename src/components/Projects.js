import React from 'react'
import Project from './Project';
import projects from '../content/projects';

export default function Projects() {
    return (
        <section class="project-container">
            {projects.map(project => {
                return <Project details={project} />
            })}
        </section>
    );
}