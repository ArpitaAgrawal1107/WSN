import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Chart from 'react-google-charts'
class Pstlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
             
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.state({data : response.data})
        })
        .catch(error =>
            {
                console.log(error)
            })
    }
    render() {
        const {data} =this.state
        return (
            <div>
                 <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'dogs'],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Popularity',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
            </div>
        )
    }
}

export default Pstlist;
