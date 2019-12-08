function func(){
	var a=document.quiz.quest1.value;
	var b=document.quiz.quest2.value;
	var c=document.quiz.quest3.value;
	var name=document.getElementById("nm").value;
	var ans=0;
	

	if(a=="swizerland")
	{
		ans++;
	}
	if (b=="beijing") {
		ans++;
	}
	if(c=="usa"){
		ans++;
	}

	if(ans==0)
	{
		alert("better luck next time");

	}
    else{
    alert(name+"  "+"your score is"+" "+ans);

    
    }
		}
