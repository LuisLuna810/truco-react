import suma from '../assets/add.png'
import resta from '../assets/minus.png'

export function Botones({handleIncrement, handleDecrement}){
    return(
        <div className="grid grid-cols-2 gap-2">
            <button className="text-xs bg-slate-900 focus:outline-none" onClick={()=>{handleIncrement()}}>
                <img src={suma} alt="asd"  className='w-6 h-6'/>
            </button>
            <button className="text-xs bg-slate-900 focus:outline-none" onClick={()=>{handleDecrement()}}>
                <img src={resta} alt="asd"  className='w-6 h-6'/>
            </button>
        </div>
    )
}