fetch('./scripts/pool.json')
.then(response => response.json());
function gacha() {
	const RNG = Math.random();
	let rate = 0;
	
	for (const character of pool) {
		rate += character.rate;
		if (RNG <= rate) {
			return character;
		}
	}
	return pool[pool.length - 1]; 
}