
const totalMarksScoredByStudent = 75;

if(totalMarksScoredByStudent < 40) {
    console.log("You need to work hard");
} else if(totalMarksScoredByStudent < 60) {
    console.log("B Grade");
}else if(totalMarksScoredByStudent < 75){
    console.log("A Grade");
}else if(totalMarksScoredByStudent < 85){
    console.log("A++ Grade");
}else{
    console.log("You are a Genius");
}

//ternary operator

const result = ( totalMarksScoredByStudent < 40) ? "You need to work hard" : totalMarksScoredByStudent < 60 ? "B Grade" : 
totalMarksScoredByStudent < 75 ? "A Grade" : totalMarksScoredByStudent < 85 ? "A++ Grade" : "You are a genius";

console.log(result)