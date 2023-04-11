axios.post('/api/upload', formData, {
headers: {
  'Content-Type': 'multipart/form-data',
},
onUploadProgress: progressEvent => {
  let progress_in_percentage =  Math.round(
    (progressEvent.loaded / progressEvent.total) * 100
  );
  console.log(progress_in_percentage) //output 1 to 100 
},
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});
