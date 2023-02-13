URL = "https://students.netoservices.ru/nestjs-backend/poll"
let response = new XMLHttpRequest()
response.open("GET", URL)
response.send()


function createAnswerHmtl(listAnswer) {
    let textAnswerHtml = ""
    for (let answer of listAnswer) {
        textAnswerHtml += ` <button class="poll__answer">
                                ${answer}
                            </button>`
    }
    return textAnswerHtml
}


function createQuestAnswerHmtl(quest, listAnswer) {
    let textQuestHtml = `    <div class="poll__title" id="poll__title">
                                ${quest}
                            </div>
                            <div class="poll__answers poll__answers_active" id="poll__answers">`
    let textAnswerHtml = createAnswerHmtl(listAnswer)
    return textQuestHtml + textAnswerHtml                        
}

let polls = document.querySelector(".poll")

response.addEventListener("readystatechange", () => {
    if (response.readyState == response.DONE) {
        let r = response.response,
            json = JSON.parse(r)
        quest = json.data.title
        listAnswer = json.data.answers
        let divQuestAnswer = createQuestAnswerHmtl(quest, listAnswer)
        polls.insertAdjacentHTML("beforeend", divQuestAnswer)
        
        
        btnCont = document.getElementById("poll__answers")
        btnCont.addEventListener("click", (e) => {
            let answer = e.target.textContent.trim()
            alert(`Ваш голос (${answer}) засчитан`)
        })

    }
})  


