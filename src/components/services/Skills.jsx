import React from 'react';
import './Skills.css';

const skills = [
  {
    id: 1,
    title: "Python",
    description: "Versatile programming for data science and web development.",
  },
  {
    id: 2,
    title: "SQL",
    description: "Relational database management and data manipulation.",
  },
  {
    id: 3,
    title: "Machine Learning",
    description: "Building predictive models and data-driven solutions.",
  },
  {
    id: 4,
    title: "Statistics and Probability",
    description: "Statistical analysis and probabilistic modeling.",
  },
  {
    id: 5,
    title: "Docker",
    description: "Containerization and deployment of machine learning models.",
  },
  {
    id: 6,
    title: "Git",
    description: "Version control for collaborative and individual development.",
  },
];

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container">
        {skills.map(({ id, title, description }) => (
          <div className="skills__card" key={id}>
            <h3 className="skills__title">{title}</h3>
            <p className="skills__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
