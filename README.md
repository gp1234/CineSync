# Movies 🍿

## Redux Reminder

A simple React + Redux application to manage and display a list of movies, including favorites. Built with Vite and TypeScript.

## Features

- View a list of movies
- Mark movies as favorites
- View your favorite movies
- State management with Redux

## Project Structure

```
src/
  App.tsx            # Main app component
  main.tsx           # Entry point
  components/
    Movie.tsx        # Movie display component
  pages/
    MovieList.tsx    # Page for all movies
    FavoriteList.tsx # Page for favorite movies
  store/
    index.ts         # Redux store setup
  data/
    data.json        # Movie data
  interfaces/
    Movie.ts         # TypeScript interfaces
public/
  vite.svg           # Vite logo
  assets/react.svg   # React logo
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Technologies Used

- React
- Redux
- TypeScript
- Vite

## Next Steps

- Add an authentication service
- Create a recommender system
