// -- Déclarer un tableau numérique
const prenoms = ["Hugo", "Zita", "Ivan", "Justine", "Francois"];

// -- Aperçu dans la console
console.log(prenoms);

// -- Si je veux connaitre le nombre d'éléments ( prenom ) de mon Tableau ?
let nombreElementsDansMonTableau = prenoms.length;
console.log(nombreElementsDansMonTableau);

// -- Pour récupérer une valeur dans le tableau numérique j'utilise son indice. (index)
console.log(prenoms[1]); // Zita
console.log(prenoms[3]); // Justine

let i = 2;
console.log(prenoms[i]); // Ivan

// -- Pour i=0 (Au départ i vaut 0) ; tant que i < (est strictement inférieur) à nombreElementsDansMonTableau (prenoms.length) ;
// alors i++ (j'incrémente i de 1)
for (let i = 0; i < nombreElementsDansMonTableau; i++) {

    // -- Tout ce qui est situé à l'intérieur des accolades, sera dans la boucle.

    console.log('Ici, i = ' + i)
    console.log(prenoms[i]);
    console.log('---');

} // Fin de la boucle For


// -- Voyons maintenant, comment procéder avec des objets

const Contact = {
    // INDICE   :   VALEUR
    prenom: "Thomas",
    nom: "CHEYLAS",
    tel: "0698666558",
};

// -- Aperçu dans la console
console.log(Contact);

// -- Pour récupérer les valeurs d'un objet, j'utilise le "." suivi de l'INDICE. 
console.log("Prenom : " + Contact.prenom)
console.log("Nom : " + Contact.nom)
console.log("Tel : " + Contact['tel']) // Autre possibilité

const Contacts = [
    "Hugo",
    "Zita",
    {
        // INDICE   :   VALEUR
        prenom: "Ivan",
        nom: "BRAGA",
        age: 18,
    },
    {
        // INDICE   :   VALEUR
        prenom: "Bruno (Jean-Luc)",
        nom: "COUGNY",
        age: 47,
    }
];

// -- Aperçu dans la console
console.clear();
console.log(Contacts);

// -- Comment accéder aux valeur de mon objet, dans le tableau numérique.

// -- 1. D'abord, je récupère mon objet
console.log(Contacts[2]);

// -- Pour accéder aux valeurs de mon objet
console.log("Prenom : " + Contacts[2].prenom);
console.log("Nom : " + Contacts[2].nom);
console.log("Age : " + Contacts[2].age);

// -- En résumé, j'accède à la valeur de l'indice "prenom" de l'objet situé à l'index 2 de mon tableau numérique "Contacts".


// -- Comment parcourir un tableau avec des objets.
// -- Partons du tableau suivant : 

const Etudiants = [
    { prenom: "Hugo", nom: "LIEGEARD", competence: "Fullstack" },
    { prenom: "David", nom: "GUERRA", competence: "Front" },
    { prenom: "Rachid", nom: "KAMAN", competence: "Back" },
    { prenom: "Zita", nom: "NGUYEN", competence: "Fullstack" },
    { prenom: "Thomas", nom: "CHEYLAS", competence: "Front" },
    { prenom: "Asam", nom: "AHMAD", competence: "Front" },
];

// -- Regardons dans la console

console.log(Etudiants);

// -- Si je veux connaitre le nombre d'éudiants : 
const nombreEtudiants = Etudiants.length;
console.log("Nombre d'étudiants = " + nombreEtudiants);

/* ------------------------------------------------------
|       ~ ~ ~ ~    💀  EXERCICE 😜     ~ ~ ~ ~          |
|                                                        |  
|                                                        |  
|  Affichez dans la page HTML à l'aide de jQuery la      | 
|  liste (ul>li) des Etudiants et leur classe.           | 
|                                                        | 
|_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  */


$(document).ready(function () {

    for (let i = 0; i < Etudiants.length; i++) {
        $("#etudiants").append('<li class="list-group-item">' + Etudiants[i].prenom + " " + Etudiants[i].nom + " / " + '<strong class="text-danger">' + Etudiants[i].competence + "<strong>" + "</li>")
    }

});


// CORRECTION 

$(function(){

    // Ici, jQuery est prêt à travailler !
    console.log('jQuery is ready to rock !')

    // Création d'une balise <ul></ul>
    const ul = $('<ul class="list-group text-center p-5">');

    for(let i = 0 ; i < nombreEtudiants ; i++ ){

        // -- Je récupère l'étudiant en cours dans ma boucle.
        let Etudiant = Etudiants[i];

        // Aperçu dans la console.
        console.log(Etudiant);

        $(`
            <li class="list-group-item">
                <strong> ${Etudiant.prenom} ${Etudiant.nom} </strong> : ${Etudiant.competence}
            </li>
        `).appendTo( ul );

    } // Fin Boucle For

    ul.appendTo($('body'));

});





