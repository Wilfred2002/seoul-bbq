import Nav from "../components/Nav";
import Footer from "../components/Footer";

type MenuItem = {
    name: string;
    description?: string; // Optional description
  };
  
  // Top section data with updated categories (Beef, Pork, Chicken, Seafood, Vegetables, Sides)
  const menuDataTop: Record<string, MenuItem[]> = {
    Beef: [
      { name: "BEEF BULGOGI", description: "Marinated beef slices in a savory sauce." },
      { name: "SPICY BEEF BULGOGI", description: "Spicy marinated beef slices with bold flavors." },
      { name: "SEOUL SHORT RIB", description: "Non-marinated bone-in short rib." },
      { name: "PREMIUM RIBEYE STEAK", description: "Tender, high-quality ribeye steak." },
      { name: "FINGER RIBS", description: "Juicy, flavorful rib cuts for grilling." },
      { name: "SEOUL STEAK", description: "Traditional marinated Korean steak." },
      { name: "PRIME BRISKET", description: "Premium cut of brisket, great for grilling." },
      { name: "SLICED BEEF BELLY", description: "Thinly sliced beef belly for grilling." },
      { name: "SLICED EYE ROUND STEAK", description: "Lean and tender steak slices." },
      { name: "NEW YORK STRIP STEAK", description: "Classic cut of steak with great marbling." },
      { name: "ANGUS CHUCK FLAP TAIL", description: "Richly marbled and flavorful Angus cut." },
      { name: "BEEF TONGUE", description: "Thinly sliced, tender beef tongue." },
    ],
    Pork: [
      { name: "SEOUL PORK BELLY", description: "Thick, juicy slices of pork belly." },
      { name: "SPICY PORK BULGOGI", description: "Pork marinated in a spicy, sweet sauce." },
      { name: "PORK BELLY", description: "Classic pork belly slices for grilling." },
      { name: "SPICY PORK BELLY", description: "Pork belly slices with a spicy kick." },
      { name: "SMOKED GARLIC PORK BELLY", description: "Pork belly infused with smoky garlic flavors." },
      { name: "SIGNATURE PORK CHEEK", description: "Tender and juicy pork cheek cuts." },
      { name: "SLICED PORK BELLY", description: "Thinly sliced pork belly for grilling or hotpot." },
    ],
    Chicken: [
      { name: "GARLIC CHICKEN", description: "Chicken marinated in savory garlic sauce." },
      { name: "CHICKEN BULGOGI", description: "Marinated chicken with sweet and savory flavors." },
      { name: "SPICY CHICKEN BULGOGI", description: "Chicken marinated in a spicy bulgogi sauce." },
      { name: "KING POT CHICKEN", description: "Tender chicken cooked in a flavorful pot." },
    ],
    Seafood: [
      { name: "FRESH SALMON", description: "Freshly sliced salmon for grilling or sashimi." },
      { name: "GARLIC SHRIMP", description: "Juicy shrimp sautéed with garlic." },
      { name: "SPICY CALAMARI", description: "Squid marinated in a spicy, tangy sauce." },
      { name: "SPICY SALMON", description: "Fresh salmon with a spicy marinade." },
      { name: "JUMBO SHRIMP", description: "Large shrimp, perfect for grilling or steaming." },
      { name: "SPICY BABY OCTOPUS", description: "Baby octopus marinated in spicy sauce." },
      { name: "MUSSELS", description: "Fresh, flavorful mussels for soups or grilling." },
      { name: "SPICY FISH FILLET", description: "Tender fish fillet with spicy seasoning." },
      { name: "FRESH OYSTER", description: "Plump, juicy oysters served fresh." },
      { name: "SCALLOP", description: "Delicate, tender scallops for grilling or steaming." },
    ],
    Vegetables: [
      { name: "BROCCOLI", description: "Fresh, steamed or grilled broccoli florets." },
      { name: "EGGPLANT", description: "Tender and flavorful slices of eggplant." },
      { name: "SLICED PUMPKINS", description: "Sweet pumpkin slices, perfect for grilling." },
      { name: "ONIONS", description: "Freshly sliced onions, great for grilling." },
      { name: "GARLIC", description: "Whole garlic cloves, grilled to perfection." },
      { name: "BEECH MUSHROOM", description: "Earthy, tender beech mushrooms." },
      { name: "KING OYSTER MUSHROOM", description: "Thick, meaty mushrooms with a mild flavor." },
      { name: "PINEAPPLE", description: "Sweet, juicy pineapple slices for grilling." },
      { name: "POTATO", description: "Sliced and grilled potato with a crispy finish." },
      { name: "ZUCCHINI", description: "Fresh zucchini slices, lightly grilled." },
      { name: "PEPPER", description: "Colorful, grilled bell peppers." },
      { name: "FRESH CORN", description: "Grilled corn on the cob, sweet and smoky." },
      { name: "GREEN LEAF LETTUCE", description: "Crisp and fresh lettuce leaves for wraps." },
      { name: "SWEET POTATO", description: "Sweet and tender grilled sweet potato slices." },
    ],
    Sides: [
      { name: "WHITE RICE", description: "Steamed white rice, light and fluffy." },
      { name: "FRIED RICE", description: "Fried rice with savory seasonings and vegetables." },
      { name: "SPAM", description: "Pan-fried slices of savory Spam." },
      { name: "MINI SAUSAGES", description: "Juicy and flavorful mini sausages." },
    ],
  };

