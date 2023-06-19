#!/usr/bin/env node
import React from 'react'
import {render} from 'ink'
import meow from 'meow'
import {Game} from './game.js'

const cli = meow(
  `
	  Usage
		  $ cli-game
	`,
  {
    importMeta: import.meta
  }
)

render(<Game name={cli.flags.name} patchConsole={true}/>)
