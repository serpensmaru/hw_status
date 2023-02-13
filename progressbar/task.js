let progress = document.getElementById("progress"),
    val = progress.value




form.addEventListener("submit", (e) => {
    e.preventDefault()
    let response = new XMLHttpRequest()

    response.addEventListener("readystatechange", () => {
        let ind = response.readyState
        progress.value = 1 / (4/ind)
    })
    
    response.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
    from = document.getElementById("form")
    data  = new FormData(form)
    response.send(data)
})
