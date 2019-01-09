

function produceDrivingRange(num){
  return function(start, end){
  	let ending = parseInt(end);
  	let starting =  parseInt(start);
  	let blocks = Math.abs(ending - starting);
    let distance = num - blocks;
		if (distance > 0) {
			return `within range by ${distance}`;
		} else {
    return `${Math.abs(distance)} blocks out of range`;
    }
  }
}
//closure because you can call
//let twentyBlockRange = produceDrivingRange(20);
//twentyBlockRange('10th', '20th');

function produceTipCalculator(num){
	return function(totalBill){
		return totalBill * num;
	}
}

function createDriver(){
   let driverId = 0;
  return class{
     constructor(name){
      this.id = driverId++,
      this.name = name
     }
   }
 }

