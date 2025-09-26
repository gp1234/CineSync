import { createStore } from "redux";
import type { IMovie } from "../interfaces/Movie.ts";
import data from "../data/data.json";
export interface IState {
  movies: IMovie[];
  favorites: IMovie[];
}
const movies = data.slice(0, 50) as IMovie[];
const initialState: IState = {
  movies,
  favorites: [],
};

const reducer = (
  state: IState = initialState,
  action: { payload: IMovie; type: string }
): IState => {
  if (action.type === "ADD_MOVIE") {
    const movies = state.movies.filter(
      (movie) => movie.index !== action.payload.index
    );
    const favorites = [...state.favorites, action.payload];
    return {
      movies,
      favorites,
    };
  }
  if (action.type === "REMOVE_MOVIE") {
    const favorites = state.favorites.filter(
      (movie) => movie.index !== action.payload.index
    );
    const movies = [...state.movies, action.payload];
    return {
      movies,
      favorites,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
