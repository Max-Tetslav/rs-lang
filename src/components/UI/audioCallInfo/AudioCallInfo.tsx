import React from 'react';
// import VolumeUp from '@material-ui/icons/VolumeUp';
import { IWord } from '../../../types/wordTypes';
import cl from './AudioCallInfo.module.scss';
import playEnglishWord from '../../../utils/helpers/playEnglishWord';

interface AudioCallInfoProps {
  word: IWord | null;
  hasAnswer: boolean;
}

export default function AudioCallInfo({ word, hasAnswer }: AudioCallInfoProps) {
  const onPlay = () => {
    playEnglishWord(word?.audio);
  };

  return (
    <div className={cl.questionWrapper}>
      <div className={cl.infoWrapper}>
        {!hasAnswer ? (
          <button type="button" className={cl.buttonAudio} onClick={onPlay}>
            {/* <VolumeUp className={`${cl.volumeUp} ${cl.volume}`} /> */}
          </button>
        ) : (
          <div>aaaaaaa</div>
        )}
      </div>
    </div>
  );
}
