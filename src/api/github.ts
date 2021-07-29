import ajax from '../utils/ajax'

export {
  getMyRepo,
  GithubData,
}

type GithubData = {
  id: number,
  name: string,
  html_url: string,
  description?: string
}

async function getMyRepo (): Promise<GithubData> {
  return await ajax('get', 'https://api.github.com/users/HelloJunWei/repos')
}
