import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Page from "components/PageLayout";
import MusicTrack from "components/MusicTrack";
import { Stack, Divider } from "components/shared";
import { TimePlayed, Play, Pause } from "components/icons";
import useAudioPlayer from "hooks/useAudioPlayer";
import { calculateTime, millisToMinutesAndSeconds } from "utils";
import { styled } from "styles";
import { TrackData } from "types";
import { getRecentlyPlayed } from "lib/spotify";

function MusicPage({ tracks }: any) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showingControls, setShowingControls] = useState(false);
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    selectedTrack,
    setSelectedTrack,
  } = useAudioPlayer(audioRef);

  // @ts-ignore
  const curPercentage = (curTime / duration) * 100;

  function updateTrack(track: TrackData) {
    if (track !== selectedTrack) {
      setSelectedTrack(track);
      setPlaying(true);
    } else {
      if (playing) {
        setPlaying(false);
      } else {
        setPlaying(true);
      }
    }
  }

  function updatePlaying() {
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  }

  useEffect(() => {
    if (playing) {
      setShowingControls(true);
      return;
    }

    const id = setTimeout(() => {
      setShowingControls(false);
    }, 3000);

    return () => clearTimeout(id);
  }, [playing]);

  return (
    <Page title="Music">
      {selectedTrack !== null && (
        <AudioPlayer ref={audioRef} src={selectedTrack.songUrl} />
      )}

      <AnimatePresence>
        {showingControls && (
          <AudioControlsContainer
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ ease: "linear" }}
          >
            <AudioControls type="row" gap={2}>
              <IconContainer
                onClick={updatePlaying}
                css={{ cursor: "pointer", size: 24 }}
              >
                {playing ? <Pause /> : <Play />}
              </IconContainer>
              <span>{calculateTime(curTime)}</span>
              <ProgressContainer>
                <ProgressBar
                  css={{ left: `calc(-100% + ${curPercentage}%)` }}
                />
              </ProgressContainer>
              <span>{calculateTime(duration)}</span>
            </AudioControls>
          </AudioControlsContainer>
        )}
      </AnimatePresence>

      <Container type="column" gap={1}>
        <TrackHeader />

        <Divider />

        {tracks.map((track: any) => (
          <MusicTrack
            key={track.id}
            track={track}
            isPlaying={track === selectedTrack && playing}
            updateTrack={updateTrack}
          />
        ))}
      </Container>
    </Page>
  );
}

export async function getServerSideProps() {
  const response = await getRecentlyPlayed();
  const data: SpotifyApi.UsersRecentlyPlayedTracksResponse =
    await response.json();

  const tracks = data.items.map((item) => {
    const { track, played_at } = item;

    return {
      id: new Date(played_at).getTime(),
      artist: track.artists.map((artist) => artist.name).join(", "),
      // @ts-ignore
      album: track.album.name,
      songUrl: track.preview_url,
      title: track.name,
      // @ts-ignore
      albumImageUrl: track.album.images[0].url,
      playedAt: played_at,
      isPlaying: false,
      duration: millisToMinutesAndSeconds(track.duration_ms),
    };
  });

  return {
    props: { tracks },
  };
}

export default MusicPage;

function TrackHeader() {
  return (
    <TrackHeaderContainer type="row" gap={2}>
      <span>Title</span>

      <AlbumColumn>Album</AlbumColumn>

      <AlbumColumn>Length</AlbumColumn>

      <IconContainer css={{ size: 18 }}>
        <TimePlayed />
      </IconContainer>
    </TrackHeaderContainer>
  );
}

const Container = styled(Stack, {
  $$gridTracks: "4fr 3fr 1fr 3ch",
  $$gridTracksSmall: "4fr 3ch",
  gtc: "minmax(0, 1fr)",
  width: "100%",
  justifySelf: "center",
});

const AlbumColumn = styled("span", {
  "@bp1": {
    display: "none",
  },
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

const TrackHeaderContainer = styled(Stack, {
  gtc: "$$gridTracks",
  px: "$1",
  boxSizing: "content-box",
  width: "100%",
  justifySelf: "center",
  span: {
    textTransform: "uppercase",
    fontSize: "$1",
    letterSpacing: "0.5px",
  },
  "@bp1": {
    gtc: "$$gridTracksSmall",
  },
});

const AudioPlayer = styled("audio", {
  position: "fixed",
  top: "1rem",
  right: "1rem",
  zIndex: 2,
  display: "none",
});

const AudioControlsContainer = styled(motion.div, {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 3,
  bg: "$indigo8",
  color: "#FFFFFF",
  px: "$1",
  py: "$2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontVariantNumeric: "tabular-nums",
});

const AudioControls = styled(Stack, {
  width: "min(100%, 500px)",
  gtc: "auto auto 1fr auto",
});

const ProgressContainer = styled("div", {
  width: "100%",
  height: "4px",
  br: "9999px",
  bg: "#FFFFFF",
  position: "relative",
  overflow: "hidden",
});

const ProgressBar = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0%",
  left: "-100%",
  bg: "#3552AB",
});
