let second = 0;
let minute = 0;
let hour = 0;
let seconds = document.body.querySelector(".seconds");
let minutes = document.body.querySelector(".minutes");
let hours = document.body.querySelector(".hours")
let playButton = document.querySelector(".startActive");
let intervalButton = document.querySelector("#buttons > a:first-child")
let interval;

function secondIncrement(){
    second++;
    seconds.innerHTML = second;
    minutes.innerHTML = `${minute}.`;
    hours.innerHTML =`${hour}:`;

    if(second<10){
        seconds.innerHTML = `0${second}`
    }

    if(minute<10){
        minutes.innerHTML = `0${minute}:`
    }

    if(hour<10){
        hours.innerHTML = `0${hour}:`
    }

    if(second==99){
        second = 0;
        minute++;
    }
    if(minute==10){
        minute=0
        hour++;
    }
    
}

function startPlay(){
        playButton.setAttribute
        interval = setInterval(secondIncrement, 10);
}

function createParagraph(){
    let intervalValue = document.createElement("p")
    intervalValue.setAttribute("class", "paragraphs");
    let intervalText = document.createTextNode = `${hour}:${minute}:${second}`;
    intervalValue.innerHTML = intervalText;
    document.querySelector(" #intervalContainer").appendChild(intervalValue);
}

function deleteParagraph(){
  let intervalParagraphs = document.querySelector("#intervalContainer");
  intervalParagraphs.innerHTML = "";
}

playButton.addEventListener("click", ()=>{
    if(playButton.innerHTML=="Stop"){
        clearInterval(interval)
        playButton.innerHTML = "Play"
        intervalButton.innerHTML = "Restart" 
    }else{
        startPlay()
        playButton.innerHTML = "Stop"
        intervalButton.setAttribute("class", "intervalButton")
        intervalButton.innerHTML = "Interval"        
    }
})

intervalButton.addEventListener("click", ()=>{
    if(intervalButton.innerHTML == "Restart"){
    
         second = 0;
         minute = 0;
         hour = 0;
    
    seconds.innerHTML = second;
    minutes.innerHTML = `${minute}.`;
    hours.innerHTML =`${hour}:`;

    if(second<10){
        seconds.innerHTML = `0${second}`
    }

    if(minute<10){
        minutes.innerHTML = `0${minute}:`
    }

    if(hour<10){
        hours.innerHTML = `0${hour}:`
    }   


    
    intervalButton.setAttribute("class", "")
    intervalButton.innerHTML = ""
    deleteParagraph()
    document.querySelector("#main").setAttribute("class", "")

    }else{
        createParagraph()
        document.querySelector("#main").setAttribute("class", "counts")
    }



})


