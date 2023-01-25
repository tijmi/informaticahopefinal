const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', async event => {
            const itemId = event.target.dataset.itemId;
            const likeCountSpan = event.target.nextSibling;
        })
    })