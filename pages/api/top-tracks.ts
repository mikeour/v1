import { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "lib/spotify";

const defaultRange = "short_term";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let { range } = req.query;

  if (range === undefined) {
    range = defaultRange;
  }

  const response = await getTopTracks(Array.isArray(range) ? range[0] : range);
  const data: SpotifyApi.UsersTopTracksResponse = await response.json();

  const tracks = data.items.slice(0, 10).map((track) => ({
    artist: track.artists.map((artist) => artist.name).join(", "),
    album: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json({ tracks, data });
};
