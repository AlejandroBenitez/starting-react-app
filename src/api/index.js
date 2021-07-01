export const fetchApi = async ({ url, onPreFetch, onSuccess, onFail }) => {
  onPreFetch();
  try {
    const res = await fetch(url);
    const json = await res.json();
    onSuccess(json);
  } catch (e) {
    onFail(e);
  }
};
