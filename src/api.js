console.log("Covid19 Hospital Info")
fetch('https://api2.covidhospitalsbd.com/api/available-hospitals')
  .then(response => response.json())
  .then(data => showdata(data));

let div = document.getElementById("info")

function showdata(data){
  const infoContainer = document.getElementById("info")
  
    for(let i=0; i<=data.hospitals.data.length; i++){
      const newDiv = document.createElement("div")  
        let info = data.hospitals.data[i]
        newDiv.innerHTML=`
        <h1>hospital name: ${info.name}</h1>
        general_beds: ${info.general_beds}
        general_beds_available: ${info.general_beds_available}
        icu_beds: ${info.icu_beds}
        icu_beds_available: ${info.icu_beds_available} 
        oxygen total cylinder: ${info.oxygen_total_cylinder}`
        infoContainer.appendChild(newDiv)
        console.log(info.name)
    }
}