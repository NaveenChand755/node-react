# node-react

A simple application built to display users and their activity logs using ReactJs for the Front End and NodeJs for the backend.

# Project Structure
Application contains client folder which contains all the UI components which inturn contains

1. Signin component which shows signin page for the user to login built using  materialUI and the email and password is hardcoded 

# Use email as admin@gmail.com and password as admin123 to login

2. The homepage shows the list of user names on clicking the username a modal popup will displayed which shows activity logs of the users

3. To get the users List a simple GET api is built using nodeJs which reads a json file and sends that json data as the response

4. To start the application  i have used concurrently npm package which starts and Frontend and  backend concurrently 

# use npm run dev to run the application
