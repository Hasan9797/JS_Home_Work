// Class Work

let users = 10;

function id_(params) {
    let user_id = [];
    for(let i=0; i<params; i++){
        user_id.push(`${i}${Date.now()}`)
    }
    return user_id;
}

console.log(id_(users));

function user_name(params) {
    let user_n = [];
    for(let i=1; i<=params; i++){
        user_n.push(`User${i}`)
    }
    return user_n;
}

let user_name1 = user_name(users);
console.log(user_name1);

function user_ema(params) {
    let user_ema = [];
    for(let i=1; i<=params; i++){
        user_ema.push(`User${i}@gmail.com`)
    }
    return user_ema;
}
console.log(user_ema(users));

function user_pass(params) {
    let user_ema = [];
    for(let i=1; i<=params; i++){
        user_ema.push(`User${i}${Date.now()}`)
    }
    return user_ema;
}
console.log(user_pass(users));
