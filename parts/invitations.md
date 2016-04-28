FORMAT: 1A
HOST: https://redbooth.com/api
NAME: Redbooth API: Comments Documentation

# Group Invitations

Use this endpoint to invite a user to a project or an organization.
The user may be already at Redbooth or not, this is why we use email
to identify them in both cases.

### Create Invitation [POST]

Invite the person with the given email to an organization and (optionally) to a project.

+ Parameters

    + organization_id (required, integer, `123`) ... Id of the organization we are inviting the user to.
    + email (required, string, `foo@bar.com`) ... Email of the user we are inviting.
    + project_id (optional, integer, `424`) ... Project we want to invite the user to.
    
+ Request

    + Headers

            Content-Type: application/json

    + Body

            {
                "organization_id": "2",
                "email": "frank.kramer@earthworks.com",
                "project_id": "34"
            }

+ Response 201

    Created: Your invitation was created succesfully. The endpoint returns a user entity.
    
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
              "first_name":"Frank",
              "last_name":"Kramer",
              "email":"frank.kramer@earthworks.com",
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

+ Response 422
    
    + Headers

            Content-Type: application/json

    + Body

            {
                "error": "Unprocessable Entity"
            }

+ Response 401

    Unauthorized: You don't have the rights to make that invitation.
    If you are about to consume seats be sure you are the organization's admin.
    
+ Response 402

    Payment required: You've used all your seats, upgrade to invite more people to the organization.
