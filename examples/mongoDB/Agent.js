db.createCollection( "Agent",{
    "capped": false,
    "validator": {
        "_id": {
            "$exists": true,
            "$type": "objectId"
        },
        "agent-type": {
            "$exists": true,
            "$type": "string"
        },
        "agent-name": {
            "$exists": true,
            "$type": "string"
        },
        "agent-phone": {
            "$exists": true,
            "$regex": "^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$",
            "$type": "string"
        },
        "agent-email": {
            "$exists": true,
            "$type": "string"
        },
        "agent-address": {
            "$exists": true,
            "$type": "string"
        },
        "parent-agent": {
            "$type": "objectId"
        },
        "network-agent.0": {
            "$type": "objectId"
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});