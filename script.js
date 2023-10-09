var imagespizza=["images/pz1.png","images/pz3.png"]
$('.fimg1').on('mouseenter',function(){
   $(this).attr('src',imagespizza[1]) 
})
$('.fimg1').on('mouseleave',function(){
    $(this).attr("src",imagespizza[0]);
})

var allphoto=["images/pizzas/margherita.png","images/pizzas/pizza1.png","images/pizzas/pizza2.png","images/pizzas/burger.png","images/pizzas/burger2.png","images/pizzas/burger3.png","images/pizzas/7up.png","images/pizzas/fanta.png","images/pizzas/pepsi.png"]
var pizzass={
    name:"Pizza",
    images:["images/pizzas/margherita.png", "images/pizzas/pizza1.png","images/pizzas/pizza2.png"]
}
burgrs={
    name:"Burger",
    images:["images/pizzas/burger.png","images/pizzas/burger2.png","images/pizzas/burger3.png"]
}
sodas={
    name:"Soda",
    images:["images/pizzas/7up.png","images/pizzas/fanta.png","images/pizzas/pepsi.png"]
}
function changeimg (item){
    var counter=0
    function getnext(){
      counter++
      counter=counter%item.length
      return item[counter]
    }
    return getnext
  } 
  function previmg(item){
    var counter=0
    function getprev(){
      counter++
      counter=counter%item.length
      return item[counter]
    }
    return getprev
 }
 var prev=previmg(allphoto)
  var change=changeimg(allphoto);
$('.posr').on('click',function(){
  var getnextindex=change()
  $('.fimg2').attr("src",getnextindex)
  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
    if((getnextindex===pizzass.images[j])){
        $('#print').html(""+pizzass.name+"")
    }
    else if((getnextindex===burgrs.images[j])){
        $('#print').html(""+burgrs.name+"")
    }
    else if((getnextindex===sodas.images[j])){
    $('#print').html(""+sodas.name+"")}
  }}
})
$('.posl').on('click',function(){
    var getprevindex=prev()
    $('.fimg2').attr("src",getprevindex)
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
        if((getprevindex===pizzass.images[j])){
            $('#print').html(""+pizzass.name+"")
        }
        else if((getprevindex===burgrs.images[j])){
            $('#print').html(""+burgrs.name+"")
        }
        else if((getprevindex===sodas.images[j])){
        $('#print').html(""+sodas.name+"")}
      }}
  })
  
function namedprod(namme,category,price){
    return {
        namme:namme,
        category:category,
        price:price,
    }
}
pizza1=namedprod('vergin','Pizza',8)
pizza2=namedprod('margherita','Pizza',10)
pizza3=namedprod('paperoni','Pizza',15)
burger1=namedprod('breaded escalope','Berger',15)
burger2=namedprod('escalope','Berger',10)
burger3=namedprod('grilled escalope','Berger',19)
soda1=namedprod('fanta','Soda',5)
soda2=namedprod('pepsi','Soda',5)
soda3=namedprod('7 up','Soda',5)

$('#piz1').on("click",function(){
    console.log("yes");
    $('#info1').html(`${pizza1.namme}<br>
    Price : ${pizza1.price}<br>
    Category : ${pizza1.category}
    <button id='pz1' class='butt'>add</button>`)
})
$('#piz2').on("click",function(){
    $('#info2').html(` ${pizza2.namme}<br>
    Price : ${pizza2.price}<br>
    Category : ${pizza2.category}
    <button id='pz2' class='butt'>add</button>`)
})
$('#piz3').on("click",function(){
    $('#info3').html(`${pizza3.namme}<br>
    Price : ${pizza3.price}<br>
    Category : ${pizza3.category}
    <button id='pz3' class='butt'>add</button>`)
})
$('#bir1').on("click",function(){
    $('#info4').html(` ${burger1.namme}<br>
    Price : ${burger1.price}<br>
    Category : ${burger1.category}
    <button id='br1' class='butt'>add</button>`)
})
$('#bir2').on("click",function(){
    $('#info5').html(`${burger2.namme}<br>
    Price : ${burger2.price}<br>
    Category : ${burger2.category}
    <button id='br2' class='butt'>add</button>`)
})
$('#bir3').on("click",function(){
    $('#info6').html(`${burger3.namme}<br>
    Price : ${burger3.price}<br>
    Category : ${burger3.category}
    <button id='br3' class='butt'>add</button>`);
})
$('#sod1').on("click",function(){
    $('#info7').html(`${soda1.namme}<br>
    Price : ${soda1.price}<br>
    Category : ${soda1.category}
    <button id='sd1' class='butt'>add</button>`)
})
$('#sod2').on("click",function(){
    $('#info8').html(`${soda2.namme}<br>
    Price : ${soda2.price}<br>
    Category : ${soda2.category}
    <button id='sd2' class='butt'>add</button>`)
    })

$('#sod3').on("click",function(){
    $('#info9').html(`${soda3.namme}<br>
    Price : ${soda3.price}<br>
    Category : ${soda3.category}
    <button id="sd3" class="butt">add</button>`)
    })
// total=0
var x=''
 var total = 0;
$('.butt').on("click", function () {
        console.log(x);
        if (this.id == 'pz1') {
            total += pizza1.price;
        }
        else if (this.id === 'pz2') {
            total += pizza2.price;
        }
        else if (this.id === 'pz3') {
            total += pizza3.price;
        }
        else if (this.id === 'br1') {
            total += burger1.price;
        }
        else if (this.id === 'br2') {
            total += burger2.price;
        }
        else if (this.id === 'sd1') {
            total += soda1.price;
        }
        else if (this.id === 'sd2') { 
            total += soda2.price;
        }
        else if (this.id === 'sd3') { 
            total += soda3.price;
        }
        x = total.toString(); 
        $('.prix').html(x);
    });  
    
$("#show").html(`
<h4>your ticket</h4><br>
<h5>Total Price : ${total}</h5>
`)
    
    
// function add(x){
// var res=0
// return res+=x
// }
// var total=0