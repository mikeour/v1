import { useQuery } from "react-query";
import fetcher from "lib/fetcher";
import { Film } from "types";

interface RecentlyWatchedData {
  films: Array<Film>;
}

function useRecentlyWatched() {
  return useQuery(["recently-watched"], () =>
    fetcher<RecentlyWatchedData>(`/api/recently-watched`)
  );
}

export default useRecentlyWatched;
