 function updateTime() {

            let indiaTime = new Date().toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });

            let usaTime = new Date().toLocaleTimeString("en-US", {
                timeZone: "America/New_York",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });

            const india = document.getElementById("ist-time");
            const usa = document.getElementById("est-time");

            if (india) {
                india.textContent = indiaTime;
            }

            if (usa) {
                usa.textContent = usaTime;
            }
        }

        updateTime();
        setInterval(updateTime, 1000);



        document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/*document.querySelectorAll("button").forEach(button => {

    if (button.textContent.includes("Book a Free Audit")) {

        button.addEventListener("click", () => {
            alert("Thank you! Our team will contact you soon.");
        });

    }

});*/