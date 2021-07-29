import Head from "next/head";
import useRecentlyPlayed from "hooks/useRecentlyPlayed";
import { styled } from "styles";
import { Stack, AlbumArt } from "components/shared";
// import { Play } from 'components/icons'
import timeAgo from "lib/timeago";

function MusicPage() {
  const { data } = useRecentlyPlayed();

  return (
    <>
      <Head>
        <title key="title">Music</title>
      </Head>
      <Stack type="column" gap={1} css={{ py: "$2" }}>
        <Stack type="column" gap={1} css={{ py: "$4" }}>
          <h1>Music</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur adipisci iusto dicta esse perferendis id, ipsa itaque
            rerum nemo, numquam veniam, quam distinctio amet qui! Repellendus
            quibusdam voluptatum expedita?
          </p>
        </Stack>
      </Stack>

      <Container type="column" gap={1}>
        {/* <span>Recently Played</span> */}

        <Stack
          type="row"
          gap={0}
          css={{
            gtc: "$$gridTracks",
            span: {
              textTransform: "uppercase",
              fontSize: "$1",
              letterSpacing: "0.5px",
              py: "$1",
              borderBottom: "2px solid $slate6",
            },
            "@bp1": {
              gtc: "3fr 1fr",
            },
          }}
        >
          <span>Title</span>

          <AlbumColumn>Album</AlbumColumn>

          <span>Played at</span>
        </Stack>

        {data &&
          data?.recentTracks.map((track) => {
            return (
              <Stack
                type="row"
                gap={2}
                css={{
                  gtc: "$$gridTracks",
                  background: "none",
                  transition: "background 300ms ease",
                  cursor: "pointer",
                  px: "$1",
                  py: "$1",
                  br: "8px",
                  "&:hover": {
                    background: "$gray5",
                  },
                  "@bp1": {
                    gtc: "3fr 1fr",
                  },
                }}
              >
                <Stack type="row" gap={1}>
                  <AlbumArt>
                    <img src={track.albumImageUrl} alt="album" />

                    <PlayIconContainer></PlayIconContainer>
                  </AlbumArt>

                  <SongInfoContainer type="column" gap={0}>
                    <Song>{track.title}</Song>
                    <Artist>{track.artist}</Artist>
                  </SongInfoContainer>
                </Stack>
                <Album>{track.album}</Album>
                <TimePlayed>
                  {timeAgo.format(new Date(track.playedAt))}
                </TimePlayed>
              </Stack>
            );
          })}
      </Container>

      {/* <table>
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "left", width: "40%" }}>
              Title
            </th>
            <th scope="col" style={{ textAlign: "left", width: "40%" }}>
              Album
            </th>
            <th scope="col" style={{ textAlign: "left", width: "20%" }}>
              Played at
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.recentTracks.map((track) => {
              return (
                <tr>
                  <td width="40$">
                    <Stack type="row" gap={1}>
                      <AlbumArt>
                        <img src={track.albumImageUrl} alt="album" />

                        <PlayIconContainer></PlayIconContainer>
                      </AlbumArt>

                      <SongInfoContainer type="column" gap={0}>
                        <Song>{track.title}</Song>
                        <Artist>{track.artist}</Artist>
                      </SongInfoContainer>
                    </Stack>
                  </td>
                  <td width="40%">
                    <Artist>{track.album}</Artist>
                  </td>
                  <td width="20%">
                    <Artist>{timeAgo.format(new Date(track.playedAt))}</Artist>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table> */}
    </>
  );
}

export default MusicPage;

const Container = styled(Stack, {
  $$gridTracks: "3fr 3fr 1.5fr",
  justifySelf: "stretch",
  gtc: "minmax(0, 1fr)",
  py: "$4",
});

const SongInfoContainer = styled(Stack, {});

const Song = styled("span", {
  color: "$gray12",
  fontSize: "$2",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
});

const Artist = styled("span", {
  color: "$gray11",
  fontSize: "$1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
});

const Album = styled("span", {
  color: "$gray11",
  fontSize: "$1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",

  "@bp1": {
    display: "none",
  },
});

const TimePlayed = styled("span", {
  color: "$gray11",
  fontSize: "$1",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "1",
  overflow: "hidden",
});

const PlayIconContainer = styled("div", {
  display: "grid",
  placeContent: "center",
  background: "$blackA10",
});

const AlbumColumn = styled("span", {
  "@bp1": {
    display: "none",
  },
});
