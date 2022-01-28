// fndtion3.js

let member1 = {
    mem_id : 1001,
    first_name : '진환',
    last_name : '김',
    math_score : 88,
    eng_score : 83
}

let member2 = {
    mem_id : 1002,
    first_name : '진석',
    last_name : '백',
    math_score : 85,
    eng_score : 89
}

let member3 = {
    mem_id : 1003,
    first_name : '형석',
    last_name : '조',
    math_score : 87,
    eng_score : 87
}

let members = [member1, member2, member3];

function makeTr(member) {
    var trTag = '<tr>';
    trTag += `<td>${member.mem_id}</td>`;
    trTag += `<td>${member.last_name} ${member.first_name}</td>`;
    trTag += `<td>${member.eng_score}</td>`;
    trTag += `<td>${member.math_score}</td>`;
    trTag += `<td><button>삭제</button></td>`;
    trTag += '</tr>';
    
    return trTag;
}

var str = '<table border="1">';
str += '<thead>';
str += '<tr><th>순번</th><th>이름</th><th>영어점수</th><th>수학점수</th><th>기능</th></tr>';
str += '</thead>';
str += '<tbody>';
for (let i = 0; i < members.length; i++) {
    console.log(members[i])
    str += makeTr(members[i]);
}

str += '</tbody>';
str += '</table>';
document.write(str);

