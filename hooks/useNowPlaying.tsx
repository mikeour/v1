import { useQuery } from "react-query";
import fetcher from "lib/fetcher";

interface NowPlayingData {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

function useNowPlaying() {
  const {
    data: currentTrack,
    isLoading: isLoadingNowPlaying,
  } = useQuery(
    "now-playing",
    () => fetcher<NowPlayingData>("/api/now-playing"),
    { refetchInterval: 60000 }
  );
  const {
    data: recentlyPlayedTrack,
    isLoading: isLoadingRecentlyPlayed,
  } = useQuery(
    "recently-played",
    () => fetcher<NowPlayingData>("/api/recently-played"),
    { enabled: currentTrack?.isPlaying === false }
  );

  return {
    track: currentTrack?.isPlaying ? currentTrack : recentlyPlayedTrack,
    loading: isLoadingNowPlaying || isLoadingRecentlyPlayed,
  };
}

export default useNowPlaying;
