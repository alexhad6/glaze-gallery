const glazes = new Map([
	['behrensclear', 'Behren&rsquo;s Clear'],
	['bluespruce', 'Blue Spruce'],
	['charcoal', 'Charcoal'],
	['choy', 'Choy'],
	// ['grape', 'Grape'],
	['greensholtis', 'Green Sholtis'],
	// ['grey', 'Grey'],
	['harvestmoon', 'Harvest Moon'],
	// ['honeyamber', 'Honey Amber'],
	// ['leather', 'Leather'],
	['nutmeg', 'Nutmeg'],
	['randysred', 'Randy&rsquo;s Red'],
	['randyswhite', 'Randy&rsquo;s White'],
	// ['robertscobalt', 'Robert&rsquo;s Cobalt'],
	['seaworld', 'Sea World'],
	['spearmint', 'Spearmint'],
	['suede', 'Suede'],
	// ['trulywhite', 'Truly White'],
	// ['turquoise', 'Turquoise'],
	// ['volcanicash', 'Volcanic Ash'],
]);

const tiles = new Map();
{
	const notfoodsafe = [
		'behrensclearchoy',
		'choycharcoal',
		'choyrobertscobalt',
		'leatherrobertscobalt',
		'nutmegrobertscobalt',
		'randyswhitechoy',
		'robertscobaltcharcoal',
		'robertscobaltchoy',
		'robertscobaltleather',
		'robertscobaltspearmint',
		'robertscobaltturquoise',
		'turquoisechoy',
	];

	const runny = [
		'behrenscleargrey',
		'behrenscleartrulywhite',
		'bluesprucechoy',
		'charcoalturquoise',
		'charcoalvolcanicash',
		'choybehrensclear',
		'choybluespruce',
		'choychoy',
		'choygreensholtis',
		'choygrey',
		'choyharvestmoon',
		'choyhoneyamber',
		'choyleather',
		'choynutmeg',
		'choyrandysred',
		'choyrandyswhite',
		'choyseaworld',
		'choyspearmint',
		'choysuede',
		'choytrulywhite',
		'choyturquoise',
		'choyvolcanicash',
		'greybehrensclear',
		'greycharcoal',
		'greygrape',
		'greygrey',
		'greyhoneyamber',
		'greynutmeg',
		'greyrandysred',
		'greyrandyswhite',
		'greyrobertscobalt',
		'greyspearmint',
		'greytrulywhite',
		'greyturquoise',
		'greyvolcanicash',
		'harvestmoonbehrensclear',
		'harvestmoonchoy',
		'harvestmoongrey',
		'harvestmoonharvestmoon',
		'harvestmoonleather',
		'harvestmoonrobertscobalt',
		'harvestmoonseaworld',
		'harvestmoonspearmint',
		'harvestmoonsuede',
		'harvestmoontrulywhite',
		'harvestmoonturquoise',
		'harvestmoonvolcanicash',
		'leatherharvestmoon',
		'leatherhoneyamber',
		'leathersuede',
		'leathertrulywhite',
		'leatherturquoise',
		'nutmeghoneyamber',
		'nutmegvolcanicash',
		'randysredharvestmoon',
		'randyswhitevolcanicash',
		'robertscobaltgrey',
		'robertscobaltnutmeg',
		'robertscobaltrandyswhite',
		'robertscobaltvolcanicash',
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
		'spearmintgrey',
		'spearmintharvestmoon',
		'spearmintleather',
		'spearmintrandysred',
		'spearmintrandyswhite',
		'spearmintseaworld',
		'spearminttrulywhite',
		'spearmintturquoise',
		'spearmintvolcanicash',
		'suedegrey',
		'suedehoneyamber',
		'suederobertscobalt',
		'suedevolcanicash',
		'trulywhiteharvestmoon',
		'trulywhitehoneyamber',
		'trulywhiteleather',
		'trulywhitespearmint',
		'trulywhitesuede',
		'trulywhiteturquoise',
		'trulywhitevolcanicash',
		'turquoiseharvestmoon',
		'turquoisehoneyamber',
		'turquoiserobertscobalt',
		'turquoisetrulywhite',
		'turquoisevolcanicash',
		'volcanicashgrey',
		'volcanicashharvestmoon',
		'volcanicashhoneyamber',
		'volcanicashleather',
		'volcanicashnutmeg',
		'volcanicashrandyswhite',
		'volcanicashrobertscobalt',
		'volcanicashspearmint',
		'volcanicashsuede',
		'volcanicashtrulywhite',
		'volcanicashturquoise',
	];

	const caution = [
		'behrensclearrobertscobalt',
		'behrenscleartrulywhite',
		'behrensclearturquoise',
		'behrensclearvolcanicash',
		'choyrobertscobalt',
		'grapechoy',
		'grapetrulywhite',
		'greyleather',
		'greytrulywhite',
		'harvestmoontrulywhite',
		'honeyamberchoy',
		'honeyamberrandyswhite',
		'honeyambertrulywhite',
		'leathergrape',
		'leatherrandyswhite',
		'leathertrulywhite',
		'leatherturquoise',
		'nutmegturquoise',
		'randysredtrulywhite',
		'randyswhitechoy',
		'randyswhitegrape',
		'randyswhiteleather',
		'randyswhitetrulywhite',
		'randyswhiteturquoise',
		'robertscobaltchoy',
		'robertscobalttrulywhite',
		'robertscobaltturquoise',
		'spearmintbehrensclear',
		'spearmintgrape',
		'spearmintgrey',
		'spearminthoneyamber',
		'spearminttrulywhite',
		'suedetrulywhite',
		'trulywhitebehrensclear',
		'trulywhitechoy',
		'trulywhitegrape',
		'trulywhitegrey',
		'trulywhitehoneyamber',
		'trulywhiteleather',
		'trulywhitenutmeg',
		'trulywhiterandysred',
		'trulywhiterandyswhite',
		'trulywhitespearmint',
		'trulywhitetrulywhite',
		'trulywhiteturquoise',
		'trulywhitevolcanicash',
		'turquoisecharcoal',
		'turquoisechoy',
		'turquoisegrape',
		'turquoisegreensholtis',
		'turquoisegrey',
		'turquoisehoneyamber',
		'turquoisenutmeg',
		'turquoiserandyswhite',
		'turquoiserobertscobalt',
		'turquoisespearmint',
		'turquoisetrulywhite',
		'turquoiseturquoise',
		'volcanicashchoy',
		'volcanicashgrape',
		'volcanicashtrulywhite',
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
				notfoodsafe: notfoodsafe.includes(glaze),
				runny: runny.includes(glaze),
				caution: caution.includes(glaze)
				//note: notes.has(glaze) ? notes.get(glaze) : ''
			});
		}
	}
}