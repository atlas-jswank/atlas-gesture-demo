import { getData, ToDo } from "@/lib/data";
import { useEffect, useState } from "react";

export function useData() {
  const [data, setData] = useState<ToDo[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Load first page
    loadMore();
  }, []);

  async function loadMore() {
    // Load next page of data, append to end of current data
    if (loading) return;
    setLoading(true);
    setPage(page + 1);
    const newData = await getData(page + 1);
    setData((current) => [...current, ...newData]);
    setLoading(false);
  }

  async function refresh() {
    if (loading) return;
    setLoading(true);
    setData([]);
    const newData = await getData(1);
    setPage(1);
    setData([...newData]);
    setLoading(false);
  }

  return { data, loadMore, loading, refresh };
}
