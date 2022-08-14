import React from 'react';
import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import InventoryTransport from 'src/components/Inventory/Transport';
import MaterialInventory from 'src/components/Inventory/Material';
import EquipmentInventory from 'src/components/Inventory/Equipment';

const Inventory = () => {
    return (
        <div>
            <div className='appbar'>
                <CssBaseline />
                <AppBar position="relative" color="default" >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            THREEARES
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='main-container'>
                <InventoryTransport/>
                <MaterialInventory/>
                <EquipmentInventory/>
           </div>
        </div>
    )
}

export default Inventory;
