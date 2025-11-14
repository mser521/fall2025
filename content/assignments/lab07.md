---
title: "Interactive JavaScript Charts & Maps"
num: "7"
date: "2025-11-13"
type: "lab"
due_date: "2025-11-25"
draft: 0
---

<style>
    ol li {
        margin: 0;
        margin-bottom: 5px;
    }
</style>

<a href="/fall2025/downloads/labs/lab07.zip" class="nu-button">Download Lab 7 <i class="fas fa-download"></i></a> 

Please download the lab07.zip file, unzip it, and move it into your `mser521` folder. Then, complete the exercises below.

## Part 1: Array Map Function Exercises

The `map()` function can creates a new array by calling a function on every element in the original array. This is especially useful for transforming data, which you'll need to do when working with charts and maps.

### Exercise 1: Basic Map Function

**Folder:** `lab07/01-map-function-basics/`

Practice using the `map()` function to transform arrays.

**Data Structure:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'cherry', 'date', 'grape'];
```

**Tasks:**

1. Use `map()` to create a new array where each number is doubled. Store the result in a variable called `doubled` and print it to the console.
2. Use `map()` to create a new array where each number is squared (multiplied by itself). Store the result in a variable called `squared` and print it to the console.
3. Use `map()` to create a new array where each fruit name has "🍎 " prepended to it (e.g., "🍎 apple"). Store the result in a variable called `fruitsWithEmoji` and print it to the console.

**Hint:** The `map()` function takes a callback function as an argument. For example:
```javascript
const doubled = numbers.map(num => num * 2);
```

### Exercise 2: Map with Objects

**Folder:** `lab07/02-map-function-with-objects/`

Practice using `map()` to extract or transform properties from an array of objects.

**Data Structure:**

```javascript
const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 21, grade: 92 },
  { name: 'Charlie', age: 19, grade: 78 },
  { name: 'Diana', age: 22, grade: 95 },
];
```

**Tasks:**

1. Use `map()` to create an array containing only the names of all students. Store the result in a variable called `names` and print it to the console.
2. Use `map()` to create an array containing only the grades of all students. Store the result in a variable called `grades` and print it to the console.
3. Use `map()` to create an array of strings in the format "Name: [name], Grade: [grade]" for each student. Store the result in a variable called `studentInfo` and print it to the console.

**Hint:** When working with objects, you can access properties using dot notation or bracket notation:
```javascript
const names = students.map(student => student.name);
// or
const names = students.map(student => student['name']);
```

### Exercise 3: Map with Real Data

**Folder:** `lab07/03-map-function-with-real-data/`

Practice using `map()` with data fetched from Google Sheets, which is exactly what you'll do when building your charts and maps.

**Data Source:**

The data comes from a Google Sheet published via Google Apps Script. The API endpoint is:

```javascript
const sheetName = 'Snow Days';
const response = await fetch(
  `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
);
const snowDays = await response.json();
```

**Expected Data Structure:**

The data is an array of objects, where each object represents a month with snow day counts:

```javascript
[
  {
    "Month": "November",
    "Snow Days 2023-2024": 1,
    "Snow Days 2024-2025": 1
  },
  {
    "Month": "December",
    "Snow Days 2023-2024": 1,
    "Snow Days 2024-2025": 2
  },
  {
    "Month": "January",
    "Snow Days 2023-2024": 4,
    "Snow Days 2024-2025": 1
  },
  // ... more months
]
```

**Tasks:**

1. Use `map()` to create an array containing only the months. Store the result in a variable called `months` and print it to the console.
2. Use `map()` to create an array containing only the "Snow Days 2023-2024" values. Store the result in a variable called `snowDays2023` and print it to the console.
3. Use `map()` to create an array of objects with only `Month` and `Snow Days 2024-2025` properties. Store the result in a variable called `snowDays2024` and print it to the console.
4. Use `map()` to create an array of strings in the format "[Month]: [count] snow day(s) in 2023-2024" for each month. Store the result in a variable called `formattedSnowDays` and print it to the console.

**Note:** The starter code includes an `async function getSnowDays()` that fetches the data. Complete the TODOs inside this function using `map()`. This exercise demonstrates the exact pattern you'll use when extracting data from Google Sheets for your charts and maps.

## Part 2: Create Your Own Data-Driven Map

**Folder:** `lab07/04-map-task/`

For this task, you are going to create an interactive map that pulls from data stored in  <a href="https://docs.google.com/spreadsheets/d/1rteYnB3u5jGWbiSqLCv02f1mwbGv119GJKOsq6tATN0/edit?gid=165019399#gid=165019399" target="_blank">this Google Sheets Document</a>. To do this:

### Set-up your spreadsheet
1. Duplicate the "Landmarks" tab
2. Give your new tab a short, unique name (e.g, "Places - Sarah")
3. Add or remove place data in order to create a map that is interesting to you. For instance:
    * My favorite hiking spots
    * Quiet places on campus
    * Places I hope to visit in the future.

You are welcome to add additional columns, but please don't rename or remove existing columms


> ### Final Project Tips
> If you want to set up your own "Google Sheets Database" for your project, [here are some instructions](/fall2025/resources/data-spreadsheet-database).

### Modify the query

Edit `lab07/04-map-task/main.js` as follows:
1. Modify the name of the sheet on line 14: 
    ```js
    const sheetName = 'Your Sheet Name';
    ```

    Then, preview your map. There should be a 2-second delay, but then your data should be showing on the map.


### Customize your map
* Modify the map attributes (zoom level, lat/lng, basemap (experiment with some of the `tilesets.js` basemaps)
* Modify the info bubble template (add styles, data, etc.)
* Modify the panel template (add styles, data, etc.)
* Use custom colors that match your data theme
* Stylize your markers. Hint:
   
    ```js
    /* Javascript */
    const marker = L.marker([35.616988, -82.565401], {
        icon: getIcon('teal', '📚'),  // here is the place where you override the default marker with your own custom style
    }).addTo(map);

    function getIcon(color, icon) {
        return L.divIcon({
            html: `
                <div style="background-color: ${color}" class="map-marker">
                    ${icon}
                </div>
            `,
            iconSize: [50, 50],
            iconAnchor: [25, 25],
        });
    }
    ```

    ```css
    /* CSS */
    .map-marker { 
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    ```

## Part 3: Create Your Own Data-Driven Chart

**Folder:** `lab07/05-chart-task/`

For this task, you are going to create an interactive bar chart that pulls from data stored in the same <a href="https://docs.google.com/spreadsheets/d/1rteYnB3u5jGWbiSqLCv02f1mwbGv119GJKOsq6tATN0/edit?gid=165019399#gid=165019399" target="_blank">Google Sheets Document</a> used in Part 2. To do this:

### Set-up your spreadsheet
1. Duplicate the "Snow Days" tab
2. Give your new tab a short, unique name (e.g, "Data - Sarah")
3. Modify the data to create a chart that is interesting to you. For instance:
    * Your monthly spending habits (and your friend's)
    * Hours that you and your friends spend on different activities each week
    * Number of books read per month by each member of your reading club
    * Average steps walked per day

You are welcome to add additional columns, but please keep at least:
* One column for categories (x-axis labels, e.g., months, days, names)
* One column for numeric values (y-axis data)
* Optionally, a second (or third) series column for comparison
    * Try creating both a stacked bar chart and a side-by-side bar chart.

**Important:** Don't rename or remove the column headers that are already in the starter code (`Month`, `Snow Days 2023-2024`, `Snow Days 2024-2025`) unless you also update the code to match your new column names.

### Modify the query

Edit `lab07/05-chart-task/main.js` as follows:
1. Add a sheet name parameter to the `getChartData()` function (similar to the map task):
    ```js
    async function getChartData() {
      const sheetName = 'Your Sheet Name';
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
      );
      const data = await response.json();
      return data;
    }
    ```

2. If you changed your column names, update the `map()` calls in the `createChart()` function to match your new column names:
    ```js
    // Example: if your columns are "Category" and "Value 1" and "Value 2"
    categories = serverData.map(row => row['Category']);
    values1 = serverData.map(row => row['Value 1']);
    values2 = serverData.map(row => row['Value 2']);
    ```

3. Update the `series` array in the chart options to match your data:
    ```js
    series: [
      { name: 'Your Series 1 Name', data: values1 },
      { name: 'Your Series 2 Name', data: values2 },
    ],
    ```

4. Update the `xaxis.categories` to use your categories array.

Then, preview your chart. There should be a brief delay while the data loads, but then your chart should appear.

### Customize your chart
* Change the chart type (try `'line'` instead of `'bar'`)
* Modify the chart colors to match your data theme
* Add a chart title using the `title` option in ApexCharts
* Customize the details panel template (add styles, additional data, etc.)
* Modify the `getDetails()` function to display information relevant to your data
* Style the details panel with CSS to match your chart theme

**Hint:** To change chart colors, modify the `colors` array in the options:
```js
colors: ['#FF6B6B', '#4ECDC4'], // Custom colors for series 1 and 2
```

**Hint:** To add a chart title:
```js
const options = {
  chart: {
    type: 'bar',
    // ... other chart options
  },
  title: {
    text: 'Your Chart Title',
    align: 'center',
  },
  // ... rest of options
};
```

## What to Submit

Please make sure that you have completed:

1. All 3 map function exercises in the warmup folder
2. Your custom data-driven map (Part 2)
3. Your custom data-driven chart (Part 3)

When you're done, please create a link from your homepage to the Lab 7 `index.html` page at the root of your `lab07` folder (see <a href="https://vanwars.github.io/mser521" target="_blank">Sarah's homepage</a> for an example). Then, commit and push all of your edits to GitHub and paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.
