const btn=document.querySelector('#btn');
const p1=document.querySelector('#p1');
const p2=document.querySelector('#p2');
const p3=document.querySelector('#p3');
const p4=document.querySelector('#p4');
const p5=document.querySelector('#p5');
const url="https://cat-fact.herokuapp.com/facts";

const getdata=async ()=>{
    let response= await fetch(url);
    let data1=await response.json();
    p1.innerText=data1[0].text;
    p2.innerHTML=data1[1].text;
    p3.innerHTML=data1[2].text;
    p4.innerHTML=data1[3].text;
    p5.innerHTML=data1[4].text;

};

btn.addEventListener('click',getdata);