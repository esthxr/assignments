// Higher-order Function

const double = (num) => num * 2;
const triple = (num) => num * 3;

const multiply = double(4);
console.log(multiply)
const multiply1 = triple(6);
console.log(multiply1)

const apply = (fn1, fn2, value) => fn1(value) + fn2(value);

const result = apply(double, triple, 10);
console.log(result)


//Error Handling
function divide(a, b){
    if (b === 0) throw new Error('cannot divide by zero');
    return a/b;
}

console.log(divide(10,5))
console.log(divide(5,0))

console.log('start');
try {
    console.log(divide(36,6));
    console.log(divide(7,0));
} catch (e) {
    console.error('caught: ', e.message);
} finally {
    console.log('finally: always run even on errors');
}

console.log('program keeps running')

function checkAge(age){
    if (age < 0){
        throw new Error('Age cannot be negative')
    }

    if(age < 18);{
        throw new Error('You must be older than 18')
    }
}

try{
    console.log(checkAge(-1));
} catch (e) {
    console.log('Error: ', e.message);
} finally {
    console.log('Finish!!')
}

try{
    console.log(checkAge(16));
} catch (e) {
    console.log('Error: ', e.message);
} finally {
    console.log('Finish!!')
}

console.log('Bye')

function subtract(a,b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error ('Both arguments should be numbers')
    }
    return a - b;
}

try {
    console.log(subtract(7,4));
    console.log(subtract(9,'5'));
} catch (e) {
    console.error (e.message);
} 

console.log ('Continue');


//Callback Function
function getUser(id, callback){
    setTimeout(() => {
        callback(null, { id: id, name: 'Chu'});
    }, 2000);
}

function getPosts(userID, callback) {
    setTimeout(() => {
        callback(null, ['post1', 'post2', 'post3']);
    }, 2000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        callback (null, ['nice', 'great post', 'Thanks for sharing']);
    }, 2000);
}

getUser(1, (err, userData) => {
    getPosts(userData.id, (err, postsData) => {
        getComments(postsData[0], (err, commentsData) => {
            console.log('comments: ', commentsData);
        });
    });
});