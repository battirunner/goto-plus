import React from 'react';

const SupportImage = () => {
  return (
    <section className="image" id="image">
      <h1 className="heading heading--image">支援イメージ</h1>
      <figure className="image__main">
        <img src="/assets/img/figure.png" alt="支援イメージ" />
      </figure>
      <div className="btn__unit">
        <a href="tel:07076675252" className="btn">ご相談はこちら</a>
        <a href="https://line.me/ti/p/GJfrEl4Q2G" target="_blank" rel="noopener noreferrer" className="btn btn--line">LINEはこちら</a>
      </div>
    </section>
  );
};

export default SupportImage;