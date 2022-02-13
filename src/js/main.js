// Change Language
    const headerLanguage = document.querySelectorAll('.header__language');
    const openLanguage = document.querySelectorAll('.open__language');
    if(headerLanguage){
       headerLanguage.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            openLanguage[index].classList.toggle('active')
        })
       })
    }
// Button Buy
    const buyBtn = document.querySelectorAll('.buy')
    if(buyBtn){
        buyBtn.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                buyBtn[index].classList.add('active');
                document.querySelectorAll('.buy span')[index].textContent = 'В корзине'
                document.querySelectorAll('.buy-cart')[index].style.display = 'none'
                document.querySelectorAll('.buy-done')[index].style.display = 'block'
            })
        })
    }
// FAQ
    const faqItem = document.querySelectorAll('.faq__item')
    const faqItemOpen = document.querySelectorAll('.faq__item--open')
    if(faqItem){
        faqItem.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                item.classList.toggle('active')
                faqItemOpen[index].classList.toggle('active')
            })
        })
    }
// Charts
    var xValues = ['Пн','Вт','Ср','Чт','Птн','Сб','Вс'];
    if(document.getElementById('myChart')){
        const ctx = document.getElementById('myChart').getContext('2d');
    
    const myChart = new Chart(ctx, {
        
        type: "line",
        data: {
          labels: xValues,
          datasets: [{

            label: 'Количество аккаунтов',
            data: [2700,2600,2800,2600,2650,2700,2800,2900,2300,2400,2100,2600],
            borderColor: "#D02F44",
            fill: false,
            lineTension: 0.4,
            pointBackgroundColor: '#fff',
            borderWidth: 2,
            borderRadius: 2,
          },{
            label: 'Сумма продаж',
            data: [1500,1300,2200,2500,1500,2000,1500,1200,2000,1900],
            borderColor: "#2B7AEA",
            fill: true,
            backgroundColor: 'rgba(215, 233, 255, 0.8)',
            pointBackgroundColor: 'white',
            borderRadius: 2,
            lineTension: 0.4,
          }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
         plugins:{
            legend: {
                display: false,
                labels: {
                    color: '#000000',
                    font: 'Manrope',
                    boxWidth: 10,
                    boxHeight: 10,
                    borderRadius: 10,
                },
                
              },
         },
          scales: {
            y: {
              min: 0,
              max: 6000,
              ticks: {
                // forces step size to be 50 units
                stepSize: 1000
            }
            },
           
            
          }
        },
        
        
    });
    }
    if(document.getElementById('myChart2')){
        const ctx1 = document.getElementById('myChart2').getContext('2d');
        const myChart1 = new Chart(ctx1, {
        
            type: "line",
            data: {
              labels: xValues,
              datasets: [{
                label: 'Рефералы',
                data: [1700,1600,1800,1600,1650,1900,1900,1400],
                borderColor: "#D48000",
                fill: false,
                lineTension: 0.4,
                pointBackgroundColor: '#fff',
                borderWidth: 2,
                borderRadius: 2,
              },
              {
                label: 'Продавцы',
                data: [3700,3600,3800,3800,3900,2500,3400,2500,3600],
                borderColor: "#0DA26C",
                fill: false,
                lineTension: 0.4,
                pointBackgroundColor: '#fff',
                borderWidth: 2,
                borderRadius: 2,
              },
              {
                label: 'Покупатели',
                data: [1500,1300,2200,2500,1500,2000,1500,1200,2000,1900],
                borderColor: "#2B7AEA",
                fill: true,
                backgroundColor: 'rgba(215, 233, 255, 0.8)',
                pointBackgroundColor: 'white',
                borderRadius: 2,
                lineTension: 0.4,
              }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
             plugins:{
                legend: {
                    display: false,
                    labels: {
                        color: '#000000',
                        font: 'Manrope',
                        boxWidth: 10,
                        boxHeight: 10,
                        borderRadius: 10,
                    },
                    
                  },
             },
              scales: {
                y: {
                  min: 0,
                  max: 6000,
                  ticks: {
                    // forces step size to be 50 units
                    stepSize: 1000
                }
                },
               
                
              }
            },
            
            
        });
    }
   

// Counter
    const plus = document.querySelectorAll('.plus')
    const minus = document.querySelectorAll('.minus')
    const counterInp = document.querySelectorAll('.counter-inp')
    
    if(minus){
        plus.forEach((item,index)=>{
            item.addEventListener('click',()=>{
              
                counterInp[index].value = Number(counterInp[index].value) + 1
            })
        })
        minus.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                if(counterInp[index].value == 0){
                    counterInp[index].value = 0
                }else{
                    counterInp[index].value = Number(counterInp[index].value) - 1
                }
                
            })
        })
    }
// SumInput
    
    const sumInp = document.querySelector('.sumInp')
    if(sumInp){
        let valueM = sumInp.value
        sumInp.value = sumInp.value + ' ₽'
        sumInp.addEventListener('focus',()=>{
            sumInp.setAttribute('type', 'number')
            sumInp.value = valueM
            valueM = sumInp.value
        })
        sumInp.addEventListener('blur',()=>{
            sumInp.setAttribute('type', 'text')
            valueM = sumInp.value
            sumInp.value = sumInp.value + ' ₽'
        })
    }

// CopyReferal
    const inputCopy = document.querySelector('.input-copy')
    const copyBtn = document.querySelector('.copy')
    if(copyBtn){
        copyBtn.addEventListener('click',()=>{
            navigator.clipboard.writeText(inputCopy.value)
            .then(() => {
            console.log('Text copied to clipboard');
            })
            .catch(err => {
            console.error('Could not copy text: ', err);
            });
        })
    }

