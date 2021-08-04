import Head from "next/head";
import { styled } from "styles";
import MovieTrack from "components/MovieTrack";
import SkeletonMovieTrack from "components/MovieTrack.skeleton";
import { Stack } from "components/shared";
import useRecentlyWatched from "hooks/useRecentlyWatched";
import { Letterboxd } from "components/icons";

const skeletonFilms = Array.from({ length: 20 }).map((_, idx) => idx);

function MoviePage() {
  const { data, isLoading } = useRecentlyWatched();

  return (
    <>
      <Head>
        <title key="title">Movies</title>
      </Head>
      <Stack type="column" gap={1} css={{ py: "$2" }}>
        <Stack type="column" gap={1} css={{ py: "$4" }}>
          <Stack type="row" gap={2} css={{ alignItems: "baseline" }}>
            <h1>Movies</h1>
            <Stack
              type="row"
              gap={1}
              css={{
                span: { color: "$slate10" },
              }}
            >
              <span>via Letterboxd</span>
              <IconContainer>
                <Letterboxd />
              </IconContainer>
            </Stack>
          </Stack>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur adipisci iusto dicta esse perferendis id, ipsa itaque
            rerum nemo, numquam veniam, quam distinctio amet qui! Repellendus
            quibusdam voluptatum expedita?
          </p>
        </Stack>
      </Stack>

      <Content type="column" gap={1}>
        {isLoading
          ? skeletonFilms.map((id) => <SkeletonMovieTrack key={id} />)
          : data &&
            data.films.map((film) => {
              return (
                <ExternalLink
                  key={film.id}
                  href={film.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MovieTrack film={film} />
                </ExternalLink>
              );
            })}
      </Content>
    </>
  );
}

export default MoviePage;

const Content = styled(Stack, {
  justifySelf: "center",
  gtc: "minmax(0, 1fr)",
  width: "100%",
  maxWidth: "850px",
});

const IconContainer = styled("div", {
  size: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  svg: {
    size: "100%",
  },
});

const ExternalLink = styled("a", {
  textDecoration: "none",
});
