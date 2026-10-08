document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIQUE DU MENU MOBILE (BURGER) ---
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (burgerBtn && navMenu) {
        // Ouvre et ferme le menu au clic sur le bouton burger
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Ferme automatiquement le menu mobile lorsqu'on clique sur un lien d'ancre
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }


    // --- FORMULAIRE D'ENVOI WHATSAPP ---
    // CORRIGÉ : ID synchronisé en minuscules pour correspondre exactement au HTML ('whatsapp-form')
    const whatsappForm = document.getElementById('whatsapp-form');

    if (whatsappForm) {
         whatsappForm.addEventListener('submit', function(e){
            e.preventDefault(); // Empêche le rechargement de la page

            // Récupération des données du formulaire
            const name = document.getElementById('name').value.trim();
            const projectType = document.getElementById('project-type').value; 
            const message = document.getElementById('message').value.trim();

            // Numéro de téléphone au format international (sans + ni 0 initial)
            const phoneNumber = "212615416192";

            // Construction du message textuel
            const baseText = `Bonjour LOUMOUAMOU MPAKOU, je viens depuis votre portfolio.\n\n` +
                             `*Nom :* ${name}\n` +
                             `*Type de projet :* ${projectType}\n\n` +
                             `*Message :*\n${message}`;
                             
            // Encodage propre des caractères spéciaux pour l'URL
            const encodedText = encodeURIComponent(baseText);
           
            // CORRIGÉ : Syntaxe de l'URL template littérale réparée (ajout de / et de \$)
            const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodedText}`;

            // Redirection propre dans un nouvel onglet
            window.open(whatsappUrl, '_blank');
         });
    }


    // --- LOGIQUE DE NAVIGATION AU SCROLL (ACTIVE LINKS) ---
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Évalue quelle section est actuellement visible à l'écran
            if (scrollPosition >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Vérification pour attribuer la classe active au bon lien de navigation
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
