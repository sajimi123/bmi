import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Landingpage() {
const[height,setHeight]=useState("")
const[weight,setWeight]=useState("")
const[bmi,setBmi]=useState(null)
const[message,setMessage]=useState("")


 
const calculateBMI=()=>{
    if(height==""|| weight==""){
        setMessage("Please Enter your height and weight")
        setBmi=(null)
      return;
    }


const result=weight/(height*height)
setBmi(result.toFixed(2))
 if (result < 18.5) {
      setMessage("Underweight");
    } else if (result < 24.9) {
      setMessage("Normal weight");
    } else if (result < 29.9) {
      setMessage("Overweight");
    } else {
      setMessage("Obese");
    }};
const resetBMI = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };



  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center"
  style={{ backgroundColor: "#f1ceab" }}>
      <div className="bg-bisque p-5 rounded-4 shadow-lg"
    style={{ width: "650px" }}>
        <h1  className="text-center mb-4 fw-bold"
      style={{ color: "brown" }}>BMI CALCULATOR</h1>
<Row>
    <Col>  
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Height(m)</Form.Label>
        <Form.Control onChange={(e)=>setHeight(e.target.value)} type="number"  value={height} placeholder="Enter your Height" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Weight(kg)</Form.Label>
        <Form.Control onChange={(e)=>setWeight(e.target.value)} type="number"  value={weight} placeholder="Enter your Weight" />
      </Form.Group>
     
      <Form.Text><Button onClick={calculateBMI} variant="dark" type="button">
        Calculate BMI
      </Button></Form.Text>
     <Form.Text> <Button onClick={resetBMI} variant="dark" type="button">
        Reset
      </Button></Form.Text>
       {bmi && (
          <div className="text-center mt-4">
            <Form.Text>
              Your BMI: <strong>{bmi}</strong>
            </Form.Text><br/>

            <Form.Text className="fs-5">
              Result: <strong>{message}</strong>
            </Form.Text>
          </div>
        )}
    </Form>
    
    </Col>
</Row>
    </div></div>
  )
};

export default Landingpage
