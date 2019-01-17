$(() => {
	$('img').on('contextmenu dragstart copy', () => {return false;});
	$('body').on('copy', () => {return false;});
});