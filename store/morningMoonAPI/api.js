import axios from "axios"
const morningMoonAPI = axios.create({
  baseURL: "https://morning-moon-26883.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return morningMoonAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return morningMoonAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_user_list(payload) {
  return morningMoonAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return morningMoonAPI.post(`/api/v1/user/`, payload.data)
}
function api_v1_user_read(payload) {
  return morningMoonAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return morningMoonAPI.put(`/api/v1/user/${payload.id}/`, payload.data)
}
function api_v1_user_partial_update(payload) {
  return morningMoonAPI.patch(`/api/v1/user/${payload.id}/`, payload.data)
}
function api_v1_user_delete(payload) {
  return morningMoonAPI.delete(`/api/v1/user/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return morningMoonAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return morningMoonAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return morningMoonAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return morningMoonAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return morningMoonAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return morningMoonAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return morningMoonAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return morningMoonAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_read(payload) {
  return morningMoonAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return morningMoonAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return morningMoonAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_read,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
