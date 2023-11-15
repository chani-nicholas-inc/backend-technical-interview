# backend-technical-interview

## Experience Being Reviewed

- API framework
- CRUD functionality
- RESTful routing
- PEN-Stack
- Database operations
- JSON

## Technologies Used

- Javascript
- Node.js
- Express
- PostgreSQL
- Sequelize
- psql
- Postman (or other API testing app)

## Interviewee Tasks

You will be given one hour to build out and test a CRUD application using Node.js, Express, and Sequelize. To save time, a database has been partially set up and an Express application has been scaffolded for you with some controller functions.

Your tasks will be to create a new model, add associations, perform migrations, create database query functions, and test your work.

### Sub-Tasks

**First, you will play the role of navigator as you guide a "junior developer" in driving while pair programming.**

1. In our Express app, create a model called **sign** that has the attribute, `name`. (NOTE: Our naming convention consists of sigular table names and using underscores)
2. Create and run a migration for this new table. In a psql terminal, run a SQL statement to check that our previous steps were successful.

**For the second half, you will pull down the code and drive while explaining your process to a “junior developer.”**

Our astrologers have just shared the following information with us! “*Each sign can have only one modality, element, and ruling planet. But each modality, element, and ruling planet can belong to multiple signs.*” 

1. Please update our associations and the attributes of the **sign** model (HINT: Look at the signs seeder file for attribute names). Update the corresponding table using a new migration.
2. Run existing seed files.
3. Fill in the `createOne` and `getAll` functions in the **signs** controller using Sequelize model queries. Run `npm start` and test endpoints in Postman to ensure they are working.
4. While in Postman, create the sign “Sagittarius". Sagittarius’ ruling **planet** is “Jupiter,” **element** is “fire,” and **modality** is “mutable.” (HINT: planets, elements, and modalities have been fully seeded. What SQL statements can you run in the terminal to get the ID numbers needed?)

**BONUS TASKS**

1. A modality named “introverted” has been mistakenly seeded to our database, along with some signs that shouldn’t be here… What should we do so that when we delete a modality, all signs belonging to it are also deleted?
2. Notice that someone has previously added the attribute, `size`, to the **planet** table by mistake. What should we do to remove it?
