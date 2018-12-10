const singers = ["John Lennon", "Ringo Star", "Paul McCartney", "Dizzy"];
const instruments = ["guitar", "drums", "piano", "trumpet"];
 var theBeatlesPlay = function (musiciansArray, instrumentsArray) {
	var collect = [];
	for (var i = 0; i<musiciansArray.length; i++) {
	collect.push(musiciansArray[i] + " plays " + instrumentsArray[i]);
	}
	return(collect);
};
 theBeatlesPlay(singers, instruments);
