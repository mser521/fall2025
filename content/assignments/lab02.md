---
title: "Intro to Tableau Public"
num: "2"
date: "2025-09-23"
type: "lab"
due_date: "2025-09-30"
draft: 0
---

## Reference Materials for Today's Lab
* Today's tutorial is based on this video: <a href="https://www.youtube.com/watch?v=Br7oyg9-jbM" target="_blank">Tutorial: Tableau Public for ULTRA Beginners</a>. If you get stuck on anything, feel free to go back and watch the video.
* <a href="https://public.tableau.com/app/learn/sample-data" target="_blank">Sample Datasets</a> (we will be working with the "Superstore" dataset)
* [Tableau Public Cheat Sheet](/fall2025/resources/data-tableau) (Course Website)


## Your Tasks for Lab 2
For Lab 2, you are going to make a "Superstore Sales" dashboard as a means to explore the various features of Tableau Public. 

Before you begin, register for a Tableau Public account and download and install the Desktop software (see the [Tableau Public Cheat Sheet](/fall2025/resources/data-tableau)). Then, complete the following 7 tasks:

1. [Load your data](#1-load-your-data)
2. [Make a bar chart](#2-make-a-bar-chart-sales-by-region) (for practice)
3. [Make a line chart grouped by region](#3-make-a-line-chart-of-total-monthly-sales-by-region-in-2015)
4. [Make a map of total profits](#4-make-a-map-of-total-profits-by-state-in-2015)
5. [Make a tree map](#5-make-a-tree-map-of-total-returns-by-region-by-state-in-2015)
6. [Make a *dual axis* chart](#6-make-a-dual-axis-chart-showing-profit-and-sales-in-2015-for-q1-and-q2)
7. [Make & publish a dashboard](#7-make-a-dashboard)


### 1. Load Your Data <a id="1-load-your-data"></a>
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

### 2. Make a Bar Chart: Sales by Region <a id="2-make-a-bar-chart-sales-by-region"></a>
In sheet one, there should be a list of variables that you can use to create your charts. These variables are divided into *dimensions* and *measures*. Tableau automatically positions *dimensions* on the top and *measures* on the bottom.

**Dimensions** = categories, qualitative fields (e.g., Country, Product, Year).
* Typically discrete values.
* Used to group the data into categories.

**Measures** = numeric fields (e.g., Sales, Profit, Temperature).
* Typically continuous values.
* Used for calculations, aggregations (SUM, AVG).



<img class="screenshot" src="/fall2025/images/assignments/lab02/variables.png" />

Double-click on the **Sales** measure and **Region** dimension. It should automatically create a bar chart for you:

<img class="screenshot" src="/fall2025/images/assignments/lab02/bar1.png" />

Tableau has a set of "smart defaults" for displaying various measure / dimension combinations. That said, you can click on the "Show Me" button on the upper right-hand corner of your screen and try out some of the other charts (pie chart, stacked bar chart, treemap, etc.)

### 3. Make a Line Chart of Total Monthly Sales by Region in 2015 <a id="3-make-a-line-chart-of-total-monthly-sales-by-region-in-2015"></a>
In a new sheet, see if you can make the following line chart, showing monthly sales grouped by region (small multiples). Filter the data so that it is only showing sales data for 2015.

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/challenge1.png" />

### 4. Make a Map of Total Profits by State in 2015 <a id="4-make-a-map-of-total-profits-by-state-in-2015"></a>
In a new sheet, see if you can make the following map, showing profit by state for the year 2015:

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/challenge2.png" />

### 5. Make a Tree Map of Total Returns by Region by State in 2015 <a id="5-make-a-tree-map-of-total-returns-by-region-by-state-in-2015"></a>
In a new sheet, see if you can make the following visualization, showing returns by region and by state for the year 2015:

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/challenge3.png" />

### 6. Make a "Dual Axis" Chart Showing Profit and Sales in 2015<a id="6-make-a-dual-axis-chart-showing-profit-and-sales-in-2015-for-q1-and-q2"></a>
You may want to watch the tutorial video for this one. It's from timestamp **10:40-12:33**:

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/challenge4.png" />

**Hint**: Visualize the timeseries data by week (continuous) rather than by day.

### 7. Make a Dashboard <a id="7-make-a-dashboard"></a>
Try making a dashboard that looks something like this (and see if you can get the filter to work):

<img class="screenshot !max-w-4xl" src="/fall2025/images/assignments/lab02/dashboard.png" />

Here's a link to the <a href="https://public.tableau.com/shared/QZYS6PTHR?:display_count=n&:origin=viz_share_link" target="_blank">Dashboard</a> that I made.

It doesn't have to look exactly like the one pictured in the screenshot. Just do your best! When you're done, make sure you publish it to Tableau Public. The video tutorial goes over how to do this.


## What to Turn In
When you're done, please turn in a link to your Tableau Public Dashboard on the Moodle.