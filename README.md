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

1. In our Express app, create a model called **sign** that has the attributes `name`, `planet_id`, `element_id`, and `modality_id`.
2. Create and run a migration for this new table, and then seed data from existing seeder files. In a psql terminal, run a SQL statement to check that our previous steps were successful.
3. While we are in this terminal, run a SQL statement to add a new **sign** named “Sagittarius” whose ruling **planet** is “Jupiter,” **element** is “fire,” and **modality** is “mutable.” (HINT: The planet, element, and modality tables have been fully seeded. What SQL statements should you run to get the id numbers needed for this sign?)
4. Back in Express, update the `createOne` and `getAll` functions in the **signs** controller using Sequelize model queries. Test endpoints in Postman to ensure all are working.

**For the second half, you get to be the driver.**

Our astrologers have just shared the following information with us! “*Each sign can have only one modality, element, and ruling planet. But each modality, element, and ruling planet can belong to multiple signs.*” Please update our model associations accordingly before your next migration.

**BONUS TASKS**

1. A modality named “introverted” has been mistakenly added to our database, along with some signs that shouldn’t be here… What should we do so that when we delete a modality, all signs belonging to it are also deleted?
2. Notice that someone has previously added the attribute, `size` , to the **planet** table by mistake. What should we do to remove it?