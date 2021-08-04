import Image from "next/image";
import { styled } from "styles";
import { Stack, AlbumArt } from "components/shared";
import { NowPlayingIcon } from "components/icons";
import timeAgo from "lib/timeago";
import { TrackData } from "types";

function MusicTrack({ track }: { track: TrackData }) {
  return (
    <MusicTrackContainer key={track.id} type="row" gap={2}>
      <Stack type="row" gap={1}>
        <AlbumArt>
          <Image
            src={track.albumImageUrl}
            alt={`${track.artist} album art`}
            layout="fill"
          />
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

  "&:hover": {
    background: "$gray5",
  },

  "@bp1": {
    gtc: "$$gridTracksSmall",
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
