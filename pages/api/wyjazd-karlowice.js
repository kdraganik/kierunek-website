export default async function handler(req, res){
  const Airtable = require('airtable');

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = 'karlowice';

  const base = new Airtable({apiKey}).base(baseId);
  const table = base(tableName);

  const data = JSON.parse(req.body)

  const fields = {
    "Imię i nazwisko": data.name,
    "Numer telefonu": data.phone,
    "Adres email": data.email
  }

  try{
    const createdEntry = await table.create([{ fields }]);
    res.status(200).json({message: "ok"})
  }
  catch(err){
    res.status(502).json({message: "Error while saving data to AirTables"})
  }

  
}