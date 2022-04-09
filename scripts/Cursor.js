class Cursor {
    cursorX = 0
    cursorY = 0
    scale = 1
    constructor(className, scaleSize = 3, scaleX = 1, scaleY = 1) {
        this.className = className
        this.scaleSize = scaleSize
        this.scaleX = scaleX
        this.scaleY = scaleY
    }

    setScale(scale) {
        this.scale = scale
    }

    setWidth(width) {
        this.width = width
    }

    setHeight(height) {
        this.height = height
    }

    setScaleSize(size) {
        this.scaleSize = size
    }

    setBorderRadius(borderRadius) {
        this.borderRadius = borderRadius
    }

    setText(text) {
        this.p.innerHTML = text
    }

    addClass(name) {
        this.cursor.classList.add(name)
    }

    removeClass(name) {
        this.cursor.classList.remove(name)
    }

    onCursorMove() {
        window.addEventListener("mousemove", (e) => {
            this.cursorX = e.clientX
            this.cursorY = e.clientY + window.scrollY
        })
    }

    onCursorDown(fun) {
        window.addEventListener("mousedown", () => {
            try {
                fun()
            } catch (e) { }
        })
    }

    onCursorUp(fun) {
        window.addEventListener("mouseup", () => {
            try {
                fun()
            } catch (e) { }
        })
    }

    build(onCursorDown, onCursorUp) {
        this.cursor = document.createElement("div")
        this.p = document.createElement("p")
        this.cursor.appendChild(this.p)
        document.body.appendChild(this.cursor)

        this.addClass(this.className)

        this.onCursorDown(onCursorDown)
        this.onCursorUp(onCursorUp)
        this.onCursorMove()

        setInterval(() => {
            this.cursor.style.width = this.width
            this.cursor.style.height = this.height
            this.cursor.style.borderRadius = this.borderRadius
            this.cursor.style.transform = `translateX(${this.cursorX}px) translateY(${this.cursorY}px) scale(${this.scale})`
        }, 1)
    }

}