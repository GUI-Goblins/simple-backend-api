const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const axios = require('axios');
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Define a route to handle the POST request
app.post('/adventure', async (req, res) => {
  try {
    // Handle the POST request here
    console.log("HERE'S THE REQUEST FROM FRONTEND:", req.body);
    let response;

    if (req.body && Object.keys(req.body).length > 0) {
      const requestBody = req.body;
      response = await axios.post(
        'https://tjmp838d98.execute-api.us-west-2.amazonaws.com/WorkingPOST/user/1',
        requestBody
      );
    } else {
      response = await axios.post(
        'https://tjmp838d98.execute-api.us-west-2.amazonaws.com/WorkingPOST/user/1'
      );
    }

    console.log("HERE'S THE RESPONSE:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error processing the request:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
