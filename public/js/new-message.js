form.addEventListener("submit", () => {
    const newmessage = {
        title: title.value,
        message: message.value,
        image: image.value
    }
    fetch("/api/new-message", {
        method: "POST",
        body: JSON.stringify(newmessage),
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