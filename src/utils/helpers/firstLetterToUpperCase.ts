function firtsLetterToUpperCase(str: string) {
  const splitWord = str.split('');
  splitWord[0] = splitWord[0].toLocaleUpperCase();

  return splitWord.join('');
}

export default firtsLetterToUpperCase;
