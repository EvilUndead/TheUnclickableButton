const btheight=100;
const btwidth=100;
const maxwidth=window.innerWidth-btwidth;
const maxheight=window.innerHeight-btheight-175;
const ping=new Audio('ping.mp3');
ping.load();    
    window.addEventListener('DOMContentLoaded',() => {
        const button =document.getElementById('bt');
        button.addEventListener('click',() => alert('Clicked!'));
        button.addEventListener('mouseover',() => {
            ping.currentTime=0;
            ping.play();
            button.style.left=Math.floor(Math.random()*(maxwidth+1))+'px';
            button.style.top=Math.floor(Math.random()*(maxheight+1))+'px';
            bt.style.opacity=0;
            setTimeout(() => {  
                bt.style.opacity=1;
            }, 10);
        });
    });
    window.onload = () => {
        startTime = new Date().getTime();
        setInterval(updateTimer, 1000); 
    };
    document.getElementById('won').addEventListener('click',() => {
        const elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
        localStorage.setItem('elapsedTime', elapsedTime);
    });