import React, { useEffect, useState } from 'react';
import cl from './WordCard.module.scss';
import hardWordIcon from '../../../assets/svg/question.svg';
import playWordIcon from '../../../assets/svg/sound.svg';
import checkWordIcon from '../../../assets/svg/check.svg';
import deleteHardWordIcon from '../../../assets/svg/exit.svg';
import translateWordIcon from '../../../assets/svg/translate.svg';
import deleteTags from '../../../utils/helpers/deleteTags';
import firtsLetterToUpperCase from '../../../utils/helpers/firstLetterToUpperCase';
import config from '../../../utils/config';
import { useAppDispatch, useAppSelector } from '../../../utils/helpers/appHooks';
import { createUserWord, deleteUserWord } from '../../../services/userService';
import { add, remove } from '../../../store/reducers/words';
import { IWord } from '../../../types/wordTypes';

interface IProps {
  isHardUnit: boolean;
  wordObject: IWord;
}

function WordCard({ isHardUnit, wordObject }: IProps): JSX.Element {
  const {
    id,
    image,
    word,
    wordTranslate,
    transcription,
    textMeaning,
    textMeaningTranslate,
    textExample,
    textExampleTranslate,
    audio,
    audioMeaning,
    audioExample,
  } = wordObject;
  const rightWord = firtsLetterToUpperCase(word);
  const rightMeaning = deleteTags(textMeaning);
  const rightExample = deleteTags(textExample);
  const ruRightWord = firtsLetterToUpperCase(wordTranslate);
  const [lang, setLang] = useState('en');
  const isAuth = useAppSelector((state) => state.users.loggedIn);
  const [isHardPainted, setIsHardPainted] = useState(false);
  const hardWords = useAppSelector((state) => state.words.hardWords);
  const dispatch = useAppDispatch();

  function checkIsAlreadyHard() {
    if (isAuth) {
      hardWords.forEach((item) => {
        if (item.id === wordObject.id) {
          setIsHardPainted(true);
        }
      });
    }
  }

  useEffect(() => {
    if (!isAuth) {
      setIsHardPainted(false);
    }
    checkIsAlreadyHard();
  }, [isAuth]);

  useEffect(() => {
    checkIsAlreadyHard();
  }, []);

  const audioUrl = [`${config.apiUrl}/${audio}`, `${config.apiUrl}/${audioMeaning}`, `${config.apiUrl}/${audioExample}`];
  let currentAudioNum = 0;

  function getNextAudio(audioNum: number) {
    return new Audio(audioUrl[audioNum]);
  }

  function playWordCard() {
    const currentAudio = getNextAudio(currentAudioNum);

    if (currentAudioNum <= audioUrl.length) {
      currentAudio.load();
      currentAudio.play();
      currentAudioNum += 1;
    } else {
      currentAudio.removeEventListener('ended', () => playWordCard(), false);
    }

    currentAudio.addEventListener('ended', () => playWordCard());
  }

  return (
    <div className={isHardPainted || isHardUnit ? [cl.container, cl.hardWord].join(' ') : cl.container}>
      <img className={cl.image} src={`${config.apiUrl}/${image}`} alt={`word-"${rightWord}`} />
      <div className={cl.textContainer}>
        <div className={cl.textItemContainer}>
          {lang === 'en' ? (
            <p className={[cl.textItem, cl.mainWord].join(' ')}>
              {rightWord} <em>{transcription}</em>
            </p>
          ) : (
            <p className={[cl.textItem, cl.mainWord].join(' ')}>{ruRightWord}</p>
          )}
          <div className={cl.btnsContainer}>
            <button
              className={[cl.btnImage, cl.translateBtn].join(' ')}
              onClick={() => (lang === 'en' ? setLang('ru') : setLang('en'))}
              type="button"
            >
              <img src={translateWordIcon} alt="translate-btn" />
            </button>
            <button className={[cl.btnImage, cl.playBtn].join(' ')} type="button" onClick={() => playWordCard()}>
              <img src={playWordIcon} alt="play-word-sound-btn" />
            </button>
            <button className={[cl.btnImage, cl.checkBtn].join(' ')} type="button" disabled={!isAuth}>
              <img src={checkWordIcon} alt="check-word-btn" />
            </button>
            <button
              className={
                isHardPainted || isHardUnit
                  ? [cl.btnImage, cl.hardBtn, cl.paintHardBtn].join(' ')
                  : [cl.btnImage, cl.hardBtn].join(' ')
              }
              type="button"
              disabled={!isAuth}
              onClick={() => {
                if (isHardUnit) {
                  dispatch(remove(id));
                  setIsHardPainted(false);
                  deleteUserWord(JSON.parse(localStorage.getItem('userData') as string).userId, id);
                  setTimeout(() => localStorage.setItem('hardWords', JSON.stringify(hardWords)), 1000);
                }

                if (!isHardPainted && !isHardUnit) {
                  dispatch(add(wordObject));
                  setIsHardPainted(true);
                  createUserWord(JSON.parse(localStorage.getItem('userData') as string).userId, id, { difficulty: 'hard' });
                  setTimeout(() => localStorage.setItem('hardWords', JSON.stringify(hardWords)), 1000);
                } else {
                  dispatch(remove(id));
                  setIsHardPainted(false);
                  deleteUserWord(JSON.parse(localStorage.getItem('userData') as string).userId, id);
                  setTimeout(() => localStorage.setItem('hardWords', JSON.stringify(hardWords)), 1000);
                }
              }}
            >
              <img src={isHardPainted ? deleteHardWordIcon : hardWordIcon} alt="add-word-to-hard-btn" />
            </button>
          </div>
        </div>
        <div className={cl.textItemContainer}>
          {lang === 'en' ? (
            <p className={[cl.textItem, cl.longTextItem].join(' ')}>{rightMeaning}</p>
          ) : (
            <p className={[cl.textItem, cl.longTextItem].join(' ')}>{textMeaningTranslate}</p>
          )}
        </div>
        <div className={cl.textItemContainer}>
          {lang === 'en' ? (
            <p className={[cl.textItem, cl.longTextItem].join(' ')}>{rightExample}</p>
          ) : (
            <p className={[cl.textItem, cl.longTextItem].join(' ')}>{textExampleTranslate}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WordCard;
