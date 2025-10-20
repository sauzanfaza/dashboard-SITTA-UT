document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form")
    const email = form.querySelector('input[type="email"]')
    const passowrd = form.querySelector('input[type="password"]')
    const button = document.querySelector(".button-msk")

    button.addEventListener("click", (e) => {
        e.preventDefault()

        const emailInput = email.value.trim()
        const pwInput = passowrd.value.trim()
        if(emailInput === "" || pwInput === "") {
            alert("Email dan password tidak boleh kosong!")
            return
        }

        if (emailInput && pwInput === "123456") {
            alert("Login berhasil!")
            window.location.href = "dashboard.html" 
         } else {
        alert("Email atau password salah!")
        }
    })
})