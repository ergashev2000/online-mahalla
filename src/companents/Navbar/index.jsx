import React, { useRef } from "react";
import OilakreditLogo from "../../assets/images/oilakredit-logo.png";
import SmartmarketLogo from "../../assets/images/smartmarket-logo.png";
import HeaderLogo from "../../assets/images/header-logo.svg";

import TelegramIcon from "../../assets/images/icons/telegram_black.svg";
import InstagramIcon from "../../assets/images/icons/instagram_black.svg";

import Logout from "../../assets/images/icons/log-in-blue.svg";

const index = () => {
  window.addEventListener("scroll", () => {
    console.log("window.scrollY", window.scrollY);
    if (window.scrollY > 0) {
      document.querySelector(".navbar__menu-container").classList.add("fixed");
    } else if (window.scrollY < 78) {
      document
        .querySelector(".navbar__menu-container")
        .classList.remove("fixed");
    }
  });

  function BarMenu() {
    document.querySelector('.bar__nav-items').classList.toggle('show')
  }

  return (
    <>
      <header>
        <div className="partner-container">
          <div className="container partner">
            <a href="https://oilakredit.uz/">
              <img src={OilakreditLogo} />
              Oilakredit.uz
            </a>
            <a href="https://smart-market.uz/">
              <img src={SmartmarketLogo} />
              Online-mahalla.uz
            </a>
          </div>
        </div>
        <div className="navbar__contact-main ">
          <div className="container navbar__contact ">
            <div className="navbar__contact-left">
              <a href="" className="conatact__number">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                +998 (78) 777-84-84
              </a>
              <a href="" className="contact__channel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                </svg>
                Расмий канал
              </a>
              <a href="" className="contact__email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
                info@online-mahalla.uz
              </a>
            </div>
            <div className="navbar__socail-media">
              <a href="">
                <img src={TelegramIcon} />
              </a>
              <a href="">
                <img src={InstagramIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className="navbar__menu-container ">
          <div className="container">
            <div className=" navbar__menu ">
              <a href="">
                <img src={HeaderLogo} />
              </a>
              <nav>
                <ul className="nav__items">
                  <li className="bar__menu-toggle"  onClick={() => BarMenu()}>
                    <span className="hamberger__menu"></span>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__item-link">
                      Бош саҳифа
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__item-link">
                      Тизим ҳақида
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__item-link">
                      Онлайн ахборотнома
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__item-link">
                      Савол-жавоб
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__item-link">
                      Боғланиш
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__item-link">
                      <img src={Logout} />
                      <span>Тизимга кириш</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="bar__menu-all ">
              <ul className="bar__nav-items">
                <li>
                  <a href="#">Бош саҳифа</a>
                </li>
                <li>
                  <a href="#">Тизим ҳақида</a>
                </li>
                <li>
                  <a href="#">Онлайн ахборотнома</a>
                </li>
                <li>
                  <a href="#">Савол-жавоб</a>
                </li>
                <li>
                  <a href="#">Боғланиш</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
