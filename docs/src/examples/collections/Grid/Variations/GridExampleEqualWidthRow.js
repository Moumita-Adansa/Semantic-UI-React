import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleEqualWidthRow = () => (
  <Grid columns='equal'>
    
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleEqualWidthRow
