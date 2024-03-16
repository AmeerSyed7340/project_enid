import '../styles/Content.css'
import { chefSpecialities } from '../jsFiles/chefSpecialities';
import { appetizers } from '../jsFiles/appetizers';
import { poultry } from '../jsFiles/poultry';
import { beefAndLamb } from '../jsFiles/beefAndLamb';
import { FriedRiceNoodlesChowMein } from '../jsFiles/FriedRiceNoodlesChowMein';
import { seafood } from '../jsFiles/seafood';
import { pork } from '../jsFiles/pork';
import { vegetables } from '../jsFiles/vegetables';
import { thaiSpecials } from '../jsFiles/thaiSpecials';
import { luncheonSpecial } from '../jsFiles/luncheonSpecial';

function Content() {
    return (
        <div className="menu_content" id='main_body'>
            <h3 className='chefSpecialities'>Chef Specialities</h3>
            <ul>
                {chefSpecialities.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className='appetizers'>Appetizers</h3>
            <ul>
                {appetizers.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="poultry">Poultry</h3>
            <ul>
                {poultry.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="beef_and_lamb">Beef and Lamb</h3>
            <ul>
                {beefAndLamb.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="seafood">Seafood</h3>
            <ul>
                {seafood.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="pork">Pork</h3>
            <ul>
                {pork.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="vegetables">Vegetables</h3>
            <ul>
                {vegetables.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="fried_rice_noodles_chow_mein">Fried Rice, Noodles, Chow Mein</h3>
            <ul>
                {FriedRiceNoodlesChowMein.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="thai_specials">Thai Specials</h3>
            <ul>
                {thaiSpecials.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="luncheon_special">Luncheon Special</h3>
            <ul>
                {luncheonSpecial.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Content;