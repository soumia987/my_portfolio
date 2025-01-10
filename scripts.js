

// $(document).ready(function () {
//     // Liste de projets
//     const projects = [
//         {
//             title: "Blog Statique",
//             description: "Un blog simple avec HTML et CSS.",
//             link: "https://github.com/soumia987/Blog-Statique",
//             img: "project.png"
//         },
//         {
//             title: "Portfolio Dynamique",
//             description: "Un portfolio interactif avec Bootstrap et jQuery.",
//             link: "https://github.com/mon-portfolio/portfolio-dynamique",
//             img: "screen portfolio.png"
//         },
//         {
//             title: "stok manager",
//             description: "permet d'effectuer des operations en entrant 2 nombres.",
//             link: "https://githuhttps://github.com/soumia987/stock_manager.jsb.com/mon-portfolio/app-meteo",
//             img: "task manager.jpg"
//         }
//     ];

//     // Charger les projets initialement
//     loadProjects(3);

//     // Fonction pour afficher les projets
//     function loadProjects(count) {
//         const projectContainer = $('#project-list');
//         projectContainer.empty();

//         for (let i = 0; i < count && i < projects.length; i++) {
//             const project = projects[i];
//             const projectCard = `
                
//             `;
//             projectContainer.append(projectCard);
//         }
//     }


//     // Validation du formulaire de contact
//     $('#contact-form').submit(function (e) {
//         e.preventDefault();

//         const name = $('#name').val();
//         const email = $('#email').val();
//         const message = $('#message').val();

//         if (name && email && message) {
//             $('#form-feedback').html('<p class="text-success">Merci pour votre message, je vous répondrai bientôt.</p>');
//             $(this).trigger('reset');
//         } else {
//             $('#form-feedback').html('<p class="text-danger">Veuillez remplir tous les champs.</p>');
//         }
//     });
// });


$(document).ready(function() {

    let typed_project = new Typed(".auto-typed-projects", {
        strings: ["Mes Projects"],
        typeSpeed: 150,
        loop: true
    });
    let typed_contact = new Typed(".auto-typed-contact", {
        strings: ["Contacts"],
        typeSpeed: 150,
        loop: true
    });
    






}); // no code outside














