import Airtable from "airtable";

export default async function handler(req, res){
    const apiKey = process.env.AIRTABLE_API_KEY;

    const data = JSON.parse(req.body)

    try{
        const Airtable = require('airtable');
        const base = new Airtable({apiKey: apiKey}).base('apputXSHleOOtyyK9')
        base('Kids').create([
            {
                "fields": {
                    "Imię i nazwisko dziecka": data.kidName,
                    "Data urodzenia": data.birthday,
                    "Imię i nazwisko rodzica": data.parentName,
                    "Numer telefonu": data.phone,
                    "Email": data.email
                }
            }
        ], function(err, records) {
            if (err) {
                console.error(err);
                res.status(502).json({message: "Error while saving data to AirTables"})
            }
            records.forEach(function (record) {
                console.log(record.getId());
                res.status(200).json({message: "ok"})
            });
        });
    }
    catch(err){
        console.log(err)
        res.status(502).json({message: "Error while saving data to AirTables"})
    }  
}