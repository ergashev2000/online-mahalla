import React from "react";
import FooterLogo from "../../assets/images/footer-logo.svg";
import Logout from "../../assets/images/icons/log-in-blue.svg";

const index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer__logo">
              <a href="">
                <img src={FooterLogo} alt="Footer Logo" />
              </a>
              <p>Юнусобод тумани, Амир Темур шох кўчаси, 107-Б уй</p>
              <p>
                <a href="info@online-mahalla.uz">info@online-mahalla.uz</a>
              </p>
              <a href="www.online-mahalla.uz">www.online-mahalla.uz</a>
            </div>
            <ul className="footer__menu">
              <h3>Менюлар</h3>
              <li>
                <a href="#">Бош саҳифа</a>
              </li>
              <li>
                <a href="#">Тизим ҳақида</a>
              </li>
              <li>
                <a href="#">Янгиликлар</a>
              </li>
              <li>
                <a href="#">Савол-жавоб</a>
              </li>
              <li>
                <a href="#">Боғланиш</a>
              </li>
            </ul>
            <div className="footer__app">
              <h3>Мобил иловалар</h3>
              <a href="">Online Mahalla <img src={Logout} /></a>
              <a href="">RS Imzo <img src={Logout} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
