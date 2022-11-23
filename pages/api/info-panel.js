export default async function handler(req, res){
  
    const apiKey = process.env.AIRTABLE_API_KEY;
  
    try{
      const response1 = await fetch("https://api.airtable.com/v0/appmg4ln5REExPoSi/Lista?maxRecords=3&view=Grid%20view", {
        headers: {
          Authorization: "Bearer " + apiKey
        }
      })
      const data1 = await response1.json()
      const images1 = data1.records.map(ele => { return {url: ele.fields.slide[0].url} })

      const response2 = await fetch("https://api.airtable.com/v0/appDdMOI2fKeW39Ka/Lista?maxRecords=3&view=Grid%20view", {
        headers: {
          Authorization: "Bearer " + apiKey
        }
      })
      const data2 = await response2.json()
      const images2 = data2.records.map(ele => { return {url: ele.fields.slide[0].url} })

      const images = [...images1, ...images2]

      res.status(200).json(images)
    }
    catch(err){
      res.status(502).json({message: "Error while geting data from AirTables"})
    }  
  }