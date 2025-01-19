import { apiOptions, matchesType } from "@/types"
import axios from "axios";

const options: apiOptions =  {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_MATCHES_TOKEN,
    "Content-Type": "application/json",
  },
}
export const getMatchesfootball = async () => {
  const matchData = await axios(`${process.env.API_MATCHES_URL}/matches`,options);
  
  return matchData.data;
}

const todayDate = new Date()
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear()
const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
const day = String(getDateMonth.getDate()).padStart(2, '0');

const yesterday = [year, month, day].join('-');
  
export const getMatchesfootballFinished = async () => {
  const matchData = await axios(`${process.env.API_MATCHES_URL}/matches?date=${yesterday}`,options);
  return matchData.data;
}

export const filterLeague = async (filterData: string) => {
  const getEnglishLeague = await getMatchesfootball();
  const filterPremierLeague:matchesType[] = getEnglishLeague?.matches;
  const getData = filterPremierLeague.filter((item) => item.competition.name === filterData);

  return getData
}

export const getTeams = async () => {

}