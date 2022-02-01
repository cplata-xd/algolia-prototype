import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import {
	InstantSearch,
	Hits,
	SearchBox,
	Pagination,
	ClearRefinements,
	RefinementList,
	Configure,
} from 'react-instantsearch-dom';
import Hit from './Hit';
import './App.css';

const searchClient = algoliasearch(
	'B1G2GM9NG0',
	'aadef574be1f9252bb48d4ea09b5cfe5'
);

const App = () => {
	return (
		<div className="ais-InstantSearch">
			<h1>Algolia Search demo</h1>
			<InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
				<div className="left-panel">
					<ClearRefinements />
					<h2>Brands</h2>
					<RefinementList attribute="brand" />
					<Configure hitsPerPage={8} />
				</div>
				<div className="right-panel">
					<SearchBox />
					<Hits hitComponent={Hit} />
					<Pagination />
				</div>
			</InstantSearch>
		</div>
	);
}

export default App;
