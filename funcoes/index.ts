interface User {
  name: string;
  surname?: string;
  status: boolean;
  yearsOld: number;
}

const user: User = {
  name: "Wagner",
  yearsOld: 3,
  status: false,
};

function formatName(userToFormat: User): string | number {
  if (userToFormat.surname) {
    return `${userToFormat.name} ${userToFormat.surname} tem ${userToFormat.yearsOld} anos`;
  }

  if (!userToFormat.status) {
    return userToFormat.yearsOld;
  }

  return `${userToFormat.name} tem ${userToFormat.yearsOld} anos`;
}

// console.log(formatName(user));

function formatDate(dateParam?: Date, addYear?: boolean): string {
  const date = dateParam || new Date();

  const day = date.getDate();
  /**
   * 0 - Janeiro
   * 1 - Fevereiro
   * ...
   */
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (addYear) {
    return `${day}/${month}/${year}`;
  }

  return `${day}/${month}`;
}

console.log(formatDate(new Date(1999, 5, 4), true));
console.log(formatDate(new Date(1999, 5, 4)));
console.log(formatDate());

// function compara(param?: any) {
//   // if (param) {
//   //   return param;
//   // } else {
//   //   return "Bloco falso";
//   // }

//   // return param ? param : "Bloco falso";

//   // return param || "Bloco falso";
// }

// console.log(compara());
