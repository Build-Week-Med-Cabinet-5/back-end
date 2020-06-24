# Back End Endpoints----------------------------------------------

Topics:

* Server depoyment and calls
* User Endpoints
* Recommendation Endpoints

**⚠️ This is documentation for explaining steps and processes for using this database, as well as structure and practices. Please let me know if any information is missing or needed for this documentation. Editing is ongoing (see log at bottom)**


# Server deployment and calls ------------------------------------

## Deployed server address: 
https://med-cab-pg-db.herokuapp.com/

# Variations:
- /api/users
- /api/users/:id
- /api/users/:id/recommendations
- /api/auth/register
- /api/auth/login

### This Database is structured as follows:

>           ------------------------ DB ---------------------
>           |                                               |
>      -----------users-----------------------              |
>      |           |           |             |              |
> first_name   last_name     email        password          |
>                                                           |
>      ---------------------------recommended--------------------------
>      |          |          |           |           |          |
>desired_effects  |  recommended_rating  |  recommended_flavor  |
>                 |                      |                      |
>  recommended_strain   recommended_strain_effects   recommended_description


### (more information here)



# User Endpoints ---------------------------------------------------

## Structure for requests are as follows:

**All requests follow a /api/users/ pattern**


*User router endpoints*

#### GET request for all users
`/api/users`
returns all `users` in the database.

#### GET request for user by id
`/api/users/:id`
returns `user` with specific `id` from the database.

#### PUT request for user by id
`/api/users/:id`
returns `user` with specific `id` with updated information.

#### DELETE request for user by id
`/api/users`
returns `user` being successfully deleted from the database.


# Auth Endpoints --------------------------------------------------

**All requests follow a /api/auth/ pattern**


*Auth router endpoints*

#### POST request for new user
`/api/auth/register`
returns a new `user` to the database.

`Required data format:`
{ first_name: 'Bob', last_name: 'Marks', email: 'bobm@gmail.com', password: 'goodpassword1' };
(currently no hard password requirements for BE, just all strings)

#### POST request for a user login
`/api/auth/login`
returns a `user` with proper credentials from the database.

`Required data format:`
{ email: 'bobm@gmail.com', password: 'goodpassword1' };


# Recommendation Endpoints ------------------------------------

**Dev Note** This section is still being developed, and has not been deployed or tested at this time.



## -- Update Log --

*Date_time_logId# & description of fix format*
*ex: 02/18/20_9:30a_1*

**06/21/20_7:40p_1**
- Modified the auth language to be more clear.

**06/21/20_9:20p_2**
- Deleted extra icon, edited dash lengths, updated DB layout tree

**06/23/20_6:50p_3**
- Added language for GET request params and data formats