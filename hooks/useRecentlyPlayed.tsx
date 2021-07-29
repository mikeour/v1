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
function useRecentlyPlayed() {
  return useQuery(["recently-played"], () =>
    fetcher<RecentlyPlayedData>(`/api/recently-played`)
  );
}

export default useRecentlyPlayed;
