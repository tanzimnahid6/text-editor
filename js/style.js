//get the main text
const textBox=document.getElementById('mainText');

//BOLD=========ITALIC =========UNDERLINE ======
//======================================================
//step : bold the text
document.getElementById('boldText').addEventListener('click',function(){
    if(textBox.value!='' && textBox.style.fontWeight!='bold'){
        textBox.style.fontWeight='bold';
        return;
    }
    else if(textBox.style.fontWeight=='bold'){
        textBox.style.fontWeight='normal';
        return;
    }
    else{
        alert('Enter some text');
        return;
    }
})


//italic the text
document.getElementById('italicText').addEventListener('click',function(){
    if(textBox.value!='' && textBox.style.fontStyle != "italic"){
        textBox.style.fontStyle = "italic";
        return;
    }
    else if(textBox.style.fontStyle == "italic"){
        textBox.style.fontStyle = "normal"
    }
    else{
        alert('Enter some text');
        return;
    }
})



//underline the text
document.getElementById('underlineText').addEventListener('click',function(){
    if(textBox.value!=''&& textBox.style.textDecoration != "underline"){
        textBox.style.textDecoration = "underline";
        return;
    }
    else if(textBox.style.textDecoration == "underline"){
        textBox.style.textDecoration = "none"
    }
    else{
        alert('Enter some text');
        return;
    }
})


//TEXT LEFT ===TEXT CENTER===JUSTIFY TEXT===TEXT RIGHT====
//=========================================================
//text left
document.getElementById('textLeft').addEventListener('click',function(){
    if(textBox.value!=''){
        textBox.style.textAlign='left';
        return;
    }
   
    else{
        alert('Enter some text');
        return;
    }
})


//text center
document.getElementById('textCenter').addEventListener('click',function(){
    if(textBox.value!='' && textBox.style.textAlign!='center'){
        textBox.style.textAlign='center';
        return;
    }
   
    else{
        alert('Enter some text');
        return;
    }
})


//text left
document.getElementById('textRight').addEventListener('click',function(){
    if(textBox.value!='' && textBox.style.textAlign!='right'){
        textBox.style.textAlign='right';
        return;
    }
   
    else{
        alert('Enter some text');
        return;
    }
})

//justify text
document.getElementById('textJustify').addEventListener('click',function(){
    if(textBox.value!=''&&textBox.style.textAlign!='justify'){
        textBox.style.textAlign='justify'
        return;
    }
    else if(textBox.style.textAlign=='justify'){
        textBox.style.textAlign='left';
        return;
    }
    else{
        alert('Enter some text');
        return;
    }
})
