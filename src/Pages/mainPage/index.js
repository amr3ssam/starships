import React from 'react';
import Card from '../../Components/card'
import { Wrapper, ContentWrapper, Line, FooterWrapper, PreviousButton,NextButton} from './styles'

export default class mainPage extends React.Component {
    state = {
        tableData: [],
        buttonDisabled: true,
        previous: 0,
        next: 1
    }
    componentDidMount() {
        this.fetchPage("https://swapi.py4e.com/api/starships/")
    }
    fetchPage = (url) => {
        this.setState({
            buttonDisabled: true   
            })
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log("data", data)
                this.setState({
                    tableData: data.results,
                    totalCount: data.count,
                    previous: data.previous,
                    next: data.next,
                    buttonDisabled: false
                })
            })
            .catch(console.log)
    }
    render() {
        const { tableData, buttonDisabled, previous, next } = this.state;
        return (
            <Wrapper>
                <ContentWrapper>
                    {
                        tableData !== undefined && tableData !== null && tableData.length > 0 ?
                            tableData.map(function (item, i) {
                                return <Card starshipObject={item} />
                            })
                            : null
                    }
                </ContentWrapper>
                <Line />
                <FooterWrapper>
                    <PreviousButton  disabled={buttonDisabled || previous === null} onClick={() => this.fetchPage(previous)}>previous</PreviousButton>
                    <NextButton  disabled={buttonDisabled || next === null} onClick={() => this.fetchPage(next)} >next</NextButton>

                </FooterWrapper>
            </Wrapper>
        )
    }
}