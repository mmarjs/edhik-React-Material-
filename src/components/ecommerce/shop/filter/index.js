/**
 * Filters Component
 */
/* eslint-disable */
import React from 'react';
import {
   RefinementList,
   RatingMenu,
   NumericMenu,
   Panel,
   ClearRefinements,
   RangeInput,
   SearchBox
} from 'react-instantsearch-dom';

//global Component
import RctCard from '../../../global/rct-card'

export default function Filters() {
   return (
      <div className="filters-wrapper">
         <RctCard>
            <SearchBox
               translations={{ placeholder: 'Search Products' }}
               showLoadingIndicator
            />
         </RctCard>
         <RctCard>
            <Panel header="Brand">
               <RefinementList
                  attribute="brand"
                  searchable
                  limit={5}
               />
            </Panel>
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
            <Panel header="Category">
               <RefinementList
                  attribute="categories"
                  searchable
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
   )
}
