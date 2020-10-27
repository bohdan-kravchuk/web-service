import { stringifyUrl } from 'query-string';
import { env } from 'env';
import { pipe, anyPass, map, mergeRight, pickBy, is } from 'ramda';
import { getAccessToken, getRefreshToken, setTokens } from './storageHelper';

const getInitHeaders = (contentType = 'application/json', hasContent = true) => {
  const headers = new Headers();

  headers.set('Authorization', `Bearer ${getAccessToken()}`);
  if (hasContent) {
    headers.set('Content-Type', contentType);
  }
  return headers;
};

const stringifyNested = (query) => pipe(
  pickBy(anyPass([is(Object), is(Array)])),
  map(JSON.stringify),
  mergeRight(query)
)(query);

const getFetchUrl = (url, query) => stringifyUrl({
  url,
  query: stringifyNested(query)
}, { skipNull: true });

const getFetchOptions = (method, body) => ({
  method,
  headers: getInitHeaders(),
  body: body && JSON.stringify(body)
});

const parseResErrorBody = async (res) => {
  try {
    const body = await res.text();
    return JSON.parse(body);
  } catch (err) {
    return null;
  }
};

const throwIfResponseFailed = async (res) => {
  if (res.ok) {
    return;
  }

  const body = await parseResErrorBody(res);

  if (res.status === 401) {
    // logout();
    return;
  }

  const exception = body || {
    message: 'Something went wrong with request!',
    status: 500
  };

  throw exception;
};

export const refreshToken = async () => {
  const url = `${env.urls.server}/api/auth/tokens`;
  const fetchOptions = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken: getRefreshToken() })
  };
  const res = await fetch(url, fetchOptions);
  await throwIfResponseFailed(res);

  const tokens = await res.json();
  setTokens(tokens);
};

const makeRequest = method => async (url, params, config = {}) => {
  const domainUrl = config.external ? url : `${env.urls.server}${url}`;
  const [fetchUrl, body] = method === 'get'
    ? [getFetchUrl(domainUrl, params), undefined]
    : [domainUrl, params];

  const fetchOptions = getFetchOptions(method, body);

  let res = await fetch(fetchUrl, fetchOptions);
  if (res.status === 401 && getRefreshToken()) {
    await refreshToken();
    const newfetchOptions = getFetchOptions(method, body);
    res = await fetch(fetchUrl, newfetchOptions);
  }
  await throwIfResponseFailed(res);
  return (res.status === 200 ? res.json() : null);
};

const api = {
  get: makeRequest('get'),
  post: makeRequest('post'),
  put: makeRequest('put'),
  delete: makeRequest('delete')
};

export default api;
