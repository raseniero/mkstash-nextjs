import { fetchInventory } from './inventoryProvider'
import { inventoryByCategory } from './inventoryByCategory'

async function inventoryForCategory (category) {
  const inventory = await fetchInventory()
  const byCategory = inventoryByCategory(inventory)
  console.log("inventoryForCategory.byCategory=")
  console.log(byCategory)
  console.log("inventoryForCategory.category=")
  console.log(category)
  console.log("inventoryForCategory.byCategory[category]=")
  console.log(category.charAt(0).toUpperCase() + category.slice(1))
  console.log(byCategory[category.charAt(0).toUpperCase() + category.slice(1)])
  return byCategory[category.charAt(0).toUpperCase() + category.slice(1)].items
}

export default inventoryForCategory