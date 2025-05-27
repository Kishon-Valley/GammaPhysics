export const physicsNotes4: {
  [key: string]: {
    title: string;
    description: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
} = {
  'Inductance': {
    title: 'Inductance',
    description: 'A property of electrical circuits that describes how changes in current induce voltage.',
    sections: [
      {
        title: 'Self and Mutual Inductance',
        content: `Inductance is a property of electrical circuits that describes how changes in current induce voltage:

• Self-inductance (L):
  - Defined as L = Φ/I
  - Φ is the magnetic flux through the circuit
  - I is the current in the circuit
  - Unit: henry (H)
  - Represents a circuit's opposition to change in current

• Mutual inductance:
  - Occurs between two circuits
  - M₁₂ = M₂₁ (symmetry property)
  - Describes how current in one circuit induces voltage in another
  - Basis for transformers and coupled circuits

• Physical interpretation:
  - Energy storage in magnetic field
  - Opposes changes in current (Lenz's law)
  - Proportional to number of turns squared in a coil

• Applications:
  - Inductors in electronic circuits
  - Transformers for voltage conversion
  - Motors and generators
  - Wireless power transfer systems`
      }
    ]
  },
  'Magnetic Materials': {
    title: 'Magnetic Materials',
    description: 'Materials that respond to magnetic fields, characterized by their magnetization.',
    sections: [
      {
        title: 'Magnetization',
        content: `Magnetization describes how materials respond to magnetic fields:

• Magnetization (M):
  - Vector quantity representing magnetic dipole moment per unit volume
  - Measures the density of magnetic moments in a material
  - Unit: ampere per meter (A/m)
  - Related to magnetic field H and magnetic flux density B by H = B/μ₀ - M
  - Microscopic origin: orbital and spin angular momentum of electrons

• Magnetic field quantities:
  - B: magnetic flux density (tesla, T)
  - H: magnetic field strength (A/m)
  - Relationship in vacuum: B = μ₀H
  - Relationship in materials: B = μ₀(H + M) = μ₀μᵣH
  - μᵣ: relative permeability of the material

• Magnetic susceptibility:
  - Dimensionless quantity χₘ that measures how magnetizable a material is
  - Defined by M = χₘH
  - Related to relative permeability: μᵣ = 1 + χₘ
  - Varies with temperature, applied field, and material structure`
      },
      {
        title: 'Types of Magnetic Materials',
        content: `Materials exhibit different magnetic behaviors based on their atomic structure:

• Diamagnetic materials:
  - Weak negative magnetization (χₘ ≈ -10⁻⁵)
  - Repelled by magnetic fields
  - Induced magnetic moments oppose applied field
  - Examples: bismuth, copper, water, most organic compounds
  - No permanent magnetic moment in absence of field

• Paramagnetic materials:
  - Weak positive magnetization (χₘ ≈ 10⁻⁵ to 10⁻³)
  - Weakly attracted to magnetic fields
  - Atoms/molecules have permanent magnetic moments
  - Random thermal motion prevents alignment without external field
  - Examples: aluminum, platinum, oxygen

• Ferromagnetic materials:
  - Strong positive magnetization (χₘ >> 1)
  - Strongly attracted to magnetic fields
  - Exhibit spontaneous magnetization and magnetic domains
  - Retain magnetization after field removal (hysteresis)
  - Examples: iron, nickel, cobalt and their alloys

• Antiferromagnetic materials:
  - Neighboring atomic moments align in opposite directions
  - Net magnetization approximately zero
  - Examples: chromium, manganese oxide
  - Exhibit special properties at interfaces and in nanostructures

• Ferrimagnetic materials:
  - Unequal opposing magnetic moments
  - Net non-zero magnetization
  - Examples: magnetite (Fe₃O₄), ferrites
  - Important for high-frequency applications`
      },
      {
        title: 'Magnetic Phenomena',
        content: `Key behaviors and properties of magnetic materials:

• Hysteresis:
  - Path-dependent magnetization response
  - Characterized by hysteresis loop (B-H curve)
  - Remanence: magnetization remaining when field removed
  - Coercivity: field required to demagnetize material
  - Area of loop represents energy loss per cycle

• Domain structure:
  - Regions of uniform magnetization
  - Separated by domain walls
  - Minimize total magnetic energy
  - Domain wall motion occurs during magnetization
  - Single-domain particles exist below critical size

• Temperature effects:
  - Curie temperature (Tc): ferromagnets become paramagnetic above this point
  - Néel temperature (TN): transition point for antiferromagnets
  - Magnetization generally decreases with increasing temperature
  - Follows Curie-Weiss law in paramagnetic region: χ = C/(T-θ)

• Applications:
  - Permanent magnets: high remanence and coercivity
  - Soft magnetic materials: low coercivity, used in transformers
  - Recording media: controlled domain structure
  - Sensors: magnetoresistance and Hall effect devices
  - Spintronics: utilizing electron spin for information processing`
      }
    ]
  },
  'Dia/Paramagnetism': {
    title: 'Dia/Paramagnetism',
    description: 'Two contrasting types of magnetic behavior in materials, characterized by their magnetic susceptibility.',
    sections: [
      {
        title: 'Fundamental Characteristics',
        content: `Dia/Paramagnetism represents two distinct magnetic behaviors:

• Magnetic susceptibility contrast:
  - Diamagnetic: χₘ ≪ 1 (negative values)
  - Paramagnetic: χₘ > 0 (small positive values)
  - Both have susceptibility magnitudes much smaller than ferromagnets

• Field response:
  - Diamagnetic materials develop magnetization opposing the applied field
  - Paramagnetic materials develop magnetization aligned with the applied field
  - Both effects are typically weak and require sensitive instruments to measure

• Absence of spontaneous magnetization:
  - Neither exhibits magnetic ordering without an external field
  - No hysteresis or remanence
  - Linear response to applied fields (at ordinary field strengths)`
      },
      {
        title: 'Diamagnetism',
        content: `Diamagnetism arises from fundamental quantum mechanical principles:

• Physical origin:
  - Present in all materials (universal property)
  - Results from orbital motion of electrons
  - Induced by changes in orbital motion when external field is applied
  - Described by Lenz's law: induced currents oppose the change

• Characteristics:
  - χₘ typically between -10⁻⁶ and -10⁻⁵
  - Temperature independent
  - Repelled by magnetic fields
  - Tends to move toward regions of weaker field

• Notable examples:
  - Bismuth (strongest diamagnetic element, χₘ ≈ -1.7 × 10⁻⁴)
  - Pyrolytic carbon (strongest easily available material)
  - Superconductors (perfect diamagnetism, χₘ = -1)
  - Water, copper, most organic compounds`
      },
      {
        title: 'Paramagnetism',
        content: `Paramagnetism occurs in materials with unpaired electron spins:

• Physical origin:
  - Requires atoms/molecules with permanent magnetic moments
  - Typically from unpaired electron spins
  - Random thermal motion prevents alignment without external field
  - Applied field creates partial alignment against thermal randomization

• Characteristics:
  - χₘ typically between 10⁻⁵ and 10⁻³
  - Temperature dependent: χₘ ∝ 1/T (Curie's law)
  - Attracted to magnetic fields
  - Tends to move toward regions of stronger field

• Notable examples:
  - Transition metals with unpaired d-electrons (manganese, chromium)
  - Rare earth elements with unpaired f-electrons
  - Oxygen (paramagnetic gas)
  - Aluminum, platinum

• Curie's law:
  - χₘ = C/T where C is the material-specific Curie constant
  - Describes temperature dependence of paramagnetic susceptibility
  - Breaks down near phase transitions or at very low temperatures`
      },
      {
        title: 'Applications and Significance',
        content: `Dia/Paramagnetism has important applications in science and technology:

• Scientific applications:
  - Magnetic susceptibility measurements to determine electronic structure
  - Magnetic levitation using diamagnetic materials
  - Magnetic resonance imaging (MRI) contrast agents (paramagnetic)
  - Magnetic cooling using paramagnetic salts

• Material characterization:
  - Identifying unpaired electrons in chemical compounds
  - Determining oxidation states of transition metals
  - Studying molecular structure and bonding

• Technological applications:
  - Paramagnetic oxygen sensors
  - Magnetic separation techniques
  - Contrast agents in MRI
  - Components in certain magnetic devices

• Theoretical significance:
  - Foundation for understanding more complex magnetic behaviors
  - Bridge between classical and quantum descriptions of magnetism
  - Important for understanding electronic structure of materials`
      }
    ]
  },
  'Ferromagnetism': {
    title: 'Ferromagnetism',
    description: 'A magnetic property of materials characterized by spontaneous magnetization, magnetic domains, and hysteresis effects.',
    sections: [
      {
        title: 'Fundamental Properties',
        content: `Ferromagnetism is characterized by several key properties:

• Spontaneous magnetization:
  - Materials exhibit magnetization even without external field
  - Occurs below a critical temperature (Curie temperature)
  - Results from quantum mechanical exchange interaction
  - Parallel alignment of neighboring atomic magnetic moments

• Strong magnetic response:
  - Magnetic susceptibility χₘ >> 1 (typically 10² to 10⁵)
  - Non-linear response to applied fields
  - Magnetization can approach saturation value
  - Much stronger effect than paramagnetism or diamagnetism

• Common materials:
  - Iron, nickel, cobalt (transition metals)
  - Rare earth elements (gadolinium, dysprosium)
  - Many alloys and compounds (Alnico, Nd₂Fe₁₄B)
  - Certain oxides (magnetite Fe₃O₄)`
      },
      {
        title: 'Domain Structure',
        content: `Ferromagnetic materials organize into magnetic domains:

• Domain formation:
  - Regions of uniform magnetization direction
  - Typically 10⁻⁶ to 10⁻³ m in size
  - Separated by domain walls (Bloch or Néel walls)
  - Minimizes total magnetic energy of the system

• Energy considerations:
  - Exchange energy: favors parallel alignment within domains
  - Magnetostatic energy: favors closed magnetic flux paths
  - Magnetocrystalline anisotropy: favors alignment along crystal axes
  - Magnetoelastic energy: interaction between magnetization and strain

• Domain wall structure:
  - Transition region between domains
  - Gradual rotation of magnetic moments
  - Typically 10-100 nm thick
  - Wall movement is key mechanism in magnetization process

• Observation techniques:
  - Bitter pattern technique (magnetic particles)
  - Magneto-optical Kerr effect
  - Magnetic force microscopy
  - Lorentz transmission electron microscopy`
      },
      {
        title: 'Hysteresis Loops',
        content: `Ferromagnets exhibit hysteresis in their magnetization response:

• B-H curve characteristics:
  - Non-linear and history-dependent response
  - Forms a loop when field is cycled
  - Area of loop represents energy loss per cycle
  - Shape depends on material properties and processing

• Key parameters:
  - Saturation magnetization (Mₛ): maximum possible magnetization
  - Remanence (Mᵣ): magnetization remaining when field removed
  - Coercivity (Hc): field required to demagnetize material
  - Initial permeability: slope of curve at origin

• Classification by loop shape:
  - Hard magnetic materials: high coercivity, used for permanent magnets
  - Soft magnetic materials: low coercivity, used in transformers
  - Square loop materials: digital memory applications
  - Thin loop materials: minimize energy loss in AC applications

• Microscopic origin:
  - Domain wall motion (reversible and irreversible)
  - Domain rotation against anisotropy
  - Nucleation of reverse domains
  - Pinning of domain walls at defects`
      },
      {
        title: 'Temperature Effects',
        content: `Temperature strongly affects ferromagnetic behavior:

• Curie temperature (Tc):
  - Critical temperature above which ferromagnetism disappears
  - Material becomes paramagnetic above Tc
  - Examples: iron (770°C), cobalt (1115°C), nickel (358°C)
  - Second-order phase transition

• Temperature dependence:
  - Spontaneous magnetization decreases with increasing temperature
  - Follows Bloch's T³/² law at low temperatures
  - Approaches zero at Tc
  - Magnetic susceptibility follows Curie-Weiss law above Tc: χ = C/(T-Tc)

• Physical mechanism:
  - Thermal energy disrupts alignment of magnetic moments
  - Competition between exchange energy and thermal energy
  - At Tc, thermal energy overcomes exchange interaction
  - Long-range order disappears, short-range order persists

• Applications:
  - Magnetic thermometry
  - Self-regulating heating devices (magnetic induction)
  - Temperature-controlled magnetic switches
  - Magnetic refrigeration (near Tc)`
      }
    ]
  },
  'Maxwell\'s Equations (Magnetic Focus)': {
    title: 'Maxwell\'s Equations (Magnetic Focus)',
    description: 'The fundamental equations of electromagnetism that describe how magnetic fields are generated by currents and changing electric fields.',
    sections: [
      {
        title: 'Ampère-Maxwell Law',
        content: `The magnetic aspect of Maxwell's equations centers on the Ampère-Maxwell law:

• Mathematical form:
  - Differential form: ∇×B = μ₀J + μ₀ϵ₀∂E/∂t
  - Integral form: ∮B·dl = μ₀∫J·dA + μ₀ϵ₀∫∂E/∂t·dA
  - Left side: circulation of magnetic field around a closed loop
  - Right side: current through the loop plus displacement current

• Physical interpretation:
  - Magnetic fields are generated by electric currents
  - Magnetic fields are also generated by changing electric fields
  - The second term (μ₀ϵ₀∂E/∂t) was Maxwell's key addition
  - Completes the symmetry between electric and magnetic fields

• Historical development:
  - Original Ampère's law: ∇×B = μ₀J
  - Maxwell added the displacement current term in the 1860s
  - This modification predicted electromagnetic waves
  - Led to understanding light as an electromagnetic phenomenon`
      },
      {
        title: 'Magnetic Gauss\'s Law',
        content: `The divergence equation for magnetic fields:

• Mathematical form:
  - Differential form: ∇·B = 0
  - Integral form: ∮B·dA = 0
  - States that the net magnetic flux through any closed surface is zero

• Physical interpretation:
  - No magnetic monopoles exist in nature
  - Magnetic field lines always form closed loops
  - Unlike electric field lines, which can begin and end on charges
  - Magnetic field lines never begin or end

• Consequences:
  - Magnetic poles always come in north-south pairs
  - Cutting a magnet creates two complete magnets, not isolated poles
  - Magnetic field can be expressed as curl of vector potential: B = ∇×A
  - Allows mathematical simplifications in many problems`
      },
      {
        title: 'Magnetic Induction',
        content: `Faraday's law describes magnetic induction:

• Mathematical form:
  - Differential form: ∇×E = -∂B/∂t
  - Integral form: ∮E·dl = -∫∂B/∂t·dA
  - Describes how changing magnetic fields create electric fields

• Physical interpretation:
  - Changing magnetic flux induces electromotive force (EMF)
  - Direction of induced current opposes the change (Lenz's law)
  - Forms the basis for electrical generators and transformers
  - Demonstrates the interconnection between electricity and magnetism

• Applications:
  - Electric generators convert mechanical energy to electrical energy
  - Transformers transfer energy between circuits via magnetic coupling
  - Inductors store energy in magnetic fields
  - Magnetic recording technologies`
      },
      {
        title: 'Electromagnetic Wave Equation',
        content: `Maxwell's equations combine to form the wave equation:

• Derivation from Maxwell's equations:
  - Take curl of Faraday's law: ∇×(∇×E) = -∇×(∂B/∂t)
  - Substitute Ampère-Maxwell law: ∇×(∇×E) = -μ₀ϵ₀∂²E/∂t²
  - Use vector identity: ∇×(∇×E) = ∇(∇·E) - ∇²E
  - In vacuum: ∇·E = 0, giving ∇²E = μ₀ϵ₀∂²E/∂t²

• Wave equation:
  - ∇²E = (1/c²)∂²E/∂t²
  - ∇²B = (1/c²)∂²B/∂t²
  - c = 1/√(μ₀ϵ₀) = speed of light
  - Electromagnetic waves travel at speed c

• Properties of electromagnetic waves:
  - E and B fields are perpendicular to each other and to direction of propagation
  - E and B oscillate in phase
  - Amplitudes related by |E| = c|B|
  - Carry energy and momentum`
      }
    ]
  },
  'Poynting Vector': {
    title: 'Poynting Vector',
    description: 'A vector quantity that represents the directional energy flux density of an electromagnetic field.',
    sections: [
      {
        title: 'Definition and Physical Meaning',
        content: `The Poynting vector represents electromagnetic energy flow:

• Mathematical definition:
  - S = E×B/μ₀
  - E: electric field (V/m)
  - B: magnetic field (T)
  - μ₀: permeability of free space
  - Units: watts per square meter (W/m²)

• Physical interpretation:
  - Direction: perpendicular to both E and B fields
  - Magnitude: rate of energy transfer per unit area
  - Points in direction of electromagnetic wave propagation
  - Describes energy flow in electromagnetic fields

• Alternative forms:
  - S = E×H (in SI units)
  - S = c/(4π) E×B (in Gaussian units)
  - For electromagnetic waves: |S| = |E|²/(μ₀c)`
      },
      {
        title: 'Derivation from Maxwell\'s Equations',
        content: `The Poynting vector emerges from energy conservation in electromagnetic fields:

• Starting point:
  - Lorentz force law: F = q(E + v×B)
  - Work done by fields on charges
  - Maxwell's equations

• Key steps in derivation:
  - Calculate rate of work done by fields: j·E
  - Express using Maxwell's equations
  - Identify energy density terms: ½ε₀E² + B²/(2μ₀)
  - Identify energy flow term: E×B/μ₀

• Energy conservation equation:
  - ∂u/∂t + ∇·S = -j·E
  - u: electromagnetic energy density
  - S: Poynting vector
  - j·E: rate of work done on charges

• Physical significance:
  - Demonstrates energy conservation in electromagnetic theory
  - Shows how energy propagates through space
  - Connects fields to energy transport`
      },
      {
        title: 'Applications',
        content: `The Poynting vector has numerous practical applications:

• Electromagnetic wave analysis:
  - Describes energy flow in radio waves, light, and other EM radiation
  - Time-averaged Poynting vector: <S> = ½Re(E×H*)
  - Power transmitted through an area: P = ∫S·dA
  - Radiation pressure: p = |S|/c

• Antenna theory:
  - Characterizes radiation patterns
  - Determines power density at a distance
  - Helps optimize antenna design
  - Calculates radiation resistance

• Optical systems:
  - Describes energy flow in waveguides and optical fibers
  - Analyzes reflection and transmission at interfaces
  - Explains evanescent waves and tunneling
  - Models laser beam propagation

• Circuit theory:
  - Energy flow in transmission lines
  - Power transfer in transformers
  - Skin effect in conductors
  - Near-field energy distribution`
      },
      {
        title: 'Advanced Concepts',
        content: `Several advanced concepts relate to the Poynting vector:

• Time-varying fields:
  - Instantaneous vs. time-averaged Poynting vector
  - Complex Poynting vector for harmonic fields
  - Reactive power and energy storage
  - Poynting's theorem for time-harmonic fields

• Relativistic considerations:
  - Poynting vector as component of energy-momentum tensor
  - Transformation properties under Lorentz transformations
  - Connection to field momentum density
  - Relation to conservation laws

• Quantum interpretation:
  - Photon flux density
  - Quantum mechanical expectation value
  - Relation to photon momentum
  - Quantum fluctuations in vacuum

• Computational methods:
  - Finite-difference time-domain (FDTD) calculations
  - Numerical integration techniques
  - Near-field to far-field transformations
  - Visualization of energy flow patterns`
      }
    ]
  },
  'Magnetic Energy': {
    title: 'Magnetic Energy',
    description: 'The energy stored in magnetic fields, both in inductors carrying current and in free space containing magnetic fields.',
    sections: [
      {
        title: 'Energy in Inductors',
        content: `Magnetic energy stored in current-carrying inductors:

• Energy formula:
  - U = ½LI²
  - L: inductance (henries)
  - I: current (amperes)
  - U: energy (joules)

• Physical interpretation:
  - Work required to establish current in inductor
  - Energy stored in magnetic field surrounding the inductor
  - Released when current is reduced
  - Analogous to potential energy in mechanical systems

• Derivation:
  - Power delivered to inductor: P = VI = I·(L·dI/dt)
  - Energy is integral of power: U = ∫P·dt = ∫L·I·dI
  - Integrating from 0 to I gives U = ½LI²`
      },
      {
        title: 'Energy Density in Magnetic Fields',
        content: `Energy stored per unit volume in a magnetic field:

• Energy density formula:
  - uᵦ = B²/(2μ₀)
  - B: magnetic field strength (tesla)
  - μ₀: permeability of free space
  - uᵦ: energy density (joules per cubic meter)

• Physical interpretation:
  - Energy distributed throughout space containing magnetic field
  - Higher field strength means higher energy density
  - Quadratic dependence on field strength
  - Exists even in vacuum

• Total energy calculation:
  - U = ∫uᵦ·dV (integration over volume)
  - For uniform field: U = uᵦ·V
  - For non-uniform fields: requires volume integration`
      },
      {
        title: 'Mutual Inductance Energy',
        content: `Energy in systems with mutual inductance:

• Energy formula for coupled inductors:
  - U = ½L₁I₁² + ½L₂I₂² + MI₁I₂
  - L₁, L₂: self-inductances
  - M: mutual inductance
  - I₁, I₂: currents in respective circuits

• Physical interpretation:
  - First two terms: energy stored in individual inductors
  - Third term: interaction energy between circuits
  - Positive M: energy increases when currents flow in same direction
  - Negative M: energy increases when currents flow in opposite directions

• Relation to coupling coefficient:
  - M = k√(L₁L₂)
  - k: coupling coefficient (0 ≤ k ≤ 1)
  - k = 1: perfect coupling
  - k = 0: no coupling`
      },
      {
        title: 'Applications',
        content: `Magnetic energy has numerous practical applications:

• Inductive energy storage:
  - Superconducting magnetic energy storage (SMES)
  - Pulse power systems
  - Magnetic energy storage in transformers
  - Inductive components in power supplies

• Energy conversion:
  - Motors: electrical to mechanical energy
  - Generators: mechanical to electrical energy
  - Transformers: energy transfer between circuits
  - Induction heating: magnetic to thermal energy

• Electromagnetic waves:
  - Equal partition between electric and magnetic energy
  - Energy density oscillates between forms
  - Total electromagnetic energy density: u = uₑ + uᵦ
  - Propagation of energy in space

• Magnetic forces:
  - Force derived from gradient of magnetic energy
  - Used in magnetic levitation
  - Basis for electromagnetic actuators
  - Magnetic pressure in plasmas and fusion devices`
      }
    ]
  },
  'Superconductivity': {
    title: 'Superconductivity',
    description: 'A quantum mechanical phenomenon of exactly zero electrical resistance and expulsion of magnetic fields occurring in certain materials below a critical temperature.',
    sections: [
      {
        title: 'Basic Properties',
        content: `Superconductivity exhibits two characteristic properties:

• Zero electrical resistance:
  - Current flows without dissipation
  - Resistance drops to exactly zero below Tc
  - Persistent currents can flow indefinitely
  - Measured upper limit for resistivity: ρ < 10⁻²⁵ Ω·m

• Meissner effect:
  - Complete expulsion of magnetic fields
  - B = 0 inside a superconductor (perfect diamagnetism)
  - Different from perfect conductivity
  - Occurs only below critical field strength Hc
  - Demonstrates superconductivity is a thermodynamic state`
      },
      {
        title: 'London Equations',
        content: `The London equations describe the electromagnetic response:

• First London equation:
  - ∂J/∂t = (nₛe²/m)E
  - Relates current density to electric field
  - nₛ: superconducting electron density
  - Describes acceleration without resistance

• Second London equation:
  - ∇×J = -(nₛe²/m)B
  - Relates current density to magnetic field
  - Leads to magnetic field penetration equation

• Penetration depth equation:
  - ∇²B = B/λL²
  - λL: London penetration depth
  - λL = √(m/μ₀nₛe²)
  - Magnetic field decays exponentially inside superconductor
  - Typical values: 50-500 nm`
      },
      {
        title: 'Types of Superconductors',
        content: `Superconductors are classified into two types:

• Type I superconductors:
  - Sharp transition between normal and superconducting states
  - Complete Meissner effect below critical field Hc
  - Mostly pure metals (Al, Pb, Hg, Sn)
  - Lower critical fields and temperatures
  - Described well by BCS theory

• Type II superconductors:
  - Two critical fields: Hc₁ and Hc₂
  - Below Hc₁: complete Meissner effect
  - Between Hc₁ and Hc₂: mixed state with magnetic vortices
  - Above Hc₂: normal state
  - Includes alloys, compounds, high-Tc materials
  - Higher critical fields and temperatures`
      },
      {
        title: 'Theoretical Understanding',
        content: `Several theories explain superconductivity:

• BCS theory:
  - Developed by Bardeen, Cooper, and Schrieffer (1957)
  - Explains conventional superconductors
  - Cooper pairs: electrons bound through phonon interactions
  - Energy gap in electronic spectrum
  - Coherent quantum state of many electrons

• Ginzburg-Landau theory:
  - Phenomenological description
  - Introduces complex order parameter ψ
  - Describes spatial variations and magnetic field effects
  - Particularly useful for inhomogeneous situations
  - Predicts coherence length ξ and type I/II behavior

• High-temperature superconductivity:
  - Discovered in cuprates (1986)
  - Critical temperatures above 77K (liquid nitrogen)
  - Not fully explained by BCS theory
  - Possible mechanisms: magnetic interactions, resonating valence bonds
  - Active area of research`
      }
    ]
  },
  'Magnetic Monopoles': {
    title: 'Magnetic Monopoles',
    description: 'Hypothetical elementary particles that carry a single magnetic pole (north or south) and would be the magnetic analog of electric charges.',
    sections: [
      {
        title: 'Theoretical Basis',
        content: `Magnetic monopoles have a strong theoretical foundation:

• Maxwell's equations asymmetry:
  - Electric field: ∇·E = ρ/ε₀ (sources exist)
  - Magnetic field: ∇·B = 0 (no sources)
  - Adding monopoles: ∇·B = μ₀ρₘ
  - Would create symmetry between electricity and magnetism

• Dirac's quantization condition:
  - qₘqₑ = 2πnℏ (n = integer)
  - qₘ: magnetic charge
  - qₑ: electric charge
  - ℏ: reduced Planck constant
  - Relates smallest possible magnetic charge to electric charge
  - Explains electric charge quantization`
      },
      {
        title: 'Grand Unified Theories',
        content: `Monopoles appear in many unified theories:

• GUT monopoles:
  - Predicted by Grand Unified Theories
  - Topological defects from symmetry breaking
  - Extremely massive: 10¹⁶ GeV (10⁻⁸ kg)
  - Would have formed in early universe
  - Extremely rare due to cosmic inflation

• 't Hooft-Polyakov monopoles:
  - Solution to non-Abelian gauge theories
  - Extended structure with finite energy
  - Core contains exotic particles
  - Magnetic charge distributed over finite volume
  - Mathematical consistency with quantum field theory`
      },
      {
        title: 'Experimental Searches',
        content: `Despite extensive searches, monopoles remain undetected:

• Direct detection methods:
  - Superconducting quantum interference devices (SQUIDs)
  - Induction in conducting loops
  - Ionization tracks in detectors
  - Magnetic charge trapping in ferromagnetic materials
  - No confirmed observations to date

• Cosmic searches:
  - Monopole and Exotics Detector at the LHC (MoEDAL)
  - Antarctic Impulsive Transient Antenna (ANITA)
  - Monopole, Astrophysics and Cosmic Ray Observatory (MACRO)
  - Cosmic ray detectors
  - Lunar soil analysis

• Indirect constraints:
  - Parker limit: galactic magnetic field would be depleted
  - Cosmological limits from early universe
  - Upper limits on monopole flux: < 10⁻¹⁵ cm⁻²s⁻¹sr⁻¹`
      },
      {
        title: 'Analogues and Applications',
        content: `Monopole-like structures exist in various systems:

• Condensed matter analogues:
  - Magnetic monopoles in spin ice materials
  - Emergent quasiparticles with monopole properties
  - Dirac strings observable in neutron scattering
  - Not fundamental particles but collective excitations

• Theoretical applications:
  - Electromagnetic duality
  - Electric-magnetic symmetry
  - Non-perturbative effects in quantum field theory
  - Confinement mechanisms in quantum chromodynamics

• Potential technological implications:
  - Novel magnetic devices
  - Magnetic charge circuits
  - Quantum computing applications
  - Fundamental physics research`
      }
    ]
  },
  'Landau Levels': {
    title: 'Landau Levels',
    description: 'Quantized energy levels of charged particles moving in a magnetic field, leading to phenomena such as the quantum Hall effect.',
    sections: [
      {
        title: 'Quantum Mechanical Origin',
        content: `Landau levels arise from quantum mechanics in magnetic fields:

• Hamiltonian approach:
  - Charged particle in uniform magnetic field
  - Hamiltonian: H = (p - qA)²/2m
  - A: magnetic vector potential
  - Leads to quantized energy levels

• Energy quantization:
  - Eₙ = ℏωc(n + ½)
  - ωc = qB/m (cyclotron frequency)
  - n = 0, 1, 2, ... (quantum number)
  - Each level highly degenerate
  - Degeneracy per unit area: nL = qB/h

• Wave functions:
  - Solutions to Schrödinger equation
  - Harmonic oscillator-like states
  - Localized in plane perpendicular to B
  - Free motion along field direction`
      },
      {
        title: 'Semiclassical Picture',
        content: `A semiclassical interpretation helps visualize Landau levels:

• Classical orbits:
  - Charged particles move in circular orbits
  - Radius: rc = mv/qB (cyclotron radius)
  - Angular frequency: ωc = qB/m
  - Quantized by wave-particle duality

• Quantized flux:
  - Each orbit encloses quantized magnetic flux
  - Φ = nΦ₀ where Φ₀ = h/q (flux quantum)
  - Corresponds to quantized area in phase space
  - Consistent with Bohr-Sommerfeld quantization

• Effective potential:
  - Magnetic field creates effective harmonic potential
  - V(r) = ½mωc²r²
  - Explains harmonic oscillator energy spectrum
  - Accounts for discrete energy levels`
      },
      {
        title: 'Quantum Hall Effect',
        content: `Landau levels are central to the quantum Hall effect:

• Integer quantum Hall effect:
  - Hall conductivity quantized: σxy = ne²/h
  - n: integer (filling factor)
  - Occurs when Fermi energy lies between Landau levels
  - Plateaus in Hall resistance
  - Zero longitudinal resistance

• Fractional quantum Hall effect:
  - Hall conductivity: σxy = (p/q)e²/h
  - p, q: integers (p/q: filling factor)
  - Results from electron-electron interactions
  - Quasiparticles with fractional charge
  - Evidence for composite fermions

• Experimental conditions:
  - Two-dimensional electron systems
  - Low temperatures (typically < 4K)
  - Strong magnetic fields (several tesla)
  - High-mobility samples`
      },
      {
        title: 'Applications and Extensions',
        content: `Landau levels have numerous applications:

• Condensed matter physics:
  - Quantum Hall metrology (resistance standard)
  - Magnetotransport measurements
  - Shubnikov-de Haas oscillations
  - Quantum Hall interferometry

• Relativistic Landau levels:
  - Dirac particles in magnetic fields
  - Eₙ = ±√(2ℏvF²qBn)
  - Zero-energy level for n = 0
  - Observed in graphene
  - Anomalous quantum Hall effect

• Topological aspects:
  - Edge states and bulk-boundary correspondence
  - Chern numbers and topological invariants
  - Connection to topological insulators
  - Robust against disorder
  - Quantum computing applications`
      }
    ]
  },
  'Topological Magnets': {
    title: 'Topological Magnets',
    description: 'Magnetic systems with topologically protected spin structures such as skyrmions, characterized by winding numbers and Berry phase effects.',
    sections: [
      {
        title: 'Skyrmions',
        content: `Magnetic skyrmions are topologically protected spin textures:

• Structure and characteristics:
  - Whirl-like spin configurations
  - Nanoscale magnetic structures (10-100 nm)
  - Topologically protected against continuous deformations
  - Characterized by topological charge (winding number)
  - Topological charge: Q = (1/4π)∫m·(∂ₓm×∂ᵧm)dxdy

• Formation mechanisms:
  - Dzyaloshinskii-Moriya interaction (DMI)
  - Magnetic frustration
  - Competing exchange interactions
  - External magnetic fields
  - Temperature effects

• Types of skyrmions:
  - Bloch skyrmions: spins rotate in planes parallel to radius
  - Néel skyrmions: spins rotate in planes containing radius
  - Antiskyrmions: opposite topological charge
  - Skyrmion lattices: periodic arrays of skyrmions`
      },
      {
        title: 'Berry Phase Effects',
        content: `Berry phase plays a key role in topological magnetism:

• Geometric phase:
  - Phase acquired during adiabatic evolution
  - Depends only on path in parameter space
  - Observable in various magnetic systems
  - Affects electron and magnon transport

• Berry curvature:
  - Local measure of Berry phase
  - Analogous to magnetic field in parameter space
  - Ω = ∇ × A (A: Berry connection)
  - Integral over closed surface gives topological invariant

• Experimental signatures:
  - Anomalous Hall effect
  - Topological Hall effect
  - Magnon Hall effect
  - Spin-transfer torque effects
  - Skyrmion Hall effect`
      },
      {
        title: 'Materials and Observations',
        content: `Topological magnetic structures appear in various materials:

• Bulk materials:
  - B20 compounds (MnSi, FeGe)
  - Cu₂OSeO₃
  - β-Mn-type Co-Zn-Mn alloys
  - Heusler compounds

• Thin films and interfaces:
  - Heavy metal/ferromagnet interfaces (Pt/Co, Ir/Co)
  - Magnetic multilayers
  - Ultrathin films with interfacial DMI
  - Artificial magnetic systems

• Observation techniques:
  - Lorentz transmission electron microscopy
  - Magnetic force microscopy
  - Spin-polarized scanning tunneling microscopy
  - Neutron scattering
  - X-ray magnetic circular dichroism`
      },
      {
        title: 'Applications and Future Directions',
        content: `Topological magnets have promising applications:

• Information technology:
  - Skyrmion-based memory devices
  - Logic operations using skyrmions
  - Racetrack memory concepts
  - Low-energy information processing

• Advantages:
  - Small size (nanoscale)
  - Topological stability
  - Low current density for motion
  - Room temperature stability in some materials

• Challenges and research directions:
  - Control of individual skyrmions
  - Reducing pinning effects
  - Increasing stability at room temperature
  - Integration with conventional electronics
  - Quantum effects in skyrmion systems`
      }
    ]
  },
  'Relativistic Magnetism': {
    title: 'Relativistic Magnetism',
    description: 'The study of magnetic phenomena from the perspective of special relativity, showing that electric and magnetic fields transform into each other under Lorentz transformations.',
    sections: [
      {
        title: 'Electromagnetic Tensor',
        content: `The electromagnetic field tensor unifies electric and magnetic fields:

• Definition and structure:
  - Antisymmetric rank-2 tensor: Fμν = -Fνμ
  - Components: F0i = -Fi0 = Ei/c
  - Components: Fij = -εijkBk
  - Compact representation of both E and B fields
  - Transforms as a tensor under Lorentz transformations

• Dual tensor:
  - F̃μν = (1/2)εμνρσFρσ
  - Relates to the original tensor
  - Used in covariant formulation of Maxwell's equations

• Maxwell's equations in tensor form:
  - ∂μFνρ + ∂νFρμ + ∂ρFμν = 0 (homogeneous)
  - ∂μFμν = μ₀Jν (inhomogeneous)
  - Compact, manifestly covariant form`
      },
      {
        title: 'Lorentz Transformations of Fields',
        content: `Electric and magnetic fields transform under Lorentz boosts:

• Transformation equations:
  - E′ = γ(E + v×B)
  - B′ = γ(B - v×E/c²)
  - γ = 1/√(1-v²/c²) (Lorentz factor)
  - v: relative velocity between reference frames

• Physical interpretation:
  - Electric and magnetic fields mix under boosts
  - Magnetic field in one frame can appear as electric in another
  - Pure electric field transforms to include magnetic component
  - Pure magnetic field transforms to include electric component

• Examples:
  - Moving charge: electric field in rest frame, electric and magnetic fields in lab frame
  - Current-carrying wire: magnetic field in lab frame, electric and magnetic fields in electron's frame`
      },
      {
        title: 'Relativistic Origins of Magnetism',
        content: `Magnetism can be understood as a relativistic effect:

• Current-carrying wire:
  - Rest frame: equal densities of positive and negative charges
  - Moving frame: length contraction creates charge imbalance
  - Electrostatic forces between moving charges
  - Magnetic force is relativistic correction to electric force

• Magnetic moment:
  - Classical electron orbit creates current loop
  - Relativistic transformation of electric dipole
  - Spin magnetic moment requires quantum mechanics and relativity

• Magnetic interactions:
  - Two current-carrying wires
  - Force explained by relativistic transformation of electrostatic forces
  - Consistent with Ampère's force law`
      },
      {
        title: 'Relativistic Electrodynamics Applications',
        content: `Relativistic magnetism has important applications:

• Particle accelerators:
  - Design of magnetic fields for beam steering
  - Synchrotron radiation
  - Relativistic particle dynamics in electromagnetic fields

• Astrophysical phenomena:
  - Relativistic jets from active galactic nuclei
  - Pulsar magnetospheres
  - Magnetic fields near black holes
  - Relativistic shocks in cosmic rays

• Advanced materials:
  - Spin-orbit coupling in materials
  - Relativistic effects in heavy element compounds
  - High-speed electronics
  - Spintronics devices`
      }
    ]
  },
  'Unification': {
    title: 'Unification',
    description: 'The coupling of electric and magnetic fields through Maxwell\'s equations, leading to electromagnetic waves and demonstrating the unified nature of electromagnetism.',
    sections: [
      {
        title: 'Maxwell\'s Equations',
        content: `Maxwell's equations describe the unified electromagnetic field:

• Gauss's law for electricity:
  - ∇·E = ρ/ε₀
  - Electric field diverges from positive charges
  - Integral form: ∮E·dA = Q/ε₀
  - Describes how charges create electric fields

• Gauss's law for magnetism:
  - ∇·B = 0
  - No magnetic monopoles
  - Integral form: ∮B·dA = 0
  - Magnetic field lines always form closed loops

• Faraday's law of induction:
  - ∇×E = -∂B/∂t
  - Changing magnetic field creates electric field
  - Integral form: ∮E·dl = -d/dt∫B·dA
  - Basis for generators and transformers

• Ampère-Maxwell law:
  - ∇×B = μ₀J + μ₀ε₀∂E/∂t
  - Currents and changing electric fields create magnetic fields
  - Integral form: ∮B·dl = μ₀I + μ₀ε₀d/dt∫E·dA
  - Maxwell's addition of displacement current term completed the unification`
      },
      {
        title: 'Electromagnetic Waves',
        content: `Maxwell's equations predict electromagnetic waves:

• Wave equations:
  - ∇²E = μ₀ε₀∂²E/∂t²
  - ∇²B = μ₀ε₀∂²B/∂t²
  - Derived directly from Maxwell's equations in vacuum
  - Wave speed: c = 1/√(μ₀ε₀) = 3×10⁸ m/s

• Wave properties:
  - Transverse waves (E ⊥ B ⊥ direction of propagation)
  - E and B oscillate in phase
  - Amplitudes related by |E| = c|B|
  - Carry energy and momentum
  - Exert radiation pressure

• Electromagnetic spectrum:
  - Radio waves
  - Microwaves
  - Infrared radiation
  - Visible light
  - Ultraviolet radiation
  - X-rays
  - Gamma rays
  - All are electromagnetic waves differing only in frequency`
      },
      {
        title: 'Historical Significance',
        content: `The unification of electricity and magnetism was a major scientific achievement:

• Before Maxwell:
  - Electricity and magnetism studied as separate phenomena
  - Oersted (1820): current produces magnetic field
  - Faraday (1831): changing magnetic field produces electric current
  - Separate laws for electric and magnetic phenomena

• Maxwell's contribution:
  - Added displacement current term to Ampère's law
  - Mathematically unified all electromagnetic phenomena
  - Predicted electromagnetic waves
  - Identified light as an electromagnetic wave
  - Published "A Treatise on Electricity and Magnetism" (1873)

• Experimental confirmation:
  - Hertz (1888): generated and detected radio waves
  - Measured their speed, confirming Maxwell's prediction
  - Demonstrated their wave properties
  - Validated the electromagnetic theory of light`
      },
      {
        title: 'Modern Applications',
        content: `The unification of electromagnetism has numerous applications:

• Telecommunications:
  - Radio and television broadcasting
  - Mobile communications
  - Satellite communications
  - Wireless networks

• Optics and photonics:
  - Fiber optic communications
  - Lasers and optical devices
  - Imaging technologies
  - Optical computing

• Medical applications:
  - MRI (magnetic resonance imaging)
  - Radiation therapy
  - Diagnostic imaging (X-rays)
  - Electromagnetic stimulation therapies

• Energy generation and transmission:
  - Electromagnetic generators
  - Power transmission
  - Transformers
  - Induction heating`
      }
    ]
  },
  'Gauge Theory': {
    title: 'Gauge Theory',
    description: 'A field theory with a symmetry group that acts locally, where the magnetic vector potential A is interpreted as a gauge field, leading to the Aharonov-Bohm effect.',
    sections: [
      {
        title: 'Magnetic Vector Potential',
        content: `The magnetic vector potential A is central to gauge theory:

• Definition and properties:
  - B = ∇×A (magnetic field as curl of A)
  - Not uniquely defined: A → A + ∇χ gives same B
  - χ: arbitrary scalar function (gauge function)
  - This freedom is gauge invariance
  - Physical observables must be gauge-invariant

• Relation to electric field:
  - E = -∇φ - ∂A/∂t
  - φ: electric scalar potential
  - Under gauge transformation: φ → φ - ∂χ/∂t
  - Combined with A → A + ∇χ preserves E and B

• Mathematical significance:
  - A as a connection on a fiber bundle
  - Parallel transport of phase
  - Holonomy related to magnetic flux
  - Geometrical interpretation of electromagnetism`
      },
      {
        title: 'Aharonov-Bohm Effect',
        content: `The Aharonov-Bohm effect demonstrates the physical significance of A:

• Experimental setup:
  - Electron beam split into two paths
  - Paths enclose a solenoid with magnetic field B
  - B = 0 outside solenoid, but A ≠ 0
  - Interference pattern depends on enclosed magnetic flux

• Quantum mechanical explanation:
  - Electron wavefunction acquires phase: exp(ie/ℏ∫A·dl)
  - Phase difference: Δφ = e/ℏ∮A·dl = e/ℏΦB
  - ΦB: magnetic flux through enclosed area
  - Interference pattern shifts with changing flux

• Significance:
  - Proves A has physical effects even where B = 0
  - Demonstrates non-local nature of quantum mechanics
  - Shows gauge potential is more than a mathematical convenience
  - First experimental confirmation: Chambers (1960)`
      },
      {
        title: 'Gauge Symmetry',
        content: `Gauge symmetry is a cornerstone of modern physics:

• U(1) gauge symmetry:
  - Local phase transformations: ψ → ψ·exp(iα(x))
  - Requires introduction of gauge field A
  - Describes electromagnetism
  - Conserved quantity: electric charge

• Non-Abelian gauge theories:
  - SU(2), SU(3) symmetry groups
  - Multiple gauge fields
  - Self-interactions between gauge fields
  - Describe weak and strong nuclear forces
  - Standard Model based on U(1)×SU(2)×SU(3)

• Gauge principle:
  - Local symmetry determines interaction
  - Force-carrying particles are gauge bosons
  - Photon: gauge boson of electromagnetism
  - W±, Z: gauge bosons of weak force
  - Gluons: gauge bosons of strong force`
      },
      {
        title: 'Applications and Extensions',
        content: `Gauge theory extends beyond electromagnetism:

• Condensed matter physics:
  - Effective gauge fields in materials
  - Berry phase as gauge phenomenon
  - Quantum Hall effect
  - Topological insulators

• Quantum field theory:
  - Path integral formulation
  - Gauge fixing procedures
  - Faddeev-Popov ghosts
  - Renormalization

• Geometric phases:
  - Berry phase in quantum mechanics
  - Pancharatnam phase in optics
  - Hannay angle in classical mechanics
  - Connection to topology and differential geometry

• Quantum computing:
  - Topological quantum computation
  - Anyons as quasiparticles
  - Fault-tolerant quantum operations
  - Quantum error correction`
      }
    ]
  },
  'Quantum Magnetism': {
    title: 'Quantum Magnetism',
    description: 'The quantum mechanical treatment of magnetic phenomena, including intrinsic spin magnetism and the Zeeman effect, which cannot be explained by classical physics.',
    sections: [
      {
        title: 'Spin Magnetism',
        content: `Quantum mechanics reveals the intrinsic magnetic properties of particles:

• Electron spin:
  - Intrinsic angular momentum S
  - Quantum number s = 1/2 for electrons
  - Not due to physical rotation
  - Purely quantum mechanical property
  - No classical analog

• Spin magnetic moment:
  - μₛ = -gₛ(e/2m)S
  - gₛ ≈ 2.002 (g-factor)
  - e: electron charge
  - m: electron mass
  - Proportional to spin angular momentum
  - Bohr magneton: μB = eℏ/2m ≈ 9.27×10⁻²⁴ J/T

• Stern-Gerlach experiment:
  - Demonstrated space quantization of magnetic moments
  - Silver atoms passed through inhomogeneous magnetic field
  - Beam split into two discrete components
  - Confirmed quantum nature of angular momentum
  - Experimental proof of spin`
      },
      {
        title: 'Zeeman Effect',
        content: `The Zeeman effect reveals energy level splitting in magnetic fields:

• Normal Zeeman effect:
  - Splitting of spectral lines in magnetic field
  - Energy shift: ΔE = μB·B = μBBmₗ
  - mₗ: magnetic quantum number
  - Observed in atoms with zero net spin
  - Triplet pattern in emission/absorption spectra

• Anomalous Zeeman effect:
  - More complex splitting pattern
  - Due to spin-orbit coupling
  - Occurs in atoms with non-zero spin
  - Energy levels determined by total angular momentum
  - Multiple spectral lines

• Fine structure:
  - Spin-orbit interaction splits energy levels
  - J = L + S (total angular momentum)
  - Energy proportional to J·J = j(j+1)
  - Explains doublet structure in alkali spectra
  - Basis for selection rules in transitions`
      },
      {
        title: 'Quantum Magnetic Systems',
        content: `Quantum effects dominate in many magnetic materials:

• Paramagnetism:
  - Quantum treatment via Brillouin function
  - Accounts for quantized angular momentum
  - Low-temperature behavior differs from classical theory
  - Langevin function recovered in classical limit

• Ferromagnetism:
  - Exchange interaction is quantum mechanical
  - Heisenberg model: H = -J∑S₁·S₂
  - J: exchange constant
  - Positive J favors parallel spins
  - Quantum fluctuations reduce ordered moment

• Antiferromagnetism:
  - Negative exchange constant J
  - Favors antiparallel spin alignment
  - Quantum fluctuations can destroy order
  - Quantum critical points
  - Spin waves as elementary excitations`
      },
      {
        title: 'Advanced Quantum Magnetic Phenomena',
        content: `Quantum mechanics reveals unique magnetic behaviors:

• Quantum Hall effect:
  - Quantized Hall conductance: σxy = νe²/h
  - ν: filling factor (integer or fraction)
  - Requires quantum mechanical treatment
  - Related to topology of electron states

• Spin liquids:
  - Highly entangled quantum states
  - No magnetic order even at zero temperature
  - Quantum fluctuations prevent ordering
  - Emergent gauge fields
  - Potential applications in quantum computing

• Magnetic resonance:
  - Nuclear magnetic resonance (NMR)
  - Electron spin resonance (ESR)
  - Resonant absorption at Larmor frequency: ω = γB
  - γ: gyromagnetic ratio
  - Basis for magnetic resonance imaging (MRI)
  - Quantum coherent manipulation of spins`
      }
    ]
  }
};