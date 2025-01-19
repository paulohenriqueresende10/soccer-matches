import { filterLeague } from '@/api/matches'
import LeagueTable from '@/components/LeagueTable'

const Championship = async () => {
  const getChampionship = await filterLeague('Championship')
  return (
    <div className='w-full'>
      {getChampionship.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Championship