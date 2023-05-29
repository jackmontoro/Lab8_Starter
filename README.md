# Lab 8 - Starter
Jack Montoro

1. I would fit the automated tests within a Github Action that runs whenever new code is pushed to the repo. This is preferrable because it runs automatically whenever the repo is updated without having to run the tests manually before committing.
2. I would not run end to end testing because it is not appropriate for validating the output of a function. End to end testing simulates a user experience, and many functions are not interacted with by users directly, or they do not get to see the output directly.
3. I would not set up unit tests to test a messaging feature because this would potentially require tracking multiple which seems outside the scope of simple unit tests.
4. Develop a unit test where you attempt to send a message longer than 80 characters, and develop a test to check if the program properly cuts the message off.

