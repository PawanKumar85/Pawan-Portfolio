import React from "react";
import "./Education.css";
const Education = ({ data }) => {
  data.qualification.map((item, id) =>
    console.log(item.duration, item.title, id)
  );
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">
        {data.qualification.map((item, id) => {
          return (
            <div className="timeline-item" key={id}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.duration}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span>
                  {item.course} : {item.courseID}
                </span>
                <p>{item.collage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
