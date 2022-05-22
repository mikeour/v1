import Page from "components/PageLayout";
import MovieTrack from "components/MovieTrack";
import { getFilms } from "lib/letterboxd";
import { styled } from "styles";
import { Film } from "types";

interface MoviePageProps {
  films: Array<Film>;
}

function MoviePage({ films }: MoviePageProps) {
  return (
    <Page title="Movies">
      <Content>
        {films.map((film) => {
          return <MovieTrack key={film.id} film={film} />;
        })}
      </Content>
    </Page>
  );
}

export default MoviePage;

export async function getStaticProps() {
  const films = await getFilms();

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
