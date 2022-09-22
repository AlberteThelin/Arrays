var n = 1;

for(var i = 1000; i >= n; i --){
    if(i % 2 == 0){
        console.log(i);
    }
}

var n = 10000;

for(var i = 1; i <= n; i++){
    if(i == 2500){
        alert("A quarter of the way there!");
    }
    else if(i == 5000){
        alert("Halfway there!")
    }
    else if(i == 10000){
        alert("The loop is done!")
    }
}

var FavoriteTvShows = ["Gossip Girl","Pretty Little Liars", "Vampire Diaries","Outer Banks", "Borgen"]

for(var i = 1; i <= 5; FavoriteTvShows.shift(), i++){
    console.log(`My #${i} favorite tv show is ${FavoriteTvShows[0]}`);
}