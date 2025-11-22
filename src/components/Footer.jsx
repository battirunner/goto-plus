import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__company">
          <p className="footer__companySub">宮崎県指定居住支援法人</p>
          <p className="footer__companyMain">株式会社 GOTO PLUS<span className="pc">（ゴートゥープラス）</span></p>
          <p className="footer__companyKana sp">（ゴートゥープラス）</p>
        </div>
        <ul className="footer__info">
          <li className="footer__infoItem">
            <p className="footer__infoHead">基本情報</p>
            <p className="footer__infoDetail">〒880-0837</p>
            <p className="footer__infoDetail">宮崎県宮崎市<br className="pc" />村角町北原2189-1</p>
          </li>
          <li className="footer__infoItem">
            <p className="footer__infoHead">専用回線</p>
            <p className="footer__infoDetail">070‐7667‐5252</p>
            <p className="footer__infoDetail">受付時間<br />9：00~18：00<br className="pc" />（土・日・祝除く）</p>
          </li>
          <li className="footer__infoItem">
            <p className="footer__infoHead">メールアドレス</p>
            <p className="footer__infoDetail">gotoplus52＠gmail.com</p>
          </li>
        </ul>
        <p className="footer__copyright">Copyright © 株式会社GOTO PLUS All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;