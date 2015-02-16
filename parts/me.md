FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API Documentation

# Group User information
This endpoint gives you information about your user or the user related to the authentication token that you are using.

## User information [/me]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

              {
                "type":"User",
                "created_at":1373621453,
                "updated_at":1403885260,
                "id":688561,
                "first_name":"Eduardo",
                "last_name":"Rodés Pons",
                "email":"eduardo.rodes@redbooth.com",
                "needs_profile":false,
                "deleted":false,
                "bouncing_email":false,
                "confirmed_user":true,
                "username":"eduardorodes",
                "avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/4573567/thumb.png?245724154",
                "profile_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/34536/profile.png?8756536",
                "micro_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/465745/micro.png?24755735",
                "first_day_of_week":"sunday","biography":"Eduardo is a young economist passioned about early stage projects and business development. He works on operations and business development at Teambox since he joined the project in september 2013. Before that, he used to work as internationalisation consultant between France and Spain, first for the French Gouvernment and as a freelancer later on.","locale":"en","time_zone":"Madrid","default_digest":4,"notify_conversations":false,"notify_tasks":false,"notify_pages":false,"default_watch_new_task":false,"default_watch_new_conversation":false,"default_watch_new_page":false,"digest_delivery_hour":6,"wants_task_reminder":false,"rss_token":"cf3c27fab3e8cd2f008db31b3b0eb98dd3ce35a0","calendar_token":"bb9fd6e48699071bd936e7171233fb3dd3a63a35d","shortcut_apps":null,"project_activity_digest":"no_digest","chat_token":"f48a2b40041a948c584f5f0ade5e21ce","is_pro":true
              }

### Get User information [GET]
Returns a JSON with all the user information.

+ Parameters

+ Response 200

    [User information][]

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

### Update your information [PUT]
Modifies your user information, id is mandatory.

+ Parameters

    + id (required, integer, `121879`) ... Your user id. It is mandatory and it has to be in the url.
    + first_name (optional, string, `Eduardo`) ... First name of your user.
    + last_name (optional, string, `Rodés`) ... Last name of your user.
    + email (optional, string, `eduardo.rodes@redbooth.com`) ... Email address of your user.
    + password (optional, string, 'secretpassword2') ... New password.
    + password_confirmation (optional, string, 'secretpassword2') ... Confirmation of the new password. It will be required if you're trying to change your user's account password.
    + old_password (optional, string, 'secretpassword') ... Old password. It will be required if you're trying to change your user's account password.


+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "first_name":"Edu",
            }

+ Response 200

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809
    + Body


            {
                "type":"User",
                "created_at":1373621453,
                "updated_at":1403885260,
                "id":688561,
                "first_name":"Edu",
                "last_name":"Rodés Pons",
                "email":"eduardo.rodes@redbooth.com",
                "needs_profile":false,
                "deleted":false,
                "bouncing_email":false,
                "confirmed_user":true,
                "username":"eduardorodes",
                "avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/4573567/thumb.png?245724154",
                "profile_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/34536/profile.png?8756536",
                "micro_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/465745/micro.png?24755735",
                "first_day_of_week":"sunday","biography":"Eduardo is a young economist passioned about early stage projects and business development. He works on operations and business development at Teambox since he joined the project in september 2013. Before that, he used to work as internationalisation consultant between France and Spain, first for the French Gouvernment and as a freelancer later on.","locale":"en","time_zone":"Madrid","default_digest":4,"notify_conversations":false,"notify_tasks":false,"notify_pages":false,"default_watch_new_task":false,"default_watch_new_conversation":false,"default_watch_new_page":false,"digest_delivery_hour":6,"wants_task_reminder":false,"rss_token":"cf3c27fab3e8cd2f008db31b3b0eb98dd3ce35a0","calendar_token":"bb9fd6e48699071bd936e7171233fb3dd3a63a35d","shortcut_apps":null,"project_activity_digest":"no_digest","chat_token":"f48a2b40041a948c584f5f0ade5e21ce","is_pro":true
            }


+ Response 404

    + Headers

            Content-Type: application/json

    + Body

            {
                "error":
                    {
                        "message":"Not Found","description":"No user found with the given id"
                    }
            }

### Delete your user [DELETE]
This endpoint deletes your user and can be used just once.

+ Parameters

    + id (required, integer, `1234`) ... Your user id. It is mandatory and it has to be in the url.

+ Response 204

+ Response 404

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            {
                "error": "User not found"
            }


