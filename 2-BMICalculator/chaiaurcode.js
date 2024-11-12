const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let result = document.querySelector("#results");
    const height = parseInt(e.target.height.value) / 100; // Height in meters
    const weight = parseInt(e.target.weight.value);
    if(height == '' || height<0 || isNaN(height)){
        result.textContent = "Please enter a valid height"
    } else if(weight == '' || weight < 0 || isNaN(weight)){
        result.textContent = "Please enter a valid weight"
    } else {
        result.textContent = '';
        const BMI = (weight/Math.pow(height, 2)).toFixed(1);
        let BMIResult = document.createTextNode(`${BMI}`)
        result.appendChild(BMIResult);
        result.append(document.createElement('br'))
        let span = document.createElement("span")

        if(BMI < 18.6){
            span.textContent = "You are underweight"
        } else if(BMI > 18.6 && BMI < 24.9){
            span.textContent = "Your weight is normal";
        } else {
            span.textContent = "Thora khada kar"
        }
        
        result.appendChild(span)
    }
})
