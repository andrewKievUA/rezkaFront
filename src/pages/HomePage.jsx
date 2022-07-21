import React, { useState, useEffect } from 'react'
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import {useCollectionData} from "react-firebase-hooks/firestore";
import BasicTable from './BasicTable'
import Button from '@mui/material/Button';



import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

const data1 = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
  ]


const firebaseConfig = {
    apiKey: "AIzaSyDMAmV2aSGJCJznUs-8mPGHmFEh2xTxlCE",
    authDomain: "rezka-8c052.firebaseapp.com",
    projectId: "rezka-8c052",
    storageBucket: "rezka-8c052.appspot.com",
    messagingSenderId: "569944317499",
    appId: "1:569944317499:web:42ef3fd3df6b5a5d6f061e"
  }

export default function HomePage() {

    let today = new Date()


    let [count, setCount] = useState(today.getDate());
    let [month, setMonth] = useState(today.getMonth()+1);

    console.log(today.getMonth())
 
    const dayIncrease = ()=>{
        setCount(count++)    
        setCount(count++)
    }

    const dayDecrease =  ()=>{
        setCount(count--)    
        setCount(count--)}

        const monthIncrease = ()=>{
        setMonth(month++)
        setMonth(month++)
    }

    const monthDecrease =  ()=>{
        setMonth(month--)    
        setMonth(month--)
    }


    const style = {
        width: '100%',
       
        bgcolor: 'background.paper',
      };

    firebase.initializeApp(firebaseConfig)
    const firestore = firebase.firestore()

    const requestMonth = (month<10?'0':'') + month 
    const requestDate = (count<10?'0':'') + count 
    const week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    
    console.log(week[today.getDay()-1])
    let dateForUser= new Date(`2022-${requestMonth}-${requestDate}`)


    const message  = useCollectionData(firestore.collection(`2022-${requestMonth}-${requestDate}`))

    console.log("message",[message][0][0],"data1",data1);
      
 
  return (

<>      

<List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>месяц
      <Button variant="outlined"  onClick={monthDecrease}> {"<"} </Button> 
        {month}
        <Button variant="outlined"  onClick={monthIncrease}> {">"} </Button> 
        {dateForUser.toLocaleString('default', { month: 'long' })}
      </ListItem>
      <ListItem button divider>день
      <Button variant="outlined"  onClick={dayDecrease}> {"<"} </Button> 
        {count}
        <Button variant="outlined"  onClick={dayIncrease}> {">"} </Button> 
        {week[dateForUser.getDay()]}
      </ListItem>   
    </List>



     
    {message[0]?null  :null} 


    <BasicTable data={[message][0][0]}/>
     <Paper>
        <Chart data={message[0]? [message][0][0]:[{},{}]}>
          <ArgumentAxis />
          <ValueAxis />
          <Title
            text="Датчик вверху перед"
          />
          <BarSeries
            valueField="val1"
            argumentField="time"
          />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>


      <Paper>
        <Chart data={message[0]? [message][0][0]:[{},{}]}>
          <ArgumentAxis />
          <ValueAxis />
          <Title
            text="Датчик влнизу перед"
          />
          <BarSeries
            valueField="val2"
            argumentField="time"
          />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>

      
    <Paper>
        <Chart data={message[0]? [message][0][0]:[{},{}]}>
          <ArgumentAxis />
          <ValueAxis />
          <Title
            text="Датчик вверху зад"
          />
          <BarSeries
            valueField="val3"
            argumentField="time"
          />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>

      
    <Paper>
        <Chart data={message[0]? [message][0][0]:[{},{}]}>
          <ArgumentAxis />
          <ValueAxis />
          <Title
            text="Датчик внизу зад"
          />
          <BarSeries
            valueField="val4"
            argumentField="time"
          />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>



    


</>
  )
}
