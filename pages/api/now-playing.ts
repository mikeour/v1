import { getNowPlaying } from "lib/spotify";
import { NextApiRequest, NextApiResponse } from "next";
import { millisToMinutesAndSeconds } from "utils";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song: SpotifyApi.CurrentlyPlayingObject = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const { timestamp, item, is_playing } = song;

  const track = {
    id: new Date(timestamp).getTime(),
    // @ts-ignore
    artist: item.artists.map((artist) => artist.name).join(", "),
    // @ts-ignore
    album: item.album.name,
    // @ts-ignore
    songUrl: item.preview_url,
    title: item.name,
    // @ts-ignore
    albumImageUrl: item.album.images[0].url,
    playedAt: timestamp,
    isPlaying: is_playing,
    duration: millisToMinutesAndSeconds(item.duration_ms),
  };

  return res.status(200).json(track);
};
