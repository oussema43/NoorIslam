// JavaScript for Cypress Page

        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            const backToTop = document.getElementById('backToTop');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                backToTop.classList.add('show');
            } else {
                navbar.classList.remove('scrolled');
                backToTop.classList.remove('show');
            }
        });
        
        // Back to top functionality
        document.getElementById('backToTop').addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Tasbih Counter
        let tasbihCount = 0;
        const maxCount = 33; // Default for tasbih
        
        function incrementTasbih() {
            tasbihCount++;
            updateTasbihDisplay();
            updateStats();
        }
        
        function resetTasbih() {
            tasbihCount = 0;
            updateTasbihDisplay();
            updateStats();
            showNotification('تم إعادة تعيين المسبحة إلى الصفر');
        }
        
        function updateTasbihDisplay() {
            document.getElementById('tasbihCount').textContent = tasbihCount;
            const progressPercent = Math.min((tasbihCount / maxCount) * 100, 100);
            document.getElementById('tasbihProgress').style.width = progressPercent + '%';
            document.getElementById('progressPercent').textContent = Math.round(progressPercent) + '%';
            
            // Save to localStorage
            localStorage.setItem('tasbihCount', tasbihCount);
        }
        
        // Individual dhikr counters
        function incrementCounter(button) {
            const container = button.closest('.counter-container');
            const display = container.querySelector('.counter-display');
            let count = parseInt(display.textContent);
            count++;
            display.textContent = count;
            updateStats();
            saveCounterState(button);
        }
        
        function decrementCounter(button) {
            const container = button.closest('.counter-container');
            const display = container.querySelector('.counter-display');
            let count = parseInt(display.textContent);
            if (count > 0) {
                count--;
                display.textContent = count;
                updateStats();
                saveCounterState(button);
            }
        }
        
        function resetCounter(button) {
            const dhikrCard = button.closest('.dhikr-card');
            const display = dhikrCard.querySelector('.counter-display');
            const defaultCount = parseInt(dhikrCard.getAttribute('data-default-count')) || 1;
            display.textContent = defaultCount;
            updateStats();
            saveCounterState(button);
            showNotification('تم إعادة تعيين العداد إلى القيمة الأصلية');
        }
        
        // Save counter state to localStorage
        function saveCounterState(button) {
            const dhikrCard = button.closest('.dhikr-card');
            const dhikrId = Array.from(document.querySelectorAll('.dhikr-card')).indexOf(dhikrCard);
            const display = dhikrCard.querySelector('.counter-display');
            const count = parseInt(display.textContent);
            
            // Get saved counters or create empty object
            const savedCounters = JSON.parse(localStorage.getItem('dhikrCounters')) || {};
            
            // Save this counter
            savedCounters[dhikrId] = count;
            
            // Save back to localStorage
            localStorage.setItem('dhikrCounters', JSON.stringify(savedCounters));
        }
        
        // Load counter states from localStorage
        function loadCounterStates() {
            const savedCounters = JSON.parse(localStorage.getItem('dhikrCounters')) || {};
            const dhikrCards = document.querySelectorAll('.dhikr-card');
            
            dhikrCards.forEach((card, index) => {
                if (savedCounters[index] !== undefined) {
                    const display = card.querySelector('.counter-display');
                    display.textContent = savedCounters[index];
                }
            });
        }
        
        // Favorite functionality
        function toggleFavorite(button) {
            const icon = button.querySelector('i');
            const dhikrCard = button.closest('.dhikr-card');
            const dhikrId = Array.from(document.querySelectorAll('.dhikr-card')).indexOf(dhikrCard);
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                button.classList.add('active');
                showNotification('تمت إضافة الذكر إلى المفضلة');
                saveFavoriteState(dhikrId, true);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                button.classList.remove('active');
                showNotification('تمت إزالة الذكر من المفضلة');
                saveFavoriteState(dhikrId, false);
            }
            
            updateStats();
        }
        
        // Save favorite state to localStorage
        function saveFavoriteState(dhikrId, isFavorite) {
            const savedFavorites = JSON.parse(localStorage.getItem('dhikrFavorites')) || [];
            
            if (isFavorite && !savedFavorites.includes(dhikrId)) {
                savedFavorites.push(dhikrId);
            } else if (!isFavorite) {
                const index = savedFavorites.indexOf(dhikrId);
                if (index > -1) {
                    savedFavorites.splice(index, 1);
                }
            }
            
            localStorage.setItem('dhikrFavorites', JSON.stringify(savedFavorites));
        }
        
        // Load favorite states from localStorage
        function loadFavoriteStates() {
            const savedFavorites = JSON.parse(localStorage.getItem('dhikrFavorites')) || [];
            const favoriteButtons = document.querySelectorAll('.favorite-btn');
            
            favoriteButtons.forEach((button, index) => {
                if (savedFavorites.includes(index)) {
                    const icon = button.querySelector('i');
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    button.classList.add('active');
                }
            });
        }
        
        // Filter dhikr by category
        function filterDhikr(category) {
            let targetSection;
            switch(category) {
                case 'morning':
                    targetSection = document.getElementById('morning-dhikr');
                    break;
                case 'evening':
                    targetSection = document.getElementById('evening-dhikr');
                    break;
                case 'prayer':
                    targetSection = document.getElementById('morning-dhikr'); // Fallback
                    break;
                case 'sleep':
                    targetSection = document.getElementById('evening-dhikr'); // Fallback
                    break;
            }
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Highlight the section
                targetSection.style.backgroundColor = 'var(--light-amber)';
                targetSection.style.transition = 'background-color 0.5s';
                setTimeout(() => {
                    targetSection.style.backgroundColor = '';
                }, 1500);
            }
        }
        
        // Daily reminder
        function setDailyReminder() {
            if (Notification.permission === 'granted') {
                showNotification('تم تفعيل التذكير اليومي للأذكار');
                // Schedule a reminder (for demonstration, shows after 5 seconds)
                setTimeout(() => {
                    if (Notification.permission === 'granted') {
                        new Notification('نور الإسلام - تذكير الأذكار', {
                            body: 'حان وقت أذكارك اليومية، لا تنس ذكر الله',
                            icon: '/assets/mosque.ico'
                        });
                    }
                }, 5000);
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        showNotification('تم تفعيل التذكير اليومي للأذكار');
                    }
                });
            }
        }
        
        // Notification function
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <div class="d-flex align-items-center">
                    <i class="fas fa-check-circle"></i>
                    <span>${message}</span>
                </div>
            `;
            
            document.getElementById('notificationArea').appendChild(notification);
            
            // Show notification
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 400);
            }, 3000);
        }
        
        // Update stats function
        function updateStats() {
            // Calculate total dhikr count
            let totalCount = tasbihCount;
            const dhikrCards = document.querySelectorAll('.dhikr-card');
            dhikrCards.forEach(card => {
                const display = card.querySelector('.counter-display');
                totalCount += parseInt(display.textContent);
            });
            
            // Update total count
            document.getElementById('totalDhikrCount').textContent = totalCount;
            
            // Update favorite count
            const favoriteButtons = document.querySelectorAll('.favorite-btn.active');
            document.getElementById('favoriteCount').textContent = favoriteButtons.length;
            
            // Calculate completion rate (simple example: if total count > 100 then 100%)
            const completionRate = Math.min(Math.floor((totalCount / 200) * 100), 100);
            document.getElementById('completionRate').textContent = completionRate + '%';
            
            // Update streak days (from localStorage or default)
            const lastVisit = localStorage.getItem('lastVisit');
            const today = new Date().toDateString();
            let streakDays = parseInt(localStorage.getItem('streakDays')) || 0;
            
            if (lastVisit !== today) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                
                if (lastVisit === yesterday.toDateString()) {
                    streakDays++;
                } else if (lastVisit !== today) {
                    streakDays = 1;
                }
                
                localStorage.setItem('streakDays', streakDays);
                localStorage.setItem('lastVisit', today);
            }
            
            document.getElementById('streakDays').textContent = streakDays;
            
            // Save stats to localStorage
            const stats = {
                totalCount: totalCount,
                favoriteCount: favoriteButtons.length,
                completionRate: completionRate,
                streakDays: streakDays,
                lastUpdated: new Date().toISOString()
            };
            
            localStorage.setItem('dhikrStats', JSON.stringify(stats));
        }
        
        // Load stats from localStorage
        function loadStats() {
            const savedStats = JSON.parse(localStorage.getItem('dhikrStats'));
            
            if (savedStats) {
                document.getElementById('totalDhikrCount').textContent = savedStats.totalCount || 0;
                document.getElementById('favoriteCount').textContent = savedStats.favoriteCount || 0;
                document.getElementById('completionRate').textContent = (savedStats.completionRate || 0) + '%';
                document.getElementById('streakDays').textContent = savedStats.streakDays || 0;
            }
        }
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Load saved tasbih count
            const savedTasbihCount = localStorage.getItem('tasbihCount');
            if (savedTasbihCount !== null) {
                tasbihCount = parseInt(savedTasbihCount);
                updateTasbihDisplay();
            }
            
            // Load counter states
            loadCounterStates();
            
            // Load favorite states
            loadFavoriteStates();
            
            // Load stats
            loadStats();
            
            // Update stats on load
            updateStats();
            
            // Initialize last visit if not set
            if (!localStorage.getItem('lastVisit')) {
                localStorage.setItem('lastVisit', new Date().toDateString());
                localStorage.setItem('streakDays', '1');
            }
            
            // Animate elements on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.dhikr-card, .category-card, .stats-card').forEach(el => observer.observe(el));
        });