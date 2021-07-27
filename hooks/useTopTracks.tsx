import { useQuery } from "react-query";
import fetcher from "lib/fetcher";

interface TopTracksResponse {
  tracks: Array<Track>;
}

interface Track {
  artist: string;
  album: string;
  songUrl: string;
  title: string;
}

function useTopTracks(range: string) {
  return useQuery(["top-tracks", range], () =>
    fetcher<TopTracksResponse>(`/api/top-tracks?range=${range}`)
  );
}

export default useTopTracks;
