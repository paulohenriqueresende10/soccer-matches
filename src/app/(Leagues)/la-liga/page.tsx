import { filterLeague } from "@/api/matches"
import LeagueTable from "@/components/LeagueTable"


const LaLiga = async () => {
  const getLaLiga = await filterLeague('Primera Division')

  return (
    <div className='w-full'>
      {getLaLiga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default LaLiga