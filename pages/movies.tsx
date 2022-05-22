import letterboxd from "letterboxd";
import Page from "components/PageLayout";
import MovieTrack from "components/MovieTrack";
import { transformFilm } from "utils";
import { styled } from "styles";
import { LetterboxdFilm } from "types";

function MoviePage({ films }: any) {
  return (
    <Page title="Movies">
      <Content>
        {films.map((film: any) => {
          return <MovieTrack key={film.id} film={film} />;
        })}
      </Content>
    </Page>
  );
}

export default MoviePage;

export async function getStaticProps() {
  const response = await letterboxd("mikeour");

  const films = response
    .filter((film: LetterboxdFilm) => film.type === "diary")
    .map(transformFilm);

  return {
    props: {
      films,
    },
    revalidate: 60,
  };
}

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});
