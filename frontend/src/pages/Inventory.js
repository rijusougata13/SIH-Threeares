import React from 'react';
import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@mui/material'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import InventoryTransport from 'src/components/Inventory/Transport';
import MaterialInventory from 'src/components/Inventory/Material';
import EquipmentInventory from 'src/components/Inventory/Equipment';
import ResponsiveAppBar from 'src/components/ResponsiveAppBar';

import TransportGHG from 'src/components/Inventory/TansportGHG';
import MaterialGHG from 'src/components/Inventory/MaterialGHG';
import EquipmentGHG from 'src/components/Inventory/EquipmentGHG';
import SplitSection from 'src/components/SplitSection';

const Inventory = () => {
    return (
        <div>
            <div className='appbar'>
                <CssBaseline />
                <ResponsiveAppBar />
            </div>

            <div className='main-container'>
                <TransportGHG
                    heading="Transport GHG Estimator"
                    description="The ERA Equipment CO2 Calculator is a tool to estimate the carbon footprint of construction equipment over its entire life cycle. It is applicable to all types of construction equipment, from mini excavators to wheel loaders and from generators to boom lifts (only hand tools are excluded). The calculator estimates the carbon footprint of a piece of equipment per hour of use. Expressing the results per hour of (active) use enables comparisons across different types of equipment and over a wide range of ownership scenarios. The ERA Equipment CO2 Calculator can be used to evaluate a single ownership period of a piece of equipment. The calculator’s results can for instance be used to: Investigate which part of the life cycle has the largest contribution to the carbon footprint of equipment; Compare different equipment use scenarios; Study the effects of changes to a baseline use scenario, such as measures to reduce the footprint; Evaluate the effects of alternative fuel consumption."
                    image="https://www.construction.mtu.edu/cass_reports/webpage/image/method.png"
                // height="400px"
                />

                <MaterialGHG
                    heading="Material GHG Estimator"
                    description="With increasing urbanization and living standards of people in India, there is certainty that there will be a substantial increase in human activities such as transportation infrastructure development, and associated rise in energy demand. Thus, it is imperative that the technical knowhow regarding carbon emissions due to roadway infrastructure is advanced further to accomplish a sustainable environment. Thus, the objective of this research study was to develop a toolkit termed “Carbon Footprint Calculator” to quantify the carbon footprints of the different pavement systems used in highway construction. The tool developed as part of the study incorporated the major contributors of Greenhouse Gas (GHG) emissions including: pavement design aspects; material production and transportation from source to site; construction practices used in the various pavement systems and the expected vehicular operations during the pavement design life. A mathematical model to estimate the overall amount of GHG emissions in terms of total kgCO2 equivalent (kgCO2e) was also developed as a part of this study. In this study, the evaluation of GHGs in terms of carbon footprints for the different pavement systems used in Indian roadway construction was approached from a life cycle assessment perspective. It is envisioned that this tool could be well-utilized by design engineers to optimize pavement design methodology and construction practices in respect of creating a greener sustainable environment."
                    image="https://www.construction.mtu.edu/cass_reports/webpage/image/method.png"
                />

                <EquipmentGHG
                    heading="Equipment GHG Estimator"
                    description="The ERA Equipment CO2 Calculator is a tool to estimate the carbon footprint of construction equipment over its entire life cycle. It is applicable to all types of construction equipment, from mini excavators to wheel loaders and from generators to boom lifts (only hand tools are excluded). The calculator estimates the carbon footprint of a piece of equipment per hour of use. Expressing the results per hour of (active) use enables comparisons across different types of equipment and over a wide range of ownership scenarios. The ERA Equipment CO2 Calculator can be used to evaluate a single ownership period of a piece of equipment. The calculator’s results can for instance be used to: Investigate which part of the life cycle has the largest contribution to the carbon footprint of equipment; Compare different equipment use scenarios; Study the effects of changes to a baseline use scenario, such as measures to reduce the footprint; Evaluate the effects of alternative fuel consumption."
                    image="https://www.construction.mtu.edu/cass_reports/webpage/image/method.png"
                />

            </div>
        </div>
    )
}

export default Inventory;
