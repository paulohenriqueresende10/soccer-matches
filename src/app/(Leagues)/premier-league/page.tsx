import { filterLeague} from "@/api/matches"
import LeagueTable from "@/components/LeagueTable"

const English = async () => {
  const getEnglishLeague = await filterLeague('Premier League')

  return (
    <div className='w-full'>
      {getEnglishLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default English