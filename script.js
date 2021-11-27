let money, time;

function star() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) { // чтобы пользователь не отправил пустую строку, не число или не нажал отмена
        money = +prompt("Ваш бюджет на месяц?", ''); // выполняетется до тех пор, пока одно из условий верно
    }
}
star();

let appData = { // мини база данных
    budget: money,
    expenses: { // объект с обязательными расходами

    },
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], //массив данных с доп. доходом
    timeData: time,
    savings: true, // накопления
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let article = prompt("Введите обязательную статью расходов в этом месяце", ''), // на что будете тратить деньги в этом месяце
                sumArticle = prompt("Во сколько обойдется?", ''); // сколько будем тратить в этом месяце
            if (typeof(article) === 'string' && typeof(article) != null && typeof(sumArticle) != null && article != '' && sumArticle != '' && article.length < 50) { // не даем пользователю отправить пустую строку и т.д. и т.п.
                appData.expenses[article] = sumArticle; // передаем значения в  объект expenses который находится в объекте appData(объект в объекте)
            } else {
                i -= 1;
            }
        }
    },
    detectdayBudget: function() {
        appData.moneyPerDay = appData.budget / 30;
        alert(`Ежедневный бюджет: ${parseInt(appData.moneyPerDay)}`);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 1000) {
            console.log(`Минимальный уровень достатка`);
        } else if (appData.moneyPerDay > 2000) {
            console.log(`Средний уровень достатка`);
        } else if (appData.moneyPerDay > 5000) {
            console.log(`Высокий уровень достатка`);
        } else {
            console.log(`Что-то пошло не так!`);
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накопления?"),
                percent = +prompt("Под какой процент?");
            appData.monthInCome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthInCome}`);
        }
    },
    chooseIncome: function() {
        let items;
        while (typeof(items) === 'number' || items == "" || items == null) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            appData.income.push(prompt("Может что-то ещё?"));
        }
        appData.income = items.split(', ');
        appData.income.sort();
    }
};
appData.income.forEach(value, index, arr => {
    console.log(index + 1 + ':' + "Способы доп. заработка: " + value);
});
for (const key in appData) {
    console.log(`Наша программа включает в себя данные: ${appData}`);
}