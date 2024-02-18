const win=new Audio('win.mp3');
win.load();
window.onload=() => {
    win.play();
};
const elapsedTime = localStorage.getItem('elapsedTime');
if(elapsedTime == 1){
document.getElementById('fill').textContent = elapsedTime + ' second';}
else{document.getElementById('fill').textContent = elapsedTime + ' seconds';}
    