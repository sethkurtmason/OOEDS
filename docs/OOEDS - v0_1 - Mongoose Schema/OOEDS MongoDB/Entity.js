{
    "_id": {
        "type": "Schema.Types.ObjectId",
        "required": true
    },
    "entity-type": {
        "type": "String",
        "required": true
    },
    "entity-name": {
        "type": "String",
        "required": true
    },
    "entity-description": {
        "type": "String",
        "required": true
    },
    "parent-entity": {
        "type": "Schema.Types.ObjectId"
    },
    "network-entity": [
        {
            "type": "Schema.Types.ObjectId"
        }
    ]
}