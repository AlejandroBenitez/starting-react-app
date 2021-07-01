export const fetchApi = ({ url, onSuccess, onFail }) => {
  fetch(url)
    .then((res) => res.json())
    .catch((error) => onFail(error))
    .then((dataJson) => onSuccess(dataJson.students));
};
