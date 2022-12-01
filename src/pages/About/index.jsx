import React from "react";
import "./index.css";
import InfoBtn from "../../assets/images/about-info-icon.svg";

import House from "../../assets/images/icons/house.svg";
import Growth from "../../assets/images/icons/growth.svg";
import WorkFromHome from "../../assets/images/icons/work-from-home.svg";
import Headhunting from "../../assets/images/icons/headhunting.svg";
import Family from "../../assets/images/icons/family.svg";
import Group from "../../assets/images/icons/card-img1.svg";
import DollorIcon from "../../assets/images/icons/dollar-icon.svg";
import DirectionBanner from "../../assets/images/direction-banner.png";
import DirectionBtn from '../../assets/images/icons/download.svg'

const index = () => {
  return (
    <>
      <div className="about">
        <section>
          <div className="about__hero">
            <div className="container">
              <h2>Тизим ҳақида</h2>
              <p>
                <span>Бош саҳифа</span> » Тизим ҳақида
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="about__info">
              <img src={InfoBtn} alt="info" />
              <div className="about__info-text">
                Ўзбекистон Республикаси Президентининг “Иқтисодий тараққиёт ва
                камбағалликни қисқартириш вазирлиги ҳузуридаги Маҳаллабай ишлаш
                ва тадбиркорликни ривожлантириш агентлиги фаолиятини ташкил этиш
                чора-тадбирлари тўғрисида” 2021 йил 24 декабрдаги ПҚ-62-сон
                қарорига мувофиқ ишлаб чиқилган. Мазкур электрон платформа
                республика миқёсидаги барча ҳоким ёрдамчилари, республика
                вакиллари, туман марказлари ва туман ҳокимликлари, ҳудудий
                бошқарма ва вилоят ҳокимликларнинг фаолиятини тўлиқ
                рақамлаштириш вазифасини бажаради.
                <button type="button" className="about__info-btn">
                  Батафсил{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="advantages">
            <span>Афзалликлар</span>
            <h2 className="advantages__title">
              Тизим қуйидаги имкониятлардан иборат
            </h2>
            <div className="navigator__cards">
              <a href="" className="navigator__card">
                <img src={House} />
                <div className="navigator__card-text">
                  <h3>Хонадонбай ўрганиш</h3>
                  <p>
                    маҳалладаги ижтимоий-иқтисодий ҳолатни хонадонбай ўрганиш;
                  </p>
                  <a href="#">
                    Батафсил
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </a>
              <a href="" className="navigator__card">
                <img src={Growth} />
                <div className="navigator__card-text">
                  <h3>Иқтисодий ривожлантириш</h3>
                  <p>маҳаллани иқтисодий ривожлантириш;</p>
                  <a href="#">
                    Батафсил
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="arrow"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </a>
              <a href="" className="navigator__card">
                <img src={WorkFromHome} />
                <div className="navigator__card-text">
                  <h3>Уй шароитида тадбиркорлик</h3>
                  <p>
                    доимий даромад манбаига эга бўлмаган ва ишсиз аҳолининг
                    бандлигини таъминлашга ёрдам бериш;
                  </p>
                  <a href="#">
                    Батафсил
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </a>
              <a href="" className="navigator__card">
                <img src={Headhunting} />
                <div className="navigator__card-text">
                  <h3>Ишга жойлаштириш</h3>
                  <p>ишсиз аҳолини бўш иш ўринларига жойлаштириш; </p>
                  <a href="#">
                    Батафсил
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </a>
              <a href="" className="navigator__card">
                <img src={Family} />
                <div className="navigator__card-text">
                  <h3>Оилавий тадбиркорлик</h3>
                  <p>
                    оилавий тадбиркорлик учун имтиёзли кредит олишда кўмаклашиш;
                  </p>
                  <a href="#">
                    Батафсил
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </a>
              <a href="" className="navigator__card">
                <img src={Group} />
                <div className="navigator__card-text">
                  <h3>Кооперацияни ривожлантириш</h3>
                  <p>кооперация муносабатларини ривожлантириш; </p>
                  <a href="#">
                    Батафсил
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="about__purpose">
            <div className="about__purpose-text">
              <h2 className="about__purpose--title">
                Ахборот тизими ишлаб чиқишдан кўзланган бош мақсад
              </h2>
              <ul className="about__purpose-lists">
                <li className="about__purpose-list">
                  Давлат сиёсатини маҳаллагача тушириш
                </li>
                <li className="about__purpose-list">
                  Аҳоли бандлигини таъминлаш
                </li>
                <li className="about__purpose-list">
                  Аҳоли даромадини кўпайтириш
                </li>
                <li className="about__purpose-list">
                  Тадбиркорликни ривожлантириш
                </li>
                <li className="about__purpose-list">
                  Камбағалликни қисқартириш
                </li>
              </ul>
            </div>
            <div className="about__purpose-video">
              <iframe
                width="670"
                height="380"
                src="https://www.youtube.com/embed/qlIVjyW1UjA"
                title="“Online Mahalla” ахборот тизими"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="about__instruments">
          <div className="container">
            <div className="about__instruments-info">
              <h2>Молиявий инструментлар</h2>
              <p>
                2022 йил учун ҳоким ёрдамчилари ўз вазифаларини амалга оширишда
                фойдаланадиган молиявий инструментларнинг манбалари этиб
                қуйидагилар белгиланган:
              </p>
              <div className="about__instruments-cards">
                <div className="about__instruments-card">
                  <img src={DollorIcon} alt="Dollor icon" />
                  <h3>10 трлн</h3>
                  <p>
                    оилавий тадбиркорликни ривожлантириш дастурлари доирасида
                    ажратиладиган кредитлар
                  </p>
                </div>

                <div className="about__instruments-card">
                  <img src={DollorIcon} alt="Dollor icon" />
                  <h3>1 218 млрд</h3>
                  <p>
                    аҳолининг бандлигини таъминлаш, уларнинг ўзини ўзи банд
                    қилиши, шунингдек, тадбиркорлик фаолиятини йўлга қўйиши учун
                    ажратиладиган маблағлар
                  </p>
                </div>

                <div className="about__instruments-card">
                  <img src={DollorIcon} alt="Dollor icon" />
                  <h3>50 млрд</h3>
                  <p>
                    фермер, деҳқон хўжаликлари ва томорқа ер эгаларини
                    қўллаб-қувватлаш жамғармаси ҳисобидан ажратиладиган
                    субсидиялар
                  </p>
                </div>

                <div className="about__instruments-card">
                  <img src={DollorIcon} alt="Dollor icon" />
                  <h3>250 млрд</h3>
                  <p>
                    ҳоким ёрдамчилари тавсиялари асосида маҳалла
                    инфратузилмасини яхшилаш учун кўзда тутиладиган маблағлар
                  </p>
                </div>

                <div className="about__instruments-card">
                  <img src={DollorIcon} alt="Dollor icon" />
                  <h3>851 млрд</h3>
                  <p>
                    «Саховат ва кўмак» жамғармаси, «Аёллар дафтари» жамғармаси,
                    «Ёшлар дафтари» жамғармаси миқдорида
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <h2 className="about__direction-title">
            Ҳоким ёрдамчиларининг асосий иш фаолияти йўналишлари
          </h2>
          <div className="about__direction-content">
            <img src={DirectionBanner} alt="Direction banner" />
            <ul className="about__purpose-lists">
              <li className="about__purpose-list">
                Аҳолининг иш билан бандлигини таъминлаш
              </li>
              <li className="about__purpose-list">
                Аҳолини касб-ҳунарга ўқитиш, ишсизларни касбга йўналтириш, қайта
                тайёрлаш ва уларнинг малакасини ошириш
              </li>
              <li className="about__purpose-list">
                Янги тадбиркорликни яратиш ва мавжуд тадбиркорлар фаолиятини
                ривожлантириш
              </li>
              <li className="about__purpose-list">
                Ўсиш нуқталари ёрдамида маҳалладаги мавжуд муаммоларни ҳал қилиш
              </li>
              <li className="about__purpose-list">Камбағалликни қисқартириш</li>
              <button type="button" className="about__direction-btn">
                <img src={DirectionBtn} alt="" />
                Батафсил маълумот
              </button>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
