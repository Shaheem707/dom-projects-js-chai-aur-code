setInterval(()=>{
    const time = new Date().toLocaleTimeString()
    document.getElementById("clock").textContent = time;
},1000)
