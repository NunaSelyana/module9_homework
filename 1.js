const parser = new DOMParser;

const xmlString = `
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
`;
const result = { 'list': []};

const xmlDom = parser.parseFromString(xmlString, 'text/xml');

const students = xmlDom.querySelectorAll('student');

for (let student of students) {
    const nameNode = student.querySelector('name');
    const firstNode = nameNode.querySelector('first');
    const secondNode = nameNode.querySelector('second');
    const langAttr = nameNode.getAttribute('lang');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof')
    const stud = {
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr
    }
    result.list.push(stud)
}

console.log(result);




