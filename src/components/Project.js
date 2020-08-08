import React from 'react'

export default function Project(props) {
    const { details } = props;

    return (
        <div className="project">
            <div className="project__image">
                <img src={details.image} alt="project-img" />
            </div>
            <div className="project__details">
                <div className="project__title">
                    {details.title}
                </div>
                <div className="project__description">
                    {details.description}
                </div>
                <div className="project__cta">
                    <a
                        href={details.links.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                    >
                        Live Demo{" "}
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                        href={details.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--secondary"
                    >
                        <i className="fab fa-github"></i>
                        {" "}View Source
                        </a>
                </div>
            </div>
        </div>
    );
}