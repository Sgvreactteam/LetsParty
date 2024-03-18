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
  }

}catch(error){
  throw error;
}
}