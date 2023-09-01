'use client' // 클라이언트 컴포넌트

import age from "./DATA"
import { HELLO } from "../abc/def/hello"

export default function Cart() {
    return (
      <div>
        <h4 className="title">Cart</h4>
        <HELLO></HELLO>
        <CART></CART>
        <CART></CART>
      </div>
    )
  }

export function CART(){
    return(
        <div className="cart-item">
          <p>상품명 {age}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
  }
 
  //CSR => 자바스크립트 기능널기 불가능 하이드레이션 필요
  //SSR => 자바스크립트 기능넣기 가능 

  /*
    큰 화면은 SSR 나머지는 디테일한 부분은 CSR 필요
  */ 