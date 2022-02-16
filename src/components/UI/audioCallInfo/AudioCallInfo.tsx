import React from 'react';
import { IWord } from '../../../types/wordTypes';
import cl from './AudioCallInfo.module.scss';
import playEnglishWord from '../../../utils/helpers/playEnglishWord';
import sound from '../../../assets/svg/sound.svg';
import deleteTags from '../../../utils/helpers/deleteTags';
import firtsLetterToUpperCase from '../../../utils/helpers/firstLetterToUpperCase';

interface AudioCallInfoProps {
  word: IWord | null;
  hasAnswer: boolean;
}

export default function AudioCallInfo({ word, hasAnswer }: AudioCallInfoProps) {
  const onPlay = () => {
    playEnglishWord(word?.audio);
  };
  const onPlayAudioExample = () => {
    playEnglishWord(word?.audioExample);
  };

  return (
    <div className={cl.questionWrapper}>
      <div className={cl.infoWrapper}>
        {!hasAnswer ? (
          <button type="button" className={cl.buttonAudio} onClick={onPlay}>
            <img src={sound} alt="sound" className={cl.volume} />
          </button>
        ) : (
          <div className={cl.wrapper}>
            <img
              className={cl.imgWord}
              src={`https://dream-react-rslang-server.herokuapp.com/${word?.image}`}
              alt={`https://dream-react-rslang-server.herokuapp.com/${word?.word}`}
            />
            <div className={cl.wrapperTextInfo}>
              <div className={cl.textInfo}>
                <button type="button" className={cl.buttonAudioAnswer} onClick={onPlay}>
                  <img src={sound} alt="sound" />
                </button>
                <span className={cl.text}>
                  {`${word?.word ? firtsLetterToUpperCase(word?.word) : ''} `}{' '}
                  <em style={{ color: '#ffab00' }}>{word?.transcription}</em> {` - ${word?.wordTranslate}`}
                </span>
              </div>
              <div className={cl.textInfo}>
                <button type="button" className={cl.buttonAudioAnswer} onClick={onPlayAudioExample}>
                  <img src={sound} alt="sound" />
                </button>
                <span className={cl.text}>{word?.textExample ? deleteTags(word?.textExample) : ''} </span>
              </div>
              <div className={cl.textInfo}>
                <span className={cl.textTranslate}>{`${word?.textExampleTranslate}. `}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
