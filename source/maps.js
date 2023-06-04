import {Floor, Wall} from './ents.js'

const ROWS = Array.from(Array(30))
const COLS = Array.from(Array(15))

export const test = player =>
	ROWS.map((_, x) =>
		COLS.map((_, y) => {
			if (x === 0 || y === 0 || x === ROWS.length - 1|| y === COLS.length - 1)
				return Wall()

			if (x === player.pos.x && y === player.pos.y)
				return Floor([player])

			else
				return Floor([])
		}))
