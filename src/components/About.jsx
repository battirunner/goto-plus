import React from 'react';

const About = () => {
  const services = [
    {
      title: "入居相談",
      image: "/assets/img/image01.png",
      description: "居住支援法人として、不動産業者仲介での民間住宅への入居が困難と言う方に新しい入居先の紹介、案内を行います。"
    },
    {
      title: "入居手続き",
      image: "/assets/img/image02.png",
      description: "物件内覧、不動産業者への同行、行政手続き等のサポートを行います。"
    },
    {
      title: "見守りサービス",
      image: "/assets/img/image03.png",
      description: "住宅確保要配慮者と向き合い、コミュニケーションを取りながら、見守り・安否確認を行います。"
    },
    {
      title: "トータルライフサポート",
      image: "/assets/img/image04.png",
      description: "生活の中での困った（各種手続き、設定、外出同行、部屋の掃除など、）を解決します。"
    }
  ];

  return (
    <section className="about" id="about">
      <h1 className="heading heading--about">私たちの取り組み</h1>
      <p className="about__bigText">「転居したくても入居先が見つからない」</p>
      <p className="about__text">そんな方に、専門スキルを持つ民間団体、行政と連携して住宅確保要配慮者と民間賃貸住宅とをマッチングします。<br />入居後も安心して暮らせる環境づくりを支援します。</p>
      
      <div className="about__unit">
        <div className="about__card">
          <p className="about__cardHead">{services[0].title}</p>
          <figure className="about__image">
            <img src={services[0].image} alt={services[0].title} />
          </figure>
          <p className="about__cardText">{services[0].description}</p>
        </div>
        <div className="about__card">
          <p className="about__cardHead">{services[1].title}</p>
          <figure className="about__image">
            <img src={services[1].image} alt={services[1].title} />
          </figure>
          <p className="about__cardText">{services[1].description}</p>
        </div>
      </div>
      
      <div className="about__unit">
        <div className="about__card">
          <p className="about__cardHead">{services[2].title}</p>
          <figure className="about__image">
            <img src={services[2].image} alt={services[2].title} />
          </figure>
          <p className="about__cardText">{services[2].description}</p>
        </div>
        <div className="about__card">
          <p className="about__cardHead">{services[3].title}</p>
          <figure className="about__image">
            <img src={services[3].image} alt={services[3].title} />
          </figure>
          <p className="about__cardText">{services[3].description}</p>
        </div>
      </div>
      
      <div className="btn__unit">
        <a href="tel:07076675252" className="btn">ご相談はこちら</a>
        <a href="https://line.me/ti/p/GJfrEl4Q2G" target="_blank" rel="noopener noreferrer" className="btn btn--line">LINEはこちら</a>
      </div>
    </section>
  );
};

export default About;