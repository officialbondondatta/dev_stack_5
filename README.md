<div align="center">
  <img src="./src/assets/logo-text.png" alt="DevStack logo" width="180" />

DevStack

Build Your Ideal Development Stack

  <p>
    Explore popular development technologies and create a stack that suits your next project.
  </p>

  <p>
    <a href="https://devstackbondon.netlify.app/">
      <img src="https://img.shields.io/badge/Live_Site-Visit_DevStack-ec4899?style=for-the-badge&logo=netlify&logoColor=white" alt="Visit live site" />
    </a>
    <a href="https://github.com/officialbondondatta/dev_stack_5">
      <img src="https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="View source code" />
    </a>
  </p>

  <img src="./src/assets/banner-stack.png" alt="DevStack banner" width="420" />
</div>

About the Project

DevStack is an interactive technology explorer for developers. It displays useful information about frontend, backend, database, language, styling, DevOps, and development tools. Users can compare the available technologies and add their preferred ones to a personal stack.

Technologies Used

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/DaisyUI-5-1AD1A5?style=flat-square&logo=daisyui&logoColor=white" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JSON-Data-000000?style=flat-square&logo=json&logoColor=white" alt="JSON" />
</p>

React.js for building reusable UI components

TypeScript for type safe JavaScript code

Tailwind CSS and DaisyUI for styling and responsive layouts

React Toastify for success and removal notifications

React Icons for interface icons

JSON for storing the technology information

Vite for development and production builds

Key Features

Explore technologies : View technology cards with an icon, description, category, difficulty, badge, and rating.

Build a custom stack : Add technologies, prevent duplicate selections, remove individual items, or clear the full stack.

Responsive user experience : Enjoy a mobile-friendly layout, loading and empty states, selected card feedback, and toast notifications.

Run Locally

# Clone the repository
git clone https://github.com/officialbondondatta/dev_stack_5.git

# Enter the project folder
cd dev_stack_5

# Install dependencies
npm install

# Start the development server
npm run dev

React Questions and Answers

1. What is JSX, and why is it used in React?

jsx is a syntax that lets us write html like code inside javaScript or typeScript. React uses it to make user interface code easier to read and build.

2. What is the difference between props and state?

props  are values a parent component passes to a child. State is data managed inside a component that can change and cause the ui to update.

3. What does the useState hook do, and where did you use it in this project?

useState stores changing data in a component. I used it in Technologies.tsx to store the selected technologies and keep the technology fetching promise stable.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs side effects, such as fetching data, after a component renders. In this project I did not use useEffect, I loaded data.json with fetch(), use() hook, and Suspense instead.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify which item was added, removed, or changed. This lets React update lists correctly and efficiently, such as key={technology.id} in the technology-card list.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In StackCard.tsx, I show an empty message when no technology has been selected:

{selectedTech.length === 0 ? (
  <h2>Your stack is empty.</h2>
) : (
  <div>{/* Selected technology cards */}</div>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child sends an action or value back by calling a function passed by the parent; here, child components call setSelectedTech to update the stack stored in Technologies.tsx.

<div align="center">
  <p>Built with React, TypeScript, and curiosity.</p>
  <p>© 2026 DevStack</p>
</div>