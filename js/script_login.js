// JavaScript for Login Page Functionality
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

        // Form submission handling
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // Simulate login process
            const loginBtn = document.querySelector('.login-btn-form');
            const originalText = loginBtn.innerHTML;
            
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تسجيل الدخول...';
            loginBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                // For demo purposes, always succeed
                alert('تم تسجيل الدخول بنجاح! سيتم توجيهك إلى الصفحة الرئيسية.');
                window.location.href = 'index.html';
            }, 1500);
        });

        // Social login buttons
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const platform = this.querySelector('i').className.includes('google') ? 'جوجل' : 
                               this.querySelector('i').className.includes('facebook') ? 'فيسبوك' : 'تويتر';
                alert(`سيتم توجيهك لتسجيل الدخول باستخدام ${platform}. هذه ميزة تجريبية.`);
            });
        });

        // Forgot password link
        document.querySelector('.forgot-password').addEventListener('click', function(e) {
            e.preventDefault();
            const email = prompt('أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور:');
            if (email) {
                alert(`تم إرسال رابط إعادة تعيين كلمة المرور إلى ${email}. هذه ميزة تجريبية.`);
            }
        });
