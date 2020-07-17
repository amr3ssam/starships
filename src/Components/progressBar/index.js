import React from 'react'
import { Wrapper, ContentWrapper} from './styles'

// function to create the progress bar with two colours
// white background colour, blue one for the progress and grey if unknown

export default function progressBarComponent({
  progress
}) {
    return (
        <Wrapper disabled={progress === "unknown" ? true : false} >
            <ContentWrapper progressNumber={progress === "unknown" ? 0 : progress} />
        </Wrapper>
    )
}
