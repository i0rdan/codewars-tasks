async function ss() {
  console.log('start asyync');
}

function timeoutPromise(delay) {
	return new Promise( function(resolve){
		setTimeout( function(){
      console.log('settime1');
			resolve( "Timeout!" );
      console.log('settime2');
		}, 300 );
	} );
}
console.log('start');
console.log('start after async');
new Promise( function(resolve){
  resolve();
  console.log(1232);
} );
timeoutPromise(0).then((a) => console.log("Timeout!"));
setTimeout(() => console.log(123), 0);