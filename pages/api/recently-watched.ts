// @ts-ignore
import letterboxd from "letterboxd";
import { getFormattedDate } from "utils";
import { NextApiRequest, NextApiResponse } from "next";
import { LetterboxdFilm } from "types";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await letterboxd("mikeour");

  const films = response
    .filter((film: LetterboxdFilm) => film.type === "diary")
    .map((film: LetterboxdFilm) => ({
      id: `${film.film.title}-${film.date.watched}`,
      watched: getFormattedDate(film.date.watched),
      title: film.film.title,
      year: film.film.year,
      poster: film.film.image.large,
      rating: film.rating.text,
      review: film.review,
      url: film.uri,
    }));

  return res.status(200).json({
    films,
  });
};
