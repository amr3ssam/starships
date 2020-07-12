import React from 'react'
import { Wrapper, PropertyName, PropertyContent, ContentWrapper } from './styles'
import ProgressBar from '../progressBar'

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
