let dogWeight = 40; 
let dogType = "corgi";
const x = 50;

document.getElementById("question").innerHTML= `Hello I have a ${dogType} that weights ${dogWeight}, Can I bring my ${dogType} to the apartment?`;
if (x > 50){
    document.write("Your dog is not allowed in our apartment");
} else { document.write(" Your dog is allowed in our apartment");
}
switch ( dogWeight ) {
    case 10:
        document.write("<p> Your pet fee will be 100 </p>");
        break;
    case 20:
        document.write("<p> Your pet fee will be 150</p>");
        break;
    case 40:
        document.write("Your pet fee will be 200");
        break;
    default: 
        document.write("Standard fee is 100");
}