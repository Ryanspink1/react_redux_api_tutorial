let axios = require('axios');

export let startDevSearch = () => {
  return {
    type: 'Start_Dev_Search'
  }
}

export let endDevSearch = (devsArray) => {
  return {
    type: 'End_Dev_Search',
    devsArray
  }
}

export let fetchDev = () => {
  let url = "https://api.github.com/search/users?q=language:javascript+location:lagos&sort=repositories&order=desc"
  return (dispatch) => {
    dispatch(startDevSearch())
    return axios.get(url).then(
      (response) => {
        let devsArr = response.data.items.slice(0,10)
        dispatch(endDevSearch(devsArr))
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
