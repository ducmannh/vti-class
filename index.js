//async await
const checkEmail = async () => {
    setTimeout(() => {
        console.log("aaabbb")
        // return 'checkEmail done'
    }, 3000);
}
const checkAccount = async () => {
    const result = await checkEmail();
    console.log(result)
}
checkAccount()

// promise
const promise = new Promise((resolve, reject) => {
  if (2 < 3) {
    resolve("promise done");
  } else {
    reject("promise failed");
  }
});

promise.then(function (result) {
    setTimeout(() =>{
        console.log(result);
    }, 3000)
}).catch(function(error) {
    console.log(error)
})

