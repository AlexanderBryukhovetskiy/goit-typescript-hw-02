/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,  
};

type DaysString = keyof typeof Days;

function isWeekend(day: DaysString) : boolean {
    
  if (Days[day] <= Days.Friday) {
    return false;
  } else {
    return true;
  }
}

let monday = isWeekend("Monday");
console.log("Monday is weekend: ", monday);

let sunday = isWeekend("Sunday");
console.log("Sunday is weekend: ", sunday);

export {};
