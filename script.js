const billAmount = document.getElementById("Bill");
const peoplecount = document.getElementById("PeopleCount");
const Custom = document.querySelector('.custom');
const reset = document.querySelector('.reset');
const tipbuttons = document.querySelectorAll('.tip');
const tipPerPerson = document.getElementById('tipAmount');
const totalPerPerson = document.getElementById('totalamount');
const zeropara = document.querySelector('.zeropeople');
let tip = 0, total = 0, pcount = 0,bill=0,tipamount=0,k;

for (let i = 0; i < 5; i++)
{
    tipbuttons[i].addEventListener('click',()=> {
        tip = tipbuttons[i].innerHTML;
        tip = parseInt(tip);
        k = i;
        if (tip != Custom.value) Custom.value = "";
    })

    tipbuttons[i].addEventListener('focusout', () =>
    {
        tipbuttons[k].style.backgroundColor = 'var(--strongCyan)';
    })
}

Custom.addEventListener('focusout', () => {
    tip = Custom.value;
    tip = parseFloat(tip);
    // console.log(tip);
});

peoplecount.addEventListener('focusout', () => {
    pcount = peoplecount.value;
    pcount = parseInt(pcount);
    // console.log(pcount);

    if (peoplecount.value == ""||pcount==0)
    {
        zeropara.style.visibility = 'visible';
        peoplecount.style.border='2px solid orangered'
    }
    else {
        zeropara.style.visibility = 'hidden';
        peoplecount.style.border = '2px solid green'
        tipamount = bill * tip / pcount / 100;
        total = tipamount + (bill / pcount);
        tipPerPerson.innerHTML = tipamount.toPrecision(4);
        totalPerPerson.innerHTML = total.toPrecision(4);
    }

});

billAmount.addEventListener('focusout', () => {
    bill = billAmount.value;
    bill = parseFloat(bill);
});

reset.addEventListener('click', () =>
{
    document.location.reload();
})



