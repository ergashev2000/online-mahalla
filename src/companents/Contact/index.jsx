import React from "react";
import PhoneIcon from '../../assets/images/icons/phone-icon.svg'

const index = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <h2 className="contect__title">Мурожаат қилиш</h2>
          <div className="contact__content">
            <div className="contact__form">
              <form action="" className="form__content">
                <div>
                  <input type="text" placeholder="Ф.И.Ш *"required />
                  <input type="text" placeholder="Телефон *" required/>
                </div>
                <input type="text" placeholder="Мавзу *" required/>
                <textarea
                  name=""
                  id=""
                  cols="25"
                  rows="10"
                  placeholder="Хабар матни"
                  required
                ></textarea>
                <button type="submit" className="contact__btn">Жўнатиш</button>
              </form>
            </div>
            <div className="contact__text">
              <h3>МУРОЖААТ УЧУН</h3>
              <a href="tel:+998787778484">
                <img src={PhoneIcon}  />
                +998 (78) 777-84-84
              </a>
              <p>
                Ўзингизни қизиқтирган саволлар бўлса бизнинг операторларга
                мурожаат қилинг
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
