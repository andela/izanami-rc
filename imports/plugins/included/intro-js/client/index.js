import introJs from "intro.js";
import { Accounts } from "/lib/collections/collections";
import { Meteor } from "meteor/meteor";

const tour = introJs.introJs();

const unregisteredBuyers = [
  {
    intro: `
    <h2>Welcome to Reaction Commerce!</h2>
    <hr />
    <div>
     <strong>Reaction</strong> Commmerce is the 21st century e-commerce.<br />
     There have been many problems with e-commerce and evolving technologies,
     so we built one that not only reacts to change, but inspires it. <br />
     If you're looking to have the best experience, more control, or you just
     want to get lost in the world of shopping, <br />
     <strong>This is your final stop!</strong>
    </div>
    <hr />
    <h3>Do you wish to take a tour of our platform?</h3>
    `
  }, {
    intro: `
     <h2>Products</h2>
     <hr />
     <div>
       All available products will be displayed on this screen.<br />
       All you need do is click on the product of your choice, and you
       will be redirected to a page where you can view more information
       about the product and proceed to checkout.
     </div>
    <hr />
    <h3>Do you wish to continue?</h3>
   `
  }, {
    element: ".search",
    intro: `
    <h2>Reactive Search</h2>
    <hr />
    <div>
      Experience the power of reactive search. Search results are displayed
      as you type.<br />
      <strong>Just click the icon and type in the search bar.</strong>
    </div>
    <hr />
    <h3>Do you wish to continue?</h3>
   `
  }, {
    element: ".languages",
    intro: `
    <h2>Languages</h2>
     <hr>
     <div>
       <strong>Why restrict Reaction Commerce to just one language?</strong><br />
       You have the option of selecting the language of your choice and watch the
       application change <strong>Reactively</strong>
       without any need of a page refresh.<br />
       <strong>Just click the icon to select your preferred language.</strong>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".currencies",
    intro: `
    <h2>Currencies</h2>
     <hr>
     <div>
       If you reside in another country but you see that fancy scarf
       you just have to have, never you mind! Currency is no longer a barrier.
       with <strong>Reaction Commerce</strong>, you can pay in up to seven
       different currencies.<br />
       <strong>Just click the icon to select your preferred currency.</strong>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".accounts",
    intro: `
    <h2>Sign in/Register</h2>
     <hr />
     <div>
       Join us today!<br />
       Just click the dropdown button to either sign in or register
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".cart",
    intro: `<h2>My Cart</h2>
     <hr>
     <div>
       So! you finally had an awesome time shopping.<br />
       Next, you need to checkout.<br />
       Just click on the icon to checkout your selected products
       and proceed to payment.
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".social-timelines",
    intro: `
      <div data-position="top">
        <span class="custom-step-number introjs-helperNumberLayer">8</span>
        <h2>Keep in touch with us on social media</h2>
        <hr>
        <div>
        Get all our latest post from facebook and twitter.
        And join the community to push E-commerce to a whole new
        <strong>Reactive</strong> level!
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".tour-btn",
    intro: `
      <h2>Get Ready for Reaction!</h2>
      <hr>
      <div>
       That's about everything you need to know to get started.<br />
       But hey!, if you ever need a refresher, you can find me right here.
      </div>
      `
  }
];

const registeredBuyers = [
  {
    intro: `
    <h2>Welcome to Reaction Commerce!</h2>
    <hr />
    <div>
     <strong>Reaction</strong> Commmerce is the 21st century e-commerce.<br />
     There have been many problems with e-commerce and evolving technologies,
     so we built one that not only reacts to change, but inspires it. <br />
     If you're looking to have the best experience, more control, or you just
     want to get lost in the world of shopping, <br />
     <strong>This is your final stop!</strong>
    </div>
    <hr />
    <h3>Do you wish to take a tour of our platform?</h3>
    `
  }, {
    intro: `
     <h2>Products</h2>
     <hr />
     <div>
       All available products will be displayed on this screen.<br />
       All you need do is click on the product of your choice, and you
       will be redirected to a page where you can view more information
       about the product and proceed to checkout.
     </div>
    <hr />
    <h3>Do you wish to continue?</h3>
   `
  }, {
    element: ".search",
    intro: `
    <h2>Reactive Search</h2>
    <hr />
    <div>
      Experience the power of reactive search. Search results are displayed
      as you type.<br />
      <strong>Just click the icon and type in the search bar.</strong>
    </div>
    <hr />
    <h3>Do you wish to continue?</h3>
   `
  }, {
    element: ".notification-icon",
    intro: `
    <h2>Notification</h2>
     <hr />
     <div>
       This displays both read and unread notifications that you have.<br />
       <strong>Just click the icon to see all your notifications.</strong>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".languages",
    intro: `
    <h2>Languages</h2>
     <hr>
     <div>
       <strong>Why restrict Reaction Commerce to just one language?</strong><br />
       You have the option of selecting the language of your choice and watch the
       application change <strong>Reactively</strong>
       without any need of a page refresh.<br />
       <strong>Just click the icon to select your preferred language.</strong>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".currencies",
    intro: `
    <h2>Currencies</h2>
     <hr>
     <div>
       If you reside in another country but you see that fancy scarf
       you just have to have, never you mind! Currency is no longer a barrier.
       with <strong>Reaction Commerce</strong>, you can pay in up to seven
       different currencies.<br />
       <strong>Just click the icon to select your preferred currency.</strong>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".accounts",
    intro: `
    <h2>Account Information</h2>
     <hr />
     <div>
       Here you can edit your entire profile:
       <ol>
        <li>Change password</li>
        <li>view orders</li>
        <li>Or even change your personal Information</li>
       </ol>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".cart",
    intro: `<h2>My Cart</h2>
     <hr>
     <div>
       So! you finally had an awesome time shopping.<br />
       Next, you need to checkout.<br />
       Just click on the icon to checkout your selected products
       and proceed to payment.
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".social-timelines",
    intro: `
      <div data-position="top">
        <span class="custom-step-number introjs-helperNumberLayer">9</span>
        <h2>Keep in touch with us on social media</h2>
        <hr>
        <div>
        Get all our latest post from facebook and twitter.
        And join the community to push E-commerce to a whole new
        <strong>Reactive</strong> level!
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".tour-btn",
    intro: `
      <h2>Get Ready for Reaction!</h2>
      <hr>
      <div>
       That's about everything you need to know to get started.<br />
       But hey!, if you ever need a refresher, you can find me right here.
      </div>
      `
  }
];

const admin = [
  {
    intro: `
    <h2>Welcome to Reaction Commerce!</h2>
    <hr />
    <div>
     <strong>Reaction</strong> Commmerce is the 21st century e-commerce.<br />
     There have been many problems with e-commerce and evolving technologies,
     so we built one that not only reacts to change, but inspires it. <br />
     If you're looking to have the best experience, more control, or you just
     want to get lost in the world of shopping, <br />
     <strong>This is your final stop!</strong>
    </div>
    <hr />
    <h3>Do you wish to take a tour of our platform?</h3>
    `
  }, {
    intro: `
     <h2>Products</h2>
     <hr />
     <div>
       All available products will be displayed on this screen.<br />
       All you need do is click on the product of your choice, and you
       will be redirected to a page where you can view more information
       about the product and proceed to checkout.
     </div>
    <hr />
    <h3>Do you wish to continue?</h3>
   `
  }, {
    element: ".search",
    intro: `
    <h2>Reactive Search</h2>
    <hr />
    <div>
      Experience the power of reactive search. Search results are displayed
      as you type.<br />
      As an <strong>Admin</strong> you also have the option of searching
      accounts and orders.<br />
      <strong>Just click the icon and type in the search bar.</strong>
    </div>
    <hr />
    <h3>Do you wish to continue?</h3>
   `
  }, {
    element: ".notification-icon",
    intro: `
    <h2>Notification</h2>
     <hr />
     <div>
       This displays both read and unread notifications that you have.<br />
       <strong>Just click the icon to see all your notifications.</strong>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".languages",
    intro: `
    <h2>Languages</h2>
     <hr>
     <div>
       <strong>Why restrict Reaction Commerce to just one language?</strong><br />
       You have the option of selecting the language of your choice and watch the
       application change <strong>Reactively</strong>
       without any need of a page refresh.<br />
       <strong>Just click the icon to select your preferred language.</strong>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".currencies",
    intro: `
    <h2>Currencies</h2>
     <hr>
     <div>
       If you reside in another country but you see that fancy scarf
       you just have to have, never you mind! Currency is no longer a barrier.
       with <strong>Reaction Commerce</strong>, you can pay in up to seven
       different currencies.<br />
       <strong>Just click the icon to select your preferred currency.</strong>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".accounts",
    intro: `
    <h2>Account Information</h2>
     <hr />
     <div>
       <strong>Do you crave more control as an admin?</strong><br />
       You've come to the right place. By clicking on this icon, you have the choice
       to:
        <ol>
          <li>Change your password</li>
          <li>View orders</li>
          <li>View all registered users in the application</li>
          <li>Add products</li>
          <li><b>More control?:</b>
            You can even change the entire settings of the application
          </li>
        </ol>
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".cart",
    intro: `<h2>Your Cart</h2>
     <hr>
     <div>
       So! you finally had an awesome time shopping.<br />
       Next, you need to checkout.<br />
       Just click on the icon to checkout your selected products
       and proceed to payment.
     </div>
     <hr />
     <h3>Do you wish to continue?</h3>
     `
  }, {
    element: ".dashboard-button",
    intro: `
      <div>
        <h2>Keep in touch with us on social media</h2>
        <hr>
        <div>
         Get all our latest post from facebook and twitter.
         And join the community to push E-commerce to a whole new
         <strong>Reactive</strong> level!
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  },  {
    element: ".publish-button",
    intro: `
      <div>
        <h2>Publish Store</h2>
        <hr>
        <div>
         Get all our latest post from facebook and twitter.
         And join the community to push E-commerce to a whole new
         <strong>Reactive</strong> level!
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".eye-button",
    intro: `
      <div>
        <h2>Make store visible</h2>
        <hr>
        <div>
         Get all our latest post from facebook and twitter.
         And join the community to push E-commerce to a whole new
         <strong>Reactive</strong> level!
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".add-product-button",
    intro: `
      <div>
        <h2>Add products</h2>
        <hr>
        <div>
         Get all our latest post from facebook and twitter.
         And join the community to push E-commerce to a whole new
         <strong>Reactive</strong> level!
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".archive-button",
    intro: `
      <div>
        <h2>Archive stores</h2>
        <hr>
        <div>
         Get all our latest post from facebook and twitter.
         And join the community to push E-commerce to a whole new
         <strong>Reactive</strong> level!
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".discard-button",
    intro: `
      <div>
        <h2>Discard changes</h2>
        <hr>
        <div>
         Clicking this option will undo the previous changes you have made to
         your store.
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".edit-button",
    intro: `
      <div>
        <span class="custom-step-number introjs-helperNumberLayer">15</span>
        <h2>Edit store</h2>
        <hr>
        <div>
          Enabling Edit Mode will enable you to edit your store any way you
          desire.<br />
          <strong>Toggle the radio button to enable this functionality</strong>
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".social-timelines",
    intro: `
      <div data-position="top">
        <span class="custom-step-number introjs-helperNumberLayer">16</span>
        <h2>Keep in touch with us on social media</h2>
        <hr>
        <div>
         Get all our latest post from facebook and twitter.
         And join the community to push E-commerce to a whole new
         <strong>Reactive</strong> level!
        </div>
        <hr />
        <h3>Do you wish to continue?</h3>
      </div>
     `
  }, {
    element: ".tour-btn",
    intro: `
      <h2>Get Ready for Reaction!</h2>
      <hr>
      <div>
       That's about everything you need to know to get started.<br />
       But hey!, if you ever need a refresher, you can find me right here.
      </div>
      `
  }
];

export const updateTour = (callback) => {
  if (Meteor.user().emails.length > 0) {
    if (!Accounts.findOne(Meteor.userId()).tookTour) {
      callback(false);
      Accounts.update({ _id: Meteor.userId() }, { $set: { tookTour: true } });
    }
  } else {
    callback(true);
  }
};

export const startTour = (custom = false) => {
  if (Meteor.user().emails < 1 || custom) {
    let tourSteps = unregisteredBuyers;
    if (Meteor.user().username === "Admin") {
      tourSteps = admin;
    } else if (!Meteor.user().username && Meteor.user().emails.length > 0) {
      tourSteps = registeredBuyers;
    } else {
      tourSteps = unregisteredBuyers;
    }
    tour.setOptions({
      showBullets: true,
      showProgress: true,
      scrollToElement: true,
      showStepNumbers: true,
      tooltipPosition: "auto",
      tooltipClass: "custom-intro",
      steps: tourSteps,
      nextLabel: "Sure",
      hidePrev: true,
      hideNext: true
    });

    tour.start();
  }
};
