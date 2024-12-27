const input=document.querySelector('.input')
const convert=async()=>{
       const longurl=document.getElementById('url').value
       if(!longurl.length){
                 input.value=`please input proper url`;
                 return;

       }
       try{
       const link=await fetch(`/url`,{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({url:longurl}),
       }).then((response)=>{
              if(!response.ok){
                     return input.value=`${response.text}`
              }
              return response.json()
       })
       console.log(link)
       input.value=`${link.shorturl}`
}
catch(err){
        input.value=`${err}`
}
}
document.querySelector('button').addEventListener('click',convert)
document.getElementById('url').addEventListener('keyup',(e)=>{
       if(e.key ==='Enter'){
              convert()
       }
})