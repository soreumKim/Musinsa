import { Container } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import LoginPage from './page/LoginPage';
/* import UserPage from './page/UserPage'; */
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute'

//1. 전체상품 페이지 / 로그인 / 상품상세페이지
// - src 폴더에 페이지 폴더를 생성해서 작업할 페이지를 생성
// - App.js에 연결
//1-1. 네비게이션 바

//2. 전체상품페이지에서는 기본 상품이 진열되어있음
//npm install -g json-server
//새 터미널을 열어서 json-server --watch db.json --port 5000
//포트 번호는 3000번만 아니면 됨
//서버연결이 되면 리소스 정보를 ctrl을 누르고 클릭해서 data정보를 먼저 확인

//3. 로그인 버튼을 클릭하면 로그인 페이지가 나옴
//4. 상품을 클릭했을 때 로그인 상태면 -> 상세페이지가 보이고, 로그인 상태가 아니면 -> 로그인 페이지가 보이도록 함.
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  /* 
    useEffect(()=>{})
     - 인자로 함수를 받음 -> 콜백함수
     - Mount --> 화면에 첫 렌더링
     - Update --> 다시 렌더링
     - UnMount --> 화면에서 사라짐
    
    useEffect(()=>{},[])
     -> 화면에 처음 렌더링될 때 실행 -> 빈 배열 값을 전달하면 화면에 첫 렌더링할 때만 실행

    useEffect(()=>{},[value])
     --> value의 값이 바뀔 때마다 실행
  */
  useEffect(()=>{
    console.log(authenticate)
  }, [authenticate])
  return (
    <Container>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />}/>
        {/* <Route path='/product/:id' element={<ProductDetail />}/> */}

        {/* privateRoute 설정 */}
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />}/>
        <Route path='/login' element={<LoginPage setAuthenticate={setAuthenticate} />}/>
        {/* <Route path='/user' element={<UserPage />}/> */}
      </Routes>
    </Container>
  );
}

export default App;
