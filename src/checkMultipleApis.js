import { checkApi } from "./checkApi.js";

export async function checkMultipleApis(urls) {
  return Promise.all(
    urls.map(url => checkApi(url))
  );
}
