# WEB - Masai Restaurant Management

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit is Working Fine - 2 marks.
 ✅ Check the Data after mutiple form submits - 1 marks.
 ✅ Check the Dashboard page's Table  - 3 marks.
 ✅ Check Filtering in Done  - 2 marks.
 ✅ Add To Favourite  - 2 marks.
 ✅ Check Favourite pages table - 2 mark.
 ✅ Check the delete - 2 mark.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- dashboard.html
- favourites.html
- Scripts/index.js
- Scripts/dashboard.js
- Scripts/favourites.js
- Please ignore all the other files except the above-mentioned ones.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- Build a Restaurant Management App.
- Your application had a Navbar that contains 3 tabs (this is already in the template no need to build).
  1. Home
  2. Dashboard
  3. Favorites
     ![img](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-06/Screenshot%202023-01-06%20at%2010.13.33%20AM_909586.png)

### Home Page:-

- This page contains a form with 2 input boxes and 2 select tags and 1 textarea having the following fields (this is already in the template no need to build).

1. Item Name
2. Description
3. Item Type
4. Item category
5. Price

- On clicking on form submit (form submit event) you should store the data in your local storage with the key `menu`.

`Hint : localStorage.setItem("menu",JSON.stringify)`

- Refer to this image for better understanding:-
  ![img](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-06/Screenshot%202023-01-06%20at%203.13.50%20PM_862694.png)
- Refer to this doc to understand how to take input values from textarea - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

### Dashboard Page:-

- On this page all the data from the `menu` will be shown in a table format.
- The table will have the following columns:-

1. Item Name
2. Description
3. Item Type
4. Item category
5. Price
6. Add To Favourite

- Here the values will come from the LacalStorage Except for the last column.
- On all the rows of the last column will have this value `Add`. This word is case-sensitive. Please note that.
- In this page we will also have a select tag with an id:- `filter`. The user should be able to filter the menu items by their type using it.
- When You click on the last cell of that row(Add) that row should be added in a new localStorage with the key `fav-menu`.

`Hint : localStorage.setItem("fav-menu",JSON.stringify) `.

![img](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-06/Screenshot%202023-01-06%20at%2010.12.24%20AM_274569.png)

### Favourites Page:-

- On this page all the data from the `fav-menu` will be shown in a table format.
- The table will have the following columns:-

  1.  Item Name
  2.  Description
  3.  Item Type
  4.  Item category
  5.  Price
  6.  Remove

- Here the values will come from the LacalStorage Except for the last column.
- All the rows of the last column will have this value `Delete`. This word is case-sensitive. Please note that.
- When You click on the last cell of that row(Add) that row should be deleted both from DOM and from localStorage.

- Refer to this image for a better understanding:-
  ![img](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-06/Screenshot%202023-01-06%20at%2010.13.05%20AM_136749.png)

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