// Updated bottom section data (Hotpot Menu)
const menuDataBottom: Record<string, MenuItem[]> = {
    "Soup Base": [
      { name: "THAI TOM YUM (SPICY)", description: "A tangy, spicy soup base with Thai flavors." },
      { name: "SZECHUAN SPICY (SPICY)", description: "Bold, spicy Szechuan-style soup base." },
      { name: "KOREAN KIMCHI (SPICY)", description: "Traditional spicy kimchi soup base." },
      { name: "SZECHUAN PEPPERCORN (SPICY)", description: "Numbing peppercorn-infused spicy soup." },
      { name: "TOMATO SOUP (VEGE)", description: "Rich, hearty tomato-based vegetarian soup." },
      { name: "HEALTHY HERBS", description: "Light soup infused with a blend of herbs." },
      { name: "MUSHROOM SOUP (VEGE)", description: "Earthy mushroom soup for vegetarians." },
      { name: "JAPANESE MISO", description: "Classic Japanese miso soup base." },
    ],
    "Sliced Meat": [
      { name: "SLICED CHICKEN", description: "Thinly sliced chicken, perfect for hotpot." },
      { name: "SLICED PORK", description: "Tender slices of pork for cooking." },
      { name: "SLICED PORK BELLY", description: "Rich and flavorful pork belly slices." },
      { name: "SLICED BEEF BELLY", description: "Marbled and tender beef belly cuts." },
      { name: "PRIME BRISKET", description: "High-quality brisket slices for grilling." },
      { name: "SLICED LAMB", description: "Delicately sliced lamb for hotpot or grilling." },
      { name: "SLICED RIBEYE", description: "Juicy ribeye slices with rich marbling." },
      { name: "BEEF TONGUE", description: "Thinly sliced, tender beef tongue." },
      { name: "SLICED EYE ROUND STEAK", description: "Lean, tender steak for cooking." },
    ],
    "Meat/Sides": [
      { name: "CRAB MEAT", description: "Fresh, flavorful crab meat." },
      { name: "SPAM", description: "Savory slices of pan-fried Spam." },
      { name: "MINI SAUSAGES", description: "Juicy and flavorful mini sausages." },
      { name: "LOBSTER BALLS", description: "Chewy lobster-flavored meatballs." },
      { name: "FISH MEATBALLS", description: "Tender meatballs made with fresh fish." },
      { name: "BEEF MEATBALLS", description: "Juicy beef meatballs for hotpot." },
      { name: "FISH ROE BALLS", description: "Fish roe-filled meatballs." },
      { name: "CATTLE TRIPE", description: "Tender slices of beef tripe." },
      { name: "BEEF TRIPE", description: "Flavorful beef tripe for cooking." },
      { name: "PORK AORTA", description: "Crunchy and tender pork aorta slices." },
      { name: "TRIPE", description: "Classic beef tripe slices for grilling." },
      { name: "CUTTLEFISH BALLS", description: "Chewy and flavorful cuttlefish balls." },
      { name: "QUAIL EGGS", description: "Soft, tender quail eggs." },
      { name: "FISH CAKE", description: "Savory fish cakes for hotpot." },
      { name: "TEMPURA", description: "Crispy and light tempura pieces." },
      { name: "SHRIMP DUMPLINGS", description: "Juicy shrimp-filled dumplings." },
    ],
    Seafood: [
      { name: "PEELED SHRIMP", description: "Freshly peeled shrimp, ready for cooking." },
      { name: "HEAD-ON JUMBO SHRIMP", description: "Large shrimp, perfect for grilling or steaming." },
      { name: "SQUID", description: "Tender squid rings for hotpot." },
      { name: "SWAI FISH", description: "Mild, tender swai fish fillet." },
      { name: "BABY OCTOPUS", description: "Marinated baby octopus with a chewy texture." },
      { name: "CLAM", description: "Fresh clams for soups or steaming." },
      { name: "MUSSEL", description: "Juicy, tender mussels for cooking." },
      { name: "WHITE CLAM", description: "Delicate white clams with a mild flavor." },
      { name: "BLUE CRAB", description: "Sweet and flavorful blue crab." },
      { name: "CRAWFISH", description: "Juicy crawfish for boiling or steaming." },
      { name: "FRESH OYSTER", description: "Plump, fresh oysters for steaming or raw dishes." },
    ],
    Vegetables: [
      { name: "SPINACH", description: "Fresh spinach, perfect for soups." },
      { name: "CROWN DAISY", description: "Aromatic and tender crown daisy leaves." },
      { name: "WATERCRESS", description: "Crunchy and peppery watercress leaves." },
      { name: "GREEN LEAF LETTUCE", description: "Crisp lettuce leaves for wraps." },
      { name: "BROCCOLI", description: "Fresh, steamed or grilled broccoli florets." },
      { name: "BOK CHOY", description: "Tender and sweet baby bok choy." },
      { name: "NAPA", description: "Light and crunchy napa cabbage." },
      { name: "MUNG BEAN SPROUTS", description: "Crunchy bean sprouts for soups or stir-fries." },
      { name: "SLICED PUMPKINS", description: "Sweet pumpkin slices, perfect for grilling." },
      { name: "DAIKON", description: "Mild and crisp daikon radish slices." },
      { name: "FRIED TARO", description: "Crispy, tender taro pieces." },
      { name: "EGGPLANT", description: "Tender and flavorful slices of eggplant." },
      { name: "BABY BAMBOO SHOOT", description: "Crispy, tender bamboo shoot slices." },
      { name: "FRESH CORN", description: "Sweet, grilled corn on the cob." },
      { name: "KING MUSHROOM", description: "Thick, meaty mushrooms with a mild flavor." },
      { name: "SHIITAKE MUSHROOM", description: "Earthy and flavorful shiitake mushrooms." },
      { name: "BEECH MUSHROOM", description: "Tender beech mushrooms with a nutty flavor." },
      { name: "ENOKI MUSHROOM", description: "Delicate and crunchy enoki mushrooms." },
      { name: "BLACK FUNGUS", description: "Chewy and flavorful black fungus mushrooms." },
      { name: "SEAWEED KNOTS", description: "Crunchy and flavorful seaweed knots." },
      { name: "ZUCCHINI", description: "Fresh zucchini slices, lightly grilled." },
      { name: "POTATO", description: "Sliced and grilled potato with a crispy finish." },
      { name: "FRESH OYSTER MUSHROOM", description: "Tender and mild oyster mushrooms." },
      { name: "LOTUS ROOT", description: "Crunchy and mildly sweet lotus root slices." },
    ],
    Soybean: [
      { name: "BEAN CURD STICK", description: "Soft and flavorful bean curd sticks." },
      { name: "FRIED TOFU", description: "Crispy fried tofu, great for soups." },
      { name: "SOFT TOFU", description: "Silky smooth tofu for hotpot." },
      { name: "FRIED TOFU SKIN", description: "Crispy, golden tofu skin slices." },
    ],
    "Noodles/Rice": [
      { name: "WHITE RICE", description: "Steamed white rice, light and fluffy." },
      { name: "FRIED RICE", description: "Savory fried rice with vegetables and seasonings." },
      { name: "VERMICELLI", description: "Thin, light rice noodles." },
      { name: "RAMEN NOODLE", description: "Chewy ramen noodles, perfect for soups." },
      { name: "RICE CAKE", description: "Soft and chewy rice cake slices." },
    ],
    Appetizer: [
      { name: "SEAFOOD PANCAKE", description: "Savory pancake filled with fresh seafood." },
      { name: "TAKOYAKI", description: "Crispy and tender octopus balls." },
      { name: "EDAMAME", description: "Steamed and salted edamame beans." },
      { name: "PORK GYOZA", description: "Pan-fried pork dumplings." },
      { name: "JAPCHAE", description: "Korean sweet potato noodles with vegetables." },
      { name: "SEAWEED SALAD", description: "Refreshing seaweed salad with sesame dressing." },
    ],
  };

  export default function Menu() {
    return (
      <div className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Nav />
        {/* Wrapper with padding */}
        <div className="flex-grow py-8 md:py-24 px-4 sm:px-6 lg:px-8">
          {/* Larger Flexbox Container with light gray background */}
          <div className="flex flex-col md:flex-row bg-orange-200 p-4 md:p-8 gap-8 md:gap-16 w-full md:w-2/3 mx-auto">
            {/* Left Flexbox for menuDataTop and Drinks */}
            <div className="flex flex-col justify-start items-start border-4 md:border-[6px] border-black flex-1 min-h-0 p-0">
              <div className="w-full p-4 md:p-6">
                <div className="w-full flex justify-center">
                  <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">BBQ</h1>
                </div>
                {Object.keys(menuDataTop).map((category) => (
                  <div key={category} className="w-full">
                    <h1 className="text-xl md:text-2xl font-bold mt-4 md:mt-6 mb-2 md:mb-4">{category}</h1>
                    <hr className="my-2 md:my-4 border-black border-2 w-4/5" />
                    <ul className="list-none space-y-1 md:space-y-2">
                      {menuDataTop[category].map((item) => (
                        <li key={item.name}>
                          <h2 className="text-base md:text-lg font-semibold leading-tight">{item.name}</h2>
                          {item.description && (
                            <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
  
              {/* Drinks Section */}
              <div className="w-full bg-black text-white p-4 md:p-6 mt-4 md:mt-8">
                <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">DRINKS</h1>
                <hr className="my-2 md:my-4 border-white border-2 w-4/5" />
                <ul className="list-none space-y-1 md:space-y-2">
                  <li><h2 className="text-base md:text-lg font-semibold">Water</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Pepsi</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Diet Pepsi</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Iced Tea</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Starry</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Club Soda</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Mountain Dew</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Lemonade</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Strawberry Lemonade</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Ginger Ale</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Root Beer</h2></li>
                  <li><h2 className="text-base md:text-lg font-semibold">Cranberry Juice</h2></li>
                </ul>
              </div>
            </div>
  
            {/* Right Flexbox for menuDataBottom */}
            <div className="flex flex-col justify-start items-start bg-red-800 flex-1 min-h-0 p-4 md:p-6 text-white mt-8 md:mt-0">
              <div className="w-full flex justify-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">HOTPOT</h1>
              </div>
              {Object.keys(menuDataBottom).map((category) => (
                <div key={category} className="w-full">
                  <h2 className="text-xl md:text-2xl font-bold mt-4 md:mt-6 mb-2 md:mb-4">{category}</h2>
                  <hr className="my-2 md:my-4 border-white border-2 w-4/5" />
                  <ul className="list-none space-y-1 md:space-y-2">
                    {menuDataBottom[category].map((item) => (
                      <li key={item.name}>
                        <h2 className="text-base md:text-lg font-semibold leading-tight">{item.name}</h2>
                        {item.description && (
                          <p className="text-xs md:text-sm text-gray-300">{item.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }