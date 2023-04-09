document.getElementById('test'),addEventListener('click', testAdd);
const list = document.getElementById('list');
function testAdd(event){
    debugger;
    const li= document.createElement('li', list, null, null, 'qko');
    createElement('p', li, 'kurvi sbogom')
    console.log(list);
};