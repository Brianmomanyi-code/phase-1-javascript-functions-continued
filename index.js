// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork= function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork("work from home");
function wrapAdjective(highlight= "*")  {
    return function (adjective){
    return `You are ${highlight}${adjective}${highlight}!`
    };
}
wrapAdjective("a hard worker")
wrapAdjective("a dedicated programmer")
