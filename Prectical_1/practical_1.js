// // ************* TASK - 1 *************
 let let_variable = 2;
 var var_variable = 'Dev';
const const_variable = [1,2,3,4,5];
 console.log(let_variable,var_variable,const_variable);

// ************* TASK - 2 *************
let task2 = (a,b) => `sum is ${a+b} | product is ${a*b} | difference is ${a-b} | quotient is ${a%b}`;
console.log(task2(2,3));

// // ************* TASK - 3 *************
 let task3 = (age) => {
  if(age<18){
        return 'You are a minor.'
    }
    else if(age>=18 || age<=65){
        return 'You are an adult.'
    }
   else{
         return '"You are a senior citizen.'
    }
 }
console.log(task3(54));

// // ************* TASK - 4 *************
 let task4 = (salary_arr) => {
    return `min salary is ${Math.min(...salary_arr)} | max salary is ${Math.max(...salary_arr)}`
}
 console.log(task4([30,20,50,80]));

// // ************* TASK - 5 *************
 let task5 = (arr) => {
     arr.forEach(element => {
        console.log(element);
    });
 }
task5(['book1','book2','book3','book4'])

// // ************* TASK - 6 *************
 let task6 = () => {
    let x = 1;
    var y = 2;
    const z = 3;
}
console.log(x,y,z); //can't be accesed bcz outside function scope.

// // ************* TASK - 7 *************
 function task7() {
  document.getElementById('text').textContent = 'HI'
 }

// // ************* TASK - 8 *************
 let task8 = () => {
   let x = prompt('Enter a number');
    try {
        if (x < 0) {
          throw Error("number is negative");
        }
    } catch (e) {
       console.log('please enter a positive number');
   }
 }
 task8();

// // ************* TASK - 9 *************
 setInterval(()=>{
   document.getElementById('text2').textContent = 'asyncronous'
 },2000)
