db.createCollection( "Evaluation",{
    "capped": false,
    "validator": {
        "_id": {
            "$exists": true,
            "$type": "objectId"
        },
        "evaluation-type": {
            "$exists": true,
            "$type": "string"
        },
        "activity": {
            "$exists": true,
            "$type": "objectId"
        },
        "entity": {
            "$exists": true,
            "$type": "objectId"
        },
        "property": {
            "$exists": true,
            "$type": "objectId"
        },
        "measurement-context.0": {
            "$type": "objectId"
        },
        "permissions.0": {
            "$type": "objectId"
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});