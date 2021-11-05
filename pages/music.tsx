import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Page from "components/PageLayout";
import PageHeader from "components/PageHeader";
import MusicTrack from "components/MusicTrack";
import MusicTrackSkeleton from "components/MusicTrack.skeleton";
import { Stack, Divider } from "components/shared";
import { Spotify, TimePlayed, Play, Pause } from "components/icons";
import useMusicPage from "hooks/useMusicPage";
import useAudioPlayer from "hooks/useAudioPlayer";
import { getPlaceholderItems } from "utils";
import { styled } from "styles";
import { TrackData } from "types";

const skeletonTracks = getPlaceholderItems(20);

function calculateTime(secs: number | null) {
  if (secs === null) return `0:00`;
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

function MusicPage() {
  const { tracks, isLoading } = useMusicPage();

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
      <PageHeader>
        <Stack
          type="row"
          gap={2}
          css={{ alignItems: "baseline", h1: { letterSpacing: "0px" } }}
        >
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
          Doesn't matter when or where, I'm always listening to music. I thought
          it would be fun to grab all my latest songs and display them here.
        </p>
      </PageHeader>

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
                {/* <ProgressKnob css={{ left: `${curPercentage - 2}%` }} /> */}
              </ProgressContainer>
              <span>{calculateTime(duration)}</span>
            </AudioControls>
          </AudioControlsContainer>
        )}
      </AnimatePresence>

      <Container type="column" gap={1}>
        <TrackHeader />

        <Divider />

        {isLoading
          ? skeletonTracks.map((id) => <MusicTrackSkeleton key={id} />)
          : tracks.map((track) => (
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
  bg: "#111E45",
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

const ProgressKnob = styled("div", {
  position: "absolute",
  size: 24,
  bg: "red",
  br: "9999px",
  top: 0,
});

const ControlsContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  size: 24,

  svg: {
    size: "100%",
    display: "block",
  },
});
