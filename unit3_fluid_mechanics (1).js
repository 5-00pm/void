/*
 * UNIT 3 — FLUID MECHANICS
 * Grade 12 Physics | ESSLCE Advanced Question Bank
 * 65 Questions | Top 1% Difficulty Distribution
 *
 * ─── FILE HIERARCHY ───────────────────────────────────────────────────────────
 *
 *  questions/
 *  ├── unit3_fluid_mechanics.js           ← this file
 *  └── images/
 *      ├── fm_g1.png   Pressure vs depth — three straight lines from origin
 *      │               (steepest = mercury, middle = seawater, least = fresh water)
 *      │               x-axis: depth h (m), y-axis: P_gauge (kPa)
 *      │
 *      ├── fm_g2.png   P_gauge vs h for single unknown liquid — linear, slope
 *      │               labelled 12 000 N/m³; axes same as fm_g1
 *      │
 *      ├── fm_g3.png   Fluid velocity v vs pipe cross-section area A —
 *      │               hyperbolic curve (v ∝ 1/A) at constant Q = 5×10⁻³ m³/s
 *      │               x-axis: A (cm²), y-axis: v (m/s)
 *      │
 *      ├── fm_g4.png   Buoyant force F_B vs submerged volume V — 4 data points
 *      │               perfectly linear through origin; slope ≈ 11 760 N/m³
 *      │               x-axis: V (×10⁻³ m³), y-axis: F_B (N)
 *      │
 *      ├── fm_g5.png   Mass m vs volume V for unknown solid — straight line
 *      │               through origin; slope = 2700 kg/m³ labelled on graph
 *      │               x-axis: V (cm³), y-axis: m (g)
 *      │
 *      └── fm_g6.png   Atmospheric pressure vs altitude — smooth exponential
 *                      decay; marked data points at 0 m (101 kPa),
 *                      1000 m (89.9 kPa), 5000 m (54.1 kPa), 10 000 m (26.5 kPa)
 *                      x-axis: altitude (m), y-axis: P_atm (kPa)
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

const unit3FluidMechanics = [


  {text:"A woman of mass 60 kg stands on a single high-heel tip with contact area 1 cm². She then changes to flat shoes with combined sole area 300 cm². The ratio of pressure exerted (heels : flat shoes) is:",options:["1 : 300","300 : 1","1 : 150","150 : 1"],correct:3},
  {text:"A scuba diver's face-plate (area 150 cm²) is at 20 m depth in seawater (ρ = 1025 kg/m³, g = 9.8 m/s²). The net inward force on the face-plate due to water pressure above atmospheric is closest to:",options:["30.1 N","300 N","301.4 N","3013 N"],correct:2},
  {text:"A storage tank holds a 3 m layer of oil (ρ = 800 kg/m³) floating on a 12 m layer of water (ρ = 1000 kg/m³). Using g = 9.8 m/s², the gauge pressure at the very bottom is:",options:["120 kPa","141 kPa","156 kPa","168 kPa"],correct:1},
  {text:"The gauge pressure at 2.5 m depth in a liquid is 28 kPa. At 9 m depth in the same liquid the gauge pressure is:",options:["28.0 kPa","64.8 kPa","100.8 kPa","123.4 kPa"],correct:2},
  {text:"A line pressure of 1500 kPa expressed in torr (1 atm = 760 torr = 101.325 kPa) is closest to:",options:["1974 torr","11 250 torr","11.25 torr","19 740 torr"],correct:1},
  {text:"A gauge pressure of 4.5 atm expressed in psi (1 atm = 14.696 psi) is closest to:",options:["14.7 psi","44.1 psi","66.1 psi","101.3 psi"],correct:2},
  {text:"A barometer at a mountain summit reads 480 mmHg. Using 760 mmHg = 101.325 kPa, the atmospheric pressure at that location in kPa is:",options:["48.0 kPa","64.0 kPa","76.0 kPa","480 kPa"],correct:1},

  // ════════════════════════════════════════════════════════════════════
  //  §2  DENSITY & SPECIFIC GRAVITY                        (Q8 – Q11)
  // ════════════════════════════════════════════════════════════════════

  {text:"A urine sample has mass 51.5 g and volume 50.0 mL. Its specific gravity and clinical classification (normal range SG = 1.003 – 1.030) is:",options:["SG = 0.97 — below normal range","SG = 1.030 — at the upper normal limit","SG = 1.30 — pathologically elevated","SG = 1.003 — at the lower normal limit"],correct:1},

  {text:"The graph below shows mass m (y-axis) versus volume V (x-axis) for an unknown solid, passing through the origin with slope 2700 kg/m³. This material is most likely:",options:["Iron (ρ = 7874 kg/m³)","Aluminium (ρ = 2700 kg/m³)","Copper (ρ = 8960 kg/m³)","Cork (ρ ≈ 240 kg/m³)"],correct:1,pic:"images/fm_g5.png"},

  {text:"A rock has a mass of 540 g in air and an apparent mass of 342 g when fully submerged in water (ρ_water = 1000 kg/m³, g = 9.8 m/s²). The average density of the rock is:",options:["1364 kg/m³","2045 kg/m³","2727 kg/m³","3500 kg/m³"],correct:2},

  {text:"A gemstone weighs 2.80 N in air and 1.50 N when submerged in water. Using SG = W_air / (W_air − W_water), its specific gravity is:",options:["1.87","2.15","2.80","3.73"],correct:1},

  // ════════════════════════════════════════════════════════════════════
  //  §3  PRESSURE AT DEPTH & ABSOLUTE PRESSURE            (Q12 – Q16)
  // ════════════════════════════════════════════════════════════════════

  {text:"Three containers (narrow-top, cylindrical, wide-top) are each filled with water to the same height h and have equal base areas. The gauge pressure at the base of each container is:",options:["Greatest in the narrow container","Greatest in the wide container","Identical in all three","Proportional to the water volume in each"],correct:2},

  {text:"A circular gate (diameter 0.50 m) seals an opening at the base of a dam where water depth is 120 m (ρ = 1000 kg/m³, g = 9.8 m/s², P_atm = 101.3 kPa). The total force on the gate is:",options:["29.4 kN","117.7 kN","231 kN","251 kN"],correct:3},

  {text:"A scuba diver descends to 30 m in seawater (ρ = 1025 kg/m³, g = 9.8 m/s², P_atm = 101.3 kPa). The absolute pressure experienced is:",options:["301.4 kPa","402.7 kPa","503.3 kPa","1025 kPa"],correct:1},

  {text:"The Gibe III hydroelectric dam in Ethiopia retains water to an approximate depth of 200 m. The gauge pressure at the base of the dam wall (ρ = 1000 kg/m³, g = 9.8 m/s²) is:",options:["200 kPa","1.96 MPa","19.6 MPa","196 MPa"],correct:1},

  {text:"The Tis Abay (Blue Nile) falls in Ethiopia have a vertical drop of 45 m. Treating the water column as continuous (ρ = 1000 kg/m³, g = 9.8 m/s²), the gauge pressure at the base is:",options:["44.1 Pa","4.41 kPa","44.1 kPa","441 kPa"],correct:3},

  // ════════════════════════════════════════════════════════════════════
  //  §4  ATMOSPHERIC PRESSURE & BAROMETERS                (Q17 – Q19)
  // ════════════════════════════════════════════════════════════════════

  {text:"Standard atmospheric pressure (101.325 kPa) can support a water column (ρ = 1000 kg/m³, g = 9.8 m/s²) of height:",options:["760 mm","1.03 m","10.3 m","103 m"],correct:2},

  {text:"A mercury barometer reads 740 mmHg where g = 9.78 m/s² and ρ_Hg = 13 590 kg/m³. The atmospheric pressure in kPa is:",options:["95.2 kPa","98.4 kPa","101.3 kPa","103.1 kPa"],correct:1},

  {text:"A tightly capped bottle full of water has a small hole punched near its base — no water escapes. When the cap is removed, water flows freely. The correct explanation is:",options:["Gravity cannot act on sealed water","With the cap off, atmospheric pressure acts on the water surface, creating net pressure at the hole that drives the flow","The hole diameter was too small for gravity to overcome surface tension","A sealed bottle always contains zero gauge pressure"],correct:1},

  // ════════════════════════════════════════════════════════════════════
  //  §5  MANOMETERS                                       (Q20 – Q23)
  // ════════════════════════════════════════════════════════════════════

  {text:"An open-tube mercury manometer is connected to a gas tank. The tank-side mercury level is 10 cm LOWER than the open arm (ρ_Hg = 13 600 kg/m³, g = 9.8 m/s², P_atm = 100 kPa). The absolute gas pressure is:",options:["86.7 kPa","100 kPa","113.3 kPa","126.6 kPa"],correct:2},

  {text:"An open manometer contains oil (SG = 0.80). The arm connected to a gas supply is 50 cm HIGHER than the open arm (P_atm = 101 kPa, g = 9.8 m/s²). The absolute gas pressure is:",options:["97.1 kPa","101 kPa","104.9 kPa","134 kPa"],correct:0},

  {text:"A closed-end (vacuum-reference) manometer contains mercury. The gas-connected arm shows mercury 25 cm LOWER than the sealed vacuum arm (ρ_Hg = 13 600 kg/m³, g = 9.8 m/s²). The absolute gas pressure is:",options:["0 Pa","33.3 kPa","66.6 kPa","101.3 kPa"],correct:1},

  {text:"A manometer fluid has SG = 0.85. The open arm stands 55 cm above the gas-connected arm. Local P_atm = 96 kPa, g = 9.8 m/s². The absolute pressure inside the tank is:",options:["91.4 kPa","96.0 kPa","100.6 kPa","105.2 kPa"],correct:2},

  // ════════════════════════════════════════════════════════════════════
  //  §6  PASCAL'S PRINCIPLE & HYDRAULIC SYSTEMS           (Q24 – Q28)
  // ════════════════════════════════════════════════════════════════════

  {text:"A hydraulic lift has pistons of area 10 cm² (input) and 500 cm² (output). A 100 N force is applied to the input piston. The maximum mass that can be slowly lifted at the output piston (g = 10 m/s²) is:",options:["2 kg","50 kg","500 kg","5000 kg"],correct:2},

  {text:"In the hydraulic system above, when the input piston is pushed down 20 cm, the output piston rises by:",options:["0.04 cm","0.40 cm","4.0 cm","40 cm"],correct:1},

  {text:"A hydraulic press must deliver 20 kN at its output piston. The input piston area is 4 cm² and the maximum available input force is 50 N. The minimum output piston area required is:",options:["16 cm²","160 cm²","1600 cm²","16 000 cm²"],correct:2},

  {text:"A hydraulic car lift has input piston radius 2 cm and output piston radius 20 cm. A mechanic applies 200 N to the input piston. The output force is:",options:["2 N","200 N","2000 N","20 000 N"],correct:3},

  {text:"An identical hydraulic car lift operates in Addis Ababa (~2400 m elevation, P_atm ≈ 77 kPa) and at sea level. Using the same input force on the same-area pistons, the mechanical advantage of the Addis Ababa lift compared to sea level is:",options:["Greater — lower outside pressure assists the output piston","Less — lower atmospheric pressure reduces effectiveness","Identical — mechanical advantage depends only on the piston area ratio","Less — higher altitude increases oil viscosity"],correct:2},

  // ════════════════════════════════════════════════════════════════════
  //  §7  ARCHIMEDES' PRINCIPLE & BUOYANCY                 (Q29 – Q38)
  // ════════════════════════════════════════════════════════════════════

  {text:"Objects of varying volume V are fully submerged in an unknown liquid. The measured buoyant forces are:\nV (×10⁻³ m³): 1.0 | 2.0 | 3.0 | 4.0\nF_B (N):      11.8|23.5|35.3|47.1\nFrom the slope of F_B vs V and g = 9.8 m/s², the liquid density is:",options:["800 kg/m³","1000 kg/m³","1200 kg/m³","1250 kg/m³"],correct:2,pic:"images/fm_g4.png"},

  {text:"An object weighs 680 N in air and 70 N when fully submerged in water (ρ = 1000 kg/m³, g = 9.8 m/s²). Its density is:",options:["900 kg/m³","1000 kg/m³","1116 kg/m³","1250 kg/m³"],correct:2},

  {text:"A suspected impure crown weighs 50 N in air and 45 N submerged in water (ρ = 1000 kg/m³, g = 9.8 m/s²). Its average density is:",options:["5000 kg/m³","10 000 kg/m³","19 300 kg/m³","7874 kg/m³"],correct:1},

  {text:"Solid iron (ρ = 7874 kg/m³) sinks in water; solid wood (ρ = 600 kg/m³) floats. If both cubes have the same volume V, which experiences the greater buoyant force, and why?",options:["Iron — it is fully submerged, displacing a full volume V of water","Wood — floating objects always experience the greater buoyancy","Both are equal since they have the same geometric volume","Impossible to compare without knowing the exact value of V"],correct:0},

  {text:"Two identical solid balls are placed — one in water, one in mercury. The ball sinks in water but floats in mercury. Which ball experiences the greater buoyant force?",options:["The ball in water — full submersion maximises volume displacement","The ball in mercury — buoyancy equals the ball's full weight when floating","Both experience the same buoyant force","Buoyant forces cannot be compared across different fluids"],correct:1},

  {text:"A 75 kg man floats in freshwater with exactly 3.0% of his volume above the surface. His total body volume (ρ_water = 1000 kg/m³) is:",options:["0.0225 m³","0.0773 m³","0.0798 m³","0.0826 m³"],correct:1},

  {text:"An iceberg floats in seawater (ρ = 1025 kg/m³) with 12% of its volume visible above the surface. The density of the ice is:",options:["880 kg/m³","902 kg/m³","917 kg/m³","937 kg/m³"],correct:1},

  {text:"A papyrus tankwa boat used on Lake Tana, Ethiopia, has total volume 0.50 m³ and papyrus density 200 kg/m³. The maximum additional cargo mass it can carry without sinking (ρ_water = 1000 kg/m³, g = 9.8 m/s²) is:",options:["100 kg","200 kg","300 kg","400 kg"],correct:3},

  {text:"A cargo ship moves from the Red Sea (ρ = 1040 kg/m³) into the freshwater of a river estuary (ρ = 1000 kg/m³). The ship's draft (depth submerged below waterline) in freshwater compared to the Red Sea will:",options:["Decrease — freshwater exerts more buoyancy per cubic metre","Increase — freshwater is less dense, requiring more hull volume to be submerged","Stay the same regardless of water density","Depend entirely on the cargo distribution"],correct:1},

  {text:"A 70 kg person (body density 985 kg/m³) is completely submerged in a swimming pool (ρ = 1000 kg/m³, g = 9.8 m/s²). An underwater scale supporting the person reads:",options:["−10.7 N (scale pushed upward — net force acts on person)","0 N","10.7 N","686 N"],correct:0},

  // ════════════════════════════════════════════════════════════════════
  //  §8  EQUATION OF CONTINUITY & FLOW RATE               (Q39 – Q43)
  // ════════════════════════════════════════════════════════════════════

  {text:"A horizontal pipe narrows from radius 3 cm to radius 1.5 cm. If the speed in the wide section is 2 m/s, the speed in the narrow section is:",options:["1 m/s","4 m/s","8 m/s","16 m/s"],correct:2},

  {text:"A main pipe of radius r branches into three identical pipes each of radius r/2. If the speed in the main pipe is v, the speed in each branch is:",options:["v/3","4v/3","v/4","3v/4"],correct:1},

  {text:"The aorta (radius 10 mm) carries blood at 5.0 L/min. In capillaries the blood speed is 0.33 mm/s and the average capillary diameter is 8.0 µm. Using the continuity principle, the approximate number of capillaries in the circulatory system is:",options:["5.0 × 10⁶","5.0 × 10⁸","5.0 × 10⁹","5.0 × 10¹⁰"],correct:2},

  {text:"The figure shows fluid velocity v plotted against cross-sectional area A for incompressible steady flow at constant volume flow rate. The curve is:",options:["A straight line (v ∝ A)","A parabola (v ∝ A²)","A hyperbola (v ∝ 1/A)","An exponential decay"],correct:2,pic:"images/fm_g3.png"},

  {text:"A garden hose (radius 2 cm, flow speed 1.5 m/s) ends in a nozzle of radius 0.5 cm. The water exit speed at the nozzle is:",options:["6 m/s","12 m/s","24 m/s","48 m/s"],correct:2},

  // ════════════════════════════════════════════════════════════════════
  //  §9  BERNOULLI'S EQUATION                             (Q44 – Q50)
  // ════════════════════════════════════════════════════════════════════

  {text:"Water (ρ = 1000 kg/m³) flows horizontally. At the wide section (diameter 6 cm): v = 2 m/s, P = 200 kPa. At the narrow section (diameter 2 cm), the pressure is:",options:["40 kPa","120 kPa","160 kPa","202 kPa"],correct:0},

  {text:"Water flows through a pipe. Point A: diameter 10 cm, v = 3 m/s, h = 10 m, P = 150 kPa. Point B: diameter 5 cm, h = 6 m. Using Bernoulli + continuity (ρ = 1000 kg/m³, g = 9.8 m/s²), pressure at B is:",options:["75.2 kPa","121.7 kPa","150.0 kPa","228.5 kPa"],correct:1},

  {text:"Bernoulli's equation P + ½ρv² + ρgh = constant is strictly valid for:",options:["Any real fluid in any flow regime","Viscous, incompressible, laminar flow only","Inviscid, incompressible, steady flow along a streamline","All steady flows regardless of compressibility or viscosity"],correct:2},

  {text:"A hole (radius 1 cm) is opened at the base of a tank with water height 1.60 m above it. Using Torricelli's theorem v = √(2gh) with g = 9.8 m/s², the volume flow rate leaving the hole is:",options:["0.056 L/s","1.76 L/s","5.60 L/s","17.6 L/s"],correct:1},

  {text:"A tank of water and a tank of mercury each have identical small holes at the same depth h below the free surface. The ratio of exit speeds (water : mercury) according to Torricelli's theorem is:",options:["1 : 13.6","13.6 : 1","1 : 1","1 : √13.6"],correct:2},

  {text:"A flat sheet of paper is held at one corner and a student blows air rapidly across its top surface. The paper rises. The best explanation is:",options:["Blown air creates high pressure above the paper, pushing it up","Fast-moving air above has lower static pressure; the higher pressure below lifts the paper","The paper weighs less in moving air","Airflow exerts an upward viscous drag on the paper"],correct:1},

  {text:"At the constriction of a venturi meter, compared to the wider upstream section:",options:["Velocity decreases; pressure increases","Velocity increases; pressure decreases","Both velocity and pressure increase","Both velocity and pressure decrease"],correct:1},

  // ════════════════════════════════════════════════════════════════════
  //  §10 VISCOSITY & FLOW TYPE                            (Q51 – Q54)
  // ════════════════════════════════════════════════════════════════════

  {text:"For water (η = 1×10⁻³ Pa·s, ρ = 1000 kg/m³) flowing at 0.50 m/s in a pipe of diameter 2.0 cm, the Reynolds number Re = ρvD/η is:",options:["Re = 100 — laminar flow","Re = 1000 — laminar flow","Re = 10 000 — likely turbulent flow","Re = 100 000 — fully turbulent flow"],correct:2},

  {text:"Two identical pipes carry fluids A (higher dynamic viscosity) and B (lower dynamic viscosity) under the same applied pressure difference. Which flows at the higher average speed?",options:["Fluid A — higher viscosity increases momentum transfer","Fluid B — lower viscosity means less internal friction","Both flow at the same speed since conditions are otherwise identical","Depends on whether flow is laminar or turbulent"],correct:1},

  {text:"In Poiseuille (viscous) flow through a circular pipe, the velocity profile across a diameter is:",options:["Uniform — the same at all radii","Parabolic — maximum at the centreline, zero at the walls","Linear — decreasing uniformly from axis to wall","Maximum at the wall and zero at the centre"],correct:1},

  {text:"Which statement is correct regarding streamlines in steady laminar flow?",options:["Streamlines can cross at regions of high velocity","The velocity vector at any point is perpendicular to the local streamline","Two streamlines in steady flow can never intersect","Streamlines exist only in turbulent flow"],correct:2},

  // ════════════════════════════════════════════════════════════════════
  //  §11 ADVANCED MULTI-CONCEPT PROBLEMS                  (Q55 – Q65)
  // ════════════════════════════════════════════════════════════════════

  {text:"The graph below shows gauge pressure P vs depth h for an unknown liquid as a straight line through the origin. The slope is 12 000 N/m³. Using g = 10 m/s², the density of the liquid is:",options:["800 kg/m³","1000 kg/m³","1200 kg/m³","1400 kg/m³"],correct:2,pic:"images/fm_g2.png"},

  {text:"The graph below shows P vs h for fresh water, seawater, and mercury, all starting at the origin. From steepest to least steep slope, the correct ordering is:",options:["Seawater > Fresh water > Mercury","Mercury > Seawater > Fresh water","Fresh water > Seawater > Mercury","Mercury > Fresh water > Seawater"],correct:1,pic:"images/fm_g1.png"},

  {text:"A 55 kg woman wants to walk on snow that cannot withstand pressure above 0.5 kPa. Her bare-foot imprint area is 400 cm². The minimum area of each snowshoe required (g = 9.8 m/s²) is:",options:["216 cm² per shoe","539 cm² per shoe","1078 cm² per shoe","5390 cm² per shoe"],correct:2},

  {text:"A hollow steel cube (edge 1.00 m, wall thickness 2 cm, ρ_steel = 7800 kg/m³, ρ_water = 1000 kg/m³) is placed in water. Approximating the steel volume as 6 × (1 m² × 0.02 m) = 0.12 m³, the cube will:",options:["Float — its average density (≈ 936 kg/m³) is below water's density","Sink — steel's density (7800 kg/m³) always causes sinking","Float only if the hollow interior is perfectly sealed","Sink — the hollow interior provides no additional buoyancy"],correct:0},

  {text:"A submarine achieves neutral buoyancy (weight = buoyant force). To dive deeper, it opens valves admitting seawater into ballast tanks. As seawater fills the tanks, the submarine will:",options:["Remain neutrally buoyant regardless of how much ballast is admitted","Sink — the added mass increases total weight with no change in outer hull volume","Rise — displaced water weight increases as hull fills","Oscillate — alternating pressure equalises the forces"],correct:1},

  {text:"The figure shows atmospheric pressure versus altitude above sea level. The shape of the curve is best described as:",options:["Constant","Linear (P ∝ h)","Quadratic (P ∝ h²)","Exponential decay (P ∝ e^(−αh))"],correct:3,pic:"images/fm_g6.png"},

  {text:"Systolic blood pressure measures 120 mmHg. Using 1 atm = 101.325 kPa = 760 mmHg, the equivalent pressure in kPa is:",options:["1.60 kPa","16.0 kPa","160 kPa","9120 Pa"],correct:1},

  {text:"A tank contains three immiscible layers: oil (ρ = 800 kg/m³, h = 0.5 m) on top, water (ρ = 1000 kg/m³, h = 0.3 m) in the middle, and mercury (ρ = 13 600 kg/m³, h = 0.1 m) at the base. The gauge pressure at the very bottom (g = 9.8 m/s²) is:",options:["7.84 kPa","12.0 kPa","20.2 kPa","133 kPa"],correct:2},

  {text:"A student plots buoyant force F_B (y-axis) vs submerged volume V (x-axis) for objects immersed in a liquid and obtains a straight line through the origin. What do the slope and y-intercept physically represent?",options:["Slope = liquid density; y-intercept = atmospheric pressure acting on the surface","Slope = ρ_liquid × g; y-intercept = 0","Slope = g alone; y-intercept = ρ_liquid","Slope = ρ_liquid / g; y-intercept = weight of the object"],correct:1},

  {text:"A fire hose nozzle reduces the pipe cross-section by a factor of 16. Water enters the hose at 1.0 m/s. The exit speed at the nozzle and the pressure change are:",options:["16 m/s — pressure increases sharply at the nozzle","16 m/s — pressure drops significantly at the nozzle","0.063 m/s — pressure increases","4.0 m/s — pressure remains constant"],correct:1},

  {text:"A student claims: 'An object whose density exactly equals the density of water will always float at the water surface.' The conceptual error in this claim is:",options:["The claim is entirely correct — objects with ρ_object = ρ_water float at the surface","The object achieves neutral buoyancy and can remain in equilibrium at any depth, not necessarily at the surface","The object will always sink because surface tension cannot support it","The object floats at the surface only if its shape is convex"],correct:1},
];

module.exports = unit3FluidMechanics;

/*
 * VERIFICATION SUMMARY
 * ─────────────────────────────────────────────────────────────
 * Total questions  : 65
 * Graph questions  : 6  (Q9, Q29, Q42, Q55, Q56, Q60)
 * Ethiopian context: Q16 (Blue Nile), Q15 (Gibe III dam),
 *                    Q28 (Addis Ababa altitude), Q36 (Lake Tana tankwa)
 *
 * BLOOM'S TAXONOMY (approximate)
 *   Remembering  : Q7, Q17                         ≈ 10%
 *   Understanding: Q1, Q12, Q42, Q53, Q54          ≈  7%
 *   Applying     : Q2,Q3,Q4,Q5,Q6,Q10,Q11,Q13,
 *                  Q14,Q20,Q21,Q22,Q23,Q24,Q25,
 *                  Q30,Q35,Q43,Q47,Q51,Q61         ≈ 20%
 *   Analyzing    : Q8,Q9,Q16,Q26,Q27,Q29,Q31,Q32,
 *                  Q33,Q34,Q36,Q39,Q40,Q41,Q44,Q45,
 *                  Q48,Q50,Q55,Q56,Q62,Q63,Q65     ≈ 35%
 *   Evaluating   : Q15,Q18,Q19,Q28,Q37,Q38,Q46,Q49,
 *                  Q52,Q57,Q58,Q59,Q60,Q64         ≈ 25%
 *   Creating     : Q26 (design), Q57 (design)       ≈  3%
 * ─────────────────────────────────────────────────────────────
 */
