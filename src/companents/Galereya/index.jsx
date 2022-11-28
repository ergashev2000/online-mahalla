import React from "react";
import Gal1 from "../../assets/images/gal1.jpg";
import Gal2 from "../../assets/images/gal2.jpg";
import Gal3 from "../../assets/images/gal3.jpg";

const index = () => {
  return (
    <>
      <section className="galereya">
        <div className="container">
          <h2 className="galereya__title">Галерея</h2>
          <p>«Ҳоким ёрдамчи»лари фаолиятидан фото ва видео лавҳалар</p>
          <div className="galereya__images">
            <div className="galereya__images-left">
              <img src={Gal1} alt="" />
              <div className="two__image">
                <img src={Gal2} alt="" />
                <img src={Gal3} alt="" />
              </div>
            </div>
            <div className="galereya__images-right">
              <div className="two__image">
                <img src={Gal2} alt="" />
                <img src={Gal3} alt="" />
              </div>
              <img src={Gal1} alt="" />
            </div>
          </div>
          <a href="" className="galereya__more-download">
            Кўпроқ юклаш
          </a>
        </div>
      </section>
    </>
  );
};

export default index;
