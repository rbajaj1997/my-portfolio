import React from 'react'

import html from '../img/logos/html.svg';
import css from '../img/logos/css.svg';
import sass from '../img/logos/sass.svg';
import javascript from '../img/logos/javascript.svg';
import react from '../img/logos/react.svg';
import node from '../img/logos/node.svg';
import express from '../img/logos/express.svg';
import mongodb from '../img/logos/mongodb.svg';
import npm from '../img/logos/npm.svg';
import git from '../img/logos/git.svg';
import github from '../img/logos/github.svg';

export default function About() {
    return (
        <section class="about-container">
            <div class="personal-details">
                <p class="personal-details__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, repellendus expedita adipisci quae
                    molestias eos dolorem ea error accusamus fuga veniam! Id impedit provident iusto doloribus ut
                    inventore voluptas vel? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque optio
                    repellat laborum perferendis dicta ipsa tempore necessitatibus animi libero voluptate, dolorum nihil
                    totam obcaecati. Ducimus aliquam perspiciatis dolor saepe voluptate.
                </p>
            </div>

            <div class="skills">
                <h2 class="heading-secondary">
                    My Skill Set
                </h2>
                <div class="skills__logos">
                    <div class="skills__logos--logo">
                        <img src={html} alt="html" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={css} alt="css" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={sass} alt="sass" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={javascript} alt="javascript" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={react} alt="react" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={node} alt="node" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={express} alt="express" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={mongodb} alt="mongodb" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={npm} alt="npm" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={git} alt="git" />
                    </div>
                    <div class="skills__logos--logo">
                        <img src={github} alt="github" />
                    </div>
                </div>
            </div>
        </section>
    );
}