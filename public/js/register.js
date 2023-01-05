form.addEventListener("submit", () => {
    const register = {
        email: email.value,
        password: password.value,
        passwordrepeat: passwordrepeat.value,
        username: username.value
    }
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
        .then(data  => {
            if(data.status == "error") {
                success.style.display = "none"
                error.style.display = "block"
                alertmsg.style.display = "none"
                error.innerText = data.error
            } else if (data.status == "success")  {
                error.style.display = "none"
                success.style.display = "block"
                alertmsg.style.display = "none"
                success.innerText = data.success 
            } else {
                error.style.display = "none"
                success.style.display = "none"
                alertmsg.style.display = "block"
                alertmsg.innerText = data.alertmsg 
            }
        })
})