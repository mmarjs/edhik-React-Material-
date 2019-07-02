/**
 *Gadgets Page
 */
import React from 'react'
import {
	InstantSearch,
	Hits,
	Stats,
	SortBy,
	Configure,
	RefinementList,
	RatingMenu,
	NumericMenu,
	Panel,
	Pagination,
	ClearRefinements,
	RangeInput,
	SearchBox
} from 'react-instantsearch-dom';
import { Grid } from '@material-ui/core';

//page title
import PageTitle from '../../../components/widgets/PageTitle.js';

//component
import RctCard from '../../../components/global/rct-card';
import Hit from '../../../components/ecommerce/shop/hit';

//app config
import AppConfig from '../../../constants/AppConfig.js';

export default class Gadgets extends React.Component {
	render() {
		return (
			<div className="iron-gadgets-page-wrap">
				<PageTitle
					title="gadgets"
					desc="Check out our new gadgets."
				/>
				<div className="product-list section-pad iron-shop-wrapper">
					<div className="container">
						<InstantSearch
							appId={AppConfig.algoliaConfig.appId}
							apiKey={AppConfig.algoliaConfig.apiKey}
							indexName={AppConfig.algoliaConfig.indexName}
						>
							<Grid container spacing={32}>
								<Grid item xs={12} sm={12} md={4} lg={3} className="mb-md-0 mb-30">
									<div className="iron-filters-wrapper">

										<RctCard>
											<SearchBox
												translations={{ placeholder: 'Search Products' }}
												showLoadingIndicator
											/>
										</RctCard>
										<RctCard>
											<Panel header="Type">
												<RefinementList
													attribute="type"
													limit={5}
												/>
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
											<Panel
												header="Price"
												className="mb-20"
											>
												<NumericMenu
													attribute="price"
													items={[
														{ end: 10, label: 'Below $10' },
														{ start: 10, end: 100, label: '$10 - $100' },
														{ start: 100, end: 500, label: '$100 - $500' },
														{ start: 500, label: 'Above $500' },
													]}
												/>
											</Panel>
											<Panel header="Enter Price Range">
												<RangeInput
													attribute="price"
													className="py-2"
													translations={{
														submit: 'Go',
														separator: '-'
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
										<RctCard>
											<ClearRefinements />
										</RctCard>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={8} lg={9}>
									<div className="stats-info d-md-flex mb-30 justify-content-between align-items-center">
										<div className="app-selectbox-sm mb-30 mb-md-0">
											<SortBy
												defaultRefinement="instant_search"
												items={[
													{ value: 'instant_search', label: 'Featured' },
													{ value: 'instant_search_price_asc', label: 'Lowest Price' },
													{ value: 'instant_search_price_desc', label: 'Highest Price' },
												]}
											/>
										</div>
										<Stats />
									</div>
									<Configure hitsPerPage={16} />
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
		)
	}
}
