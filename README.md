# Project Name: Time Management System

## Dev: Zain Ul Ebad
### Org: IPLEX

## Description
In the scope of "Time Management Project", it is about using the amount of time allocated to a project wisely in order to meet scheduled deliverables and conclude all work by or before the project completion date.

* Roles:
  * Admin
  * Manager
  * Regular Users

> * Admin Actions: CRUD Managers, Users and Logs
> * Manager Actions: CRUD Users
> * Regular Users Actions: CRUD Logs

## Installation Instructions
Run "npm i"

### Dependencies
* "axios": "^0.22.0",
* "bootstrap": "^5.1.2",
* "history": "^4.10.1",
* "react-csv": "^2.0.3",
* "react-redux": "^7.2.5",
* "react-router-dom": "^5.3.0",
* "redux-thunk": "^2.3.0",

## Source Folder Structure
├───common

├───components

  │   ├───editForm
  │   ├───navbar
  │   ├───profile
  │   ├───signInForm
  │   ├───signUpForm
  │   ├───UI
  │   │   ├───button
  │   │   ├───logTableUI
  │   │   └───usersTableUI
  │   └───usersTable

├───pages
  │   ├───managerPages
  │   └───userPages

├───redux
  │   ├───actions
  │   ├───helpers
  │   ├───reducers
  │   ├───services
  │   └───store

└───routes

## API documentation
* Users
  *   GET, POST,: http://34.210.129.167/api/users
  *   PUT, DELETE: http://34.210.129.167/api/users/${id}

* Logs
  * POST, http://34.210.129.167/api/work-logs
  * GET: http://34.210.129.167/api/user/${id}/work-logs
  * PUT: http://34.210.129.167/api/user/15/work-logs/8
  * GET: http://34.210.129.167/api/work-logs/2021-08-01/2021-08-04
  * PATCH: http://34.210.129.167/api/users/15/preferred-working-hours

## Contact Information
Email: [zainulebadd@gmail.com](mailto:zainulebadd@gmail.com)
Phone: [03104330070](tel:923104330070)
