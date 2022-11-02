export default async function handler(req, res){
  const Airtable = require('airtable');

  const apiKey = process.env.AIRTABLE_API_KEY;

  try{
    const response = await fetch("https://api.airtable.com/v0/appmg4ln5REExPoSi/Lista?maxRecords=3&view=Grid%20view", {
      headers: {
        Authorization: "Bearer " + apiKey
      }
    })
    const data = await response.json()
    const images = data.records.map(ele => { return {url: ele.fields.slide[0].url} })
    res.status(200).json(images)
  }
  catch(err){
    res.status(502).json({message: "Error while geting data from AirTables"})
  }  
}