import React, { useEffect } from 'react';
import { getToken } from '../../lib/api';

export default function Home() {
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      sessionStorage.setItem('TOKEN_TRIVIA', token);
    };
    fetchToken();
  }, []);

  return (
    <div>index</div>
  );
}
