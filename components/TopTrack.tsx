import { styled } from "styles";
import { Stack, AlbumArt } from "components/shared";

interface Track {
  artist: string;
  album: string;
  songUrl: string;
  title: string;
}

function TopTrack({ track, position }: { track: Track; position: number }) {
  return (
    <Stack type="row" gap={1}>
      <AlbumArt>
        <img src={track.album} alt="album" />
      </AlbumArt>

      <Stack type="column" gap={0}>
        <TrackName href={track.songUrl} target="_blank" rel="noopener">
          {track.title}
        </TrackName>
        <ArtistName>{track.artist}</ArtistName>
      </Stack>

      <OrderAmount>{position}</OrderAmount>
    </Stack>
  );
}

export default TopTrack;

const TrackName = styled("a", {
  fontSize: "$2",
  color: "$indigo8",
  letterSpacing: "0.25px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textDecoration: "none",
  transition: "text-decoration 0.3s ease-in-out",
  "&:hover": { cursor: "pointer", textDecoration: "underline" },
});

const ArtistName = styled("div", {
  fontSize: "$1",
  color: "$indigo7",
  letterSpacing: "0.25px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const OrderAmount = styled("span", {
  background: "$indigo8",
  color: "$indigo12",
  borderRadius: "30%",
  position: "absolute",
  fontSize: "0.8rem",
  fontWeight: 500,
  top: "50%",
  left: "0",
  transform: "translate(-75%, -50%)",
  size: "22px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
});
