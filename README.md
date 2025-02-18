# 360-degrees

In this project, you'll have both backend and frontend implementations.

## Backend

On the backend side, you'll be able to register new users, sign in, create evaluations, and get user evaluations and single entities.

### Endpoints

Navigate to the `(root)/(paths)/api` folder to see all the available endpoints.

## Frontend

Using Next.js, all the components are optimized to be implemented on both the server side and client side. Additionally, by implementing Tailwind CSS, I added some plugins to improve the design implementation. I also created a quick library of components to use throughout the application.

## How to run this app?

1. First, you'll need to add a `.env` file and follow the structure that is implemented in the `.env.template` file. These environment variables will allow you to use NextAuth sessions and connect to a MongoDB Atlas cluster.
2. Then, run `yarn` to install all the required dependencies.
3. Finally, run `yarn dev` to start the development server.

```bash
# Install dependencies
yarn

# Start the development server
yarn dev
```

## Deployment

Go to [360-degrees](https://360-degrees.vercel.app) to see the deployed site.