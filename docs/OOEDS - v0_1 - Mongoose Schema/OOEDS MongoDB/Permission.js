{
    "_id": {
        "type": "Schema.Types.ObjectId",
        "required": true
    },
    "permission-type": {
        "type": "String",
        "enum": [
            "read, readWrite"
        ],
        "required": true
    },
    "permission-agent": {
        "type": "Schema.Types.ObjectId",
        "required": true
    }
}