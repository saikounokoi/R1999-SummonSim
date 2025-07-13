let ClearDrop = 0;
let TotalPulls = 0
function SlotRender(id, rarity, afflatus, name, prydwen) {
	document.getElementById('result').innerHTML += "<a class='CharacterSlot' target='_blank' href='https://www.prydwen.gg/re1999/characters/" + prydwen + "'><div style='position: relative'><img src='../../assets/" + id + ".png' style='width: 100%'><img src='../../img/" + rarity + ".png' style='position: absolute; left: 0%; bottom: 0%; width: 100%'><img src='../../img/" + afflatus + ".png' style='position: absolute; left: 0%; top: 0%; width: 20%'><p style='color: white; font-size: 70%; position: absolute; bottom: -5%; left: 50%; transform: translate(-50%, -50%);'>" + name + "</p></div></a>"
}
function DisplayResult(x) {
	document.getElementById('banner').style.display = 'none';
	document.getElementById('result').textContent = '';
	for (let i = 0; i < x; i++) {
		const gachaID = gacha();
		for (n in TwoStars) {
			if (TwoStars[n].id == gachaID) {
				SlotRender(TwoStars[n].id, 2, TwoStars[n].afflatus, TwoStars[n].name, TwoStars[n].prydwen)
			}
		}
		for (n in ThreeStars) {
			if (ThreeStars[n].id == gachaID) {
				SlotRender(ThreeStars[n].id, 3, ThreeStars[n].afflatus, ThreeStars[n].name, ThreeStars[n].prydwen)
			}
		}
		for (n in FourStars) {
			if (FourStars[n].id == gachaID) {
				SlotRender(FourStars[n].id, 4, FourStars[n].afflatus, FourStars[n].name, FourStars[n].prydwen)
			}
		}
		for (n in FiveStars) {
			if (FiveStars[n].id == gachaID) {
				SlotRender(FiveStars[n].id, 5, FiveStars[n].afflatus, FiveStars[n].name, FiveStars[n].prydwen)
			}
		}
		for (n in SixStars) {
			if (SixStars[n].id == gachaID) {
				SlotRender(SixStars[n].id, 6, SixStars[n].afflatus, SixStars[n].name, SixStars[n].prydwen)
			}
		}
	}
	document.getElementById('SixStarGauge').innerHTML = 'Pulls since last 6 stars: ' + SixStarsPity;
	document.getElementById('Info').innerHTML = 'Clear Drop used: ' + (ClearDrop = ClearDrop + 180 * x) + '&nbsp; &nbsp; &nbsp; &nbsp; Total pulls: ' + (TotalPulls = TotalPulls + x);
	document.getElementById('result').style.display = 'flex';
	document.getElementById('return').style.display = 'inline-block';
	document.getElementById('home').style.display = 'none';
}
function turnback() {
	document.getElementById('return').style.display = 'none';
	document.getElementById('result').style.display = 'none';
	document.getElementById('banner').style.display = 'inline-block';
	document.getElementById('home').style.display = 'inline-block';
}