function func(){
let number = 0;
return function(n){
    number+=n;
    console.log(number);
}
}

let counter = func();
counter(3);
counter(5);

function arrayFunc(){
    let arr = [];
    return function(a){
        if(a!=null){
            arr.push(a);
            console.log(arr);
        }
        else{
            arr.splice(0, arr.length);
            console.log(arr);
        }
    }
}
let getUpdatedArr = arrayFunc();
getUpdatedArr(3);
getUpdatedArr(5);
getUpdatedArr({name:'Vasya'});
getUpdatedArr();
getUpdatedArr(4);
