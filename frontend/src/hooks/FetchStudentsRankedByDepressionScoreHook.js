import storage from "../storage";

const FetchStudentsRankedByDepressionScoreHook = async ({ URL }) => {
  const getCurrentUserState = (await storage.getAllDataForKey('currentUser'))[0]
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getCurrentUserState?.authToken}`,
      'Cookie': getCurrentUserState?.refreshToken
    }
  })
    .then(async response => response.json())
}

export default FetchStudentsRankedByDepressionScoreHook