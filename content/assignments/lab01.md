---
title: "Designing Data Protocols & Analyzing Messy Datasets"
num: 1
date: "2025-09-04"
type: "lab"
due_date: "2025-09-10"
draft: 0
---

This lab is designed to help you:
1. Design a data protocol (choosing measurements and indicators and considering data types,
2. Practice cleaning and organizing messy data, and 
3. Asking and answering questions with data while reflecting on ethical and social implications

## Learning Objectives
By the end of this lab, students will:
1. Understand the concept of a data protocol and why decisions about data structure matter.
1. Be able to identify data types, choose variables, and design a basic table schema.
1. Practice cleaning messy datasets (missing values, inconsistent formats).
1. Explore how data design decisions influence policy and justice outcomes.
1. Reflect on bias, representation, and ethics in data collection.

## 1. Designing a Data Protocol (30 min)
You will begin this lab by working in small groups (3–4 people). Each group will select a different theme:

* **Group 1:** Vaccination Accessibility
* **Group 2:** Air quality
* **Group 3:** Police accountability in traffic stops 

Each group will fill out this worksheet, where you will answer the following questions:

### 1. Defined a research question
Define a question that you want to answer:

* Are traffic stops racist?
* How can vaccine access 


### 2. What the indicators / variables that you would need to collect to answer your question?
Consider: 
1. What to measure (e.g., neighborhood, population size, vaccine sites, median income)
1. The data types and units for each indicator (e.g., numeric, categorical, boolean, text)
1. Think about ethics, equity, & representation: (e.g., under / overrepresentation, how data are categorized, whether collecting the data puts anyone at risk, etc.).
1. Are these data feasible to collect? How would it be done?


Fill out Worksheet 1: Your Data Protocol.

Worksheet 1: Designing a Data Protocol
Step	Your Answers
Research Question	
Key Variables	
Data Type (numeric/text)	
Units or Categories	
Possible Sources	
Potential Biases	
Discussion Prompts (after 15 min)

Which variables were hardest to decide on?

What trade-offs did you face (granularity vs privacy)?

Who benefits and who might be excluded by your design?

Part 3: Cleaning a Messy Dataset (40 min)
Messy Dataset Zip File

Create 3 messy CSV files (one for each theme). Include:

Missing values

Inconsistent date formats

Mixed case and typos in categorical fields

Duplicate records

Ambiguous codes (e.g., “M” = male or “missing”?)

Extra columns not needed for analysis

Example for Public Health:

neighborhood	VaxSites	Pop	last updated	%Vaccinated
NorthSide	2	8500	03-12-21	56
north side	two	8.5k	2021/03/13	fifty-six
Southside	3	10000	12-Mar-21	65%
East Side	NaN	9000	2021-03-14	58

Repeat similar issues for environmental and justice datasets.

Activity Instructions

Download the messy dataset for your theme.

Open in Excel / Google Sheets (or Python/R if advanced).

Identify and fix:

Missing values (decide how to handle them)

Inconsistent formats (dates, units, capitalization)

Typos and ambiguous entries

Discuss: What assumptions did you make while cleaning?

Worksheet 2: Cleaning Notes
Problem Found	Your Fix	Assumptions Made
Neighborhood spelling	Standardized to title case	Assumed “north side” = “NorthSide”
Missing VaxSites	Imputed based on nearest neighbor	Assumed similar to adjacent
Discussion Prompts

Which cleaning decisions felt objective? Which were subjective?

Could different teams clean the same dataset differently? What does that mean for analysis?

How might missing or inconsistent data affect policy recommendations?

Part 4: Answer Questions & Reflect (30 min)

Students use the cleaned dataset to answer questions, then discuss policy implications.

Sample Questions (Mix of Data Literacy & Justice)

Which neighborhood has the lowest vaccination access?

Are resources equitably distributed across income levels?

Which groups are missing from this dataset? How does that affect conclusions?

What would policymakers do with this data? What could go wrong?

Deliverables

Completed Data Protocol Worksheet

Cleaned dataset (CSV)

Written responses to discussion questions

Wrap-Up Discussion (10 min)

What surprised you about designing a data protocol?

How much of “data analysis” is about decisions, not just numbers?

What ethical or social issues came up?