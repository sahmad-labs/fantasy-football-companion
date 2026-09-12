# Smallest first step (MERN)

You don’t start the whole MERN stack in one go. Add **Node → Express → MongoDB → React** in order.

## Smallest first step (~5 minutes)

This covers the **N** (Node) and **E** (Express) part of MERN.

1. Create a folder (e.g. `server`) and run `npm init -y`.
2. Run `npm install express`.
3. Add a tiny `index.js` that uses `express()`, defines one `GET` route that returns something like `"ok"`, and calls `app.listen(3000)`.
4. Run `node index.js` and open `http://localhost:3000` in the browser (or use curl).

That’s a started backend: Node + Express.

## Next small steps (when you’re ready)

- **MongoDB** — Create a free Atlas cluster, copy the connection string, add `mongoose`, and connect from `index.js`.
- **React** — In another folder: `npm create vite@latest client -- --template react`, then open the dev server URL.

**Summary:** The smallest possible first step is **one Node project with Express serving one route**. Mongo and React come after, as separate small steps.
