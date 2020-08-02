

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
- ER Dialgram
<img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/er.jpg" width="50%"/>

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
 <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/loginstudent.jpg" width="80%"/>
 
 - [x] Student Dashboard
  <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/studentdash.png" width="80%"/>
  
 - [x] Initiating Payment
  <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/confirmation.png" width="80%"/>
  
  <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/pay.png" width="80%"/>
  
 - [x] Payment Details
	 - The major reason we have used Stripe for the project is that it provides a test mode.
	- On Successful Payment, the payment receipt is sent to the email provided by the student at the time of
payment.
 <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/receipt.png" width="80%"/>

 - [x] Reset Password
  <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/resetpass.png" width="80%"/>

 - [x] Admin authentication
 <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/loginadmin.jpg" width="80%"/>
 
 - [x] Admin Dashboard
 <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/admindash.png" width="80%"/>
 
 - [x]  Filters:
	 - Search by Name  
	 - Based on UG/ PG
	 - Based on Semester
	 - Based on Department
	 - Based on Paid/ Not paid
	 - Based on Scholarship
	 
 <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/searchsem.png" width="80%"/>
 
 - [x] New Student Registration
 <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/register.png" width="80%"/>
 
 - [x] Online Payment Log
 <img src="https://github.com/adarshsuresh07/FeePayment/blob/master/Screenshots/log.png" width="80%"/>

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

