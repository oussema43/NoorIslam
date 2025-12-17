
        // Sample verses for daily verse
        const verses = [
            { text: "﴿وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ﴾", translation: "وإذا سألك عبادي عني فإني قريب أجيب دعوة الداع إذا دعان", reference: "البقرة: 186" },
            { text: "﴿إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾", translation: "إن مع العسر يسراً", reference: "الشرح: 5" },
            { text: "﴿وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا﴾", translation: "ومن يتق الله يجعل له مخرجاً", reference: "الطلاق: 2" },
            { text: "﴿وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ﴾", translation: "وتوكل على الحي الذي لا يموت", reference: "الفرقان: 58" },
            { text: "﴿فَإِنَّ مَعَ الْعُسْرِ يُسْرًا * إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾", translation: "فإن مع العسر يسراً * إن مع العسر يسراً", reference: "الشرح: 5-6" },
            { text: "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ﴾", translation: "يا أيها الذين آمنوا اصبروا وصابروا ورابطوا واتقوا الله لعلكم تفلحون", reference: "آل عمران: 200" },
            { text: "﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ﴾", translation: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار", reference: "البقرة: 201" },
            { text: "﴿إِنَّ اللَّهَ مَعَ الصَّابِرِينَ﴾", translation: "إن الله مع الصابرين", reference: "البقرة: 153" },
            { text: "﴿قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ﴾", translation: "قل هو الله أحد * الله الصمد * لم يلد ولم يولد * ولم يكن له كفوا أحد", reference: "الإخلاص: 1-4" },
            { text: "﴿الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ﴾", translation: "الحمد لله رب العالمين * الرحمن الرحيم * مالك يوم الدين", reference: "الفاتحة: 1-3" }
        ];

        // Tajweed data structure
        const tajweedData = {
            noon: {
                title: "أحكام النون الساكنة والتنوين",
                subtitle: "تعلم قواعد النون الساكنة والتنوين وتطبيقها في تلاوة القرآن الكريم",
                content: `
                    <div class="rule-section">
                        <h3 class="rule-title"><i class="fas fa-book-open"></i> أحكام النون الساكنة والتنوين</h3>
                        <p>توجد أربعة أحكام للنون الساكنة والتنوين في علم التجويد:</p>
                        
                        <div class="example-box">
                            <h4>1. الإظهار الحلقي</h4>
                            <div class="example-arabic">مَنْ آمَنَ - مِنْ هَادٍ</div>
                            <p>الإظهار: إخراج النون الساكنة أو التنوين من مخرجهما من غير غنة، ويأتي عند حروف الحلق الستة:</p>
                            <ul>
                                <li>ء (الهمزة) - مثال: مِنْ ءَالَاءِ</li>
                                <li>هـ - مثال: مِنْ هَادٍ</li>
                                <li>ع - مثال: مِنْ عِلْمٍ</li>
                                <li>ح - مثال: مِنْ حَكِيمٍ</li>
                                <li>غ - مثال: مِنْ غَفُورٍ</li>
                                <li>خ - مثال: مِنْ خَبِيرٍ</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            meem: {
                title: "أحكام الميم الساكنة",
                subtitle: "تعلم قواعد الميم الساكنة وتطبيقها في تلاوة القرآن الكريم",
                content: `
                    <div class="rule-section">
                        <h3 class="rule-title"><i class="fas fa-volume-up"></i> أحكام الميم الساكنة</h3>
                        <p>توجد ثلاثة أحكام للميم الساكنة في علم التجويد:</p>
                        
                        <div class="example-box">
                            <h4>1. الإخفاء الشفوي</h4>
                            <div class="example-arabic">لَهُم بَيْنَهُمْ - تَرْمِيهِم بِحِجَارَةٍ</div>
                            <p>الإخفاء الشفوي: إخفاء الميم الساكنة عند حرف الباء مع الغنة</p>
                        </div>
                    </div>
                `
            },
            madd: {
                title: "أحكام المدود",
                subtitle: "تعلم قواعد المدود وأنواعها في تلاوة القرآن الكريم",
                content: `
                    <div class="rule-section">
                        <h3 class="rule-title"><i class="fas fa-book"></i> أحكام المدود</h3>
                        <p>المد: إطالة الصوت بحرف من حروف المد (الألف الساكنة المفتوح ما قبلها، الواو الساكنة المضموم ما قبلها، الياء الساكنة المكسور ما قبلها)</p>
                        
                        <div class="example-box">
                            <h4>1. المد الطبيعي (الأصلي)</h4>
                            <div class="example-arabic">قَالَ - نُوحٍ - رَحِيمٌ</div>
                            <p>المد الطبيعي: مد بمقدار حركتين (حوالي ثانية واحدة) عند وجود حرف مد</p>
                        </div>
                    </div>
                `
            },
            letters: {
                title: "صفات الحروف",
                subtitle: "تعلم صفات الحروف العربية وتطبيقها في تلاوة القرآن الكريم",
                content: `
                    <div class="rule-section">
                        <h3 class="rule-title"><i class="fas fa-language"></i> صفات الحروف العربية</h3>
                        <p>تنقسم صفات الحروف إلى قسمين: الصفات اللازمة والصفات العارضة</p>
                        
                        <div class="example-box">
                            <h4>1. الصفات اللازمة</h4>
                            <p>هي الصفات التي لا تفارق الحرف وهي 17 صفة:</p>
                        </div>
                    </div>
                `
            }
        };

        // Application state
        let currentUser = null;
        let favorites = [];
        let bookmarks = [];
        let readingProgress = {
            daily: 20,
            monthly: 50,
            total: 75
        };

        // Initialize page
        function initializePage() {
            // Set current year
            document.getElementById('currentYear').textContent = new Date().getFullYear();
            
            // Set random verse as daily verse
            getRandomVerse();
            
            // Load user data
            loadUserData();
            
            // Setup event listeners
            setupEventListeners();
            
            // Setup scroll effects
            setupScrollEffects();
            
            // Update progress circles
            updateProgressCircles();
            
            // Initialize UI
            updateFavoritesDisplay();
            updateActivities();
        }

        // Load user data from localStorage
        function loadUserData() {
            const savedUser = localStorage.getItem('quranUser');
            const savedFavorites = localStorage.getItem('quranFavorites');
            const savedBookmarks = localStorage.getItem('quranBookmarks');
            
            if (savedUser) currentUser = JSON.parse(savedUser);
            if (savedFavorites) favorites = JSON.parse(savedFavorites);
            if (savedBookmarks) bookmarks = JSON.parse(savedBookmarks);
        }

        // Save user data to localStorage
        function saveUserData() {
            localStorage.setItem('quranFavorites', JSON.stringify(favorites));
            localStorage.setItem('quranBookmarks', JSON.stringify(bookmarks));
            if (currentUser) {
                localStorage.setItem('quranUser', JSON.stringify(currentUser));
            }
        }

        // Setup scroll effects
        function setupScrollEffects() {
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Back to top button visibility
                const backToTop = document.getElementById('backToTop');
                if (window.scrollY > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
            });
            
            // Trigger scroll event on load
            window.dispatchEvent(new Event('scroll'));
        }

        // Get random verse for daily verse
        function getRandomVerse() {
            const randomIndex = Math.floor(Math.random() * verses.length);
            const verse = verses[randomIndex];
            
            document.getElementById('dailyVerse').textContent = verse.text;
            document.getElementById('dailyTranslation').textContent = `"${verse.translation}" (${verse.reference})`;
            
            // Add to recent activities
            addActivity('قراءة آية عشوائية', verse.text);
        }

        // AJAX function to load tajweed.json
        function loadTajweedData(type) {
            const container = document.getElementById('ajaxContentContainer');
            const button = event.target.closest('.read-more-btn');
            
            // Save original button text
            const originalText = button.innerHTML;
            
            // Show loading state
            button.innerHTML = '<span class="ajax-loading"></span> جاري التحميل...';
            button.disabled = true;
            
            // Clear previous content
            container.innerHTML = '';
            
            // Fetch tajweed.json
            fetch('/ajax/tajweed.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('فشل في تحميل البيانات');
                    }
                    return response.json();
                })
                .then(data => {
                    // Process and display data
                    displayTajweedData(data, type, container);
                    button.innerHTML = originalText;
                    button.disabled = false;
                    
                    // Scroll to content
                    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Add to activities
                    addActivity('قراءة درس تجويد', tajweedData[type]?.title || type);
                })
                .catch(error => {
                    console.error('Error loading tajweed data:', error);
                    showAjaxError(container, error.message);
                    button.innerHTML = originalText;
                    button.disabled = false;
                });
        }

        // Display tajweed data
        function displayTajweedData(data, type, container) {
            // Check if type exists in local data
            if (tajweedData[type]) {
                const lesson = tajweedData[type];
                
                const content = `
                    <div class="ajax-content fade-in">
                        <h3 class="section-title">${lesson.title}</h3>
                        <p style="color:#666; font-size:1.1rem; margin-bottom:20px;">${lesson.subtitle}</p>
                        ${lesson.content}
                    </div>
                `;
                
                container.innerHTML = content;
            } else {
                // Fallback to local data if type not found in JSON
                const fallbackContent = `
                    <div class="ajax-content fade-in">
                        <h3 class="section-title">${type} - أحكام التجويد</h3>
                        <p style="color:#666; font-size:1.1rem; margin-bottom:20px;">
                            تم تحميل البيانات بنجاح من ملف tajweed.json
                        </p>
                        <div class="example-box">
                            <h4>معلومات عامة عن ${type}</h4>
                            <div class="example-arabic">﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾</div>
                            <p class="example-explanation">
                                هذا مثال على محتوى التجويد الذي تم تحميله باستخدام AJAX. في التطبيق الفعلي، 
                                سيكون هذا المحتوى قادماً من ملف JSON يحتوي على دروس التجويد الكاملة.
                            </p>
                        </div>
                        <div class="note-box">
                            <h4 class="note-title"><i class="fas fa-lightbulb"></i> ملاحظة:</h4>
                            <p>تم تحميل ${Object.keys(data).length} درساً من ملف tajweed.json</p>
                        </div>
                    </div>
                `;
                
                container.innerHTML = fallbackContent;
            }
        }

        // Show AJAX error
        function showAjaxError(container, errorMessage) {
            const errorHtml = `
                <div class="ajax-error fade-in">
                    <h4><i class="fas fa-exclamation-triangle"></i> خطأ في التحميل</h4>
                    <p>${errorMessage}</p>
                    <p>جاري استخدام البيانات المحلية كبديل...</p>
                </div>
            `;
            
            container.innerHTML = errorHtml;
            
            // Show fallback content after 2 seconds
            setTimeout(() => {
                const fallbackContent = `
                    <div class="ajax-content fade-in">
                        <h3 class="section-title">أحكام التجويد - البيانات المحلية</h3>
                        <div class="example-box">
                            <h4>معلومات عامة عن التجويد</h4>
                            <div class="example-arabic">﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾</div>
                            <p class="example-explanation">
                                التجويد علم يبحث في كيفية نطق الحروف والكلمات القرآنية نطقاً صحيحاً 
                                وفقاً لما تلقاه النبي محمد ﷺ عن جبريل عليه السلام عن رب العزة جل وعلا.
                            </p>
                        </div>
                        <div class="note-box">
                            <h4 class="note-title"><i class="fas fa-info-circle"></i> معلومة:</h4>
                            <p>لم يتم العثور على ملف tajweed.json. يرجى التأكد من وجود الملف في نفس المجلد.</p>
                            <p>لاختبار AJAX، أنشئ ملف tajweed.json يحتوي على بيانات التجويد.</p>
                        </div>
                    </div>
                `;
                
                container.innerHTML = fallbackContent;
            }, 2000);
        }


        // Close tajweed detail page
        function closeTajweedDetail() {
            const detailPage = document.getElementById('tajweedDetailPage');
            const mainContent = document.getElementById('mainContent');
            
            detailPage.classList.remove('active');
            setTimeout(() => {
                detailPage.style.display = 'none';
                mainContent.style.display = 'block';
            }, 300);
            
            // Scroll to tajweed section
            const tajweedSection = document.querySelector('section.my-5');
            if (tajweedSection) {
                setTimeout(() => {
                    tajweedSection.scrollIntoView({ behavior: 'smooth' });
                }, 350);
            }
        }

        // Add activity
        function addActivity(type, details) {
            // In a real app, this would be saved to user's activity log
            console.log(`Activity: ${type} - ${details}`);
            updateActivities();
        }

        // Update activities display
        function updateActivities() {
            // This would update the activities section with real data
            // For now, we'll just log it
        }

        // Update progress circles
        function updateProgressCircles() {
            // Update progress circle
            const progressCircle = document.querySelector('.progress-circle');
            const progressText = document.querySelector('.progress-text');
            
            if (progressCircle && progressText) {
                const progress = readingProgress.total;
                progressCircle.style.background = `conic-gradient(var(--primary-green) 0% ${progress}%, #f0f0f0 ${progress}% 100%)`;
                progressText.textContent = `${progress}%`;
            }
        }

        // Close surah modal
        function closeSurahModal() {
            document.getElementById('surahModal').classList.remove('show');
        }

        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <div style="position:fixed; top:100px; left:30px; background:var(--primary-green); 
                color:white; padding:15px 25px; border-radius:10px; box-shadow:0 5px 15px rgba(0,0,0,0.2);
                z-index:10000; animation:slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;">
                    <i class="fas fa-check-circle" style="margin-left:10px;"></i>
                    ${message}
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Setup event listeners
        function setupEventListeners() {
            // Back to top button
            document.getElementById('backToTop').addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Navigation links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') {
                        e.preventDefault();
                    }
                });
            });
            
            // Login button
            document.querySelector('.login-btn').addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('نظام التسجيل قيد التطوير');
            });
        }

        // Add CSS animation for notifications
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Initialize page when DOM is loaded
        document.addEventListener('DOMContentLoaded', initializePage);
