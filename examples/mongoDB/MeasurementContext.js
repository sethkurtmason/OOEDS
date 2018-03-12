db.createCollection( "MeasurementContext",{
    "capped": false,
    "validator": {
        "_id": {
            "$exists": true,
            "$type": "objectId"
        },
        "measurement-context-type": {
            "$exists": true,
            "$type": "string"
        },
        "measurement-context-definition": {
            "$exists": true,
            "$type": "string"
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});