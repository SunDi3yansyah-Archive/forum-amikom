var sliderwidth="420px"
var sliderheight="90px"
var slidespeed=1
var slidebgcolor=""
var table_style="margin:auto;padding:0;"
var a_img_width=154
var a_img_height=70
var a_img_folder="http://amikom.ac.id/"
var a_img_style="margin:10px 6px;border:none;"
function linkimage(imagefile,linkpage){
alink = '<a href="'+linkpage+'">'
alink += '<img align="absmiddle" src="'+a_img_folder+imagefile+'"'
alink += ' height="'+a_img_height+'" width="'+a_img_width+'"'
alink += ' style="'+a_img_style+'"></a>'
return alink
}
var leftrightslide=new Array()
var finalslide=''
//start-dataimage
leftrightslide[1]=linkimage('images/barner/2013/01/BANERpmbpng.png','http://pmb.amikom.ac.id');
leftrightslide[2]=linkimage('images/barner/2010/09/repositroy.png','http://repository.amikom.ac.id');
leftrightslide[3]=linkimage('images/barner/2010/11/research.png','http://research.amikom.ac.id');
leftrightslide[4]=linkimage('images/barner/2010/02/e-learning.png','http://elearning.amikom.ac.id');
leftrightslide[5]=linkimage('images/barner/2010/02/digilib.png','http://diglib.amikom.ac.id/');
//end-dataimage
var imagegap=""
var slideshowgap=5
var copyspeed=slidespeed
leftrightslide='<nobr>'+leftrightslide.join(imagegap)+'</nobr>'
var iedom=document.all||document.getElementById
if(iedom) document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-9000px">'+leftrightslide+'</span>')
var actualwidth=''
var cross_slide, ns_slide
function fillup(){
if (iedom){
cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2
cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3
cross_slide.innerHTML=cross_slide2.innerHTML=leftrightslide
actualwidth=document.all? cross_slide.offsetWidth : document.getElementById("temp").offsetWidth
cross_slide2.style.left=actualwidth+slideshowgap+"px"
}
else if (document.layers){
ns_slide=document.ns_slidemenu.document.ns_slidemenu2
ns_slide2=document.ns_slidemenu.document.ns_slidemenu3
ns_slide.document.write(leftrightslide)
ns_slide.document.close()
actualwidth=ns_slide.document.width
ns_slide2.left=actualwidth+slideshowgap
ns_slide2.document.write(leftrightslide)
ns_slide2.document.close()
}
lefttime=setInterval("slideleft()",30)
}
window.onload=fillup
function slideleft(){
if (iedom){
if (parseInt(cross_slide.style.left)>(actualwidth*(-1)+8)) cross_slide.style.left=parseInt(cross_slide.style.left)-copyspeed+"px"
else cross_slide.style.left=parseInt(cross_slide2.style.left)+actualwidth+slideshowgap+"px"
if (parseInt(cross_slide2.style.left)>(actualwidth*(-1)+8)) cross_slide2.style.left=parseInt(cross_slide2.style.left)-copyspeed+"px"
else cross_slide2.style.left=parseInt(cross_slide.style.left)+actualwidth+slideshowgap+"px"
}
else if (document.layers){
if (ns_slide.left>(actualwidth*(-1)+8)) ns_slide.left-=copyspeed
else ns_slide.left=ns_slide2.left+actualwidth+slideshowgap
if (ns_slide2.left>(actualwidth*(-1)+8)) ns_slide2.left-=copyspeed
else ns_slide2.left=ns_slide.left+actualwidth+slideshowgap
}
}
if (iedom||document.layers){
with (document){
document.write('<table border="0" cellspacing="0" cellpadding="0" style="'+table_style+'"><tr><td>')
if (iedom){
write('<div style="position:relative;width:'+sliderwidth+';height:'+sliderheight+';overflow:hidden">')
write('<div style="position:absolute;width:'+sliderwidth+';height:'+sliderheight+';background-color:'+slidebgcolor+'" onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed">')
write('<div id="test2" style="position:absolute;left:0px;top:0px"></div>')
write('<div id="test3" style="position:absolute;left:-1000px;top:0px"></div>')
write('</div></div>')
}
else if (document.layers){
write('<ilayer width='+sliderwidth+' height='+sliderheight+' name="ns_slidemenu" bgColor='+slidebgcolor+'>')
write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('</ilayer>')
}
document.write('</td></tr></table>')
}
}