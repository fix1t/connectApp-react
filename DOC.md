# Connect - Web application

## About:
Connect is a React web application that allows users to register and login to the site. Once authorized, users can share posts with other users.

## Getting Started:
To start using Connect, you must first have Node.js and NPM (Node Package Manager) installed on your computer. Once you have Node.js installed, follow these steps:

1. Clone the SharePosts repository from Github.
2. Install the necessary dependencies and start local servers by running `npm start` in the root directory of the project.

## Backend endpoints:
1. `GET /api/posts/` - Allows user to fetch recent posts from database. Optionaly parameter is limit.
2. `POST /api/posts/` - Saves new post to database. Requires title, content, date, author and an id of author.
3. `POST /api/posts/:id"` - Triggers deletion of specific post. Requires an id of post.
4. `POST /api/auth/register` - Registers new user. Requires, FistName, LastName, email, password and confPassword.
5. `POST /api/auth/login` - Authorizes user. Saves user information in local storage.
6. `POST /api/auth/logout` - Clears local storage.


## Implementation:
Implementing a fullstack React web application was an exciting challenge for me as it was my very first experience with React and Node.js. It was a long process, but I have learnt so much on the way.

During the development, I had to restructure my project structure multiple times, which was a little frustrating. But it was a necessary step to improve the overall code quality and maintainability.

I also struggled with finding the best division of responsibilities of my components. At first, I did computation on the frontend, which could have resulted in unnecessary slow performance. But with time, I realized that moving some of the computation to the backend was a better approach.

Debugging was also a significant challenge, especially when the application became more complex. But tons of refactoring helped with that.

Overall, implementing a fullstack React web application was not an easy task, but it was definitely worth it. I am proud of the application I built and the skills I gained along the way.

