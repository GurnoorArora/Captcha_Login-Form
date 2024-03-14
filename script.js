(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";

    function generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function generateCaptcha() {
        captchaValue = generateRandomString(5 + Math.random() * 5);
    }

    function setCaptcha() {
        let html = captchaValue.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 30);
            const font = Math.trunc(Math.random() * fonts.length);
            return `<span style="transform:rotate(${rotate}deg); font-family:${fonts[font]}">${char}</span>`;
        }).join("");
        document.querySelector(".login-form .captcha-form").innerHTML = html; // Changed selector to .captcha-form
    }

    function initCaptcha() {
        document.querySelector(".login-form .captcha-refresh").addEventListener("click", function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }

    initCaptcha();

    document.querySelector(".login-form #login-btn").addEventListener("click", function(){
        let inputCaptchaValue = document.querySelector(".login-form .captcha-form input").value;
        if (inputCaptchaValue === captchaValue) {
            // Use your preferred method to display success message
            // Replace swal() with appropriate method
            swal("", "Logging in! Success");
        } else {
            // Use your preferred method to display error message
            // Replace swal() with appropriate method
            swal("Invalid Captcha");
        }
    });
})();
