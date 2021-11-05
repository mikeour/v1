import { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "lib/spotify";
import { millisToMinutesAndSeconds } from "utils";

const defaultRange = "short_term";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let { range } = req.query;

  if (range === undefined) {
    range = defaultRange;
  }

  const response = await getTopTracks(Array.isArray(range) ? range[0] : range);
  const data: SpotifyApi.UsersTopTracksResponse = await response.json();

  const topTracks = [...data.items].slice(0, 20).map((item) => {
    return {
      // id: new Date(played_at).getTime(),
      artist: item.artists.map((artist) => artist.name).join(", "),
      album: item.album.name,
      songUrl: item.preview_url,
      title: item.name,
      albumImageUrl: item.album.images[0].url,
      // playedAt: played_at,
      isPlaying: false,
      popularity: item.popularity,
      duration: millisToMinutesAndSeconds(item.duration_ms),
    };
  });

  return res.status(200).json({ topTracks, data });
};
