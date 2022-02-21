import React, { useState } from 'react';
import cl from './Textbook.module.scss';
import TextbookContent from '../../components/layout/textbookContent/TextbookContent';
import UnitsMenu from '../../components/layout/unitsMenu/unitsMenu';

function TextBook(): JSX.Element {
  const [groupNum, setGroupNum] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [isHardUnit, setIsHardUnit] = useState(false);

  return (
    <main className={isHardUnit ? cl.hardContainer : cl.container}>
      <UnitsMenu currentUnit={groupNum} setCurrentUnit={setGroupNum} changePage={setPageNum} setHardUnit={setIsHardUnit} />
      <TextbookContent unitNum={groupNum} page={pageNum} changePage={setPageNum} isHardUnit={isHardUnit} />
    </main>
  );
}

export default TextBook;
