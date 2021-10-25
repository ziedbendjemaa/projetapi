import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Cardmekup = ({el}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.url} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}

export default Cardmekup
