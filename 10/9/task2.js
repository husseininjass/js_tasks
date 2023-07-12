let adding = 1;
for(let i = 1 ; i <= 4 ; i++){
    for(let j =0 ; j<i ; j++){
        document.write(adding + " ");
        adding++;
    }
    document.write("<br>");
}



let a = 1;
for(let k =1 ; k<=4 ; k++){
    var line = "";
    for(let m =0 ; m<k ; m++){
       
        line+=a + " ";
        a++;
    }
    console.log(line);
}