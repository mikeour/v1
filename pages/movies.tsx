import Page from "components/PageLayout";
import PageHeader from "components/PageHeader";
import MovieTrack from "components/MovieTrack";
import SkeletonMovieTrack from "components/MovieTrack.skeleton";
import { Stack } from "components/shared";
import { Letterboxd } from "components/icons";
import useRecentlyWatched from "hooks/useRecentlyWatched";
import { getPlaceholderItems } from "utils";
import { styled } from "styles";

const skeletonFilms = getPlaceholderItems(20);

function MoviePage() {
  const { data, isLoading } = useRecentlyWatched();

  const films = data?.films ?? [];

  return (
    <Page title="Movies">
      <PageHeader>
        <Stack type="row" gap={2} css={{ alignItems: "baseline" }}>
          <h1>Movies</h1>
          <Stack
            type="row"
            gap={1}
            css={{
              span: { color: "$slate10" },
            }}
          >
            <span>via Letterboxd</span>
            <IconContainer>
              <Letterboxd />
            </IconContainer>
          </Stack>
        </Stack>
        <p>
          Movies are one of my favorite ways to unwind. Recently I've started
          keeping track of the movies I've watched and started saving some of my
          favorite quotes from them.
        </p>
        <p>Any recommendations? Let me know. I'm always open to new films.</p>
      </PageHeader>

      <Content type="column" gap={1}>
        {isLoading
          ? skeletonFilms.map((id) => <SkeletonMovieTrack key={id} />)
          : films.map((film) => {
              return (
                // <ExternalLink
                //   key={film.id}
                //   href={film.url}
                //   target="_blank"
                //   rel="noopener noreferrer"
                // >
                <MovieTrack key={film.id} film={film} />
                // </ExternalLink>
              );
            })}
      </Content>
    </Page>
  );
}

export default MoviePage;

const Content = styled(Stack, {
  justifySelf: "center",
  gtc: "minmax(0, 1fr)",
  width: "100%",
  maxWidth: "850px",
});

const IconContainer = styled("div", {
  size: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  svg: {
    size: "100%",
  },
});

const ExternalLink = styled("a", {
  textDecoration: "none",
});
