import { useState } from "react";
import { Stack } from "components/shared";

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <Stack type="row" gap={1}>
      <button onClick={() => setCount((curr) => curr + 1)}>Click</button>
      <p>{count}</p>
    </Stack>
  );
}
