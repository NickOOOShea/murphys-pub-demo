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
    <section className="py-20 bg-wood-950">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">
          Our Menu
        </h2>

        {/* Main Tabs: Food / Drinks */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-wood-900 rounded-xl p-2 border border-wood-800">
            <button
              onClick={() => setActiveTab('food')}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all
                ${activeTab === 'food'
                  ? 'bg-whiskey-600 text-wood-950 shadow-warm'
                  : 'text-paper-200 hover:text-whiskey-400'
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
                  ? 'bg-whiskey-600 text-wood-950 shadow-warm'
                  : 'text-paper-200 hover:text-whiskey-400'
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
            <div className="flex justify-center mb-10 flex-wrap gap-3">
              {(['starters', 'mains', 'sides', 'desserts'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setFoodCategory(category)}
                  className={`
                    px-6 py-2.5 rounded-full font-medium capitalize transition-all
                    ${foodCategory === category
                      ? 'bg-whiskey-600 text-wood-950 shadow-warm'
                      : 'bg-wood-900 text-paper-200 hover:bg-wood-800 border border-wood-700'
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
                  className="card card-hover p-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-cream-300">{item.name}</h3>
                    <span className="text-2xl font-bold text-whiskey-400">€{item.price.toFixed(2)}</span>
                  </div>
                  {item.description && (
                    <p className="text-paper-200">{item.description}</p>
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
              <h3 className="text-3xl font-bold text-cream-300 mb-6 flex items-center gap-3">
                <Wine className="text-whiskey-500" size={32} />
                On Tap
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {drinksMenu.onTap.map((drink, index) => (
                  <motion.div
                    key={drink.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="card p-5 flex justify-between items-center"
                  >
                    <span className="text-lg font-semibold text-cream-300">{drink.name}</span>
                    <span className="text-xl font-bold text-whiskey-400">
                      €{drink.sizes[0].price.toFixed(2)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Spirits */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-cream-300 mb-6 flex items-center gap-3">
                <Coffee className="text-whiskey-500" size={32} />
                Spirits
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {drinksMenu.spirits.map((spirit) => (
                  <div key={spirit.category} className="card p-5">
                    <h4 className="font-bold text-cream-300 mb-3 border-b border-wood-700 pb-2">
                      {spirit.category}
                    </h4>
                    <ul className="space-y-1 text-paper-200">
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
              <h3 className="text-3xl font-bold text-cream-300 mb-6">Wine Selection</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-5">
                  <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    Red Wine
                  </h4>
                  <ul className="space-y-2 text-paper-200">
                    {drinksMenu.wine.red.map((wine) => (
                      <li key={wine} className="text-sm">• {wine}</li>
                    ))}
                  </ul>
                </div>
                <div className="card p-5">
                  <h4 className="font-bold text-amber-300 mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-300"></span>
                    White Wine
                  </h4>
                  <ul className="space-y-2 text-paper-200">
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
            className="mt-12 text-center text-sm text-paper-300 italic max-w-2xl mx-auto"
          >
            {allergenNotice}
          </motion.div>
        )}
      </div>
    </section>
  )
}
