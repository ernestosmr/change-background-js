const mainBackground = document.getElementById('main-background');
const btn = document.getElementById('btn')
const colors = ['blue', 'white', 'black', 'orange', 'green', 'red', 'yellow', 'pink', 'brown'];

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

mainBackground.style.backgroundColor = colors.random();
btn.style.backgroundColor = mainBackground.style.backgroundColor;
function changeBackgroundColor(){
    if(mainBackground.style.backgroundColor == 'yellow' 
    || mainBackground.style.backgroundColor == 'red' 
    || mainBackground.style.backgroundColor == 'orange'
    || mainBackground.style.backgroundColor == 'white')
    {
        btn.style.color = 'black'
        btn.style.borderColor = 'black'
    } else if(mainBackground.style.backgroundColor == 'pink'){
        btn.style.color = 'red'
        btn.style.borderColor = 'red'
    } else{
        btn.style.color = 'white'
        btn.style.borderColor = 'white'
    }
}
changeBackgroundColor();

btn.onclick = () => {
    mainBackground.style.backgroundColor = colors.random();
    btn.style.backgroundColor = mainBackground.style.backgroundColor;
    changeBackgroundColor();
}
