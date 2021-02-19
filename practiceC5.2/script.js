let xmlList = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>
`

const xmlParser = new DOMParser();

let domList = xmlParser.parseFromString(xmlList, 'text/xml')
let nodeList = domList.querySelector('list')

let student1 = nodeList.querySelector('student')
let student2 = nodeList.querySelectorAll('student')[1]

let student1nameFirst = student1.querySelector('first')

let student1nameSecond = student1.querySelector('second')
let student1age = student1.querySelector('age')
let student1prof = student1.querySelector('prof')
let student1lang = student1.querySelector('name').getAttribute('lang')

let student2nameFirst = student2.querySelector('first')
let student2nameSecond = student2.querySelector('second')
let student2age = student2.querySelector('age')
let student2prof = student2.querySelector('prof')
let student2lang = student2.querySelector('name').getAttribute('lang')


let result = {
    list: [
        {   name : student1nameFirst.textContent + ' ' + student1nameSecond.textContent,
            age: Number(student1age.textContent),
            prof: student1prof.textContent,
            lang: student1lang
        },
        {   name : student2nameFirst.textContent + ' ' + student2nameSecond.textContent,
            age: Number(student2age.textContent),
            prof: student2prof.textContent,
            lang: student2lang
        }
    ]
}

console.log('XML List', result)

const jsonList = `{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}`

let objectList = JSON.parse(jsonList);

console.log('JSON List', objectList)