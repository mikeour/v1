import Head from "next/head";
import useRecentlyPlayed from "hooks/useRecentlyPlayed";
import { styled } from "styles";
import MusicTrack from "components/MusicTrack";
import MusicTrackSkeleton from "components/MusicTrack.skeleton";
import { Stack } from "components/shared";
import { Spotify, TimePlayed } from "components/icons";
import useNowPlaying from "hooks/useNowPlaying";

const skeletonTracks = Array.from({ length: 20 }).map((_, idx) => idx);

function MusicPage() {
  const { data, isLoading } = useRecentlyPlayed();
  const { track, loading } = useNowPlaying({ useFallback: false });

  return (
    <>
      <Head>
        <title key="title">Music</title>
      </Head>
      <Stack type="column" gap={1} css={{ py: "$2" }}>
        <Stack type="column" gap={1} css={{ py: "$4" }}>
          <Stack type="row" gap={2} css={{ alignItems: "baseline" }}>
            <h1>Music</h1>
            <Stack
              type="row"
              gap={1}
              css={{
                span: { color: "$slate10" },
              }}
            >
              <span>via Spotify</span>
              <IconContainer>
                <Spotify />
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

      <Container type="column" gap={1}>
        <Stack
          type="row"
          gap={2}
          css={{
            gtc: "$$gridTracks",
            px: "$1",
            span: {
              textTransform: "uppercase",
              fontSize: "$1",
              letterSpacing: "0.5px",
            },
            "@bp1": {
              gtc: "$$gridTracksSmall",
            },
          }}
        >
          <span>Title</span>

          <AlbumColumn>Album</AlbumColumn>

          <AlbumColumn>Length</AlbumColumn>

          <IconContainer css={{ size: 18 }}>
            <TimePlayed />
          </IconContainer>
        </Stack>

        <Divider />

        {loading ? (
          <MusicTrackSkeleton />
        ) : (
          track && <MusicTrack track={track} />
        )}

        {isLoading
          ? skeletonTracks.map((id) => <MusicTrackSkeleton key={id} />)
          : data &&
            data.recentTracks.map((track) => (
              <MusicTrack key={track.id} track={track} />
            ))}
      </Container>
    </>
  );
}

export default MusicPage;

const Container = styled(Stack, {
  $$gridTracks: "4fr 3fr 1fr 0.5fr",
  $$gridTracksSmall: "4fr 0.5fr",
  gtc: "minmax(0, 1fr)",
  py: "$4",
  width: "100%",
  maxWidth: "850px",
  justifySelf: "center",
});

const AlbumColumn = styled("span", {
  "@bp1": {
    display: "none",
  },
});

const Divider = styled("div", {
  width: "100%",
  height: "3px",
  bg: "$slate6",
  br: "9999px",
  // my: "-2rem",
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
