const loadDitel = (url2)=>{
    fetch(url2)
    .then(res => res.json())
    .then(meta => lodinfo(meta));
};

const lodeApi = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data => lodeData(data))
    
};

const lodeData =(data)=>{
    const cardContainer = document.getElementById('card-container');
    const worning = document.getElementById('worning')
    const everyObjects = data.data;
    if(everyObjects.length===0){
        worning.classList.remove('d-none')
    }
    else{
        for( const everyObject of everyObjects ){
            const div = document.createElement('div');
            div.classList.add('col')
            div.innerHTML=`
            <div class="card border-0">
                    <img class='phne-img' src="${everyObject.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${everyObject.phone_name}</h5>
                      <a  onclick="VewDitels('${everyObject.slug}')"  class="btn btn-primary">Vew Ditels</a>
                    </div>
                  </div>
            `
            cardContainer.appendChild(div);
        };
        worning.classList.add('d-none');
    };  
};

function dosome (){
    const searchVelue = document.getElementById('search').value;
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchVelue}`
    lodeApi(url)
    document.getElementById('card-container').innerHTML=''
    document.getElementById('search').value =''
}
function dosomebyNav (data){
    const url =`https://openapi.programming-hero.com/api/phones?search=${data}`
    lodeApi(url)
    document.getElementById('card-container').innerHTML=''
    document.getElementById('search').value =''
}
lodeData();

// diteal dekhar function 
function VewDitels (name){
    const url2=`https://openapi.programming-hero.com/api/phone/${name}`
    loadDitel(url2);
    document.getElementById('ditelInfo').innerHTML='';
    

};

function lodinfo (meta){
    console.log(meta.data.mainFeatures
        )
    const ditelInfo = document.getElementById('ditelInfo');
    const infoDiv = document.createElement('div');
    const sensors=meta.data.mainFeatures.sensors
   
    
    infoDiv.classList.add('row')
    infoDiv.classList.add('g-0')
    infoDiv.innerHTML=`
    <div class="col-md-4">
        <img src="${meta.data.image}" class="img-fluid rounded-start" alt="...">
    </div>
     <div class="col-md-8">
         <div class="card-body">
            <h5 class="card-title">${meta.data.name}</h5>
              <p class="card-text">Memory:${meta.data.mainFeatures.storage}</p>
              <p class="card-text">Display:${meta.data.mainFeatures.displaySize}</p>
              <p class="card-text">Prosesore:${meta.data.mainFeatures.chipSet}</p>
              <p class="card-text">Variant:${meta.data.mainFeatures.memory}</p>
              <p class="card-text"><small class="text-muted">${meta.data.releaseDate}</small></p>
              <ol id='sensorlist'>
                <h6>Sensors</h5

              </ol>
    
             
         </div>
     </div>
  `
   ditelInfo.appendChild(infoDiv)
   for(const sen of sensors){
             const ol = document.getElementById('sensorlist');
             const li = document.createElement('li');
             li.innerText = sen;
            ol.appendChild(li)
   }
         
  
       

};









   
