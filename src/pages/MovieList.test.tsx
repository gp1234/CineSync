import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MovieList from "./MovieList";
import type { IState } from "../store";
import type { IMovie } from "../interfaces/Movie";

const createMockStore = (initialState: IState) => {
  const mockReducer = (state = initialState, action: any) => {
    return state;
  };

  return createStore(mockReducer);
};

const mockMovies: IMovie[] = [
  {
    title: "Test Movie 1",
    year: 2023,
    cast: ["Actor 1", "Actor 2"],
    genres: ["Action"],
    href: "test_movie_1",
    extract: "Test movie description",
    index: 1,
  },
  {
    title: "Test Movie 2",
    year: 2024,
    cast: ["Actor 3", "Actor 4"],
    genres: ["Comedy"],
    href: "test_movie_2",
    extract: "Another test movie description",
    index: 2,
  },
];

describe("MovieList component", () => {
  it("renders movies from the Redux store", () => {
    const mockStore = createMockStore({
      movies: mockMovies,
      favorites: [],
    });

    render(
      <Provider store={mockStore}>
        <MovieList />
      </Provider>
    );

    expect(screen.getByText("Movies Selector")).toBeDefined();

    expect(screen.getByText("Test Movie 1")).toBeDefined();
    expect(screen.getByText("Test Movie 2")).toBeDefined();
  });
});
