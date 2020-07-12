import React from 'react';



export default class App extends React.Component {
  state = {
    tableData: [],
    buttonDisabled: true,
    previous: 0,
    next: 1
  }
  componentDidMount() {
    this.fetchPage("https://swapi.dev/api/starships/")
  }
  fetchPage = (url) => {

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
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>crew</th>
              <th>passengers</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData !== undefined && tableData !== null && tableData.length > 0 ? 
                tableData.map(function (item, i) {
                  return <tr>
                    <td>{item.name}</td>
                    <td>{item.crew}</td>
                    <td>{item.passengers}</td>
                  </tr>
                })
                : null
            }
          </tbody>
        </table>
        <section className="pagination">
          <button disabled={buttonDisabled || previous === null} onClick={() => this.fetchPage(previous)} className="previous-page-btn">previous</button>
          <button disabled={buttonDisabled ||next === null} onClick={() => this.fetchPage(next)} className="next-page-btn">next</button>
         </section>
      </div>
    )
  }
}