export function filterData(searchText, allRestaurants) {
  const lowerCaseSearchText = searchText.toLowerCase();
  return allRestaurants.filter((restaurant) => {
    const restaurantName = restaurant?.info.name.toLowerCase();
    return restaurantName.includes(lowerCaseSearchText);
  });
}
