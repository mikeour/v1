import useRecentlyPlayed from "hooks/useRecentlyPlayed";
import useNowPlaying from "hooks/useNowPlaying";

function useMusicPage() {
  const { data, isLoading: isLoadingRecentlyPlayed } = useRecentlyPlayed();
  const { nowPlayingTrack, isLoading: isLoadingNowPlaying } = useNowPlaying({
    fallback: false,
  });

  const isLoading = isLoadingRecentlyPlayed || isLoadingNowPlaying;

  const recentlyPlayedTracks = data?.recentTracks ?? [];

  let tracks;

  if (nowPlayingTrack === null) {
    tracks = recentlyPlayedTracks;
  } else {
    tracks = [nowPlayingTrack, ...recentlyPlayedTracks];
  }

  return { isLoading, tracks };
}

export default useMusicPage;
