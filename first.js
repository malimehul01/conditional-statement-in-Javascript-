// conditional statement 
//1. if statement 
{


 let age=16;

 if(age>=18){


    console.log("you can vote");
 }
 if(age<18){


    console.log(" you can't vote ");
 }
}
 //2. if -else conditional statement

 {

   let age=25;

   if(age>=18){

    console.log("you can vote");
   }
   else {

    console.log("you can't vote");
   }
 

 }
 // 3. else-if statement 
{
 let mode="dark";

 let color;
 if(mode=="dark"){

    color="black";

 }
 else if(mode=="blue")
 {


    color="blue";
 }
 else if(mode=="eye care"){


    color="yellow";

 }
 else{


    color="white";
 }
 console.log(color);
}
// 4.ternary operator
{

 let age=17;

  let result = age>=18?"you can  drive":"you can't drive";
  console.log(result);
}
