// You are given a 0-indexed string array words.
// Two strings are similar if they consist of the same characters.
function simStrings(words) {
    let sets=words.map(word=>{
        let unique =[...new Set(word)].sort().join("")
        return unique
    })
    let count=0;
    for (let i=0; i<sets.length; i++){
        for (let j=i+1; j<sets.length; j++){
            if (sets[i]===sets[j]){
                count++
             }
    }
    }
    return count
}
console.log(simStrings(words = ["aba","aabb","abcd","bac","aabc"]))
console.log(simStrings(words = ["nba","cba","dba"]))
console.log(simStrings(words = ["aabb","ab","ba"]))