import React from 'react'
import { Wrapper } from './styles'
import CardRow from '../cardRow'

// function to create the main card component taken property of the starobject 
// then map the objec properties to row of the card passing row name and content
// in name property name has to be always capital in the beginning
// in crew and passengers if value = 0 then show None

export default function cardComponent({
  starshipObject
}) {
    return (
        <Wrapper >
            <CardRow name={"Name: "} content={starshipObject.name.charAt(0).toUpperCase() + starshipObject.name.slice(1)} />
            <CardRow name={"Crew: "} content={parseInt(starshipObject.crew) === 0 ? "None" : starshipObject.crew} />
            <CardRow name={"Passengers: "} content={parseInt(starshipObject.passengers) === 0 ? "None" : starshipObject.passengers}/>
            <CardRow name={"Hyperdrive Rating: "} content={starshipObject.hyperdrive_rating} notText={true} />
        </Wrapper>
    )
}
