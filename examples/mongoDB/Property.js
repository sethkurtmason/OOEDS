db.createCollection( "Property",{
    "capped": false,
    "validator": {
        "_id": {
            "$exists": true,
            "$type": "objectId"
        },
        "property-type": {
            "$exists": true,
            "$type": "string"
        },
        "property-dimensions": {
            "$exists": true,
            "$type": "string"
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});