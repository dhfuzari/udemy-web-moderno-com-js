const funcs = [];

for(var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    });
    funcs[i]();
}

funcs[2]();
funcs[5]();
funcs[8]();