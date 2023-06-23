
const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com"
const COHORT_NAME = "2302-acc-pt-web-pt-e"
const list = document.getElementById('list')

async function getData(){
    try{
        const rawData =await fetch(`${BASE_URL}/api/${COHORT_NAME}/players`)
        const resultData = await rawData.text()
        const resultJsonData = JSON.parse(resultData)
        return resultJsonData.data.players
    }catch(error){
        console.error(error)
    }    
}

async function render(){
    const data = await getData()    
    data?.forEach(({name, breed,imageUrl})=>{
            console.log({name, breed,imageUrl})
        })
}
