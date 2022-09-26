import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { requestQuestions } from '../../reduce/actions';

export default function Game() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(requestQuestions(navigate));
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}
