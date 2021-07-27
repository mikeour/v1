import { styled } from "styles";
import {
  Stack,
  IconContainer,
  Pulse,
  AlbumArt,
  ActionLink,
} from "components/shared";
import { Spotify } from "components/icons";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import useNowPlaying from "hooks/useNowPlaying";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetcher from "lib/fetcher";
import LoadingSongs from "components/TopTracksLoadingSpinner";

function NowPlaying() {
  const { track, loading } = useNowPlaying();
  const { pathname } = useRouter();

  if (loading || track === undefined) {
    return <LoadingSongs />;
  }

  return (
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
            <TrackName href={track.songUrl} target="_blank" rel="noopener">
              {track.title}
            </TrackName>
            <ArtistName>{track.artist}</ArtistName>
          </Stack>
          <IconContainer css={{ size: "18px", color: "#50D565" }}>
            <Spotify />
            {track?.isPlaying && <Pulse />}
          </IconContainer>
        </Stack>
      </AnimatePresence>
    </Stack>
  );
}

export default NowPlaying;

const TrackName = styled("a", {
  fontSize: "$2",
  color: "$slate12",
  letterSpacing: "-0.25px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textDecoration: "none",
  transition: "text-decoration 0.3s ease-in-out",
  "&:hover": { cursor: "pointer", textDecoration: "underline" },
});

const ArtistName = styled("div", {
  fontSize: "$1",
  letterSpacing: "-0.25px",
  color: "$slate11",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
