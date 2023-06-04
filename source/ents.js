import { test } from './maps.js'
export const Player = pos => ({
	type: 'Player',
	pos,
	health: 100,
	inventory: [],
	toString: _ => '@'
})

export const Floor = contents => ({
	type: 'Floor',
	contents,
	toString: function() {
		return this.contents.length !== 0 ? this.contents[0].toString() : '.'
	}
})

export const Wall = _ => ({
	type: 'Wall',
	passable: false,
	toString: function() { return '+' }
})

export const World = player => ({
	type: 'World',
	context: 'map',
	currentMap: {
		name: 'default',
		tileMap: test(player)
	},
	player
})
