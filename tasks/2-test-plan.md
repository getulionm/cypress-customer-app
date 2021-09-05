# TASK 2: Test plan #

Scenario description containing scope of tests executed.  
Organizes tests according to the starting screen where actions have been executed.

---
**Failures summary:**  
TEST #3: Failed - (bug found) SEVERITY HIGH  
TEST #5: Failed - (bug found) SEVERITY LOW   
TEST #5: Failed - (bug found) SEVERITY HIGH   
---
<br>

- ## Welcome Screen ##  

>**TEST 1**  
GIVEN I am a user at the Welcome Screen  
WHEN I enter my name  
AND I click Submit  
THEN I see a welcome message with my name and timestamp  
AND I see the Customer List Screen  

> ***√ SUCCESS***
---  
<br>

>**TEST 2**  
GIVEN I am a user at the Welcome Screen  
WHEN I do not enter any input name  
AND I click Submit  
THEN I can see an alert "Please provide your name"  
AND I can accept the alert  
AND I am at the Welcome Screen  

> ***√ SUCCESS***
---  
<br>


- ## Customer List Screen ##
>**TEST 3**  
GIVEN I am a user at the Customer List Screen  
WHEN I click on a customer name  
THEN I see the Contact Details Screen  

> ***√ SUCCESS***  
>> **Test cases:**  
Americas Inc.  
Caribian Airlnis  
MacroSoft  
Bananas Corp  
XPTO.com  

> ***X FAILURE***  
>> **Test cases:**  
United Brands  

Please see ***TEST CASE 8*** for failure description

---  
<br>

>**TEST 4**  
GIVEN I am a user at the Customer List Screen  
WHEN A customer has less than 11 employees  
THEN Size information should be "Small"  

> ***√ SUCCESS***  
>> **Test cases:**  
>> Americas Inc (10 employees)  
>> United Brands (20 employees)
---  
<br>

>**TEST 5**  
GIVEN I am a user at the Customer List Screen  
WHEN Customer has more than 10, but less than 1001 employees  
THEN Size information should be "Medium"  

> ***√ SUCCESS***  
>> **Test cases:**  
MacroSoft (540 employees)

> ***X FAILURE***  
>> **Test cases:**  
Caribian Airlnis (1000) employees)  
_EXPECTED_: 'Medium'  
_ACTUAL:_ 'Big'  
_ROOT CAUSE:_ File: server.js (line 26).  
_INTERPRETATION:_ Incorrect ternary expression:  
```customer.employees < 1000 ? "Medium"```  
should be  
```customer.employees <= 1000 ? "Medium"```

---  
<br>

>**TEST 6**  
GIVEN I am a user at the Customer List Screen  
WHEN Customer has more than 1000  
THEN Size information should be "Big"  

> ***√ SUCCESS***  
>> **Test cases:**  
Bananas Corp (10000 employees)  
---  
<br>

- ## Contact Details Screen ##
>**TEST 7**  
GIVEN I am a user at the Contact Details Screen  
WHEN Contact has email information  
THEN I see a name and email to contact  

> ***√ SUCCESS***  
>> **Test cases:**  
Americas Inc.  
Caribian Airlnis  
MacroSoft  
Bananas Corp  
XPTO.com
---  
<br>

>**TEST 8**  
GIVEN I am a user at the Contact Details Screen  
WHEN Contact has no email information  
THEN I see a message "No contact info available"  

> ***X FAILURE***  
>> **Test cases:**  
United Brands  
_EXPECTED:_ To see "No contact info available"  
_ACTUAL:_ "TypeError: Cannot read property 'name' of undefined"  
_ROOT CAUSE:_ File: App.js (line 84).  
_INTERPRETATION:_ On POST, no contactInfo returned for this customer.
```this.state.customer.contactInfo is undefined```, throwing error on page render.
---  
<br>

>**TEST 9**  
GIVEN I am a user at the Contact Details Screen  
WHEN I click "Back to the list" button  
THEN I see the Customer List Screen  

> ***√ SUCCESS***  
>> **Test cases:**  
Americas Inc.  
Caribian Airlnis  
MacroSoft  
Bananas Corp  
XPTO.com