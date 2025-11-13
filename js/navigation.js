/**
 * Material Design Gallery - Navigation & Functionality Enhancement
 * Provides seamless navigation, error handling, and interactive features
 */

(function() {
    'use strict';
    
    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeNavigation();
        initializePageSpecificFeatures();
        initializeAccessibility();
        initializePerformanceOptimizations();
    });
    
    /**
     * Enhanced Navigation System
     */
    function initializeNavigation() {
        // Add active page indicator
        highlightCurrentPage();
        
        // Handle navigation errors gracefully
        setupErrorHandling();
        
        // Add keyboard navigation support
        setupKeyboardNavigation();
        
        // Add smooth scrolling for internal links
        setupSmoothScrolling();
        
        // Add breadcrumb functionality
        setupBreadcrumbNavigation();
    }
    
    /**
     * Highlight current page in navigation
     */
    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-item, .nav-button, .nav-link');
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage || 
                (currentPage === '' && href === 'index.html') ||
                (currentPage.includes('index') && href === 'index.html')) {
                item.classList.add('active');
                item.setAttribute('aria-current', 'page');
            }
        });
    }
    
    /**
     * Setup error handling for broken links
     */
    function setupErrorHandling() {
        // Handle broken image links
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                console.warn('Image failed to load:', this.src);
            });
        });
        
        // Handle broken navigation links
        document.querySelectorAll('a[href]').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip external links and internal anchors
                if (href.startsWith('http') || href.startsWith('#') || href.startsWith('javascript:')) {
                    return;
                }
                
                // For local links, add loading state
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
                
                // Reset after navigation attempt
                setTimeout(() => {
                    this.style.opacity = '';
                    this.style.pointerEvents = '';
                }, 1000);
            });
        });
    }
    
    /**
     * Enhanced keyboard navigation
     */
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', function(e) {
            // Alt + H: Home
            if (e.altKey && e.key === 'h') {
                e.preventDefault();
                window.location.href = 'index.html';
            }
            
            // Alt + T: Timeline
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                window.location.href = 'timeline.html';
            }
            
            // Alt + D: Designers
            if (e.altKey && e.key === 'd') {
                e.preventDefault();
                window.location.href = 'designers.html';
            }
            
            // Alt + A: About
            if (e.altKey && e.key === 'a') {
                e.preventDefault();
                window.location.href = 'about.html';
            }
            
            // Escape: Back to home
            if (e.key === 'Escape' && window.location.pathname !== '/index.html') {
                window.location.href = 'index.html';
            }
        });
        
        // Add keyboard hints
        addKeyboardHints();
    }
    
    /**
     * Add keyboard navigation hints
     */
    function addKeyboardHints() {
        const keyboardHints = document.createElement('div');
        keyboardHints.className = 'keyboard-hints';
        keyboardHints.innerHTML = `
            <button class="hints-toggle" aria-label="Show keyboard shortcuts">
                <span class="material-icons">keyboard</span>
            </button>
            <div class="hints-content">
                <h4>Keyboard Shortcuts</h4>
                <p><kbd>Alt + H</kbd> Home</p>
                <p><kbd>Alt + T</kbd> Timeline</p>
                <p><kbd>Alt + D</kbd> Designers</p>
                <p><kbd>Alt + A</kbd> About</p>
                <p><kbd>Esc</kbd> Back to Home</p>
            </div>
        `;
        
        // Add CSS for keyboard hints
        const style = document.createElement('style');
        style.textContent = `
            .keyboard-hints {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
            }
            
            .hints-toggle {
                background: var(--md-primary);
                color: var(--md-on-primary);
                border: none;
                border-radius: 50%;
                width: 48px;
                height: 48px;
                cursor: pointer;
                box-shadow: var(--md-elevation-4);
                transition: all 0.3s ease;
            }
            
            .hints-toggle:hover {
                transform: scale(1.1);
                box-shadow: var(--md-elevation-6);
            }
            
            .hints-content {
                position: absolute;
                bottom: 60px;
                right: 0;
                background: var(--md-surface);
                padding: 16px;
                border-radius: 8px;
                box-shadow: var(--md-elevation-4);
                min-width: 200px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(10px);
                transition: all 0.3s ease;
            }
            
            .hints-content.visible {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .hints-content h4 {
                margin: 0 0 12px 0;
                font-size: 14px;
                font-weight: 500;
            }
            
            .hints-content p {
                margin: 4px 0;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            kbd {
                background: var(--md-on-surface);
                color: var(--md-surface);
                padding: 2px 6px;
                border-radius: 3px;
                font-size: 10px;
                font-weight: bold;
            }
            
            @media (max-width: 600px) {
                .keyboard-hints {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(keyboardHints);
        
        // Toggle hints visibility
        const toggle = keyboardHints.querySelector('.hints-toggle');
        const content = keyboardHints.querySelector('.hints-content');
        
        toggle.addEventListener('click', function() {
            content.classList.toggle('visible');
        });
        
        // Hide hints when clicking outside
        document.addEventListener('click', function(e) {
            if (!keyboardHints.contains(e.target)) {
                content.classList.remove('visible');
            }
        });
    }
    
    /**
     * Smooth scrolling for internal links
     */
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without triggering navigation
                    history.replaceState(null, null, `#${targetId}`);
                    
                    // Focus the target for accessibility
                    targetElement.focus({ preventScroll: true });
                }
            });
        });
    }
    
    /**
     * Enhanced breadcrumb navigation
     */
    function setupBreadcrumbNavigation() {
        const breadcrumbs = document.querySelectorAll('.breadcrumb-nav');
        breadcrumbs.forEach(breadcrumb => {
            // Add structured data for SEO
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": []
            };
            
            const items = breadcrumb.querySelectorAll('.breadcrumb-item, .breadcrumb-current');
            items.forEach((item, index) => {
                const text = item.textContent.trim();
                const href = item.getAttribute('href');
                
                structuredData.itemListElement.push({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": text,
                    "item": href ? window.location.origin + '/' + href : window.location.href
                });
            });
            
            // Add structured data to page
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
        });
    }
    
    /**
     * Page-specific features
     */
    function initializePageSpecificFeatures() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        switch (currentPage) {
            case 'index.html':
            case '':
                initializeHomePage();
                break;
            case 'timeline.html':
                initializeTimelinePage();
                break;
            case 'designers.html':
                initializeDesignersPage();
                break;
            case 'about.html':
                initializeAboutPage();
                break;
        }
    }
    
    /**
     * Home page enhancements
     */
    function initializeHomePage() {
        // Add interactive card effects
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
        
        // Add FAB functionality
        const fab = document.querySelector('.fab');
        if (fab) {
            fab.addEventListener('click', function() {
                // Show a Material Design snackbar
                showSnackbar('Feature coming soon! This would add new designs to the gallery.');
            });
        }
    }
    
    /**
     * Timeline page enhancements
     */
    function initializeTimelinePage() {
        // Add scroll-triggered animations for timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
            observer.observe(item);
        });
    }
    
    /**
     * Designers page enhancements
     */
    function initializeDesignersPage() {
        // Add interactive designer cards
        const designerCards = document.querySelectorAll('.designer-card');
        designerCards.forEach(card => {
            card.addEventListener('click', function() {
                // Add a subtle "read more" effect
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
    }
    
    /**
     * About page enhancements
     */
    function initializeAboutPage() {
        // Add interactive principle demonstrations
        const principleCards = document.querySelectorAll('.principle-card');
        principleCards.forEach(card => {
            const icon = card.querySelector('.material-icons');
            if (icon) {
                card.addEventListener('mouseenter', function() {
                    icon.style.transform = 'scale(1.2) rotate(5deg)';
                });
                
                card.addEventListener('mouseleave', function() {
                    icon.style.transform = '';
                });
            }
        });
    }
    
    /**
     * Accessibility enhancements
     */
    function initializeAccessibility() {
        // Add skip links
        addSkipLinks();
        
        // Enhance focus management
        enhanceFocusManagement();
        
        // Add aria-live region for dynamic content
        addLiveRegion();
    }
    
    /**
     * Add skip navigation links
     */
    function addSkipLinks() {
        const skipLinks = document.createElement('div');
        skipLinks.className = 'skip-links';
        skipLinks.innerHTML = `
            <a href="#main-content" class="skip-link">Skip to main content</a>
            <a href="#navigation" class="skip-link">Skip to navigation</a>
        `;
        
        // Add CSS for skip links
        const style = document.createElement('style');
        style.textContent = `
            .skip-links {
                position: absolute;
                top: -100px;
                left: 0;
                z-index: 9999;
            }
            
            .skip-link {
                position: absolute;
                left: -9999px;
                background: var(--md-primary);
                color: var(--md-on-primary);
                padding: 8px 16px;
                text-decoration: none;
                border-radius: 0 0 4px 0;
                font-weight: 500;
            }
            
            .skip-link:focus {
                left: 0;
                top: 0;
            }
        `;
        
        document.head.appendChild(style);
        document.body.insertBefore(skipLinks, document.body.firstChild);
    }
    
    /**
     * Enhanced focus management
     */
    function enhanceFocusManagement() {
        // Add visible focus indicators
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
        
        // Add CSS for enhanced focus indicators
        const style = document.createElement('style');
        style.textContent = `
            .keyboard-navigation *:focus {
                outline: 2px solid var(--md-primary) !important;
                outline-offset: 2px !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Add live region for screen readers
     */
    function addLiveRegion() {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        
        // Add CSS to hide but keep accessible
        const style = document.createElement('style');
        style.textContent = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(liveRegion);
        
        // Make live region globally available
        window.announceToScreenReader = function(message) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        };
    }
    
    /**
     * Performance optimizations
     */
    function initializePerformanceOptimizations() {
        // Lazy load images
        lazyLoadImages();
        
        // Preload critical pages
        preloadCriticalPages();
        
        // Add loading states
        addLoadingStates();
    }
    
    /**
     * Lazy load images
     */
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    /**
     * Preload critical pages
     */
    function preloadCriticalPages() {
        const criticalPages = ['index.html', 'timeline.html', 'designers.html', 'about.html'];
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        criticalPages.forEach(page => {
            if (page !== currentPage) {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = page;
                document.head.appendChild(link);
            }
        });
    }
    
    /**
     * Add loading states for navigation
     */
    function addLoadingStates() {
        document.querySelectorAll('a[href$=".html"]').forEach(link => {
            link.addEventListener('click', function() {
                showSnackbar('Loading page...', 1000);
            });
        });
    }
    
    /**
     * Show Material Design snackbar
     */
    function showSnackbar(message, duration = 3000) {
        // Remove existing snackbar
        const existing = document.querySelector('.snackbar');
        if (existing) {
            existing.remove();
        }
        
        const snackbar = document.createElement('div');
        snackbar.className = 'snackbar';
        snackbar.textContent = message;
        
        // Add CSS for snackbar
        const style = document.createElement('style');
        style.textContent = `
            .snackbar {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                background: #323232;
                color: white;
                padding: 14px 24px;
                border-radius: 4px;
                box-shadow: var(--md-elevation-4);
                z-index: 10000;
                font-size: 14px;
                font-weight: 500;
                transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
            }
            
            .snackbar.visible {
                transform: translateX(-50%) translateY(0);
            }
            
            @media (max-width: 600px) {
                .snackbar {
                    left: 16px;
                    right: 16px;
                    transform: translateX(0) translateY(100px);
                }
                
                .snackbar.visible {
                    transform: translateX(0) translateY(0);
                }
            }
        `;
        
        if (!document.querySelector('style[data-snackbar]')) {
            style.setAttribute('data-snackbar', 'true');
            document.head.appendChild(style);
        }
        
        document.body.appendChild(snackbar);
        
        // Animate in
        setTimeout(() => snackbar.classList.add('visible'), 100);
        
        // Remove after duration
        setTimeout(() => {
            snackbar.classList.remove('visible');
            setTimeout(() => snackbar.remove(), 300);
        }, duration);
        
        // Announce to screen readers
        if (window.announceToScreenReader) {
            window.announceToScreenReader(message);
        }
    }
    
})();