# TASK 4: Automated UI tests #

## TEST EXECUTION: ##
Cypress runner can execute tests in HEADLESS or UI mode.  
  
From the **frontend** folder:
```
cd frontend
npm install
```
---
### HEADLESS mode ###
Run:  
```
npm run cy:headless -- --spec "cypress/integration/ui-tests/**/*.js"
```
- This will execute tests and results in the terminal.
  
---  

### UI mode ###
Run: 
```
npm run cy:open
```
- This will open Cypress test runner UI  
- Click on spec file to run  
 → ***ui-tests/contacts-details.spec.js***  
 → ***ui-tests/customer.spec.js***  
 → ***ui-tests/welcome.spec.js***  
- Tests will be executed in the selected browser.
  
---  
<br>

## TEST FAILURES: ##
**TEST** _Verifies customer details and navigates back: Caribian Airlnis_  
**File:** ui-tests/contacts-details.spec.js

**TEST** _Assert table values for customer: Caribian Airlnis_  
**File:** ui-tests/customers.spec.js

> Both tests fail due to bug identified when calculating the company's size based on the number of employees.
Please see ***TEST CASE 5*** in tasks/2-test-plan.md for full description.

---
<br>

**TEST** _Verifies customer details and navigates back: United Brands_  
**File:** ui-tests/contacts-details.spec.js
> Fails due to bug identified where a page fails to render when contactInfo object is not returned from API response.
Please see ***TEST CASE 8*** in tasks/2-test-plan.md for full description.

---  
<br>

## FRAMEWORK INFORMATION: ##

Approach used to build automated UI tests promotes reusability and maintainability:
- Creation of page-objects: classes containing getters for DOM elements.
- Usage of static data to dynamically generate tests.