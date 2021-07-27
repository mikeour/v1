import { NextApiRequest, NextApiResponse } from "next";
import { getRecentlyPlayed } from "lib/spotify";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getRecentlyPlayed();
  const data: SpotifyApi.UsersRecentlyPlayedTracksResponse = await response.json();

  const recentTrack = data.items[0].track;

  // const info = [...data.items]
  //   .slice(0, 10)
  //   .map((trackContext) => trackContext.track)
  //   .map((track) => ({
  //     artist: track.artists.map((artist) => artist.name).join(", "),
  //     // @ts-ignore
  //     album: track.album.images[0].url,
  //     songUrl: track.external_urls.spotify,
  //     title: track.name,
  //     // @ts-ignore
  //     albumImageUrl: track.album.images[0].url,
  //     isPlaying: false,
  //   }));

  // console.log(JSON.stringify(info, null, 2));

  return res.status(200).json({
    artist: recentTrack.artists.map((artist) => artist.name).join(", "),
    // @ts-ignore
    album: recentTrack.album.images[0].url,
    songUrl: recentTrack.external_urls.spotify,
    title: recentTrack.name,
    // @ts-ignore
    albumImageUrl: recentTrack.album.images[0].url,
    isPlaying: false,
    playedAt: data.items[0].played_at,
  });
};

// refresh SPOTIFY_REFRESH_TOKEN=AQDoRFtlYP4S0-W65f7eg53kCAzSOu3FxMwtsly1_OPsXRVvEUxF72Bci_e5BeWgr4uCmTzbmg2rosfmUI7fHLd4gBCgK5NrH8Q-SEKk7UsETVsMYECW-tUPgyGscAIrNMY

// url to get code https://accounts.spotify.com/authorize?response_type=code&client_id=9b52f7176f3248cd928a38dfd460af28&scope=user-read-currently-playing&user-top-read&user-read-recently-played&redirect_uri=http%3A%2F%2Flocalhost:3000

// round 2 https://accounts.spotify.com/authorize?response_type=code&client_id=9b52f7176f3248cd928a38dfd460af28&scope=user-read-currently-playing%20user-top-read%20user-read-recently-played&redirect_uri=http%3A%2F%2Flocalhost:3000
