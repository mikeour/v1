import Image from "next/image";
import { styled } from "styles";
import timeAgo from "lib/timeago";
import { Stack, glisten } from "components/shared";
import { ExternalLink } from "components/icons";
import { Film } from "types";

function MovieTrack({ film }: { film: Film }) {
  return (
    <MovieTrackContainer key={film.id} type="row" gap={2}>
      <MoviePoster>
        <Image src={film.poster} alt={`${film.title} poster`} layout="fill" />
      </MoviePoster>

      <MovieInformation type="column" gap={1}>
        <MovieDetails type="row" gap={2}>
          <Stack
            type="row"
            gap={1}
            css={{ "@bp1": { gridAutoFlow: "row !important" } }}
          >
            <MovieTitle>{film.title}</MovieTitle>

            <Stack type="row" gap={1}>
              <MovieYear>{film.year}</MovieYear>

              <MovieRating>{film.rating}</MovieRating>
            </Stack>
          </Stack>

          <ExternalIconContainer>
            <ExternalLink />
          </ExternalIconContainer>
        </MovieDetails>

        <MovieReview>{film.review}</MovieReview>

        <MovieWatched>{timeAgo.format(new Date(film.watched))}</MovieWatched>
      </MovieInformation>
    </MovieTrackContainer>
  );
}

export default MovieTrack;

export const MovieTrackContainer = styled(Stack, {
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
    gtc: "minmax(0, 1fr)",
  },
});

export const MoviePoster = styled("div", {
  $$posterSize: "clamp(125px, 25vw, 150px)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc($$posterSize * (2/3))",
  height: "$$posterSize",
  br: "5px",
  overflow: "hidden",
  position: "relative",

  "@bp1": {
    display: "none",
  },

  img: {
    size: "100%",
    objectFit: "cover",
  },

  variants: {
    skeleton: {
      true: {
        bg: "$slate7",

        "&::after": {
          position: "absolute",
          content: "",
          inset: 0,
          linearGradient:
            "90deg, transparent, rgba(0, 0, 0, 0.09), transparent",
          transform: "translateX(-100%)",
          animation: `${glisten} 1.6s linear 0.5s infinite`,
        },
      },
    },
  },
});

export const MovieInformation = styled(Stack, {
  gtc: "minmax(0, 1fr)",
  gtr: "auto 1fr auto",
  alignSelf: "stretch",
  p: "$1",
});

const MovieTitle = styled("span", {
  color: "$indigo12",
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
  textAlign: "right",
  fontStyle: "italic",
});

const MovieReview = styled("span", {
  fontStyle: "italic",
  fontSize: "$2",
  lineHeight: 1.5,
  color: "$gray12",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "4",
  overflow: "hidden",
  // alignSelf: "flex-start",
  px: "$1",
  // mx: "$2",
  // py: "$1",
  borderLeft: "3px solid $indigo6",
});

const ExternalIconContainer = styled("div", {
  size: 18,
  color: "$indigo9",
  display: "flex",
  justiftyContent: "center",
  alignItems: "center",

  svg: {
    size: "100%",
  },
});

export const MovieDetails = styled(Stack, {
  alignItems: "baseline",
  justifyContent: "space-between",

  // "@bp1": {
  //   gridGap: "0.2rem !important",
  //   gridAutoFlow: "row !important",
  // },
});
