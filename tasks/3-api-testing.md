# TASK 3: Automated API tests #

Cypress runner can execute tests in HEADLESS or UI mode.  
  
From the **frontend** folder, install cypress dependencies:
```
cd frontend
npm install
```
---

## HEADLESS mode ##
Run:  
```
npm run cy:headless -- --spec "cypress/integration/api-tests/post.spec.js"
```
- This will execute tests and results in the terminal.
  

---  


## UI mode ##
Run: 
```
npm run cy:open
```
- This will open Cypress test runner UI  
- Click on spec file to run → ***api-tests/post.spec.js***  
- Tests will be executed in the selected browser.

---  
<br>

## FRAMEWORK INFORMATION: ##

Approach used to build automated API tests promotes reusability and maintainability:
- Usage of hooks and aliases for requests minimizes repetition in spec files.
- Creation of a custom Cypress Command to validate api schemas.