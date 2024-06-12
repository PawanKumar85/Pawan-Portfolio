import React from "react";
import style from "./Platform.module.css";
import { getImageUrl } from "../../utils";
const Platform = ({ data }) => {
  return (
    <section
      className="text-white"
      style={{
        margin: "10%",
      }}
      id="platform"
    >
      <div className={style.services}>
        <div className={style.container}>
          <h1>Platform</h1>
          <div className={style.serviceslist}>
            {data.platform.map((item) => {
              return (
                <div key={item.platformId} className="rounded-4">
                  <img src={getImageUrl(item.imageSrc)} className=" rounded-5" alt={item.title} />
                  <h2>{item.title}</h2>
                  <p className="fs-6">{item.description}</p>
                  <a
                    className="btn btn-primary d-flex justify-content-center  "
                    href={item.link}
                    target="_blank"
                  >
                    For More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
