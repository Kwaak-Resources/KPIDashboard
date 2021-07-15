# Dynamic-KPI-Dashboard
## Project Overview
This is a Full-Stack  KPI Dashboard that provides an at-a-glance-view of your business performance in real-time so you can get a better picture on how the entire 
organization is doing.This application not only provides information on KPI of the company. It also allows to add data and 
create charts instantly and download them in PDF format. In addition to that this application also provides real-time chat facility to pass important information between employees.
 This Application has 2 Roles (User & Admin) which is explained after the Installation Guidelines.
 
 ## Installation Guidelines
 
### STEP 1 

```sh
 git clone https://github.com/payalpatra/Dynamic-KPI-Dashboard.git
```

### STEP 2 

- ##### Note - Run this command in the ROOT directory as well as in the FRONTEND directory.
- ##### cd frontend

```sh
   npm install
```

### STEP 3 

- ##### After downloading all the Frontend Dependencies.
- ##### Run this command in the frontend directory

```sh
   npm run build
```

### STEP 4 

- ##### Create .env file in the root directory with following variables.

  ```sh
  PORT = 5000
  MONGO_URI =
  NODE_ENV = production
  ```

### STEP 5
##### Run this in the root directory

```sh
 npm start
```

### STEP 6

- ##### The application gets served in the port 5000 if all the above steps correctly are done correctly. 🥇

```sh
http://localhost:5000/
```

## User Role
 This is the default role that is assigned after successful registration.
 * The User can access the KPI charts as well as download them in PDF format.
 * The User can Join the Proffessional chat room to get important information.
 * The User can check the roles of other users in the users section of the application.
 * The User can check the task deadlines and the employee that needs to complete the tasks.
 
## Admin Role
The admin role can be assigned to a user either from changing the role attribute of the user from "User" to "Admin" in the database or an existing admin can assign the Admin role to the user from the application itself.
* The admin gets all the facilities offer to the User with additional facilities.
* Admin can add Data for Key Performance Indicators and the charts get updated with new data.
* Admin can change the role of the user from "Admin to "User" or "User" to "Admin".
* Admin can assign tasks to employees with deadline.
* Admin can also can change the status of the tasks from pending to complete.
* After the tasks is completed the task is deleted from upcoming deadlines table.

