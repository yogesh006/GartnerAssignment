// ClickList.js
import React from 'react';

const ClickList = ({ clicks }) => {
  return (
    <div>
      <h2>Original Clicks</h2>
      <ul>
        {clicks.map((click, index) => (
          <li key={index}>
            IP: {click.ip} | Timestamp: {click.timestamp} | Amount: {click.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClickList;
