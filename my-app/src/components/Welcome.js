import React from 'react'
import './Welcome.css'
import gif from './Aimation.gif';
import { Trans, useTranslation } from "react-i18next";

 


export default function Welcome() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

    return(
      <div className="welcome">
      <div className="welcome-header">
        <span>Change languages</span>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("de")}>DE</button>
            </div>
      <div className='welcome-container'>

      <div className='welcome-text' >
      <div>{t("description.part1")}</div>
      <div>{t("description.part2")}</div>
      <div>{t("description.part3")}</div>
      <div>{t("description.part4")}</div>
      <div>{t("description.part5")}</div>
        </div >
        <div className='gif-img'>
        <img src={gif} alt="git" />
      </div>
      </div>
      </div>
    );
  }