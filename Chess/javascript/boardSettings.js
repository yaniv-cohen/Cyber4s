


function generate(){
let tank = document.getElementById('tank').checked;
let portal = document.getElementById('portal').checked;
let beyblade = document.getElementById('beyblade').checked;
document.getElementById('endScreenWhite').style.display="none";
document.getElementById('endScreenBlack').style.display="none";
paintGrid(tank,portal,beyblade);
}