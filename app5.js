burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('hnav-resp');


})


function emailSend(){
    var emailMr=document.getElementById('email2').value;
    var userName=document.getElementById('name2').value;
    var texArea=document.getElementById('textarea2').value;
    
    var messageBody="Amount: " + emailMr +
    "<br> Name: " + userName +
    "<br/> UPI: " + texArea;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "manishvish244@gmail.com",
    Password : "A0642BF1E80B64EB65EC070A136A548EE1CB",
    To : 'manishvish244@gmail.com',
    From : "manishvish244@gmail.com",
    Subject : "This is the subject",
    Body : messageBody,
}).then(
  message => {
    if(message=='OK'){
        swal( "success",
             "Approved Very Soon!",
             "success",
        );
            
          }
          else{
            swal(
                "faild",
                "You clicked the button!",
                "somthing wrong",
                
              );
          
    }
  }
);
}
