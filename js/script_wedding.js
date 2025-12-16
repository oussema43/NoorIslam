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

        // Update search settings
        function updateSearchSettings() {
            currentSearchType = document.getElementById('bookSelect').value;
            currentSearchGrade = document.getElementById('gradeSelect').value;
            currentSearchResults = document.getElementById('resultsSelect').value;
            
        }
        
        // Reset search settings
        function resetSearchSettings() {
            document.getElementById('bookSelect').value = 'all';
            document.getElementById('gradeSelect').value = 'all';
            document.getElementById('resultsSelect').value = '10';
            
            updateSearchSettings();
        }
        
        // Get random hadith
        function getRandomHadith() {
            const randomIndex = Math.floor(Math.random() * hadiths.length);
            const hadith = hadiths[randomIndex];
            
            document.getElementById('dailyHadithText').textContent = hadith.text;
            document.getElementById('dailyHadithRef').textContent = hadith.reference;
            
        }

        function showExplanation(id, btn) {
        const box = document.getElementById("explanation" + id);

            if (box.style.display === "block") {
                box.style.display = "none";
                btn.innerHTML = '<i class="fas fa-lightbulb"></i> شرح الحديث';
                return;
            }

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> تحميل...';

            fetch("/ajax/hadith.json")
                .then(res => res.json())
                .then(data => {
                    const h = data[id];
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
                    box.style.display = "block";
                    btn.innerHTML = '<i class="fas fa-times"></i> إخفاء الشرح';
                })
                .catch(() => {
                    box.innerHTML = "حدث خطأ أثناء تحميل الشرح";
                    box.style.display = "block";
                });
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