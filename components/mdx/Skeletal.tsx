import { useState, useEffect } from "react";
import Image from "next/image";
import { Stack } from "components/shared";
import { Spotify, NowPlayingIcon, Refresh } from "components/icons";
import { styled, keyframes } from "styles";
import albumCover from "public/images/album-art.jpeg";

const defaultTrack = {
  image: albumCover,
  title: "Brando",
  artist: "Lucy Dacus",
  isPlaying: true,
};

interface Track {
  image: any;
  title: string;
  artist: string;
  isPlaying: boolean;
}

function Skeletal() {
  const [track, setTrack] = useState<Track>({} as Track);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setTrack(defaultTrack);
    }, 3000);

    return () => clearTimeout(id);
  }, [count]);

  function handleRefresh() {
    setTrack({} as Track);
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <NowPlayingContainer type="row" gap={1}>
      <Stack
        type="row"
        gap={2}
        key={track?.title ?? "now-playing"}
        css={{ gtc: "auto 1fr auto", padding: "0 0.5rem" }}
      >
        <AlbumArt skeleton={!track?.image}>
          {track?.image !== undefined && (
            <Image src={track?.image} alt="" layout="fill" />
          )}
        </AlbumArt>

        <Stack type="column" gap={0}>
          <TrackName skeleton={!track?.title}>{track.title}</TrackName>
          <ArtistName skeleton={!track?.artist}>{track.artist}</ArtistName>
        </Stack>
        <IconContainer css={{ size: 24 }} skeleton={!track.isPlaying}>
          {track?.isPlaying ? <NowPlayingIcon /> : <Spotify />}
        </IconContainer>
      </Stack>

      <RefreshButton onClick={handleRefresh}>
        <Refresh />
      </RefreshButton>
    </NowPlayingContainer>
  );
}

export default Skeletal;

const glisten = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "60%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(100%)" },
});

const NowPlayingContainer = styled(Stack, {
  width: "100%",
  bg: "$slate3",
  br: "6px",
  px: "$1",
  py: "$1",
  my: "$4",
  zIndex: 1,
  gtc: "minmax(0, 1fr)",
  justifySelf: "center",
  maxWidth: "280px",
});

const TrackName = styled("span", {
  fontSize: "$2",
  color: "$slate12",
  letterSpacing: "-0.25px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  variants: {
    skeleton: {
      true: {
        width: "7rem",
        height: "1rem",
        br: "5px",
        background: "$slate8",
        overflow: "hidden",
        position: "relative",

        "&::after": {
          position: "absolute",
          content: "",
          inset: 0,
          linearGradient:
            "90deg, transparent, rgba(0, 0, 0, 0.09), transparent",
          transform: "translateX(-100%)",
          animation: `${glisten} 1.6s linear 0.5s infinite`,
        },
      },
    },
  },
});

const ArtistName = styled("span", {
  fontSize: "$1",
  letterSpacing: "-0.25px",
  color: "$slate11",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  variants: {
    skeleton: {
      true: {
        width: "7rem",
        height: "1rem",
        mt: "0.25rem",
        br: "5px",
        background: "$slate8",
        overflow: "hidden",
        position: "relative",

        "&::after": {
          position: "absolute",
          content: "",
          inset: 0,
          linearGradient:
            "90deg, transparent, rgba(0, 0, 0, 0.09), transparent",
          transform: "translateX(-100%)",
          animation: `${glisten} 1.6s linear 0.5s infinite`,
        },
      },
    },
  },
});

const AlbumArt = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  size: "45px",
  br: "5px",
  overflow: "hidden",
  position: "relative",

  img: {
    size: "100%",
    objectFit: "cover",
  },

  variants: {
    skeleton: {
      true: {
        bg: "$slate8",

        img: {
          display: "none",
        },

        "&::after": {
          position: "absolute",
          content: "",
          inset: 0,
          linearGradient:
            "90deg, transparent, rgba(0, 0, 0, 0.09), transparent",
          transform: "translateX(-100%)",
          animation: `${glisten} 1.6s linear 0.5s infinite`,
        },
      },
    },
  },
});

const TextSkeleton = styled("span", {
  width: "7rem",
  height: "1rem",
  br: "5px",
  background: "$slate8",
  overflow: "hidden",
  position: "relative",

  "&::after": {
    position: "absolute",
    content: "",
    inset: 0,
    linearGradient: "90deg, transparent, rgba(0, 0, 0, 0.09), transparent",
    transform: "translateX(-100%)",
    animation: `${glisten} 1.6s linear 0.5s infinite`,
  },

  variants: {
    size: {
      0: {
        width: "0rem",
      },
      1: {
        width: "1rem",
      },
      2: {
        width: "2rem",
      },
      3: {
        width: "3rem",
      },
      4: {
        width: "4rem",
      },
      5: {
        width: "5rem",
      },
      6: {
        width: "6rem",
      },
      7: {
        width: "7rem",
      },
      8: {
        width: "8rem",
      },
      9: {
        width: "9rem",
      },
    },
  },

  defaultVariant: {
    size: 7,
  },
});

const IconContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: "2",

  "> svg": {
    width: "100%",
    height: "100%",
    display: "block",
  },

  variants: {
    skeleton: {
      true: {
        br: "5px",
        background: "$slate8",
        overflow: "hidden",
        position: "relative",

        svg: {
          display: "none",
        },

        "&::after": {
          position: "absolute",
          content: "",
          inset: 0,
          linearGradient:
            "90deg, transparent, rgba(0, 0, 0, 0.09), transparent",
          transform: "translateX(-100%)",
          animation: `${glisten} 1.6s linear 0.5s infinite`,
        },
      },
    },
  },
});

const RefreshButton = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  transform: "translate(calc(100% + 0.5rem), 0.2rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  size: 26,
  br: "8px",
  bg: "$slate4",
  p: "4px",
  cursor: "pointer",
  color: "$slate11",
  "&:hover": {
    bg: "$slate5",
  },

  svg: {
    size: "100%",
    display: "block",
  },
});
