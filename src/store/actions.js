import { sendGet, sendPatch, sendPatchJSON } from '../config/api'

let fetchToken = ({commit}) => {
  return new Promise((resolve, reject) => {
    sendGet('/auth/token', null)
      .then((response) => {
        commit('SET_TOKEN', response.token)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

let fetchSchedule = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    sendGet('/schedule/' + payload.schedule_id, null)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

let updateSchedule = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    sendPatchJSON('/schedule/' + payload.schedule_id, payload.schedule, null)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

let fetchSchedules = ({commit}) => {
  return new Promise((resolve, reject) => {
    sendGet('/schedule', null)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { fetchToken }
export { fetchSchedule }
export { updateSchedule }
export { fetchSchedules }