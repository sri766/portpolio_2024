import { HeartIcon } from 'lucide-react'
import Docker from './Docker'

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="text-xl text-slate-500 flex flex-col justify-center items-center">
            <span className="ml-2 flex-inline">
                Made with 
                <HeartIcon className="text-purple-500 h-6 w-6 inline m-2" />
                by Srisanth
            </span> 
            <span className='text-lg'>version 3</span>
        </div>
        <Docker />
    </div>
  )
}
