// script_chanting.js
        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Quran data
        const surahs = [
            { number: 1, name: "الفاتحة", ayahs: 7, revelation: "مكية" },
            { number: 2, name: "البقرة", ayahs: 286, revelation: "مدنية" },
            { number: 3, name: "آل عمران", ayahs: 200, revelation: "مدنية" },
            { number: 4, name: "النساء", ayahs: 176, revelation: "مدنية" },
            { number: 5, name: "المائدة", ayahs: 120, revelation: "مدنية" },
            { number: 6, name: "الأنعام", ayahs: 165, revelation: "مكية" },
            { number: 7, name: "الأعراف", ayahs: 206, revelation: "مكية" },
            { number: 8, name: "الأنفال", ayahs: 75, revelation: "مدنية" },
            { number: 9, name: "التوبة", ayahs: 129, revelation: "مدنية" },
            { number: 10, name: "يونس", ayahs: 109, revelation: "مكية" },
            { number: 36, name: "يس", ayahs: 83, revelation: "مكية" },
            { number: 55, name: "الرحمن", ayahs: 78, revelation: "مكية" },
            { number: 67, name: "الملك", ayahs: 30, revelation: "مكية" },
            { number: 112, name: "الإخلاص", ayahs: 4, revelation: "مكية" }
        ];
        
        // Sample ayahs for demonstration
        const sampleAyahs = {
            1: [
                { number: 1, text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translation: "بسم الله الرحمن الرحيم" },
                { number: 2, text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "الحمد لله رب العالمين" },
                { number: 3, text: "الرَّحْمَٰنِ الرَّحِيمِ", translation: "الرحمن الرحيم" },
                { number: 4, text: "مَالِكِ يَوْمِ الدِّينِ", translation: "مالك يوم الدين" },
                { number: 5, text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translation: "إياك نعبد وإياك نستعين" },
                { number: 6, text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", translation: "اهدنا الصراط المستقيم" },
                { number: 7, text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", translation: "صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين" }
            ],
            112: [
                { number: 1, text: "قُلْ هُوَ اللَّهُ أَحَدٌ", translation: "قل هو الله أحد" },
                { number: 2, text: "اللَّهُ الصَّمَدُ", translation: "الله الصمد" },
                { number: 3, text: "لَمْ يَلِدْ وَلَمْ يُولَدْ", translation: "لم يلد ولم يولد" },
                { number: 4, text: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", translation: "ولم يكن له كفواً أحد" }
            ]
        };
        
        // Sample verses for daily verse
        const verses = [
            { text: "﴿وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ﴾", translation: "وإذا سألك عبادي عني فإني قريب أجيب دعوة الداع إذا دعان", reference: "البقرة: 186" },
            { text: "﴿إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾", translation: "إن مع العسر يسراً", reference: "الشرح: 5" },
            { text: "﴿وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا﴾", translation: "ومن يتق الله يجعل له مخرجاً", reference: "الطلاق: 2" },
            { text: "﴿وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ﴾", translation: "وتوكل على الحي الذي لا يموت", reference: "الفرقان: 58" },
            { text: "﴿فَإِنَّ مَعَ الْعُسْرِ يُسْرًا * إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾", translation: "فإن مع العسر يسراً * إن مع العسر يسراً", reference: "الشرح: 5-6" },
            { text: "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ﴾", translation: "يا أيها الذين آمنوا اصبروا وصابروا ورابطوا واتقوا الله لعلكم تفلحون", reference: "آل عمران: 200" }
        ];
        
        // Initialize surah list
        function initializeSurahList() {
            const surahListContainer = document.getElementById('surahList');
            surahListContainer.innerHTML = '';
            
            surahs.forEach(surah => {
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4 mb-3';
                col.innerHTML = `
                    <div class="surah-card" onclick="openSurahModal(${surah.number})">
                        <div class="surah-number">${surah.number}</div>
                        <div class="surah-content">
                            <h4 class="surah-name">${surah.name}</h4>
                            <div class="surah-details">
                                <span>${surah.ayahs} آية</span>
                                <span>${surah.revelation}</span>
                            </div>
                        </div>
                    </div>
                `;
                surahListContainer.appendChild(col);
            });
        }
        
        // Open surah modal
        function openSurahModal(surahNumber) {
            const surah = surahs.find(s => s.number === surahNumber);
            if (!surah) return;
            
            document.getElementById('surahModalTitle').textContent = `سورة ${surah.name}`;
            
            const surahContent = document.getElementById('surahContent');
            surahContent.innerHTML = '';
            
            // Add surah info
            const infoDiv = document.createElement('div');
            infoDiv.className = 'alert alert-info mb-4';
            infoDiv.innerHTML = `
                <div class="row">
                    <div class="col-md-4"><strong>عدد الآيات:</strong> ${surah.ayahs}</div>
                    <div class="col-md-4"><strong>نوع السورة:</strong> ${surah.revelation}</div>
                    <div class="col-md-4"><strong>رقم السورة:</strong> ${surah.number}</div>
                </div>
            `;
            surahContent.appendChild(infoDiv);
            
            // Add ayahs
            const ayahs = sampleAyahs[surah.number] || sampleAyahs[112];
            
            ayahs.forEach(ayah => {
                const ayahDiv = document.createElement('div');
                ayahDiv.className = 'ayah-container';
                ayahDiv.innerHTML = `
                    <span class="ayah-number">${ayah.number}</span>
                    <div class="ayah-text">${ayah.text}</div>
                    <div class="ayah-translation">${ayah.translation}</div>
                `;
                surahContent.appendChild(ayahDiv);
            });
            
            // Add tafsir section if available
            if (surah.number === 1) {
                const tafsirDiv = document.createElement('div');
                tafsirDiv.className = 'tafsir-section';
                tafsirDiv.innerHTML = `
                    <h5 class="tafsir-title"><i class="fas fa-book"></i> تفسير مختصر</h5>
                    <p>سورة الفاتحة هي أول سورة في القرآن الكريم، وتسمى أم الكتاب لأنها تشمل مقاصد القرآن الأساسية. تتناول السورة التوحيد والعبادة والاستعانة بالله وطلب الهداية إلى الصراط المستقيم.</p>
                `;
                surahContent.appendChild(tafsirDiv);
            }
            
            // Show modal
            document.getElementById('surahModal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        
        // Close surah modal
        function closeSurahModal() {
            document.getElementById('surahModal').classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        
        // Quran player functionality
        let isPlaying = false;
        let currentAudio = null;
        let currentSurah = 1;
        let currentReciter = 'mishari';
        
        const audioFiles = {
            mishari: {
                1: 'https://download.quranicaudio.com/quran/mishari_al_afasy/murattal/1.mp3',
                112: 'https://download.quranicaudio.com/quran/mishari_al_afasy/murattal/112.mp3'
            },
            hudhaifi: {
                1: 'https://download.quranicaudio.com/quran/ali_alhuthaifee/1.mp3',
                112: 'https://download.quranicaudio.com/quran/ali_alhuthaifee/112.mp3'
            }
        };
        
        function togglePlay() {
            const playBtn = document.getElementById('playBtn');
            const icon = playBtn.querySelector('i');
            
            if (isPlaying) {
                pauseAudio();
                icon.className = 'fas fa-play';
            } else {
                playAudio();
                icon.className = 'fas fa-pause';
            }
            
            isPlaying = !isPlaying;
        }
        
        function playAudio() {
            if (currentAudio) {
                currentAudio.pause();
            }
            
            const audioUrl = audioFiles[currentReciter]?.[currentSurah] || audioFiles.mishari[1];
            currentAudio = new Audio(audioUrl);
            
            currentAudio.addEventListener('loadedmetadata', function() {
                document.getElementById('duration').textContent = formatTime(currentAudio.duration);
            });
            
            currentAudio.addEventListener('timeupdate', function() {
                const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
                document.getElementById('progress').style.width = `${progress}%`;
                document.getElementById('currentTime').textContent = formatTime(currentAudio.currentTime);
            });
            
            currentAudio.addEventListener('ended', function() {
                isPlaying = false;
                document.getElementById('playBtn').querySelector('i').className = 'fas fa-play';
                document.getElementById('progress').style.width = '0%';
                document.getElementById('currentTime').textContent = '00:00';
            });
            
            currentAudio.volume = document.getElementById('volume').value / 100;
            currentAudio.play();
        }
        
        function pauseAudio() {
            if (currentAudio) {
                currentAudio.pause();
            }
        }
        
        function changeReciter() {
            const select = document.getElementById('reciterSelect');
            currentReciter = select.value;
            
            const reciterNames = {
                mishari: 'مشاري العفاسي',
                hudhaifi: 'علي بن عبد الرحمن الحذيفي',
                sudais: 'عبد الرحمن السديس',
                shuraim: 'سعود الشريم',
                maher: 'ماهر المعيقلي',
                basfar: 'أبو بكر الشاطري'
            };
            
            document.getElementById('currentReciter').textContent = reciterNames[currentReciter] || 'مشاري العفاسي';
            
            if (isPlaying) {
                pauseAudio();
                playAudio();
            }
        }
        
        function selectReciter(reciter) {
            document.getElementById('reciterSelect').value = reciter;
            changeReciter();
        }
        
        function changeSurah() {
            const select = document.getElementById('surahSelect');
            currentSurah = parseInt(select.value);
            
            const surahNames = {
                1: 'الفاتحة',
                2: 'البقرة',
                36: 'يس',
                55: 'الرحمن',
                67: 'الملك',
                112: 'الإخلاص'
            };
            
            document.querySelector('.player-title').textContent = `سورة ${surahNames[currentSurah] || 'الفاتحة'}`;
            
            if (isPlaying) {
                pauseAudio();
                playAudio();
            }
        }
        
        function previousSurah() {
            const select = document.getElementById('surahSelect');
            const currentIndex = Array.from(select.options).findIndex(option => option.value == currentSurah);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : select.options.length - 1;
            
            select.value = select.options[prevIndex].value;
            changeSurah();
        }
        
        function nextSurah() {
            const select = document.getElementById('surahSelect');
            const currentIndex = Array.from(select.options).findIndex(option => option.value == currentSurah);
            const nextIndex = currentIndex < select.options.length - 1 ? currentIndex + 1 : 0;
            
            select.value = select.options[nextIndex].value;
            changeSurah();
        }
        
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        
        // Volume control
        document.getElementById('volume').addEventListener('input', function() {
            if (currentAudio) {
                currentAudio.volume = this.value / 100;
            }
        });
        
        // Search Quran
        function searchQuran() {
            const searchInput = document.getElementById('searchInput').value.trim();
            const resultsContainer = document.getElementById('searchResults');
            
            if (!searchInput) {
                resultsContainer.innerHTML = '<div class="alert alert-warning">الرجاء إدخال كلمة للبحث</div>';
                return;
            }
            
            // Sample search results
            const sampleResults = [
                { surah: "البقرة", ayah: 255, text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", translation: "آية الكرسي" },
                { surah: "البقرة", ayah: 286, text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", translation: "لا يكلف الله نفساً إلا وسعها" },
                { surah: "آل عمران", ayah: 200, text: "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا", translation: "يا أيها الذين آمنوا اصبروا وصابروا" }
            ];
            
            resultsContainer.innerHTML = `
                <div class="alert alert-success">
                    <i class="fas fa-search me-2"></i>
                    وجدت ${sampleResults.length} نتيجة للبحث عن: "${searchInput}"
                </div>
            `;
            
            sampleResults.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'surah-card mb-3';
                resultDiv.innerHTML = `
                    <div class="surah-content">
                        <h4 class="surah-name">سورة ${result.surah} (آية ${result.ayah})</h4>
                        <div class="ayah-text" style="font-size: 1.2rem;">${result.text}</div>
                        <div class="ayah-translation">${result.translation}</div>
                    </div>
                `;
                resultsContainer.appendChild(resultDiv);
            });
        }
        
        // Get random verse
        function getRandomVerse() {
            const randomIndex = Math.floor(Math.random() * verses.length);
            const verse = verses[randomIndex];
            
            document.getElementById('dailyVerse').textContent = verse.text;
            document.getElementById('dailyTranslation').textContent = `"${verse.translation}" (${verse.reference})`;
        }
        
        // Show tajweed detail
        function showTajweedDetail(type) {
            const details = {
                noon: {
                    title: "أحكام النون الساكنة والتنوين",
                    content: `
                        <h4>أحكام النون الساكنة والتنوين</h4>
                        <p>توجد أربعة أحكام للنون الساكنة والتنوين:</p>
                        <ol>
                            <li><strong>الإظهار:</strong> إخراج النون الساكنة أو التنوين من مخرجهما من غير غنة، ويأتي عند حروف الحلق (ء، هـ، ع، ح، غ، خ)</li>
                            <li><strong>الإدغام:</strong> إدخال النون الساكنة أو التنوين في الحرف الذي يليهما، وينقسم إلى:
                                <ul>
                                    <li>إدغام بغنة: مع حروف (ي، ن، م، و)</li>
                                    <li>إدغام بغير غنة: مع حرفي (ر، ل)</li>
                                </ul>
                            </li>
                            <li><strong>الإقلاب:</strong> قلب النون الساكنة أو التنوين ميماً مع الغنة عند حرف الباء</li>
                            <li><strong>الإخفاء:</strong> النطق بالنون الساكنة أو التنوين بين الإظهار والإدغام مع الغنة عند باقي الحروف</li>
                        </ol>
                    `
                },
                meem: {
                    title: "أحكام الميم الساكنة",
                    content: `
                        <h4>أحكام الميم الساكنة</h4>
                        <p>توجد ثلاثة أحكام للميم الساكنة:</p>
                        <ol>
                            <li><strong>الإخفاء الشفوي:</strong> إخفاء الميم الساكنة عند حرف الباء مع الغنة</li>
                            <li><strong>الإدغام الشفوي:</strong> إدغام الميم الساكنة في ميم مثلها مع الغنة</li>
                            <li><strong>الإظهار الشفوي:</strong> إظهار الميم الساكنة عند باقي الحروف</li>
                        </ol>
                    `
                },
                madd: {
                    title: "أحكام المدود",
                    content: `
                        <h4>أحكام المدود</h4>
                        <p>أنواع المدود في القرآن الكريم:</p>
                        <ol>
                            <li><strong>المد الطبيعي:</strong> مد بمقدار حركتين عند وجود حرف مد</li>
                            <li><strong>المد المنفصل:</strong> مد بمقدار 4-5 حركات عند انفصال حرف المد عن الهمزة في كلمة أخرى</li>
                            <li><strong>المد المتصل:</strong> مد بمقدار 4-5 حركات عند اتصال حرف المد بالهمزة في نفس الكلمة</li>
                            <li><strong>المد اللازم:</strong> مد بمقدار 6 حركات عند وجود حرف مد ساكن بعده حرف ساكن أصلي</li>
                        </ol>
                    `
                },
                letters: {
                    title: "صفات الحروف",
                    content: `
                        <h4>صفات الحروف العربية</h4>
                        <p>تنقسم صفات الحروف إلى قسمين:</p>
                        <ol>
                            <li><strong>الصفات اللازمة:</strong> لا تفارق الحرف وهي 17 صفة مثل:
                                <ul>
                                    <li>الهمس (الجهر ضدها)</li>
                                    <li>الشدة (الرخاوة ضدها)</li>
                                    <li>الاستعلاء (الاستفال ضدها)</li>
                                    <li>الإطباق (الانفتاح ضدها)</li>
                                </ul>
                            </li>
                            <li><strong>الصفات العارضة:</strong> تأتي للحرف أحياناً وتفارقه أحياناً مثل:
                                <ul>
                                    <li>التفخيم</li>
                                    <li>الترقيق</li>
                                    <li>الإمالة</li>
                                </ul>
                            </li>
                        </ol>
                    `
                }
            };
            
            const detail = details[type];
            if (detail) {
                alert(detail.title + "\n\n" + detail.content.replace(/<[^>]*>/g, ''));
            }
        }
        
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
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            initializeSurahList();
            
            // Set random verse as daily verse
            getRandomVerse();
            
            // Add enter key support for search
            document.getElementById('searchInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchQuran();
                }
            });
            
            // Close modal on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeSurahModal();
                }
            });
            
            // Close modal when clicking outside
            document.getElementById('surahModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeSurahModal();
                }
            });
        });
