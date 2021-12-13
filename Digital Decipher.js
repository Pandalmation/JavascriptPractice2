function Digitaldecipher(eMessage, key) {
    var deciphered = [];
    var letter = [];
    var resultnum = [];
    let keys = key.toString().split("");
    let keyContent = keys.map(Number);
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


    if (keyContent.length < eMessage.length){
        num = eMessage.length - keyContent.length;
    }
    
    for (var i = 0; i < num; i++){
        keyContent.push(keyContent[i]);
        
    }

    for (i = 0; i < eMessage.length; i++){
        resultnum.push(eMessage[i]-keyContent[i]);
    } 
    
    for (i = 0; i < resultnum.length; i++){
        letter = letters[resultnum[i]-1];
        deciphered.push(letter);
    } 

    var result = deciphered.join("")
    return result
}

console.log(Digitaldecipher([20, 12, 18, 30, 21], 1939))     
console.log(Digitaldecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990))
console.log(Digitaldecipher([6, 4, 1, 3, 9, 20], 100))