//CustomSelect
    const customSelectInp = document.querySelectorAll('.custom-select-inp')
    const customSelectOpenItems = document.querySelectorAll('.custom-select-open span')
    const customSelectOpen = document.querySelectorAll('.custom-select-open')
    const customSelectInpSelect = document.querySelectorAll('.custom-select-inp-select')
    const customSelectInpOption = document.querySelectorAll('.custom-select-inp-select option')
    if(customSelectInp){
        customSelectInpSelect.forEach((item,index)=>[
            customSelectInpSelect[index].querySelectorAll('option').forEach((item1,index1)=>{
                let div = document.createElement('span');
                div.innerHTML = item1.innerHTML
                div.setAttribute('data-value',item1.getAttribute('value'))
                customSelectOpen[index].appendChild(div)
            })
        ])
        customSelectInpOption.forEach((item,index)=>{

        })
        customSelectInp.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                customSelectOpen[index].classList.toggle('active')
            })
            document.addEventListener('click',(e)=>{
              if(e.target != customSelectInp[index]){
                  customSelectOpen[index].classList.remove('active')
              }
            })
        })
        customSelectOpen.forEach((item,index)=>{
            item.addEventListener('click',(e)=>{
                customSelectInpSelect[index].value = customSelectInp[index].setAttribute('data-value',e.target.getAttribute('data-value'))
                customSelectInp[index].setAttribute('value',e.target.innerText)
                customSelectOpen[index].classList.remove('active')
            })
        })
    }
import Datepicker from '../../node_modules/vanillajs-datepicker/js/Datepicker'
import ru from '../../node_modules/vanillajs-datepicker/js/i18n/locales/ru';
const elem = document.querySelector('input[name="foo"]');
const elem1 = document.querySelector('input[name="foo1"]');
if(elem){
    Object.assign(Datepicker.locales, ru);
    const datepicker1 = new Datepicker(elem, {
        language: 'ru',
        format: 'dd/mm/yyyy'
    }); 
    const datepicker2 = new Datepicker(elem1, {
        language: 'ru',
        format: 'dd/mm/yyyy'
    }); 
    elem.value = 'от' + elem.value
    elem1.value = 'до' + elem1.value
}
// passHideShow

const pass = document.querySelector('.pass')
const pass1 = document.querySelector('.pass-1')
const inputPass = document.querySelector('.regpass')

if(pass){
    pass.addEventListener('click',()=>{
        pass.classList.add('active')
        pass1.classList.add('active')
        inputPass.setAttribute('type', 'text')
    })
    pass1.addEventListener('click',()=>{
        pass.classList.remove('active')
        pass1.classList.remove('active')
        inputPass.setAttribute('type', 'password')
    })
}

//MobileNav
const mobileBurger = document.querySelector('.mobile-nav')
const mobileMenu = document.querySelector('.mobile-nav-open')

if(mobileBurger){
    mobileBurger.addEventListener('click',()=>{
        mobileMenu.classList.toggle('active')
        mobileBurger.classList.toggle('active')
        document.getElementsByTagName('body')[0].classList.toggle('hide')
    })
}

// Modal

const modalMain = document.querySelector('.modal-cart')
const modalMainAdd = document.querySelector('.modal-addcart')
const overlay = document.querySelector('.overlay')
const cartTrig = document.querySelector('.header__cart--triggger')
const btnAdd = document.querySelectorAll('.buyModal')
const close = document.querySelectorAll('.close-modal')
const modalTicket = document.querySelector('.modal-ticket')
const ticketSend = document.querySelector('.ticket-send')
const starsModal = document.querySelector('.stars-opem')
const modalFeedback = document.querySelector('.modal-feedback')
if(cartTrig){
    cartTrig.addEventListener('click',()=>{
        overlay.classList.add('active')
         modalMain.classList.add('active')
    })
    starsModal.addEventListener('click',()=>{
        overlay.classList.add('active')
        modalFeedback.classList.add('active')
    })
    ticketSend.addEventListener('click',()=>{
        overlay.classList.add('active')
        modalTicket.classList.add('active')
    })
    btnAdd.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            overlay.classList.add('active')
            modalMainAdd.classList.add('active')
        })
    })
    overlay.addEventListener('click',()=>{
        overlay.classList.remove('active')
        modalFeedback.classList.remove('active')
            modalMain.classList.remove('active')
            modalMainAdd.classList.remove('active')
            modalTicket.classList.remove('active')
    })
    close.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            overlay.classList.remove('active')
            modalFeedback.classList.remove('active')
            modalMain.classList.remove('active')
            modalMainAdd.classList.remove('active')
            modalTicket.classList.remove('active')
        })
    })
}

//headerMenu

const headerMenuTrigger = document.querySelector('.header-join-trigger')
const headerMenuOpen = document.querySelector('.header__join--open')
if(headerMenuTrigger){
    headerMenuTrigger.addEventListener('click',()=>{
        headerMenuOpen.classList.toggle('active')
        
    })
}

const mobDropDown = document.querySelector('.nav-mob-dropdown')
const mobDropDownTwo = document.querySelector('.nav-mob-dropdown-two')
const openDropDown = document.querySelectorAll('.opened-mob-tab')
if(mobDropDown){
    mobDropDown.addEventListener('click',()=>{
        openDropDown[0].classList.toggle('active')
    })
    mobDropDownTwo.addEventListener('click',()=>{
        openDropDown[1].classList.toggle('active')
    })
}