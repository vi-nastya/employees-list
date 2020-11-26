import employeesData from './data'
class Api {
  getEmployees() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(employeesData)
      }, 500)
    })
  }
}

const api = new Api()
export default api
