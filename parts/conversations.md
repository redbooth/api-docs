FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API Documentation

# Group Conversations
Redbooth’s conversations are interactive spaces where users can discuss about any subject or topic. Each conversation belongs to a project and once it is created, user’s comments are added to it in custom blocks that may include attached files. Conversations can be public or private.

## Conversation List [/conversations]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Conversation",
                    "created_at": 1402940016,
                    "updated_at": 1402940018,
                    "id": 1014040,
                    "name": "Conversation 2",
                    "project_id": 902783,
                    "user_id": 688561,
                    "comments_count": 1,
                    "is_private": false,
                    "last_activity_id": 56202516,
                    "watcher_ids":  [
                      688561
                    ]
                  },
                  {
                    "type": "Conversation",
                    "created_at": 1400750904,
                    "updated_at": 1402940024,
                    "id": 991093,
                    "name": "Conversation 1",
                    "project_id": 902783,
                    "user_id": 688561,
                    "comments_count": 5,
                    "is_private": false,
                    "last_activity_id": 53787980,
                    "watcher_ids":  [
                      688561
                    ],
                  }
            ]

### Get Conversations [GET]
Returns a JSON list of conversations to which the user has access.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... The id of the organization to which the element belongs.
    + project_id (optional, integer, `121`) ... Id of the project to which the element belongs.

+ Response 200

    [Conversation List][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }

### Create New Conversation [POST]
Posts a new conversation with a new id in the location (project_id) that you specify.

+ Parameters

    + project_id (required, integer, `121`) ... Id of the project to which the element will belong after posting it.
    + name (required, string, `Example name`) ... The name that the conversation will have.
    + body (optional, string, `Example body`) ... The body of the conversation.
    + is_private = `false` (optional, string, `false`) ... This parameter is used to manage rights & permissions. It can be =true or =false. It will be =false by default, so the conversation will be public if there is no specification.
    + watcher_ids (optional, array, [786268]) The ids of the users that will follow the conversation. Note the creator user will be added as follower automatically

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title",
                "body":"Example body",
                "project_id":"902783",
                "is_private":"false",
                "watcher_ids": [786268]
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            [
                {
                    "type": "Conversation",
                    "created_at": 1403118272,
                    "updated_at": 1403118273,
                    "id": 1016324,
                    "name": "Example title",
                    "project_id": 902783,
                    "user_id": 688561,
                    "comments_count": 1,
                    "is_private": false,
                    "last_activity_id": null,
                    "watcher_ids":  [
                      688561, 786268
                    ]
                }
            ]

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Conversation [/conversations/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                  "type":"Conversation",
                  "created_at":1402940016,
                  "updated_at":1402940018,
                  "id":1014040,
                  "name":"Conversation 2",
                  "project_id":902783,
                  "user_id":688561,
                  "comments_count":1,
                  "is_private":false,
                  "last_activity_id":56202516,
                  "watcher_ids":  [
                    688561, 786268
                  ],
                }
            ]

### Get Conversation [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the conversation that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 200

    [Conversation][]

+ Response 401

    + Headers

            Content-Type:  application/json; charset=utf-8

    + Body

            {
              "error":
                      {
                        "message": "Unauthorized"
                      }
            }



### Update a single Conversation [PUT]
Modifies an existing conversation, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the conversation that we are looking for. It is MANDATORY and it has to be in the url.
    + project_id (optional, integer, `121`) ... Id of the project to which the element will belong after modifying it.
    + name (optional, string, `Example title modified`) ... The name that the conversation will have.
    + body (optional, string, `Example body modified`) ... The body of the conversation.
    + is_private = `fasle` (optional, string, `false`) ... This parameter is used to manage rights & permissions. It can be =true or =false. It will be =false by default, so the conversation will be public if there is no specification.
    + watcher_ids (optional, array, [688561, 786268, 796268]) The ids of the users that follow the conversation. Note that all follower users whose id is not included in the array, except the task creator, will be removed from the conversation's followers.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"Example title modified",
                "body":"Example body modified",
                "project_id":"902789",
                "is_private":"false",
                "watcher_ids": [
                  688561, 786268, 796268
                ]
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            [
                {
                    "type": "Conversation",
                    "created_at": 1403118272,
                    "updated_at": 1403118273,
                    "id": 1016324,
                    "name": "Example title",
                    "project_id": 902783,
                    "user_id": 688561,
                    "comments_count": 1,
                    "is_private": false,
                    "last_activity_id": null,
                    "watcher_ids": [
                      688561, 786268, 796268
                    ]
                }
            ]

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No conversation found with the given id"
                    }
            }

### Delete a Conversation [DELETE]
This endpoint deletes a conversation and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the conversation that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Conversation not found"
            }
