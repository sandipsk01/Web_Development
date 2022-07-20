function giveAnswer(name,answer){
    //outputStatements
    // alert("Yes")
    // document.write("dffddfdjgdjgdfgfdfgfdgdgdgdg")
    // var myAnwer=name +"says"+answer
    // alert(myAnwer) //window.alert
    //console.log
    var x=window.prompt();


    //sandip=1
    //others=2

    if((name=='Sandip'&& x==1)
    ||(name=='Other'&& x==2)){
        var x=document.getElementById('feedback');
        x.innerHTML=name+" says that "+answer;
    }
    else{
        var x=document.getElementById('errorStatement');
        x.innerHTML="Invalid Credentials";
    }
    // input statements
    // window.prompt()
    // window.confirm()
}