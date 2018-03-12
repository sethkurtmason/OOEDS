{
    "_id": {
        "type": "Schema.Types.ObjectId",
        "required": true
    },
    "agent-type": {
        "type": "String",
        "required": true
    },
    "agent-name": {
        "type": "String",
        "required": true
    },
    "agent-phone": {
        "type": "String",
        "match": "^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$",
        "required": true
    },
    "agent-email": {
        "type": "String",
        "required": true
    },
    "agent-address": {
        "type": "String",
        "required": true
    },
    "parent-agent": {
        "type": "Schema.Types.ObjectId"
    },
    "network-agent": [
        {
            "type": "Schema.Types.ObjectId"
        }
    ]
}