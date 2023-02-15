let progress = document.getElementById("progress"),
    val = progress.value

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let response = new XMLHttpRequest()

    response.upload.addEventListener("progress", (e) => {
        let ind = response.readyState
        let size = (e.loaded / e.total)
        console.log(size)
        progress.value = size
    })

    response.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
    from = document.getElementById("form")
    data  = new FormData(form)
    response.send(data)
})
