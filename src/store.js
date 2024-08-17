import { createStore } from 'redux';

const initialState = {
  categories: require('./data.json').categories,
};

function dashboardReducer(state = initialState, action) {
  console.log(state.categories, action.payload);
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id == action.payload.selectedCategory
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId),
              }
            : category
        ),
      };

      case 'UPDATE_WIDGET':
        return {
          ...state,
          categories: action.payload.categories
        }
    default:
      return state;
  }
}

// Create Store
const store = createStore(dashboardReducer);

export default store;