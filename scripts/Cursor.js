class Cursor {
    cursorX = 0
    cursorY = 0
    scale = 1
    constructor(className, scaleSize = 3) {
        this.className = className
        this.scaleSize = scaleSize
    }

    addClass(name) {
        this.cursor.classList.add(name)
    }

    removeClass(name) {
        this.cursor.classList(name)
    }

    onCursorMove() {
        window.addEventListener("mousemove", (e) => {
            this.cursorX = e.clientX
            this.cursorY = e.clientY + window.scrollY
        })
    }

    onCursorDown() {
        window.addEventListener("mousedown", () => {
            this.scale = this.scaleSize
        })
    }

    onCursorUp() {
        window.addEventListener("mouseup", () => {
            this.scale = 1
        })
    }

    build() {
        this.cursor = document.createElement("div")
        document.body.appendChild(this.cursor)

        this.addClass(this.className)
        this.onCursorDown()
        this.onCursorUp()
        this.onCursorMove()

        setInterval(() => {
            this.cursor.style.transform = `translateX(${this.cursorX}px) translateY(${this.cursorY}px) scale(${this.scale})`
        }, 1)
    }

}