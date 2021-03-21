import React from "react";

export default function Home() {
  return (
    <section className="hero-container">
      <div className="hero">
        <div className="hero__title">
          <div className="typewriter">&gt; Rohit Bajaj</div>
        </div>
        <div className="hero__description">
          Hi!
          <span role="img" aria-label="hello-emoji">
            👋🏻
          </span>{" "}
          I am a full-stack developer who likes working with{" "}
          <strong>Javascript</strong> libraries & frameworks. I am romantic
          about learning, and web development keeps me forever a student.
        </div>
      </div>
    </section>
  );
}
