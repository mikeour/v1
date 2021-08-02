import Head from "next/head";
import Link from "next/link";
import { styled } from "styles";
import { Stack } from "components/shared";
import useRecentlyWatched from "hooks/useRecentlyWatched";
import { ExternalLink, Letterboxd } from "components/icons";

function MoviePage() {
  const { data } = useRecentlyWatched();

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

      <Stack
        type="column"
        gap={1}
        css={{
          justifySelf: "center",
          gtc: "minmax(0, 1fr)",
          maxWidth: "750px",
        }}
      >
        {data &&
          data.films.map((film) => {
            return (
              <Link href={film.url}>
                <Stack
                  key={film.id}
                  type="row"
                  gap={3}
                  css={{
                    gtc: "auto 1fr",
                    p: "clamp($2, 3vw, $3)",
                    br: "8px",
                    bg: "none",
                    border: "2px solid $slate4",
                    transition: "background 300ms ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      bg: "$slate4",
                    },
                    "@bp1": {
                      gtc: "1fr",
                      gridAutoFlow: "row !important",
                    },
                  }}
                >
                  <MoviePoster
                    css={{
                      alignSelf: "center",
                      "@bp1": {
                        position: "absolute",
                        size: "100%",
                        inset: 0,
                        "&::after": {
                          content: "",
                          position: "absolute",
                          inset: 0,
                          size: "100%",
                          bg: "$blackA11",
                        },
                      },
                    }}
                  >
                    <img src={film.poster} alt="movie" />
                  </MoviePoster>

                  <Stack
                    type="column"
                    gap={1}
                    css={{
                      alignSelf: "flex-start",
                    }}
                  >
                    <MovieDetails type="row" gap={1}>
                      <MovieTitle>{film.title}</MovieTitle>

                      <MovieYear>{film.year}</MovieYear>

                      <MovieRating>{film.rating}</MovieRating>
                    </MovieDetails>
                    <MovieWatched>Watched {film.watched}</MovieWatched>
                    <MovieReview>{film.review}</MovieReview>
                  </Stack>

                  <ExternalIconContainer>
                    <ExternalLink />
                  </ExternalIconContainer>
                </Stack>
              </Link>
            );
          })}
      </Stack>
    </>
  );
}

export default MoviePage;

const MoviePoster = styled("div", {
  $$posterSize: "clamp(125px, 25vw, 150px)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc($$posterSize * (2/3))",
  height: "$$posterSize",
  br: "5px",
  overflow: "hidden",

  img: {
    size: "100%",
    objectFit: "cover",
  },
});

const MovieTitle = styled("span", {
  fontSize: "$3",
  fontWeight: "bold",
});

const MovieYear = styled("span", {
  fontSize: "$2",
  color: "$gray10",
});

const MovieRating = styled("span", {
  fontSize: "$1",
  color: "$indigo10",
});

const MovieWatched = styled("span", {
  fontSize: "$2",
  color: "$gray11",
  lineHeight: 1,
  fontStyle: "italic",
});

const MovieReview = styled("span", {
  fontSize: "$2",
  color: "$gray12",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "4",
  overflow: "hidden",
});

const ExternalIconContainer = styled("div", {
  position: "absolute",
  top: "$3",
  right: "$3",
  size: 18,
  color: "$indigo9",
  display: "flex",
  justiftyContent: "center",
  alignItems: "center",

  svg: {
    size: "100%",
  },
});

const MovieDetails = styled(Stack, {
  alignItems: "baseline",

  "@bp1": {
    gridGap: "0.2rem !important",
    gridAutoFlow: "row !important",
  },
});

const IconContainer = styled("div", {
  size: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  svg: {
    size: "100%",
  },
});
