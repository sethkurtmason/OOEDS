db.createCollection( "Entity",{
    "capped": false,
    "validator": {
        "_id": {
            "$exists": true,
            "$type": "objectId"
        },
        "entity-type": {
            "$exists": true,
            "$type": "string"
        },
        "entity-name": {
            "$exists": true,
            "$type": "string"
        },
        "entity-description": {
            "$exists": true,
            "$type": "string"
        },
        "parent-entity": {
            "$type": "objectId"
        },
        "network-entity.0": {
            "$type": "objectId"
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});