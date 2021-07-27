import { styled } from "styles";
import { Stack, AlbumArt } from "components/shared";
import { Variants } from "framer-motion";

interface Track {
  artist: string;
  album: string;
  songUrl: string;
  title: string;
}

const item: Variants = {
  hidden: { opacity: 0, x: -8, y: -4, scale: 1 },
  show: { opacity: 1, x: 0, y: 0, scale: 1 },
};

function TopTrack({ track, position }: { track: Track; position: number }) {
  return (
    <Stack type="row" gap={1} variants={item}>
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
  fontSize: "0.9rem",
  color: "var(--colors-accent)",
  letterSpacing: "0.25px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textDecoration: "none",
  transition: "text-decoration 0.3s ease-in-out",
  "&:hover": { cursor: "pointer", textDecoration: "underline" },
});

const ArtistName = styled("div", {
  fontSize: "0.75rem",
  color: "var(--colors-secondary)",
  letterSpacing: "0.25px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const OrderAmount = styled("span", {
  background: "var(--colors-accent)",
  color: "white",
  borderRadius: "30%",
  position: "absolute",
  fontSize: "0.8rem",
  fontWeight: 500,
  top: "50%",
  left: "0",
  transform: "translate(-75%, -50%)",
  width: "22px",
  height: "22px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
});
