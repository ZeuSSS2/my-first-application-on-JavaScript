let money, time;

function star() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) { // чтобы пользователь не отправил пустую строку, не число или не нажал отмена
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
star();

let appData = {
    budget: money,
    expenses: { // объект с обязательными расходами
        // a: b; х2 раза, т.к цикл проходит 2 раза см.16 строку
    },
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], //массив данных с доп. доходом
    timeData: time,
    savings: true // накопления

};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''), // на что будете тратить деньги в этом месяце
            b = prompt("Во сколько обойдется?", ''); // сколько будем тратить в этом месяце

        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) { // не даем пользователю отправить пустую строку и т.д. и т.п.
            appData.expenses[a] = b; // передаем значения в  объект expenses который находится в объекте appData(объект в объекте)
        } else {
            i -= 1;
        }

    };
}
chooseExpenses();

appData.moneyPerDay = appData.budget / 30 // формула расчета бюджета на 1 день. Весь бюджет делим на 30 дней(месяц)

alert(`Ежедневный бюджет: ${parseInt(appData.moneyPerDay)}`); // Выводим ежедневный бюджет и округляем его до целого числа 

if (appData.moneyPerDay < 1000) {
    console.log(`Минимальный уровень достатка`);
} else if (appData.moneyPerDay > 2000) {
    console.log(`Средний уровень достатка`);
} else if (appData.moneyPerDay > 5000) {
    console.log(`Высокий уровень достатка`);
} else {
    console.log(`Что-то пошло не так!`);
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накопления?"),
            percent = +prompt("Под какой процент?");

        appData.monthInCome = save / 100 / 12 * percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthInCome}`);
    }
}
checkSavings();