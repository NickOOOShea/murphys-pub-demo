'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Utensils, Wine, Coffee } from 'lucide-react'

interface MenuItem {
  name: string
  description?: string
  price: number
}

interface MenuSectionProps {
  foodMenu: {
    starters: MenuItem[]
    mains: MenuItem[]
    sides: MenuItem[]
    desserts: MenuItem[]
  }
  drinksMenu: {
    onTap: Array<{ name: string, sizes: Array<{ size: string, price: number }> }>
    spirits: Array<{ category: string, items: string[] }>
    wine: { red: string[], white: string[] }
  }
  allergenNotice?: string
}

export default function MenuSection({ foodMenu, drinksMenu, allergenNotice }: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food')
  const [foodCategory, setFoodCategory] = useState<'starters' | 'mains' | 'sides' | 'desserts'>('mains')

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-pub-900">
          Our Menu
        </h2>

        {/* Main Tabs: Food / Drinks */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-lg p-2">
            <button
              onClick={() => setActiveTab('food')}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all
                ${activeTab === 'food'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-amber-600'
                }
              `}
            >
              <Utensils size={20} />
              Food
            </button>
            <button
              onClick={() => setActiveTab('drinks')}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all
                ${activeTab === 'drinks'
                  ? 'bg-pub-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-pub-600'
                }
              `}
            >
              <Wine size={20} />
              Drinks
            </button>
          </div>
        </div>

        {/* Food Menu */}
        {activeTab === 'food' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Food Category Tabs */}
            <div className="flex justify-center mb-8 flex-wrap gap-3">
              {(['starters', 'mains', 'sides', 'desserts'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setFoodCategory(category)}
                  className={`
                    px-6 py-2 rounded-full font-medium capitalize transition-all
                    ${foodCategory === category
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-amber-100 border border-gray-200'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Food Items Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {foodMenu[foodCategory].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-pub-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-amber-600">€{item.price.toFixed(2)}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-600">{item.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Drinks Menu */}
        {activeTab === 'drinks' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            {/* On Tap */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-pub-900 mb-6 flex items-center gap-3">
                <Wine className="text-amber-600" size={32} />
                On Tap
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {drinksMenu.onTap.map((drink, index) => (
                  <motion.div
                    key={drink.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center"
                  >
                    <span className="text-lg font-semibold text-pub-900">{drink.name}</span>
                    <span className="text-xl font-bold text-amber-600">
                      €{drink.sizes[0].price.toFixed(2)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Spirits */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-pub-900 mb-6 flex items-center gap-3">
                <Coffee className="text-amber-600" size={32} />
                Spirits
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {drinksMenu.spirits.map((spirit) => (
                  <div key={spirit.category} className="bg-white p-5 rounded-lg shadow-md">
                    <h4 className="font-bold text-pub-800 mb-3 border-b border-gray-200 pb-2">
                      {spirit.category}
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      {spirit.items.map((item) => (
                        <li key={item} className="text-sm">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Wine */}
            <div>
              <h3 className="text-3xl font-bold text-pub-900 mb-6">Wine Selection</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold text-red-700 mb-3">Red Wine</h4>
                  <ul className="space-y-2 text-gray-700">
                    {drinksMenu.wine.red.map((wine) => (
                      <li key={wine} className="text-sm">• {wine}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold text-yellow-700 mb-3">White Wine</h4>
                  <ul className="space-y-2 text-gray-700">
                    {drinksMenu.wine.white.map((wine) => (
                      <li key={wine} className="text-sm">• {wine}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Allergen Notice */}
        {allergenNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center text-sm text-gray-600 italic max-w-2xl mx-auto"
          >
            {allergenNotice}
          </motion.div>
        )}
      </div>
    </section>
  )
}
