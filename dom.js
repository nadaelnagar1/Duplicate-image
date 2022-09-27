function repeat(){
    var x = document.getElementsByTagName('img')[0]
    
    var img = x.cloneNode(true);
    document.getElementById('clone').appendChild(img);
    console.log(img);
}