import { useQuery } from "react-query";
import fetcher from "lib/fetcher";

interface Film {
  id: number;
  watched: string;
  title: string;
  year: string;
  poster: string;
  rating: number;
  review: string;
  url: string;
}

interface RecentlyWatchedData {
  films: Array<Film>;
}

function useRecentlyWatched() {
  return useQuery(["recently-watched"], () =>
    fetcher<RecentlyWatchedData>(`/api/recently-watched`)
  );
}

export default useRecentlyWatched;
