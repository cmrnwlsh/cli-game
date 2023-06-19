import React, {useReducer} from 'react'
import {Text, useInput, Box, Newline} from 'ink'
import {produce} from 'immer'
import {World, Player, Floor, Wall} from './ents.js'

export const Game = _ => {
  const [world, update] = useReducer(
    produce((draft, action) => {
      const actions = {
        move: _ => {
          const dirs = {
            N: {x: 0, y: -1},
            S: {x: 0, y: 1},
            E: {x: 1, y: 0},
            W: {x: -1, y: 0}
          }

          const {x: xOld, y: yOld} = draft.player.pos
          const [xNew, yNew] =
            [draft.player.pos.x + dirs[action.data].x,
              draft.player.pos.y + dirs[action.data].y]

          if (draft.currentMap.tileMap[xNew][yNew].type === 'Floor') {
            draft.currentMap.tileMap[xNew][yNew].contents.unshift(
              draft.currentMap.tileMap[xOld][yOld].contents.shift())
            draft.player.pos = {x: xNew, y: yNew}
          }
        }
      }
      actions[action.type]()
    }), World(Player({x: 15, y: 10}))
  )
  useInput((input, key) => {
    switch (input) {
      case 'w':
        update({type: 'move', data: 'N'})
        break
      case 's':
        update({type: 'move', data: 'S'})
        break
      case 'd':
        update({type: 'move', data: 'E'})
        break
      case 'a':
        update({type: 'move', data: 'W'})
        break
    }
  })
  return (
    <>
      <Box flexDirection={'row'}>
        {world.currentMap.tileMap.map(row =>
          <Box flexDirection={'column'}>
            {row.map(tile => <Text>{tile.toString()}&nbsp;</Text>)}
          </Box>)}
      </Box>
      <Newline/>
    </>
  )
}
