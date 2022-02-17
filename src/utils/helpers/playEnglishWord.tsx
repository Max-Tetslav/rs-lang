import config from '../config';

const playEnglishWord = (name: string | undefined) => {
  const audio = new Audio();
  audio.src = `${config.apiUrl}/${name}`;
  audio.play();
};

export default playEnglishWord;
