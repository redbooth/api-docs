FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API Documentation

# Group Memberships
Memberships is a bridge endpoint that gathers users relating them with organizations, their role in those, etc. One user can have different memberships in different organizations, those are gathered in the endpoint memberships as different elements.

## Membership List [/memberships]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Membership",
                    "id": 583561,
                    "user_id": 749971,
                    "organization_id": 364563,
                    "role": admin
                },
                {
                    "type": "Membership",
                    "id": 583554,
                    "user_id": 749993,
                    "organization_id": 364563,
                    "role": admin
                },
                {
                    "type": "Membership",
                    "id": 581507,
                    "user_id": 748080,
                    "organization_id": 364563,
                    "role": admin
                },
                {
                    "type": "Membership",
                    "id": 581488,
                    "user_id": 748122,
                    "organization_id": 364563,
                    "role": admin
                }
            ]

### Get Memberships [GET]
Returns a JSON list of memberships in the different organizations to which the user has access. Notice that that list will have at least one membership per user to which the requester is related + the different memberships that himself may represent in different organizations.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: id, created_at, updated_at and position.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.
    + organization_id (optional, integer, `1283`) ... Id of the organization to which the element belongs.
    + user_id (optional, integer, `12341`) ... Id of the user who created the element.
    + role (optional, string, `participant`) ... A person can have different roles: external, participant, admin.

+ Response 200

    [Membership List][]

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

### Create New Membership [POST]
Creates a new membership with a new id in the location (organization_id) that you specify. Note that creating a membership is creating a user-to-organization relationship, it is inviting a user to an organization and that is why his user_id will be essential.

+ Parameters

    + organization_id (required, integer, `121`) ... Id of the organization to which the element will belong.
    + user_id (required, integer, `12341`) ... Id of the user who will own the membership.
    + role (optional, string, `observer`) ... A membership can have different roles: external, participant, admin.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "user_id":"749971",
                "project_id":"902783",
                "role":"admin"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "Membership",
                "id": 583561,
                "user_id": 749971,
                "organization_id": 364563,
                "role": admin
            }


+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Membership [/memberships/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "Membership",
                "id": 583561,
                "user_id": 749971,
                "organization_id": 364563,
                "role": participant
            }

### Get Membership [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the membership that we are looking for. It is mandatory and it has to be in the url.

+ Response 200

    [Membership][]

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

### Update a single Membership [PUT]
Modifies an existing person, id is mandatory.

+ Parameters

    + id (required, integer, `1234`) ... Id of the membership that we are looking for. It is MANDATORY and it has to be in the url.
    + organization_id (required, integer, `121`) ... Id of the project to which the element will belong.
    + user_id (required, integer, `12341`) ... Id of the user who owns the membership.
    + role (optional, string, `observer`) ... A person can have different roles: external, participant, admin.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "role":"participant"
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type": "Membership",
                "id": 583561,
                "user_id": 749971,
                "organization_id": 364563,
                "role": participant
            }

+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No membership found with the given id"
                    }
            }

### Delete a membership [DELETE]
This endpoint deletes a membership and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the membership that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "No membership found with the given id"
            }
