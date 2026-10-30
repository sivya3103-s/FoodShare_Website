document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. Mobile Menu Toggle
    // ==========================================
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Auto-close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // ==========================================
    // 2. Welcome Modal Logic
    // ==========================================
    const modal = document.getElementById('welcome-modal');
    const closeBtn = document.getElementById('close-modal');
    
    // Show modal on page load with a slight delay for better UX
    setTimeout(() => {
        if (modal) {
            modal.classList.remove('hidden');
        }
    }, 500); 

    // Close modal via the 'X' button
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    // Close modal when clicking outside the modal content (on the overlay)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // ==========================================
    // 3. Request Food Button Feedback (Demo)
    // ==========================================
    const requestButtons = document.querySelectorAll('button');
    requestButtons.forEach(btn => {
        if (btn.textContent.trim() === 'Request Food') {
            btn.addEventListener('click', (e) => {
                const originalText = btn.textContent;
                btn.textContent = 'Requested ✓';
                btn.classList.remove('bg-primary', 'hover:bg-green-600');
                btn.classList.add('bg-gray-400', 'cursor-not-allowed');
                btn.disabled = true;
                
                // Optional: Reset after 3 seconds for demo purposes
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.add('bg-primary', 'hover:bg-green-600');
                    btn.classList.remove('bg-gray-400', 'cursor-not-allowed');
                    btn.disabled = false;
                }, 3000);
            });
        }
    });
});