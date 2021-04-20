import React from 'react'
import Nav from './Nav.jsx'
import NavItem from './NavItem.jsx'
import List from './List.jsx'
import ListItem from './ListItem.jsx'
import InklingGraphic from "./InklingGraphic"
import ChooseWeek from "./ChooseWeek";

export default function Home({ players, /*ref ,*/ changeWeek }) {
  return (
    <div className="relative divide-y divide-white-100">
      <Nav>
          <ChooseWeek changeWeek={changeWeek}/*ref={ref}*//>
        <div className="flex items-stretch lex-no-shrink flex-grow">
          <div className="flex items-stretch justify-end ml-auto">
            <NavItem href="/home" isActive>Home</NavItem>
            <NavItem href="/about">About</NavItem>
          </div>
        </div>
      </Nav>
      <div className="relative flex flex-row">
        <InklingGraphic/>
        <List>
          {players.map((player) => (
            <ListItem key={player.discordid+player.week} player={player} />
          ))}
        </List>
      </div>
    </div>
  )
}