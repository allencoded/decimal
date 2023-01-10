# Invoices

This application is met to illustrate and be a techincal coding talking point and accomplishes 
demonstrating the following frontend react skills:

- state managment using react context
- api calls using miragejs to simulate real world api fetch calls
- displaying results in a table that is sortable and filterable

This is not a demonstration of unit testing or production ready design in this iteration.

# Technology Used

React table was utilized to display the results of the invoice data fetch requests. The table allows sorting and filtering. 

MirageJS was used to take mock data and provide the ability to simulate real api fetch calls.

React Context was used to avoid prop drilling. 

MomentJS was used to make dates more user friendly to read.

# How to use

The application should land on the invoice view and display invoice data in a table. You select one of the rows in 
the table to see more information on the invoice listed below the table. A floating top admin/user toggle switch is 
present on the top left side of the page to allow you to switch between being an admin or regular user. The admin gets
to see the status of the workflow while the regular user cannot.

# Starting the App

This is based off the boiler plate create-react-app. You need to `npm install` then `npm start` to run the application locally.