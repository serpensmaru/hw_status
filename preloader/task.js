let imgProgress = document.getElementById("loader")
let classActiveImg = "loader"

let listValue = document.getElementById("items")

function createValueHtml(val, count, typeVal) {
    let hmtlValue = `   <div class="item">
                        <div class="item__code">
                            ${val}
                        </div>
                        <div class="item__value">
                            ${count}
                        </div>
                        <div class="item__currency">
                            ${typeVal}
                        </div>
                        </div>`
    return hmtlValue
}

URL = "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
let response = new XMLHttpRequest()
response.open("GET", URL)
response.send()
response.addEventListener("readystatechange", () => {
    if (response.readyState == response.DONE) {
        imgProgress.className = classActiveImg
        let r = response.response,
            json = JSON.parse(r)
        vals = json.response.Valute
        for (let elem in vals) {
            let val = vals[elem],
                code = val.CharCode,
                name = val.Name,
                value = val.Value,
                divText = createValueHtml(code, value, name)
            listValue.insertAdjacentHTML("beforeend", divText)
        }
    }
})
