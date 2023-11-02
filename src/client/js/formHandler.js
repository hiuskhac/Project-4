function handleSubmit(event) {
  event.preventDefault();
  const url = document.getElementById("url").value;
  document.getElementById("results").innerHTML = "";
  console.log(Client.checkRegex(url))
  if(Client.checkForName(url) && Client.checkRegex(url)){
    const params = new URLSearchParams();
  params.append("key", apiKey);
  params.append("txt", url);
  params.append("lang", "en");
  const urlWithParams = `${apiUrl}?${params.toString()}`;
  fetch(urlWithParams)
    .then((response) => response.json())
    .then((data) => {
      Client.fillData(data);
    })
    .catch((error) => {
      console.error("Send error:", error);
    });
  }else{
    console.log('error xxx')
  }
  
}

let apiKey;
const apiUrl = "https://api.meaningcloud.com/sentiment-2.1";

async function fetchData() {
  try {
    const response = await fetch("http://localhost:8080/apiKey");
    const data = await response.json();
    apiKey = data.text;
  } catch (error) {
    console.error("Error get apiKey from server:", error);
  }
}

function fillData(rs){
    document.getElementById("results").innerHTML = `{"status": {"code" : "${rs.status.code}" , "msg" : "${rs.status.msg}" , "credits" : "${rs.status.credits}"}}`
}

export { handleSubmit, fetchData , fillData };
