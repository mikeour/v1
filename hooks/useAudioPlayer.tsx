import { useState, useEffect } from "react";
import { TrackData } from "types";

function useAudioPlayer(ref: React.MutableRefObject<HTMLAudioElement | null>) {
  const [duration, setDuration] = useState<number | null>(null);
  const [curTime, setCurTime] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<TrackData | null>(null);
  const [volumn, setVolumn] = useState(0.3);

  useEffect(() => {
    const audio = ref.current;

    if (audio === null) return;

    const handleDataUpdate = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const handleTimeUpdate = () => {
      setCurTime(audio.currentTime);
    };

    const handleAudioEnd = () => {
      setPlaying(false);
      setSelectedTrack(null);
    };

    const handleVolumnChange = (event: Event) => {
      console.log(event);
    };

    audio.addEventListener("loadeddata", handleDataUpdate);

    audio.addEventListener("timeupdate", handleTimeUpdate);

    audio.addEventListener("ended", handleAudioEnd);

    audio.addEventListener("volumechange", handleVolumnChange);

    audio.volume = volumn;

    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener("loadeddata", handleDataUpdate);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleAudioEnd);
      audio.removeEventListener("volumechange", handleVolumnChange);
    };
  }, [playing, selectedTrack, volumn]);

  return {
    curTime,
    duration,
    volumn,
    playing,
    setPlaying,
    setClickedTime,
    selectedTrack,
    setSelectedTrack,
    setVolumn,
  };
}

export default useAudioPlayer;
