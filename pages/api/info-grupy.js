export default async function handler(req, res){

  const apiKey = process.env.AIRTABLE_API_KEY;

  try{
    const response = await fetch("https://api.airtable.com/v0/appUYxhvagqok4gaI/Lista?sort%5B0%5D%5Bfield%5D=order", {
      headers: {
        Authorization: "Bearer " + apiKey
      }
    })
    const data = await response.json()
    res.status(200).json(data.records)
  }
  catch(err){
    res.status(502).json({message: "Error while geting data from AirTables"})
  }  
}