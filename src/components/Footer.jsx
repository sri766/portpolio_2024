import { HeartIcon } from 'lucide-react'
import Docker from './Docker'

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="text-2xl text-slate-500 flex justify-center items-center">
            <span className="ml-2">
                Made with 
                <HeartIcon className="text-red-500 h-6 w-6 inline m-2" />
                by Srisanth
            </span> 
        </div>
        <Docker />
    </div>
  )
}
