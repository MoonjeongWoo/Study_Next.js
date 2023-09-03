;'use client'
import Image from "next/image";
import { useState } from "react";



export default function List() {
    let products = ['토마토','파스타','코코넛'];
     
    const [count, setCount] = useState([0,0,0]);
    

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
                        <span> {count[index]} </span>
                        <button onClick={()=>{
                            let copy = [...count]
                            copy[index]++
                            setCount(copy)
                        }}>+</button>
                        <button onClick={()=>{
                            let copy = [...count]
                            copy[index]--
                            setCount(copy)
                        }}> - </button>
                        </div>
                        </>
                        
                    )
                })
            }
        </div>
    )
}

/*
array를 쓰면 array 자체가 변수에 담기는게 아닌, arry 주소만 담기기 때문에 array 안의 데이터 까지
변경이 되지 않는다,
그래서 쓰려면, 일단 스프레드 오퍼레이터,... 을 이용해서 배열 자체를 벗겨내 복사를 한다음에,
array 데이터를 바꿔주고 그 다음 바뀐 데이터를 state 로 바꿔주는 방식

객체도 가능함
*/ 