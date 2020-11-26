class Api {
  getEmployees() {
    const data = {
      // ...
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 500)
    })
  }
}

const api = new Api()
export default api
