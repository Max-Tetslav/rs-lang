import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/actions/pageTitleActions';

export default function AudioCall() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Аудиовызов'));
  }, [dispatch]);
  return (
    <>
      <div>AAAAAAAAAAAAA</div>
      <div>152</div>
    </>
  );
}
