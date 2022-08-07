const materialDetails = [
    {
        "Material Description": "Cement",
        "Unit": "Ton",
        "Published Factor": 0.842
    },
    {
        "Material Description": "Binder",
        "Unit": "Ton",
        "Published Factor": 0.157
    },
    {
        "Material Description": "FlyAsh",
        "Unit": "Ton",
        "Published Factor": 0.0178
    },
    {
        "Material Description": "Blast Furnace Slag",
        "Unit": "Ton",
        "Published Factor": 0.024
    },
    {
        "Material Description": "Blast Furnace Slag (ACBFS or GGBFS)",
        "Unit": "Ton",
        "Published Factor": 0.0151
    },
    {
        "Material Description": "HMA Batch Plant",
        "Unit": "Tonne",
        "Published Factor": 0.0286
    },
    {
        "Material Description": "Aggregate",
        "Unit": "Ton",
        "Published Factor": 0.00616
    },
    {
        "Material Description": "Recycled Asphalt Pavement",
        "Unit": "Ton",
        "Published Factor": 0.00492
    },
    {
        "Material Description": "Concrete Batch Plant",
        "Unit": "Tonne",
        "Published Factor": 0.00775
    },
    {
        "Material Description": "Recycled Crushed Concrete",
        "Unit": "Ton",
        "Published Factor": 0.00218
    },
    {
        "Material Description": "Load Transfer Assembly",
        "Unit": "Ft",
        "Published Factor": 0.000616
    },
    {
        "Material Description": "Steel Reinf Epoxy Coated",
        "Unit": "Ea",
        "Published Factor": 0.00133
    },
    {
        "Material Description": "Cement",
        "Unit": "Lbs",
        "Published Factor": 0.000421
    },
    {
        "Material Description": "Steel Reinf Epoxy Coated",
        "Unit": "Lbs",
        "Published Factor": 0.00026
    },
    {
        "Material Description": "Steel Reinf Pavement Mesh",
        "Unit": "Syd",
        "Published Factor": 0.00351
    },
    {
        "Material Description": "Granular Material",
        "Unit": "Cyd",
        "Published Factor": 0.000108
    },
    {
        "Material Description": "Sand",
        "Unit": "Cyds",
        "Published Factor": 0.000108
    },
    {
        "Material Description": "Pavt Mrkg Waterborne Paint White",
        "Unit": "Gal",
        "$$\/Unit (2009)": 83.33
    },
    {
        "Material Description": "Pavt Mrkg Glass Beads",
        "Unit": "Lbs",
        "$$\/Unit (2009)": 0.46
    },
    {
        "Material Description": "Silt Fence",
        "Unit": "Ft",
        "$$\/Unit (2009)": 0.9
    },
    {
        "Material Description": "Pavt Mrkg Plastic Tape",
        "Unit": "Ft",
        "$$\/Unit (2009)": 1.74
    },
    {
        "Material Description": "Geotextile Liner",
        "Unit": "Syd",
        "$$\/Unit (2009)": 1.54
    },
    {
        "Material Description": "Expansive Waterstop",
        "Unit": "Ft",
        "$$\/Unit (2009)": 3.2
    },
    {
        "Material Description": "Fertilizer Chemical Nutrient",
        "Unit": "Lbs",
        "$$\/Unit (2009)": 0.19
    },
    {
        "Material Description": "Seeding Mixture",
        "Unit": "Lbs",
        "$$\/Unit (2009)": 2
    },
    {
        "Material Description": "Mulch Blanket",
        "Unit": "Syd",
        "$$\/Unit (2009)": 0.46
    },
    {
        "Material Description": "Pipe Underdrain",
        "Unit": "Ft",
        "$$\/Unit (2009)": 0.56
    },
    {
        "Material Description": "Dr Structure Precast Concrete Unit",
        "Unit": "Ea",
        "$$\/Unit (2009)": 880
    },
    {
        "Material Description": "Block Conc",
        "Unit": "Ea",
        "$$\/Unit (2009)": 1.37
    },
    {
        "Material Description": "Curing Compound",
        "Unit": "Gal",
        "$$\/Unit (2009)": 18.3
    },
    {
        "Material Description": "End Section Concrete",
        "Unit": "Ea",
        "$$\/Unit (2009)": 763.43
    },
    {
        "Material Description": "End Section Metal",
        "Unit": "Ea",
        "$$\/Unit (2009)": 539.71
    },
    {
        "Material Description": "Fence Post Steel Woven Wire",
        "Unit": "Ea",
        "$$\/Unit (2009)": 32.5
    },
    {
        "Material Description": "Fence Woven Wire",
        "Unit": "Ft",
        "$$\/Unit (2009)": 4.16
    },
    {
        "Material Description": "Fence Post Wood",
        "Unit": "Ea",
        "$$\/Unit (2009)": 13.1
    },
    {
        "Material Description": "Lane Ties Epoxy Coated",
        "Unit": "Ea",
        "$$\/Unit (2009)": 4.73
    },
    {
        "Material Description": "Drainage Structure Cover",
        "Unit": "Lbs",
        "$$\/Unit (2009)": 1.07
    },
    {
        "Material Description": "Joint Filler Fiber",
        "Unit": "Syd",
        "$$\/Unit (2009)": 17.36
    },
    {
        "Material Description": "Joint Sealer Hot Poured Rubber",
        "Unit": "Lbs",
        "$$\/Unit (2009)": 1.02
    },
    {
        "Material Description": "Pipe Conc",
        "Unit": "Ft",
        "$$\/Unit (2009)": 63.14
    },
    {
        "Material Description": "Bond Coat",
        "Unit": "Gal",
        "$$\/Unit (2009)": 6.9
    },
    {
        "Material Description": "Guardrail",
        "Unit": "Ft",
        "$$\/Unit (2009)": 29.5
    },
    {
        "Material Description": "Underdrain Outlet Ending",
        "Unit": "Ea",
        "$$\/Unit (2009)": 1.65
    },
    {
        "Material Description": "Pipe Metal",
        "Unit": "Ft",
        "$$\/Unit (2009)": 65.88
    },
    {
        "Material Description": "Riprap",
        "Unit": "Syd",
        "$$\/Unit (2009)": 19.25
    },
    {
        "Material Description": "Handhole Heavy Duty Cover",
        "Unit": "Ea",
        "$$\/Unit (2009)": 26.75
    },
    {
        "Material Description": "Waterproofing Membrane Preformed",
        "Unit": "Syd",
        "$$\/Unit (2009)": 15.7
    },
    {
        "Material Description": "Pipe RCP 24\"",
        "Unit": "Ft.",
        "$$\/Unit (2009)": 29
    },
    {
        "Material Description": "Pipe RCP 15\"",
        "Unit": "Ft",
        "$$\/Unit (2009)": 14.95
    },
    {
        "Material Description": "Culv Class A CSP 12\"",
        "Unit": "Ft",
        "$$\/Unit (2009)": 12.95
    },
    {
        "Material Description": "Pipe RCP 72\"",
        "Unit": "Ft.",
        "$$\/Unit (2009)": 225
    },
    {
        "Material Description": "End Section Metal 12\"",
        "Unit": "Ea",
        "$$\/Unit (2009)": 117
    },
    {
        "Material Description": "End Section Metal SLP 1:4",
        "Unit": "Ea.",
        "$$\/Unit (2009)": 117
    },
    {
        "Material Description": "End Section Concrete 24\"",
        "Unit": "Ea.",
        "$$\/Unit (2009)": 410
    },
    {
        "Material Description": "End Section Metal 15\"",
        "Unit": "Ea.",
        "$$\/Unit (2009)": 139
    },
    {
        "Material Description": "Neoprene Seal",
        "Unit": "Ft",
        "$$\/Unit (2009)": 2.21
    },
    {
        "Material Description": "Foam Backer Rod",
        "Unit": "Ft",
        "$$\/Unit (2009)": 0.16
    },
    {
        "Material Description": "End Section Concrete 72\"",
        "Unit": "Ea.",
        "$$\/Unit (2009)": 2325
    },
    {
        "Material Description": "Piling Steel Sheet",
        "Unit": "Sft",
        "$$\/Unit (2009)": 26.5
    },
    {
        "Material Description": "Pipe Plastic",
        "Unit": "Ft",
        "$$\/Unit (2009)": 34.2
    },
    {
        "Material Description": "Joint Filler Fiber",
        "Unit": "Sft",
        "$$\/Unit (2009)": 1.9300000000000002
    },
    
    {
        "Material Description": "Renewable wood",
        "Unit": "Ton",
        "$$\/Unit (2009)": "O.5",
        "Published Factor": 866
    },
    {
        "Material Description": "Bolt and nut",
        "Unit": "Ton",
        "$$\/Unit (2009)": 0.8,
        "Published Factor": 2
    },
    {
        "Material Description": "Rivet",
        "Unit": "Ton",
        "$$\/Unit (2009)": 2.4,
        "Published Factor": 9
    },
    {
        "Material Description": "Cravel",
        "Unit": "Ton",
        "$$\/Unit (2009)": "5.6\/7,000",
        "Published Factor": 3
    },
    {
        "Material Description": "Sand",
        "Unit": "Ton",
        "$$\/Unit (2009)": "6.4\/8,D00",
        "Published Factor": 3
    },
    {
        "Material Description": "Special plywood",
        "Unit": "Ton",
        "$$\/Unit (2009)": "6.4\/8,0D0",
        "Published Factor": 6
    },
    {
        "Material Description": "Nanks",
        "Unit": "Ton",
        "$$\/Unit (2009)": "116\/14000",
        "Published Factor": 8
    },
    {
        "Material Description": "Silica and Silica Rock",
        "Unit": "Ton",
        "$$\/Unit (2009)": "17.5\/21000",
        "Published Factor": 16
    },
    {
        "Material Description": "Regtdar cement",
        "Unit": "Ton",
        "$$\/Unit (2009)": "40.8\/49,000",
        "Published Factor": 322
    },
    {
        "Material Description": "Blast furnace slag",
        "Unit": "Ton",
        "$$\/Unit (2009)": "42.5\/51,0O0",
        "Published Factor": 335
    },
    {
        "Material Description": "cement"
    },
    {
        "Material Description": "Smel-use pig iron",
        "Unit": "Ton",
        "$$\/Unit (2009)": "98.3\/118,000",
        "Published Factor": 3.164
    },
    {
        "Material Description": "White cement",
        "Unit": "Ton",
        "$$\/Unit (2009)": "108.3J130,000",
        "Published Factor": 859
    },
    {
        "Material Description": "foundry pig iron",
        "Unit": "Ton",
        "$$\/Unit (2009)": "148.3\/178,000",
        "Published Factor": 4.7620000000000005
    },
    {
        "Material Description": "Asphalt",
        "Unit": "Ton",
        "$$\/Unit (2009)": "1†8.3\/214,O00",
        "Published Factor": "J84"
    },
    {
        "Material Description": "Refractory cement",
        "Unit": "Ton",
        "$$\/Unit (2009)": "203.3\/244,000",
        "Published Factor": 593
    },
    {
        "Material Description": "High-strength rebar",
        "Unit": "Ton",
        "$$\/Unit (2009)": "236.6\/2B4,O00",
        "Published Factor": 3.466
    },
    {
        "Material Description": "Regular rehar",
        "Unit": "Ton",
        "$$\/Unit (2009)": "239.J\/28†,000",
        "Published Factor": 3.5
    },
    {
        "Material Description": "Section steel—regular",
        "Unit": "Ton",
        "$$\/Unit (2009)": "332.S\/387,OO0",
        "Published Factor": "4,I66"
    },
    {
        "Material Description": "steel"
    },
    {
        "Material Description": "Timber—regular steel",
        "Unit": "Ton",
        "$$\/Unit (2009)": "326.6\/392,000",
        "Published Factor": 4.333
    },
    {
        "Material Description": "Bar steel—regular steel",
        "Unit": "Ton",
        "$$\/Unit (2009)": "33y.5\/405,O00",
        "Published Factor": 4.951
    },
    {
        "Material Description": "Timber—special steel",
        "Unit": "Ton",
        "$$\/Unit (2009)": "395.8\/4?5,000",
        "Published Factor": 5.248
    },
    {
        "Material Description": "Bar steel—stainless steel",
        "Unit": "Ton",
        "$$\/Unit (2009)": "1,816.6\/2,180,000",
        "Published Factor": 26.626
    },
    {
        "Material Description": "Zinc steel sheet",
        "Unit": "Ton",
        "$$\/Unit (2009)": "5J3.3\/616.000",
        "Published Factor": "2,24a"
    },
    {
        "Material Description": "PC steel wire",
        "Unit": "Ton",
        "$$\/Unit (2009)": "520.8\/625,000",
        "Published Factor": 2.335
    },
    {
        "Material Description": "Stone blade s\\ee\\ sheet",
        "Unit": "Ton",
        "$$\/Unit (2009)": "542.5\/651,000",
        "Published Factor": 2.3689999999999998
    },
    {
        "Material Description": "Zinc wire",
        "Unit": "Ton",
        "$$\/Unit (2009)": "543.3\/652,000",
        "Published Factor": 2.439
    },
    {
        "Material Description": "Regular plywo‹xI",
        "Unit": "Ton",
        "$$\/Unit (2009)": "659.1\/791,00d",
        "Published Factor": 608
    },
    {
        "Material Description": "Thinner",
        "Unit": "Ton",
        "$$\/Unit (2009)": "781.6\/938,00D",
        "Published Factor": 1.502
    }
]

export default materialDetails