db.createCollection( "Activity",{
    "capped": false,
    "validator": {
        "_id": {
            "$type": "objectId"
        },
        "activity-type": {
            "$exists": true,
            "$type": "string"
        },
        "activity-name": {
            "$exists": true,
            "$type": "string"
        },
        "activity-description": {
            "$exists": true,
            "$type": "string"
        },
        "agent": {
            "$exists": true
        },
        "agent.0": {
            "$type": "objectId"
        },
        "parent-activity": {
            "$type": "objectId"
        },
        "network-activity.0": {
            "$type": "objectId"
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});