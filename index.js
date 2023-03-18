// code your solution here
function saturdayFun(toDo = "roller-skate", toDo2 = "bathe my dog") {
    return `This Saturday, I want to ${toDo}!`;
    return `This Saturday, I want to ${toDo2}!`;
}

  const mondayWork = function(toDo = "go to the office", toDo2 = "work from home") {
    return `This Monday, I will ${toDo}.`;
    return `This Monday, I will ${toDo2}.`;
  }

function wrapAdjective(highlight = "*") {
  return function(adjective = "a hard worker") {
    return `You are ${highlight}${adjective}${highlight}!`;
  }
}

  function wrapAdjective(highlight = "||") {
    return function(adjective = "a dedicated programmer" ){
    return `You are ${highlight}${adjective}${highlight}!`;
  }
}