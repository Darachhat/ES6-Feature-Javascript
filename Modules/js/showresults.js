import {findAreaOfRectangle, findAreaofCircle} from "../component/Shape.js";

const rectangle = document.getElementById('rectangle')
const circle = document.getElementById('circle')

const resultOfRectangle = findAreaOfRectangle(5,10)
const resultOfCircle = findAreaofCircle(2)

rectangle.innerHTML = resultOfRectangle
circle.innerHTML = resultOfCircle
