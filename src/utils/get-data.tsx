interface Props {
  url: string;
}

export async function getData<T>({ url }: Props) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .catch((error) => {
      console.error(`${url} : ${error}`);
    });
}
