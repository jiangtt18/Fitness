This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run project

`git clone` project https://github.com/jiangtt18/Fitness.<br />
`npm install` to install all package dependencies.<br />
`npm start` to run app in the development mode.<br />
open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Features
- [x] Display a list of foods a user has eaten in a clear way, with the associated caloric value.
- [x] Display some calculation for the total nutrition values for the day
- [x] Minimal support for adding and removing food items
- [x] Include other nutrition info (macro and micronutrients)
- [x] Make the interface responsive
- [x] Use different meals to segment food (breakfast, lunch, dinner, etc)


## Notes
This is a purely frontend project (no backend and database)

## Future directions
- Reuse LogTable component to build Excise logs and dynamically update `Burned extra with exercise` in `Calorie today` section.
- Use third party API, such as https://www.nutritionix.com/natural-demo, to support adding items.
- Replace React Bootstrap table with Ag-Grid to support more flexible table editing, such as in-cell editing and multi-select for deletion.
- Insert a calendar in `Calorie today` section once backend and database are built. Clicking on different dates can query nutrition logs per day from database.
- Build more validations and enhance UI for `Add Item Form`. Currently the form requires food name and calories and validates numeric values.  

 