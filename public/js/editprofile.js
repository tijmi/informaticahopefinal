form.addEventListener("submit", () => {
    const editprofile = {
        newusername: newusername.value,
        passwordold: oldpassword.value,
        passwordnew: newpassword.value,
        passwordrepeat: passwordrepeat.value
    }
    console.log(newusername)
    fetch("/api/editprofile", {
        method: "POST", 
        body: JSON.stringify(editprofile),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
        .then(data  => {
            if(data.status == "error") {
                success.style.display = "none"
                error.style.display = "block"
                error.innerText = data.error
            } else {
                error.style.display = "none"
                success.style.display = "block"
                success.innerText = data.success 
            }
        })
})