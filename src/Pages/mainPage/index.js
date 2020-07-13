import React from 'react';
import { Wrapper, ContentWrapper, Line, FooterWrapper, PreviousButton,NextButton} from './styles'
import Card from '../../Components/card'

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
                
                this.setState({
                    tableData: data.results,
                    totalCount: data.count,
                    previous: data.previous,
                    next: data.next,
                    buttonDisabled: false
                })
            })
    }

    renderCard = () => {
        const { tableData } = this.state;

        if (tableData && tableData.length > 0) {
            return tableData.map((item) => {
                        return <Card starshipObject={item} />
                    })
        } else {
            return null;
        }              
    }

    render() {
        const {buttonDisabled, previous, next } = this.state;
        return (
            <Wrapper>
                <ContentWrapper>
                    {this.renderCard()}
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