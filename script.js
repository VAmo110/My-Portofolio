// تسجيل GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Animations using GSAP
document.addEventListener('DOMContentLoaded', () => {
    // Apply animations to sections
    gsap.utils.toArray('.gsap-fadeIn').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 20,
            duration: 1.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: () => element.classList.add('animate'),
                onLeaveBack: () => element.classList.remove('animate')
            }
        });
    });

    gsap.utils.toArray('.gsap-slideUp').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: () => element.classList.add('animate'),
                onLeaveBack: () => element.classList.remove('animate')
            }
        });
    });

    gsap.utils.toArray('.gsap-slideLeft').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            x: 50,
            duration: 1.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: () => element.classList.add('animate'),
                onLeaveBack: () => element.classList.remove('animate')
            }
        });
    });

    gsap.utils.toArray('.gsap-slideRight').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            x: -50,
            duration: 1.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: () => element.classList.add('animate'),
                onLeaveBack: () => element.classList.remove('animate')
            }
        });
    });

    gsap.utils.toArray('.gsap-zoomIn').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            scale: 0.5,
            duration: 1.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: () => element.classList.add('animate'),
                onLeaveBack: () => element.classList.remove('animate')
            }
        });
    });

    // Parallax Scroll for sections
    gsap.utils.toArray('.section').forEach(section => {
        gsap.to(section, {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                scrub: true,
                start: "top bottom",
                end: "bottom top"
            }
        });
    });

    // Button hover and click animations
    const buttons = document.querySelectorAll('.gsap-hover, .gsap-click');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.inOut" });
        });

        button.addEventListener('mouseout', () => {
            gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.inOut" });
        });

        button.addEventListener('click', () => {
            gsap.to(button, { scale: 0.95, duration: 0.1, ease: "power2.inOut", yoyo: true, repeat: 1 });
        });
    });

    // Smooth scrolling for CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        gsap.to(window, { duration: 1, scrollTo: "#about", ease: "power2.inOut" });
    });

    // Stunning 3D Background with Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-canvas').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347, metalness: 0.5, roughness: 0.5 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 0, 0);
    scene.add(sphere);

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff4500, metalness: 0.3, roughness: 0.7 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(3, 0, 0);
    scene.add(cube);

    const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff8c00, metalness: 0.8, roughness: 0.2 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 0, 0);
    scene.add(torus);

    camera.position.z = 5;

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
        cube.rotation.x += 0.007;
        cube.rotation.y += 0.007;
        torus.rotation.x += 0.006;
        torus.rotation.y += 0.006;
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    // Enhanced Chat AI
    const chatBot = document.getElementById('chat-bot');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendChat = document.getElementById('send-chat');
    const openChat = document.getElementById('open-chat');
    const closeChat = document.getElementById('close-chat');

    let chatHistory = [];
    let messageCount = 1;

    openChat.addEventListener('click', () => {
        chatBot.classList.remove('hidden');
        const notification = openChat.querySelector('span');
        if (notification) notification.textContent = messageCount;
    });

    closeChat.addEventListener('click', () => {
        chatBot.classList.add('hidden');
    });

    sendChat.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            addMessage('You: ' + message, 'user');
            chatHistory.push({ role: 'user', content: message });
            chatInput.value = '';
            messageCount++;
            updateChatNotification();

            // رد مؤقت بدل OpenAI API
            const botResponse = "Chat AI: Thanks for your message! How can I assist you today?";
            chatHistory.push({ role: 'assistant', content: botResponse });
            addMessage('Chat AI: ' + botResponse, 'bot');

            if (chatHistory.length > 50) {
                chatHistory = chatHistory.slice(-50);
            }
            localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChat.click();
        }
    });

    function addMessage(message, type) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.className = `mb-2 ${type === 'user' ? 'text-right text-[#d69e2e]' : 'text-left text-gray-200'}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
        chatHistory = JSON.parse(savedHistory);
        chatHistory.forEach(msg => {
            addMessage(msg.role === 'user' ? 'You: ' + msg.content : 'Chat AI: ' + msg.content, msg.role === 'user' ? 'user' : 'bot');
        });
        messageCount = chatHistory.length / 2 + 1;
        updateChatNotification();
    }

    function updateChatNotification() {
        const notification = openChat.querySelector('span');
        if (notification) notification.textContent = messageCount;
    }

    document.addEventListener('click', (e) => {
        if (!chatBot.contains(e.target) && e.target !== openChat) {
            chatBot.classList.add('hidden');
        }
    });

    // Dynamic background animation using GSAP
    gsap.to('.background-animation', {
        backgroundPosition: '100% 50%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        onStart: () => {
            gsap.to('.background-animation', { opacity: 0.3, duration: 1 });
        }
    });

    // Controls Modal
    const openControls = document.getElementById('open-controls');
    const controlsModal = document.getElementById('controls-modal');
    const closeControls = document.getElementById('close-controls');

    openControls.addEventListener('click', () => {
        controlsModal.classList.remove('hidden');
        gsap.from(controlsModal, { opacity: 0, scale: 0.8, duration: 0.5, ease: "power2.inOut" });
    });

    closeControls.addEventListener('click', () => {
        gsap.to(controlsModal, { opacity: 0, scale: 0.8, duration: 0.5, ease: "power2.inOut", onComplete: () => controlsModal.classList.add('hidden') });
    });

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.textContent.toLowerCase();
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                if (category === 'all' || card.classList.contains(`category-${category}`)) {
                    card.style.display = 'block';
                    gsap.from(card, { opacity: 0, y: 50, duration: 0.5, ease: "power2.inOut" });
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    if (filterButtons.length > 0) {
        filterButtons[0].click();
    } else {
        console.error("لم يتم العثور على أزرار التصفية (.filter-btn)");
    }

    // إضافة Dark Mode Toggle
    const toggleDarkMode = document.getElementById('toggle-dark-mode');
    const body = document.getElementById('body');
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    toggleDarkMode.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        gsap.from(body, { opacity: 0.8, duration: 0.5 });
    });

    // إضافة أنيميشن بسيط للعناصر عند التحميل
    gsap.utils.toArray('.section h2').forEach(h2 => {
        h2.addEventListener('mouseenter', () => {
            gsap.to(h2, { x: 10, duration: 0.3, ease: "power2.inOut", yoyo: true, repeat: 1 });
        });
    });

    // تحسين Responsive Design
    function adjustLayout() {
        if (window.innerWidth < 768) {
            gsap.to('.section', { padding: '1rem', duration: 0.3 });
        } else {
            gsap.to('.section', { padding: '1.5rem', duration: 0.3 });
        }
    }
    window.addEventListener('resize', adjustLayout);
    adjustLayout();

    // Animated Progress Bars for Skills
    gsap.utils.toArray('.progress-bar').forEach(bar => {
        gsap.to(bar, {
            width: `${bar.dataset.progress}%`,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: { trigger: bar, start: "top 80%" }
        });
    });

    // Interactive Timeline for Portfolio
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            const details = item.querySelector('.details');
            const isOpen = details.style.height === 'auto';
            gsap.to(details, {
                height: isOpen ? 0 : "auto",
                opacity: isOpen ? 0 : 1,
                duration: 0.5,
                ease: "power2.inOut"
            });
        });
    });

    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.inOut" });
    });

    // Dynamic Background Particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#d69e2e' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' } }
        }
    });

    // Contact Form Validation & Submission
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        if (name && email && message) {
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { name, email, message })
                .then(() => alert("Message sent successfully!"))
                .catch(() => alert("Failed to send message."));
        } else {
            alert("Please fill all fields!");
        }
    });

    // Sticky Navigation Menu
    gsap.utils.toArray('.nav-link').forEach(link => {
        const sectionId = link.getAttribute('href');
        ScrollTrigger.create({
            trigger: sectionId,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => link.classList.add('active'),
            onLeaveBack: () => link.classList.remove('active')
        });
        link.addEventListener('click', (e) => {
            e.preventDefault();
            gsap.to(window, { scrollTo: sectionId, duration: 1, ease: "power2.inOut" });
        });
    });
});

// Save chat history in localStorage on page unload
window.addEventListener('beforeunload', () => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
});
