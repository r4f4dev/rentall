import React from 'react';
import NewListLayout from '../../components/Layout/NewListLayout';
import Layout from '../../components/Layout';
import ListLayout from '../../components/Layout/ListLayout';
import BecomeHost from './BecomeHost';
import { checkListing } from '../../actions/Listing/checkListing';
import NotFound from '../notFound/NotFound';
import { getSideMenu } from '../../actions/siteadmin/getSideMenu';
// Redux Action
import { getListingSteps, resetListingSteps } from '../../actions/getListingSteps';
import { getListingFields } from '../../actions/getListingFields';
import { getListingStepTwo } from '../../actions/Listing/getListingStepTwo';
import { restrictUrls } from '../../helpers/adminPrivileges';
const title = 'Become a Host';

export default async function action({ params, store, query }) {

  // From Redux Store
  const isAuthenticated = store.getState().runtime.isAuthenticated;
  const isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  const listingFields = store.getState().listingFields.data;
  const listingSteps = store.getState().location.listingSteps;
  const initialValuesLoaded = store.getState().location.initialValuesLoaded;
  const baseCurrency = store.getState().currency.base;
  let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;

  // From URI
  const listId = params.listId;
  const formPage = params.formPage;
  const formBaseURI = "/become-a-host/";
  const className = 'hiddenFooterMobile';
  await store.dispatch(getSideMenu());
  let mode;

  if ("mode" in query) {
    if (query.mode === "new") {
      mode = query.mode;
    }
  }

  if (!isAuthenticated && !isAdminAuthenticated) {
    return { redirect: '/login' };
  }

  // Admin restriction
  if (isAdminAuthenticated && !restrictUrls('/become-a-host/', adminPrivileges)) {
    return { redirect: '/siteadmin' };
  }

  // Fetch all settings fields 
  if (listingFields === undefined) {
    store.dispatch(getListingFields());
  }

  if (listId != undefined && !isNaN(listId)) {
    var response;
    //checkListing
    await store.dispatch(checkListing(listId, 'listing')).then(function (res) {
      response = isAdminAuthenticated ? true : res;
    });

    if (response === true) {
      // Fetch All steps status
      if (listingSteps === undefined) {
        store.dispatch(getListingSteps(listId));
      } else {
        // Fetch All steps status for another list
        if (listingSteps.listId != listId) {
          store.dispatch(getListingSteps(listId));
        } else if (formPage && formPage == 'home') {
          store.dispatch(getListingSteps(listId));
        }
      }
      store.dispatch(getListingStepTwo(listId));
    } else {
      return {
        title,
        component: <NewListLayout><NotFound /></NewListLayout>
      }
    }
  } else {
    if (initialValuesLoaded != true || (mode && mode == 'new')) {
      await store.dispatch(resetListingSteps());
      await store.dispatch(getListingSteps());
    }
  }

  if (listId != undefined && !isNaN(listId)) {
    let step;
    const step1Pages = [
      "room", "bedrooms", "bathrooms", "location", "map", "amenities", "spaces"
    ];
    const step2Pages = [
      "photos", "cover-photo", "description", "title"
    ];
    const step3Pages = [
      "guest-requirements", "house-rules", "review-how-guests-book",
      "advance-notice", "booking-window", "min-max-nights", "calendar",
      "pricing", "discount", "booking-scenarios", "local-laws"
    ];

    if (step1Pages.indexOf(formPage) > -1) {
      step = 1;
    } else if (step2Pages.indexOf(formPage) > -1) {
      step = 2;
    } else if (step3Pages.indexOf(formPage) > -1) {
      step = 3;
    }

    if (step != undefined) {
      return {
        title,
        component: <ListLayout
          listId={Number(listId)}
          formPage={formPage}
          formBaseURI={formBaseURI}
          step={step}
        >
          <BecomeHost
            listId={Number(listId)}
            title={title}
            formPage={formPage}
            formBaseURI={formBaseURI}
            mode={mode}
            baseCurrency={baseCurrency}
            step={step}
          />
        </ListLayout>,
      };
    }
  }

  return {
    title,
    component: <NewListLayout>
      <BecomeHost
        listId={Number(listId)}
        title={title}
        formPage={formPage}
        formBaseURI={formBaseURI}
        mode={mode}
        baseCurrency={baseCurrency}
      />
    </NewListLayout>
  };
}
