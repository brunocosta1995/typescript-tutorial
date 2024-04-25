// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear;

const year = document.getElementById("year") as HTMLSpanElement
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;

