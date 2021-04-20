import React, {useEffect, useState} from 'react';
import { useTracker } from 'meteor/react-meteor-data'
import { Players } from "/imports/api/collections"
import Home from './Home.jsx'
import About from './About.jsx'
import { Route, Link } from "react-router-dom"


export const App = () => {

  //const players = useTracker(() => Players.find({week: 1}).fetch());

  //const [players, useTracker]=useState();
  //let players=useTracker(() => Players.find({week: 1}).fetch());
  const [week, setWeek] = useState(1);
  const [players, setPlayers] = useState();//.then((res)=>setPlayers(Players.find({week: parseInt(week)}).fetch()));
  //const ref="selector"

  useEffect(()=>{
      setPlayers(Players.find({week: week}).fetch());
      console.log(players);
  }, [week])

  const changeWeek =async weekValue =>{
      setWeek(parseInt(weekValue));
      //setPlayers(await Players.find({week: parseInt(week)}).fetch());
      console.log(Players.find({week: parseInt(week)}).fetch());
  };

  //const { players, week } = useTracker(() => {
  //    const players=Players.find({week: week}).fetch()
  //},[week])

  return (
    <div className="App">
        <Route exact path="/home" component={() => <Home players={players} /*ref={ref}*/ changeWeek={changeWeek} />}/>
        <Route exact path="/about" component={About}/>
    </div>
  );
}

