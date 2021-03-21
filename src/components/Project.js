import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project(props) {
  const { details } = props;

  return (
    <div className="project">
      <div className="project__image">
        <img src={details.image} alt="project-img" />
      </div>
      <div className="project__details">
        <div className="project__title">{details.title}</div>
        <div className="project__description">{details.description}</div>
        <div className="project__cta">
          <a
            href={details.links.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} color="white" />
          </a>
          <a
            href={details.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            <FontAwesomeIcon icon={faGithub} /> View Source
          </a>
        </div>
      </div>
    </div>
  );
}
