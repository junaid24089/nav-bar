let car = document.querySelector(".car");

let carPosition = 120; // same as CSS bottom

document.addEventListener("keydown", function(e){

    if(e.key === "ArrowUp"){
        carPosition += 10;   // move up
    }

    if(e.key === "ArrowDown"){
        carPosition -= 10;   // move down
    }

    if(e.key === "Arrowleft"){
        
    }

    // limits (road ke andar rahe)
    if(carPosition < 120) carPosition = 120;
    if(carPosition > 300) carPosition = 300;

    car.style.bottom = carPosition + "px";
});

