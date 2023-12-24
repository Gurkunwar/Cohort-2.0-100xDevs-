function counter(value){
    console.log(value);
    value++;
    setTimeout(function(){
        counter(value);
    },1000);
}
counter(0);