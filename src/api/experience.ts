import ajax from '../utils/ajax'
export {
  getExperience,
}

async function getExperience () {
  return await ajax('get', 'static/experience.json')
}


