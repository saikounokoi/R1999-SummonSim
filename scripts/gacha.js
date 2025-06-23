let rarity = [
  { name: 'Two Stars', stars: 2, rate: 5 },
  { name: 'Three Stars', stars: 3, rate: 45 },
  { name: 'Four Stars', stars: 4, rate: 40 },
  { name: 'Five Stars', stars: 5, rate: 8.5 },
  { name: 'Six Stars', stars: 6, rate: 1.5 },
];
let SixStarsPity = 0;
let GuaranteedRateUp = 0;
let GuaranteedRateUpUsed = 0;
function character(x) {
	if (x == 'Two Stars') {
		return TwoStars[Math.floor(Math.random() * TwoStars.length)].id;
	}
	else if (x == 'Three Stars') {
		return ThreeStars[Math.floor(Math.random() * ThreeStars.length)].id;
	}
	else if (x == 'Four Stars') {
		return FourStars[Math.floor(Math.random() * FourStars.length)].id;
	}
	else if (x == 'Five Stars') {
		if (RateUp == 1) {
			if (Math.floor(Math.random() * 2) == 1) {
				console.log('5 stars from Rate Up');
				return FiveStarsRateUp[Math.floor(Math.random() * FiveStarsRateUp.length)].id;
			}
			else {
			return FiveStars[Math.floor(Math.random() * FiveStars.length)].id;
			}
		}
		else {
			console.log('This banner has no rate up');
			return FiveStars[Math.floor(Math.random() * FiveStars.length)].id;
		}
	}
	else if (x == 'Six Stars') {
		if (RateUp == 1) {
			if (GuaranteedRateUp == 1 && GuaranteedRateUpUsed != 1) {
				GuaranteedRateUpUsed = 1;
				console.log('Rate Up with Guaranteed');
				return SixStarsRateUp[Math.floor(Math.random() * SixStarsRateUp.length)].id;
			}
			else if (Math.floor(Math.random() * 2) == 1) {
				GuaranteedRateUpUsed = 1;
				console.log('Rate Up without Guaranteed');
				return SixStarsRateUp[Math.floor(Math.random() * SixStarsRateUp.length)].id;
			}
			else {
				GuaranteedRateUp = 1;
				if (GuaranteedRateUpUsed == 1) {
					console.log('Rate up Guaranteed is already used');
				}
				else {
					console.log('Next 6 stars will be the rate up');
				}
				return SixStars[Math.floor(Math.random() * SixStars.length)].id;
			}
		}
		else {
			console.log('This banner has no rate up');
			return SixStars[Math.floor(Math.random() * SixStars.length)].id;
		}
	}
	else {
		return x;
	}
};
function gacha() {
	let rng = Math.floor(Math.random() * 100);
	if (SixStarsPity == 69) {
		SixStarsPity = 0;
		const result = character(rarity[4].name);
		console.log(SixStarsPity, rarity[4].stars, result);
		return result;
	}
	else if (SixStarsPity >= 59) {
		let SoftPity = [
		{ name: 'Two Stars', stars: 2, rate: 5 },
		{ name: 'Three Stars', stars: 3, rate: 45 },
		{ name: 'Four Stars', stars: 4, rate: 40 },
		{ name: 'Five Stars', stars: 5, rate: 8.5 },
		{ name: 'Six Stars', stars: 6, rate: 4 },
		];
		SoftPity[4].rate = 4 + 2.5 * (SixStarsPity - 60);
		SoftPity[1].rate = 45 - 2.5 * (SixStarsPity - 60);
		for (i in SoftPity) {
			rng -= SoftPity[i].rate;
			if (rng <= 0) {
				if (SoftPity[i].stars < 6) {
				SixStarsPity++;
				}
			else if (SoftPity[i].stars == 6) {
				SixStarsPity = 0;
			}
			const result = character(SoftPity[i].name);
			console.log(SixStarsPity, SoftPity[i].stars, result);
			return result;
			}
		}
	}
	else {
		for (i in rarity) {
			rng -= rarity[i].rate;
			if (rng <= 0) {
				if (rarity[i].stars < 6) {
				SixStarsPity++;
				}
				else if (rarity[i].stars == 6) {
					SixStarsPity = 0;
				}
				const result = character(rarity[i].name);
				console.log(SixStarsPity, rarity[i].stars, result);
				return result;
			}
		}
	}
};