My Awesome React Project is a web application that allows users to filter the clicks based on given requirements.
Points:
1. For each IP within each one hour period, only the most expensive click is placed into the
result set.
2. If more than one click from the same IP ties for the most expensive click in a one hour
period, only place the earliest click into the result set.
3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any
of those clicks in the result set. 


## Table of Contents
- [Installation](#installation)
Once the project is set up, you can access it at http://localhost:3000 and start managing your tasks and server running on port http://localhost:3001.
Why Use React Library:
React is a JavaScript library for building user interfaces. In this project, we've opted to use React for its simplicity, flexibility, and virtual DOM implementation, which helps in creating efficient and dynamic user interfaces.

Key Features:
Component-Based Architecture: React follows a component-based architecture, making it easy to manage and reuse UI components.
Virtual DOM: React's virtual DOM improves rendering performance by efficiently updating only the parts of the actual DOM that have changed.

## Installation

To get started with My Awesome React Project, follow these steps:

```bash
## To run client side
npm install
npm start

## To run Server
cd server
node server.js