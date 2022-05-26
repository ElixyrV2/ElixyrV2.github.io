window.addEventListener('load', function(){
    
	let validList = {
		login: {
			pat: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			err: 'Введите корректное значение'
		},
	};
    let form = document.querySelector('.form');
    let inputs = form.querySelectorAll('.check');
    let errText = form.querySelectorAll('.errText');

    form.addEventListener('submit', function(e){
        let hasError = false;

        for(let i = 0; i < inputs.length; i++){
            let element = inputs[i];

            let val = element.value.trim();
            
            let validName = element.name;

            let re = validList[validName].pat;
            if(!re.test(val)){
                inputs[i].classList.add('err');
                errText[i].classList.add('errText');
                errText[i].innerHTML = validList[validName].err;
                hasError = true;
            }
        }

        if(hasError){
            e.preventDefault();
        }
    });

    form.addEventListener('focusin', function(e){
        if(e.target.classList.contains('check')){
            e.target.classList.remove('err');
            e.target.parentNode.querySelector('.errText').innerHTML = '';
        }
    });
});