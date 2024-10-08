import React from "react";
import { getImageUrl } from "../../utils";
import style from './Card.module.css';

const Card = ({
  item: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={style.container}>
      {/* <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={style.image}
      /> */}
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.skills}>
        {skills.map((skill, index) => (
          <li key={index} className={style.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={style.links}>
        {demo && (
          <a
            href={demo}
            className={style.link}
            target="_blank"
            rel="noopener noreferrer" // Security improvement
          >
            View Demo
          </a>
        )}
        {source && (
          <a
            href={source}
            className={style.link}
            target="_blank"
            rel="noopener noreferrer" // Security improvement
          >
            View Source
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
