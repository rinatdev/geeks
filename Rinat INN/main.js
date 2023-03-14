

const innInput = document.querySelector('#innInput'),
    innCheck = document.querySelector('#innCheck'),
    innResult = document.querySelector('.innResult')

const regExp = /^\d{14}$/ 

innCheck.onclick = () => {
    if(regExp.test(innInput.value)){
        innResult.innerHTML = 'Correct INN'
        innResult.style.color = 'green'
    }else{
        innResult.innerHTML = 'Incorrect INN'
        innResult.style.color = 'red'
    }
}