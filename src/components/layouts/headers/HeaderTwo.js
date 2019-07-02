/**
 * site header two component
 */
/* eslint-disable */
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";

// components
import HeaderMenuTwo from "./HeaderMenuTwo";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  Hits,
  connectSearchBox,
  connectRefinementList
} from "react-instantsearch-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Logout from "./Logout";
import FixedHeaderTwo from "../headers/FixedHeaderTwo";
import SidebarMenu from "../sidebar";
import AppConfig from "../../../constants/AppConfig";
import SearchBox from "./SearchBox";
import SearchBoxV2 from "./SearchBoxV2";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import qs from "qs";
import "./header.scss";
import { Link } from "react-router-dom";
import * as checkoutAction from "../../../actions/checkoutAction";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);
const VirtualSearchBox = connectSearchBox(() => null);
const VirtualRefinementList = connectRefinementList(() => null);

const updateAfter = 700;

const createURL = state => `?${qs.stringify(state)}`;

const searchStateToUrl = searchState =>
  searchState ? `/accessories${createURL(searchState)}` : "";
const urlToSearchState = location => qs.parse(location.search.slice(1));

class HeaderTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: false,
      query: "",
      categories: [],
      token: "",
      searchState: urlToSearchState(props.location)
    };
  }

  componentWillMount() {
    window.addEventListener("scroll", this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.sign_up_data.length > 0) {
        this.setState({
          token: nextProps.sign_up_data
        });
      } else if (nextProps.log_in_data.length > 0) {
        this.setState({
          token: nextProps.log_in_data
        });
      }
    }
    if (nextProps.location !== this.props.location) {
      this.setState({ searchState: urlToSearchState(nextProps.location) });
    }
  }

  onSearchStateChange = searchState => {
    this.setState({
      searchState
    });
  };

  //Function to show and hide fixed header
  // hideBar = () => {
  //   const { fixedHeader } = this.state;
  //   this.scrollTop =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   this.scrollTop >= 200
  //     ? !fixedHeader && this.setState({ fixedHeader: true })
  //     : fixedHeader && this.setState({ fixedHeader: false });
  // };
  onSuggestionSelected = (_, { suggestion }) => {
    const [
      category
    ] = suggestion.instant_search.facets.exact_matches.categories;
    clearTimeout(this.debouncedSetState);
    let searchState = this.state.searchState;
    searchState.query = suggestion.query;
    this.debouncedSetState = setTimeout(() => {
      this.props.history.push(searchStateToUrl(searchState), searchState);
    }, updateAfter);
    this.setState({
      query: suggestion.query,
      categories:
        category && category.value !== "ALL_CATEGORIES" ? [category.value] : [],
      searchState
    });
  };

  onSuggestionCleared = () => {
    this.setState({
      query: "",
      categories: []
    });
  };

  render() {
    return (
      <div>
        <AppBar
          position="static"
          className={`iron-header-wrapper bg-primary iron-header-v2 new_fixed_header`}
        >
          <div className="iron-header-top 11 py-0 bg-primary">
            <div className="container">
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  className="d-flex justify-content-start align-items-center"
                >
                  <div className="iron-app-logo text-md-center">
                    <Link to="/">
                      <img src={AppConfig.AppLogo} alt="header-logo" />{" "}
                    </Link>
                    {/* <Typography variant="title" color="inherit" className="text-uppercase ">  
                                       Embryo
                                    </Typography> */}
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  lg={6}
                  xl={7}
                  className="d-flex justify-content-start align-items-center"
                >
                  <InstantSearch
                    searchClient={searchClient}
                    routing={true}
                    indexName="instant_search_demo_query_suggestions"
                    searchState={this.state.searchState}
                    onSearchStateChange={this.onSearchStateChange}
                    createURL={createURL}
                  >
                    <Configure hitsPerPage={10} />
                    <SearchBoxV2
                      onSuggestionSelected={this.onSuggestionSelected}
                      onSuggestionCleared={this.onSuggestionCleared}
                    />
                  </InstantSearch>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={2}
                  className="d-flex justify-content-end align-items-center"
                >
                  <div className="iron-header-widgets d-flex justify-content-end align-items-center ">
                    <Cart />
                    <Wishlist />
                    <Logout />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="iron-header-bottom bg-base">
            <div className="container">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="position-relative">
                    <HeaderMenuTwo />
                    <SidebarMenu />
                    <SearchBox />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          {/* <FixedHeaderTwo /> */}
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sign_up_data: state.checkout.sign_up_data,
  log_in_data: state.checkout.log_in_data
});

export default withRouter(
  connect(
    mapStateToProps,
    checkoutAction
  )(HeaderTwo)
);
