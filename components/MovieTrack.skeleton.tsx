import { Stack, TextSkeleton } from "components/shared";
import {
  MovieTrackContainer,
  MovieInformation,
  MoviePoster,
  MovieDetails,
} from "components/MovieTrack";

function MovieTrackSkeleton() {
  return (
    <MovieTrackContainer type="row" gap={3}>
      <MoviePoster skeleton />

      <MovieInformation type="column" gap={1}>
        <MovieDetails type="row" gap={1}>
          <Stack type="row" gap={1}>
            <TextSkeleton size={7} />

            <Stack type="row" gap={1}>
              <TextSkeleton size={3} />

              <TextSkeleton size={3} />
            </Stack>
          </Stack>
        </MovieDetails>
        <TextSkeleton size={0} />
        <TextSkeleton css={{ width: "min(100%, 30rem)" }} />
        <TextSkeleton css={{ width: "min(100%, 30rem)" }} />
        <TextSkeleton size={9} css={{ justifySelf: "flex-end" }} />
      </MovieInformation>
    </MovieTrackContainer>
  );
}

export default MovieTrackSkeleton;
