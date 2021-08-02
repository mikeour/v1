import { NextApiRequest, NextApiResponse } from "next";
import { getRecentlyPlayed } from "lib/spotify";
import { millisToMinutesAndSeconds } from "utils";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getRecentlyPlayed();
  const data: SpotifyApi.UsersRecentlyPlayedTracksResponse =
    await response.json();

  const recentTracks = [...data.items].slice(0, 20).map((item) => {
    const { track, played_at } = item;

    return {
      id: new Date(played_at).getTime(),
      artist: track.artists.map((artist) => artist.name).join(", "),
      // @ts-ignore
      album: track.album.name,
      songUrl: track.external_urls.spotify,
      title: track.name,
      // @ts-ignore
      albumImageUrl: track.album.images[0].url,
      playedAt: played_at,
      isPlaying: false,
      duration: millisToMinutesAndSeconds(track.duration_ms),
    };
  });

  const recentTrack = recentTracks[0];

  return res.status(200).json({
    recentTrack,
    recentTracks,
  });
};

// refresh SPOTIFY_REFRESH_TOKEN=AQDoRFtlYP4S0-W65f7eg53kCAzSOu3FxMwtsly1_OPsXRVvEUxF72Bci_e5BeWgr4uCmTzbmg2rosfmUI7fHLd4gBCgK5NrH8Q-SEKk7UsETVsMYECW-tUPgyGscAIrNMY

// url to get code https://accounts.spotify.com/authorize?response_type=code&client_id=9b52f7176f3248cd928a38dfd460af28&scope=user-read-currently-playing&user-top-read&user-read-recently-played&redirect_uri=http%3A%2F%2Flocalhost:3000

// round 2 https://accounts.spotify.com/authorize?response_type=code&client_id=9b52f7176f3248cd928a38dfd460af28&scope=user-read-currently-playing%20user-top-read%20user-read-recently-played&redirect_uri=http%3A%2F%2Flocalhost:3000
