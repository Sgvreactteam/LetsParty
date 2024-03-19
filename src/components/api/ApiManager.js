export const METHODS = {
  POST : "POST",
  GET:"GET",
  PUT:"PUT",
  DELETE:"DELETE"
}

const buildURL = (endpoint) => {
  return EndPoints.BASEURL + endpoint
}

const buildHeaders = () => {
  const headers = {
    "Content-Type":"application/json"
    
  }
  return headers;
}

export const makeRequest = async (endpoint,body,method)=>{
try{
  let response =await  fetch(buildURL(endpoint),{
    method:method,
    body:body,
    headers: buildHeaders(),
  });


  if(response.ok){
    let responseJaon = response.json();
    return responseJaon
  }else{
    console.log(response.statusText);
  }

}catch(error){
  throw error;
}
}

// const  printRequest = async (
//   request,
//   response ,
//   responseData,
// ) => {
//   console.log('*****************************************************');
//   console.log('URL: ', request.url);
//   console.log('Method: ', request.method);
//   console.log('Headers: ', request.headers);
//   console.log('Body: ', request.body);
//   if (response != null) {
//     console.log('Status Code: ', response?.status);
//     console.log('Response Json: ', responseData);
//   }
//   console.log('*****************************************************');
// }

