import React from "react";
import "./Education.css";

const educationData = [
  {
    institution: "Shir Sant Gajanan Maharaj College of Engineering",
    degree: "Bachelor of Technology in Information Technology",
    graduationYear: "Expected: 2027",
    achievements: [
      "Currently pursuing Bachelor of Technology in Information Technology",
    ],
  },
  {
    institution: "Vidya Bhumi Public School",
    degree: "Higher Secondary Certificate",
    graduationYear: 2023,
    achievements: [
      "Scored 66% in Higher Secondary Certificate examinations",
      "Started learning Web Development",
    ],
  },
  {
    institution: "Vidya Bhumi Public School",
    degree: "Secondary School Certificate",
    graduationYear: 2021,
    achievements: [
      "Scored 66.6% in Secondary School Certificate examinations",
      "Started my programming journey from this point, discovering a passion for technology and coding.",
    ],
  },
];

function Education() {
  return (
    <div className='education'>
      <h2>Education</h2>
      <p>
        I've always been passionate about learning and honing my skills. Here
        are the academic institutions where I've expanded my knowledge.
      </p>
      <div className='education-list'>
        {educationData.map(function (education) {
          return (
            <div
              className='education-item'
              key={education.institution}
            >
              <ul>
                <h3>{education.institution}</h3>
                <p>
                  {education.degree} - {education.graduationYear}
                </p>
                {education.achievements && (
                  <ul>
                    {education.achievements.map(function (achievement) {
                      return <li key={achievement}>{achievement}</li>;
                    })}
                  </ul>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
