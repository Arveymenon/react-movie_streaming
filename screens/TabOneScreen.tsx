import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import TileCard from './../components/homescreen/featured_card'

import { styles } from './../app_css'
import { Button } from '@material-ui/core';

var number = 0

export default function TabOneScreen() {

  var [num, count] = React.useState(0)
  console.log(num)
  return (
    <TileCard name={"Counting some: "} count={num} counting={count}>
      <Button onClick={()=>{count(num + 1)}}>Count Up</Button>
    </TileCard>
  );
}

