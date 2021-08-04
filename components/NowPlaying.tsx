import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { styled } from "styles";
import NowPlayingSkeleton from "components/NowPlaying.skeleton";
import useNowPlaying from "hooks/useNowPlaying";
import { Spotify, NowPlayingIcon } from "components/icons";
import { Stack, IconContainer, AlbumArt } from "components/shared";

function NowPlaying() {
  const { track, loading } = useNowPlaying();

  if (loading || track === null) {
    return <NowPlayingSkeleton />;
  }

  return (
    <Link href="/music" passHref>
      <NowPlayingContainer type="row" gap={1}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Stack
            type="row"
            gap={2}
            key={track?.title ?? "now-playing"}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            css={{ gtc: "auto 1fr auto", padding: "0 0.5rem" }}
          >
            <AlbumArt>
              <Image
                src={track.albumImageUrl}
                alt={`${track.artist} album art`}
                layout="fill"
              />
            </AlbumArt>

            <Stack type="column" gap={0}>
              <TrackName>{track.title}</TrackName>
              <ArtistName>{track.artist}</ArtistName>
            </Stack>
            <IconContainer css={{ size: "18px", color: "$mediaGreen" }}>
              {track?.isPlaying ? <NowPlayingIcon /> : <Spotify />}
            </IconContainer>
          </Stack>
        </AnimatePresence>
      </NowPlayingContainer>
    </Link>
  );
}

export default NowPlaying;

export const NowPlayingContainer = styled(Stack, {
  width: "100%",
  bg: "$slate2",
  br: "6px",
  px: "$1",
  py: "$1",
  zIndex: 1,
  gtc: "minmax(0, 1fr)",
  margin: "0 auto",
  cursor: "pointer",
});

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
