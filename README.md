
# CETPay

The current fee payment system in our college involves skipping class and standing in long queues. This process is tiresome as well as time consuming. Our project tries to make life easier for students in paying their fees by providing an Online Platform to do so.Here we present the various functionalities of our Online Fee Payment System CETPay

## Table of Contents

 - [Behind the Idea](https://github.com/adarshsuresh07/Notified#behind-the-idea)
 - [Stacks Used](https://github.com/adarshsuresh07/Notified#stacks-used)
 - [Basic concept](https://github.com/adarshsuresh07/Notified#basic-concept)
 - [Features Implemented](https://github.com/adarshsuresh07/Notified#features-implemented)
 - [Contributors](https://github.com/adarshsuresh07/Notified#contributors)

## Behind the Idea
This was our Application Development Lab project assigned by our Associate Professor Vipin Vasu. This was our first product based project and we learned different frameworks to implement the system. 
![ER Diagram for CETPay](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/er.jpg)
## Stacks Used

The whole application is build on the following : 

 - `Reactjs`  front-end
 - `MySQL` database
 - `Nodejs - Express` back-end
 - `Stripe` payment medium


## Basic concept

Lets now familiarize CETPay a bit more clearly. 
There are two types of Logins :

 - ***Student*** : aka our main user, for whom the product will be more useful. They can 
	 - login 
	 - reset their password
	 - pay their fee
	 - get the receipt
 - ***Admin*** :  is also a user who can 
	 - login
	 - will have an admin dashboard
	 - see the students and their status
	 - filter them out 
	 - can pay student's fee offline
	 - can reset student's and their own password
	 - Add student

## Features Implemented

 - [x] Student authentication
 ![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/loginstudent.jpg)
 - [x] Student Dashboard
 ![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/studentdash.png)
 - [x] Initiating Payment
 ![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/confirmation.png)
 ![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/pay.png)
 - [x] Payment Details
	 - The major reason we have used Stripe for the project is that it provides a test mode.
	- On Successful Payment, the payment receipt is sent to the email provided by the student at the time of
payment.
![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/receipt.png)
 - [x] Reset Password
![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/resetpass.png)
 - [x] Admin authentication
![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/loginadmin.png)
 - [x] Admin Dashboard
![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/admindash.png)
 - [x]  Filters:
	 - Search by Name  
	 - Based on UG/ PG
	 - Based on Semester
	 - Based on Department
	 - Based on Paid/ Not paid
	 - Based on Scholarship
	 
![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/searchsem.png)
 - [x] New Student Registration
![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/register.png)
 - [x] Online Payment Log
![](https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/log.png)

## Contributors

[1]: https://github.com/adarshsuresh07
[2]: https://adarshsuresh07.github.io/Portfolio/
[3]: https://github.com/adarsh-av13
[4]: http://adarshvijay.me/portfolio
[5]: https://github.com/ajayduth
[6]: https://github.com/afnanmedappil


 `Adarsh S `  [![github](https://img.icons8.com/material-sharp/24/000000/github.png)][1]      [![portfolio](https://img.icons8.com/material-sharp/24/000000/domain.png)][2]


`Adarsh Vijay` [![github](https://img.icons8.com/material-sharp/24/000000/github.png)][3]    [![portfolio](https://img.icons8.com/material-sharp/24/000000/domain.png)][4]


`Ajay Duth` [![github](https://img.icons8.com/material-sharp/24/000000/github.png)][5]  


`Afnan Medappil` [![github](https://img.icons8.com/material-sharp/24/000000/github.png)][6]  




## Note to readers..
This was out first project in our frameworks. The code may not be neat but our hard work is real. Thanks for visiting this repository.


<img src="https://img.icons8.com/bubbles/50/000000/filled-like.png"/>

