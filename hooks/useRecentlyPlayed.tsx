import { useQuery } from "react-query";
import fetcher from "lib/fetcher";
import { TrackData } from "types";

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
