/**
 * AsyncRoutes
 * Code Splitting Component / Server Side Rendering
 */
import React from "react";
import Loadable from "react-loadable";

//app loader
import ContentLoader from "../components/global/loaders/ContentLoader";

// Home one
const AsyncHomePageOneComponent = Loadable({
  loader: () => import("../routes/home"),
  loading: () => <ContentLoader />
});

// Home two
const AsyncHomePageTwoComponent = Loadable({
  loader: () => import("../routes/home-two"),
  loading: () => <ContentLoader />
});

// Home three
const AsyncHomePageThreeComponent = Loadable({
  loader: () => import("../routes/home-three"),
  loading: () => <ContentLoader />
});

// about us
const AsyncAboutUSComponent = Loadable({
  loader: () => import("../routes/about-us"),
  loading: () => <ContentLoader />
});

// cart
const AsyncCartComponent = Loadable({
  loader: () => import("../routes/cart"),
  loading: () => <ContentLoader />
});

// checkout
const AsyncCheckOutComponent = Loadable({
  loader: () => import("../routes/check-out"),
  loading: () => <ContentLoader />
});

// blog detail
const AsyncBlogDetailComponent = Loadable({
  loader: () => import("../routes/blogs/detail"),
  loading: () => <ContentLoader />
});

// accessories
const AsyncAccessoriesComponent = Loadable({
  loader: () => import("../routes/categories/accessories"),
  loading: () => <ContentLoader />
});

// fashion
const AsyncFashionComponent = Loadable({
  loader: () => import("../routes/categories/fashion"),
  loading: () => <ContentLoader />
});

// gadgets
const AsyncGadgetsComponent = Loadable({
  loader: () => import("../routes/categories/gadgets"),
  loading: () => <ContentLoader />
});

// contact
const AsyncContactUsComponent = Loadable({
  loader: () => import("../routes/contact"),
  loading: () => <ContentLoader />
});

// Faq
const AsyncFAQComponent = Loadable({
  loader: () => import("../routes/faq"),
  loading: () => <ContentLoader />
});

// page404
const AsyncPageNotFoundComponent = Loadable({
  loader: () => import("../routes/page-404"),
  loading: () => <ContentLoader />
});

// Payment
const AsyncPaymentOptionsComponent = Loadable({
  loader: () => import("../routes/check-out/payment"),
  loading: () => <ContentLoader />
});

// privacy policy
const AsyncPrivacyPolicyComponent = Loadable({
  loader: () => import("../routes/privacy-policy"),
  loading: () => <ContentLoader />
});

// Terms and Condition
const AsyncTermAndConditionComponent = Loadable({
  loader: () => import("../routes/term-&-conditions"),
  loading: () => <ContentLoader />
});

// product detail
const AsyncProductDetailComponent = Loadable({
  loader: () => import("../routes/products"),
  loading: () => <ContentLoader />
});

// invoice
const AsyncInvoiceComponent = Loadable({
  loader: () => import("../routes/check-out/final-receipt"),
  loading: () => <ContentLoader />
});

// shop
const AsyncShopComponent = Loadable({
  loader: () => import("../routes/shop"),
  loading: () => <ContentLoader />
});

// SignIn
const AsyncSignInPageComponent = Loadable({
  loader: () => import("../routes/session/sign-in"),
  loading: () => <ContentLoader />
});

// Register
const AsyncSignUpComponent = Loadable({
  loader: () => import("../routes/session/sign-up"),
  loading: () => <ContentLoader />
});

// ForgetPassword
const AsyncForgetPasswordComponent = Loadable({
  loader: () => import("../routes/session/forget-password"),
  loading: () => <ContentLoader />
});

// Thank You
const AsyncThankYouComponent = Loadable({
  loader: () => import("../routes/session/thank-you"),
  loading: () => <ContentLoader />
});

//user account
const AsyncUserOrderDetailsComponent = Loadable({
  loader: () => import("../routes/account/order-history/order-detail"),
  loading: () => <ContentLoader />
});
//user account
const AsyncUserAccountComponent = Loadable({
  loader: () => import("../routes/account"),
  loading: () => <ContentLoader />
});

//user order history
const AsyncUserOrderHistoryComponent = Loadable({
  loader: () => import("../routes/account/order-history"),
  loading: () => <ContentLoader />
});

//user profile
const AsyncUserProfileComponent = Loadable({
  loader: () => import("../routes/account/profile"),
  loading: () => <ContentLoader />
});

const AsyncLogoutComponent = Loadable({
  loader: () => import("../routes/session/log-out"),
  loading: () => <ContentLoader />
});

//user address
const AsyncUserAddressComponent = Loadable({
  loader: () => import("../routes/account/address"),
  loading: () => <ContentLoader />
});

//user cards
const AsyncUserCardsComponent = Loadable({
  loader: () => import("../routes/account/cards"),
  loading: () => <ContentLoader />
});

//user edit
const AsyncUserEditComponent = Loadable({
  loader: () => import("../routes/account/edit"),
  loading: () => <ContentLoader />
});

const AsyncOrderDetailComponent = Loadable({
  loader: () => import("../routes/order"),
  loading: () => <ContentLoader />
});

export {
  AsyncHomePageOneComponent,
  AsyncHomePageTwoComponent,
  AsyncHomePageThreeComponent,
  AsyncAboutUSComponent,
  AsyncCartComponent,
  AsyncCheckOutComponent,
  AsyncBlogDetailComponent,
  AsyncAccessoriesComponent,
  AsyncFashionComponent,
  AsyncGadgetsComponent,
  AsyncContactUsComponent,
  AsyncFAQComponent,
  AsyncPaymentOptionsComponent,
  AsyncPrivacyPolicyComponent,
  AsyncTermAndConditionComponent,
  AsyncProductDetailComponent,
  AsyncInvoiceComponent,
  AsyncShopComponent,
  AsyncSignInPageComponent,
  AsyncSignUpComponent,
  AsyncForgetPasswordComponent,
  AsyncThankYouComponent,
  AsyncUserAccountComponent,
  AsyncUserOrderHistoryComponent,
  AsyncUserProfileComponent,
  AsyncUserAddressComponent,
  AsyncUserCardsComponent,
  AsyncUserEditComponent,
  AsyncPageNotFoundComponent,
  AsyncOrderDetailComponent,
  AsyncLogoutComponent,
  AsyncUserOrderDetailsComponent
};
