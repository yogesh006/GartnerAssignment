// FilteredClickList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilteredClickList = ({ clicks }) => {
  const [filteredClicks, setFilteredClicks] = useState([]);

  useEffect(() => {
    const filterClicks = async () => {
      try {
        const response = await axios.post('http://localhost:3001/filter', clicks);
        setFilteredClicks(response.data);
      } catch (error) {
        console.error('Error filtering clicks:', error);
      }
    };

    filterClicks();
  }, [clicks]);

  return (
    <div>
      <h2>Filtered Clicks</h2>
      <ul>
        {filteredClicks.map((click, index) => (
          <li key={index}>
            IP: {click.ip} | Timestamp: {click.timestamp} | Amount: {click.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredClickList;
