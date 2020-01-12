import React from 'react';
import './NoURLMatch.scss';

export const NoURLMatch = () => {
  return (
    <main className="no-url-container">
      <h2 className="no-url-match-message">This page is a dead end.  Please return home.</h2>
    </main>
  )
}

export default NoURLMatch;
