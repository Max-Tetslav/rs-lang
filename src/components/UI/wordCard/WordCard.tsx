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
import {
  deleteHardWordInHardUnit,
  getUserHardWords,
  getUserLearnedWords,
  isAlreadyHardUserWord,
  updateUserWord,
} from '../../../services/userService';
import { IWord } from '../../../types/wordTypes';
import { updateHardWords, updateLearnedWords } from '../../../store/reducers/wordsReducer';

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
  const [isHardPainted, setIsHardPainted] = useState(false);
  const [isLearned, setIsLearned] = useState(false);
  const [cardClasses, setCardClasses] = useState([cl.container].join(' '));
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.users.loggedIn);
  const hardWords = useAppSelector((state) => state.words.hardWords);
  const learnedWords = useAppSelector((state) => state.words.learnedWords);

  useEffect(() => {
    if (isLearned && !isHardUnit) {
      setCardClasses([cl.container, cl.learnedWord].join(' '));
    } else if (isHardPainted || isHardUnit) {
      setCardClasses([cl.container, cl.hardWord].join(' '));
    } else {
      setCardClasses([cl.container].join(' '));
    }
  }, [isLearned, isHardUnit, isHardPainted]);

  function checkIsAlreadyHard(): void {
    hardWords.forEach((item) => {
      if (item._id === wordObject.id) {
        setIsHardPainted(true);
      }
    });
  }

  function checkIsAlreadyLearned(): void {
    learnedWords.forEach((item) => {
      if (item._id === wordObject.id) {
        setIsLearned(true);
      }
    });
  }

  useEffect(() => {
    if (!isAuth) {
      setIsHardPainted(false);
      setIsLearned(false);
    } else {
      checkIsAlreadyHard();
      checkIsAlreadyLearned();
    }
  }, [isAuth]);

  useEffect(() => {
    setTimeout(() => checkIsAlreadyHard(), 1500);
  }, [hardWords]);

  useEffect(() => {
    setTimeout(() => checkIsAlreadyLearned(), 1500);
  }, [learnedWords]);

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
    <div className={cardClasses}>
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
            <button
              className={
                isLearned ? [cl.btnImage, cl.checkBtn, cl.paintLearnedBtn].join(' ') : [cl.btnImage, cl.checkBtn].join(' ')
              }
              type="button"
              disabled={!isAuth}
              onClick={async () => {
                if (isLearned) {
                  setIsLearned(false);
                  await updateUserWord(JSON.parse(localStorage.getItem('userData') as string).userId, id, {
                    difficulty: 'easy',
                    optional: { isLearned: false },
                  });
                } else {
                  setIsLearned(true);
                  await updateUserWord(JSON.parse(localStorage.getItem('userData') as string).userId, id, {
                    difficulty: 'easy',
                    optional: { isLearned: true },
                  });
                }

                if (isHardPainted) {
                  setIsHardPainted(false);
                  await updateUserWord(JSON.parse(localStorage.getItem('userData') as string).userId, id, {
                    difficulty: 'easy',
                    optional: { isLearned: true },
                  });
                }

                if (isHardUnit) {
                  setIsHardPainted(false);
                  setIsLearned(true);
                  await deleteHardWordInHardUnit(
                    JSON.parse(localStorage.getItem('userData') as string).userId,
                    wordObject._id as string,
                  );
                }
                const updatedLearnedWords = await getUserLearnedWords();
                dispatch(updateLearnedWords(updatedLearnedWords[0].paginatedResults));
              }}
            >
              <img src={isLearned ? deleteHardWordIcon : checkWordIcon} alt="check-word-btn" />
            </button>
            <button
              className={
                isHardPainted || isHardUnit
                  ? [cl.btnImage, cl.hardBtn, cl.paintHardBtn].join(' ')
                  : [cl.btnImage, cl.hardBtn].join(' ')
              }
              type="button"
              disabled={!isAuth || isLearned}
              onClick={async () => {
                if (!isHardPainted && !isHardUnit) {
                  setIsHardPainted(true);
                  await isAlreadyHardUserWord(JSON.parse(localStorage.getItem('userData') as string).userId, id);
                } else if (isHardPainted && !isHardUnit) {
                  setIsHardPainted(false);
                  await isAlreadyHardUserWord(JSON.parse(localStorage.getItem('userData') as string).userId, id);
                }

                if (isHardUnit) {
                  await isAlreadyHardUserWord(
                    JSON.parse(localStorage.getItem('userData') as string).userId,
                    wordObject._id as string,
                  );
                }
                const updatedHardWords = await getUserHardWords();
                dispatch(updateHardWords(updatedHardWords[0].paginatedResults));
              }}
            >
              <img src={isHardPainted || isHardUnit ? deleteHardWordIcon : hardWordIcon} alt="add-word-to-hard-btn" />
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
