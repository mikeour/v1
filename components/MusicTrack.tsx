import Image from "next/image";
import { styled } from "styles";
import { Stack, AlbumArt } from "components/shared";
import { NowPlayingIcon, Play, Pause } from "components/icons";
import timeAgo from "lib/timeago";
import { TrackData } from "types";

function MusicTrack({
  track,
  isPlaying,
  updateTrack,
}: {
  track: TrackData;
  isPlaying: boolean;
  updateTrack: (track: TrackData) => void;
}) {
  return (
    <MusicTrackContainer
      key={track.id}
      type="row"
      gap={2}
      playing={isPlaying}
      onClick={() => {
        updateTrack(track);
      }}
    >
      <Stack type="row" gap={1}>
        <AlbumArt>
          <Image
            src={track.albumImageUrl}
            alt={`${track.artist} album art`}
            layout="fill"
            priority
          />

          <IconContainer className="play">
            {isPlaying ? <Pause /> : <Play />}
          </IconContainer>
        </AlbumArt>

        <SongInfoContainer type="column" gap={0}>
          <Song>{track.title}</Song>
          <Artist>{track.artist}</Artist>
        </SongInfoContainer>
      </Stack>

      <Album>{track.album}</Album>
      <Album>{track.duration}</Album>

      {track.isPlaying ? (
        <NowPlayingIcon />
      ) : (
        <Time>{timeAgo.format(new Date(track.playedAt), "mini")}</Time>
      )}
    </MusicTrackContainer>
  );
}

export default MusicTrack;

export const MusicTrackContainer = styled(Stack, {
  gtc: "$$gridTracks",
  px: "$1",
  py: "$1",
  br: "8px",
  background: "none",
  transition: "background 300ms ease",
  cursor: "pointer",
  boxSizing: "content-box",
  width: "100%",
  alignSelf: "center",
  justifySelf: "center",

  ".play": {
    opacity: 0,
    bg: "none",
    transition: "background 300ms ease, opacity 300ms ease",
  },

  "&:hover": {
    bg: "$gray5",

    ".play": {
      opacity: 1,
      bg: "$blackA11",
    },
  },

  "@bp1": {
    gtc: "$$gridTracksSmall",
  },

  variants: {
    playing: {
      true: {
        bg: "$indigo9",
        "p, span": {
          color: "white",
        },
        ".play": {
          opacity: 1,
          bg: "$blackA11",
        },
        "&:hover": {
          bg: "$indigo10",
        },
      },
    },
  },
});

export const SongInfoContainer = styled(Stack, {});

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

const Time = styled("span", {
  color: "$gray11",
  fontSize: "$1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
  textTransform: "capitalize",
});

const IconContainer = styled("div", {
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#ffffff",
  zIndex: 2,
  p: "$1",

  svg: {
    size: "100%",
    display: "block",
  },
});

const Bar = styled(Stack, {
  gridArea: "1 / 2 / 2 / -1",
});
