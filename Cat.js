var cat = function(name, tiredness, hunger, loneliness, happiness){
    this.name = name;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
    this.sleep = function(numMinutes) {
		for (var i = 0; i < numMinutes; i++) {
		    console.log('z');
            var sleepQuality = Math.floor((Math.random()*5)+1);
            console.log(sleepQuality);
		    this.tiredness -= sleepQuality;
		}
	}
	this.pet = function(numMinutes) {
	    for (var i = 0; i < numMinutes; i++){
	    	if (this.loneliness >= 20){
		        console.log('purr');
		        this.loneliness--;
		        this.happiness += 2;
	    	}
	    	else if (this.loneliness < 20){
	    		console.log('hisss');
	    		this.happiness -= 3;
	    	}
	  	}
	}
	this.feed = function(numBites) {
		for (var i = 0; i < numBites; i++){
			console.log('nomnomnom');
			this.hunger--;
			this.happiness++;
		}
	}

};

var catStat = function(cat, attribute){
	console.log(cat.name + "'s " + attribute + " is: " + cat[attribute]);

};


var peety = new cat("Peety", 20, 10, 0, 50);
var christmas = new cat("Christmas", 0,40, 0, 40);

catStat(peety, "tiredness");
peety.sleep(10);
catStat(peety, "tiredness");

