/**
 * header search widget
 */
import React from "react";
import { Highlight, connectAutoComplete } from "react-instantsearch-dom";
import AutoSuggest from "react-autosuggest";

class SearchBoxV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.currentRefinement
    };
  }

  normalizeSuggestionCategories(suggestions) {
    return suggestions.map(suggestion => {
      const context = suggestion.instant_search || {};
      const facets = context.facets || {};
      const matches = facets.exact_matches || {};
      const categories = matches.categories || [];

      return {
        ...suggestion,
        // eslint-disable-next-line
        instant_search: {
          ...context,
          facets: {
            ...facets,
            // eslint-disable-next-line
            exact_matches: {
              ...matches,
              categories
            }
          }
        }
      };
    });
  }

  createMostRelevantSuggestionForAllCategories(suggestion) {
    return {
      ...suggestion,
      // eslint-disable-next-line
      instant_search: {
        ...suggestion.instant_search,
        facets: {
          ...suggestion.instant_search.facets,
          // eslint-disable-next-line
          exact_matches: {
            ...suggestion.instant_search.facets.exact_matches,
            categories: [{ value: "ALL_CATEGORIES" }]
          }
        }
      }
    };
  }

  onChange = (_, { newValue }) => {
    if (!newValue) {
      this.props.onSuggestionCleared();
    }

    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {
    return hit.query;
  }

  renderSuggestion(hit) {
    const [category] = hit.instant_search.facets.exact_matches.categories;

    return (
      <span>
        <Highlight attribute="query" hit={hit} tagName="mark" />
        {category && (
          <i>
            {" "}
            in{" "}
            {category.value === "ALL_CATEGORIES"
              ? "All categories"
              : category.value}
          </i>
        )}
      </span>
    );
  }

  isSuggestionHasCategories(suggestion) {
    return (
      suggestion.instant_search &&
      suggestion.instant_search.facets &&
      suggestion.instant_search.facets.exact_matches &&
      suggestion.instant_search.facets.exact_matches.categories &&
      suggestion.instant_search.facets.exact_matches.categories.length
    );
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: "Search for a product...",
      onChange: this.onChange,
      value
    };

    const suggestions = this.normalizeSuggestionCategories(hits);
    const suggestionsWithAllCategories =
      suggestions[0] && this.isSuggestionHasCategories(suggestions[0])
        ? [this.createMostRelevantSuggestionForAllCategories(suggestions[0])]
        : [];

    return (
      <AutoSuggest
        suggestions={[...suggestionsWithAllCategories, ...suggestions]}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default connectAutoComplete(SearchBoxV2);
