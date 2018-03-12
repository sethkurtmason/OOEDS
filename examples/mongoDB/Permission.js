db.createCollection( "Permission",{
    "capped": false,
    "validator": {
        "_id": {
            "$exists": true,
            "$type": "objectId"
        },
        "permission-type": {
            "$exists": true,
            "$in": [
                "read, readWrite"
            ],
            "$type": "string"
        },
        "permission-agent": {
            "$exists": true,
            "$type": "objectId"
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});