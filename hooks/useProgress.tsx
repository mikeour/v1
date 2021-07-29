import { useEffect } from "react";
import { useRouter } from "next/router";
import nprogress from "nprogress";

function useProgress() {
  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    function startProgress() {
      timeout = setTimeout(nprogress.start, 100);
    }

    function finishProgress() {
      clearTimeout(timeout);
      nprogress.done();
    }

    router.events.on("routeChangeStart", startProgress);
    router.events.on("routeChangeComplete", finishProgress);
    router.events.on("routeChangeError", finishProgress);

    return () => {
      router.events.on("routeChangeStart", startProgress);
      router.events.on("routeChangeComplete", finishProgress);
      router.events.on("routeChangeError", finishProgress);
    };
  }, []);
}

export default useProgress;
