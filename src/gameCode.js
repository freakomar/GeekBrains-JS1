var event, ok;
var answers = [];


do {//Выводим первый вопрос
    let answers = [];
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers.push(1);
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answers.push(1);
                do {
                    ok = false;
                    alert('Вы прекрасно погуляли и вернувшись домой отправились в столовую');
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        if (event == 1) {
                            answers.push(1);
                        }
                        else if (event == 2) {
                            answers.push(2);   
                        }
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answers.push(2);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        if (event == 1) {
                            answers.push(1);
                        }
                        else if (event == 2) {
                            answers.push(2);   
                        }
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers.push(2);
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                answers.push(1);
                do {
                    ok = false;
                    
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        if (event == 1) {
                            answers.push(1);
                        }
                        else if (event == 2) {
                            answers.push(2);   
                        }
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                answers.push(2);
                do {
                    ok = false;
                    alert('Вы прекрасно потрудились и вернувшись домой отправились в столовую')
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        if (event == 1) {
                            answers.push(1);
                        }
                        else if (event == 2) {
                            answers.push(2);   
                        }
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
    let question = +prompt('на каком из этапов Вас интересует Ваш ответ?\n1 - первый выбор\n 2 - второй выбор\n 3 - третий выбор');
    while (question < 1 || question > 3){
    alert('Неправильный номер, такого этапа не было в игре')
    question = +prompt('на каком из этапов Вас интересует Ваш ответ?\n1 - первый выбор\n 2 - второй выбор\n 3 - третий выбор');
}
alert('На ' + question + 'м этапе,! Ваш ответ был под номером ' + answers[question-1]);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

