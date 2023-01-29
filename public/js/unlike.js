function unlike(messageId, userId){
    console.log("unlike, ")
    console.log(messageId, userId)
    const like = {
        messageId: messageId,
        userId: userId
    }
    fetch("/api/unlike", {
        method: "POST",
        body: JSON.stringify(like),
        headers: {
            "Content-Type":"application/json"
        }
        }).then(res => res.json())
        .then(data  => {
            if(data.status == "error") {
                console.log("like.js, were reporting from failure management")
            } else {
                console.log("like.js, success")
                location.reload(); 
            }
        })
};