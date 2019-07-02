import React, { Component } from "react";
import FirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDmccQpFfPW2sMbcP0YfrsyyCIe7t0VXJY",
  authDomain: "edhik-6a8bb.firebaseapp.com",
  databaseURL: "https://edhik-6a8bb.firebaseio.com",
  projectId: "edhik-6a8bb",
  storageBucket: "edhik-6a8bb.appspot.com",
  messagingSenderId: "790984531915"
};

firebase.initializeApp(config);

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "/account/profile",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: "image", // 'audio'
        size: "normal", // 'invisible' or 'compact'
        badge: "bottomleft" //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: "IN", // Set default country to the United Kingdom (+44).
      // For prefilling the national number, set defaultNationNumber.
      // This will only be observed if only phone Auth provider is used since
      // for multiple providers, the NASCAR screen will always render first
      // with a 'sign in with phone number' button.
      defaultNationalNumber: "898897808",
      // You can also pass the full phone number string instead of the
      // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
      // the first country ID that matches the country code will be used to
      // populate the country selector. So for countries that share the same
      // country code, the selected country may not be the expected one.
      // In that case, pass the 'defaultCountry' instead to ensure the exact
      // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
      // will always have higher priority than 'loginHint' which will be ignored
      // in their favor. In this case, the default country will be 'GB' even
      // though 'loginHint' specified the country code as '+1'.
      loginHint: "+918988979808"
    }
  ],
  // Terms of service url.
  tosUrl: "<your-tos-url>",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>"
};

class CheckOut2 extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My Awesome App</h1>
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default CheckOut2;
