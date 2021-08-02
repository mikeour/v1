// @ts-ignore
import letterboxd from "letterboxd";
import { getFormattedDate } from "utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await letterboxd("mikeour");

  const films = response.map((film: any) => ({
    id: new Date(film.date.watched).getTime(),
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
