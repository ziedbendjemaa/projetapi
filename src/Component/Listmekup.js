import React from 'react'
import { useSelector } from 'react-redux'
import Cardmekup from './Cardmekup'


const Listmekup = () => {
    const newdata = useSelector(state => state.allnewdata.newdata)
    return (
        <div>
           {
               newdata.map((el,i)=><Cardmekup el={el} key={i}/>)
           }
        </div>
    )
}

export default Listmekup
