import axios from 'axios'

const url = 'https://dust.giftchain.org/api'

export default {
  login (username, password) {
    return axios.post(`${url}/login`, {
      username,
      password
    }, {
      headers: { 'content-type': 'application/json' }
    })
  },
  register (username, password) {
    return axios.post(`${url}/register`, {
      username,
      password
    }, {
      headers: { 'content-type': 'application/json' }
    })
  },
  setup_planet (option) {
    return axios.post(`${url}/user/planet`, {
      name: option.name,
      description: option.description,
      demo_url: option.demo,
      github_url: option.git,
      team_intro: option.team,
      email: option.email
    }, {
      headers: {
        'content-type': 'application/json',
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  build (pname, dnum) {
    return axios.post(`${url}/user/build`, {
      planet_name: pname,
      dust_num: dnum
    }, {
      headers: {
        'content-type': 'application/json',
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  get_dust () {
    return axios.post(`${url}/user/get-dust`, null, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  spy (name) {
    return axios.get(`${url}/user/spy/${name}`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  rank_planets () {
    return axios.get(`${url}/rank/planets`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  rank_builders () {
    return axios.get(`${url}/rank/builders`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  rank_owners () {
    return axios.get(`${url}/rank/owners`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  owned_planets () {
    return axios.get(`${url}/profile/owned-planets`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  },
  builded_planets () {
    return axios.get(`${url}/profile/builded-planets`, {
      headers: {
        'X-Auth-Token': window.cookieStorage.getItem('token')
      }
    })
  }
}
