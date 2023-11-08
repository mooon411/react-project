import React from "react";

const Contacts = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>

        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className="text">
            <div>
              <a href="/">KAKAO : moon0in411</a>
            </div>
            <div>
              <a href="/">duddls6552@naver.com</a>
            </div>
          </div>
        </div>

        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
