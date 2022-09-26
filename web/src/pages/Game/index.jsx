import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestQuestions } from '../../reduce/actions';

export default function Game() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(requestQuestions(navigate));
  }, []);

  return (
    <div>Game</div>
  );
}
