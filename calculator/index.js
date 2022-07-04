let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenValue="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerHTML;
        console.log(buttonText);
        if(buttonText=='%')
        {
            buttonText='/'
            screenValue+=buttonText;
            screen.value+=buttonText;

        }
         if(buttonText=='C'){
        screenValue="";
        screen.value="";
        }
        else if(buttonText=='=')
        screen.value=eval(screenValue);
        else{
            screenValue+=buttonText;
            screen.value+=buttonText;
    
        }
    })
}