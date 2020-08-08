import React from 'react'

export default function Project(props) {
    const { details } = props;

    return (
        <div class="project">
            <div class="project__image">
                <img src={details.image} alt="project-img" />
            </div>
            <div class="project__details">
                <div class="project__title">
                    {details.title}
                </div>
                <div class="project__description">
                    {details.description}
                </div>
                <div class="project__cta">
                    <a
                        href={details.links.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn--primary"
                    >
                        Live Demo{" "}
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    <a
                        href={details.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn--secondary"
                    >
                        <i class="fab fa-github"></i>
                        {" "}View Source
                        </a>
                </div>
            </div>
        </div>
    );
}