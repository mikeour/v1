import Image from "next/image";
import { styled } from "styles";
import timeAgo from "lib/timeago";
import { Film } from "types";

function MovieTrack({ film }: { film: Film }) {
  return (
    <MovieTrackContainer key={film.id}>
      <MoviePoster>
        <Image src={film.poster} alt={`${film.title} poster`} layout="fill" />
      </MoviePoster>
      <MovieDetails>
        <MovieTitleContainer>
          <MovieTitle>{film.title}</MovieTitle>
          <MovieYear>{film.year}</MovieYear>
        </MovieTitleContainer>

        <MovieInfoContainer>
          <MovieRating>{film.rating}</MovieRating>
          <MovieWatched>{timeAgo.format(new Date(film.watched))}</MovieWatched>
        </MovieInfoContainer>
      </MovieDetails>

      <MovieReview>{film.review}</MovieReview>
    </MovieTrackContainer>
  );
}

export default MovieTrack;

export const MovieTrackContainer = styled("div", {
  p: "$2",
  br: "8px",
  bg: "none",

  transition: "background 300ms ease-in-out",
  boxSizing: "content-box",
  width: "100%",
  alignSelf: "center",

  "&:hover": {
    bg: "$slate5",
  },
});

export const MoviePoster = styled("div", {
  $$posterSize: "clamp(140px, 25vw, 155px)",

  display: "flex",
  justifyContent: "center",
  float: "left",
  flexShrink: 0,
  alignItems: "center",
  aspectRatio: "2/3",
  height: "$$posterSize",
  br: "5px",
  mr: "$2",
  overflow: "hidden",
  position: "relative",

  img: {
    size: "100%",
    objectFit: "cover",
  },
});

export const MovieInformation = styled("div", {});

const MovieTitleContainer = styled("div", {});

const MovieTitle = styled("span", {
  color: "$indigo12",
  fontSize: "clamp($3, 3vw, $4)",
  fontWeight: "bold",
  letterSpacing: "-0.025em",
});

const MovieYear = styled("span", {
  fontSize: "$2",
  color: "$gray11",
  ml: "0.5rem",
});

const MovieInfoContainer = styled("div", {
  display: "flex",
  alignItems: "baseline",
  gap: "0.5rem",
});

const MovieRating = styled("span", {
  fontSize: "$2",
  color: "$indigo10",
});

const MovieWatched = styled("span", {
  fontSize: "$2",
  color: "$gray11",
  lineHeight: 1,
});

const MovieReview = styled("span", {
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
  // borderLeft: "3px solid $indigo11",
});

export const MovieDetails = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  mb: "0.5rem",

  "@bp1": {
    flexDirection: "column",
  },
});
