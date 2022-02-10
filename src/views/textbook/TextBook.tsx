import React, { useState } from 'react';
import cl from './Textbook.module.scss';
import TextbookContent from '../../components/layout/textbookContent/TextbookContent';
import UnitsMenu from '../../components/layout/unitsMenu/unitsMenu';

function TextBook(): JSX.Element {
  const [groupNum, setGroupNum] = useState(0);

  return (
    <main className={cl.container}>
      <UnitsMenu setCurrentUnit={setGroupNum} />
      <TextbookContent unitNum={groupNum} />
    </main>
  );
}

export default TextBook;
