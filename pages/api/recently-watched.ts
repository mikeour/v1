import { getFilms } from "lib/letterboxd";
import { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const films = await getFilms();

  return res.status(200).json({
    films,
  });
};
