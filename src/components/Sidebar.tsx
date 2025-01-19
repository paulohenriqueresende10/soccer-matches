import {FC} from 'react'
import LinkSide from './LinkSide'
import { Leagues } from '@/leagues';

const Sidebar:FC = async() => {
  return (
    <section className='px-2 md:px-4 py-2 bg-[rgb(40,46,58)] rounded-md'>
      <div>
        <h1 className='font-bold text-xl mb-4 text-teal-400'>Ligas</h1>
        <ul className='space-y-2'>
          {
            Leagues.map((league) => (
              <div key={league?.id} className='flex'>
                <LinkSide href={league.href} name={league?.name} src={league?.emblem} />
              </div>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Sidebar