//arithmetic operator
// let a=10;
// let b=30;
// console.log("a+b=",a+b);
// console.log("a*b=",a*b);
// console.log("a-b=",a-b);
// console.log("a=a ,& b=b",);
//coditional statement
// let age=25;
// if(age>=18)
//     console.log("you can vote ");


//   let num=10;
//   if (num%2 ===0)
//   {
//     console.log(num,"is even")
//   }
//   else{
//     console.log(num,"is odd")

//   }
//  let num =prompt("enter a number");
//  if (num%5===0){
//     console.log(num,"is a multiply of 5");
//  }
//  else
// {
//     console.log(num,"is not a multiple of 5");
// }
// let score= prompt("enter your score (0-100):");
// let grade;
// if (score>=90&&score<=100){
//     grade="A"

// }
// else if (score>=70&&score<=89);
 
    
//   else if  (score>=50 &&score<=69)
//     {
//     grade="C"
// }
// else(score>=29&&score<=39)
// {
//     grade="fail"
// }
//  console.log("according to your score :",grade);

// for (let count =1;count<=10;count++){
//     console.log("abhi coder"); 
// }
// console.log("ended the game ");

// calculate sum of 1 to 5
// let sum =0;

// for (let i=1;i>=0;i++){
    
//     console.log("i=",i);
// }
// console.log("i=",i);
// console.log("end the code ");
// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);
// let str="abhishekcoder"
// for (let i of str){
//     console.log("i=",i);
//     size++;
// }
// let student ={
//     name :"abhishek kumar",
//     age: 20,
//     cgpa:8,
//      ispass: true,


// };
// for(let key in student){
//     console.log("key=",key ,"value",student[key]);
// } 
// for (let num=0;num<=100; num++)
// if (num%2===0){
//     console.log("num=",num);
// }
// let gamenum=25;
//  let usernum = prompt("guess the  number:") ;
// while (usernum != gamenum){
//   usernum  = prompt("you enter waring number. guess again")

// }
// console.log("conguratulation you are enter the game.right now ")

// let dosts=["abhi","rayees","piter","aman","faiju"];
// for (let dost of dosts){
//   console.log(dost.toUpperCase());  
// } 
// let marks =[30,94,45,56,78,89,90,23,45,67];
// let sum =0;
// for (let value of marks){
//   sum=sum+value;
// }
// let avg=sum/marks.length;
// console.log('avg marks of the class=${avg}');
// function sum(a,b){
//   s=a+b;
//   return s;
// }
// let value =(5,3);
// console.log(value);
// let nums =[1,2,3,4,5,6];
//  nums.forEach ((num) => {
//  console.log(num* num);
// });
let marks=[67,90,98,97,95];
let toppers =marks.filter((val) =>{
    return val>90;
});
console.log(toppers)

