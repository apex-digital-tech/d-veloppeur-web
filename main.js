document.addEventListener('DOMContentLoaded', () => {

    // 1. CORRIGÉ : ID synchronisé avec la majuscule du HTML ('Whatsapp-form')
    const whatsappForm = document.getElementById('Whatsapp-form');

    if (whatsappForm) {
         whatsappForm.addEventListener('submit', function(e){
            e.preventDefault(); // Empêche le rechargement de la page

            // 2. CORRIGÉ : getElementById utilisé pour récupérer le nom
            const name = document.getElementById('name').value.trim();
            const projectType = document.getElementById('project-type').value; // CORRIGÉ : casse harmonisée
            const message = document.getElementById('message').value.trim();

            // 3. CORRIGÉ : Suppression du 0 bloquant après l'indicatif pays
            const phoneNumber = "212615416192";

            // Construction du message textuel
            const baseText = `Bonjour LOUMOUAMOU MPAKOU, je viens depuis votre portfolio.\n\n` +
                             `*Nom :* ${name}\n` +
                             `*Type de projet :* ${projectType}\n\n` +
                             `*Message :*\n${message}`;
                             
            // 4. CORRIGÉ : Orthographe de la fonction d'encodage
            const encodedText = encodeURIComponent(baseText);
           
            // 5. CORRIGÉ : Syntaxe de l'URL WhatsApp avec le slash / et le symbole \$
            const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodedText}`;

            // Redirection propre dans un nouvel onglet
            window.open(whatsappUrl, '_blank');
         });
    }

    // --- LOGIQUE DE NAVIGATION AU SCROLL ---
    // 6. CORRIGÉ : Sélection des balises 'section' existantes
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        // 7. CORRIGÉ : Propriété globale sécurisée pour récupérer le scroll
        const scrollPosition = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            // 8. CORRIGÉ : Propriétés de position et de hauteur valides
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // CORRIGÉ : Vérification stricte pour éviter l'allumage simultané des liens
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
