export  function filterData(searchText, allRestaurants) {
  return allRestaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText));
}