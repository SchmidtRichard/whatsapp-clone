# Setting Up the React.js App

The first thing to do is to go to the terminal of your choise (my one is **Hyper**), and type in `npx create-react-app whatsapp-mern` to create a **React.js** application

Then go to Firebase then go to **Console** and choose **Add project**, then name the project **(whatsapp-mern)** and click **Continue**, then **disable** google analytics and click ** Create project**.

Once you get the **Your new project is ready** message just click **Continue**.

Then click on **Web** and type in **whatsapp-mern** in the **Register app App nickname** section, also select **Also set up Firebase Hosting for this app** and click **Register app**.

Then After **Add Firebase SDK** has been generated just click **Next**, then in the **Install Firebase CLI** (`npm install -g firebase-tools`) section copy the command line tool and paste and execute it in the terminal, then click **Next**, then in the **Deploy to Firebase Hosting** section just click in **Continue to the console**.

Then go ahead and move the project folder (whatsapp-mern) in the terminal and open the project, then clean up the project by deleting the **App.test.js**, **logo.svg**, and **setupTests.js** files.

Then go to the **App.js** file and delete the code below.

```js
import logo from './logo.svg';

<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
```

And only leave and add the below:

```js
import React from "react";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Let's build a MERN WhatsApp Clone</h1>
    </div>
  );
}

export default App;
```

Then go to **App.css** and delete all the styling code from there as it no longer applies to the code we have left.

After that go to **index.css** and add the below **CSS** Code:

```css
*{
margin: 0
}
```

Now we need to get the **config** from Firebase by going to **Project settings**, then move to the **Your apps** section and select **Config** then click in **Copy** as we will need it for latter on for when we connect to **authentication**.
Create a **firebase.js** file inside the **src** project folder then paste the copied **Config** code in there

***

The **frontend** will be deployed in **Firebase** and the **backend** will be deployed in **Heroku**.
