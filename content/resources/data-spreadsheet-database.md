---
title: "Interacting with Google Sheets over the Web"
group_order: 5
group: "Data"
order: 1
draft: 0
---

## Overview

Google Sheets can be published as a read-only JSON API using Google Apps Script. This allows you to fetch data from your spreadsheet in JavaScript applications (like charts and maps) without exposing your Google account credentials.

## Step 1: Create Your Google Sheet

1. Create a new Google Sheet or open an existing one.
2. Add your data with column headers in the first row.
3. **Important:** Make sure your sheet is set to "Anyone with the link can view":
   - Click the **Share** button (top right)
   - Click **Change to anyone with the link**
   - Set permission to **Viewer**
   - Click **Done**

## Step 2: Create a Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script** (or go to <a href="https://script.google.com" target="_blank">script.google.com</a> and create a new project).
2. Delete any default code in the editor.
3. Paste the following script:

    ```javascript
    function doGet(e) {
        const cache = CacheService.getScriptCache();
        const sheetName = (e && e.parameter && e.parameter.sheet) || "Snow Days";
        const cacheKey = `sheetData_${sheetName}`;
        const cached = cache.get(cacheKey);

        if (cached) {
            // Return cached result immediately
            return ContentService
            .createTextOutput(cached)
            .setMimeType(ContentService.MimeType.JSON);
        }

        // Access spreadsheet by ID (faster and safer than getActiveSpreadsheet)
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = ss.getSheetByName(sheetName);

        if (!sheet) {
            return ContentService
            .createTextOutput(JSON.stringify({ error: `Sheet '${sheetName}' not found` }))
            .setMimeType(ContentService.MimeType.JSON);
        }

        // Get values in one call
        const data = sheet.getDataRange().getValues();
        const headers = data.shift();

        // Use map with preallocated array for speed
        const rows = Array(data.length);
        for (let i = 0; i < data.length; i++) {
            const rowObj = {};
            for (let j = 0; j < headers.length; j++) {
            rowObj[headers[j]] = data[i][j];
            }
            rows[i] = rowObj;
        }

        const json = JSON.stringify(rows);

        // Cache the result for 5 minutes
        cache.put(cacheKey, json, 300);

        return ContentService
            .createTextOutput(json)
            .setMimeType(ContentService.MimeType.JSON);
        }

        function onEdit(e) {
        if (!e || !e.source || !e.range) return; // safety check

        const sheetName = e.range.getSheet().getName(); // get the edited sheet name
        const cacheKey = `sheetData_${sheetName}`;      // match the key used in doGet()
        
        const cache = CacheService.getScriptCache();
        cache.remove(cacheKey); // invalidate cache for that specific sheet

    }
    ```


## Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**.
2. Click the gear icon (⚙️) next to **Select type** and choose **Web app**.
3. Configure the deployment:
    - **Description:** (optional) Give it a name like "JSON API for My Sheet"
    - **Execute as:** Select **Me** (your account)
    - **Who has access:** Select **Anyone** (this makes it publicly accessible)
4. Click **Deploy**.
5. **Important:** You may be prompted to authorize the script:
    - Click **Authorize access**
    - Choose your Google account
    - Click **Advanced** → **Go to [Project Name] (unsafe)**
    - Click **Allow**
6. Copy the **Web App URL** that appears. It will look like:
    ```
    https://script.google.com/macros/s/AKfycb.../exec
    ```


## Step 4: Use the API in Your Code

### Basic Usage (Single Sheet)

If your script uses a default sheet name or you only have one sheet:

```javascript
async function getData() {
    const sheetName = "Name of Spreadsheet Tab";
    const response = await fetch(
        'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?sheet=${sheetName}'
    );
    const data = await response.json();
    return data;
}
```

### Usage with Sheet Name Parameter

If you want to specify which sheet/tab to use:

```javascript
async function getData() {
    const sheetName = 'My Sheet Name';
    const response = await fetch(
        `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?sheet=${sheetName}`
    );
    const data = await response.json();
    return data;
}
```

### Example: Using the Data

```javascript
async function createChart() {
    const serverData = await getData();
    console.log(serverData); // Array of objects

    // Extract specific columns using map()
    const categories = serverData.map(row => row['Category']);
    const values = serverData.map(row => row['Value']);

    // Use the data in your chart or map
}
```

## Data Format

The API returns an array of objects, where each object represents a row in your sheet:

```javascript
[
    {
        "Column Header 1": "value1",
        "Column Header 2": "value2",
        "Column Header 3": "value3"
    },
    {
        "Column Header 1": "value4",
        "Column Header 2": "value5",
        "Column Header 3": "value6"
    }
]
```

## Troubleshooting

### "Script not found" or 404 Error
- Make sure you copied the correct Web App URL
- Verify the script is deployed and set to "Anyone" access

### "Sheet not found" Error
- Check that the sheet name matches exactly (case-sensitive)
- Make sure the sheet name in your URL parameter matches the tab name in Google Sheets

### CORS Errors
- Google Apps Script web apps handle CORS automatically, so this shouldn't be an issue
- If you see CORS errors, make sure you're using the `doGet` function (not `doPost`)

### Data Not Updating
- After updating your Google Sheet, the changes should appear immediately in your API
- If not, try clearing your browser cache

## Security Notes

- The web app URL is publicly accessible: anyone with the link can access your data
- Only share the URL with people you trust, or make sure your sheet only contains data you're comfortable sharing publicly
- The script is read-only: it cannot modify your spreadsheet
- Consider using a separate Google account for public data if you're concerned about privacy

