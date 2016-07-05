function Human(cool) {
this.pet = function(dog){
dog.status = "happy";}
this.feed = function(dog){
dog.hungry = false;
};
this.cool = !!cool
};



export {Human};
