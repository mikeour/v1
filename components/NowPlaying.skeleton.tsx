import { NowPlayingContainer } from "components/NowPlaying";
import { Stack, AlbumArt, TextSkeleton } from "components/shared";

function NowPlayingSkeleton() {
  return (
    <NowPlayingContainer type="row" gap={1}>
      <Stack
        type="row"
        gap={2}
        css={{ gtc: "auto 1fr auto", padding: "0 0.5rem" }}
      >
        <AlbumArt skeleton />

        <Stack type="column" gap={1}>
          <TextSkeleton />
          <TextSkeleton />
        </Stack>
        <TextSkeleton size={1} />
      </Stack>
    </NowPlayingContainer>
  );
}

export default NowPlayingSkeleton;
