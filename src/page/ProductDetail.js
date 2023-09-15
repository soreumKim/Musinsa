import { Row, Col, Button, Form } from 'react-bootstrap'
import '../App.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const getProductsDetail = async() => {
        //let url = `http://localhost:5000/products/${id}`
        let url = `https://my-json-server.typicode.com/soreumKim/Musinsa/products/${id}`
        let response = await fetch(url); 
        let data = await response.json();
        //console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        getProductsDetail()
    }, [])

  return (
    <>
      <Row className='productDetail'>
        <Col className='productDetailImg'>
          <img src={product?.img} alt="" />
        </Col>
        <Col className='detailInfo'>
          <div className="new">{product?.new===true?'[신상품]':''}</div>
          <div className="title">{product?.title}</div>
          <div className="content">{product?.content}</div>
          <div className="price">{product?.price}</div>
          <div className="choice">{product?.choice===true?'Conscious Choice':''}</div>

          <Form.Select>
            <option>Size</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
          </Form.Select>

          <Button variant='dark'>Dark</Button>
        </Col>
      </Row>
    </>
  )
}

export default ProductDetail