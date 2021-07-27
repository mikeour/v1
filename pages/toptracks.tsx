import { useState } from "react";
import Head from "next/head";
import useTopTracks from "hooks/useTopTracks";
import { styled } from "styles";
import TopTrack from "components/TopTrack";
import LoadingSongs from "components/TopTracksLoadingSpinner";
import { Stack } from "components/shared";

const defaultRange = "short_term";

function TopTracksPage() {
  const [range, setRange] = useState(defaultRange);
  const { data } = useTopTracks(range);

  return (
    <>
      <Head>
        <title key="title">Top Tracks</title>
      </Head>
      <Stack
        type="column"
        gap={4}
        css={{
          gtc: "minmax(0, 1fr)",
          padding: "0rem 1.5rem",
          alignItems: "flex-start",
        }}
      >
        <Stack type="column" gap={1}>
          <h1>My Top Tracks</h1>
          <Stack type="column" gap={0.5}>
            <p>
              Here you'll find some of my favorite songs that happen to be in
              constant rotation for me.
            </p>
            <p>
              This data is taken straight from my{" "}
              <a href="https://www.spotify.com">Spotify</a> and updated all the
              time. Hope you find some new tunes that you enjoy!
            </p>
          </Stack>
          <Stack type="row" gap={1}>
            <Choice
              active={range === "short_term"}
              onClick={() => setRange("short_term")}
            >
              Weeks
            </Choice>
            <Choice
              active={range === "medium_term"}
              onClick={() => setRange("medium_term")}
            >
              Months
            </Choice>
            <Choice
              active={range === "long_term"}
              onClick={() => setRange("long_term")}
            >
              Years
            </Choice>
          </Stack>
        </Stack>

        <Stack
          key={`${range}-${!!data}`}
          type="column"
          gap={2}
          css={{
            gridAutoFlow: "row",
            gtr: "auto",
            gtc: "repeat(auto-fit, minmax(200px, 1fr)",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "360px",
            padding: "0 2rem",
            margin: "0 auto",
          }}
        >
          {data ? (
            data.tracks.map((track, index) => (
              <TopTrack
                key={track.songUrl}
                track={track}
                position={index + 1}
              />
            ))
          ) : (
            <LoadingSongs />
          )}
        </Stack>
      </Stack>
    </>
  );
}

export default TopTracksPage;

const Choice = styled("p", {
  color: "$slate8",
  whiteSpace: "nowrap",
  background: "$slate8",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  fontSize: "1rem",
  fontWeight: "300",
  letterSpacing: "0.5px",
  cursor: "pointer",

  variants: {
    active: {
      false: {
        color: "$slate2",
        border: "1px solid $slate12",
        background: "none",
      },
    },
  },
});
