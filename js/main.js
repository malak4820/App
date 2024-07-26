let imgslide=document.getElementById("imgslide");
let i=0
img=["assets/img/91442692.jpg", "assets/img/download.jpg","assets/img/Circle-icons-stack.svg.png"];
let show=function(){
    imgslide.src=img[i];
    if(i<img.length-1){
        i++
    }else{
        i=0;
    }
    setTimeout("show()",2000);
}
show()