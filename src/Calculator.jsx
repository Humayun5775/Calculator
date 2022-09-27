import React from 'react'
import { useState } from 'react'
import calculation from './calculation'
const Calculator = () => {
    const list = [['7','8','9','+'],['4','5','6','-'],['1','2','3','*'],['. ','0',', ','/'],['[',']','=','%']] 
    const [screen, setscreen] = useState("")


    const onchange = (val) => 
    {
        setscreen((screen2) => screen2 + val)
    }
    
    const clear = () => 
    {
        setscreen((screen2) => "")
    }
    
    const calresult = (element) => 
    {
       var result =  calculation(element)
       setscreen((screen2) => result)
    }
    return (
        <div>Calculator
            <div>
            <div>History</div>
                <textarea></textarea>
            </div>
            <div>
            <div>Screen</div>
                <textarea value={screen}></textarea>
            </div>
            <div>
                <input type='button' onClick={clear} value="Clear"/>
                <input type='button' value="Hitory"/>
            </div>
            {
                list.map((item,index1)=>{
                    return(
                <div>
                {
                    item.map((element,index2)=>{
                        return(
                            <input type='button' onClick={(event)=>event.target.value!=='='?onchange(event.target.value):calresult(screen)} key={index1}  value={element}/>
                        )
                    })
                }
                </div>
                )                    
                })
            }
            </div>
    )
}

export default Calculator