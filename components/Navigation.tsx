import NextLink from "next/link";
import { useRouter } from "next/router";
import { styled } from "styles";
import { useQuery } from "react-query";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Stack } from "components/shared";
import DarkModeToggle from "components/DarkModeToggle";

const links = [
  {
    id: 1,
    route: "/blog",
    display: "Blog",
  },
  { id: 2, route: "/about", display: "About" },
];

function Navigation() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <NavigationWrapper>
      <NavigationContainer>
        <Stack type="row" gap={4} css={{ alignItems: "flex-end" }}>
          <NextLink href="/" passHref>
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </NextLink>
          {links.map((link) => (
            <Link key={link.id} href={link.route}>
              <LinkText
                tabIndex={0}
                css={{
                  display: "grid",
                  "@initial": { display: "grid" },
                  "@bp1": { display: "none" },
                }}
              >
                {link.display}
              </LinkText>
            </Link>
          ))}
        </Stack>

        <DarkModeToggle />
      </NavigationContainer>
    </NavigationWrapper>
  );
}

export default Navigation;

function Logo() {
  return (
    <LogoWrapper
      viewBox="0 0 67 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.8975 17V9.34082C15.8975 8.40267 15.6969 7.70085 15.2959 7.23535C14.8949 6.7627 14.2718 6.52637 13.4268 6.52637C12.3167 6.52637 11.4967 6.84505 10.9668 7.48242C10.4368 8.11979 10.1719 9.10091 10.1719 10.4258V17H8.38867V9.34082C8.38867 8.40267 8.18815 7.70085 7.78711 7.23535C7.38607 6.7627 6.75944 6.52637 5.90723 6.52637C4.79004 6.52637 3.97005 6.86296 3.44727 7.53613C2.93164 8.20215 2.67383 9.29785 2.67383 10.8232V17H0.890625V5.22656H2.34082L2.63086 6.83789H2.7168C3.05339 6.26497 3.52604 5.81738 4.13477 5.49512C4.75065 5.17285 5.43815 5.01172 6.19727 5.01172C8.03776 5.01172 9.24089 5.67773 9.80664 7.00977H9.89258C10.2435 6.39388 10.752 5.9069 11.418 5.54883C12.084 5.19076 12.8431 5.01172 13.6953 5.01172C15.0273 5.01172 16.0228 5.35547 16.6816 6.04297C17.3477 6.72331 17.6807 7.81543 17.6807 9.31934V17H15.8975ZM20.1484 17H18.3652V5.22656H20.1484V17ZM18.2148 2.03613C18.2148 1.62793 18.3151 1.33073 18.5156 1.14453C18.7161 0.951172 18.9668 0.854492 19.2676 0.854492C19.554 0.854492 19.8011 0.951172 20.0088 1.14453C20.2165 1.33789 20.3203 1.63509 20.3203 2.03613C20.3203 2.43717 20.2165 2.73796 20.0088 2.93848C19.8011 3.13184 19.554 3.22852 19.2676 3.22852C18.9668 3.22852 18.7161 3.13184 18.5156 2.93848C18.3151 2.73796 18.2148 2.43717 18.2148 2.03613ZM22.6914 10.9736C22.9993 10.5368 23.4684 9.96387 24.0986 9.25488L27.9014 5.22656H30.0176L25.248 10.2432L30.3506 17H28.1914L24.0342 11.4355L22.6914 12.5957V17H20.9297V0.285156H22.6914V9.14746C22.6914 9.54134 22.6628 10.1501 22.6055 10.9736H22.6914ZM34.4619 17.2148C32.7217 17.2148 31.3467 16.6849 30.3369 15.625C29.3343 14.5651 28.833 13.0934 28.833 11.21C28.833 9.31217 29.2985 7.80469 30.2295 6.6875C31.1676 5.57031 32.4245 5.01172 34 5.01172C35.4753 5.01172 36.6426 5.4987 37.502 6.47266C38.3613 7.43945 38.791 8.71777 38.791 10.3076V11.4355H30.6807C30.7165 12.8177 31.0638 13.8669 31.7227 14.583C32.3887 15.2992 33.3232 15.6572 34.5264 15.6572C35.7939 15.6572 37.0472 15.3923 38.2861 14.8623V16.4521C37.6559 16.7243 37.0579 16.9176 36.4922 17.0322C35.9336 17.154 35.2568 17.2148 34.4619 17.2148ZM33.9785 6.50488C33.0332 6.50488 32.2777 6.81283 31.7119 7.42871C31.1533 8.0446 30.8239 8.89681 30.7236 9.98535H36.8789C36.8789 8.861 36.6283 8.00163 36.127 7.40723C35.6257 6.80566 34.9095 6.50488 33.9785 6.50488ZM49.0039 11.1025C49.0039 13.0218 48.5205 14.5221 47.5537 15.6035C46.5869 16.6777 45.2513 17.2148 43.5469 17.2148C42.4941 17.2148 41.5596 16.9678 40.7432 16.4736C39.9268 15.9795 39.2965 15.2705 38.8525 14.3467C38.4085 13.4229 38.1865 12.3415 38.1865 11.1025C38.1865 9.18327 38.6663 7.6901 39.626 6.62305C40.5856 5.54883 41.9176 5.01172 43.6221 5.01172C45.2692 5.01172 46.5762 5.55957 47.543 6.65527C48.5169 7.75098 49.0039 9.2334 49.0039 11.1025ZM40.0342 11.1025C40.0342 12.6064 40.335 13.7523 40.9365 14.54C41.5381 15.3278 42.4225 15.7217 43.5898 15.7217C44.7572 15.7217 45.6416 15.3314 46.2432 14.5508C46.8519 13.763 47.1562 12.6136 47.1562 11.1025C47.1562 9.60579 46.8519 8.4707 46.2432 7.69727C45.6416 6.91667 44.75 6.52637 43.5684 6.52637C42.401 6.52637 41.5202 6.90951 40.9258 7.67578C40.3314 8.44206 40.0342 9.58431 40.0342 11.1025ZM50.8164 5.22656V12.8643C50.8164 13.8239 51.0348 14.54 51.4717 15.0127C51.9085 15.4854 52.5924 15.7217 53.5234 15.7217C54.7552 15.7217 55.654 15.3851 56.2197 14.7119C56.7926 14.0387 57.0791 12.9395 57.0791 11.4141V5.22656H58.8623V17H57.3906L57.1328 15.4209H57.0361C56.6709 16.001 56.1624 16.445 55.5107 16.7529C54.8662 17.0609 54.1286 17.2148 53.2979 17.2148C51.8656 17.2148 50.7913 16.8747 50.0752 16.1943C49.3662 15.514 49.0117 14.4255 49.0117 12.9287V5.22656H50.8164ZM65.0254 5.01172C65.5482 5.01172 66.0173 5.05469 66.4326 5.14062L66.1855 6.79492C65.6986 6.6875 65.2689 6.63379 64.8965 6.63379C63.944 6.63379 63.1276 7.02051 62.4473 7.79395C61.7741 8.56738 61.4375 9.5306 61.4375 10.6836V17H59.6543V5.22656H61.126L61.3301 7.40723H61.416C61.8529 6.64095 62.3792 6.05013 62.9951 5.63477C63.611 5.2194 64.2878 5.01172 65.0254 5.01172Z" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled(motion.svg, {
  height: "2.2rem",
  fill: "$slate12",
});

const NavigationWrapper = styled("nav", {
  width: "100%",
  gridArea: "nav",
  display: "grid",
  placeContent: "center",
  gtc: "minmax(0, 1fr)",
});

const NavigationContainer = styled("div", {
  p: "2rem",
  margin: "0 auto",
  width: "100%",
  // Magic number to prevent layout shift when dark mode toggle is first painted to screen
  minHeight: "120px",
  maxWidth: "$header",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const LogoContainer = styled("div", {
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
});

const Link = styled(NextLink, {
  display: "grid",
  gridAutoFlow: "row",
  position: "relative",
});

const LinkText = styled(motion.span, {
  color: "$slate11",
  cursor: "pointer",
  background: "none",
  fontSize: "$3",
  transform: "translateY(2.2px)",
  br: "8px",

  "&:hover": { color: "$slate12" },
  "&:focus": {
    outline: "3px solid $colors$slate8",
    outlineOffset: "5px",
    color: "$slate12",
  },
});
