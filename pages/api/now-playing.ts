import { getNowPlaying } from "lib/spotify";
import { NextApiRequest, NextApiResponse } from "next";
import { millisToMinutesAndSeconds } from "utils";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const data: SpotifyApi.CurrentlyPlayingObject = await response.json();

  if (data.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const { timestamp, item, is_playing } = data;

  if (item.type === "track") {
    const track = {
      id: new Date(timestamp).getTime(),
      artist: item.artists.map((artist) => artist.name).join(", "),
      album: item.album.name,
      songUrl: item.preview_url,
      title: item.name,
      albumImageUrl: item.album.images[0].url,
      playedAt: timestamp,
      isPlaying: is_playing,
      duration: millisToMinutesAndSeconds(item.duration_ms),
    };

    return res.status(200).json(track);
  }

  return res.status(400).json({ error: "Not a track" });
};
