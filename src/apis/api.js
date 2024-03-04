import http from "./https";

const Public = {
  getChargeInfo:'/api/app_api/charge_info/',
  getRemote_start:'/api/app_api/start_ocpp/',
  getRemote_stop:'/api/app_api/stop_ocpp/',
  getLogin:'/api/app_api/appuser-login/',
  getRemoteResetHard:'/text/remote_reset_hard',
  getRemoteResetSoft:'/text/remote_reset_soft'
};
export function getChargeInfo() {
  return http.get(`${Public.getChargeInfo}`);
}
export function getRemote_start(data) {
  return http.post(`${Public.getRemote_start}`, data);
}
export function getRemote_stop(data) {
  return http.post(`${Public.getRemote_stop}`, data);
}
export function getLogin(data) {
  return http.post(`${Public.getLogin}`, data);
}
export function getRemoteResetHard(data) {
  return http.post(`${Public.getRemoteResetHard}`, data);
}
export function getRemoteResetSoft(data) {
  return http.post(`${Public.getRemoteResetSoft}`, data);
}

