function check(a){
    if(!a || !a.length){
        return "Loi"
    }

let max = a[0]
for(let i=0; i<a.length; i++){
    if(max<a[i]){
        max=a[i];
    }
    
}
return max;
}
console.log("max =", check([3,9,-4]));