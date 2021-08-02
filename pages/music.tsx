import Head from "next/head";
import useRecentlyPlayed from "hooks/useRecentlyPlayed";
import { styled, keyframes } from "styles";
import { Stack, AlbumArt } from "components/shared";
import { NowPlayingIcon, Spotify } from "components/icons";
// import { Play } from 'components/icons'
import timeAgo from "lib/timeago";
import useNowPlaying from "hooks/useNowPlaying";

function SkeletonTrack() {
  return (
    <Stack
      type="row"
      gap={2}
      css={{
        gtc: "$$gridTracks",
        px: "$1",
        py: "$1",
        br: "8px",

        "@bp1": {
          gtc: "$$gridTracksSmall",
        },
      }}
    >
      <Stack type="row" gap={1}>
        <AlbumArtSkeleton />

        <SongInfoContainer type="column" gap={1}>
          <TextSkeleton size={9} />
          <TextSkeleton />
        </SongInfoContainer>
      </Stack>
      <HiddenTextSkeleton size={8} />
      <HiddenTextSkeleton size={3} />
      <TextSkeleton size={4} />
    </Stack>
  );
}

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

          <span>Played</span>
        </Stack>

        <Divider />

        {loading ? (
          <SkeletonTrack />
        ) : (
          <>
            {track && (
              <Stack
                type="row"
                gap={2}
                css={{
                  gtc: "$$gridTracks",
                  background: "none",
                  transition: "background 300ms ease",
                  cursor: "pointer",
                  px: "$1",
                  py: "$1",
                  br: "8px",
                  "&:hover": {
                    background: "$gray5",
                  },
                  "@bp1": {
                    gtc: "$$gridTracksSmall",
                  },
                }}
              >
                <Stack type="row" gap={1}>
                  <AlbumArt>
                    <img src={track.albumImageUrl} alt="album" />

                    <PlayIconContainer></PlayIconContainer>
                  </AlbumArt>

                  <SongInfoContainer type="column" gap={0}>
                    <Song>{track.title}</Song>
                    <Artist>{track.artist}</Artist>
                  </SongInfoContainer>
                </Stack>
                <Album>{track.album}</Album>

                <Album>6:66</Album>

                <NowPlayingIcon />
              </Stack>
            )}
          </>
        )}

        {isLoading ? (
          <>
            {Array.from({ length: 20 }).map((_, index) => {
              return <SkeletonTrack key={index} />;
            })}
          </>
        ) : (
          <>
            {data &&
              data?.recentTracks.map((track) => {
                return (
                  <Stack
                    key={track.id}
                    type="row"
                    gap={2}
                    css={{
                      gtc: "$$gridTracks",
                      background: "none",
                      transition: "background 300ms ease",
                      cursor: "pointer",
                      px: "$1",
                      py: "$1",
                      br: "8px",
                      "&:hover": {
                        background: "$gray5",
                      },
                      "@bp1": {
                        gtc: "$$gridTracksSmall",
                      },
                    }}
                  >
                    <Stack type="row" gap={1}>
                      <AlbumArt>
                        <img src={track.albumImageUrl} alt="album" />

                        <PlayIconContainer></PlayIconContainer>
                      </AlbumArt>

                      <SongInfoContainer type="column" gap={0}>
                        <Song>{track.title}</Song>
                        <Artist>{track.artist}</Artist>
                      </SongInfoContainer>
                    </Stack>
                    <Album>{track.album}</Album>
                    <Album>{track.duration}</Album>
                    <TimePlayed>
                      {timeAgo.format(new Date(track.playedAt))}
                    </TimePlayed>
                  </Stack>
                );
              })}
          </>
        )}
      </Container>
    </>
  );
}

export default MusicPage;

const Container = styled(Stack, {
  $$gridTracks: "4fr 3fr 1fr 1fr",
  $$gridTracksSmall: "4fr 1fr",
  gtc: "minmax(0, 1fr)",
  py: "$4",
  maxWidth: "750px",
  justifySelf: "center",
});

const SongInfoContainer = styled(Stack, {});

const Song = styled("span", {
  color: "$gray12",
  fontSize: "$2",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
});

const Artist = styled("span", {
  color: "$gray11",
  fontSize: "$1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
});

const Album = styled("span", {
  color: "$gray11",
  fontSize: "$1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",

  "@bp1": {
    display: "none",
  },
});

const TimePlayed = styled("span", {
  color: "$gray11",
  fontSize: "$1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
  textTransform: "capitalize",
});

const PlayIconContainer = styled("div", {
  display: "grid",
  placeContent: "center",
  background: "$blackA10",
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

const AlbumArtSkeleton = styled("div", {
  size: "45px",
  br: "5px",
  background: "$slate8",
});

const TextSkeleton = styled("span", {
  width: "7rem",
  height: "0.9rem",
  br: "5px",
  background: "$slate8",

  variants: {
    size: {
      1: {
        width: "1rem",
      },
      2: {
        width: "2rem",
      },
      3: {
        width: "3rem",
      },
      4: {
        width: "4rem",
      },
      5: {
        width: "5rem",
      },
      6: {
        width: "6rem",
      },
      7: {
        width: "7rem",
      },
      8: {
        width: "8rem",
      },
      9: {
        width: "9rem",
      },
    },
  },

  defaultVariant: {
    size: 7,
  },
});

const HiddenTextSkeleton = styled(TextSkeleton, {
  "@bp1": {
    display: "none",
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
