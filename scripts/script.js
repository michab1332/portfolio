(function () {
    //variables
    const arrow = document.querySelector(".arrow")
    const socialsMenu = document.querySelector(".socials")
    const menu = document.querySelectorAll(".navigation__item")
    const about = document.querySelector(".about")
    const projects = document.querySelectorAll(".projects__item")
    const footer = document.querySelector("footer")
    const titlesTab = ["please, comeback", "you look so pretty", "i need you", "you look really nice", "write to me;)"]
    let scrollY = 0
    let clientX = 0
    let clientY = 0

    //changing title
    const changeTitle = () => {
        const randTitle = Math.ceil(Math.random() * titlesTab.length)
        let isPageActive = !document.hidden
        document.title = isPageActive ? "MBonowicz" : titlesTab[randTitle - 1]
    }

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

    const getScrollYElement = (name) => {
        const item = document.querySelector(`.${name.toLowerCase()}`)
        return item.offsetTop
    }

    //observer start
    const text = about.children[0].innerText
    const spanedText = text.split(" ").map(word => (`<span class="about__word">${word}</span>`));
    about.children[0].innerHTML = spanedText.join(" ")

    const observerAbout = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.style.opacity = 1
            else entry.target.style.opacity = 0
        })
    }, {
        threshold: 0.1
    })

    const spans = document.querySelectorAll("span")
    spans.forEach(word => {
        observerAbout.observe(word)
    })

    const observerProjects = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "translateX(0)"
                entry.target.style.opacity = 1
            }
            else {
                entry.target.style.transform = "translateX(10px)"
                entry.target.style.opacity = .1
            }
        })
    }, {
        threshold: 0.3
    })

    projects.forEach(project => {
        observerProjects.observe(project)
    })

    //observer end

    window.addEventListener('visibilitychange', e => {
        changeTitle()
    })

    window.addEventListener("scroll", () => {
        scrollY = window.scrollY
        changeArrowDirection()
        changeSocialsMenuPosition()
    })

    arrow.addEventListener("click", () => {
        scrollY > 600 ? window.scrollTo(0, 0) : window.scrollTo(0, about.offsetTop - 100)
    })

    menu.forEach(item => {
        const scrollY = getScrollYElement(item.innerText)
        item.addEventListener("click", () => window.scrollTo(0, scrollY - 100))
    })


    //cursor class
    const cursorClass = new Cursor("cursor");
    cursorClass.build()

})()