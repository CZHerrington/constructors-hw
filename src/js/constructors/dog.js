function Dog(obj) {
  console.log(obj)
this.owner
this.color = colorTest(obj);
this.hungry = hungerTest(obj);
this.status = 'normal';
this.owner = undefined

function colorTest(obj){
if (obj == undefined){return undefined}
else { return obj.color};
};
function hungerTest(obj){
  if (obj == undefined){return undefined}
else if (obj.hungry == false){return false}
else {return true};
};
}


export {Dog};
