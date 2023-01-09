console.log('hello 2')
window.addEventListener("load",() => {
    console.log('hello 2')
    fetch("/api/emailverification", {
        method: "POST",
        body: JSON.stringify(token),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
        //console.log(res.json())
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
