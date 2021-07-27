type FetchParams = Parameters<typeof window.fetch>;

export default async function fetcher<T>(...params: FetchParams): Promise<T> {
  const response = await fetch(...params).then((resp) => resp.json());

  return response;
}
