document.addEventListener("DOMContentLoaded", function () {
    const starRatings = document.querySelectorAll(".star");

    // 購物車判斷
    document.getElementById('button-minus').addEventListener('click', function () {
        let quantity = parseInt(document.getElementById('quantity').value);
        if (quantity > 1) {
            document.getElementById('quantity').value = quantity - 1;
        }
    });
    
    document.getElementById('button-plus').addEventListener('click', function () {
        let quantity = parseInt(document.getElementById('quantity').value);
        document.getElementById('quantity').value = quantity + 1;
    });


    // 星星判斷
    starRatings.forEach((starRating) => {
        const starIcons = starRating.querySelectorAll(".star-icon");

        starIcons.forEach((starIcon) => {
            starIcon.addEventListener("click", function () {
                const clickedIndex = parseInt(this.getAttribute("data-index"));

                starIcons.forEach((icon, index) => {
                    if (index < clickedIndex) {
                        //填滿星星
                        icon.classList.add('filled');
                        icon.classList.remove('outline');
                    } else {
                        icon.classList.add('outline');
                        icon.classList.remove('filled');
                    }
                });
                document.getElementById("rate").value = clickedIndex;
                console.log("Selected Rating: " + clickedIndex);
            });
        });
    });

});
