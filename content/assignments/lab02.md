---
title: "Intro to Tableau Public Tutorial"
num: "2"
date: "2025-09-23"
type: "lab"
due_date: "2025-09-30"
draft: 1
---

> ## Readings
> * Today's tutorial is based on this video: <a href="https://www.youtube.com/watch?v=Br7oyg9-jbM" target="_blank">Tutorial: Tableau Public for ULTRA Beginners</a>. If you get stuck on anything, feel free to go back and watch the video.
> * <a href="https://public.tableau.com/app/learn/sample-data" target="_blank">Sample Datasets</a>

## 1. General Concepts

### 1.1. Set-up and Installation 
* <a href="https://public.tableau.com/" target="_blank">Register for an account here</a>.
* Then, download and install Tableau Public:
   <img class="screenshot" src="/fall2025/images/assignments/lab02/tableau-download.png" />

### 1.2. Loading Data
* Open Tableau Public and click File → Open or Connect to Data.
* You can browse various sample data sets <a href="https://public.tableau.com/app/learn/sample-data" target="_blank">here</a>

### 1.3. What is a Sheet?
A Sheet is a single visualization (chart, map, table, etc.). It’s the basic building block in Tableau. You can create multiple sheets, then combine them into a Dashboard later.

### 1.4. Measures vs. Dimensions
* **Dimensions** = categories, qualitative fields (e.g., Country, Product, Year).
    * Typically discrete values.
    * Used to group the data into categories.
* **Measures** = numeric fields (e.g., Sales, Profit, Temperature).
    * Typically continuous values.
    * Used for calculations, aggregations (SUM, AVG).
* Tableau automatically separates them in the sidebar:
    * Top = Dimensions
    * Bottom = Measures

### 1.5. Show Me: Chart Recommendations
The **Show Me** panel (top-right) suggests visualizations. Hover over each chart type to see the minimum number of dimensions/measures required.

Example:

* **Bar charts** need 1 dimension + 1 measure
* **Scatter plots** need 2 measures
* **Maps** need geographic dimension + measure (optional)

Drag fields onto rows/columns, then click a chart type in Show Me.

### 1.6. Creating a Dashboard
A Dashboard combines multiple sheets into one interactive view.
Steps:

1. Click New Dashboard (bottom tab).
1. Drag your sheets from the left sidebar into the workspace.
1. Adjust layout (floating vs. tiled).
1. Add filters so clicking in one chart updates others.

### 1.7. Publishing to Tableau Public
When ready, click File → Save to Tableau Public. You’ll need a free Tableau Public account.

Once published:

* The visualization is accessible via a public link.
* You can embed it in a website, share on social media, or download later.

## 2. Activity
For Lab 2, you are going to make a "Superstore Sales" dashboard as a means to explore the various features of Tableau Public. Specifically, you will learn how to:
1. Import data
2. Make a bunch of different charts
3. Incorporate those charts into a dashboard
4. Publish your dashboard so it's available on the Internet


### 2.1. Load Your Data
Let's download the **"Superstore Sales"** dataset <a href="https://public.tableau.com/app/learn/sample-data" target="_blank">here</a>. Once downloaded, save the **`sample_-_superstore.xls`** file within your `mser521` folder in a folder called `lab02`. Your directory structure should look something like this:

```sh
mser521
├── intro-html
├── lab01
└── lab02
    └── sample_-_superstore.xls
```

Then, load this dataset into Tableau:
<img class="screenshot" src="/fall2025/images/assignments/lab02/upload-data.png" />

Once loaded, drag the "orders" sheet into the main panel to display the data:
<img class="screenshot" src="/fall2025/images/assignments/lab02/orders-sheet.png" />

Once the data has been loaded, click on the "Sheet 1" tab at the bottom (highlighted in orange in the screenshot above).

### 2.2. Make a Bar Chart: Sales by Region
In sheet one, there should be a list of variables that you can use to create your charts. These variables are divided into "Dimensions" (top, green) -- qualitative and text indicators -- and "Measures" -- quantitative indicators (numeric measurements):

<img class="screenshot" src="/fall2025/images/assignments/lab02/variables.png" />

Double-click on the **Sales** measure and **Region** dimension. It should automatically create a bar chart for you:

<img class="screenshot" src="/fall2025/images/assignments/lab02/bar1.png" />

Tableau has a set of "smart defaults" for displaying various measure / dimension combinations. That said, you can click on the "Show Me" button on the upper right-hand corner of your screen and try out some of the other charts (pie chart, stacked bar chart, treemap, etc.)

### 2.3. Make a Line Chart of Total Monthly Sales by Region in 2015
In a new sheet, see if you can make the following line chart, showing monthly sales grouped by region (small multiples). Filter the data so that it is only showing sales data for 2015.

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/challenge1.png" />

### 2.4. Make a Map of Total Profits by State in 2015
In a new sheet, see if you can make the following map, showing profit by state for the year 2015:

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/challenge2.png" />

### 2.5. Make a Tree Map of Total Returns by Region by State in 2015
In a new sheet, see if you can make the following visualization, showing returns by region and by state for the year 2015:

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/challenge3.png" />

### 2.6. Make a "Dual Axis" Chart Showing Profit and Sales in 2015 for Q1 and Q2
You may want to watch the tutorial video for this one. It's from timestamp **10:40-12:33**:

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/challenge4.png" />
