export default async function handler(req, res){
    const apiKey = process.env.AIRTABLE_API_KEY;

    const data = JSON.parse(req.body)

    const bodyData = {
        "records": [
            {
                "fields": {
                    "Imię": data.forename,
                    "Nazwisko": data.surname,
                    "Email": data.email
                }
            }
        ]
    }

    try{
        const response = await fetch("https://api.airtable.com/v0/appNA57DinKOUjy6B/Rejstracja", {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
        if(response.ok){
            res.status(200).json({message: "ok"})
        }
        else{
            const data = await response.json()
            console.log(data)
            res.status(502).json({message: "Error while saving data to AirTables"})
        }
    }
    catch(err){
        console.log(err)
        res.status(502).json({message: "Error while saving data to AirTables"})
    }  
}