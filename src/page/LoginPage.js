import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({setAuthenticate}) => {

  const navigate = useNavigate();

  //submit 버튼을 클릭할 때마다 form이 매번 새로고침되므로 콘솔창에서 텍스트가 사라짐
  //form을 쓸 때는 form이 새로고침되는 것을 막아주는 e.preventDefault()를 써준다

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Login user function issue")
    setAuthenticate(true)
    navigate('/')
  }

  return (
    <div className='formArea'>
      {/* 버튼 type이 submit일 경우에는 onClick 이벤트를 주지 않음 */}
      <Form onSubmit={(e)=>loginUser(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="아이디 기억하기" />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  )
}

export default LoginPage