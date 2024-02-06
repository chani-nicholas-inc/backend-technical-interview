# backend-technical-interview

## Experience Being Reviewed

- Problem solving
- Communication skills
- API framework
- CRUD functionality
- RESTful routing
- Database operations

## Technologies Used

- Javascript
- Node.js
- Express
- PostgreSQL
- Sequelize-CLI
- Psql
- Postman (or other API testing app)

## Agenda
- Introductions and overview
- Coding tasks
- Questions for interviewers (optional)

## What to Expect

You will be mob programming with some of our developers to build out an existing CRUD application using Node.js, Express, and Sequelize.

Your tasks will include creating a new model, adding associations to models, performing migrations, creating database query functions, and demoing your work. To save time, a new PostgreSQL database has been generated for you (via Heroku). Environment variables will be provided to you during the interview.

**REMEMBER:** Since we _are_ pair programming, you are encouraged to ask questions, include your "teammates" in your problem solving, as well as look things up. We are not so much interested in quizzing you on your ability memorize procedures related to the above tech stack or seeing how fast you can complete this challenge. We _are_ interested in your planning, problem solving, and communication skills.

### Coding Challenge

**First, you will play the role of navigator as you guide a "junior developer" in driving while pair programming (they will be sharing screen as you direct them).**

1. All current models and migrations were created using `sequelize-cli`. Follow this pattern to create a model called **sign** that has the attribute, `name`. (NOTE: Our naming convention consists of sigular table names)
2. Notice that a new migration was automatically generated for us to run. After running this migration, navigate to a psql terminal to check that our previous steps were successful.

**For the second half, the code will be pushed up to a branch called `interview/your-name` and you will be provided with database credentials to paste into a `.env` file at the root of your directory. You will pull down the code and begin "driving" while explaining your process, making sure that your teammates can follow along.**

Our astrologers have just shared the following information with us! “*Each sign can have only one modality, element, and ruling planet. But each modality, element, and ruling planet can belong to multiple signs.*” 

1. Please update our associations and the attributes of the **sign** model (HINT: Look at the signs seeder file for attribute names). Update the corresponding table using a new migration.
2. All of the seeder files we need have already been generated. Run the existing files.
3. Fill in the `createOne` and `getAll` functions in the **signs** controller using Sequelize model queries.
4. Run `npm start` and test endpoints in Postman to ensure they are working. Create the sign “Sagittarius". Sagittarius’ ruling **planet** is “Jupiter,” **element** is “fire,” and **modality** is “mutable.” (HINT: planets, elements, and modalities have been fully seeded. What SQL statements can you run in the terminal to get the ID numbers needed?). Finally, make a GET request to test your getAll function, demonstarting that your new sign has been added to the return.

**BONUS TASKS**

(Option to verbally problem solve these tasks instead of in code)

1. A modality named “introverted” has been mistakenly seeded to our database, along with some signs that shouldn’t be here… What should we do so that when we delete a modality, all signs belonging to it are also deleted?
2. Notice that someone has previously added the attribute, `size`, to the **planet** table by mistake. What should we do to remove it?
