# Smallest first step (MERN)

You don’t start the whole MERN stack in one go. Add **Node → Express → MongoDB → React** in order.

## Smallest first step (~5 minutes)

This covers the **N** (Node) and **E** (Express) part of MERN.

1. Create a folder (e.g. `server`) and run `npm init -y`.
2. Run `npm install express`.
3. Add a tiny `index.js` that uses `express()`, defines one `GET` route that returns something like `"ok"`, and calls `app.listen(3000)`.
4. Run `node index.js` and open `http://localhost:3000` in the browser (or use curl).

That’s a started backend: Node + Express.

- **MongoDB** — Create a free Atlas cluster, copy the connection string, add `mongoose`, and connect from `index.js`.

1. Create your database: Sign in to MongoDB Atlas and create a free cluster.
2. Allow your connection: Create a database username and password, then add your current IP address under Network Access.
3. Get the connection string: Click Connect → Drivers → Node.js, copy the connection string, and replace its password placeholder with your database password.
4. Connect your backend: In your server terminal, run npm install mongoose, then add mongoose.connect(process.env.MONGODB_URI) to index.js, keeping your connection string in an environment variable.

- **React** — In another folder: `npm create vite@latest client -- --template react`, then open the dev server URL.

1. Open your terminal: Go to your main project folder, alongside your server folder.
2. Create React: Run npm create vite@latest client -- --template react and follow the prompts.
3. Install and start: Run cd client, then npm install, then npm run dev.
4. Open your app: Open the URL shown in the terminal, usually http://localhost:5173, to see your React page.

**Summary:** The smallest possible first step is **one Node project with Express serving one route**. Mongo and React come after, as separate small steps.
