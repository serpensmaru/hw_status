const   URL = "https://students.netoservices.ru/nestjs-backend/poll",
        response = new XMLHttpRequest()
response.open("GET", URL)
response.send()


function createQuestDiv() {
    // создание div элемента для вопроса
    const divRes = document.createElement("div")
    divRes.className = "poll__title"
    divRes.id = "poll__title"
    return divRes 
}

function createAnswerDiv() {
    // создание div элемента для вариантов ответа
    const divRes = document.createElement("div")
    divRes.className = "poll__answers poll__answers_active"
    divRes.id = "poll__answers"
    return divRes 
}

function createAnswerBtn(text) {
    // создание  кнопки с указанным текстом (вариант ответа)
    const answerOne = document.createElement("button")
    answerOne.className = "poll__answer"
    answerOne.textContent = text
    return answerOne
}

function createQuestElement(quest) {
    // Создаем элемент вопроса с необходимым текстом
    const questEmpty = createQuestDiv()
    questEmpty.textContent = quest
    return questEmpty                     
}

function createAnswerElement(listAnswer) {
    // Создаем элемент содержащий кнопки с вариантами ответов
    const answerEmpty = createAnswerDiv()
    for (let answer of listAnswer) {
        let answerOne = createAnswerBtn(answer)
        answerEmpty.appendChild(answerOne)
    }
    return answerEmpty                     
}

function appendTest(radix, questDiv, answerDiv) {
    // Вводим вопрос и варианты ответов на страницу 
    radix.appendChild(questDiv)
    radix.appendChild(answerDiv)
}

const polls = document.querySelector(".poll")

response.addEventListener("readystatechange", () => {
    if (response.readyState == response.DONE) {
        let r = response.response,
            json = JSON.parse(r)
        quest = json.data.title
        listAnswer = json.data.answers
        let divAnswer = createAnswerElement(listAnswer),
            divQuest = createQuestElement(quest)
        appendTest(polls, divQuest, divAnswer)

        btnCont = document.getElementById("poll__answers")
        btnCont.addEventListener("click", (e) => {
            let answer = e.target.textContent.trim()
            alert(`Ваш голос (${answer}) засчитан`)
        })

    }
})  

