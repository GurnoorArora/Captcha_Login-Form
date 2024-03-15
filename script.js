(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";

    function generateCaptcha(){
        let value = btoa(Math.random() * 1000000000);
        value = value.substr(0, 5 + Math.random() * 5);
        captchaValue = value;
    }

    function setCaptcha(){
        let html = captchaValue.split("").map((char) => {
            const rotate = Math.trunc(Math.random() * 30);
            const font = Math.trunc(Math.random() * fonts.length);
            return `<span style="transform:rotate(${rotate}deg); font-family:${fonts[font]}">${char}</span>`;
        }).join("");
        document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }

    function initCaptcha(){
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha(); // Corrected function name
    }

    initCaptcha();

    document.querySelector(".login-form #login-btn").addEventListener("click", function(){
        // Get email and password input values
        let emailInputValue = document.getElementById("username").value;
        let passwordInputValue = document.getElementById("password").value;
        let inputCaptchaValue = document.querySelector(".login-form .captcha-form input").value;

        // Check if email and password are not empty
        if(emailInputValue.trim() === "" || passwordInputValue.trim() === "") {
            swal("Error", "Email and Password are mandatory!", "error");
            return; // Exit the function early
        }

        // Check if captcha is correct
        if(inputCaptchaValue === captchaValue){
            swal("", "Logging In!", "success");
        }
        else{
            swal("Invalid captcha");
        }
    });
})();
