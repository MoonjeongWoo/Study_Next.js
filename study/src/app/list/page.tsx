import Image from "next/image";



export default function list() {
    let products = ['토마토','파스타','코코넛'];
    
    return(
        <div>
            {
                products.map((x,index)=>{
                    return(
                        <div className="food" key={index}>
                            <h4 >
                            {x}
                            </h4>
                            <Image src={`/food${index}.png`} width={500} height={500} alt={""}></Image>
                        </div>
                    )
                })
            }
        </div>
    )
}