;'use client'
import Image from "next/image";
import { useState } from "react";



export default function List() {
    let products = ['토마토','파스타','코코넛'];
     
    const [count, setCount] = useState(0);


    return(
        <div>
            {
                products.map((x,index)=>{
                    return(
                        <>
                        <div className="food" key={index}>
                            <h4 >
                            {x}
                            </h4>
                            <Image src={`/food${index}.png`} width={500} height={500} alt={""}></Image>
                        <span> {count} </span>
                        <button onClick={()=>{
                            setCount(count+1)
                        }}>+</button>
                        </div>
                        </>
                        
                    )
                })
            }
        </div>
    )
}