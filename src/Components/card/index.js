import React from 'react'
import { Wrapper } from './styles'
import CardRow from '../cardRow'

export default function FeatureCard({
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
