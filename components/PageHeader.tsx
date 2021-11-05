import { Stack } from "components/shared";

interface PageHeaderProps {
  children?: React.ReactNode;
}

function PageHeader({ children }: PageHeaderProps) {
  return (
    <Stack
      type="column"
      gap={1}
      css={{
        py: "calc($2 + $4)",
        justifySelf: "stretch",
        justifyContent: "stretch",
        alignSelf: "center",
      }}
    >
      {children}
    </Stack>
  );
}

export default PageHeader;
