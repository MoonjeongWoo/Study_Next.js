import Image from 'next/image'

export default function Home() {

    let name = "문정우"
  return (
    <div>
      <div>문정우 홈페이지 입니다.</div>
      <div> 만나서 반가워요</div>

      <h4 className='title' style={{ color : 'red', fontSize : '20px' }}>문정우 후레쉬</h4>
      <p className='title-sub'>by dev {name}</p>
    </div>


  )
}
