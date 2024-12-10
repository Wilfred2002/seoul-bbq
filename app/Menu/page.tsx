import Nav from "../components/Nav";
import Footer from "../components/Footer";

type MenuItem = {
    name: string;
    description?: string; // Optional description
  };
  
  // Top section data with updated categories (Beef, Pork, Chicken, Seafood, Vegetables, Sides)
  const menuDataTop: Record<string, MenuItem[]> = {
    Beef: [
      { name: "BEEF BULGOGI (불고기)", description: "Marinated beef slices in a savory sauce." },
      { name: "SPICY BEEF BULGOGI (매운 불고기)", description: "Spicy marinated beef slices with bold flavors." },
      { name: "SEOUL SHORT RIB (서울 갈비)", description: "Non-marinated bone-in short rib." },
      { name: "PREMIUM RIBEYE STEAK (프리미엄 립아이 스테이크)", description: "Tender, high-quality ribeye steak." },
      { name: "FINGER RIBS (핑거 립)", description: "Juicy, flavorful rib cuts for grilling." },
      { name: "SEOUL STEAK (서울 스테이크)", description: "Traditional marinated Korean steak." },
      { name: "PRIME BRISKET (프라임 브리스킷)", description: "Premium cut of brisket, great for grilling." },
      { name: "SLICED BEEF BELLY (얇게 썬 소고기 배)", description: "Thinly sliced beef belly for grilling." },
      { name: "SLICED EYE ROUND STEAK (얇게 썬 눈 스테이크)", description: "Lean and tender steak slices." },
      { name: "NEW YORK STRIP STEAK (뉴욕 스트립 스테이크)", description: "Classic cut of steak with great marbling." },
      { name: "ANGUS CHUCK FLAP TAIL (앵거스 척 플랩 테일)", description: "Richly marbled and flavorful Angus cut." },
      { name: "BEEF TONGUE (소 혀)", description: "Thinly sliced, tender beef tongue." },
    ],
    Pork: [
      { name: "SEOUL PORK BELLY (서울 삼겹살)", description: "Thick, juicy slices of pork belly." },
      { name: "SPICY PORK BULGOGI (매운 돼지 불고기)", description: "Pork marinated in a spicy, sweet sauce." },
      { name: "PORK BELLY (삼겹살)", description: "Classic pork belly slices for grilling." },
      { name: "SPICY PORK BELLY (매운 삼겹살)", description: "Pork belly slices with a spicy kick." },
      { name: "SMOKED GARLIC PORK BELLY (훈제 마늘 삼겹살)", description: "Pork belly infused with smoky garlic flavors." },
      { name: "SIGNATURE PORK CHEEK (돼지 뺨살)", description: "Tender and juicy pork cheek cuts." },
      { name: "SLICED PORK BELLY (얇게 썬 삼겹살)", description: "Thinly sliced pork belly for grilling or hotpot." },
    ],
    Chicken: [
      { name: "GARLIC CHICKEN (마늘 치킨)", description: "Chicken marinated in savory garlic sauce." },
      { name: "CHICKEN BULGOGI (닭 불고기)", description: "Marinated chicken with sweet and savory flavors." },
      { name: "SPICY CHICKEN BULGOGI (매운 닭 불고기)", description: "Chicken marinated in a spicy bulgogi sauce." },
      { name: "KING POT CHICKEN (왕 냄비 치킨)", description: "Tender chicken cooked in a flavorful pot." },
    ],
    Seafood: [
      { name: "FRESH SALMON (생 연어)", description: "Freshly sliced salmon for grilling or sashimi." },
      { name: "GARLIC SHRIMP (마늘 새우)", description: "Juicy shrimp sautéed with garlic." },
      { name: "SPICY CALAMARI (매운 오징어)", description: "Squid marinated in a spicy, tangy sauce." },
      { name: "SPICY SALMON (매운 연어)", description: "Fresh salmon with a spicy marinade." },
      { name: "JUMBO SHRIMP (점보 새우)", description: "Large shrimp, perfect for grilling or steaming." },
      { name: "SPICY BABY OCTOPUS (매운 주꾸미)", description: "Baby octopus marinated in spicy sauce." },
      { name: "MUSSELS (홍합)", description: "Fresh, flavorful mussels for soups or grilling." },
      { name: "SPICY FISH FILLET (매운 생선 필레)", description: "Tender fish fillet with spicy seasoning." },
      { name: "FRESH OYSTER (신선한 굴)", description: "Plump, juicy oysters served fresh." },
      { name: "SCALLOP (가리비)", description: "Delicate, tender scallops for grilling or steaming." },
    ],
    Vegetables: [
      { name: "BROCCOLI (브로콜리)", description: "Fresh, steamed or grilled broccoli florets." },
      { name: "EGGPLANT (가지)", description: "Tender and flavorful slices of eggplant." },
      { name: "SLICED PUMPKINS (호박 조각)", description: "Sweet pumpkin slices, perfect for grilling." },
      { name: "ONIONS (양파)", description: "Freshly sliced onions, great for grilling." },
      { name: "GARLIC (마늘)", description: "Whole garlic cloves, grilled to perfection." },
      { name: "BEECH MUSHROOM (느타리버섯)", description: "Earthy, tender beech mushrooms." },
      { name: "KING OYSTER MUSHROOM (새송이 버섯)", description: "Thick, meaty mushrooms with a mild flavor." },
      { name: "PINEAPPLE (파인애플)", description: "Sweet, juicy pineapple slices for grilling." },
      { name: "POTATO (감자)", description: "Sliced and grilled potato with a crispy finish." },
      { name: "ZUCCHINI (애호박)", description: "Fresh zucchini slices, lightly grilled." },
      { name: "PEPPER (피망)", description: "Colorful, grilled bell peppers." },
      { name: "FRESH CORN (옥수수)", description: "Grilled corn on the cob, sweet and smoky." },
      { name: "GREEN LEAF LETTUCE (상추)", description: "Crisp and fresh lettuce leaves for wraps." },
      { name: "SWEET POTATO (고구마)", description: "Sweet and tender grilled sweet potato slices." },
    ],
    Sides: [
      { name: "WHITE RICE (흰쌀밥)", description: "Steamed white rice, light and fluffy." },
      { name: "FRIED RICE (볶음밥)", description: "Fried rice with savory seasonings and vegetables." },
      { name: "SPAM (스팸)", description: "Pan-fried slices of savory Spam." },
      { name: "MINI SAUSAGES (미니 소시지)", description: "Juicy and flavorful mini sausages." },
    ],
  };
  

