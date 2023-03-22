const campus= document.getElementById('myFormularioCampus');
let myFormularioCampers=document.getElementById('#myFormularioCampers')

const tecnologia=document.querySelector('#tecnologia');
const team=document.querySelector('#team');

var camp=[{
    nomsede:'nombreSede',
    direc: 'direccion',
    cel: 'telefono',
}];
let data={};
let tec={};
let tem={};

campus.addEventListener('submit',(e)=>{

    e.preventDefault();
    console.log(campus);
    let nomsede= document.getElementsByName('nombreSede');
    let direc= document.getElementsByName('direccion');
    let cel= document.getElementsByName('telefono'); 
    let data= Object.fromEntries(new FormData(e.target.nomsede,e.target.direc,e.target.cel))

    camp[`${data.nombreSede}`,`${data.direccion}`,`${data.telefono}`]=[];
    console.log(camp);
    listaSedes();
    campus.reset();
});

let listaSedes=()=>{
    let opciones = document.querySelector("[name='sede']");
        opciones.innerHTML = null;
        for (let [val, id] of Object.entries(camp)) {
            opciones.insertAdjacentHTML("beforeend", `
                <option value="${val}">${val}</option>
            `);
        }

};




/* 
myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    camp[`${sede}`]["Camper"].unshift(data);
    console.log(camp);
    myFormularioPersonas.reset();
});
*/

tecnologia.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    tec[`${data.tecnologia}`] = {};
    tecnologiaa();
    tecnologia.reset();
});

let tecnologiaa = ()=>{
    let opciones = document.querySelector("[name='tecscroll']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(tec)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
};
 
team.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    tem[`${data.team}`] = {};
    rTeam();
    team.reset();
});

let rTeam = ()=>{
    let opciones = document.querySelector("[name='teamcamper']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(tem)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
};
