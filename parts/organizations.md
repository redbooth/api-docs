FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API Documentation

# Group Organizations
Redbooth's organizations are workspaces where teams meet to collaborate and work in an efficient way, they are the top level hierarchy scope in the product. Under an Organization, you will be able to create projects and invite members (users) to collaborate on them.

## Organization List [/organizations]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
                {
                    "type": "Organization",
                    "created_at": 1379606967,
                    "updated_at": 1399803155,
                    "id": 364563,
                    "name": "SHAKYBUSH",
                    "permalink": "busshake-qjira",
                    "domain": "",
                    "shortcut_apps": null,
                    "settings":
                        {
                            "allow_comment_deletion": true,
                            "org_size": 50,
                            "org_field": "other",
                            "omit_email_processing": false
                        },
                    "omit_email_processing": false,
                    "product": "pro1y",
                    "product_name": "annual pro",
                    "feature_level": "freeu",
                    "subscription_id": 7151,
                    "seats": 15,
                    "remaining_users": 3,
                    "available_users": 15,
                    "used_users": 12,
                    "remaining_projects": 0,
                    "available_projects": 0,
                    "used_projects": 5,
                    "metadata":  {},
                    "square_logo_url": "/images/logos/square/missing.png",
                    "top_logo_url": "/images/logos/top/missing.png",
                    "has_logo": false,
                    "is_pro": true
                },
                {
                    "type": "Organization",
                    "created_at": 1386602202,
                    "updated_at": 1403431573,
                    "id": 404980,
                    "name": "AGENDA: E. R.",
                    "permalink": "agenda-e-r",
                    "domain": null,
                    "shortcut_apps": null,
                    "settings":
                        {
                            "allow_comment_deletion": true
                        },
                    "omit_email_processing": false,
                    "product": "pro1y",
                    "product_name": "annual pro",
                    "feature_level": "pro1y",
                    "subscription_id": 9572,
                    "seats": 5,
                    "remaining_users": 3,
                    "available_users": 5,
                    "used_users": 2,
                    "remaining_projects": 0,
                    "available_projects": 0,
                    "used_projects": 3,
                    "metadata":  {},
                    "square_logo_url": "/images/logos/square/missing.png",
                    "top_logo_url": "/images/logos/top/missing.png",
                    "has_logo": false,
                    "is_pro": true
                }
            ]

### Get Organizations [GET]
Returns a JSON list of organizaitons to which the user is related.

+ Parameters

    + order = `id-DESC` (optional, string, `created_at-ASC`) ... You can always choose in which order do you want to get your results. You can sort them in ascending or descending order by the following elements: `id`, `created_at` and `updated_at`.
    + per_page = `1000`(optional, integer, `15`) ... You choose how many results per page do you want to get, with a maximum of 1000.
    + page = `1` (optional, integer, `3`) ... You choose the page that you want to get.

+ Response 200

    [Organization List][]

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

### Create New Organization [POST]
Posts a new organization with a new id.

+ Parameters

    + name (required, string, `My Organization`) ... The name that the organization will have.
    + permalink = `false` (optional, string, 'my_organization') ... Permalink the organization will have.
    + domain = `false` (optional, string, 'myorg.com') ... Domain the organization will have.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "name":"My Organization",
                "permalink":"my_organization",
                "domain":"myorg.com"
            }

+ Response 201

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body

            {
                "type": "Organization",
                "created_at": 1404171216,
                "updated_at": 1404171216,
                "id": 477515,
                "name": "My Organization",
                "permalink": "my_organization",
                "domain": "myorg.com",
                "shortcut_apps": null,
                "settings":
                    {
                        "allow_comment_deletion": true
                    },
                "omit_email_processing": false,
                "product": null,
                "product_name": "free",
                "feature_level": "freeu",
                "subscription_id": null,
                "seats": 5,
                "remaining_users": 4,
                "available_users": 5,
                "used_users": 1,
                "remaining_projects": 5,
                "available_projects": 5,
                "used_projects": 0,
                "metadata":  {},
                "square_logo_url": "/images/logos/square/missing.png",
                "top_logo_url": "/images/logos/top/missing.png",
                "has_logo": false,
                "description": null
            }

+ Response 422

    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

## Organization [/organizations/{id}]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "type": "Organization",
                "created_at": 1379606967,
                "updated_at": 1399803155,
                "id": 364563,
                "name": "SHAKYBUSH",
                "permalink": "busshake-qjira",
                "domain": "",
                "shortcut_apps": null,
                "settings":
                    {
                        "allow_comment_deletion": true,
                        "org_size": 50,
                        "org_field": "other",
                        "omit_email_processing": false
                    },
                "omit_email_processing": false,
                "product": "pro1y",
                "product_name": "annual pro",
                "feature_level": "freeu",
                "subscription_id": 7151,
                "seats": 15,
                "remaining_users": 3,
                "available_users": 15,
                "used_users": 12,
                "remaining_projects": 0,
                "available_projects": 0,
                "used_projects": 5,
                "metadata":  {},
                "square_logo_url": "/images/logos/square/missing.png",
                "top_logo_url": "/images/logos/top/missing.png",
                "has_logo": false,
                "is_pro": true
            }

### Get Organization [GET]
In this case, we’re selecting a very specific element, so there is no need to use parameters other than “id”.

+ Parameters

    + id (required, integer, `1234`) ... Id of the organization that we are looking for. It is mandatory and it has to be in the url.

+ Response 200

    [Organization][]

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

### Update a single Organization [PUT]
Modifies an existing organization, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Id of the organization that we are looking for. It is MANDATORY and it has to be in the url.
    + name (required, string, `My Organization`) ... The name that the organization will have.
    + permalink = `false` (optional, string, 'my_organization') ... Permalink the organization will have.
    + domain = `false` (optional, string, 'myorg.com') ... Domain the organization will have.

+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "domain":"modified_domain.com",
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body


            {
                "type": "Organization",
                "created_at": 1404171216,
                "updated_at": 1404171556,
                "id": 477515,
                "name": "My Organization",
                "permalink": "modified_domaincom",
                "domain": "myorg.com",
                "shortcut_apps": null,
                "settings":
                    {
                        "allow_comment_deletion": true
                    },
                "omit_email_processing": false,
                "product": null,
                "product_name": "free",
                "feature_level": "freeu",
                "subscription_id": null,
                "seats": 5,
                "remaining_users": 4,
                "available_users": 5,
                "used_users": 1,
                "remaining_projects": 5,
                "available_projects": 5,
                "used_projects": 0,
                "metadata":  {},
                "square_logo_url": "/images/logos/square/missing.png",
                "top_logo_url": "/images/logos/top/missing.png",
                "has_logo": false,
                "description": null
            }


+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No organization found with the given id"
                    }
            }

### Delete a Organization [DELETE]
This endpoint deletes a organization and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Id of the organization that we are looking for. It is MANDATORY and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "Organization not found"
            }
