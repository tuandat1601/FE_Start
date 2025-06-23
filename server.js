const express = require('express');
const { google } = require('googleapis');
const credentials = require('./my-api-map-348605-6d89114015e6.json'); // file JSON từ Google Cloud

const app = express();
const port = 3001;

app.get('/api/sheet', async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: '11x1k7-SPUT7lY4tOxb9v8WyNtBdGjINC7Hb5y8fdygw',
      range: 'Sheet1!A1:D100',
    });

    res.json(result.data.values);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Không đọc được dữ liệu' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
