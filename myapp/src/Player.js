import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Player =({ name,team,nationality,jerseyNumber,age,image }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={name}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player
