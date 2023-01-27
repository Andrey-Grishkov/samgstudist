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
