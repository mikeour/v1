import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { styled } from "styles";
import useNowPlaying from "hooks/useNowPlaying";
import { Spotify } from "components/icons";
import { Stack, IconContainer, Pulse, AlbumArt } from "components/shared";
import LoadingSongs from "components/TopTracksLoadingSpinner";

function NowPlaying() {
  const { track, loading } = useNowPlaying();

  if (loading || track === undefined) {
    return <LoadingSongs />;
  }

  return (
    <Link href="/music">
      <Stack
        type="row"
        gap={1}
        css={{
          width: "100%",
          bg: "$slate6",
          br: "9px",
          px: "$1",
          py: "$1",
          zIndex: 1,
          gtc: "minmax(0, 1fr)",
          margin: "0 auto",
          cursor: "pointer",
          boxShadow: "none",
          transition: "box-shadow 300ms ease",
          "&:hover": {
            boxShadow: "0 0 4px 2px #50D565",
          },
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence exitBeforeEnter initial={false}>
          <Stack
            type="row"
            gap={1}
            key={track?.title ?? "now-playing"}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            css={{ gtc: "auto 1fr auto", padding: "0 0.5rem" }}
          >
            <AlbumArt>
              <img src={track.albumImageUrl} alt="album" />
            </AlbumArt>

            <Stack type="column" gap={0}>
              <TrackName>{track.title}</TrackName>
              <ArtistName>{track.artist}</ArtistName>
            </Stack>
            <IconContainer css={{ size: "18px", color: "#50D565" }}>
              <Spotify />
              {track?.isPlaying && <Pulse />}
            </IconContainer>
          </Stack>
        </AnimatePresence>
      </Stack>
    </Link>
  );
}

export default NowPlaying;

const TrackName = styled("span", {
  fontSize: "$2",
  color: "$slate12",
  letterSpacing: "-0.25px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const ArtistName = styled("span", {
  fontSize: "$1",
  letterSpacing: "-0.25px",
  color: "$slate11",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
