const imgProgress = document.getElementById("loader")
const classActiveImg = "loader"

const listValue = document.getElementById("items")

function createValueHtml(val, count, typeVal) {
    const hmtlValue = `   <div class="item">
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
const response = new XMLHttpRequest()
response.open("GET", URL)
response.send()
response.addEventListener("readystatechange", () => {
    if (response.readyState == response.DONE && response.status == "200") {
        imgProgress.className = classActiveImg
        const r = response.response,
            json = JSON.parse(r)
        vals = json.response.Valute
        for (let elem in vals) {
            const   val = vals[elem],
                    code = val.CharCode,
                    name = val.Name,
                    value = val.Value,
                    divText = createValueHtml(code, value, name)
            listValue.insertAdjacentHTML("beforeend", divText)
        }
    }
})
