import axios from "axios";
//шаблон запросов
const instance = axios.create({ baseURL: "http://194.58.104.58/api/v1/" });
const responseBody = (response) => response.data;
const getRequest = (url, options) =>
  instance.get(url, options).then(responseBody);

//запрос дисциплин
export const fetchDisciplins = async (page = 0, limit = 8) =>
  getRequest("index/", {
    params: { limit, offset: limit * page },
  });
//запрос списка работ
export const fetchListOfWorks = async (id, page = 0, limit) =>
  getRequest(`${id}/material/`, {
    params: { limit, offset: limit * page },
  });
//запрос работы
export const fetchWork = async (listId, materialId, page = 0, limit) =>
  getRequest(`${listId}/material/${materialId}/`, {
    params: { limit, offset: limit * page },
  });

//запрос работы по слову
export const getWorksOfSearch = async (words) =>
  getRequest("search/", {
    params: {HTTP_SEARCH: words},
  });

