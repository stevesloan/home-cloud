import React from 'react'
import HelloChild from './HelloChild'
import Button from 'react-bootstrap/Button';
const Hello = () => (
  <div>
    <div>Hello</div>
    <Button>Test</Button>
    <HelloChild />
  </div>
)

export default Hello
