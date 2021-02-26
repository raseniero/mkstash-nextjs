import { fetchInventory } from './inventoryProvider'
//import inventory from './inventory'

async function fetchCategories () {
  const inventory = await fetchInventory()
  const categories = inventory.reduce((acc, next) => {
    next.categories.map(category => {
      if (acc.includes(category)) return
      acc.push(category)
    })
    return acc
  }, [])

  //console.log("categoryProvider.categories=")
  //console.log(categories)

  return Promise.resolve(categories)
}

export default fetchCategories