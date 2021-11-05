import { useQuery } from "react-query";
import fetcher from "lib/fetcher";
import { TrackData } from "types";
interface RecentlyPlayedData {
  recentTrack: TrackData;
  recentTracks: Array<TrackData>;
}

interface NowPlayingOptions {
  fallback?: boolean;
}

function useNowPlaying({ fallback }: NowPlayingOptions = { fallback: true }) {
  const { data: currentTrack, isLoading: isLoadingNowPlaying } = useQuery(
    "now-playing",
    () => fetcher<TrackData>("/api/now-playing"),
    { refetchInterval: 60000 }
  );
  const { data: recentlyPlayedTrack, isLoading: isLoadingRecentlyPlayed } =
    useQuery(
      "recently-played",
      () => fetcher<RecentlyPlayedData>("/api/recently-played"),
      { enabled: currentTrack?.isPlaying === false }
    );

  const nowPlayingTrack = currentTrack?.isPlaying
    ? currentTrack
    : fallback == true
    ? recentlyPlayedTrack?.recentTrack ?? null
    : null;

  return {
    nowPlayingTrack,
    isLoading: isLoadingNowPlaying || isLoadingRecentlyPlayed,
  };
}

export default useNowPlaying;
