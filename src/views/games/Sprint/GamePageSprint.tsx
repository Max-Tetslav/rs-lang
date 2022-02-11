import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/actions/pageTitleActions';

export default function Sprint() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Спринт'));
  }, [dispatch]);
  return (
    <>
      <div>SSSSSSSSSSSSSSSSSSSSSS</div>
      <div>152</div>
    </>
  );
}
