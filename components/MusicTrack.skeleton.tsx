import { styled } from "styles";
import { Stack, TextSkeleton, AlbumArt } from "components/shared";
import { MusicTrackContainer, SongInfoContainer } from "components/MusicTrack";

function MusicTrackSkeleton() {
  return (
    <MusicTrackContainer type="row" gap={2}>
      <Stack type="row" gap={1}>
        <AlbumArt skeleton />

        <SongInfoContainer type="column" gap={1}>
          <TextSkeleton size={9} />
          <TextSkeleton />
        </SongInfoContainer>
      </Stack>
      <HiddenTextSkeleton size={8} />
      <HiddenTextSkeleton size={3} />
      <TextSkeleton size={1} />
    </MusicTrackContainer>
  );
}

export default MusicTrackSkeleton;

const HiddenTextSkeleton = styled(TextSkeleton, {
  "@bp1": {
    display: "none",
  },
});
