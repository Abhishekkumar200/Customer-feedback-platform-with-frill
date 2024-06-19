# Customer feedback platform with frill
This project is about creating a customer feedback platform where users can log in using Google OAuth and provide feedback on various aspects of a product. The feedback has been grouped in the categories such as Product Features, Product Pricing, and Product Usability.They can rate all features from 1 to 10 and all accumulated data will be shown on dashboard. **Frill.co** has been used to collect and manage the feedback data.

## Folders

**This project contains two folders:**
1. `frontend` - It contains all files of frontend.
2. `backend` - It contains all files of backend.

## Procedure to setup

1. Download both the folders.
2. Open individual folders in different windows of any code editor i.e Visual Studio Code.
3. Now run `npm i` in terminal of both the window to download dependencies.
4. After the downloading has completed. Type `nodemon index.js` in the terminal of **backend** window.
5. Once the **backend** start running. Type `npm start` in the **frontend** window.
6. Now the app has started. You can login using your email id. Since, Google OAuth is being used for testing purpose so, it allows only limited users to login. Only email id `deepika.agarwal@tensorgo.com` can login to the app.
7. You can submit your feedback in the feedback section. All feedback will be available on the dashboard and integrated **frill** link. 
