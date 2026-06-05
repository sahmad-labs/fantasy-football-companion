# Express Next Steps

The current server is a very small Express app in `index.js`. It starts successfully and responds to one route, which is a great first milestone. The next goal is to make it feel more like the beginning of a real API server without adding too much complexity all at once.

Use the steps below in order. Each step gives you enough context to know what to explore, but leaves room for you to work out the implementation yourself.

## 1. Add a health check route

Create a dedicated route whose only job is to confirm that the server is running normally.

Why this matters:
- Real applications often expose a simple route that can be used by developers, hosting platforms, or monitoring tools to confirm the app is alive.
- It separates "is the server running?" from the rest of your application logic.

Where to look:
- `index.js`
- Express routing basics in the official docs

Acceptance criteria:
- There is a route whose purpose is clearly to report server health.
- Visiting that route in the browser returns a successful response.
- The response is structured as API data rather than a plain text message.

## 2. Prepare the server to receive JSON requests

Before your app can accept data from a frontend form, it needs to understand JSON sent in the body of a request.

Why this matters:
- Most React-to-Express communication will send JSON.
- You will need this before you can build routes that create or update players later on.

Where to look:
- The top of `index.js`, near the app setup
- Express middleware documentation

Acceptance criteria:
- The server is configured to handle JSON request bodies.
- The configuration happens during server setup, not inside an individual route.
- Existing routes still work after this change.

## 3. Add your first real API route

Create a new route for player data. Do not worry about MongoDB yet. Return a small hard-coded list of sample players so you can focus on how Express APIs are shaped.

Why this matters:
- This is your first move from "server exists" to "server serves application data."
- Hard-coded data keeps the task small while you learn routing and response structure.

Where to look:
- `index.js`
- Think about a URL shape that clearly belongs to your app data, not just a generic test route

Acceptance criteria:
- There is a route dedicated to player-related data.
- Hitting that route returns a list, not a single text string.
- The sample data includes enough information to be meaningful, such as a player name and a few football-related fields.

## 4. Add a "not found" response for unknown routes

If someone visits a route that does not exist, the server should still respond intentionally rather than leaving the experience unclear.

Why this matters:
- It makes the server feel more complete and easier to debug.
- It introduces the idea that every request path should have a deliberate outcome.

Where to look:
- The bottom of `index.js`, after your defined routes
- Express route matching order

Acceptance criteria:
- Requests to unknown URLs get a clear "not found" response.
- The response makes it obvious that the route does not exist.
- This behavior does not interfere with the valid routes you already created.
