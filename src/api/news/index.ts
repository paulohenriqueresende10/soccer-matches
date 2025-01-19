
export const getNewsInfo = async () => {
    const newsData = await fetch(`${process.env.API_URL_NEWS}/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,{next:{revalidate:30}})
    return newsData.json()
  }