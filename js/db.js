var db = { 
	receipes: [
		{
			id: 1,
			name: "Kogning",
			thumb: "img/thumb/ris.jpg",
			image: ["img/image/madtip/ris.jpg"],
			category: "madtip",
			tags: ["ris","kogning","klump","klisteret", "skylle", "klumpet", "klumper"]
		},
		{
			id: 2,
			name: "Rolig søvn",
			thumb: "img/thumb/lavendel.jpg",
			image: ["img/image/andet/rolig-søvn.jpg"],
			category: "haven",
			tags: ["lavendel","urolig","søvnløs","søvn","søvnmangel", "træt"]
		},
		{
			id: 3,
			name: "Mere luftige brød",
			thumb: "img/thumb/regnvand.jpg",
			image: ["img/image/madtip/brød2.jpg"],
			category: "madtip",
			tags: ["regnvand", "brød", "luftige", "luftig", "gær", "bagning", "bage"]
		},
		{
			id: 4,
			name: "Pilles nemmere",
			thumb: "img/thumb/kogtappelsin.jpg",
			image: ["img/image/madtip/appelsinkogt.jpg"],
			category: "madtip",
			tags: ["appelsin","citrusfrugt","pilles", "pille"]
		},
		{
			id: 5,
			name: "Rives nemmere",
			thumb: "img/thumb/koldappelsin.jpg",
			image: ["img/image/madtip/appelsin-rives.jpg"],
			category: "madtip",
			tags: ["appelsin","citrusfrugt","rives", "rive"]
		},
		{
			id: 6,
			name: "Opbevaring",
			thumb: "img/thumb/lime.jpg",
			image: ["img/image/madtip/agurk.jpg"],
			category: "madtip",
			tags: ["staniol","agurk","opbevaring","agurker"]
		},
		{
			id: 7,
			name: "Appelsinis",
			thumb: "img/thumb/appelsinis.jpg",
			image: ["img/image/opskrifter/appelsinis.jpg"],
			category: "opskrifter",
			tags: ["is","appelsinis","appelsin","appelsiner","dessert"]
		},
		{
			id: 8,
			name: "Modne en avokado",
			thumb: "img/thumb/æble.jpg",
			image: ["img/image/madtip/avokado1.jpg", "img/image/madtip/avokado2.jpg", "img/image/madtip/avokado3.jpg"],
			category: "madtip",
			tags: ["avokado","æble", "modne", "hård", "ris", "mel"]
		},
		{
			id: 11,
			name: "Frost på bil",
			thumb: "img/thumb/bilfrost.jpg",
			image: ["img/image/andet/bilfrost.jpg"],
			category: "andet",
			tags: ["frost","bil", "affroste", "vinter"]
		},
		{
			id: 12,
			name: "Til tørt hår",
			thumb: "img/thumb/hår.jpg",
			image: ["img/image/andet/hår.jpg"],
			category: "andet",
			tags: ["hår","tørt", "shampoo", "rapsolie"]
		},
		{
			id: 13,
			name: "Polering",
			thumb: "img/thumb/sølvtøjrabarber.jpg",
			image: ["img/image/husholdning/sølvtøjrabarber.jpg", "img/image/husholdning/sølvtøjvaskepulver.jpg", "img/image/husholdning/sølvtøjstaniol.jpg"],
			category: "husholdning",
			tags: ["sølvtøj", "sølvpapir", "staniol", "rabarber","vaskepulver", "polering", "pudsning", "pudse", "polere"]
		},
		{
			id: 16,
			name: "Forlæng friskhed",
			thumb: "img/thumb/blomster-i-vase.jpg",
			image: ["img/image/haven/blomster.jpg"],
			category: "haven",
			tags: [ "vase", "blomster", "vand", "afskårede", "afskåret", "buket", "kedelig"]
		},
		{
			id: 17,
			name: "Opbevaring",
			thumb: "img/thumb/champinon.jpg",
			image: ["img/image/madtip/champ-obevaring.jpg"],
			category: "madtip",
			tags: [ "champingnon", "holdbar", "opbevaring", "grønt"]
		},
		{
			id: 18,
			name: "Beskæring",
			thumb: "img/thumb/rose.jpg",
			image: ["img/image/haven/roser-beskæres.jpg"],
			category: "haven",
			tags: ["rose", "beskæring", "plante"]
		},
		{
			id: 19,
			name: "Renses",
			thumb: "img/thumb/guldramme.jpg",
			image: ["img/image/husholdning/guldramme.jpg"],
			category: "husholdning",
			tags: [ "rens", "ramme", "guldramme"]
		},
		{
			id: 20,
			name: "Rens urin væk",
			thumb: "img/thumb/tæppe.jpg",
			image: ["img/image/husholdning/urin-på-gulvtæppe.jpg", "img/image/husholdning/urin-på-tæppe2.jpg"],
			category: "husholdning",
			tags: [ "rens", "tæppe", "urin", "pis", "tis", "plet","gulvtæppe"]
		},
		{
			id: 22,
			name: "Smuttes",
			thumb: "img/thumb/mandler.jpg",
			image: ["img/image/madtip/mandler-smuttede.jpg", "img/image/madtip/mandler-store-og-hvide.jpg"],
			category: "madtip",
			tags: [ "mandler", "mandel", "smut", "nem", "store", "hvide", "mælk"]
		},
		{
			id: 24,
			name: "Hakkes",
			thumb: "img/thumb/mandler-hakkes.jpg",
			image: ["img/image/madtip/mandler-hakkes.jpg","img/image/madtip/mandler1.jpg"],
			category: "madtip",
			tags: [ "mandler", "mandel", "hakkes", "melis", "nem", "døgn", "sukker"]
		},
		{
			id: 25,
			name: "Lagkagecreme",
			thumb: "img/thumb/Lagkagecrem.jpg",
			image: ["img/image/opskrifter/lagkagecreme.jpg"],
			category: "opskrifter",
			tags: [ "lagkagecreme", "lagkage", "fødselsdag", "creme", "hjemmelavet", "kagecreme"]
		},
		{
			id: 26,
			name: "Lagkage af fadet",
			thumb: "img/thumb/LagkageSlipper.jpg",
			image: ["img/image/madtip/lagkage.jpg"],
			category: "opskrifter",
			tags: [ "lagkagecreme", "lagkage", "fødselsdag", "creme", "flormelis", "kagecreme", "slipper"]
		},
		{
			id: 27,
			name: "Tom kuglepen",
			thumb: "img/thumb/kuglepen.jpg",
			image: ["img/image/andet/kuglepind-tom-.jpg"],
			category: "andet",
			tags: [ "kuglepind", "blæk", "tom", "pen", "kuglepen", "sødmælk"]
		},


	
	],
	tags: ["lagkagecreme", "lagkage", "fødselsdag", "creme", "flormelis", "kagecreme", "slipper", "hjemmelavet", "husholdning", "vaskepulver", "sølvtøj", "døgn","sølvpapir","polering", "pudsning", "pudse", "polere", "staniol",
			"madtip", "regnvand",  "gær","store", "hvide", "hakkes", "melis", "sukker","mælk", "pilles", "pille","rives", "rive", "rapsolie","olie","suppe","fisk","is","appelsinis","dessert","opbevaring", "modne", "hård",
 			"bagning", "bage", "brød", "luftige", "luftig","urin", "pis", "tis", "plet", "gulvtæppe",
 			"grønt", "rabarber", "sødmælk",  "rapsolie","olie","appelsin","appelsiner","agurk","agurker","avokado","æble",
			"frost","bil",  "kuglepind", "blæk", "tom", "pen", "kuglepen", "affroste", "vinter","hår","tørt", "shampoo", "tæppe", "urin", "pis",
			"kogning", "klump", "klisteret", "skylle", "klumpet", "klumper", "rens", "ramme", "guldramme",
			"lavendel","urolig","søvnløs","søvn","søvnmangel", "træt","rose", "beskæring", "plante",
			"vase", "blomster", "vand", "afskårede","mandler", "mandel", "smut", "nem", "afskåret", "buket", "champingnon", "holdbar", "kedelig"]
};
