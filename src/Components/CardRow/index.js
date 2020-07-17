import React from 'react'
import { Wrapper, PropertyName, PropertyContent, ContentWrapper } from './styles'
import ProgressBar from '../progressBar'


// function to create each card row 
// taken three properties name for the card title, content for the row value
// and notText do know if it's a text value or it's the progree bar


export default function CardRow({
  name,content , notText = false
}) {
    return (
        <Wrapper >
            <PropertyName>{name}</PropertyName>
            {
                notText !== true ? 
                    <PropertyContent>{content}</PropertyContent>
                    :
                    <ContentWrapper>
                        <ProgressBar progress={content} />
                    </ContentWrapper>
            }
        </Wrapper>
    )
}
