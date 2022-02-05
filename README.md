# Sproutl Blog

This project was built for a tech test. The requirements are listed below:

1. Create a Blog Post list page

- Fetch the data from https://jsonplaceholder.typicode.com/posts;
- Render a list of all the Post titles;

2. Add a "Read more" button for each post

- Clicking on this button should show the blog post body and comments;
- How you render this is up to you. For example it can be directly under the post or as a new page;
- Comments for the Post can be fetched from this API endpoint: https://jsonplaceholder.typicode.com/comments?postId=1 using the ID for the Post as the parameter;

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm tw:build`

Launches the Tailwindcss CLI build process
See the section about [Getting Started with Tailwind](https://tailwindcss.com/docs/installation) for more information.

The build process occurs when you make changes to Tailwind utility classes.

### `npm start:tw`

Runs the app in development mode and launches the Tailwindcss CLI build process

## Future Improvements

If I was to add to this project in future, I would do the following:

- Add unit tests for components (Jest and React Testing Library)
- Add additional accessibility improvements
- Test thoroughly for accessibility criteria
- Add automated accessibility testing with a plugin such as cypress-axe or jest-axe
- Improve component structure, the Blog post body may become a separate component and the Card component would become more generic. I would allow components to be passed into the Card rather than having the CommentCard component imported directly into the Card.
- Improve the overall display of the app and incorporate Tailwind classnames functions.
