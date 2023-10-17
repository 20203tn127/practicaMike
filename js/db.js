//Crea la bd
let req = window.indexedDB.open( 'pwadb', 1);

//Si necesita actualizar
req.onupgradeneeded = (e) =>{
    console.log("Db updated", e);
    let db = e.target.result;
    console.log(db);
}
