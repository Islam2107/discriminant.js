let a = document.getElementById("input1")
let b = document.getElementById("input2")
let c = document.getElementById("input3")
let disc = document.getElementById("discriminant")
let result = document.getElementById("result")
let btnCalc = document.getElementById("btnCalc")
let bolt = document.getElementById("bolt")


function calculationDisc (inp1,inp2,inp3) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    const num3 = Number(inp3.value)
    const dis = b.value ** 2 - 4 * a.value * c.value;

    disc.textContent=dis

    if (dis > 0){
        const x1  = (-b.value + Math.sqrt(dis)) / (2 * a.value)
        const x2  = (-b.value + Math.sqrt(dis)) / (2 * a.value)
        result.textContent = `x1=${x1} x2=${x2}`
    }
    else if (dis === 0 ){
        const x = -(b.value / (2 * a.value))
        result.textContent = `x= ${x}`
    }
    else if (dis < 0 ) {
        result.textContent= "Решений нету"
    }
    else {
        result.textContent="Введие число"
    }
}

btnCalc.addEventListener("click" , function () {
    calculationDisc(a,b,c)
})

input1.style.cssText=`
 margin-left:640px margin-bottom:40px; `
input2.style.cssText=`
   margin-left:640px margin-top:20px`
input3.style.cssText=`
  margin-left:640px  margin-top:20px `



btnCalc.style.cssText=`
 background-color:black;color:white; border-radius:30px;width:100px; margin-left:640px;margin-top:30px
`

bolt.style.cssText=` margin-left:450px;display-flex;
`
