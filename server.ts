const isPalindrome = (s:string):boolean=>{
let newString=''
   let a= s.toLowerCase()
    a.trim()

for(let k=0;k<=a.length-1;k++){
    if(a[k]!==' '){

    if(/^[a-zA-Z0-9]+$/.test(a[k])) {
        newString += a[k]
    }
    }
}
let i=0,j=newString.length-1
while(i<=j){
    if(!(newString[i]===newString[j])){
        return false
    }else{
        i++;j--
    }
}

    return true
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))

/*
pseudocode-

s=>"!rac3e a4 car"
convert s to lowercase

while loop until i<=j
start i at 0, start j at length-1
delete the charecter in place if it is not the below, use s.splice()
check this condition if(/^[a-zA-Z0-9]+$/.test(s[i]) or if it's not a space,

if biot are unequal, return false else keep incrementing i and decrementing j


 */