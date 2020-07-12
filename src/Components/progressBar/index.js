import React from 'react'
import { Wrapper, ContentWrapper} from './styles'

export default function CardRow({
  progress
}) {
    return (
        <Wrapper disabled={progress === "unknown" ? true : false} >
            <ContentWrapper progressNumber={progress === "unknown" ? 0 : progress} />
        </Wrapper>
    )
}
