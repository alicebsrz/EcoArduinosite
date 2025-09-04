// --- MENU MOBILE ---
// Encontra o botão do menu e o menu em si
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Adiciona um evento de clique ao botão
if (mobileMenuBtn) { // Garante que o botão só existe na página certa
    mobileMenuBtn.addEventListener('click', () => {
        // Alterna a classe 'hidden' para mostrar ou esconder o menu
        mobileMenu.classList.toggle('hidden');
    });
}


// Fecha o menu mobile quando um link é clicado
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});


// --- ROLAGEM SUAVE ---
// Esta função é chamada pelos botões no HTML
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = 64; // Altura da barra de navegação para calcular o deslocamento
        const elementPosition = element.offsetTop - navHeight;
        
        // Rola a janela até a posição calculada com efeito suave
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}


// --- LINK ATIVO NA NAVEGAÇÃO ---
// Adiciona um evento que dispara sempre que a página é rolada
window.addEventListener('scroll', () => {
    const sections = ['inicio', 'sobre', 'tutoriais', 'projetos', 'kit', 'contato'];
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let currentSection = 'inicio';

    // Verifica qual seção está visível na tela
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom >= 80) { // Um pouco mais de margem
                currentSection = section;
            }
        }
    });

    // Atualiza a cor dos links com base na seção visível
    navLinks.forEach(link => {
        link.classList.remove('text-green-600', 'font-bold');
        link.classList.add('text-gray-600');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.remove('text-gray-600');
            link.classList.add('text-green-600', 'font-bold');
        }
    });
});


// --- BOTÕES DE TUTORIAL (EM CONSTRUÇÃO) ---
// Adiciona a funcionalidade de alerta APENAS para os botões que ainda têm a classe 'ver-tutorial-btn'
document.querySelectorAll('.ver-tutorial-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Tutorial em desenvolvimento! Em breve você terá acesso ao passo a passo completo com código e lista de materiais.');
    });
});

