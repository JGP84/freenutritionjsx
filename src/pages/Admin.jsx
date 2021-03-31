import React from 'react'
import Menu from '../authentication-firebase/Menu'
import InputFood from '../components/admin_components/InputFood'
import ListFoods from '../components/admin_components/ListFoods'

const Admin = () => {
    return (
        <div>
            <Menu />
            <InputFood />
            <ListFoods />
        </div>
    )
}

export default Admin
