import { CALL_API } from "redux-api-middleware";
import querystring from "querystring"

const createAPIAction = ({ name, endpoint, method, body = {}, query }) => {
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };

  if (method === "GET") {
    return {
      [CALL_API]: {
        endpoint: `${endpoint}?${querystring.stringify(query)}`,
        method,
        headers,
        types: [`${name}_REQUEST`, `${name}_SUCCESS`, `${name}_FAILURE`]
      }
    };
  } else {
    return {
      [CALL_API]: {
        endpoint,
        method,
        headers,
        body: JSON.stringify(body),
        types: [`${name}_REQUEST`, `${name}_SUCCESS`, `${name}_FAILURE`]
      }
    };
  }
};

export default createAPIAction;
