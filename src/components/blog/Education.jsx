import React, { useState } from 'react';
import './Education.css';

import school10Img from '../../assets/jaipuria.jpg';
import school12Img from '../../assets/salwan.jpg';
import collegeImg from '../../assets/srm.jpeg';

const educationData = [
  {
    id: 1,
    title: "Bachelor's Degree",
    institution: "SRM Institute of Science and Technology",
    year: "Expected: 2026",
    board: "B.Tech CSE with IT",
    stream: "8.78",
    image: collegeImg,
  },
  {
    id: 2,
    title: "Senior Secondary (12th)",
    institution: "Salwan Public School",
    year: "Completed: 2022",
    board: "CBSE",
    stream: "PCM",
    image: school12Img,
  },
  {
    id: 3,
    title: "High School (10th)",
    institution: "Seth Anandram Jaipuria School",
    year: "Completed: 2020",
    board: "CBSE",
    stream: "PCM",
    image: school10Img,
  },
];

const Education = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section className="education container section" id="education">
      <h2 className="section__title">Education</h2>

      <div className="education__container">
        {educationData.map(({ id, title, institution, year, board, stream, image }) => (
          <div
            className={`education__card ${openCard === id ? 'active' : ''}`}
            key={id}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => toggleCard(id)}
          >
            <div className="overlay">
              <h3 className="education__title">{title}</h3>
              <h4 className="education__institution">{institution}</h4>
              <p className="education__year">{year}</p>
              {openCard === id && (
                <div className="education__details">
                  <p><strong>{id === 1 ? "Degree" : "Board"}:</strong> {board}</p>
                  <p><strong>{id === 1 ? "CGPA" : "Stream"}:</strong> {stream}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
