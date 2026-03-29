How to Run the Server

Follow these steps to run the server.

Step 1 — Install dependencies

Open terminal in the project folder and run:
npm install

Step 2 — Set up environment variables

Create a .env file in the root folder and add:

DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19MdGJIN29jZ25EQlhaRE82NUxDYWQiLCJhcGlfa2V5IjoiMDFLTVdNWlFIWFo1QjE0VDVCQkFaRjZFWTgiLCJ0ZW5hbnRfaWQiOiI5YzA4ZmYzMjNjNDJkYThkYTg1MDczYmVkNjUzOGM1NTQ1MTc0Y2FlYmJjNWMzOTI2M2RhYTUxNTcxMjg3Mzg0IiwiaW50ZXJuYWxfc2VjcmV0IjoiNDk1MTEzM2MtMmRkNS00MjM0LTgxYmUtMTI2YjAxNWY2ZjY4In0.4y3lcusF8XIUj68L8Xlq_K2_dF-yxSDzpVu4msCi4G8"

Step 3 — Run database migration

This will create the table in the database.

npx prisma migrate dev --name create_userlanguage_table
Step 4 — Generate Prisma client
npx prisma generate
Step 5 — Start the server
node index.js

or using nodemon:

npx nodemon index.js

The server will start on:

http://localhost:3000
How to Test Routes

You can test the API using:

Postman
Thunder Client (VS Code)
Browser
1. Get all users

Method:

GET /userlanguages

Example:

http://localhost:3000/userlanguages
2. Get users by language

Method:

GET /userlanguages/:language

Example:

http://localhost:3000/userlanguages/English
3. Create a new user

Method:

POST /userlanguages

Body (JSON):

{
  "name": "John Doe",
  "email": "john@example.com",
  "languages": ["English", "Swedish"],
  "age": 25
}

Expected response:

201 Created
4. Update user languages by email

Method:

PUT /userlanguages/:email

Example:

PUT /userlanguages/john@example.com

Body:

{
  "languages": ["English", "Spanish"]
}
5. Delete users under 18

Method:

DELETE /userlanguages/

Expected response:

{
  "deletedUsers": 2
}
New Routes Created

The following routes were implemented in this project:

GET /userlanguages — Retrieve all users

GET /userlanguages/ — Retrieve users by language

POST /userlanguages — Create a new user

PUT /userlanguages/ — Update user languages

DELETE /userlanguages/under18 — Delete users under 18 years old
