import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Breed} from "../modules/breed";
import {BREED_FEATURE_KEY, BreedState} from "./breed.state"

export const getBreedsState = createFeatureSelector<BreedState>(BREED_FEATURE_KEY);

export const getBreedsLoaded = createSelector(
    getBreedsState,
    (state: BreedState) => state && state.loaded
);
//
// export const getBreedsError = createSelector(
//     getBreedsState,
//     (state: BreedState) => state.error
// );

export const getAllBreeds = createSelector(
    getBreedsState,
    (state: BreedState) => state.breeds
);

export const getSearchValue = createSelector(
    getBreedsState,
    (state: BreedState) => state.search
);

export const getSelectedOptions = createSelector(
    getBreedsState,
    (state: BreedState) => state.selectedCategories
);

const getAllCategories = createSelector(
    getAllBreeds,
    (breedList: Breed[]) => breedList.map(item => item.breed_group)
);

export const getUniqueCategories = createSelector(
    getAllCategories,
    (categoryList: string[]) => [...new Set(categoryList)].filter((category: string) => !!category)
);

export const filteredCategories = createSelector(
    getUniqueCategories,
    getSelectedOptions,
    (optionsList: string[], selectedCategoryList: string[]) => optionsList.filter(category => !selectedCategoryList.includes(category))
);

export const getFilteredBreeds = createSelector(
    getAllBreeds,
    getSearchValue,
    getSelectedOptions,
    (breedList: Breed[], searchValue: string, selectedCategoryList: string[]) =>
        breedList.filter(item => (
            selectedCategoryList.length > 0 ?
                selectedCategoryList.includes(item.breed_group) && item.name.toLowerCase().includes(searchValue.toLowerCase()) :
                item.name.toLowerCase().includes(searchValue.toLowerCase())
        ))
);






