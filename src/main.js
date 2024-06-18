// Toggle the mobile menu visibility on button click
document.getElementById("mobile-menu-toggle").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden")
    }
)

const mobileMenuLinks = document.querySelectorAll("#mobile-menu a")

mobileMenuLinks.forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("mobile-menu").classList.toggle("hidden")
    })
})