// Updated bottom section data (Hotpot Menu)
const menuDataBottom: Record<string, MenuItem[]> = {
    "Soup Base": [
      { name: "THAI TOM YUM (SPICY) (태국 톰얌)", description: "A tangy, spicy soup base with Thai flavors." },
      { name: "SZECHUAN SPICY (SPICY) (사천 매운맛)", description: "Bold, spicy Szechuan-style soup base." },
      { name: "KOREAN KIMCHI (SPICY) (한국 김치)", description: "Traditional spicy kimchi soup base." },
      { name: "SZECHUAN PEPPERCORN (SPICY) (사천 산초)", description: "Numbing peppercorn-infused spicy soup." },
      { name: "TOMATO SOUP (VEGE) (토마토 수프)", description: "Rich, hearty tomato-based vegetarian soup." },
      { name: "HEALTHY HERBS (건강한 허브)", description: "Light soup infused with a blend of herbs." },
      { name: "MUSHROOM SOUP (VEGE) (버섯 수프)", description: "Earthy mushroom soup for vegetarians." },
      { name: "JAPANESE MISO (일본 된장국)", description: "Classic Japanese miso soup base." },
    ],
    "Sliced Meat": [
      { name: "SLICED CHICKEN (얇게 썬 닭고기)", description: "Thinly sliced chicken, perfect for hotpot." },
      { name: "SLICED PORK (얇게 썬 돼지고기)", description: "Tender slices of pork for cooking." },
      { name: "SLICED PORK BELLY (얇게 썬 삼겹살)", description: "Rich and flavorful pork belly slices." },
      { name: "SLICED BEEF BELLY (얇게 썬 소고기 배)", description: "Marbled and tender beef belly cuts." },
      { name: "PRIME BRISKET (프라임 브리스킷)", description: "High-quality brisket slices for grilling." },
      { name: "SLICED LAMB (얇게 썬 양고기)", description: "Delicately sliced lamb for hotpot or grilling." },
      { name: "SLICED RIBEYE (얇게 썬 립아이)", description: "Juicy ribeye slices with rich marbling." },
      { name: "BEEF TONGUE (소 혀)", description: "Thinly sliced, tender beef tongue." },
      { name: "SLICED EYE ROUND STEAK (얇게 썬 눈 스테이크)", description: "Lean, tender steak for cooking." },
    ],
    "Meat/Sides": [
      { name: "CRAB MEAT (게살)", description: "Fresh, flavorful crab meat." },
      { name: "SPAM (스팸)", description: "Savory slices of pan-fried Spam." },
      { name: "MINI SAUSAGES (미니 소시지)", description: "Juicy and flavorful mini sausages." },
      { name: "LOBSTER BALLS (랍스터 볼)", description: "Chewy lobster-flavored meatballs." },
      { name: "FISH MEATBALLS (생선 미트볼)", description: "Tender meatballs made with fresh fish." },
      { name: "BEEF MEATBALLS (소고기 미트볼)", description: "Juicy beef meatballs for hotpot." },
      { name: "FISH ROE BALLS (생선알 볼)", description: "Fish roe-filled meatballs." },
      { name: "CATTLE TRIPE (소 양)", description: "Tender slices of beef tripe." },
      { name: "BEEF TRIPE (소 내장)", description: "Flavorful beef tripe for cooking." },
      { name: "PORK AORTA (돼지 대동맥)", description: "Crunchy and tender pork aorta slices." },
      { name: "TRIPE (내장)", description: "Classic beef tripe slices for grilling." },
      { name: "CUTTLEFISH BALLS (오징어 볼)", description: "Chewy and flavorful cuttlefish balls." },
      { name: "QUAIL EGGS (메추리알)", description: "Soft, tender quail eggs." },
      { name: "FISH CAKE (어묵)", description: "Savory fish cakes for hotpot." },
      { name: "TEMPURA (튀김)", description: "Crispy and light tempura pieces." },
      { name: "SHRIMP DUMPLINGS (새우 만두)", description: "Juicy shrimp-filled dumplings." },
    ],
    Seafood: [
      { name: "PEELED SHRIMP (껍질 벗긴 새우)", description: "Freshly peeled shrimp, ready for cooking." },
      { name: "HEAD-ON JUMBO SHRIMP (머리가 붙어 있는 점보 새우)", description: "Large shrimp, perfect for grilling or steaming." },
      { name: "SQUID (오징어)", description: "Tender squid rings for hotpot." },
      { name: "SWAI FISH (스와이 생선)", description: "Mild, tender swai fish fillet." },
      { name: "BABY OCTOPUS (주꾸미)", description: "Marinated baby octopus with a chewy texture." },
      { name: "CLAM (조개)", description: "Fresh clams for soups or steaming." },
      { name: "MUSSEL (홍합)", description: "Juicy, tender mussels for cooking." },
      { name: "WHITE CLAM (백조개)", description: "Delicate white clams with a mild flavor." },
      { name: "BLUE CRAB (꽃게)", description: "Sweet and flavorful blue crab." },
      { name: "CRAWFISH (가재)", description: "Juicy crawfish for boiling or steaming." },
      { name: "FRESH OYSTER (신선한 굴)", description: "Plump, fresh oysters for steaming or raw dishes." },
    ],
    Vegetables: [
      { name: "SPINACH (시금치)", description: "Fresh spinach, perfect for soups." },
      { name: "CROWN DAISY (쑥갓)", description: "Aromatic and tender crown daisy leaves." },
      { name: "WATERCRESS (물냉이)", description: "Crunchy and peppery watercress leaves." },
      { name: "GREEN LEAF LETTUCE (상추)", description: "Crisp lettuce leaves for wraps." },
      { name: "BROCCOLI (브로콜리)", description: "Fresh, steamed or grilled broccoli florets." },
      { name: "BOK CHOY (청경채)", description: "Tender and sweet baby bok choy." },
      { name: "NAPA (배추)", description: "Light and crunchy napa cabbage." },
      { name: "MUNG BEAN SPROUTS (숙주나물)", description: "Crunchy bean sprouts for soups or stir-fries." },
      { name: "SLICED PUMPKINS (호박 조각)", description: "Sweet pumpkin slices, perfect for grilling." },
      { name: "DAIKON (무)", description: "Mild and crisp daikon radish slices." },
      { name: "FRIED TARO (튀긴 타로)", description: "Crispy, tender taro pieces." },
      { name: "EGGPLANT (가지)", description: "Tender and flavorful slices of eggplant." },
      { name: "BABY BAMBOO SHOOT (어린 죽순)", description: "Crispy, tender bamboo shoot slices." },
      { name: "FRESH CORN (옥수수)", description: "Sweet, grilled corn on the cob." },
      { name: "KING MUSHROOM (새송이 버섯)", description: "Thick, meaty mushrooms with a mild flavor." },
      { name: "SHIITAKE MUSHROOM (표고버섯)", description: "Earthy and flavorful shiitake mushrooms." },
      { name: "BEECH MUSHROOM (느타리버섯)", description: "Tender beech mushrooms with a nutty flavor." },
      { name: "ENOKI MUSHROOM (팽이버섯)", description: "Delicate and crunchy enoki mushrooms." },
      { name: "BLACK FUNGUS (목이버섯)", description: "Chewy and flavorful black fungus mushrooms." },
      { name: "SEAWEED KNOTS (미역 매듭)", description: "Crunchy and flavorful seaweed knots." },
      { name: "ZUCCHINI (애호박)", description: "Fresh zucchini slices, lightly grilled." },
      { name: "POTATO (감자)", description: "Sliced and grilled potato with a crispy finish." },
      { name: "FRESH OYSTER MUSHROOM (신선한 느타리버섯)", description: "Tender and mild oyster mushrooms." },
      { name: "LOTUS ROOT (연근)", description: "Crunchy and mildly sweet lotus root slices." },
    ],
    Soybean: [
      { name: "BEAN CURD STICK (두부말이)", description: "Soft and flavorful bean curd sticks." },
      { name: "FRIED TOFU (튀긴 두부)", description: "Crispy fried tofu, great for soups." },
      { name: "SOFT TOFU (부드러운 두부)", description: "Silky smooth tofu for hotpot." },
      { name: "FRIED TOFU SKIN (튀긴 두부 껍질)", description: "Crispy, golden tofu skin slices." },
    ],
    "Noodles/Rice": [
      { name: "WHITE RICE (흰쌀밥)", description: "Steamed white rice, light and fluffy." },
      { name: "FRIED RICE (볶음밥)", description: "Savory fried rice with vegetables and seasonings." },
      { name: "VERMICELLI (당면)", description: "Thin, light rice noodles." },
      { name: "RAMEN NOODLE (라면)", description: "Chewy ramen noodles, perfect for soups." },
      { name: "RICE CAKE (떡)", description: "Soft and chewy rice cake slices." },
    ],
    Appetizer: [
      { name: "SEAFOOD PANCAKE (해물파전)", description: "Savory pancake filled with fresh seafood." },
      { name: "TAKOYAKI (타코야키)", description: "Crispy and tender octopus balls." },
      { name: "EDAMAME (에다마메)", description: "Steamed and salted edamame beans." },
      { name: "PORK GYOZA (돼지고기 교자)", description: "Pan-fried pork dumplings." },
      { name: "JAPCHAE (잡채)", description: "Korean sweet potato noodles with vegetables." },
      { name: "SEAWEED SALAD (해초 샐러드)", description: "Refreshing seaweed salad with sesame dressing." },
    ],
  };
  


  export default function Menu() {
    return (
      <div className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Nav />
        {/* Wrapper with padding */}
        <div className="flex flex-grow justify-center items-center py-24">
          {/* Larger Flexbox Container with light gray background */}
          <div className="flex flex-col md:flex-row bg-orange-200 p-8 gap-16 w-2/3">
            {/* Left Flexbox for menuDataTop and Drinks */}
            <div className="flex flex-col justify-start items-start border-[6px] border-black flex-1 h-[3470px] p-6">
              <div className="w-full flex justify-center">
                <h1 className="text-3xl font-bold mb-8">BBQ</h1>
              </div>
              {Object.keys(menuDataTop).map((category) => (
                <div key={category}>
                  <h1 className="text-2xl font-bold mt-6 mb-4">{category}</h1>
                  <hr className="my-4 border-black border-2 w-4/5" />
                  <ul className="list-none space-y-2">
                    {menuDataTop[category].map((item) => (
                      <li key={item.name}>
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        {item.description && (
                          <p className="text-sm text-gray-600">{item.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
  
              {/* Drinks Section Inside the Left Flexbox */}
              <div className="mt-8 border-[6px] border-black p-6 bg-black text-white w-full ">
                <h1 className="text-2xl font-bold mb-4">DRINKS</h1>
                <hr className="my-4 border-white border-2 w-4/5" />
                <ul className="list-none space-y-2">
                  <li>
                    <h2 className="text-lg font-semibold">Coke</h2>
                    <p className="text-sm text-gray-300">Chilled Coca-Cola soft drink.</p>
                  </li>
                  <li>
                    <h2 className="text-lg font-semibold">Sprite</h2>
                    <p className="text-sm text-gray-300">Chilled lemon-lime flavored soda.</p>
                  </li>
                  <li>
                    <h2 className="text-lg font-semibold">Iced Tea</h2>
                    <p className="text-sm text-gray-300">Refreshing iced tea served cold.</p>
                  </li>
                  <li>
                    <h2 className="text-lg font-semibold">Water</h2>
                    <p className="text-sm text-gray-300">Bottled still water.</p>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Right Flexbox for menuDataBottom */}
            <div className="flex flex-col justify-start items-start bg-red-800 flex-1 p-6 text-white">
              <div className="w-full flex justify-center">
                <h1 className="text-3xl font-bold mb-8">HOTPOT</h1>
              </div>
              {Object.keys(menuDataBottom).map((category) => (
                <div key={category}>
                  <h2 className="text-2xl font-bold mt-6 mb-4">{category}</h2>
                  <hr className="my-4 border-white border-2 w-4/5" />
                  <ul className="list-none space-y-2">
                    {menuDataBottom[category].map((item) => (
                      <li key={item.name}>
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        {item.description && (
                          <p className="text-sm text-gray-300">{item.description}</p>
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
  