# rhes
![GitHub last commit](https://img.shields.io/github/last-commit/nathanstephane/rhes)
### About
![2022-07-29 13_27_17-](https://user-images.githubusercontent.com/75221936/181749890-95da0cfe-f408-4eb8-a317-8440bf0e4233.png)

rhes is a program that display future arrivals and departures of train transportation in major cities of France. 
Request are made to the SNCF API then consumed by the client APP.
### How it works ?
The goal was to get the next departures and arrivals of trains. 
For that, a request was made to the [SNCF REST API](https://www.digital.sncf.com/startup/API) 
which underneath uses [navitia API](https://navitia.io/).
The request was made using axios to get the next 10 departures to the 
following endpoint: https://api.sncf.com/v1/coverage/sncf/stop_areas/${code_of_trainStation}/departures

### How to use it ?
After cloning this repository.

-   [ ] clone this repository
    
-   [ ] run the following command to install the dependencies
    
    ```jsx
    			npm install
    
    ```
    
-   [ ] Request an API key from [SNCF](https://www.digital.sncf.com/startup/API)
    
-   [ ] Create a .env on the project root and paste the API key as follow

    ![2022-07-29 13_31_32- env - rhes - Visual Studio Code](https://user-images.githubusercontent.com/75221936/181750355-d388fcbd-739a-49a9-b367-01e0c05f23de.png)

    
    
-   [ ] start the project with the following command
    
    ```jsx
    npm run start
    
    ```
### Future scope or improvement:
-Add an option to see the future departures and arrivals of the [Transilent](https://www.transilien.com/en) 
accross Paris and Ile-de-France

-Display for each station the percentage of lateness.
