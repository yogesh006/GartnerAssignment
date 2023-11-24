// App.js
import React, { useState, useEffect } from 'react';
import ClickList from './components/ClickList';
import FilteredClickList from './components/FilteredClickList';
import clicksData from './data/clicks.json';
const App = () => {

  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    // Set clicks array directly from imported data
    setClicks(clicksData);
  }, []);


  return (
    <div>
      <h1>Click Filtering App</h1>
      <ClickList clicks={clicks} />
      <FilteredClickList clicks={clicks} />
    </div>
  );
};

export default App;
