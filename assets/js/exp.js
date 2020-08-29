today = new Date()
start = new Date(2019,06,18)

function spelling(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    if (number === 0) {
      if (titles[0] === 'сотрудник') {
        return 'Не выбраны сотрудники';
      }
      return titles[2];
    }
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

function calcDate(date1,date2) {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let day = 1000 * 60 * 60 * 24;

    let days = Math.floor(diff/day);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);
    months %= 12;

    let message =  years + ` ${spelling(years, ['год', 'года', 'лет'])} `;
    message += months + ` ${spelling(months, ['месяц', 'месяца', 'месяцев'])}.`;

    return message
    }

const span = document.getElementById('exp');
span.innerHTML = calcDate(today, start);