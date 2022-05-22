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
      album: track.album.name,
      songUrl: track.preview_url,
      title: track.name,
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
