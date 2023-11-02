function checkForName(inputText) {
    const inputValue = inputText.trim();   
    if (inputValue === "") {
        document.getElementById("error").innerHTML = 'Please enter input before submitting!'       
        return false;
      } else {
        document.getElementById("error").innerHTML = ''
        return true;
      }
      
}

function checkRegex(inputText){
  const inputValue = inputText.trim(); 
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  if (urlRegex.test(inputValue)) {
    document.getElementById("error-regex").innerHTML = ''
    return true;
  } else {
    document.getElementById("error-regex").innerHTML = 'Please enter valid url before submitting!'  
    return false;
  }
}

export { checkForName, checkRegex }
