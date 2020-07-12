// var person = function(name ,yearofbirth, work)
// {
//     this.name = name;
//     this.yearofbirth = yearofbirth;
//     this.work = work;
// }
// person.prototype.calculateage = function(){
//     console.log(2019 - this.yearofbirth);
// }
// person.prototype.lastname = this.lastname;

// var jhon = new person("jhon",1999,"engineer");

// jhon.calculateage();
// jhon.lastname = smith;
// console.log(jhon);

//primitives and objects
//primitives
// var a = 90;
// var b = a;
// var a = 45;
// console.log(a);
// console.log(b);
// //objects
// var keshav = {
//     name: "keshav kabra",
//     age: 20
// }
// var k1 = keshav;
// keshav.age = 21;
// console.log(keshav.age);
// console.log(k1.age);


// //functions
// var rollno= 20;
// var obj = {
//     city : "pune",
//     name:"obj name"
// }

// function test(a,b)
// {
//     a = 21;
//     b.city ="mumbai";
// }

// test(rollno,obj);
// console.log(rollno,obj.city);

//function calling function

/*Names = ["keshav","mayank","nihal","other"];

function CalculateLength(arr, fn)
{
    LenArr=[];
    for (var i =0;i<arr.length;i++)
    {
        LenArr.push(fn(arr[i]));
    }
    return LenArr;
}

function Length(el)
{
    return el.length;
}

var result = CalculateLength(Names,Length);
console.log(result);*/

//function returning function
// function question(job){
//     if (job==="designer")
//     return function(name){
//         console.log("explain ux design");
//     }
//     else if(job==="teacher")
//     return function(name){
//         console.log("explain ux design");
//     }
//     )
// }

var question = { 
    answer : [0,0,0],
    choice:0,
    ques : ["what is capital of india", "who is the pm of india","where is pune"],
    options: [["delhi","mumbai","chennai"],["modi","manmohansingh","someone else"],["maharastra","rajasthan","up"]],
    askquestion : function(){
        questionno = Math.floor(Math.random()*2);
        console.log(this.ques[questionno]);
        for (var i= 0;i<3;i++)
        {
            console.log(this.options[questionno][i]);
        }
        this.choice = prompt("enter your choice");
        if(this.answer[questionno] == this.choice) {
            
            console.log("correct answer");
        }
        else{
           console.log("wrong answer");
        }
        }
}
question.askquestion();