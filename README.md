# Getting Started

### Programs Installed:
  * Express
  * MySQL
  * Method Override
  
### Required Files
  * Made a config folder which had a connection.js file and an orm.js file.  The connection.js file required MySQL and and connected to the MySQL Workbench linking up the host, port, user, password, and database.  The orm.js requires the connection.js file and allows the database to be either all be selected, insert just one new column and value, or update one column and value.
  * The controllers folder has a burgers_controller.js.  That requires express and the models folder with burger.js.  This allows the user to get the data, post the data, and update the data.
  * The models folder has a burger.js file.  This requires the orm.js file.  This provides the functions to selectAll, insertOne and updateOne.
  * The db folder has the schema.sql and the seeds.sql.  The schema has the table for the database.  The seeds hold all the burgers that can insert into the columns in the table.
  * The public folder holds the css and javascript files that allows the user to see the app in the browser.  In the folder is an assets folder that has an images folder with an image, the css file that has all the styling for the app and a burger.js file that creates functionality for the form for the new burger added and the buttons for the devoured burgers.
  * The views folder has a layouts folder that has the main.handlebars file that has the html, head and body for the app.  Inside the partials folder has the burger-block.handlebars which allows the new burgers to show in a list with a devour button.  In the index.handlebars file it has the form for the new burger and puts the burgers in a list and the devoured burgers in a list.
  * The server.js requires express, method override, express-handlebars and the connection.js file.  It uses the routes and allows the app to listen on the localhost + port.
  
 
### How to use 

  * When the user goes to the page, some burgers will already show in the burgers section and one burger will already show in the devoured section.  The burgers in the burger section will have a devour button next to them and the user can click on those buttons to devour the burger and the burger will move to the devoured section.  The user can also input a new burger into the form and add the new burger.  The new burger will move into burgers section will a devour button next to it.
  
### Updated Portfolio
[Updated Portfolio]
