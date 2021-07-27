import { getNowPlaying } from "lib/spotify";
import { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song: SpotifyApi.CurrentlyPlayingObject = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  // @ts-ignore
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ");
  // @ts-ignore
  const album = song.item.album.name;
  // @ts-ignore
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};
