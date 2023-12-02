function lightning(){
    document.getElementById("lightningPanel").classList.add("strike");
    document.getElementById("lightning").classList.add("strike2");
    const randomDelay = Math.random() * 30000;

    setTimeout(lightning, randomDelay);
    setTimeout(()=>{
        document.getElementById("lightningPanel").classList.remove("strike");
        document.getElementById("lightning").classList.remove("strike2");
    }, 500);
}

lightning();