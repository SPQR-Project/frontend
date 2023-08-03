<div align="center">
  <img src="./assets/readme/logos/main_logo.jpg" alt="Logo" width="600" />
</div>

<H3 align="center"> <i> An Easy-to-use Scan & Order System for Restaruants  </i></H3>
<br>

## Table of Contents
1. [Description](#introduction)
2. [Features](#features)
3. [Design](#design)
4. [Tech Stack](#techstack)
    1. [Cloud](#cloud)
    2. [Backend](#backend)
    3. [Frontend](#frontend)
<br>

## Description <a name="introduction"></a>
"QR Mondrian" is a QR ordering system that boosts the dining experience and simplifies restaurant operations. Using QR code technology, customers can view menus and place orders directly from their phones.

For customers, this system removes the usual wait for a server to provide the menu or take an order. They just scan a QR code, view the menu on their phones, and place their orders right away, saving time and increasing convenience.

For restaurant owners, "QR Mondrian" brings a new level of efficiency. Owners can make real-time updates to menus and immediately stop orders when a dish runs out. This effective order management helps reduce errors and can also help decrease operational costs.

In conclusion, "QR Mondrian" stands as a time-saving and cost-effective solution, redefining the dining and ordering process for customers and restaurant owners alike.
<br>

## Features <a name="features"></a>



### Mobile
<table>
    <tbody>
        <tr>
            <td>
                <b>Mobile Menu Page</b>
                <br>
            </td>
        </tr>
        <tr>
            <td rowspan="1">
                <div align="center">
                    <a href="https://github.com/SPQR-Project/frontend/blob/main/assets/readme/gifs/mobile_menu_page.gif">
                        <img src="./assets/readme/gifs/mobile_menu_page.gif" width="30%">
                    </a>
                </div>
            </td>
        </tr>
        <tr>
            <td> 
                On the Menu page, customers can easily check out menu offerings with a scroll bar for seamless navigation  
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr>
            <td>
                <b>Mobile Menu Details Page</b>
                <br>
            </td>
        </tr>
        <tr>
            <td rowspan="1">
                <div align="center">
                    <a href="https://github.com/SPQR-Project/frontend/blob/main/assets/readme/gifs/mobile_menu_details_page.gif">
                        <img src="./assets/readme/gifs/mobile_menu_details_page.gif" width="30%">
                    </a>
                </div>
            </td>
        </tr>
        <tr>
            <td> 
                On the Menu Details page, customers can view and select option items, select the quantity for each menu item, and add the menu item to the cart.
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr>
            <td>
                <b>Mobile Cart Page</b>
                <br>
            </td>
        </tr>
        <tr>
            <td rowspan="1">
                <div align="center">
                    <a href="https://github.com/SPQR-Project/frontend/blob/main/assets/readme/gifs/mobile_cart_page.gif">
                        <img src="./assets/readme/gifs/mobile_cart_page.gif" width="30%">
                    </a>
                </div>
            </td>
        </tr>
        <tr>
            <td> 
                On the Cart Page, customers can edit menu item details, modify quantities, delete items, review past orders, and finally, submit their current order.
            </td>
        </tr>
    </tbody>
</table>
<br>

## Tech Stack <a name="techstack"></a>

### **Backend** <a name="backend"></a>

|Node.js|
|:---:|
|<a href="https://nodejs.org/en"><img src="./assets/readme/logos/nodejs_logo.png" height="60px"></a>|

<table>
    <tr>
        <td width="100%">
            <img src="./assets/readme/diagrams/database_structure.png">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://dbdiagram.io/d/64ca9d2302bd1c4a5e2395dd">Database Structure</a>
        </td>
    </tr>
</table>

### Description of Tables

qr_mondrian_schema:\
&nbsp; - **restaurants**: basic information about different restaurants\
&nbsp; - **branches**: information about the various branches of each restaurant\
&nbsp; - **branches_menu_status**: the status of menus at different branches\
&nbsp; - **main_categories**: the main categories of menus in each restaurant\
&nbsp; - **main_menus**: the main menus under each category for the restaurants\
&nbsp; - **option_categories**: the various option categories under each main menu item\
&nbsp; - **option_menus**: the various option menus under each option category\
&nbsp; - **orders**: the details of customer orders at each branch\
&nbsp; - **sub_orders**: sub orders that make up a order\
&nbsp; - **order_items**: information about the items included in each sub order\
&nbsp; - **order_item_options**: the option items chosen for each order item

### List of Libraries in Use

|Library|Usage 
|:---:|:---:|
|[express](https://www.npmjs.com/package/express)| Application framework for building RESTful APIs  |
|[@aws-sdk/client-s3](https://www.npmjs.com/package/aws-sdk)| AWS sdk for accessing S3 buckets|
|[multer-s3](https://www.npmjs.com/package/multer)| Middleware to handle form-data when uploading images |
|[sequelize](https://www.npmjs.com/package/sequelize)| ORM tool to handle database transactions |
<br>

### **Frontend** <a name="frontend"></a>

|React|
|:---:|
|<a href="https://react.dev/"><img src="./assets/readme/logos/reactjs_logo.png" height="60px"></a>|

<table>
    <tr>
        <td width="33%">
            <img src="./assets/readme/diagrams/userflow_customer.jpg">
        </td>
        <td width="67%">
            <img src="./assets/readme/diagrams/userflow_restaurant.jpg">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://drive.google.com/file/d/1wtpR2PCCuPEl5Lq7ODCvMy5uxFw5hArr/view?usp=sharing">Customer Userflow</a>
        </td>
        <td align="center">
            <a href="https://drive.google.com/file/d/1PkmjmGlSpFRuUuk1BzAKiWPPfsHJhS0A/view?usp=sharing">Restaurant Userflow</a>
        </td>
    </tr>
</table>

### List of Libraries in Use

|Library|Usage 
|:---:|:---:|
|[@mui/material](https://www.npmjs.com/package/@mui/material)| Used to create UI elements like dropdown lists |
|[amazon-cognito-identity-js](https://www.npmjs.com/package/amazon-cognito-identity-js)| Connects to AWS Cognito for user login |
|[crypto-js](https://www.npmjs.com/package/crypto-js)| Used to encode and decode URLs for additional security |
|[jwt-decode](https://www.npmjs.com/package/jwt-decode)| Used for decode JWT tokens for handling user login |
|[react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)| Used to implement drag and drop functionality |
<br>
