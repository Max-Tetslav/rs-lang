import React from 'react';
import { IWord } from '../../../types/wordTypes';
import WordCard from '../../UI/wordCard/WordCard';
import cl from './WordsList.module.scss';

interface IProps {
  words: IWord[];
}

function WordsList({ words }: IProps): JSX.Element {
  return (
    <div className={cl.wordsContainer}>
      {words.map((item) => {
        return (
          <WordCard
            enWord={item.word}
            transctiption={item.transcription}
            enMeaning={item.textMeaning}
            enExample={item.textExample}
            ruWord={item.wordTranslate}
            ruMeaning={item.textMeaningTranslate}
            ruExample={item.textExampleTranslate}
          />
        );
      })}
    </div>
  );
}

export default WordsList;
