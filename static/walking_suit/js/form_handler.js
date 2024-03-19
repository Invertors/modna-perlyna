const form = document.getElementById('order_form');
const userName = document.getElementById('userName');
const phoneNumber = document.getElementById('phoneNumber');
const color = document.getElementById('color');
const size = document.getElementById('size');
const model = document.getElementById('model');
phoneNumber.oninput = function(){
    this.value = this.value.replace(/[^0-9\+]/g, '');
}

const sendForm = async ()=>{
    try{

        await fetch('https://modnapearl.shop/bot',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                [userName.name]: userName.value.trim(),
                [phoneNumber.name]: phoneNumber.value.trim(),
                [color.name]: color.value.trim(),
                [size.name]:size.value,
		        [model.name]:model.value,
            })
        }).then(response =>{
                if (response.status >= 200 && response.status < 300){
                    form.reset();
		            alert("Ми отримали замовлення та з'вяжимося з вами найближчим часом!")
                }else{
                    alert('Помилка');
                }
            }
        ).catch(()=>{
            alert('Помилка');
        });
    }catch(ex){
        console.error(ex);
    }
}


form.onsubmit = (event) => {
        event.preventDefault();
        let phoneVal = phoneNumber.value.trim();
        let colorVal = color.value;
        let sizeVal = size.value;

        if (colorVal === "Оберіть колір"){
            alert("Оберіть колір");
            return false;
        }
        if (sizeVal === "Оберіть розмір"){
            alert("Оберіть розмір");
            return false;
        }
        if (phoneVal.indexOf('_') !== -1 || phoneVal == null || typeof phoneVal === 'undefined' || phoneVal == '') {
            alert('Введіть ваш номер телефона!');
            return false;
        }
        sendForm();

    return false;
}
