const materialDetails=[
        {
            "Div ID": "1",
            "Material Description": "Cement",
            "Unit": "MT/Ton",
            "Published Factor": "0.8420000",
            "Source": "National Renweable Energy Laboratory (Coverted)",
            "category":"1",
        },
        {
            "Div ID": "2",
            "Material Description": "Binder",
            "Unit": "MT/Ton",
            "Published Factor": "0.1570000",
            "Source": "Life Cycle Assessment of Road: A Pilot Study for Inventory Analysis, Stripple, 2001 (Coverted to CO2 Eq) Table 4.2.11.6",
            "category":"2",
        },
        {
            "Div ID": "3",
            "Material Description": "FlyAsh",
            "Unit": "MT/Ton",
            "Published Factor": "0.0178000",
            "Source": "Inventory Data and Case Studies for Environmental Performance Evaluation of Concrete Structure Construction, Journal of Advanced Concrete Technology table 3",
            "category":"3",
        },
        {
            "Div ID": "4",
            "Material Description": "Blast Furnace Slag",
            "Unit": "MT/Ton",
            "Published Factor": "0.0240000",
            "Source": "Inventory Data and Case Studies for Environmental Performance Evaluation of Concrete Structure Construction, Journal of Advanced Concrete Technology table 3"
            ,
            "category":"1",
        },
        {
            "Div ID": "5",
            "Material Description": "Blast Furnace Slag (ACBFS or GGBFS)",
            "Unit": "MT/Ton",
            "Published Factor": "0.0151000",
            "Notes": "Coverted CO2Eq Assumed Coal Power",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Appendix B tables 4 and 6"
            ,"category":"2",
        
        },
        {
            "Div ID": "6",
            "Material Description": "HMA Batch Plant",
            "Unit": "MT/tonne",
            "Published Factor": "0.0286000",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Appendix C table 11 Used Avg (Assumed density of 150lbs/ft^3)"
        },
        {
            "Div ID": "7",
            "Material Description": "Aggregate",
            "Unit": "MT/Ton",
            "Published Factor": "0.0061600",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL TA-1 AppendixD (Used avg )"
        },
        {
            "Div ID": "8",
            "Material Description": "Recycled Asphalt Pavement",
            "Unit": "MT/Ton",
            "Published Factor": "0.0049200",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Appendix C Table 9"
        },
        {
            "Div ID": "9",
            "Material Description": "Concrete Batch Plant",
            "Unit": "MTeq/tonne",
            "Published Factor": "0.0077500",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Appendix B Summary Table 1 (Assumed density of 145 lbs/ft^3)"
        },
        {
            "Div ID": "10",
            "Material Description": "Recycled Crushed Concrete",
            "Unit": "MT/Ton",
            "Published Factor": "0.0021800",
            "Notes": "Fixed RCA Plant",
            "Source": "Energy and Greenhouse Gas Emissions Trade-Offs of Recycled Concrete Aggregate Use in Nonstructural Concrete: A North American Case Study, ASCE, 2009 Table 3 (Converted)"
        },
        {
            "Div ID": "11",
            "Material Description": "Load Transfer Assembly",
            "Unit": "MT/Ft",
            "Published Factor": "0.0006160",
            "Notes": "Assumed 8.11 lbs/ft",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Table 3.5 pg 20 Used Avg from report Calculated CO2 Eq"
        },
        {
            "Div ID": "12",
            "Material Description": "Steel Reinf Epoxy Coated",
            "Unit": "MT/Ea",
            "Published Factor": "0.0013300",
            "Notes": "#9 Bar 18\" Long @ 3.4lbs/ft = 5.1lbs steel",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Table 3.5 pg 20 Used Avg from report Calculated CO2 Eq"
        },
        {
            "Div ID": "13",
            "Material Description": "Cement",
            "Unit": "MT/Lb",
            "Published Factor": "0.0004210",
            "Source": "National Renweable Energy Laboratory (Coverted)"
        },
        {
            "Div ID": "14",
            "Material Description": "Steel Reinf Epoxy Coated",
            "Unit": "MT/Lb",
            "Published Factor": "0.0002600",
            "Notes": "Impacts from Epoxy excluded",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Table 3.5 pg 20 Used Avg from report Calculated CO2 Eq"
        },
        {
            "Div ID": "15",
            "Material Description": "Steel Reinf Pavement Mesh",
            "Unit": "MT/Syd",
            "Published Factor": "0.0035100",
            "Notes": "Assumed 2.33lbs/Syd",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Table 3.5 pg 20 Used Avg from report Calculated CO2 Eq"
        },
        {
            "Div ID": "16",
            "Material Description": "Granular Material",
            "Unit": "MT/CYD",
            "Published Factor": "0.0001080",
            "Source": "Life Cycle Assessment of Road: A Pilot Study for Inventory Analysis, Stripple, 2001 (Converted CO2 Eq ) TA-4.2.14.1"
        },
        {
            "Div ID": "17",
            "Material Description": "Sand",
            "Unit": "MT/CYD",
            "Published Factor": "0.0001080",
            "Source": "Life Cycle Assessment of Road: A Pilot Study for Inventory Analysis, Stripple, 2001 (Converted CO2 Eq ) TA-4.2.14.1"
        },
        {
            "Div ID": "18",
            "Material Description": "Pavt Mrkg Waterborne Paint White",
            "Unit": "1000",
            "EIO-LCA Sector": "325510",
            "GHG GWP (MTCO2e/$1000)": "0.988",
            "$$/Unit (2009)": "83.33",
            "Published Factor": "0.0823300",
            "Source": "EIO-LCA 2002 Purchaser Price Model",
            "undefined": "1000"
        },
        {
            "Div ID": "19",
            "Material Description": "Pavt Mrkg Glass Beads",
            "Unit": "Lbs",
            "EIO-LCA Sector": "327212",
            "GHG GWP (MTCO2e/$1000)": "1.07",
            "$$/Unit (2009)": "0.46",
            "Published Factor": "0.0004922",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "20",
            "Material Description": "Silt Fence",
            "Unit": "Ft",
            "EIO-LCA Sector": "313210",
            "GHG GWP (MTCO2e/$1000)": "1.18",
            "$$/Unit (2009)": "0.90",
            "Published Factor": "0.0010620",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "21",
            "Material Description": "Pavt Mrkg Plastic Tape",
            "Unit": "Ft",
            "EIO-LCA Sector": "326112",
            "GHG GWP (MTCO2e/$1000)": "1.24",
            "$$/Unit (2009)": "1.74",
            "Published Factor": "0.0021576",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "22",
            "Material Description": "Geotextile Liner",
            "Unit": "Syd",
            "EIO-LCA Sector": "313210",
            "GHG GWP (MTCO2e/$1000)": "1.18",
            "$$/Unit (2009)": "1.54",
            "Published Factor": "0.0018172",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "23",
            "Material Description": "Expansive Waterstop",
            "Unit": "Ft",
            "EIO-LCA Sector": "326122",
            "GHG GWP (MTCO2e/$1000)": "1.06",
            "$$/Unit (2009)": "3.20",
            "Published Factor": "0.0033920",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "24",
            "Material Description": "Fertilizer Chemical Nutrient",
            "Unit": "Lbs",
            "EIO-LCA Sector": "325311",
            "GHG GWP (MTCO2e/$1000)": "5.75",
            "$$/Unit (2009)": "0.19",
            "Published Factor": "0.0010925",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "25",
            "Material Description": "Seeding Mixture",
            "Unit": "Lbs",
            "EIO-LCA Sector": "111421",
            "GHG GWP (MTCO2e/$1000)": "0.667",
            "$$/Unit (2009)": "2.00",
            "Published Factor": "0.0013340",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "26",
            "Material Description": "Mulch Blanket",
            "Unit": "Syd",
            "EIO-LCA Sector": "111940",
            "GHG GWP (MTCO2e/$1000)": "2.44",
            "$$/Unit (2009)": "0.46",
            "Published Factor": "0.0011224",
            "Notes": "Assumed Straw/Hay Blanket",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "27",
            "Material Description": "Pipe Underdrain",
            "Unit": "Ft",
            "EIO-LCA Sector": "326122",
            "GHG GWP (MTCO2e/$1000)": "1.06",
            "$$/Unit (2009)": "0.56",
            "Published Factor": "0.0005936",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "28",
            "Material Description": "Dr Structure Precast Concrete Unit",
            "Unit": "Ea",
            "EIO-LCA Sector": "327390",
            "GHG GWP (MTCO2e/$1000)": "1.14",
            "$$/Unit (2009)": "880.00",
            "Published Factor": "1.0032000",
            "Notes": "24\" and 48\"",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "29",
            "Material Description": "Block Conc",
            "Unit": "Ea",
            "EIO-LCA Sector": "327331",
            "GHG GWP (MTCO2e/$1000)": "1.47",
            "$$/Unit (2009)": "1.37",
            "Published Factor": "0.0020139",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "30",
            "Material Description": "Curing Compound",
            "Unit": "Gal",
            "EIO-LCA Sector": "325998",
            "GHG GWP (MTCO2e/$1000)": "0.96",
            "$$/Unit (2009)": "18.30",
            "Published Factor": "0.0175680",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "31",
            "Material Description": "End Section Concrete",
            "Unit": "Ea",
            "EIO-LCA Sector": "327330",
            "GHG GWP (MTCO2e/$1000)": "1.47",
            "$$/Unit (2009)": "763.43",
            "Published Factor": "1.1222421",
            "Notes": "Used Avg of all sizes",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "32",
            "Material Description": "End Section Metal",
            "Unit": "Ea",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "539.71",
            "Published Factor": "1.6784981",
            "Notes": "Used Avg of all sizes",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "33",
            "Material Description": "Fence Post Steel Woven Wire",
            "Unit": "Ea",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "32.50",
            "Published Factor": "0.1010750",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "34",
            "Material Description": "Fence Woven Wire",
            "Unit": "Ft",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "4.16",
            "Published Factor": "0.0129376",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "35",
            "Material Description": "Fence Post Wood",
            "Unit": "Ea",
            "EIO-LCA Sector": "32111",
            "GHG GWP (MTCO2e/$1000)": "0.695",
            "$$/Unit (2009)": "13.10",
            "Published Factor": "0.0091045",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "36",
            "Material Description": "Lane Ties Epoxy Coated",
            "Unit": "Ea",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "4.73",
            "Published Factor": "0.0147103",
            "Notes": "Impacts from Epoxy excluded",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "37",
            "Material Description": "Drainage Structure Cover",
            "Unit": "Lbs",
            "EIO-LCA Sector": "327390",
            "GHG GWP (MTCO2e/$1000)": "1.14",
            "$$/Unit (2009)": "1.07",
            "Published Factor": "0.0012198",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "38",
            "Material Description": "Joint Filler Fiber",
            "Unit": "Syd",
            "EIO-LCA Sector": "324122",
            "GHG GWP (MTCO2e/$1000)": "1.09",
            "$$/Unit (2009)": "17.36",
            "Published Factor": "0.0189224",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "39",
            "Material Description": "Joint Sealer Hot Poured Rubber",
            "Unit": "Lbs",
            "EIO-LCA Sector": "326299",
            "GHG GWP (MTCO2e/$1000)": "0.836",
            "$$/Unit (2009)": "1.02",
            "Published Factor": "0.0008527",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "40",
            "Material Description": "Dowel Bar Epoxy Coated",
            "Unit": "MT/Ea",
            "Published Factor": "0.0016266",
            "Notes": "Impacts from Epoxy excluded",
            "Source": "Athena Study: A LIFE CYCLE PERSPECTIVE ON CONCRETE AND ASPHALT ROADWAYS: EMBODIED PRIMARY ENERGY AND GLOBAL WARMING POTENTIAL Table 3.5 pg 20 Used Avg from report Calculated CO2 Eq"
        },
        {
            "Div ID": "41",
            "Material Description": "Pipe Conc",
            "Unit": "Ft",
            "EIO-LCA Sector": "327330",
            "GHG GWP (MTCO2e/$1000)": "1.47",
            "$$/Unit (2009)": "63.14",
            "Published Factor": "0.0928158",
            "Notes": "Used Avg of all sizes",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "42",
            "Material Description": "Bond Coat",
            "Unit": "Gal",
            "EIO-LCA Sector": "324121",
            "GHG GWP (MTCO2e/$1000)": "1.45",
            "$$/Unit (2009)": "6.90",
            "Published Factor": "0.0100050",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "43",
            "Material Description": "Guardrail",
            "Unit": "Ft",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "29.50",
            "Published Factor": "0.0917450",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "44",
            "Material Description": "Underdrain Outlet Ending",
            "Unit": "Ea",
            "EIO-LCA Sector": "326122",
            "GHG GWP (MTCO2e/$1000)": "1.06",
            "$$/Unit (2009)": "1.65",
            "Published Factor": "0.0017490",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "45",
            "Material Description": "Pipe Metal",
            "Unit": "Ft",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "65.88",
            "Published Factor": "0.2048868",
            "Notes": "Used Avg of all sizes",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "46",
            "Material Description": "Riprap",
            "Unit": "Syd",
            "EIO-LCA Sector": "21231",
            "GHG GWP (MTCO2e/$1000)": "1.25",
            "$$/Unit (2009)": "19.25",
            "Published Factor": "0.0240625",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "47",
            "Material Description": "Handhole Heavy Duty Cover",
            "Unit": "Ea",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "26.75",
            "Published Factor": "0.0831925",
            "Notes": "Assumed 25lbs @ 1.07/lb",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "48",
            "Material Description": "Waterproofing Membrane Preformed",
            "Unit": "Syd",
            "EIO-LCA Sector": "326291",
            "GHG GWP (MTCO2e/$1000)": "0.836",
            "$$/Unit (2009)": "15.70",
            "Published Factor": "0.0131252",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "49",
            "Material Description": "Pipe RCP 24\"",
            "Unit": "Ft.",
            "EIO-LCA Sector": "327330",
            "GHG GWP (MTCO2e/$1000)": "1.47",
            "$$/Unit (2009)": "29.00",
            "Published Factor": "0.0426300",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "50",
            "Material Description": "Pipe RCP 15\"",
            "Unit": "Ft",
            "EIO-LCA Sector": "327330",
            "GHG GWP (MTCO2e/$1000)": "1.47",
            "$$/Unit (2009)": "14.95",
            "Published Factor": "0.0219765",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "51",
            "Material Description": "Culv Class A CSP 12\"",
            "Unit": "Ft",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "12.95",
            "Published Factor": "0.0402745",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "52",
            "Material Description": "Pipe RCP 72\"",
            "Unit": "Ft.",
            "EIO-LCA Sector": "327330",
            "GHG GWP (MTCO2e/$1000)": "1.47",
            "$$/Unit (2009)": "225.00",
            "Published Factor": "0.3307500",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "53",
            "Material Description": "End Section Metal 12\"",
            "Unit": "Ea",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "117.00",
            "Published Factor": "0.3638700",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "54",
            "Material Description": "End Section Metal SLP 1:4",
            "Unit": "Ea.",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "117.00",
            "Published Factor": "0.3638700",
            "Notes": "Used same as 12\"",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "55",
            "Material Description": "End Section Concrete 24\"",
            "Unit": "Ea.",
            "EIO-LCA Sector": "327330",
            "GHG GWP (MTCO2e/$1000)": "1.47",
            "$$/Unit (2009)": "410.00",
            "Published Factor": "0.6027000",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "56",
            "Material Description": "End Section Metal 15\"",
            "Unit": "Ea.",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "139.00",
            "Published Factor": "0.4322900",
            "Notes": "Used 18\" from RS Means",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "57",
            "Material Description": "Neoprene Seal",
            "Unit": "Ft",
            "EIO-LCA Sector": "325520",
            "GHG GWP (MTCO2e/$1000)": "1.18",
            "$$/Unit (2009)": "2.21",
            "Published Factor": "0.0026078",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "58",
            "Material Description": "Foam Backer Rod",
            "Unit": "Ft",
            "EIO-LCA Sector": "326140",
            "GHG GWP (MTCO2e/$1000)": "1.15",
            "$$/Unit (2009)": "0.16",
            "Published Factor": "0.0001840",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "59",
            "Material Description": "End Section Concrete 72\"",
            "Unit": "Ea.",
            "EIO-LCA Sector": "327330",
            "GHG GWP (MTCO2e/$1000)": "1.47",
            "$$/Unit (2009)": "2,325.00",
            "Published Factor": "3.4177500",
            "Notes": "Used 60\"",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "60",
            "Material Description": "Piling Steel Sheet",
            "Unit": "Sft",
            "EIO-LCA Sector": "331110",
            "GHG GWP (MTCO2e/$1000)": "3.11",
            "$$/Unit (2009)": "26.50",
            "Published Factor": "0.0824150",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "61",
            "Material Description": "Pipe Plastic",
            "Unit": "Ft",
            "EIO-LCA Sector": "326122",
            "GHG GWP (MTCO2e/$1000)": "1.06",
            "$$/Unit (2009)": "34.20",
            "Published Factor": "0.0362520",
            "Notes": "Used Avg of all sizes",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "62",
            "Material Description": "Joint Filler Fiber",
            "Unit": "/1000",
            "EIO-LCA Sector": "324122",
            "GHG GWP (MTCO2e/$1000)": "1.09",
            "$$/Unit (2009)": "1.93",
            "Published Factor": "0.0021037",
            "Notes": "Converted Syds; $17.36/Syd = 1.93/sft",
            "Source": "EIO-LCA 2002 Purchaser Price Model"
        },
        {
            "Div ID": "63",
            "Material Description": "On Highway Combo Truck",
            "Unit": "MT/Mile",
            "Published Factor": "0.0038600",
            "Notes": "Used for To-Site Impacts",
            "Source": "National Renweable Energy Laboratory (Coverted) Assumed Fully loaded truck @ 30 tonnes"
        },
        {
            "Div ID": "65",
            "Material Description": "Renewable wood",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.866",
            "Published Factor": "0.8660000"
        },
        {
            "Div ID": "66",
            "Material Description": "Bolt and nut",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.002",
            "Published Factor": "0.0020000"
        },
        {
            "Div ID": "67",
            "Material Description": "Rivet",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.009",
            "Published Factor": "0.0090000"
        },
        {
            "Div ID": "68",
            "Material Description": "Cravel",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.003",
            "Published Factor": "0.0030000"
        },
        {
            "Div ID": "69",
            "Material Description": "Sand",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.003",
            "Published Factor": "0.0030000"
        },
        {
            "Div ID": "70",
            "Material Description": "Special plywood",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.006",
            "Published Factor": "0.0060000"
        },
        {
            "Div ID": "71",
            "Material Description": "Nanks",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.008",
            "Published Factor": "0.0080000"
        },
        {
            "Div ID": "72",
            "Material Description": "Silica and Silica Rock",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.016",
            "Published Factor": "0.0160000"
        },
        {
            "Div ID": "73",
            "Material Description": "Regtdar cement",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.322",
            "Published Factor": "0.3220000"
        },
        {
            "Div ID": "74",
            "Material Description": "Blast furnace slag",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.335",
            "Published Factor": "0.3350000"
        },
        {
            "Div ID": "75",
            "Material Description": "Smel-use pig iron",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.003164",
            "Published Factor": "0.0031640"
        },
        {
            "Div ID": "76",
            "Material Description": "White cement",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.859",
            "Published Factor": "0.8590000"
        },
        {
            "Div ID": "77",
            "Material Description": "foundry pig iron",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.004762",
            "Published Factor": "0.0047620"
        },
        {
            "Div ID": "78",
            "Material Description": "Refractory cement",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.593",
            "Published Factor": "0.5930000"
        },
        {
            "Div ID": "79",
            "Material Description": "High-strength rebar",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.003466",
            "Published Factor": "0.0034660"
        },
        {
            "Div ID": "80",
            "Material Description": "Regular rehar",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.0035",
            "Published Factor": "0.0035000"
        },
        {
            "Div ID": "81",
            "Material Description": "Timber—regular steel",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.004333",
            "Published Factor": "0.0043330"
        },
        {
            "Div ID": "82",
            "Material Description": "Bar steel—regular steel",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.004951",
            "Published Factor": "0.0049510"
        },
        {
            "Div ID": "83",
            "Material Description": "Timber—special steel",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.005248",
            "Published Factor": "0.0052480"
        },
        {
            "Div ID": "84",
            "Material Description": "Bar steel—stainless steel",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.026626",
            "Published Factor": "0.0266260"
        },
        {
            "Div ID": "85",
            "Material Description": "PC steel wire",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.002335",
            "Published Factor": "0.0023350"
        },
        {
            "Div ID": "86",
            "Material Description": "Stone blade s\\ee\\ sheet",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.002369",
            "Published Factor": "0.0023690"
        },
        {
            "Div ID": "87",
            "Material Description": "Zinc wire",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.002439",
            "Published Factor": "0.0024390"
            
        },
        {
            "Div ID": "88",
            "Material Description": "Regular plywo‹xI",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.608",
            "Published Factor": "0.6080000"
        },
        {
            "Div ID": "89",
            "Material Description": "Thinner",
            "Unit": "Ton",
            "$$/Unit (2009)": "0.001502",
            "Published Factor": "0.0015020"
        }
    ]

export default materialDetails