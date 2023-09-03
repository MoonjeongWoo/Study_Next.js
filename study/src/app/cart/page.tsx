'use client' // 클라이언트 컴포넌트

import age from "./DATA"
import { HELLO } from "../abc/def/hello"

export default function Cart() {

  let 장바구니 =['Tamtoes','Pasta']
    return (
      <div>
        <h4 className="title">Cart</h4>
        <HELLO></HELLO>
        <CART items ={장바구니[0]}></CART>
        <CART items ={장바구니[1]}></CART>
        <Banner items = "롯데"></Banner>
      </div>
    )
  }

export function CART(props:any){
    return(
        <div className="cart-item">
          <p>상품명 {props.items}</p>
          <p>$40</p>
          <p>1개</p>
          <Button bgcolor="red"></Button>
        </div>
    )
  }
 

export function Banner(props:any) {
  return(
    <div>
      <h5>
        {props.items}카드 결제 행사중
      </h5>
    </div>
  )
}

export function Button(props : any){
  return(
    <div>
      <button style={{background: props.bgcolor, color:"white"}}>
        결제
      </button>
    </div>
  )
}
  //CSR => 자바스크립트 기능널기 불가능 하이드레이션 필요
  //SSR => 자바스크립트 기능넣기 가능 

  /*
    큰 화면은 SSR 나머지는 디테일한 부분은 CSR 필요
  */ 