import { fetchData } from '../../../utils';

export async function login(username: string, password: string) {
  return fetchData('POST', '/auth/login', { "username_or_email": username, "password": password })
    .then(data => data)
    .catch(error => error);
}
