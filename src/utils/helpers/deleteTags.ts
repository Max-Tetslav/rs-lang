function deleteTags(str: string) {
  const boldTags = str.includes('<b>');
  const italicTags = str.includes('<i>');

  let stringToTransform = str;

  if (boldTags) {
    stringToTransform = stringToTransform.replaceAll('<b>', '"');
    stringToTransform = stringToTransform.replaceAll('</b>', '"');

    const arr = stringToTransform.split('"');
    arr[1] = arr[1].toLocaleUpperCase();

    stringToTransform = arr.join('"');
  }

  if (italicTags) {
    stringToTransform = stringToTransform.replaceAll('<i>', '"');
    stringToTransform = stringToTransform.replaceAll('</i>', '"');

    const arr = stringToTransform.split('"');
    arr[1] = arr[1].toLocaleUpperCase();

    stringToTransform = arr.join('"');
  }

  return stringToTransform;
}

export default deleteTags;
