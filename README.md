# Zuddl Assignment

1. We will provide the user with an option to set and edit the stage-title. 
We need to have an endpoint 
`/update/stage` which edit the stage basic details and depending upon the query parameters of the request further update details can be sent. No schema changes required. 

2. For adding a comment in every task, we have to setup the task Object as a collection of title, content, timestamp, list of comment. Further every comment can be a Object of class Comment, where it has the user, data and timestamp details. 

3. Error Handling
- Frontend Redering
 Avoid undefined objects
 Take care of Redux states
 Avoid unnecessary re-renders

- User related
 Use form validation libraries in the backend

- Automated Tests
 Using testing libraries 
 
 