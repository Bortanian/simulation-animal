import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import AllAnimals from './components/AllAnimals/AllAnimals'
import Checkout from './components/Checkout/Checkout'
import Details from './components/Details/Details'
import Edit from './components/Edit/Edit'
import PastOrders from './components/PastOrders/PastOrders'
import AddPet from './components/AddPet/AddPet'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/animals' component={AllAnimals}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/details' component={Details}/>
        <Route path='/add' component={AddPet}/>
        <Route path='/edit' component={Edit}/>
        <Route path='/past' component={PastOrders}/>
    </Switch>
)
