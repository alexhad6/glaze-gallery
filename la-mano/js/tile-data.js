const glazes = new Map([
	['behrensclear', 'Behren&rsquo;s Clear'],
	// ['bluelapis', 'Blue Lapis'],
	['blueslate', 'Blue Slate'],
	['bluespruce', 'Blue Spruce'],
	['charcoal', 'Charcoal'],
	['choy', 'Choy'],
	// ['grape', 'Grape'],
	// ['greensholtis', 'Green Sholtis'],
	['harvestmoon', 'Harvest Moon'],
	['islandblue', 'Island Blue'],
	['moonbeam', 'Moon Beam'],
	['noir', 'Noir'],
	// ['nutmeg', 'Nutmeg'],
	['oribe', 'Oribe'],
	['peacock', 'Peacock'],
	['randysred', 'Randy&rsquo;s Red'],
	// ['randyswhite', 'Randy&rsquo;s White'],
	['satinwhite', 'Satin White'],
	['seaworld', 'Sea World'],
	// ['spearmint', 'Spearmint'],
	['suede', 'Suede'],
	// ['turquoise', 'Turquoise'],
]);

const tiles = new Map();
{
	const notfoodsafe = [
		'behrensclearchoy',
		'choycharcoal',
		'randyswhitechoy',
		'turquoisechoy',
	];

	const runny = [
		'bluesprucechoy',
		'charcoalturquoise',
		'choybehrensclear',
		'choybluespruce',
		'choychoy',
		'choygreensholtis',
		'choyharvestmoon',
		'choynutmeg',
		'choyrandysred',
		'choyrandyswhite',
		'choyseaworld',
		'choyspearmint',
		'choysuede',
		'choyturquoise',
		'harvestmoonbehrensclear',
		'harvestmoonchoy',
		'harvestmoonharvestmoon',
		'harvestmoonseaworld',
		'harvestmoonspearmint',
		'harvestmoonsuede',
		'harvestmoonturquoise',
		'harvestmoonturquoise',
		'randysredharvestmoon',
		'seaworldbehrensclear',
		'seaworldchoy',
		'seaworldgreensholtis',
		'seaworldharvestmoon',
		'seaworldrandysred',
		'seaworldseaworld',
		'seaworldspearmint',
		'seaworldturquoise',
		'spearmintbehrensclear',
		'spearmintcharcoal',
		'spearmintchoy',
		'spearmintharvestmoon',
		'spearmintrandysred',
		'spearmintrandyswhite',
		'spearmintseaworld',
		'spearmintturquoise',
		'turquoiseharvestmoon',
		'blueslaterandysred',
		'spearmintblueslate',
		'blueslatechoy',
		'blueslatebluelapis',
		'blueslategrape',
		'grapeblueslate',
		'blueslateseaworld',
		'seaworldblueslate',
		'blueslateturquoise',
		'blueslategreensholtis',
		'blueslatenoir',
		'noirblueslate',
		'moonbeamseaworld',
		'seaworldmoonbeam',
		'moonbeambluespruce',
		'moonbeamblueslate',
		'noirmoonbeam',
		'moonbeamnoir',
		'choymoonbeam',
		'moonbeamchoy',
		'suedemoonbeam',
		'harvestmoonmoonbeam',
		'moonbeamharvestmoon',
		'charcoalmoonbeam',
		'moonbeamrandysred',
		'randysredmoonbeam',
		'islandbluecharcoal',
		'peacockislandblue',
		'suedeislandblue',
		'islandbluesatinwhite',
		'blueslateislandblue',
		'islandblueharvestmoon',
		'harvestmoonislandblue',
		'moonbeamislandblue',
		'oribecharcoal',
		'oribesuede',
		'suedeoribe',
		'randysredoribe',
		'oriberandysred',
		'oribeseaworld',
		'seaworldoribe',
		'oribeharvestmoon',
		'harvestmoonoribe',
		'oribebluespruce',
		'oribenoir',
		'noiroribe',
		'peacockseaworld',
		'seaworldpeacock',
		'randysredpeacock',
		'peacockrandysred',
		'suedepeacock',
		'peacockchoy',
		'moonbeampeacock',
		'noirpeacock',
		'peacocknoir',
		'peacocksuede',
		'harvestmoonpeacock',
	];

	const caution = [
		'behrensclearturquoise',
		'grapechoy',
		'nutmegturquoise',
		'randyswhitechoy',
		'randyswhitegrape',
		'randyswhiteturquoise',
		'spearmintbehrensclear',
		'spearmintgrape',
		'turquoisecharcoal',
		'turquoisechoy',
		'turquoisegrape',
		'turquoisegrape',
		'turquoisegreensholtis',
		'turquoisenutmeg',
		'turquoiserandyswhite',
		'turquoisespearmint',
		'turquoiseturquoise',
		'suedeblueslate',
		'blueslateclear',
	];

	const doubleRunny = [
		'noirharvestmoon',
	];

	const notes = new Map([
		['noirharvestmoon', 'Only use inside pots.'],
	]);

	const missingImage = [
		'noirgrape',
		'grapenoir',
	];

	const hasSatinwhite = [
		"blueslate",
		"moonbeam",
		"peacock",
		"oribe",
		"islandblue",
	];

	const missingBehrensclear = [
		"moonbeam",
		"peacock",
		"oribe",
		"islandblue",
	];

	const missingTurquoise = [
		"moonbeam",
		"peacock",
		"oribe",
		"islandblue",
	];

	for (const first of glazes.keys()) {
		for (const second of glazes.keys()) {
			const base = first + '-' + second;
			const glaze = first + second;
			tiles.set(glaze, {
				first: first,
				second: second,
				front: base + '-front.jpg',
				back: base + '-back.jpg',
				notfoodsafe: notfoodsafe.includes(glaze),
				runny: runny.includes(glaze) || (first == 'noir' || second == 'noir'),
				doubleRunny: doubleRunny.includes(glaze),
				caution: caution.includes(glaze),
				note: notes.has(glaze) ? notes.get(glaze) : '',
				frontOnly: first === "blueslate" || second === "blueslate",
				missingImage: missingImage.includes(glaze) ||
					(!hasSatinwhite.includes(first) && second === "satinwhite") ||
					(first === "satinwhite" && !hasSatinwhite.includes(second)) ||
					(missingBehrensclear.includes(first) && second === "behrensclear") ||
					(first === "behrensclear" && missingBehrensclear.includes(second)) ||
					(missingTurquoise.includes(first) && second === "turquoise") ||
					(first === "turquoise" && missingTurquoise.includes(second))
			});
		}
	}
}
