import { useQuery } from "react-query";
import fetcher from "lib/fetcher";
import { TrackData } from "types";
interface RecentlyPlayedData {
  recentTrack: TrackData;
  recentTracks: Array<TrackData>;
}

interface NowPlayingOptions {
  useFallback?: boolean;
}

function useNowPlaying(
  { useFallback }: NowPlayingOptions = { useFallback: true }
) {
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

  const track = currentTrack?.isPlaying
    ? currentTrack
    : useFallback == true
    ? recentlyPlayedTrack?.recentTrack ?? null
    : null;

  return {
    track,
    loading: isLoadingNowPlaying || isLoadingRecentlyPlayed,
  };
}

export default useNowPlaying;
