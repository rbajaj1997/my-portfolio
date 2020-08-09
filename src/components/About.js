import React from 'react'

import html from '../img/logos/html.svg';
import css from '../img/logos/css.svg';
import sass from '../img/logos/sass.svg';
import javascript from '../img/logos/javascript.svg';
import react from '../img/logos/react.svg';
import node from '../img/logos/node.svg';
import express from '../img/logos/express.svg';
import mongodb from '../img/logos/mongodb.svg';
import mysql from '../img/logos/mysql.svg';
import npm from '../img/logos/npm.svg';
import git from '../img/logos/git.svg';
import github from '../img/logos/github.svg';
import c from '../img/logos/c.svg';
import graphql from '../img/logos/graphql.svg';

export default function About() {
    return (
        <section className="about-container">
            <div className="personal-details">
                <p className="personal-details__text">
                    Hello! I'm Rohit, a 22 year old, self-taught full stack developer based out of Bangalore, India.<br />
                    I gratuated from <a href="http://www.nitrr.ac.in/" rel="noopener noreferrer" target="_blank"> National Institute of Technology, Raipur</a>  in 2019, majoring in Electrical Engineering.
                    Despite being from a non-computer science background, I got into coding/development because computers have always fascinated me.. Seeing code getting converted to things we use regularly, like Facebook or Amazon, was no less than magic to me and that's where my quest to invent began!
                    I joined <a href="https://www2.deloitte.com/ui/en.html" rel="noopener noreferrer" target="_blank">Deloitte USI</a> right after college, where I presently work as a Automation Developer. <br />
                    When not in front of a computer, you will probably find me playing chess ♟️, relishing music 🎵🎧, watching football ⚽ or solving sudoku.
                </p>
            </div>

            <div className="skills">
                <h2 className="heading-secondary">
                    My Skill Set
                </h2>
                <div className="skills__logos">
                    <div className="skills__logos--logo">
                        <img src={html} alt="html" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={css} alt="css" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={sass} alt="sass" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={javascript} alt="javascript" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={react} alt="react" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={node} alt="node" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={express} alt="express" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={graphql} alt="graphql" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={c} alt="c" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={mongodb} alt="mongodb" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={mysql} alt="mysql" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={npm} alt="npm" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={git} alt="git" />
                    </div>
                    <div className="skills__logos--logo">
                        <img src={github} alt="github" />
                    </div>
                </div>
            </div>
        </section>
    );
}