{
    "_id": {
        "type": "Schema.Types.ObjectId"
    },
    "activity-type": {
        "type": "String",
        "required": true
    },
    "activity-name": {
        "type": "String",
        "required": true
    },
    "activity-description": {
        "type": "String",
        "required": true
    },
    "agent": [
        {
            "type": "Schema.Types.ObjectId"
        }
    ],
    "parent-activity": {
        "type": "Schema.Types.ObjectId"
    },
    "network-activity": [
        {
            "type": "Schema.Types.ObjectId"
        }
    ]
}