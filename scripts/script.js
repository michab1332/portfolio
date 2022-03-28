(function () {
    //variables
    const arrow = document.querySelector(".arrow")
    const socialsMenu = document.querySelector(".socials")
    const about = document.querySelector(".about")
    const footer = document.querySelector("footer")
    const titlesTab = ["please, comeback", "you look so pretty", "i need you", "you look really nice", "write to me;)"]
    let scrollY = 0

    //changing title
    const changeTitle = () => {
        const randTitle = Math.ceil(Math.random() * titlesTab.length)
        let isPageActive = !document.hidden
        document.title = isPageActive ? "MBonowicz" : titlesTab[randTitle - 1]
    }

    window.addEventListener('visibilitychange', e => {
        changeTitle()
    })


    const changeArrowDirection = () => {
        scrollY > 600 ? arrow.style.transform = "rotate(180deg)" : arrow.style.transform = "rotate(0)"
    }

    const changeSocialsMenuPosition = () => {
        const height = footer.offsetTop - 600

        if (scrollY > height) {
            socialsMenu.style.opacity = 0
            socialsMenu.style.transform = "translateY(10px)"
            footer.children[0].style.opacity = 1
            footer.children[0].style.transform = "translateY(0)"
        } else {
            socialsMenu.style.opacity = 1
            socialsMenu.style.transform = "translateY(0)"
            footer.children[0].style.opacity = 0
            footer.children[0].style.transform = "translateY(-20px)"
        }
    }

    window.addEventListener("scroll", () => {
        scrollY = window.scrollY
        changeArrowDirection()
        changeSocialsMenuPosition()
    })

    arrow.addEventListener("click", () => {
        scrollY > 600 ? window.scrollTo(0, 0) : window.scrollTo(0, about.offsetTop - 100)
    })

})()