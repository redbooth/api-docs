FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API Documentation

# Group People
People is a bridge endpoint that gathers users relating them with projects, their role in those, etc. One user can be different persons in different projects, those characters are gathered in the endpoint people as single individuals.

## People List [/people]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Person",
                    "created_at": 1403611566,
                    "updated_at": 1403611566,
                    "id": 2612487,
                    "user_id": 688561,
                    "project_id": 1224630,
                    "role": 3,
                    "source_user_id": null,
                    "watch_new_task": false,
                    "watch_new_conversation": false,
                    "watch_new_page": false,
                    "instant_notifications": true,
                    "digest": 4
                },
                {
                    "type": "Person",
                    "created_at": 1402071446,
                    "updated_at": 1402071446,
                    "id": 2561652,
                    "user_id": 688561,
                    "project_id": 1203324,
                    "role": 2,
                    "source_user_id": 688561,
                    "watch_new_task": false,
                    "watch_new_conversation": false,
                    "watch_new_page": false,
                    "instant_notifications": true,
                    "digest": 4
                },
                {
                    "type": "Person",
                    "created_at": 1401111756,
                    "updated_at": 1401111756,
                    "id": 2525598,
                    "user_id": 688561,
                    "project_id": 1187461,
                    "role": 2,
                    "source_user_id": 688561,
                    "watch_new_task": false,
                    "watch_new_conversation": false,
                    "watch_new_page": false,
                    "instant_notifications": true,
                    "digest": 4
                },
            ]

### Get People [GET]
Returns a JSON list of people in the different projects to which the user has access. Notice that that list will have at least one person per user to which the requester is related + the different people that himself may represent in different projects.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, string, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, string, `3`) ... You choose the page that you want to get.
    + organization_id (optional, string, `1283`) ... The id of the organization to which the element belongs.
    + project_id (optional, string, `121`) ... The project’s id to which the element belongs.
    + user_id (optional, string, `12341`) ... Id of the user who created the element.
    + role (optional, string, `observer`) ... A person can have different roles: observer, commenter, participant or admin.

+ Response 200

    [People List][]

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

### Create New Person [POST]
Creates a new person with a new id in the location (project_id) that you specify. Note that creating a person is creating a user-to-project relationship, it is inviting a user to a project and that is why his user_id will be essential.

+ Parameters

    + project_id (required, string, `121`) ... The project’s id to which the element will belong.
    + user_id (required, string, `12341`) ... Id of the user that will embody this person.
    + role (optional, string, `observer`) ... A person can have different roles: observer, commenter, participant or admin.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "user_id":"128384",
                "project_id":"902783",
                "role":"participant"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "Person",
                "created_at": 1403611566,
                "updated_at": 1403611566,
                "id": 2612487,
                "user_id": 128384,
                "project_id": 902783,
                "role": participant,
                "source_user_id": null,
                "watch_new_task": false,
                "watch_new_conversation": false,
                "watch_new_page": false,
                "instant_notifications": true,
                "digest": 4
            }


+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Person [/people/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                    "type": "Person",
                    "created_at": 1403611566,
                    "updated_at": 1403611566,
                    "id": 2612487,
                    "user_id": 688561,
                    "project_id": 1224630,
                    "role": 3,
                    "source_user_id": null,
                    "watch_new_task": false,
                    "watch_new_conversation": false,
                    "watch_new_page": false,
                    "instant_notifications": true,
                    "digest": 4
                }

### Get Person [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + project_id (optional, string, `121`) ... The project’s id to which the element belongs.

+ Response 200

    [Person][]

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

### Update a single Person [PUT]
Modifies an existing person, id is mandatory.

+ Parameters

    + project_id (required, string, `121`) ... The project’s id to which the element will belong.
    + user_id (required, string, `12341`) ... Id of the user that will embody this person.
    + role (optional, string, `observer`) ... A person can have different roles: observer, commenter, participant or admin.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "role":"admin"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type": "Person",
                "created_at": 1403611566,
                "updated_at": 1403611566,
                "id": 2612487,
                "user_id": 128384,
                "project_id": 902783,
                "role": admin,
                "source_user_id": null,
                "watch_new_task": false,
                "watch_new_conversation": false,
                "watch_new_page": false,
                "instant_notifications": true,
                "digest": 4
            }

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No person found with the given id"
                    }
            }

### Delete a person [DELETE]
This endpoint deletes a person and can be used just once.

+ Parameters

    + id (required, string, `1234`) ... Id of the person that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "No person found with the given id"
            }
