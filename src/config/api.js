import axios from 'axios'
import toNumber from 'lodash/toNumber'

let baseUrl = 'http://localhost:8080/api'

let convertObjectToFormData = (items) => {
  const formData = new FormData()
  for (let key in items) {        
    formData.append(key, items[key])
  }  
  return formData
}

let convertObjectToUrlData = (items) => {
  const params = new URLSearchParams()
  for (let key in items) {
    if (items[key]) {
      params.append(key, items[key])
    }
  }
  return params
}

let config = {
  protocol: 'http',
  address: 'localhost',
  port: '8080',
  basePath: '',
  axiosConfig: {
    baseURL: baseUrl,
    headers: {},
  },
  getEndpointUrl () {
    return this.protocol + '://' + this.address + (this.port ? (':' + this.port) : '') + (this.basePath ? this.basePath : '')
  }
}

let $http = axios.create(config.axiosConfig)

let sendPost = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.post(url, convertObjectToFormData(payload), headers)
      .then((handleSuccess) => {
        if (handleSuccess.data.code === 200 || handleSuccess.data.hasOwnProperty('code')) {
          reject({message: handleSuccess.data.message, code: handleSuccess.data.code})
        } else {
          resolve(handleSuccess.data)
        }
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendPostJSON = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.post(url, payload)
      .then((handleSuccess) => {
        if (handleSuccess.data.code === 200 || handleSuccess.data.hasOwnProperty('code')) {
          reject({message: handleSuccess.data.message, code: handleSuccess.data.code})
        } else {
          resolve(handleSuccess.data)
        }
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendPut = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.put(url, convertObjectToUrlData(payload), headers)
      .then((handleSuccess) => {
        if (handleSuccess.data.code === 200 || handleSuccess.data.hasOwnProperty('code')) {
          reject({message: handleSuccess.data.message, code: handleSuccess.data.code})
        } else {
          resolve(handleSuccess.data)
        }
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendPutJSON = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.put(url, payload, headers)
      .then((handleSuccess) => {
        if (handleSuccess.data.code === 200 || handleSuccess.data.hasOwnProperty('code')) {
          reject({message: handleSuccess.data.message, code: handleSuccess.data.code})
        } else {
          resolve(handleSuccess.data)
        }
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendGet = (url, headers = null) => {
  let pageCount = null
  return new Promise((resolve, reject) => {
    $http.get(url, headers)
      .then((handleSuccess) => {
        let responseURL = handleSuccess.request.responseURL
        let url = new URL(responseURL)
        let urlString = (url.origin + url.pathname)
        if (handleSuccess.data.code === 200 || handleSuccess.data.hasOwnProperty('code')) {
          reject({message: handleSuccess.data.message, code: handleSuccess.data.code})
        } else {          
          resolve(handleSuccess.data)
        }
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendDelete = (url, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.delete(url, headers)
      .then((handleSuccess) => {
        if (handleSuccess.data.code === 200 || handleSuccess.data.hasOwnProperty('code')) {
          reject({message: handleSuccess.data.message, code: handleSuccess.data.code})
        } else {
          resolve(handleSuccess.data)
        }
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

export default config

export { config }

export { sendPost }

export { sendPostJSON }

export { sendGet }

export { sendPut }

export { sendPutJSON }

export { sendDelete }
