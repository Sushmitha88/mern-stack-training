const timeOut = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Completed in ${t}`)
      }, t)
    })
  }
  
  const durations = [1000, 2000, 3000]
  
  const promises = []
  
  durations.map((duration) => {
    promises.push(timeOut(duration)) 
  })
  
  console.log(promises)   
  Promise.all(promises)
  .then(response => console.log(response)) 