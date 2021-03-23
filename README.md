# TitanStar Legends

Developer: Ali Wojcikiewicz

Welcome to my version of the TitanStar Legends Rune Mastery Loadout Talent Calculator 9000!

## Tech Stack

- Sass/SCSS (Styling)
- React.js (Reusable Components and State Management)
- Express.js (API)
- Mocha/Chai/Enzyme (Test Driven Development for React Components)
- Webpack (Bundler)
- Babel (Javascript Transcompiler)

## Features

- User has 6 points to spend over 2 talent paths
- Responsive display shows total points spent
- Talent levels must be selected or deselected in order
- While using a mouse:
  - select with left click
  - deselect with right click
  - Hovering over a talent path highlights the progess bar leading to the next level,
    but only if points are available
- With a touch screen:
  - selecting and deselecting are both done by touching an appropriate level
  - First touch selects
  - Second touch deselects
- Responsive design includes a vertical mode for thin views

## Run Locally

- Fork and clone this repo
- In your terminal, enter this project's main directory and run these commands:
  - 'npm install'
  - 'npm run test' (optional: see all tests used for TDD)
  - 'npm run build-client' (create the webpack bundle)
  - 'npm run start' (start the server)
- Go to localhost:8080 and become a Rune Master!
