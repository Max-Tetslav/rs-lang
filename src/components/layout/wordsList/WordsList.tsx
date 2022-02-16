import React from 'react';
import cl from './WordsList.module.scss';
import { IWord } from '../../../types/wordTypes';
import WordCard from '../../UI/wordCard/WordCard';
import Pagination from '../pagination/Pagination';

interface IProps {
  words: IWord[];
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  isHard: boolean;
}

function WordsList({ words, setPageNum, isHard }: IProps): JSX.Element {
  return (
    <div className={cl.wordsContainer}>
      {words.length ? (
        <>
          {words.map((item) => (
            <WordCard key={item.id} wordObject={item} isHardUnit={isHard} />
          ))}
          {isHard ? null : <Pagination setPage={setPageNum} />}
        </>
      ) : (
        <h1>Нет слов</h1>
      )}
    </div>
  );
}

export default WordsList;
