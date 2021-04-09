import axios from "axios";
import config from "../config";

const headerObject = { "Cache-Control": "no-cache" };

async function getDataViaApi({
  path,
  callback,
  errorHandler,
  requestParams,
  headerParams,
}) {
  try {
    const response = await axios.get(config.getApiPath(path), {
      headers:
        typeof headerParams !== "undefined"
          ? Object.assign(headerObject, headerParams)
          : headerObject,
      params: requestParams,
    });
    callback(response);
  } catch (error) {
    errorHandler(error);
  }
}

async function postDataViaApi({
  path,
  callback,
  errorHandler,
  data,
  headerParams,
}) {
  try {
    const response = await axios.post(config.getApiPath(path), data, {
      headers:
        typeof headerParams !== "undefined"
          ? Object.assign(headerObject, headerParams)
          : headerObject,
    });
    callback(response);
  } catch (error) {
    errorHandler(error);
  }
}

async function deleteDataViaApi({
  path,
  callback,
  errorHandler,
  headerParams,
}) {
  try {
    const response = await axios.delete(config.getApiPath(path), {
      headers:
        typeof headerParams !== "undefined"
          ? Object.assign(headerObject, headerParams)
          : headerObject,
    });
    callback(response);
  } catch (error) {
    errorHandler(error);
  }
}

export { getDataViaApi, postDataViaApi, deleteDataViaApi };
