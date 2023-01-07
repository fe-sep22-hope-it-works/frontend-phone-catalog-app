// eslint-disable-next-line max-len
const BASE_URL = 'https://hope-it-works.netlify.app/.netlify/functions/server';

export function getPhones<T>(
  url: string,
): Promise<T> {
  return fetch(BASE_URL + url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .then(result => result.paginatedPhones);
}
