// JavaScript code for wedding website
        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Hadith data for daily hadith
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
        
        // Hadith explanations data
        const hadithExplanations = {
            1: {
                text: 'هذا الحديث أصل عظيم في النيات، وهو يدل على أن الأعمال إنما تصح وتُقبل إذا كانت خالصة لوجه الله تعالى، وأن الجزاء يكون على حسب النية، فمن نوى الخير حصل على الخير، ومن نوى الشر حصل على الشر.',
                benefits: [
                    'بيان أهمية النية في قبول الأعمال عند الله تعالى',
                    'الحث على الإخلاص في العمل لله وحده',
                    'النية تحول العادات إلى عبادات',
                    'النية الصالحة ترفع منزلة العمل وإن كان صغيراً'
                ]
            },
            2: {
                text: 'هذا الحديث قاعدة مهمة في الدين، يدل على أن كل أمر أحدث في الدين وليس له أصل في الكتاب والسنة فهو مردود على صاحبه، وأن الإسلام قد اكتمل ولا يجوز إدخال ما ليس منه فيه.',
                benefits: [
                    'تحريم البدع في الدين',
                    'الحث على التمسك بالسنة والاتباع',
                    'بيان كمال الدين الإسلامي',
                    'التحذير من اتباع الهوى في الدين'
                ]
            },
            3: {
                text: 'هذا الحديث يدل على عظم حق النبي صلى الله عليه وسلم، وأن من كمال الإيمان أن يكون حب النبي صلى الله عليه وسلم فوق كل حب، وهذا الحب يكون باتباع سنته والاقتداء به والدفاع عن دينه.',
                benefits: [
                    'بيان مكانة النبي صلى الله عليه وسلم في قلوب المؤمنين',
                    'الحث على محبة النبي صلى الله عليه وسلم أكثر من كل شيء',
                    'محبة النبي صلى الله عليه وسلم من شروط الإيمان الكامل',
                    'الحث على الاقتداء بالنبي صلى الله عليه وسلم في كل شيء'
                ]
            }
        };
        
        // Current search settings
        let currentSearchType = 'all';
        let currentSearchGrade = 'all';
        let currentSearchResults = '10';
        
        // Initialize page
        function initializePage() {
            // Set initial hadith
            getRandomHadith();
            
            // Hide loader after 2 seconds
            setTimeout(hideLoader, 2000);
            
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
        
        // Update search settings
        function updateSearchSettings() {
            currentSearchType = document.getElementById('bookSelect').value;
            currentSearchGrade = document.getElementById('gradeSelect').value;
            currentSearchResults = document.getElementById('resultsSelect').value;
            
            // In a real implementation, you would update the iframe URL here
            // For now, we'll just show a notification
            showNotification('تم تحديث إعدادات البحث', 'success');
        }
        
        // Reset search settings
        function resetSearchSettings() {
            document.getElementById('bookSelect').value = 'all';
            document.getElementById('gradeSelect').value = 'all';
            document.getElementById('resultsSelect').value = '10';
            
            updateSearchSettings();
            showNotification('تم إعادة تعيين جميع الإعدادات', 'success');
        }
        
        // Get random hadith
        function getRandomHadith() {
            const randomIndex = Math.floor(Math.random() * hadiths.length);
            const hadith = hadiths[randomIndex];
            
            document.getElementById('dailyHadithText').textContent = hadith.text;
            document.getElementById('dailyHadithRef').textContent = hadith.reference;

        }
        
        // Show/hide explanation
        function showExplanation(id, btn) {
            const box = document.getElementById("explanation" + id);
            
            if (box.style.display === "block") {
                box.style.display = "none";
                btn.innerHTML = '<i class="fas fa-lightbulb"></i> شرح الحديث';
                return;
            }
            
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> تحميل...';
            
            // Use setTimeout to simulate loading
            setTimeout(() => {
                const h = hadithExplanations[id];
                if (h) {
                    box.innerHTML = `
                        <h5 class="explanation-title">
                            <i class="fas fa-book-open"></i> شرح الحديث
                        </h5>
                        <p>${h.text}</p>
                        <strong>فوائد الحديث:</strong>
                        <ul>
                            ${h.benefits.map(b => `<li>${b}</li>`).join("")}
                        </ul>
                    `;
                } else {
                    box.innerHTML = "لم يتم العثور على شرح لهذا الحديث";
                }
                box.style.display = "block";
                btn.innerHTML = '<i class="fas fa-times"></i> إخفاء الشرح';
            }, 500);
        }
        
        // Show notification
        function showNotification(message, type = 'success') {
            // Remove existing notification if any
            const existingNotification = document.querySelector('.notification-alert');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            const notification = document.createElement('div');
            notification.className = `notification-alert position-fixed top-0 start-0 m-4 p-3 rounded shadow-lg`;
            notification.style.backgroundColor = type === 'success' ? '#2e8b57' : '#dc3545';
            notification.style.color = 'white';
            notification.style.zIndex = '9999';
            notification.style.maxWidth = '300px';
            notification.style.borderRadius = '10px';
            notification.style.transition = 'transform 0.3s ease';
            notification.innerHTML = `
                <div class="d-flex align-items-center">
                    <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2"></i>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateY(20px)';
            }, 10);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateY(-100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
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