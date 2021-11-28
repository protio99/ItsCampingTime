class Bag {
    constructor(bagName, weather, campDays) {
        this.bagName = bagName;
        this.weather = weather;
        this.campDays = campDays;
    }
}
document.getElementById('btnCreateBag').onclick = createBag;
document.getElementById('btnUpdateBag').onclick = updateBag;
document.getElementById('btnShowBag').onclick = showBags;
document.getElementById('btnDeleteBag').onclick = deleteBag;

let bags = [];

function advertCreateBag() {
    document.getElementById('viewBags').innerHTML = "<p>Bag successfully created</p>";
}
function saveBagsLS() {
    let bagsString = JSON.stringify(bags);
    localStorage.setItem('bagName', bagsString);

}

function getBagsLS() {
    let bag = localStorage.getItem('bagName');
    if (!bag) {
        return []
    }
    return JSON.parse(bag);

}
function createBag() {
    let form = document.forms['formInfo'];
    //Acceder al input name="bagName"
    let bagName = form['bagName'];
    let weather = form['weather'];
    let campDays = form['campDays'];
    //Crear un nuevo objeto de la clase 'Bag'
    //Agregando todas las maletas creadas a una lista para poderlas contener todas en un solo sitio
    bags = getBagsLS();
    //Busca el objeto y si lo encuentra retorna true
    let obj = bags.find(obj => obj.bagName == bagName.value);
    if (!obj) {
        let bag = new Bag(bagName.value, weather.value, campDays.value);
        bags.unshift(bag);
        saveBagsLS();
        advertCreateBag();
    } else {
        document.getElementById('viewBags').innerHTML = '<p>The bag already exists</p>';
    }

}

function showBags() {
    bags = getBagsLS();
    let bagsListHTML = "";
    for (i in bags) {
        bagsListHTML += `<p> Bag name ${i}: ${bags[i].bagName}, Weather: ${bags[i].weather}, Camp days: ${bags[i].campDays}</p><br> `;

    } console.log(bagsListHTML);
    document.getElementById('viewBags').innerHTML = bagsListHTML;


}

function deleteBag() {
    bags = getBagsLS();
    let form = document.forms['formInfo'];
    let id = form['bagName'].value;
    console.log(id);
    //busca el indice en el que se  esta guardando
    let a = bags.indexOf(obj => obj.bagName == id);
    if (a == -1) {
        document.getElementById('viewBags').innerHTML = '<p>The bag does not exists</p>';

    } else {
        bags.splice(a, 1);
        saveBagsLS();
        document.getElementById('viewBags').innerHTML = '<p>Successfully removed</p>';
    }

}

function updateBag() {
    bags = getBagsLS();
    let form = document.forms['formInfo'];
    let bagName = form['bagName'].value;
    let weather = form['weather'].value;
    let campDays = form['campDays'].value;
    let obj = bags.find(obj => obj.bagName == bagName);
    if (!obj) {
        document.getElementById('viewBags').innerHTML = '<p>The bag does not exists</p>';

    } else {
        obj.weather = weather;
        obj.campDays = campDays;
        saveBagsLS();
        document.getElementById('viewBags').innerHTML = '<p>Successfully updated</p>';
    }


}