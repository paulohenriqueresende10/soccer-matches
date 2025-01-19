import { getMatchesfootball, getMatchesfootballFinished } from "@/api/matches"
import Status from "@/components/Status"
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default async function Home() {
  const getDatas =  await getMatchesfootball()
  const getDatasFinished = await getMatchesfootballFinished()

  const matchesDatas = getDatas?.matches
  const matchesDatasFinished = getDatasFinished?.matches

  const nd = new Date()
  const dateConvert = format(nd, "EEEE' • 'd' de 'MMMM ' • 'k'h'mm", {
    locale: ptBR,
  })

  return (
    <section className="px-2 md:px-4 md:w-full">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="text-md md:text-xl font-bold">Partidas</h1>
        <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm">
          <p>{`${dateConvert}`}</p>
        </div>
      </div>
      <Status matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} />
    </section>
  )
}
