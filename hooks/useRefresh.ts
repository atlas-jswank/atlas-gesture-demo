import { wait } from "@/lib/util";
import { useState } from "react";

/**
 * Simulate a refresh request
 */

export function useRefresh() {
  const [isRefreshing, setRefresh] = useState(false);

  const refresh = async () => {
    alert("Refreshing");
    setRefresh(true);
    await wait(3000);
    setRefresh(false);
  };

  return { isRefreshing, refresh };
}
