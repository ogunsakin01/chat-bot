### A Travel ChatBot

#### Introduction
A travel chat is built off the **[LIVE CHAT APP](https://github.com/OgunsakinDamilola/live-chat-project)** by **[Ogunsakin Damilola](https://github.com/OgunsakinDamilola)** 

#### Quick Start
To load in your php dependencies
````
$ cd chat-bot
$ composer install
````

 Once this is complete. Copy your .env.example file to .env and update the following accordingly
 
 ````
DB_CONNECTION=XXXXX
DB_HOST=XXXXX
DB_PORT=XXXXXX
DB_DATABASE=XXXXXXX
DB_USERNAME=XXXXXXXX
DB_PASSWORD=XXXXXXX
````
Don't forget to replace the Xs with you actual value then proceed to generate a key for your laravel project

````
$ php artisan key:generate
````

This chat bot makes use of a third party travel API, so you will need to create an account on **[TravX](https://travx.com.ng)**. Enter your email and travel agency name, a new travel agency with an API will be generated for you.

````
TRAVEL_SUPPLIER_API=XXXXXXX     //http://test-api.travx.com.ng
TRAVEL_SUPPLIER_API_VERSION=X   //1
````

Don't forget to replace the Xs with the actual data. When all this has been done, you then proceed to running your migration command

````
$ php artisan migrate
````

Once the migration is successful, we need to load in our node_modules. To do this, we run the code below
````
$ npm install
````

Once the node modules have been installed then we can proceed to compiling our chat app using Laravel Mix 
````
$ npm run build
````

Now we can start our chat app by

````
$ php artisan serve
````


