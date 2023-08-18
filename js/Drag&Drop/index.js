console.log("Drag & Drop")

let imgBox = document.querySelector('.imgBox'); //IImage Element
// console.log(imgBox)


let whiteBoxes = document.getElementsByClassName('whiteBox');
// console.log(whiteBox)


imgBox.addEventListener('dragstart' , (e)=>{
    console.log("DragStatr Triggered");
    // console.log(e);
    e.target.className += ' hold' ;
  
    // e.target.className += ' bg' ;
    setTimeout(()=>{
        e.target.className = 'hide';
    },0)
})

imgBox.addEventListener('dragend' , (e)=>{
    console.log("DragEnd Triggered");
    // console.log(e.target)
    e.target.className = 'imgBox'
});

for(whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover' ,(e)=>{
        console.log("DragOver Triggered")
        e.target.className += ' bg'
        
        e.preventDefault()
    } )
    whiteBox.addEventListener('dragenter' ,(e)=>{
        console.log("DragEnter Triggered");
    } )
    whiteBox.addEventListener('dragleave' ,(e)=>{
        console.log("DragLeave Triggered")
    } )
    whiteBox.addEventListener('drop' ,(e)=>{
        console.log("DragDrop Triggered")
        e.target.className = 'whiteBox'


        e.target.append(imgBox);
    } )
}