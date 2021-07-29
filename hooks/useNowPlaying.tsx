import { useQuery } from "react-query";
import fetcher from "lib/fetcher";

interface TrackData {
  artist: string;
  album: string;
  songUrl: string;
  title: string;
  albumImageUrl: string;
  playedAt: string;
  isPlaying: boolean;
}
interface RecentlyPlayedData {
  recentTrack: TrackData;
  recentTracks: Array<TrackData>;
}

interface NowPlayingData {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

function useNowPlaying() {
  const { data: currentTrack, isLoading: isLoadingNowPlaying } = useQuery(
    "now-playing",
    () => fetcher<NowPlayingData>("/api/now-playing"),
    { refetchInterval: 60000 }
  );
  const { data: recentlyPlayedTrack, isLoading: isLoadingRecentlyPlayed } =
    useQuery(
      "recently-played",
      () => fetcher<RecentlyPlayedData>("/api/recently-played"),
      { enabled: currentTrack?.isPlaying === false }
    );

  return {
    track: currentTrack?.isPlaying
      ? currentTrack
      : recentlyPlayedTrack?.recentTrack,
    loading: isLoadingNowPlaying || isLoadingRecentlyPlayed,
  };
}

export default useNowPlaying;
