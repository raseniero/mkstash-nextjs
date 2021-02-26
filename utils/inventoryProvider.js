import inventory from './inventory'
import fetchAPI, { getAllInventory } from '../lib/api'

/*
Inventory items should adhere to the following schema:
type Product {
  id: ID!
  categories: [String]!
  price: Float!
  name: String!
  image: String!
  description: String!
  currentInventory: Int!
  brand: String
  sku: ID
}
*/

async function fetchInventory() {
  const inventory = await getAllInventory()

  inventory.map((postData) => {
    const categories = postData.categories
    
    //console.log("inventoryProvider.categories=")
    //console.log(categories)

    const category_temp = []
    categories.map((cat) => {
      //console.log("inventoryProvider.cat.name=" + cat.name)
      category_temp.push(cat.name)
    })

    postData.categories = category_temp
  })

  //console.log("inventoryProvider.inventory=")
  //console.log(inventory)

  return Promise.resolve(inventory)
}

export {
  fetchInventory, inventory as staticInventory
}