import {Provider} from"react-redux"
import { CounterView } from "./CounterView"

import { counterStore } from "./CounterStore"
import { EOView } from "./evenodd/EOView"
import { eoStore } from "./evenodd/EOStore"
import { factStore } from "./factorial/FactStore"
import { FactView } from "./factorial/FactView"
import { PrimeView } from "./primeNum/PrimeView"
import { primeStore } from "./primeNum/PrimeStore"

export default  function ReduxProvider(){
    return(<>
    <Provider store={primeStore}>
        {/* <CounterView/> */}
        {/* <EOView/> */}
        {/* <FactView/> */}
        <PrimeView/>
    </Provider>
    
    </>)
}