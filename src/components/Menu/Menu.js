import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeMainCategory, setActiveMainCategory] = useState('beverages');
  const [activeSubCategory, setActiveSubCategory] = useState('coffee');

  const mainCategories = [
    { id: 'beverages', name: 'Beverages' },
    { id: 'food', name: 'Food' }
  ];

  const subCategories = {
    beverages: [
      { id: 'coffee', name: 'Coffee' },
      { id: 'mocktails', name: 'Mocktails' },
      { id: 'organic-tea', name: 'Organic Tea' },
      { id: 'classic-tea', name: 'Classic Tea' },
      { id: 'milk', name: 'Milk' },
      { id: 'others', name: 'Others' },
      { id: 'addons', name: 'Add Ons' }
    ],
    food: [
      { id: 'main-course', name: 'Main Course' },
      { id: 'light-bites', name: 'Light Bites' },
      { id: 'sweets', name: 'Sweets' },
      { id: 'pastry', name: 'Pastry' },
      { id: 'addons-food', name: 'Add Ons' }
    ]
  };

  const menuItems = {
    coffee: [
      { id: 1, name: 'Black', description: 'Short', price: 20 },
      { id: 2, name: 'Black', description: 'Long', price: 25 },
      { id: 3, name: 'White', description: 'piccolo, cortado, capp, magic,flat white, latte', price: 30 },
      { id: 4, name: 'Spilt Shot', description: '1 short black + 1 white', price: 35 },
      { id: 5,  name: 'Infused Cold Brew', description: 'strawberry or orange', prices: [35, 45] },
      { id: 6, name: 'Cold White', price: 25 },
      { id: 7, name: 'Kopi Susu Kapur', price: 25 },
      { id: 8, name: 'Mocha',description: 'bittersweet and smooth',  prices: [32, 35] },
      { id: 9, name: 'Matcha Espresso Latte', description: 'bittersweet and a bit earthy',prices: [32, 35] },
      { id: 10, name: 'Affogato', price: 25 },
      { id: 11, name: 'Butterscotch Latte', prices: [28, 30] },
      { id: 12, name: 'Caramel Latte', prices: [28, 30] },
      { id: 13, name: 'Vanilla Latte', prices: [28, 30] },
      { id: 14, name: 'Hazelnut Latte', prices: [28, 30] }
    ], 
    mocktails: [
      { id: 1, name: 'Hello Sunshine!', description: 'sweet and sour with fresh aroma', price: 30 },
      { id: 2, name: 'N/Agroni', description: 'complete bittersweet and sour', price: 30 },
      { id: 3, name: 'Earl Grey Sour', description: 'sour with refreshing aroma', price: 30 },
      { id: 4, name: 'Black Martini', description: 'bitter and sour with vanilla aroma', price: 30 },
      { id: 5, name: 'Coconut Margarita', description: 'creamy, sweet and sour', price: 30 }
    ],
    'organic-tea': [
     { id: 1, name: 'Namaste',description: 'strong intake after waking up', price: 30 },
      { id: 2, name: 'Rise & Shine', description: 'shining your day for work', price: 30 },
      { id: 3, name: 'Cold be Gone', description: 'better for reducing flu', price: 30 },
      { id: 4, name: 'Total Body & Mind', description: 'relieving stress for healing', price: 30 },
      { id: 5, name: 'Goodnight Mint', description: 'relaxing to help for a good sleep', price: 30 },
      { id: 6, name: 'Honey Berry Sweet', description: 'chiling up your day', price: 30}
    ],
    'classic-tea': [
      { id: 1, name: 'Bali Breakfast', price: 25 },
      { id: 2, name: 'Royal Earl Grey', price: 25 },
      { id: 3, name: 'Chamomile', price: 25 },
      { id: 4, name: 'Minty Breeze', price: 25 },
    ],
    'milk': [
      { id: 1, name: 'JPN Pure Matcha', description:'bitter and earthy', prices: [35, 38] },
      { id: 2, name: 'Matcha', description: 'bittersweet and milky texture', prices: [30, 32] },
      { id: 3, name: 'Chocolate',description: 'light or mid or dark',prices: [30, 32] },
      { id: 4, name: 'Charcoal', description: 'umami and slightly sweet', prices: [30, 32] },
      { id: 5, name: 'Honey Regal', description: 'milky texture with raw hoeny', price: 30}
    ],
    'others': [
      {id:1, name: 'Mineral Water', price: 7},
      {id:2, name: 'Lychee Tea', price: 25}
    ],
    'addons': [
      { id: 1, name: 'Ice Cream', price: 7 },
      { id: 2, name: 'Oat Milk', price: 10 },
      { id: 3, name: 'Flavoured Syrup', price: 5 },
      { id: 4, name: 'Single Espresso', description: 'for coffee only', price: 5 }
    ],
    'main-course': [
      { id: 1, name: 'Nasi Telur Pontianak', description: 'rice, sunny side up, sweet and salty sauce', price: 25 },
      { id: 2, name: 'Nasi Barendo Saus Kari', description: 'rice and Minang omelette, curry sauce', price: 25 },
      { id: 3, name: 'Nasi Goreng Kampung', description: 'rice, meatball, chicken, egg', price: 25},
      { id: 4, name: 'Nasi Goreng Chili-Oil', description: 'rice, meatball, chicken, egg, chili-oil', price: 25},
      { id: 5, name: 'Nasi Ayam Geprek', description: 'rice, chicken cutlet, sambal bawang', price: 28},
      { id: 6, name: 'Karage Mentai Rice', description: 'rice, chicken karaage and sunny side up', price: 28},
      { id: 7, name: 'Chicken Wings Rice Bowl', description: 'rice and wings w/ honey garlic sauce', price: 33},
      { id: 8, name: 'Gyudon', description: 'rice and US beef slice', price: 33},
      { id: 9, name: 'Creamy Garlic Penne', description: 'penne, parmesan and smoked beef', price: 33},
      { id: 10, name: 'Enoki Beef Rolls', description: 'rice and US beef slice with enoki', price: 38},
      { id: 11, name: 'JPN Curry w/ Chicken Cutlet', description: 'rice, chicken, potato, carrot, curry', price: 43}
    ],
    'light-bites': [
      { id: 1, name: 'Sweet Potato Fries', description: 'sweet and crunchy', price: 20 },
      { id: 2, name: 'French Fries', description: 'crunchy and soft inside', price: 20 },
      { id: 3, name: 'Mix Potato Fries', description: 'sweet potato and french fries', price: 20 },
      { id: 4, name: 'Sausage & Nuggets', description: 'beef cocktail and crispy nugget', price: 20 },
      { id: 5, name: 'Tahu Walik', description: 'tofu with aci - crunchy and chewy', price: 20 },
      { id: 6, name: 'Fried Spring Rolls', description: 'chicken and veggies - crunchy and salty', price: 20 },
      { id: 7, name: 'Cheese Roll Stick', description: 'w/ chocolate or green tea or tiramisu', price: 20 },
      { id: 8, name: 'Onion Rings', description: '(runchy, sweet and salty', price: 20 },
      { id: 9, name: 'Honey Garlic Wings', description: 'chicken wings w/ garlic and honey', price: 38 }
    ],
    'sweets': [
      { id: 1, name: 'Raisin Cookie', description: 'crunchy cookie w/ raisin', price: 12 },
      { id: 2, name: 'Chocolate Chip Cookie', description: 'crunchy cookie w/ chocolate chips', price: 12 },
      { id: 3, name: 'Donut', description: 'icing sugar/choco/green tea/tiramisu/mix', price: 20 },
      { id: 4, name: 'Almond Biscoff Brownie', description: 'choco brownie w/ almond and biscoff', price: 28 },
      { id: 5, name: 'Chocolate Lava Cake', description: 'chocolate w/ soft and melted texture', price: 30 },
      { id: 6, name: 'NY Cheese Cake', description: 'american style - dense, rich and creamy', price: 33 }
    ],
    'pastry': [
      { id: 1, name: 'Butter Croissant', description: 'full french butter', price: 25 },
      { id: 2, name: 'Pain-Au Chocolat', description: 'dark chocolate filled', price: 28 },
      { id: 3, name: 'Cinnamon Roll', description: 'vanilla custard and organic cinnamon', price: 28 },
      { id: 4, name: 'Kouign Amann', description: 'multilayered cake w/ organic castor sugar', price: 28 },
      { id: 5, name: 'Blueberry Pie', description: 'cinnamon, crumble and blueberry filling', price: 28 },
      { id: 6, name: 'Apple Pie', description: 'cinnamon, crumble and apple filling', price: 28 },
      { id: 7, name: 'Beef Sausage Roll', description: 'mozarella, beef salami and tomato sauce', price: 30 }
    ],
    'addons-food': [
      { id: 1, name: 'Telur', price: 5 },
      { id: 2, name: 'Chili-Oil', price: 5 },
      { id: 3, name: 'Saus Mentai', price: 5 },
      { id: 4, name: 'Butter Rice',description: '(for karaage mentai, gyudon and enoki rolls)', price: 5 }
    ]
  };

  return (
    <section className="menu section" id="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        
        <div className="menu-main-categories">
          {mainCategories.map(category => (
            <button
              key={category.id}
              className={`main-category-btn ${activeMainCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setActiveMainCategory(category.id);
                setActiveSubCategory(subCategories[category.id][0].id);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="menu-sub-categories">
          {subCategories[activeMainCategory].map(category => (
            <button
              key={category.id}
              className={`sub-category-btn ${activeSubCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveSubCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="menu-items">
          {menuItems[activeSubCategory].map(item => (
            <div className="menu-item" key={item.id}>
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                {item.description && <p className="item-description">{item.description}</p>}
              </div>
              <div className="item-price">
                {item.prices ? (
                  <div className="multiple-prices">
                    <span>{item.prices[0].toLocaleString()}</span>
                    <span>{item.prices[1].toLocaleString()}</span>
                  </div>
                ) : (
                  `${item.price.toLocaleString()}`
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-disclaimer">
          <p>*All prices are quoted in 000 Rupiah</p>
          <p>*Tax and service charge included</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;