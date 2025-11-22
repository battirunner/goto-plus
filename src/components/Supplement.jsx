import React from 'react';

const Supplement = () => {
  const categories = [
    [
      "⾼齢者",
      "精神障碍者", 
      "ひとり親世帯",
      "低額所得者<br />（生活保護・生活困窮者以外）",
      "児童養護施設退所者"
    ],
    [
      "身体障碍者",
      "子育て世代",
      "生活保護受給者", 
      "被災者",
      "刑余者（更生保護対象者）"
    ],
    [
      "知的障碍者",
      "DV被害者",
      "生活困窮者<br />（生活自立相談支援事業対象者）",
      "犯罪被害者",
      "LGBT（性的マイノリティ）"
    ]
  ];

  return (
    <section className="supplement">
      <h1 className="heading">「住宅確保要配慮者」とは</h1>
      <div className="supplement__box">
        {categories.map((column, columnIndex) => (
          <ul key={columnIndex} className="supplement__list">
            {column.map((item, itemIndex) => (
              <li 
                key={itemIndex} 
                className="supplement__item"
                dangerouslySetInnerHTML={{ __html: item }}
              ></li>
            ))}
          </ul>
        ))}
      </div>
      <div className="btn__unit">
        <a href="tel:07076675252" className="btn">ご相談はこちら</a>
        <a href="https://line.me/ti/p/GJfrEl4Q2G" target="_blank" rel="noopener noreferrer" className="btn btn--line">LINEはこちら</a>
      </div>
    </section>
  );
};

export default Supplement;