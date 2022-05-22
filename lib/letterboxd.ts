import letterboxd from "letterboxd";
import { transformFilm } from "utils";
import { LetterboxdFilm } from "types";

export async function getFilms() {
  const response: Array<LetterboxdFilm> = await letterboxd("mikeour");

  const diaryEntries = response.filter((film) => film.type === "diary");

  const films = diaryEntries.map(transformFilm);

  return films;
}
