

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



// copy option 

function copyText() {
  // Get the text from the element
  var text = document.getElementById("textToCopy").innerText;
  
  // Create a textarea element (off-screen)
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Append the textarea to the body
  document.body.appendChild(textArea);
  
  // Select the text in the textarea
  textArea.select();
  
  // Copy the selected text
  document.execCommand("copy");
  
  // Remove the textarea
  document.body.removeChild(textArea);
  
  // Alert the user
  alert("Text copied to clipboard!");
}

