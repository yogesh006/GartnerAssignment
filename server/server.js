// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, this is the server!');
  });

  app.get('/filter', (req, res) => {
    // Handle GET logic here
    res.send('This is a GET request.');
  });  

app.post('/filter', (req, res) => {
    console.log("Received request to filter clicks");
  const clicks = req.body;

  const result = {};
  const clickCounts = {};

  clicks.forEach((click) => {
    const { ip, timestamp, amount } = click;

    if (clickCounts[ip] && clickCounts[ip] >= 10) {
      return;
    }

    const clickTime = new Date(timestamp);
    const clickHour = clickTime.getHours();

    const key = `${ip}-${clickHour}`;

    if (result[key]) {
      if (amount > result[key].amount) {
        result[key] = { ip, timestamp, amount };
      }
    } else {
      result[key] = { ip, timestamp, amount };
    }

    clickCounts[ip] = (clickCounts[ip] || 0) + 1;
  });

  const resultSet = Object.values(result);

  // Save the result set to result-set.json
  console.log("Writing to result-set.json");
  fs.writeFileSync('result-set.json', JSON.stringify(resultSet, null, 2));

  console.log("Sending response");
  res.json(resultSet);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
