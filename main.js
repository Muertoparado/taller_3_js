let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioPersonas = document.querySelector("#myFormularioPersonas");
let team= document.querySelector("#team")
let jornada= document.querySelector("#jornada")
let selectionRol= document.querySelector("#selectionRol")
let campus = {};
let teamgroup={};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: [], team: []};
    listaSedes();
    myFormularioCampus.reset();
});

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
team.addEventListener("submit",(e)=>{
    e.preventDefault();
    let info=Object.fromEntries(new FormData(e.target))
    teamgroup[`${info.teamg}`];
    console.log(teamgroup);
    listTeams();
    team.reset();
});
let listTeams =()=>{
    let opciones = document.querySelector("[name='teamg']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(teamgroup)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

myFormularioPersonas.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioPersonas.reset();
})

selectionRol.addEventListener("click",(e)=>{
    e.preventDefault();


    selectionRol.reset();
})