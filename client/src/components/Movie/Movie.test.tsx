import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Movie from "./Movie";

const mockMovie = {
  title: "The Grudge",
  year: 2020,
  cast: [
    "Andrea Riseborough",
    "Demi\u00e1n Bichir",
    "John Cho",
    "Betty Gilpin",
    "Lin Shaye",
    "Jacki Weaver",
  ],
  genres: ["Horror", "Supernatural"],
  href: "The_Grudge_(2020_film)",
  extract:
    "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demi\u00e1n Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
  thumbnail:
    "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
  thumbnail_width: 220,
  thumbnail_height: 326,
  index: 0,
};

describe("Movie component", () => {
  it("renders without crashing", () => {
    render(<Movie cb={() => {}} movie={mockMovie} />);
    const element = screen.getByText("The Grudge");
    expect(element).toBeDefined();
  });

  it("calls callback function when favorite button is clicked", () => {
    const mockCallback = vi.fn();

    render(<Movie cb={mockCallback} movie={mockMovie} />);

    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);

    // Check if the callback was called with the movie object
    expect(mockCallback).toHaveBeenCalledWith(mockMovie);
  });
});
