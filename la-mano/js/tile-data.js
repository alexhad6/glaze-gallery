const glazes = new Map([
	['behrensclear', 'Behren&rsquo;s Clear'],
	['bluespruce', 'Blue Spruce'],
	['charcoal', 'Charcoal'],
	['choy', 'Choy'],
	['grape', 'Grape'],
	['greensholtis', 'Green Sholtis'],
	['harvestmoon', 'Harvest Moon'],
	['noir', 'Noir'],
	['nutmeg', 'Nutmeg'],
	['randysred', 'Randy&rsquo;s Red'],
	['randyswhite', 'Randy&rsquo;s White'],
	['seaworld', 'Sea World'],
	['spearmint', 'Spearmint'],
	['suede', 'Suede'],
	['turquoise', 'Turquoise']
]);

const tiles = new Map();
{
	const notfoodsafe = [
		'behrensclearchoy',
		'choycharcoal',
		'randyswhitechoy',
		'turquoisechoy'
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
		'turquoiseharvestmoon'
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
		'turquoiseturquoise'
	];

	// const notes = new Map([
	// 	['behrensclearbehrensclear', 'This is an example note.'],
	// 	['behrensclearbluespruce', 'Here\'s another example.']
	// ]);

	for (const first of glazes.keys()) {
		for (const second of glazes.keys()) {
			const base = first + '-' + second;
			const glaze = first + second;
			tiles.set(glaze, {
				first: first,
				second: second,
				front: base + '-front.jpg', back: base + '-back.jpg',
				notfoodsafe: notfoodsafe.includes(glaze) || (first == 'noir' || second == 'noir'),
				runny: runny.includes(glaze),
				caution: caution.includes(glaze)
				//note: notes.has(glaze) ? notes.get(glaze) : ''
			});
		}
	}
}
