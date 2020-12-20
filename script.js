if (window.innerWidth < 600) {
    var number_of_particle = parseInt(window.innerWidth / 3)
    var container = document.getElementsByClassName("container")[0]
    for (var i = 0; i < number_of_particle; i++) {
        var snow = document.createElement('div')
        snow.classList.add("snow")
        snow.classList.add(`snowtime${i}`)
        container.appendChild(snow)

    }
    for (var i = 0; i < number_of_particle; i++) {
        var item = document.getElementsByClassName(`snowtime${i}`)[0]
        // console.log(item)
        item.style.background = "white"
        var delay = Math.floor(Math.random() * 10)
        var blur = Math.floor(Math.random() * 5)
        var left = Math.floor(Math.random() * 500)
        item.style.left = `${left}px`
        item.style.height = "5px"
        item.style.width = "5px"
        item.style.filter = (`blur(${blur}px)`)
        // console.log)
        item.style.animationDelay = `${delay / 2 + (i / 5)}s`;

    }
} else if (window.innerWidth > 600) {
    var number_of_particle = parseInt(window.innerWidth / 5)
    var container = document.getElementsByClassName("container")[0]
    for (var i = 0; i < number_of_particle; i++) {
        var snow = document.createElement('div')
        snow.classList.add("snow")
        snow.classList.add(`snowtime${i}`)
        container.appendChild(snow)

    }
    for (var i = 0; i < number_of_particle; i++) {
        var item = document.getElementsByClassName(`snowtime${i}`)[0]
        // console.log(item)
        item.style.background = "white"
        var delay = Math.floor(Math.random() * 10)
        var blur = Math.floor(Math.random() * 5)
        var left = Math.floor(Math.random() * 1100)
        item.style.left = `${left}px`
        item.style.filter = (`blur(${blur}px)`)

        item.style.height = "10px"
        item.style.width = "10px"
        // console.log)
        item.style.animationDelay = `${delay / 2 + (i / 5)}s`

    }
}