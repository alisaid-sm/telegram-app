import axios from 'axios'
// const { IP } = require('../../helper/env')

const state = () => {
  return {
    all: {
      data: [],
      isLoading: false
    }
  }
}

const getters = {
  detailUser (state) {
    return state.all
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.all.data = payload
  }
}

const actions = {
  getDetailUser (context, payload) {
    const name = localStorage.getItem('name')
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/api/v1/users/getdetail/${name}`)
        .then((response) => {
          context.commit('SET_ALL_DATA', response.data.data[0])
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  updateProf (context, payload) {
    const name = localStorage.getItem('name')
    return new Promise((resolve, reject) => {
      axios.patch(`http://localhost:3000/api/v1/users/updatepatch/${name}`, payload)
        .then((response) => {
          console.log(response.data.message)
          resolve(response.data.message)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
