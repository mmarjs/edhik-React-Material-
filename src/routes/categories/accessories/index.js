/**
 * Accessories shop Page
 */

import React from "react";
import {
  InstantSearch,
  Hits,
  Stats,
  SortBy,
  Configure,
  HierarchicalMenu,
  RefinementList,
  RatingMenu,
  NumericMenu,
  Panel,
  Pagination,
  ClearRefinements,
  RangeInput,
  SearchBox
} from "react-instantsearch-dom";
import qs from "qs";
import { Grid } from "@material-ui/core";

//page title
import PageTitle from "../../../components/widgets/PageTitle.js";

//component
import RctCard from "../../../components/global/rct-card";
import Hit from "../../../components/ecommerce/shop/hit";

//app config
import AppConfig from "../../../constants/AppConfig.js";

const updateAfter = 700;

const createURL = state => `?${qs.stringify(state)}`;

const searchStateToUrl = (props, searchState) =>
  searchState ? `${props.location.pathname}${createURL(searchState)}` : "";
const urlToSearchState = location => qs.parse(location.search.slice(1));

export default class Accessories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchState: urlToSearchState(props.location)
    };
  }

  onSearchStateChange = searchState => {
    clearTimeout(this.debouncedSetState);
    this.debouncedSetState = setTimeout(() => {
      this.props.history.push(
        searchStateToUrl(this.props, searchState),
        searchState
      );
    }, updateAfter);
    this.setState({ searchState });
  };

  componentWillReceiveProps(props) {
    if (props.location !== this.props.location) {
      this.setState({ searchState: urlToSearchState(props.location) });
    }
  }

  render() {
    return (
      <div className="iron-accessories-page-wrap">
        {/* <PageTitle
               title="Accessories"
               desc="Choose the wide range of best accessories."
            /> */}
        <div className="product-list section-pad iron-shop-wrapper">
          <div className="container">
            <InstantSearch
              appId={AppConfig.algoliaConfig.appId}
              apiKey={AppConfig.algoliaConfig.apiKey}
              indexName={AppConfig.algoliaConfig.indexName}
              searchState={this.state.searchState}
              onSearchStateChange={this.onSearchStateChange}
              createURL={createURL}
            >
              <Grid container spacing={32}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={3}
                  className="mb-md-0 mb-30"
                >
                  <div className="iron-filters-wrapper">
                    <RctCard>
                      <ClearRefinements />
                    </RctCard>

                    <RctCard>
                      <Panel header="Heirarchy">
                        <HierarchicalMenu
                          id="categories"
                          attributes={[
                            "hierarchicalCategories.lvl0",
                            "hierarchicalCategories.lvl1",
                            "hierarchicalCategories.lvl2"
                          ]}
                        />
                      </Panel>
                    </RctCard>
                    <RctCard>
                      <Panel header="Type">
                        <RefinementList attribute="type" limit={5} />
                      </Panel>
                    </RctCard>
                    <RctCard>
                      <Panel header="Brand">
                        <RefinementList
                          attribute="brand"
                          //searchable
                          limit={5}
                        />
                      </Panel>
                    </RctCard>
                    <RctCard>
                      <Panel header="Category">
                        <RefinementList
                          attribute="categories"
                          //searchable
                          limit={5}
                        />
                      </Panel>
                    </RctCard>
                    <RctCard>
                      <Panel header="Price" className="mb-20">
                        <NumericMenu
                          attribute="price"
                          items={[
                            { end: 10, label: "Below $10" },
                            { start: 10, end: 100, label: "$10 - $100" },
                            { start: 100, end: 500, label: "$100 - $500" },
                            { start: 500, label: "Above $500" }
                          ]}
                        />
                      </Panel>
                      <Panel header="Enter Price Range">
                        <RangeInput
                          attribute="price"
                          className="py-2"
                          translations={{
                            submit: "Go",
                            separator: "-"
                          }}
                        />
                      </Panel>
                    </RctCard>
                    <RctCard>
                      <Panel header="Rating Menu">
                        <RatingMenu
                          attribute="rating"
                          min={1}
                          max={5}
                          translations={{
                            ratingLabel: ""
                          }}
                        />
                      </Panel>
                    </RctCard>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={9}>
                  <div className="stats-info d-md-flex mb-30 justify-content-between align-items-center">
                    <div className="mb-30 mb-md-0 mx-30">
                      <RctCard>
                        <SearchBox
                          translations={{ placeholder: "Search Products" }}
                          showLoadingIndicator
                        />
                      </RctCard>
                    </div>
                    <div className="app-selectbox-sm mb-30 mb-md-0">
                      <Stats />

                      <SortBy
                        defaultRefinement="instant_search"
                        items={[
                          { value: "instant_search", label: "Featured" },
                          {
                            value: "instant_search_price_asc",
                            label: "Lowest Price"
                          },
                          {
                            value: "instant_search_price_desc",
                            label: "Highest Price"
                          }
                        ]}
                      />
                    </div>
                  </div>
                  <Configure hitsPerPage={24} />
                  <Hits
                    hitComponent={Hit}
                    className="mb-30"
                    showLoadingIndicator
                  />
                  <div className="iron-pagination-wrap">
                    <Pagination
                      totalPages={5}
                      showFirst
                      showLast
                      showNext
                      showPrevious
                    />
                  </div>
                </Grid>
              </Grid>
            </InstantSearch>
          </div>
        </div>
      </div>
    );
  }
}
