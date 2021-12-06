## Loops Fullstack Interview

Thanks for taking the time to work on this project to help us see if you'd be a good fit for the development team at Loops! After working on this for 2 hours, please send us what you have. Even if it is not fully working, it will give us an idea of how you code.

## Tech Stack

- NextJS: front and backend of the application
- Prisma: database ORM (to SQLite for this exercise)
- Tailwind CSS: styling

## Design

[Here](https://www.figma.com/file/pXQPGbMx5ZADBP5hms7NFA/Fullstack-Interview?node-id=0%3A1) is a link to the Figma design for this exercise.

## Tasks

The code has several `TODO` statements to help guide you. Tasks are listed here:

1. Update the text to match the page header on both pages.
2. Add a link to _Go Back_ at the bottom of the Form Widget page.
3. Add a list of existing form ids and a button to create a new form to the root page (`/`). Please use `getServerSideProps`.
4. When a user clicks one of the existing form ids, navigate to `/forms/[formId]` and display the Form Widget page. This will require you moving `build-form.js` to a new location and renaming it.
5. When a user clicks the _Create New Form_ button, it should create a new form in the database with the default values shown (`{placeholder: "you@example.com", fontColor: "000000", fontSize: 14}`).
6. On the Form Widget page, when a user changes any value, the preview should update accordingly. When a user leaves a form field (`onBlur`), save their changes to the database using `fetch`. You will need to edit `pages/api/update-form.js` to add this API functionality.

## Submit

When you have spent 2 hours on the task, please create a pull request and request a review from me (`askkaz`).

Thanks!
