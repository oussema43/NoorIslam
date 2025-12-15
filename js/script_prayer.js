
        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Update current date
        function updateCurrentDate() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            document.getElementById('currentDate').textContent = now.toLocaleDateString('ar-SA', options);
        }
        
        updateCurrentDate();
        
        // City prayer times data
        
        // Function to search for city
        function searchCity() {
            const cityInput = document.getElementById('city').value;
            
        }
        
        // Update prayer times based on selected city
        function updatePrayerTimes(city) {
            const data = prayerTimesData[city];
            
            // Update city name
            document.getElementById('currentCity').textContent = data.name;
            
            // Update prayer times
            document.getElementById('fajrTime').textContent = data.times.fajr;
            document.getElementById('dhuhrTime').textContent = data.times.dhuhr;
            document.getElementById('asrTime').textContent = data.times.asr;
            document.getElementById('maghribTime').textContent = data.times.maghrib;
            document.getElementById('ishaTime').textContent = data.times.isha;
            
            // Update next prayer
            updateNextPrayer(data.times);
        }
        
        // Calculate and update next prayer
        function updateNextPrayer(times) {
            const now = new Date();
            const currentTime = now.getHours() * 60 + now.getMinutes();
            
            // Convert prayer times to minutes
            const prayerMinutes = {
                fajr: convertTimeToMinutes(times.fajr),
                dhuhr: convertTimeToMinutes(times.dhuhr),
                asr: convertTimeToMinutes(times.asr),
                maghrib: convertTimeToMinutes(times.maghrib),
                isha: convertTimeToMinutes(times.isha)
            };
            
            // Find next prayer
            let nextPrayer = null;
            let nextPrayerName = '';
            let minDiff = Infinity;
            
            for (const [prayer, time] of Object.entries(prayerMinutes)) {
                if (time > currentTime) {
                    const diff = time - currentTime;
                    if (diff < minDiff) {
                        minDiff = diff;
                        nextPrayer = prayer;
                    }
                }
            }
            
            // If no prayer found for today, show fajr for tomorrow
            if (!nextPrayer) {
                nextPrayer = 'fajr';
                minDiff = (24 * 60 - currentTime) + prayerMinutes.fajr;
            }
            
            // Format prayer name
            const prayerNames = {
                fajr: 'الفجر',
                dhuhr: 'الظهر',
                asr: 'العصر',
                maghrib: 'المغرب',
                isha: 'العشاء'
            };
            
            // Calculate hours and minutes
            const hours = Math.floor(minDiff / 60);
            const minutes = minDiff % 60;
            
            // Update display
            let displayText = '';
            if (hours > 0) {
                displayText = `${prayerNames[nextPrayer]} بعد ${hours} ساعة و ${minutes} دقيقة`;
            } else {
                displayText = `${prayerNames[nextPrayer]} بعد ${minutes} دقيقة`;
            }
            
            document.getElementById('nextPrayer').textContent = displayText;
        }
        
        // Convert time string to minutes
        function convertTimeToMinutes(timeStr) {
            const [time, period] = timeStr.split(' ');
            const [hours, minutes] = time.split(':').map(Number);
            
            let totalMinutes = hours * 60 + minutes;
            
            // Adjust for PM
            if (period === 'م' && hours !== 12) {
                totalMinutes += 12 * 60;
            }
            
            // Adjust for AM if 12
            if (period === 'ص' && hours === 12) {
                totalMinutes -= 12 * 60;
            }
            
            return totalMinutes;
        }
        
        // Initialize with default city
        updatePrayerTimes('مكة المكرمة');
        
        // Add enter key support for city search
        document.getElementById('city').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCity();
            }
        });
        
        // Update next prayer every minute
        setInterval(() => {
            const currentCity = document.getElementById('currentCity').textContent;
            if (prayerTimesData[currentCity]) {
                updateNextPrayer(prayerTimesData[currentCity].times);
            }
        }, 60000);
        
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
        
        // Set prayer reminder
        function setPrayerReminder() {
            if (Notification.permission === 'granted') {
                showNotification('تم تفعيل التذكير بالصلاة');
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        showNotification('تم تفعيل التذكير بالصلاة');
                    }
                });
            }
        }
        
        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'position-fixed top-0 start-0 m-4 p-3 rounded shadow-lg';
            notification.style.backgroundColor = 'var(--primary-green)';
            notification.style.color = 'white';
            notification.style.zIndex = '9999';
            notification.style.maxWidth = '300px';
            notification.style.transition = 'transform 0.3s ease';
            notification.innerHTML = `
                <div class="d-flex align-items-center">
                    <i class="fas fa-check-circle me-2"></i>
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
        
        // Interactive prayer guide
        document.addEventListener('DOMContentLoaded', function() {
            // Add click functionality to prayer steps
            const prayerSteps = document.querySelectorAll('.prayer-step-detailed');
            prayerSteps.forEach(step => {
                step.addEventListener('click', function() {
                    this.classList.toggle('active');
                });
            });
            
            // Animate position bars
            const positionBars = document.querySelectorAll('.position-bar');
            positionBars.forEach(bar => {
                const height = bar.style.height;
                bar.style.height = '0px';
                setTimeout(() => {
                    bar.style.height = height;
                }, 500);
            });
            
            // Add hover effect to prayer table rows
            const tableRows = document.querySelectorAll('.prayer-table tbody tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f8f9fa';
                });
                row.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = '';
                });
            });
        });
        
        // Prayer step details function
        function showPrayerStepDetails(stepNumber) {
            const stepTitles = [
                "النية",
                "تكبيرة الإحرام",
                "القيام وقراءة الفاتحة",
                "الركوع",
                "السجود",
                "الجلوس بين السجدتين",
                "التشهد",
                "التسليم"
            ];
            
            const stepDetails = [
                "النية شرط لصحة الصلاة، وهي عزم القلب على فعل الصلاة بدون نطق.",
                "تكبيرة الإحرام ركن من أركان الصلاة، تبدأ بها الصلاة ويحرم بها ما كان حلالاً.",
                "قراءة الفاتحة ركن في كل ركعة، ويقرأ ما تيسر من القرآن في الركعتين الأوليين.",
                "الركوع ركن من أركان الصلاة، يكون الظهر مستوياً والرأس في مستوى الظهر.",
                "السجود ركن من أركان الصلاة، يكون على سبعة أعضاء: الجبهة والأنف والكفان والركبتان وأطراف القدمين.",
                "الجلوس بين السجدتين ركن من أركان الصلاة، يكون مفترشاً مع الدعاء والاستغفار.",
                "التشهد ركن من أركان الصلاة، يكون في الركعة الثانية والأخيرة، ويشمل الشهادة والدعاء للنبي.",
                "التسليم ركن من أركان الصلاة، ينهي به المصلي صلاته ويحل ما حرم بالصلاة."
            ];
            
            if (stepNumber >= 1 && stepNumber <= 8) {
                const detail = stepDetails[stepNumber - 1];
                const title = stepTitles[stepNumber - 1];
                showNotification(`خطوة ${stepNumber}: ${title} - ${detail}`);
            }
        }