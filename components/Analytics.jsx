import React from 'react'
import Postlist from './Pstlist'
import { Button, Segment } from 'semantic-ui-react'

const Cotton = () => {
  return (<Postlist />)
}
const Analytics = () => (
  <div>
    <Segment inverted>
      <Button inverted>Standard</Button>
      <Button inverted color='red' onClick={Cotton}>
        Red
      </Button>
    </Segment>
  </div>


)

export default Analytics;
