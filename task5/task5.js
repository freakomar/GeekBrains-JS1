/*Функция создания доски*/
const chessPlate = () => {
let chess = document.createElement("table");
    chess.id = "chessPlate";
    let numbers = ["", 8, 7, 6, 5, 4, 3, 2, 1,""];
    let letters = ["", "A", "B", "C", "D", "E", "F", "G", "H",""];
    for(let i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        if (i == 0) {
            for (let i = 0; i < 10; i++) {
                let col = document.createElement("td");
                col.insertAdjacentHTML("afterBegin",letters[i]);
                col.className = "rotate";
                row.appendChild(col);
            }
        }
        else if (i == 9) {
                for (let i = 0; i < 10; i++) {
                let col = document.createElement("td");
                col.insertAdjacentHTML("afterBegin",letters[i]);
                row.appendChild(col);
            }
        }
        else if (i % 2 == 0) {
            for (let i = 0; i < 10; i++) {
                let col = document.createElement("td");
                if (i == 0 || i == 9) {
                row.appendChild(col);
                }
                else if (i % 2 == 0) {
                col.className = "black";
                row.appendChild(col);
                }
                else {
                col.className = "white";
                row.appendChild(col);
                }
            }
            row.firstChild.innerHTML = numbers[i];
            row.lastChild.innerHTML = numbers[i];
            row.lastChild.className = "rotate";
        }
        else if (i % 2 != 0) {
            for (let i = 0; i < 10; i++) {
                let col = document.createElement("td");
                if (i == 0 || i == 9) {
                row.appendChild(col);
                }
                else if (i % 2 != 0) {
                col.className = "black";
                row.appendChild(col);
                }
                else {
                col.className = "white";
                row.appendChild(col);
                }
            }
            row.firstChild.innerHTML = numbers[i];
            row.lastChild.innerHTML = numbers[i];
            row.lastChild.className = "rotate"; 
        }
        
        chess.appendChild(row);
        }
    console.log(chess);
    document.body.appendChild(chess);
    };

/*Функция расстановки фигур*/

const figures = () => {
    let figure = [,"R", "Kt", "B", "Q", "K", "B", "Kt", "R"];
    let plate = document.getElementById("chessPlate");
    console.log(plate);
    for (let i = 0; i < 4; i++) {
        let figureRow;
        switch (i) {
            case 0:
                figureRow = plate.children[1];
                for (let i = 1; i <= 8; i++) {
                    let putFigure = figureRow.children[i];
                    putFigure.className += " blackFigure";
                    putFigure.innerHTML = figure[i];
                }
                break;
            case 1:
                figureRow = plate.children[2];
                for (let i = 1; i <= 8; i++) {
                    let putFigure = figureRow.children[i];
                    putFigure.className += " blackFigure";
                    putFigure.innerHTML = "P";
                }
                break;
            case 2:
                figureRow = plate.children[7];
                for (let i = 1; i <= 8; i++) {
                    let putFigure = figureRow.children[i];
                    putFigure.className += " whiteFigure";
                    putFigure.innerHTML = "P";
                }
                break;
            case 3:
                figureRow = plate.children[8];
                for (let i = 1; i <= 8; i++) {
                    let putFigure = figureRow.children[i];
                    putFigure.className += " whiteFigure";
                    putFigure.innerHTML = figure[i];
                }
                break;
                
        }
    }
}

/*Функция расстановки фигур - картинок*/

const figuresImg = () => {
    let figure = [,"&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"];
    let plate = document.getElementById("chessPlate");
    console.log(plate);
    for (let i = 0; i < 4; i++) {
        let figureRow;
        switch (i) {
            case 0:
                figureRow = plate.children[1];
                for (let i = 1; i <= 8; i++) {
                    let putFigure = figureRow.children[i];
                    putFigure.className += " blackFigure";
                    putFigure.innerHTML = figure[i];
                }
                break;
            case 1:
                figureRow = plate.children[2];
                for (let i = 1; i <= 8; i++) {
                    let putFigure = figureRow.children[i];
                    putFigure.className += " blackFigure";
                    putFigure.innerHTML = "&#9817;";
                }
                break;
            case 2:
                figureRow = plate.children[7];
                for (let i = 1; i <= 8; i++) {
                    let putFigure = figureRow.children[i];
                    putFigure.className += " whiteFigure";
                    putFigure.innerHTML = "&#9817;";
                }
                break;
            case 3:
                figureRow = plate.children[8];
                for (let i = 1; i <= 8; i++) {
                    let putFigure = figureRow.children[i];
                    putFigure.className += " whiteFigure";
                    putFigure.innerHTML = figure[i];
                }
                break;
                
        }
    }
}


chessPlate(); //создаем доску
figures(); //расставляем фигуры
figuresImg(); //расставляем фигуры-картинки
//функции расстановки фигур заменяют друг друга, т.е. при вызове новой функции - она меняет буквы на картинки и наобарот
