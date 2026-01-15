"Chart" Js is the base engine while "react-chartjs-2" is the react wrapper made specifically for React.
Statrt frontend and backedn:
    start frontend script: npm run dev
    start backend script: nodemon app.js

Installations:
Install .env package
Install mongoose : https://mongoosejs.com/docs/
Installation Chart.js:https://www.chartjs.org/docs/latest/getting-started/installation.html
Read data object configuration:https://www.chartjs.org/docs/latest/configuration/
Read about implementing Chart.js:https://blog.logrocket.com/using-chart-js-react/#installing-chart-js-react-project
Read about implementing the barchart:https://www.chartjs.org/docs/latest/charts/bar.html

install nodemon at global but why though?

install cors for Cross Origin

Data Flow:
=>Input:input(cost price), tag(label the cost price).
=>Bind:Id(For list indexing), Input, Tag. Bind is an object which stores the updated/current user  input values after handleSubmission
=>newList:An array of objects to store/record the past updates in object format.(This is only for displaying values at entry section and is stateless, refreshing the page will loose all the values).
=>foodSumNew, lifestyleSumNew, entertainmentSumNew: contains filtered and reduced(sum) of all the values with their intended tags

post_value: refers an object that is used to post the current user values to the server and server takes over the further operation