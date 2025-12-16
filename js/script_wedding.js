
        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Hadith data
        const hadiths = [
            {
                text: '"من سلك طريقاً يلتمس فيه علماً سهل الله له به طريقاً إلى الجنة"',
                reference: 'رواه مسلم في صحيحه، حديث رقم: 2699',
                grade: 'صحيح'
            },
            {
                text: '"الدين النصيحة، قلنا: لمن؟ قال: لله، ولرسوله، ولكتابه، ولأئمة المسلمين، وعامتهم"',
                reference: 'رواه مسلم في صحيحه، حديث رقم: 55',
                grade: 'صحيح'
            },
            {
                text: '"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه"',
                reference: 'رواه البخاري في صحيحه، حديث رقم: 13',
                grade: 'صحيح'
            },
            {
                text: '"الكلمة الطيبة صدقة"',
                reference: 'رواه البخاري ومسلم',
                grade: 'صحيح'
            },
            {
                text: '"اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن"',
                reference: 'رواه الترمذي، حديث رقم: 1987',
                grade: 'حسن'
            },
            {
                text: '"إنما بعثت لأتمم مكارم الأخلاق"',
                reference: 'رواه البيهقي في شعب الإيمان',
                grade: 'حسن'
            },
            {
                text: '"من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت"',
                reference: 'رواه البخاري في صحيحه، حديث رقم: 6475',
                grade: 'صحيح'
            },
            {
                text: '"لا تدخلون الجنة حتى تؤمنوا، ولا تؤمنوا حتى تحابوا، ألا أدلكم على شيء إذا فعلتموه تحاببتم؟ أفشوا السلام بينكم"',
                reference: 'رواه مسلم في صحيحه، حديث رقم: 54',
                grade: 'صحيح'
            }
        ];
        
        // Current search type
        let currentSearchType = 'all';
        let currentSearchGrade = 'all';
        let currentSearchResults = '10';
        
        // Initialize page
        function initializePage() {
            // Set initial hadith
            getRandomHadith();
            
            // Hide loader after 2 seconds
            setTimeout(hideLoader, 2000);
            
            // Set up search iframe
            setupSearchIframe();
            
            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
            
            // Initialize animations
            initializeAnimations();
        }
        
        // Hide loader
        function hideLoader() {
            const loader = document.getElementById('searchLoader');
            if (loader) {
                loader.style.display = 'none';
            }
        }
        
        // Show loader
        function showLoader() {
            const loader = document.getElementById('searchLoader');
            if (loader) {
                loader.style.display = 'flex';
            }
        }
        
        // Setup search iframe
        function setupSearchIframe() {
            const iframe = document.getElementById('mainSearchFrame');
            if (iframe) {
                // Reload iframe every hour to prevent caching issues
                setInterval(() => {
                    refreshIframe();
                }, 60 * 60 * 1000); // 60 minutes
                
                // Adjust iframe height
                adjustIframeHeight();
                
                // Listen for iframe load
                iframe.addEventListener('load', function() {
                    hideLoader();
                    adjustIframeHeight();
                });
            }
        }
        
        // Refresh iframe
        function refreshIframe() {
            const iframe = document.getElementById('mainSearchFrame');
            if (iframe) {
                showLoader();
                const currentSrc = iframe.src.split('?')[0];
                const timestamp = Date.now();
                iframe.src = `${currentSrc}?width=1600&prefill=&newwindow=no&summary=yes&t=${timestamp}`;
            }
        }
        
        // Adjust iframe height
        function adjustIframeHeight() {
            const iframe = document.getElementById('mainSearchFrame');
            if (iframe) {
                // Try to get content height
                try {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    if (iframeDoc && iframeDoc.body) {
                        const height = iframeDoc.body.scrollHeight;
                        if (height > 80) {
                            iframe.style.height = height + 'px';
                        }
                    }
                } catch (e) {
                    // Cross-origin restrictions, use default height
                    iframe.style.height = '80px';
                }
            }
        }
        
        // Set search type
        function setSearchType(type) {
            currentSearchType = type;
            
            // Update button states
            document.querySelectorAll('.search-option-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
            
            // Update iframe URL based on search type
            updateSearchIframe();
        }
        
        // Update search iframe with current settings
        function updateSearchIframe() {
            const iframe = document.getElementById('mainSearchFrame');
            if (iframe) {
                showLoader();
                
                let url = 'http://hdith.com/iframe.php?width=1600&prefill=&newwindow=no&summary=yes';
                
                // Add search type
                if (currentSearchType !== 'all') {
                    url += `&searchtype=${currentSearchType}`;
                }
                
                
                // Add grade filter
                if (currentSearchGrade !== 'all') {
                    url += `&grade=${currentSearchGrade}`;
                }
                
                // Add results limit
                url += `&results=${currentSearchResults}`;
                
                // Add timestamp to prevent caching
                url += `&t=${Date.now()}`;
                
                iframe.src = url;
            }
        }
        
        // Toggle advanced search panel
        function toggleAdvancedSearch() {
            const panel = document.getElementById('advancedPanel');
            const button = event.currentTarget;
            
            if (panel.style.display === 'none' || panel.style.display === '') {
                panel.style.display = 'block';
                button.innerHTML = '<i class="fas fa-times me-1"></i> إغلاق الإعدادات';
                button.classList.remove('btn-outline-primary');
                button.classList.add('btn-primary');
            } else {
                panel.style.display = 'none';
                button.innerHTML = '<i class="fas fa-sliders-h me-1"></i> إعدادات متقدمة';
                button.classList.remove('btn-primary');
                button.classList.add('btn-outline-primary');
            }
        }
        
        // Get random hadith
        function getRandomHadith() {
            const randomIndex = Math.floor(Math.random() * hadiths.length);
            const hadith = hadiths[randomIndex];
            
            document.getElementById('dailyHadithText').textContent = hadith.text;
            document.getElementById('dailyHadithRef').textContent = hadith.reference;
        }
        
        
        // Show/hide explanation
        function showExplanation(id) {
            const explanation = document.getElementById('explanation' + id);
            
            if (explanation.style.display === 'none' || explanation.style.display === '') {
                explanation.style.display = 'block';
                button.innerHTML = '<i class="fas fa-times"></i> إخفاء الشرح';
            } else {
                explanation.style.display = 'none';
                button.innerHTML = '<i class="fas fa-lightbulb"></i> شرح الحديث';
            }
        }
        
        
        // Search in specific book
        
        // Get book name
        function getBookName(bookCode) {
            const books = {
                'bukhari': 'صحيح البخاري',
                'muslim': 'صحيح مسلم',
                'abudawud': 'سنن أبي داود',
                'tirmidhi': 'جامع الترمذي',
                'nasai': 'سنن النسائي',
                'ibnmajah': 'سنن ابن ماجه'
            };
            return books[bookCode] || 'الكتاب المحدد';
        }
        
        // Show notification
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `position-fixed bottom-0 start-0 m-4 p-3 rounded shadow-lg`;
            notification.style.backgroundColor = type === 'success' ? 'var(--primary-green)' : '#dc3545';
            notification.style.color = 'white';
            notification.style.zIndex = '9999';
            notification.style.maxWidth = '300px';
            notification.style.transition = 'transform 0.3s ease';
            notification.innerHTML = `
                <div class="d-flex align-items-center">
                    <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2"></i>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(-100%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }
        
        // Handle scroll
        function handleScroll() {
            const navbar = document.querySelector('.navbar');
            const backToTop = document.getElementById('backToTop');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                backToTop.classList.add('show');
            } else {
                navbar.classList.remove('scrolled');
                backToTop.classList.remove('show');
            }
        }
        
        // Initialize animations
        function initializeAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);
            
            // Observe all category cards, hadith cards, and book cards
            document.querySelectorAll('.category-card, .hadith-card, .book-card').forEach(card => {
                observer.observe(card);
            });
        }
        
        // Back to top functionality
        document.getElementById('backToTop').addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Initialize on page load
        document.addEventListener('DOMContentLoaded', initializePage);
        
        // Adjust iframe on window resize
        window.addEventListener('resize', adjustIframeHeight);