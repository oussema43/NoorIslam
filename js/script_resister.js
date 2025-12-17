// JavaScript for Registration Page Functionality
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

        // Password strength checker
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const strengthBar = document.getElementById('passwordStrengthBar');
        const strengthText = document.getElementById('strengthText');
        const passwordMatch = document.getElementById('passwordMatch');
        
        // Password requirements elements
        const reqLength = document.getElementById('reqLength');
        const reqUppercase = document.getElementById('reqUppercase');
        const reqLowercase = document.getElementById('reqLowercase');
        const reqNumber = document.getElementById('reqNumber');
        
        passwordInput.addEventListener('input', function() {
            const password = passwordInput.value;
            let strength = 0;
            
            // Check password length
            if (password.length >= 8) {
                strength += 25;
                reqLength.style.color = 'green';
                reqLength.innerHTML = '✓ 8 أحرف على الأقل';
            } else {
                reqLength.style.color = '#666';
                reqLength.innerHTML = '8 أحرف على الأقل';
            }
            
            // Check uppercase letters
            if (/[A-Z]/.test(password)) {
                strength += 25;
                reqUppercase.style.color = 'green';
                reqUppercase.innerHTML = '✓ حرف كبير واحد على الأقل';
            } else {
                reqUppercase.style.color = '#666';
                reqUppercase.innerHTML = 'حرف كبير واحد على الأقل';
            }
            
            // Check lowercase letters
            if (/[a-z]/.test(password)) {
                strength += 25;
                reqLowercase.style.color = 'green';
                reqLowercase.innerHTML = '✓ حرف صغير واحد على الأقل';
            } else {
                reqLowercase.style.color = '#666';
                reqLowercase.innerHTML = 'حرف صغير واحد على الأقل';
            }
            
            // Check numbers
            if (/[0-9]/.test(password)) {
                strength += 25;
                reqNumber.style.color = 'green';
                reqNumber.innerHTML = '✓ رقم واحد على الأقل';
            } else {
                reqNumber.style.color = '#666';
                reqNumber.innerHTML = 'رقم واحد على الأقل';
            }
            
            // Update strength bar
            strengthBar.style.width = strength + '%';
            
            // Update strength text and color
            if (strength === 0) {
                strengthBar.style.backgroundColor = '#ddd';
                strengthText.textContent = 'قوة كلمة المرور';
                strengthText.style.color = '#666';
            } else if (strength <= 50) {
                strengthBar.style.backgroundColor = '#ff4d4d';
                strengthText.textContent = 'ضعيفة';
                strengthText.style.color = '#ff4d4d';
            } else if (strength <= 75) {
                strengthBar.style.backgroundColor = '#ffa500';
                strengthText.textContent = 'متوسطة';
                strengthText.style.color = '#ffa500';
            } else {
                strengthBar.style.backgroundColor = '#2E8B57';
                strengthText.textContent = 'قوية';
                strengthText.style.color = '#2E8B57';
            }
        });
        
        // Password confirmation check
        confirmPasswordInput.addEventListener('input', function() {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            
            if (confirmPassword === '') {
                passwordMatch.textContent = '';
                passwordMatch.style.color = '#666';
            } else if (password === confirmPassword) {
                passwordMatch.textContent = '✓ كلمات المرور متطابقة';
                passwordMatch.style.color = 'green';
            } else {
                passwordMatch.textContent = '✗ كلمات المرور غير متطابقة';
                passwordMatch.style.color = 'red';
            }
        });
        
        // Form submission handling
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const country = document.getElementById('country').value;
            const terms = document.getElementById('terms').checked;
            
            // Validation
            let isValid = true;
            let errorMessage = '';
            
            if (!firstName || !lastName || !email || !password || !confirmPassword || !country) {
                isValid = false;
                errorMessage = 'يرجى ملء جميع الحقول المطلوبة';
            }
            
            if (password !== confirmPassword) {
                isValid = false;
                errorMessage = 'كلمات المرور غير متطابقة';
            }
            
            if (password.length < 8) {
                isValid = false;
                errorMessage = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
            }
            
            if (!terms) {
                isValid = false;
                errorMessage = 'يجب الموافقة على الشروط والأحكام';
            }
            
            if (!isValid) {
                alert(errorMessage);
                return;
            }
            
            // Simulate registration process
            const registerBtn = document.querySelector('.register-btn-form');
            const originalText = registerBtn.innerHTML;
            
            registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري إنشاء الحساب...';
            registerBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                // For demo purposes, always succeed
                alert(`مبروك ${firstName} ${lastName}! تم إنشاء حسابك بنجاح.\nتم إرسال رسالة تفعيل إلى ${email}.`);
                window.location.href = 'login.html';
            }, 2000);
        });
        
        // Social registration buttons
        document.getElementById('googleBtn').addEventListener('click', function() {
            alert('سيتم توجيهك لتسجيل الدخول باستخدام جوجل. هذه ميزة تجريبية.');
        });
        
        document.getElementById('facebookBtn').addEventListener('click', function() {
            alert('سيتم توجيهك لتسجيل الدخول باستخدام فيسبوك. هذه ميزة تجريبية.');
        });
        
        // Auto-select Saudi Arabia as default
        document.getElementById('country').value = 'SA';
