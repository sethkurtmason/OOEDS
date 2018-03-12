{
    "_id": {
        "type": "Schema.Types.ObjectId",
        "required": true
    },
    "evaluation-type": {
        "type": "String",
        "required": true
    },
    "activity": {
        "type": "Schema.Types.ObjectId",
        "required": true
    },
    "entity": {
        "type": "Schema.Types.ObjectId",
        "required": true
    },
    "property": {
        "type": "Schema.Types.ObjectId",
        "required": true
    },
    "measurement-context": [
        {
            "type": "Schema.Types.ObjectId"
        }
    ],
    "permissions": [
        {
            "type": "Schema.Types.ObjectId"
        }
    ]
}