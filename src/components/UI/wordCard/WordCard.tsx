import React, { useState } from 'react';
import cl from './WordCard.module.scss';
import hardWordIcon from '../../../assets/svg/question.svg';
import playWordIcon from '../../../assets/svg/sound.svg';
import checkWordIcon from '../../../assets/svg/check.svg';
import translateWordIcon from '../../../assets/svg/translate.svg';
import deleteTags from '../../../utils/helpers/deleteTags';
import firtsLetterToUpperCase from '../../../utils/helpers/firstLetterToUpperCase';

interface IProps {
  enWord: string;
  transctiption: string;
  enMeaning: string;
  enExample: string;
  ruWord: string;
  ruMeaning: string;
  ruExample: string;
}

function WordCard({ enWord, transctiption, enMeaning, enExample, ruWord, ruMeaning, ruExample }: IProps): JSX.Element {
  const rightWord = firtsLetterToUpperCase(enWord);
  const rightMeaning = deleteTags(enMeaning);
  const rightExample = deleteTags(enExample);
  const ruRightWord = firtsLetterToUpperCase(ruWord);

  const [lang, setLang] = useState('en');

  return (
    <div className={cl.container}>
      <div className={cl.textContainer}>
        <div className={cl.textItemContainer}>
          {lang === 'en' ? (
            <p className={[cl.textItem, cl.mainWord].join(' ')}>
              {rightWord} <em>{transctiption}</em>
            </p>
          ) : (
            <p className={[cl.textItem, cl.mainWord].join(' ')}>{ruRightWord}</p>
          )}
          <div className={cl.btnsContainer}>
            <button className={cl.translateBtn} onClick={() => (lang === 'en' ? setLang('ru') : setLang('en'))} type="button">
              <img src={translateWordIcon} alt="translate-btn" />
            </button>
            <button className={cl.playBtn} type="button">
              <img src={playWordIcon} alt="play-word-sound-btn" />
            </button>
            <button className={cl.checkBtn} type="button">
              <img src={checkWordIcon} alt="check-word-btn" />
            </button>
            <button className={cl.hardBtn} type="button">
              <img src={hardWordIcon} alt="add-word-to-hard-btn" />
            </button>
          </div>
        </div>
        <div className={cl.textItemContainer}>
          {lang === 'en' ? (
            <p className={[cl.textItem, cl.longTextItem].join(' ')}>{rightMeaning}</p>
          ) : (
            <p className={[cl.textItem, cl.longTextItem].join(' ')}>{ruMeaning}</p>
          )}
        </div>
        <div className={cl.textItemContainer}>
          {lang === 'en' ? (
            <p className={[cl.textItem, cl.longTextItem].join(' ')}>{rightExample}</p>
          ) : (
            <p className={[cl.textItem, cl.longTextItem].join(' ')}>{ruExample}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WordCard;
