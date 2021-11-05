import Image from "next/image";
import { styled } from "styles";
import timeAgo from "lib/timeago";
import { Stack, glisten } from "components/shared";
import { ExternalLink } from "components/icons";
import { Film } from "types";

function MovieTrack({ film }: { film: Film }) {
  return (
    <MovieTrackContainer key={film.id} type="row" gap={1}>
      <MoviePoster>
        <Image src={film.poster} alt={`${film.title} poster`} layout="fill" />
      </MoviePoster>

      <MovieInformation type="column" gap={2}>
        <MovieDetails
          type="row"
          gap={2}
          css={{ "@bp1": { gridAutoFlow: "row !important" } }}
        >
          <Stack
            type="column"
            gap={1}
            css={{ "@bp1": { gridAutoFlow: "row !important" } }}
          >
            <Stack
              type="row"
              gap={2}
              css={{
                alignItems: "baseline",
                "@bp1": { gridAutoFlow: "row", gridGap: "$1" },
              }}
            >
              <MovieTitle>{film.title}</MovieTitle>
              {/* <p>•</p> */}
              <MovieYear>{film.year}</MovieYear>
            </Stack>
          </Stack>

          <Stack type="row" gap={2}>
            <MovieRating>{film.rating}</MovieRating>
            {/* <p>•</p> */}
            <MovieWatched>
              {timeAgo.format(new Date(film.watched))}
            </MovieWatched>
          </Stack>

          {/* <ExternalIconContainer>
            <ExternalLink />
          </ExternalIconContainer> */}
        </MovieDetails>

        <MovieReview>{film.review}</MovieReview>
      </MovieInformation>
    </MovieTrackContainer>
  );
}

export default MovieTrack;

export const MovieTrackContainer = styled(Stack, {
  gtc: "auto minmax(0, 1fr)",
  p: "$1",
  br: "8px",
  bg: "none",

  // borderTop: "3px solid $slate5",
  transition: "background 300ms ease-in-out",
  // cursor: "pointer",

  "&:hover": {
    bg: "$slate5",
  },

  "@bp1": {
    // gtc: "minmax(0, 1fr)",
  },
});

export const MoviePoster = styled("div", {
  $$posterSize: "clamp(115px, 25vw, 125px)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc($$posterSize * (2/3))",
  height: "$$posterSize",
  br: "5px",
  overflow: "hidden",
  position: "relative",

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
  alignSelf: "center",
  justifySelf: "stretch",
  p: "$1",
  "@bp1": {
    gtr: "minmax(0, 1fr)",
  },
});

const MovieTitle = styled("span", {
  color: "$indigo12",
  fontSize: "$3",
});

const MovieYear = styled("span", {
  fontSize: "$2",
  // fontStyle: "italic",
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
  // fontStyle: "italic",
  textAlign: "right",

  // "@bp1": {
  //   textAlign: "left",
  // },
});

const MovieReview = styled("span", {
  // fontStyle: "italic",
  fontSize: "$2",
  lineHeight: 1.5,
  color: "$slate11",
  whiteSpace: "pre-line",
  // maxWidth: "45ch",
  // display: "-webkit-box",
  // WebkitBoxOrient: "vertical",
  // WebkitLineClamp: "4",
  // overflow: "hidden",
  // px: "$1",
  // py: "$1",
  // borderLeft: "3px solid $indigo6",

  "@bp1": {
    display: "none",
  },
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

  "@bp1": {
    alignSelf: "flex-start",
  },
});

export const MovieDetails = styled(Stack, {
  alignItems: "baseline",
  justifyContent: "space-between",

  "@bp1": {
    alignSelf: "stretch",
    alignItems: "center",
  },
});
