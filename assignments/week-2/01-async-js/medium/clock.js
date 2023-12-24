function updateClock() {
  const time = new Date();

  const time12 = time.toLocaleTimeString('en-US',{ hour12: true }); //12 hrs format

  const time24 = time.toLocaleTimeString('en-US',{ hour12: false });

  console.log("12- Hrs time format: ", time12);
  console.log("24- Hrs time format: ", time24);
}
setInterval(()=>{
    updateClock()
},1000);
