console.log('kontrola');

//DU 1
const salary = (wage, hours, days) => {
    const hruba_Mzda = wage * hours * days;
    return hruba_Mzda;
}

const taxed = (salary, taxes) => {
    //salary = salary();
    const netSalary = salary * ((100 - taxes) / 100);
    return netSalary;
}

const new_Salary = salary(300,8,21);
//console.log(newSalary);
const final_Salary = taxed(new_Salary, 15);
console.log(final_Salary);


//DU 2
const calculate = (number1, operation, number2) => {
    const numr1 = Number(number1);
    const opr = String(operation);
    const numr2 = Number(number2);

    if (opr === '+') {
        const result = numr1 + numr2;
        //console.log(result);
        return result;
    } else if (opr === '-') {
        const result = numr1 - numr2;
        //console.log(result);
        return result;
    } else if (opr === '*') {
        const result = numr1 * numr2;
        //console.log(result);
        return result;
    } else if (opr === '/') {
        const result = numr1 / numr2;
        //console.log(result);
        return result;
    } else {
        console.log('operator neznamy')
        return null
    }
}

console.log(calculate(16,'/',8));

//DU 3
const selectPlan = (plan_Number) => {

    const selectedNumber = String(plan_Number);

    const selectedPlan1 = document.querySelector('#plan1');
    selectedPlan1.classList.remove("plan--selected");

    const selectedPlan2 = document.querySelector('#plan2');
    selectedPlan2.classList.remove("plan--selected");

    const selectedPlan3 = document.querySelector('#plan3');
    selectedPlan3.classList.remove("plan--selected");

    if (selectedNumber === '1') {
        const selectedPlan = document.querySelector('#plan1');
        //console.log(selectedPlan);
        selectedPlan.classList.add("plan--selected");
        }
    else {
        if (selectedNumber === '2') {
            const selectedPlan = document.querySelector('#plan2');
            //console.log(selectedPlan);
            selectedPlan.classList.add("plan--selected");
        } else {

            if (selectedNumber === '3') {
                const selectedPlan = document.querySelector('#plan3');
                //console.log(selectedPlan);
                selectedPlan.classList.add("plan--selected");
            }
            }
    }

}

selectPlan(3);

