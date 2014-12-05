# Group Users
This endpoint will give you information about all the users of your organization. It is a vew-only endpoint, since even being an admin you will not be allowed to update or delete other user accounts through the API.  

## User List [/users]

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8
            X-Request-Id: 8p2937b61207s744r03c7565252b50bz
            X-Runtime: 0.222809

    + Body

            [
              {
                "type":"User",
                "created_at":1373621453,
                "updated_at":1403885260,
                "id":688561,
                "first_name":"Eduardo",
                "last_name":"Rodés Pons",
                "email":"api@redbooth.com",
                "needs_profile":false,
                "deleted":false,
                "bouncing_email":false,
                "confirmed_user":true,
                "username":"eduardorodes",
                "avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/12334/thumb.png?12452154",
                "profile_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/124434/profile.png?23546543",
                "micro_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/465745/micro.png?234525",
                "first_day_of_week":"sunday","biography":"Eduardo is a young economist passioned about early stage projects and business development. He works on operations and business development at Teambox since he joined the project in september 2013. Before that, he used to work as internationalisation consultant between France and Spain, first for the French Gouvernment and as a freelancer later on.","locale":"en","time_zone":"Madrid","default_digest":4,"notify_conversations":false,"notify_tasks":false,"notify_pages":false,"default_watch_new_task":false,"default_watch_new_conversation":false,"default_watch_new_page":false,"digest_delivery_hour":6,"wants_task_reminder":false,"rss_token":"cf3c27fab3e8cd2f568db31b3b0eb46dd3ce31a0","calendar_token":"bb9fd6e48633271bd936e717a23fb3dd3a63a35d","shortcut_apps":null,"project_activity_digest":"no_digest","chat_token":"f48a2b40041a948c584f5f0ade5e21ce","is_pro":true
              },
              {
                "type": "User",
                "created_at": 1274802891,
                "updated_at": 1412157528,
                "id": 105997,
                "first_name": "Jordi",
                "last_name": "Romero",
                "email": "api@redbooth.com",
                "needs_profile": false,
                "deleted": false,
                "bouncing_email": false,
                "confirmed_user": true,
                "username": "jordi",
                "avatar_url": "https://s3.amazonaws.com/teambox-assets/avatars/3154435/thumb.png?1345345",
                "profile_avatar_url": "https://s3.amazonaws.com/teambox-assets/avatars/345135/profile.png?3543453",
                "micro_avatar_url": "https://s3.amazonaws.com/teambox-assets/avatars/134531/micro.png?234151354"
              }
            ]

### Get User [GET]
Returns a JSON with the information of all the users of your organization.

+ Parameters

+ Response 200

    [User List][]

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

## User [/users/{id}]

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
                "email":"api@redbooth.com",
                "needs_profile":false,
                "deleted":false,
                "bouncing_email":false,
                "confirmed_user":true,
                "username":"eduardorodes",
                "avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/12334/thumb.png?12452154",
                "profile_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/124434/profile.png?23546543",
                "micro_avatar_url":"https://s3.amazonaws.com/teambox-assets/avatars/465745/micro.png?234525",
                "first_day_of_week":"sunday","biography":"Eduardo is a young economist passioned about early stage projects and business development. He works on operations and business development at Teambox since he joined the project in september 2013. Before that, he used to work as internationalisation consultant between France and Spain, first for the French Gouvernment and as a freelancer later on.","locale":"en","time_zone":"Madrid","default_digest":4,"notify_conversations":false,"notify_tasks":false,"notify_pages":false,"default_watch_new_task":false,"default_watch_new_conversation":false,"default_watch_new_page":false,"digest_delivery_hour":6,"wants_task_reminder":false,"rss_token":"cf3c27fab3e8cd2f568db31b3b0eb46dd3ce31a0","calendar_token":"bb9fd6e48633271bd936e717a23fb3dd3a63a35d","shortcut_apps":null,"project_activity_digest":"no_digest","chat_token":"f48a2b40041a948c584f5f0ade5e21ce","is_pro":true
              }

### Get User [GET]
Returns a JSON with information about the specific user.

+ Parameters

+ Response 200

    [User][]

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
