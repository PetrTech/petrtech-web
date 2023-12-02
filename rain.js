var rainDirection = 0; //0 = down, 1 = left, 2 = right

function spawnRain() {
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    const container = document.getElementById("rainContainer");
    const element = document.createElement("div");
    element.className = "rain";

    const randomLeft = Math.random() * (window.innerWidth - 2 + 600) - 300; // Subtract the element's width to keep it within the visible screen width
    element.style.left = `${randomLeft}px`;

    const randomHeight = clamp(Math.random()*20, 3, 30);
    element.style.height = `${randomHeight}vh`;

    if(rainDirection == 0){
        element.style.animationName = "rainanim";
    }else if(rainDirection == 1){
        element.style.animationName = "rainanimL";
    }else if(rainDirection == 2){
        element.style.animationName = "rainanimR";
    }
    
    container.appendChild(element);

    // Generate a random delay between 10ms and 200ms (0.01s to 0.2s)
    const randomDelay = Math.random();

    // Schedule the next element spawn
    setTimeout(spawnRain, randomDelay);

    setTimeout(() => {
        element.remove();
    }, 1000);
}

// Start spawning elements
spawnRain();


//
//
//  SPLASH
//
//
function spawnSplashes() {
    const containers = document.getElementsByClassName("splashPanel")
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    const container = containers[Math.floor(Math.random()*containers.length)]
    const element = document.createElement("div");
    element.className = "splash";

    const random = Math.round(Math.random())==1;

    if(random){
        element.style.animationName = "splashanimL";
    }else{
        element.style.animationName = "splashanimR";
    }
   
    const randomLeft = Math.random() * (container.clientWidth - 2); // Subtract the element's width to keep it within the visible screen width
    element.style.left = `${randomLeft}px`;

    container.appendChild(element);

    // Generate a random delay between 10ms and 200ms (0.01s to 0.2s)
    const randomDelay = Math.random() * 10;

    // Schedule the next element spawn
    setTimeout(spawnSplashes, randomDelay);

    setTimeout(() => {
        element.remove();
    }, 200);
}

// Start spawning elements
spawnSplashes();


function rainDirectionAdjust(){

    const randomDelay = Math.random() * 7000;
    rainDirection = Math.round(Math.random()*2);
    setTimeout(rainDirectionAdjust, randomDelay);
}

rainDirectionAdjust();