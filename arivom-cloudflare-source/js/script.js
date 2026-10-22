const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#interestForm').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formNote').textContent='இந்த standalone பதிப்பில் form backend இன்னும் இணைக்கப்படவில்லை. மின்னஞ்சல் சேவை இணைத்த பின் பதிவுகள் அனுப்பப்படும்.';});
