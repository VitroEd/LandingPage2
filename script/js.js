document.getElementById('dps').onclick = function(){
    const widthItem = document.querySelector('.ite').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('ants').onclick = function(){
    const widthItem = document.querySelector('.ite').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}