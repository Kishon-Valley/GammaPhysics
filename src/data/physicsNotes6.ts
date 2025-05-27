export const physicsNotes6: {
  [key: string]: {
    title: string;
    description: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
} = {
  'Quantum Gravity': {
    title: 'Quantum Gravity',
    description: 'The field of theoretical physics seeking to describe gravity according to the principles of quantum mechanics, attempting to unify quantum mechanics and general relativity into a complete theory.',
    sections: [
      {
        title: 'The Unification Problem',
        content: `• Incompatibility Issues:
- General relativity: Describes gravity as spacetime curvature
- Quantum mechanics: Describes forces via particle exchange
- Quantum field theory works for electromagnetic, weak, and strong forces
- Gravity resists standard quantization approaches
- Perturbative quantum gravity is non-renormalizable

• Conceptual Challenges:
- Background independence vs. fixed background spacetime
- Quantum nature of spacetime itself
- Problem of time in quantum gravity
- Measurement problem in quantum cosmology
- Singularity resolution (black holes, Big Bang)`
      },
      {
        title: 'String Theory',
        content: `• Basic Framework:
- Fundamental objects: 1D strings instead of 0D particles
- String length scale: lₛ ≈ 10⁻³⁵ m (Planck length)
- Different vibrational modes represent different particles
- Graviton emerges naturally as a massless spin-2 string mode
- Requires supersymmetry and extra dimensions

• Key Developments:
- Superstring theories (Type I, IIA, IIB, SO(32), E₈×E₈)
- M-theory: 11-dimensional theory unifying five string theories
- D-branes: Extended objects where strings can end
- String landscape: ~10⁵⁰⁰ possible vacuum states
- Compactification: How extra dimensions are hidden`
      },
      {
        title: 'Loop Quantum Gravity',
        content: `• Canonical Approach:
- Space quantized into discrete 'atoms of space'
- Spin networks: Quantum states of spatial geometry
- Spin foams: Spacetime evolution of spin networks
- Area and volume operators have discrete spectra
- Background independent formulation

• Physical Predictions:
- Quantum geometry at Planck scale
- Singularity resolution via 'big bounce'
- Black hole entropy calculation
- Potential observable effects in cosmology
- Modified dispersion relations for light`
      },
      {
        title: 'AdS/CFT Correspondence',
        content: `• Holographic Principle:
- Quantum gravity in (n+1)-dimensional anti-de Sitter space
- Equivalent to conformal field theory in n dimensions
- Information in volume encoded on boundary
- Entropy formula: S = c³A/4Gℏ
- Strong-weak coupling duality

• Applications:
- Black hole information paradox
- Quantum entanglement and spacetime geometry
- Quark-gluon plasma via gauge/gravity duality
- Condensed matter systems (strange metals, superconductors)
- Computational approaches to quantum gravity`
      },
      {
        title: 'Other Approaches and Experimental Status',
        content: `• Alternative Frameworks:
- Causal set theory: Discrete spacetime elements with causal relations
- Asymptotic safety: Non-perturbative renormalization of gravity
- Causal dynamical triangulations: Path integral over spacetime geometries
- Twistor theory: Encoding spacetime in terms of light rays
- Noncommutative geometry: Quantum structure of spacetime

• Experimental Prospects:
- Gravitational wave observations
- Cosmic microwave background polarization
- Quantum gravity phenomenology (Lorentz violation tests)
- Planck-scale effects in high-energy cosmic rays
- Quantum gravity effects in laboratory systems`
      }
    ]
  },
  'Big Bang Theory': {
    title: 'Big Bang Theory',
    description: 'The prevailing cosmological model explaining the origin and evolution of the universe from an initial high-density, high-temperature state to its current form through expansion.',
    sections: [
      {
        title: 'Observational Evidence',
        content: `• Cosmic Microwave Background (CMB):
- Discovered by Penzias and Wilson (1965)
- Thermal radiation at T ≈ 2.725 K
- Nearly perfect blackbody spectrum
- Temperature anisotropies at ΔT/T ≈ 10⁻⁵
- Polarization patterns (E-modes and B-modes)
- Provides snapshot of universe at z ≈ 1100 (380,000 years after Big Bang)

• Expansion of the Universe:
- Hubble's law: v = H₀d (recession velocity proportional to distance)
- Current value: H₀ ≈ 67-73 km/s/Mpc
- Accelerating expansion discovered using Type Ia supernovae
- Large-scale structure formation consistent with expansion history`
      },
      {
        title: 'Big Bang Nucleosynthesis',
        content: `• Primordial Element Formation:
- Occurred during first 3-20 minutes after Big Bang
- Initial conditions: protons, neutrons, electrons, photons
- Key reactions: n + p → d + γ, d + p → ³He + γ, etc.
- Predicted abundances: ⁻⁴He (25%), D (10⁻⁵), ³He (10⁻⁵), ⁷Li (10⁻⁹)
- Observations match predictions, confirming model

• Baryon-to-Photon Ratio:
- η = nₕ/nγ ≈ 6 × 10⁻¹⁰
- Determines nucleosynthesis outcomes
- Consistent with CMB measurements
- Implies baryonic matter is only ~5% of critical density`
      },
      {
        title: 'ΛCDM Model',
        content: `• Components of the Universe:
- Ordinary matter (baryons): ~5%
- Cold Dark Matter (CDM): ~25%
- Dark Energy (Λ): ~70%
- Radiation: <0.01% today

• Mathematical Framework:
- Friedmann equation: H² = (8πG/3)(ρₘ + ρᴿ + ρΛ)
- Scale factor evolution: a(t) describes universe expansion
- Cosmological parameters: Ωₘ, Ωᴿ, ΩΛ, H₀
- Flatness: Ωₘ + Ωᴿ + ΩΛ ≈ 1 (from CMB)`
      },
      {
        title: 'Challenges and Extensions',
        content: `• Theoretical Issues:
- Horizon problem: Why is CMB uniform across causally disconnected regions?
- Flatness problem: Why is universe so close to flat?
- Magnetic monopole problem: Why aren't they observed?
- Solutions: Cosmic inflation theory (rapid exponential expansion)

• Future Research:
- Nature of dark energy and dark matter
- Primordial gravitational waves
- Baryon asymmetry (matter-antimatter imbalance)
- Pre-Big Bang physics and multiverse theories
- Quantum gravity effects near initial singularity`
      }
    ]
  },
  'Dark Matter': {
    title: 'Dark Matter',
    description: 'A hypothetical form of matter that does not interact with the electromagnetic force but would still have gravitational effects on ordinary matter, explaining galactic rotation curves and other astronomical observations.',
    sections: [
      {
        title: 'Observational Evidence',
        content: `• Galactic Rotation Curves:
- Stars in outer galaxy regions move faster than expected from visible matter
- Flat rotation curves: v(r) ≈ constant at large r
- Implies mass increases linearly with radius: M(r) ≈ r
- First noted by Vera Rubin in the 1970s
- Observed in virtually all spiral galaxies

• Gravitational Lensing:
- Light bending around massive objects
- Strong lensing: multiple images or Einstein rings
- Weak lensing: statistical distortion of background galaxies
- Bullet Cluster (1E 0657-56): direct evidence for dark matter
- Shows dark matter separated from visible matter after collision`
      },
      {
        title: 'Additional Evidence',
        content: `• Galaxy Clusters:
- Virial theorem analysis shows insufficient visible mass
- X-ray emissions from hot gas require additional gravitational binding
- Mass-to-light ratios much higher than expected

• Cosmic Structure Formation:
- Large-scale structure requires non-baryonic matter
- CMB anisotropies constrain dark matter density
- N-body simulations with dark matter match observed structures
- Baryon Acoustic Oscillations (BAO) consistent with dark matter model`
      },
      {
        title: 'Candidate Particles',
        content: `• Weakly Interacting Massive Particles (WIMPs):
- Mass range: ~10 GeV to few TeV
- Interact via weak force and gravity
- Thermal production in early universe
- Detection methods: direct (nuclear recoil), indirect (annihilation products)

• Axions:
- Very light particles: ~μV to meV range
- Originally proposed to solve strong CP problem in QCD
- Can be detected through photon conversion in magnetic fields
- Could form Bose-Einstein condensates as cold dark matter`
      },
      {
        title: 'Alternative Theories',
        content: `• Modified Newtonian Dynamics (MOND):
- Proposes modification of gravity at low accelerations
- a = aₙ when a << a₀ (a₀ ≈ 10⁻¹⁰ m/s²)
- Explains rotation curves without dark matter
- Challenges explaining galaxy clusters and cosmological observations

• Current Status:
- Direct detection experiments: XENON, LUX, PandaX, etc.
- Indirect searches: Fermi-LAT, AMS, IceCube
- Collider searches at LHC
- No definitive non-gravitational detection yet
- Dark matter remains one of physics' greatest mysteries`
      }
    ]
  },
  'Black Hole Thermodynamics': {
    title: 'Black Hole Thermodynamics',
    description: 'The area of study that applies the principles of thermodynamics to black holes, establishing relationships between black hole properties and thermodynamic quantities like temperature and entropy.',
    sections: [
      {
        title: 'Thermodynamic Properties',
        content: `• Black Hole Temperature:
- Hawking temperature: Tₕ = ℏc³/8πGMkₕ
- Inversely proportional to mass
- For solar mass black hole: T ≈ 10⁻⁸ K (extremely cold)
- For micro black holes: can be very hot
- Derived from quantum field theory in curved spacetime

• Black Hole Entropy:
- Bekenstein-Hawking entropy: S = kₕA/4lₗ²
- A: event horizon area, lₗ: Planck length
- Proportional to surface area, not volume
- Suggests holographic principle
- For solar mass black hole: S ≈ 10⁷⁸ kₕ (enormous)`
      },
      {
        title: 'Hawking Radiation',
        content: `• Quantum Mechanism:
- Vacuum fluctuations near event horizon
- Particle-antiparticle pairs created
- Negative energy particle falls in, positive energy escapes
- Appears as thermal radiation at temperature Tₕ
- Not observed directly (too faint for astrophysical black holes)

• Consequences:
- Black holes slowly evaporate
- Evaporation time: τ ≈ 5120πG²M³/ℏc⁴
- Solar mass black hole: τ ≈ 10⁶⁷ years
- Primordial black holes with M < 10¹µ g would have evaporated by now
- Final stages may involve quantum gravity effects`
      },
      {
        title: 'Laws of Black Hole Thermodynamics',
        content: `• Zeroth Law:
- Surface gravity (κ) is constant over the event horizon of a stationary black hole
- Analogous to temperature being constant in thermal equilibrium

• First Law:
- dM = (κ/8πG)dA + ΩdJ + ΦdQ
- Energy conservation including rotation (J) and charge (Q)
- Ω: angular velocity, Φ: electric potential

• Second Law:
- The area of event horizons always increases: ΔA ≥ 0
- Analogous to entropy increase
- Generalized second law: Δ(Sₕₕ + Sₘₐₜₜₑₓ) ≥ 0

• Third Law:
- Impossible to reach zero surface gravity (κ = 0)
- Analogous to unattainability of absolute zero temperature`
      },
      {
        title: 'Theoretical Implications',
        content: `• Information Paradox:
- Quantum information appears lost in black hole evaporation
- Violates unitarity in quantum mechanics
- Proposed resolutions: information leakage, firewalls, complementarity
- AdS/CFT correspondence suggests information is preserved

• Quantum Gravity:
- Black hole thermodynamics connects general relativity, quantum mechanics, and thermodynamics
- Microscopic origin of entropy still debated
- String theory: counts microstates for certain black holes
- Loop quantum gravity: counts spin network configurations
- May provide insights into quantum gravity theory`
      }
    ]
  },
  'Wave-Particle Duality': {
    title: 'Wave-Particle Duality',
    description: 'The concept that all matter and energy exhibits both wave-like and particle-like properties, a central concept of quantum mechanics demonstrated by phenomena such as the double-slit experiment.',
    sections: [
      {
        title: 'Historical Development',
        content: `• Light as Waves and Particles:
- Newton's corpuscular theory (17th century): Light as particles
- Young's double-slit experiment (1801): Light as waves
- Photoelectric effect (Einstein, 1905): Light as particles (photons)
- Compton effect (1923): Photon-electron scattering confirms particle nature

• Matter Waves:
- Louis de Broglie (1924): Proposed matter has wave properties
- De Broglie wavelength: λ = h/p (h: Planck's constant, p: momentum)
- Davisson-Germer experiment (1927): Electron diffraction confirms matter waves
- G.P. Thomson's experiments: Electron diffraction through thin metal foils`
      },
      {
        title: 'Double-Slit Experiment',
        content: `• Classical Wave Behavior:
- Light passing through two slits creates interference pattern
- Bright bands: constructive interference
- Dark bands: destructive interference
- Pattern depends on wavelength and slit separation

• Quantum Behavior:
- Single particles (electrons, photons, atoms) show same pattern
- Pattern builds up gradually with individual particle detections
- Each particle detected at specific location (particle property)
- Statistical distribution follows interference pattern (wave property)
- Which-path information destroys interference pattern`
      },
      {
        title: 'Mathematical Formulation',
        content: `• Wave-Particle Relationships:
- De Broglie wavelength: λ = h/p
- Photon energy: E = hν = hω/2π = ℏω
- Photon momentum: p = h/λ = ℏ k
- Wave packet: Superposition of waves representing localized particle
- Group velocity equals particle velocity: vₖ = ∂ω/∂k

• Quantum Mechanical Description:
- Wavefunction ψ(x,t): Probability amplitude
- Probability density: |ψ(x,t)|²
- Born interpretation: |ψ|² gives probability density for finding particle
- Wave-particle duality encoded in wavefunction behavior`
      },
      {
        title: 'Applications and Implications',
        content: `• Technological Applications:
- Electron microscopy: Uses electron waves for imaging
- Neutron diffraction: Crystal structure analysis
- Atom interferometry: Precision measurements
- Quantum computing: Exploits wave-particle duality

• Conceptual Implications:
- Complementarity principle (Bohr): Wave and particle aspects are complementary
- Measurement problem: Observation affects quantum systems
- Copenhagen interpretation: Wavefunction collapse upon measurement
- Quantum superposition: Objects can exist in multiple states simultaneously
- Foundation for quantum mechanics and modern physics`
      }
    ]
  },
  'Schrödinger Equation': {
    title: 'Schrödinger Equation',
    description: 'A linear partial differential equation that describes how the quantum state of a physical system changes with time, forming the foundation of wave mechanics.',
    sections: [
      {
        title: 'Time-Dependent Equation',
        content: `• General Form:
- iℏ∂ψ/∂t = Ĥψ
- ψ(r,t): Wavefunction (probability amplitude)
- Ĥ: Hamiltonian operator (total energy)
- i: Imaginary unit, ℏ: Reduced Planck's constant
- Describes evolution of quantum systems in time

• Non-Relativistic Form:
- iℏ∂ψ/∂t = [-ℏ²/(2m)∇² + V(r)]ψ
- First term: Kinetic energy operator
- Second term: Potential energy function
- Solutions generally complex-valued`
      },
      {
        title: 'Time-Independent Equation',
        content: `• Stationary States:
- For time-independent potentials, ψ(r,t) = φ(r)e^(-iEt/ℏ)
- Leads to: Ĥφ(r) = Eφ(r)
- E: Energy eigenvalue
- φ(r): Energy eigenfunction (stationary state)
- Probability density |φ(r)|² is time-independent

• Boundary Conditions:
- Wavefunction must be continuous
- First derivative must be continuous (except at infinite potentials)
- Wavefunction must be normalizable: ∫|ψ|²dr = 1
- Leads to quantization of energy for bound states`
      },
      {
        title: 'Solutions and Applications',
        content: `• Analytically Solvable Systems:
- Free particle: Plane wave solutions
- Particle in a box: Standing waves with quantized energy
- Harmonic oscillator: Hermite polynomials, equally spaced energy levels
- Hydrogen atom: Spherical harmonics, principal quantum number

• Numerical Methods:
- Finite difference methods
- Variational methods (e.g., Rayleigh-Ritz)
- Matrix methods (basis expansion)
- Path integral formulation
- Time-dependent methods (split-operator, Crank-Nicolson)`
      },
      {
        title: 'Interpretations and Extensions',
        content: `• Physical Interpretation:
- Born interpretation: |ψ|² gives probability density
- Wavefunction collapse upon measurement
- Superposition principle: Linear combinations of solutions are also solutions
- Quantum tunneling: Penetration into classically forbidden regions

• Extensions and Generalizations:
- Dirac equation: Relativistic generalization
- Klein-Gordon equation: Relativistic spin-0 particles
- Pauli equation: Includes spin for non-relativistic particles
- Many-body Schrödinger equation: For interacting particles
- Quantum field theory: For creation/annihilation of particles`
      }
    ]
  },
  'Heisenberg Uncertainty Principle': {
    title: 'Heisenberg Uncertainty Principle',
    description: 'A fundamental limit to the precision with which complementary variables, such as position and momentum, can be known simultaneously.',
    sections: [
      {
        title: 'Mathematical Formulation',
        content: `• Position-Momentum Uncertainty:
- ΔxΔp ≥ ℏ/2
- Δx: Standard deviation in position measurement
- Δp: Standard deviation in momentum measurement
- ℏ: Reduced Planck's constant (h/2π)
- Equality holds for minimum uncertainty states (e.g., Gaussian wavepackets)

• General Form for Any Observables:
- ΔAΔB ≥ |⟨[Â,B̂]⟩|/2
- [Â,B̂] = ÂB̂ - B̂Â: Commutator of operators
- Applies to any pair of non-commuting observables
- Example: ΔEΔt ≥ ℏ/2 (energy-time uncertainty)`
      },
      {
        title: 'Physical Origins and Interpretations',
        content: `• Wave Nature of Matter:
- Consequence of wave-particle duality
- Fourier transform relationship between position and momentum spaces
- Narrower position distribution means broader momentum distribution
- Not due to measurement disturbance (common misconception)

• Quantum Measurement:
- Not merely an observer effect
- Intrinsic property of quantum systems
- Complementary variables cannot have simultaneous definite values
- Measurement of one variable affects knowledge of the other
- Different from classical measurement errors or limitations`
      },
      {
        title: 'Experimental Verification',
        content: `• Direct Tests:
- Single-slit diffraction: Narrower slit (precise position) creates wider diffraction pattern (uncertain momentum)
- Gamma-ray microscope thought experiment
- Squeezed states: Redistribute uncertainty between conjugate variables
- Cold atom experiments demonstrating minimum uncertainty states

• Indirect Consequences:
- Finite zero-point energy in harmonic oscillators
- Natural linewidth of atomic spectral lines
- Quantum tunneling
- Stability of atoms (electrons cannot be localized in nucleus)`
      },
      {
        title: 'Applications and Implications',
        content: `• Technological Limitations:
- Quantum noise limits in measurements
- Heisenberg microscope: Resolution limits
- Quantum cryptography security guarantees
- Quantum computing error thresholds

• Philosophical Implications:
- Challenges determinism in classical physics
- Limits to complete knowledge of physical systems
- Complementarity principle (Bohr)
- Measurement problem in quantum mechanics
- Various interpretations (Copenhagen, Many-worlds, etc.)
- Quantum indeterminacy as fundamental property of nature`
      }
    ]
  },
  'Quantum Entanglement': {
    title: 'Quantum Entanglement',
    description: 'A quantum mechanical phenomenon where the quantum states of two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others, regardless of the distance separating them.',
    sections: [
      {
        title: 'Mathematical Description',
        content: `• Entangled States:
- Cannot be factored into product states of individual particles
- For two qubits: |Ψ⟩ = α|00⟩ + β|11⟩ (Bell state example)
- Measurement of one particle instantaneously determines state of other particle
- Quantum state described by density matrix ρ
- Entanglement entropy: S = -Tr(ρₐ log₂ ρₐ), where ρₐ is reduced density matrix

• Quantifying Entanglement:
- Concurrence, negativity, entanglement of formation
- For pure states: von Neumann entropy of reduced density matrix
- For mixed states: more complex measures required
- Entanglement witnesses: observables that detect entanglement`
      },
      {
        title: 'EPR Paradox and Bell Inequalities',
        content: `• EPR Paradox (1935):
- Einstein, Podolsky, and Rosen questioned completeness of quantum mechanics
- Argued quantum mechanics violates local realism
- Introduced concept of 'spooky action at a distance'
- Proposed hidden variables could explain correlations

• Bell Inequalities:
- John Bell (1964) showed hidden variable theories must satisfy certain inequalities
- CHSH inequality: |E(a,b) + E(a,b′) + E(a′,b) - E(a′,b′)| ≤ 2
- E(a,b): correlation between measurements along directions a and b
- Quantum mechanics predicts violations up to 2√2
- Experimental tests (Aspect, Zeilinger, others) confirm violation`
      },
      {
        title: 'Quantum Information Applications',
        content: `• Quantum Teleportation:
- Transfers quantum state using entangled pair and classical communication
- Requires pre-shared entanglement and two classical bits
- Does not transmit information faster than light
- Experimentally demonstrated across increasing distances

• Quantum Cryptography:
- Quantum key distribution (QKD) protocols
- Security based on no-cloning theorem and entanglement
- BB84, E91 protocols
- Eavesdropping detection guaranteed by quantum mechanics`
      },
      {
        title: 'Quantum Computing Applications',
        content: `• Entanglement as Resource:
- Essential resource for quantum computational advantage
- Enables quantum parallelism and interference
- Quantum algorithms exploit entanglement for speedup
- Shor's algorithm, Grover's algorithm rely on entangled states

• Practical Challenges:
- Decoherence: entanglement degradation due to environment interaction
- Quantum error correction requires entanglement
- Entanglement distillation and purification protocols
- Quantum repeaters for long-distance entanglement distribution`
      }
    ]
  },
  'Quantum Hall Effects': {
    title: 'Quantum Hall Effects',
    description: 'Quantum mechanical version of the Hall effect observed in two-dimensional electron systems subjected to low temperatures and strong magnetic fields, exhibiting precisely quantized Hall resistance.',
    sections: [
      {
        title: 'Integer Quantum Hall Effect (IQHE)',
        content: `• Experimental Observation:
- Discovered by Klaus von Klitzing (1980)
- Occurs in 2D electron systems at low temperatures and strong magnetic fields
- Hall resistance quantized as Rᴵ = h/(e²ν), where ν is an integer
- Quantization accuracy better than 1 part in 10⁹
- Used for metrology: precise measurement of h/e²

• Landau Levels:
- Electrons in magnetic field form quantized energy levels
- Energy Eₙ = ℏωᴄ(n + 1/2), where ωᴄ = eB/m is cyclotron frequency
- Each level has degeneracy NΦ = BA/Φ₀ (A: area, Φ₀ = h/e: flux quantum)
- Filling factor ν = number of filled Landau levels`
      },
      {
        title: 'Fractional Quantum Hall Effect (FQHE)',
        content: `• Discovery and Characteristics:
- Discovered by Tsui, Störmer, and Gossard (1982)
- Hall resistance quantized at Rᴵ = h/(e²ν), where ν is a fraction (typically with odd denominator)
- Observed at ν = 1/3, 2/5, 3/7, etc.
- Results from strong electron-electron interactions

• Theoretical Understanding:
- Laughlin wavefunction describes ν = 1/m states (m odd)
- Composite fermions: electrons bound to magnetic flux quanta
- Hierarchy of states explained by composite fermion theory
- Excitations carry fractional charge (e.g., e/3 for ν = 1/3 state)`
      },
      {
        title: 'Anyons and Topological Order',
        content: `• Exotic Quasiparticles:
- FQHE excitations are neither fermions nor bosons, but anyons
- Exchange statistics: ψ → e^iθψ, where θ ≠ 0, π
- Abelian anyons: exchange phase is a complex number
- Non-Abelian anyons: exchange represented by matrix operations

• Topological Order:
- New type of quantum order beyond Landau symmetry-breaking paradigm
- Characterized by ground state degeneracy dependent on topology
- Long-range quantum entanglement
- Robust against local perturbations
- Potential platform for topological quantum computation`
      },
      {
        title: 'Related Phenomena and Applications',
        content: `• Edge States:
- Conducting channels at sample boundaries
- Chiral (one-way) propagation
- Protected against backscattering
- Described by chiral Luttinger liquid theory

• Quantum Spin Hall Effect:
- Time-reversal invariant version of QHE
- Counter-propagating edge states with opposite spins
- Precursor to topological insulators

• Applications:
- Resistance standard based on h/e²
- Fractional charge detection
- Interferometry with anyons
- Potential for fault-tolerant quantum computation`
      }
    ]
  },
  'Topological Insulators': {
    title: 'Topological Insulators',
    description: 'Materials that behave as insulators in their interior but have conducting states on their surface or edge, protected by time-reversal symmetry and characterized by a topological invariant.',
    sections: [
      {
        title: 'Topological Classification',
        content: `• Topological Invariants:
- Materials classified by topological invariants (Z₂ index)
- Invariants robust against continuous deformations
- Cannot change without closing the energy gap
- Different from conventional band insulators

• Band Inversion:
- Results from strong spin-orbit coupling
- Inverts conduction and valence bands at high-symmetry points
- Creates non-trivial topology in band structure
- Occurs in materials with heavy elements (Bi, Sb, Te, etc.)`
      },
      {
        title: 'Bulk-Boundary Correspondence',
        content: `• Principle:
- Topological bulk properties dictate boundary states
- Boundary between materials with different topology must host gapless states
- Interface between topological insulator and vacuum/trivial insulator has conducting states
- These states are topologically protected

• Edge and Surface States:
- 2D topological insulators: 1D conducting edge states
- 3D topological insulators: 2D conducting surface states
- States described by Dirac-like dispersion
- Spin locked perpendicular to momentum (spin-momentum locking)`
      },
      {
        title: 'Quantum Spin Hall Effect',
        content: `• 2D Topological Insulators:
- Also called quantum spin Hall insulators
- Feature counter-propagating edge states with opposite spins
- Net charge current zero, but non-zero spin current
- First predicted in graphene, realized in HgTe/CdTe quantum wells

• Properties:
- Edge states protected by time-reversal symmetry
- Robust against non-magnetic impurities
- Quantized conductance: e²/h per edge
- Helical Luttinger liquid behavior`
      },
      {
        title: 'Experimental Realizations and Applications',
        content: `• Material Systems:
- 2D: HgTe/CdTe quantum wells, InAs/GaSb heterostructures
- 3D: Bi₁₋ₓSbₓ, Bi₂Se₃, Bi₂Te₃, Sb₂Te₃
- Higher-order topological insulators with corner or hinge states
- Topological crystalline insulators protected by crystal symmetries

• Applications and Future Directions:
- Spintronics: Spin current generation without magnetic fields
- Quantum computing: Potential platform for topological qubits
- Novel magnetoelectric effects
- Axion electrodynamics
- Majorana fermions at interfaces with superconductors`
      }
    ]
  },
  'Superconductivity': {
    title: 'Superconductivity',
    description: 'A quantum mechanical phenomenon of exactly zero electrical resistance and expulsion of magnetic fields occurring in certain materials when cooled below a characteristic critical temperature.',
    sections: [
      {
        title: 'Fundamental Properties',
        content: `• Zero Electrical Resistance:
- Complete disappearance of electrical resistance below critical temperature Tc
- Persistent currents can flow indefinitely without energy dissipation
- First discovered by Kamerlingh Onnes in mercury (1911)
- Critical temperatures range from <1K (conventional) to >100K (high-Tc)

• Meissner Effect:
- Complete expulsion of magnetic fields from superconductor interior
- Different from perfect conductivity (flux trapping)
- Characterized by London penetration depth λ
- Results in magnetic levitation and flux pinning phenomena`
      },
      {
        title: 'BCS Theory',
        content: `• Cooper Pairs:
- Electrons form bound pairs through phonon-mediated attraction
- Pairs have opposite spins and momenta (k↑, -k↓)
- Binding energy creates energy gap Δ at Fermi surface
- Gap protects against scattering, enabling zero resistance

• Macroscopic Quantum State:
- Cooper pairs behave as bosons, can occupy same quantum state
- Condensate described by macroscopic wavefunction Ψ = |Ψ|e^iφ
- Phase coherence throughout material
- Coherence length ξ: spatial extent of Cooper pairs`
      },
      {
        title: 'Types of Superconductors',
        content: `• Type I Superconductors:
- Sharp transition between superconducting and normal states
- Complete Meissner effect up to critical field Hc
- Mostly pure metals (Pb, Hg, Al)
- Coherence length > penetration depth (ξ > λ)

• Type II Superconductors:
- Mixed state between lower (Hc1) and upper (Hc2) critical fields
- Magnetic flux penetrates in quantized vortices (fluxons)
- Includes alloys and compounds (NbTi, Nb3Sn, cuprates)
- Coherence length < penetration depth (ξ < λ)
- Higher critical fields and temperatures, more practical applications`
      },
      {
        title: 'Applications and Advanced Topics',
        content: `• Technological Applications:
- Superconducting magnets (MRI, particle accelerators)
- Sensitive magnetic field detectors (SQUIDs)
- Digital electronics (Josephson junctions)
- Power transmission and energy storage
- Maglev transportation

• Unconventional Superconductivity:
- High-temperature superconductors (cuprates, iron-based)
- Heavy fermion superconductors
- Organic superconductors
- Possible mechanisms: spin fluctuations, resonating valence bonds
- Ongoing research into room-temperature superconductivity`
      }
    ]
  },
  'CP Violation': {
    title: 'CP Violation',
    description: 'The violation of the combined symmetry of charge conjugation (C) and parity (P), which is crucial for explaining the matter-antimatter asymmetry in the universe.',
    sections: [
      {
        title: 'Fundamental Symmetries',
        content: `• Discrete Symmetries in Physics:
- Charge conjugation (C): Transforms particles into antiparticles
- Parity (P): Spatial inversion of coordinates (x → -x)
- Time reversal (T): Reverses direction of time (t → -t)
- CPT theorem: Combined CPT symmetry preserved in any Lorentz-invariant theory

• Symmetry Violation:
- P violation: Discovered in weak interactions (Wu experiment, 1957)
- C violation: Also present in weak interactions
- CP violation: First observed in neutral kaon decays (Cronin and Fitch, 1964)
- T violation: Follows from CPT theorem if CP is violated`
      },
      {
        title: 'Mechanisms of CP Violation',
        content: `• In the Standard Model:
- Quark sector: Complex phase in CKM matrix
- Three types of CP violation:
  * In mixing (indirect): Different mixing rates for particles vs. antiparticles
  * In decay (direct): Different decay rates for CP-conjugate processes
  * In interference between mixing and decay

• Beyond the Standard Model:
- Lepton sector: CP-violating phase in PMNS matrix
- Strong CP problem and axions
- Supersymmetric models: Additional CP-violating phases
- Leptogenesis: CP violation in heavy neutrino decays`
      },
      {
        title: 'Experimental Observations',
        content: `• Kaon System:
- K₀-K̅₀ mixing and decay asymmetries
- Indirect CP violation parameter ε
- Direct CP violation parameter ε'

• B Meson System:
- Large CP violation in B₀-B̅₀ mixing and decays
- Time-dependent CP asymmetries in B → J/ψ Kₚ processes
- Measured at B factories (BaBar, Belle) and LHCb

• D Meson and Baryon Systems:
- Smaller effects in charm sector
- CP violation in Λₚ baryon decays observed at LHCb`
      },
      {
        title: 'Cosmological Implications',
        content: `• Sakharov Conditions for Baryogenesis:
- Baryon number violation
- C and CP violation
- Departure from thermal equilibrium
- All three required to generate matter-antimatter asymmetry

• Matter-Antimatter Asymmetry:
- Observed universe contains matter with little antimatter
- Quantified by baryon-to-photon ratio η ≈ 6 × 10^(-10)
- Standard Model CP violation insufficient to explain observed asymmetry
- Suggests new sources of CP violation beyond Standard Model

• Future Directions:
- Neutrino sector CP violation (DUNE, Hyper-Kamiokande)
- Electric dipole moment searches
- Rare decay measurements at LHCb and Belle II
- Connections to dark matter and cosmic inflation`
      }
    ]
  },
  'Neutrino Oscillations': {
    title: 'Neutrino Oscillations',
    description: 'The quantum mechanical phenomenon where neutrinos change flavor (electron, muon, tau) as they propagate through space, indicating they have non-zero mass.',
    sections: [
      {
        title: 'Physical Mechanism',
        content: `• Flavor Mixing:
- Neutrino flavor eigenstates (ν_e, ν_μ, ν_τ) differ from mass eigenstates (ν_1, ν_2, ν_3)
- Connected by unitary PMNS matrix (Pontecorvo-Maki-Nakagawa-Sakata)
- Similar to quark mixing via CKM matrix, but with larger mixing angles
- Neutrino produced in specific flavor state is superposition of mass states

• Oscillation Mechanism:
- Different mass eigenstates propagate with different phases
- Phase differences lead to flavor oscillations over distance
- Oscillation probability depends on:
  * Mass-squared differences Δmᵢᵗ² = mᵗ² - mᵢ²
  * Mixing angles in PMNS matrix
  * Neutrino energy and propagation distance`
      },
      {
        title: 'Mathematical Description',
        content: `• PMNS Matrix Parameterization:
- Three mixing angles: θ₁₂, θ₁₃, θ₂₃
- One CP-violating phase: δᴄᴐ
- Two additional Majorana phases if neutrinos are Majorana particles
- Current values: θ₁₂ ≈ 33°, θ₂₃ ≈ 45°, θ₁₃ ≈ 8.5°

• Oscillation Probabilities:
- Two-flavor approximation: P(ν_α → ν_β) = sin²(2θ) sin²(Δm²L/4E)
- L: Propagation distance
- E: Neutrino energy
- Full three-flavor treatment more complex
- Matter effects (MSW effect) modify oscillations in dense media`
      },
      {
        title: 'Experimental Evidence',
        content: `• Solar Neutrino Problem:
- First evidence: Deficit of solar neutrinos detected on Earth
- SNO experiment confirmed flavor conversion (2001)
- Consistent with MSW effect in the Sun

• Atmospheric Neutrinos:
- Super-Kamiokande observed ν_μ disappearance (1998)
- Zenith angle dependence confirmed oscillation hypothesis

• Reactor and Accelerator Experiments:
- KamLAND: ν_e disappearance from reactors
- T2K, MINOS, NOvA: ν_μ → ν_e appearance
- Daya Bay, RENO, Double Chooz: Precise measurement of θ₁₃`
      },
      {
        title: 'Implications and Open Questions',
        content: `• Neutrino Mass:
- Oscillations prove neutrinos have mass, contradicting Standard Model prediction
- Only mass-squared differences known, not absolute masses
- Mass ordering: Normal (m₁ < m₂ < m₃) or inverted (m₃ < m₁ < m₂)?

• CP Violation in Lepton Sector:
- δᴄᴐ phase may lead to different oscillation probabilities for neutrinos vs. antineutrinos
- Could help explain matter-antimatter asymmetry in universe
- T2K hints at maximal CP violation (δᴄᴐ ≈ -π/2)

• Theoretical Questions:
- Majorana vs. Dirac nature of neutrinos
- Origin of small neutrino masses (seesaw mechanism?)
- Connection to grand unified theories
- Existence of sterile neutrinos`
      }
    ]
  },
  'Quark Model': {
    title: 'Quark Model',
    description: 'A classification scheme for hadrons in terms of their valence quarks, providing a framework for understanding the properties and spectroscopy of strongly interacting particles.',
    sections: [
      {
        title: 'Fundamental Concepts',
        content: `• Basic Quark Properties:
- Six flavors: up, down, strange, charm, bottom, top
- Each has color charge (red, green, blue)
- Fractional electric charges: +2/3e (u, c, t) or -1/3e (d, s, b)
- Spin-1/2 fermions obeying Pauli exclusion principle

• Hadron Classification:
- Mesons: Quark-antiquark pairs (q̄q)
- Baryons: Three-quark states (qqq)
- Antibaryons: Three-antiquark states (̄q̄q̄q)
- Exotic hadrons: Tetraquarks (qq̄q̄q), pentaquarks (qqqq̄q), etc.`
      },
      {
        title: 'QCD and Strong Interactions',
        content: `• Quantum Chromodynamics (QCD):
- Gauge theory of strong interactions based on SU(3) color symmetry
- Gluons: Eight massless gauge bosons mediating strong force
- Gluons carry color charge and interact with themselves

• Key QCD Phenomena:
- Confinement: Quarks cannot be isolated (increases energy with distance)
- Asymptotic freedom: Coupling strength decreases at high energies/short distances
- Color neutrality: All observable hadrons are color singlets
- Chiral symmetry breaking: Source of most hadron mass`
      },
      {
        title: 'Hadron Spectroscopy',
        content: `• Meson Spectroscopy:
- Pseudoscalar mesons (J^P = 0^-): π, K, η, η'
- Vector mesons (J^P = 1^-): ρ, ω, φ, J/ψ, Υ
- Excitation spectrum organized in Regge trajectories
- Meson nonets arranged by SU(3) flavor symmetry

• Baryon Spectroscopy:
- Nucleons: Proton (uud), neutron (udd)
- Δ resonances: Excited states of nucleons
- Strange baryons: Λ (uds), Σ (uus, uds, dds), Ξ (uss, dss), Ω (sss)
- Charmed and bottom baryons: Λ_c, Σ_c, Ξ_c, Ω_c, Λ_b, etc.`
      },
      {
        title: 'Experimental Evidence and Applications',
        content: `• Experimental Verification:
- Deep inelastic scattering: Revealed point-like constituents in nucleons
- Jet production in e^+e^- collisions: Evidence for quarks and gluons
- Hadron mass spectrum: Accurately predicted by quark model
- Discovery of predicted particles (J/ψ, Υ, charmed and bottom hadrons)

• Modern Applications:
- Lattice QCD: Numerical calculations of hadron properties
- Effective field theories: Chiral perturbation theory, heavy quark effective theory
- Quark-gluon plasma studies in heavy-ion collisions
- Exotic hadron searches at LHC and B-factories`
      }
    ]
  },
  'Standard Model': {
    title: 'Standard Model',
    description: 'The comprehensive theory describing three of the four known fundamental forces (electromagnetic, weak, and strong interactions) and classifying all known elementary particles.',
    sections: [
      {
        title: 'Gauge Structure and Symmetries',
        content: `• Gauge Group Structure:
- Complete gauge group: SU(3)ᴄ × SU(2)ᴷ × U(1)ᴴ
- SU(3)ᴄ: Strong interaction (Quantum Chromodynamics)
- SU(2)ᴷ × U(1)ᴴ: Electroweak interaction
- Subscripts: C = color, L = left-handed, Y = hypercharge

• Symmetry Breaking:
- Electroweak symmetry breaking: SU(2)ᴷ × U(1)ᴴ → U(1)ᴸᴹ
- U(1)ᴸᴹ: Electromagnetic interaction (QED)
- Occurs via the Higgs mechanism
- Explains origin of particle masses`
      },
      {
        title: 'Particle Content',
        content: `• Fermions (Spin-1/2):
- Three generations of quarks and leptons
- Quarks: up/down, charm/strange, top/bottom
- Leptons: electron/e-neutrino, muon/μ-neutrino, tau/τ-neutrino
- Left-handed fermions: SU(2) doublets
- Right-handed fermions: SU(2) singlets

• Gauge Bosons (Spin-1):
- Gluons (8): Mediate strong force, SU(3)ᴄ gauge bosons
- W±, Z: Mediate weak force, massive due to Higgs mechanism
- Photon: Mediates electromagnetic force, U(1)ᴸᴹ gauge boson

• Higgs Boson (Spin-0):
- Excitation of the Higgs field
- Discovered at CERN in 2012
- Provides mass to W±, Z bosons and fermions
- Only fundamental scalar in the Standard Model`
      },
      {
        title: 'Higgs Mechanism',
        content: `• Spontaneous Symmetry Breaking:
- Higgs field acquires a non-zero vacuum expectation value
- Breaks electroweak symmetry while preserving gauge invariance
- Generates masses for W± and Z bosons while photon remains massless
- Yukawa couplings generate fermion masses

• Mathematical Description:
- Higgs field: complex SU(2) doublet with four degrees of freedom
- After symmetry breaking: three degrees become longitudinal modes of W±, Z
- Remaining degree manifests as Higgs boson
- Fermion masses proportional to Yukawa coupling strengths`
      },
      {
        title: 'Successes and Limitations',
        content: `• Experimental Confirmations:
- Prediction and discovery of W±, Z bosons (1983)
- Prediction and discovery of top quark (1995)
- Prediction and discovery of Higgs boson (2012)
- Precision electroweak measurements match predictions

• Unresolved Questions:
- Neutrino masses and oscillations require extension
- No explanation for dark matter or dark energy
- Hierarchy problem: Why is Higgs mass stable against quantum corrections?
- Strong CP problem: Why is the neutron electric dipole moment so small?
- Gravity not included in the framework`
      }
    ]
  },
  'Feynman Diagrams': {
    title: 'Feynman Diagrams',
    description: 'Pictorial representations of mathematical expressions describing the behavior of subatomic particles, used to calculate scattering amplitudes in quantum field theory.',
    sections: [
      {
        title: 'Basic Principles',
        content: `• Diagrammatic Representation:
- Visual shorthand for perturbative calculations in QFT
- Each diagram corresponds to a mathematical term in the perturbation series
- Lines represent propagators (particle propagation)
- Vertices represent interactions between particles
- Time flows from left to right (or bottom to top) by convention

• Elements of Diagrams:
- External lines: Incoming and outgoing particles
- Internal lines: Virtual particles mediating interactions
- Vertices: Coupling constants determining interaction strength
- Loops: Higher-order quantum corrections`
      },
      {
        title: 'Perturbative Calculations',
        content: `• Wick's Theorem:
- Technique for evaluating time-ordered products of field operators
- Expresses time-ordered products in terms of normal-ordered products and contractions
- Each contraction corresponds to a propagator in the diagram
- Provides systematic way to generate all contributing diagrams

• Feynman Rules:
- Specific set of rules for translating diagrams to mathematical expressions
- Depends on the particular quantum field theory (QED, QCD, etc.)
- Typically includes:
  * Rules for external lines (wave functions)
  * Rules for propagators (internal lines)
  * Rules for vertices (coupling constants)
  * Integration over undetermined momenta`
      },
      {
        title: 'Physical Interpretation',
        content: `• Virtual Particles:
- Internal lines represent virtual particles
- Not directly observable but mediate interactions
- Can violate energy-momentum conservation temporarily (ΔEΔt ≲ ℏ)
- Connect real (external) particles via interactions

• Quantum Corrections:
- Loop diagrams represent quantum fluctuations
- Higher-order terms in perturbation theory
- Lead to effects like vacuum polarization and self-energy
- Responsible for precision corrections to classical predictions`
      },
      {
        title: 'Applications and Significance',
        content: `• Practical Applications:
- Calculation of cross-sections for particle collisions
- Decay rates and branching ratios
- Form factors and structure functions
- Precision tests of the Standard Model

• Theoretical Importance:
- Intuitive visualization of abstract quantum processes
- Organizational tool for complex calculations
- Bridge between theory and experimental predictions
- Insight into the structure of quantum field theories`
      }
    ]
  },
  'Second Quantization': {
    title: 'Second Quantization',
    description: 'A mathematical framework in quantum field theory where fields are treated as operators acting on Fock space, enabling the description of systems with variable particle numbers.',
    sections: [
      {
        title: 'Field Operators and Fock Space',
        content: `• Field Operator Concept:
- Fields become operators ϕ̂(x) acting on quantum states
- Create or annihilate particles at position x
- Generalize position and momentum operators from first quantization
- Satisfy specific commutation or anticommutation relations

• Fock Space Structure:
- Hilbert space accommodating variable particle numbers
- Direct sum of n-particle Hilbert spaces: ℤ = ⊕ₙ=0^∞ ℤₙ
- ℤₙ: Symmetrized (bosons) or antisymmetrized (fermions) n-particle space
- Vacuum state |0⟩ represents state with no particles`
      },
      {
        title: 'Creation and Annihilation Operators',
        content: `• Operator Properties:
- Creation operator a†(k): Creates particle with momentum k
- Annihilation operator a(k): Removes particle with momentum k
- Position space operators: ϕ̂(x) = ∫ dk [a(k)e^{ikx} + a†(k)e^{-ikx}]/√(2π)^3

• Commutation Relations:
- Bosons: [a(k), a†(k')] = δ(k-k'), [a(k), a(k')] = [a†(k), a†(k')] = 0
- Fermions: {a(k), a†(k')} = δ(k-k'), {a(k), a(k')} = {a†(k), a†(k')} = 0
- Determine quantum statistics and particle behavior`
      },
      {
        title: 'Applications in Quantum Physics',
        content: `• Many-Body Systems:
- Natural description of systems with variable particle numbers
- Quantum harmonic oscillators: Phonons in solids
- Interacting electron systems: Metals, semiconductors
- Bose-Einstein condensates and superfluidity

• Quantum Field Theory:
- Relativistic quantum field theories (QED, QCD)
- Particle creation/annihilation processes
- Vacuum fluctuations and virtual particles
- Feynman diagrams represent operator contractions`
      },
      {
        title: 'Theoretical Significance',
        content: `• Conceptual Advances:
- Unified treatment of waves and particles
- Natural framework for relativistic quantum mechanics
- Resolves issues with negative energy states in Dirac equation
- Provides basis for understanding particle interactions

• Relation to First Quantization:
- First quantization: Classical variables → operators (x → x̂, p → p̂)
- Second quantization: Wave functions → operators (ψ → ψ̂)
- Equivalent to first quantization for fixed particle number
- Essential extension for variable particle systems`
      }
    ]
  },
  'Hodge Decomposition': {
    title: 'Hodge Decomposition',
    description: 'Mathematical technique for decomposing differential forms on manifolds into orthogonal components, with applications in geometry, topology, and physics.',
    sections: [
      {
        title: 'Differential Forms and Operators',
        content: `• Differential Forms:
- Antisymmetric tensor fields on manifolds
- k-forms represent objects for integration over k-dimensional submanifolds
- Examples: 0-forms (functions), 1-forms (covector fields), 2-forms (area elements)
- Space of k-forms on manifold M denoted by Ω^k(M)

• Differential Operators:
- Exterior derivative: d: Ω^k(M) → Ω^{k+1}(M)
- Codifferential: δ: Ω^k(M) → Ω^{k-1}(M), adjoint of d
- Hodge star operator: *: Ω^k(M) → Ω^{n-k}(M) on n-dimensional manifold
- Laplacian: Δ = dδ + δd: Ω^k(M) → Ω^k(M)`
      },
      {
        title: 'Hodge Decomposition Theorem',
        content: `• Decomposition Statement:
- On a compact oriented Riemannian manifold, any k-form ω can be uniquely decomposed as:
  ω = dα + δβ + γ
- Where α is a (k-1)-form, β is a (k+1)-form, and γ is a harmonic k-form (Δγ = 0)
- The three components are orthogonal to each other

• Harmonic Forms:
- Harmonic k-forms satisfy Δω = 0, or equivalently dω = 0 and δω = 0
- Dimension of space of harmonic k-forms equals the k-th Betti number
- Represent cohomology classes uniquely
- De Rham cohomology: H^k(M) ≅ {harmonic k-forms}`
      },
      {
        title: 'Applications in Physics',
        content: `• Electromagnetism:
- Maxwell's equations in differential form language
- Electric field E and magnetic field B components of electromagnetic field tensor F
- Gauge potential A is a 1-form with F = dA
- Hodge decomposition separates longitudinal and transverse modes

• Fluid Dynamics:
- Velocity field decomposition into curl-free and divergence-free parts
- Helmholtz decomposition is the vector calculus version of Hodge decomposition
- Applications in incompressible flows and vorticity analysis

• Quantum Field Theory:
- BRST quantization and gauge fixing
- Ghost fields and cohomological interpretation
- Topological field theories and invariants
- String theory: harmonic forms and compactification`
      }
    ]
  },
  'Gelfand Triples': {
    title: 'Gelfand Triples',
    description: 'Mathematical structure consisting of a Hilbert space with associated spaces of test functions and distributions, providing the rigorous foundation for the Dirac bra-ket formalism in quantum mechanics.',
    sections: [
      {
        title: 'Rigged Hilbert Space Structure',
        content: `• Basic Structure:
- A Gelfand triple (or rigged Hilbert space) consists of three spaces: Φ ⊂ H ⊂ Φ*
- Φ is a dense nuclear space of test functions (e.g., smooth, rapidly decreasing functions)
- H is a Hilbert space with inner product ⟨ψ|φ⟩
- Φ* is the dual space of continuous linear functionals on Φ (distributions)

• Properties:
- Φ has a stronger topology than induced by H
- Φ* contains generalized functions like Dirac delta
- Continuous inclusions: Φ → H → Φ*
- Example: Schwartz space ⊂ L²(R) ⊂ tempered distributions`
      },
      {
        title: 'Dirac Bra-Ket Formalism',
        content: `• Bras and Kets:
- Ket |x⟩ represents a generalized eigenvector in Φ*
- Bra ⟨x| represents the corresponding linear functional
- Continuous spectrum eigenvectors are in Φ* but not in H
- Position and momentum eigenstates are examples of generalized eigenvectors

• Spectral Theory:
- Self-adjoint operators can have continuous spectrum
- Generalized eigenvectors provide spectral decomposition
- Resolution of identity: I = ∫ |x⟩⟨x| dx for continuous spectrum
- Allows rigorous treatment of operators with continuous spectrum`
      },
      {
        title: 'Applications in Quantum Mechanics',
        content: `• Position and Momentum Representations:
- Position eigenstates |x⟩ satisfy X|x⟩ = x|x⟩ but are not in Hilbert space
- Momentum eigenstates |p⟩ satisfy P|p⟩ = p|p⟩ but are not in Hilbert space
- Wave functions: ψ(x) = ⟨x|ψ⟩, ψ(p) = ⟨p|ψ⟩
- Transformations between representations via Fourier transform

• Scattering Theory:
- In-states and out-states as t → ±∞
- S-matrix elements ⟨ψ_out|ψ_in⟩
- Continuous spectrum of Hamiltonian corresponds to scattering states

• Quantum Field Theory:
- Fock space construction
- Distributional nature of quantum fields
- Correlation functions and Green's functions
- Regularization and renormalization procedures`
      }
    ]
  },
  'Topological Field Theories': {
    title: 'Topological Field Theories',
    description: 'Quantum field theories that are independent of the metric of spacetime, describing physical systems whose observables depend only on topological properties.',
    sections: [
      {
        title: 'Fundamentals of Topological Field Theories',
        content: `• Basic Concepts:
- Topological field theories (TFTs) are quantum field theories insensitive to changes in spacetime metric
- Observables depend only on topological properties of spacetime manifolds
- Classified as Schwarz-type (e.g., Chern-Simons) or Witten-type (e.g., topological Yang-Mills)
- Physical states have zero energy and correspond to topological invariants

• Axioms and Structure:
- Atiyah's axioms formalize TFTs as functors from manifold categories to vector spaces
- Associate vector spaces to boundaries and linear maps to cobordisms
- Partition functions are invariant under diffeomorphisms
- No local degrees of freedom: finite-dimensional state spaces`
      },
      {
        title: 'Chern-Simons Theory',
        content: `• Action and Properties:
- Three-dimensional gauge theory with action S = (k/4π)∫ Tr(A∧dA + (2/3)A∧A∧A)
- A is a gauge connection (1-form) valued in a Lie algebra
- Gauge invariant up to boundary terms for integer level k
- No dependence on spacetime metric

• Physical Significance:
- Describes quantum Hall effect and other condensed matter systems
- Effective field theory for 2+1 dimensional gravity
- Boundary theory corresponds to Wess-Zumino-Witten conformal field theory
- Wilson loop observables compute knot and link invariants`
      },
      {
        title: 'Knot Invariants and Applications',
        content: `• Jones Polynomial:
- Polynomial invariant distinguishing knots with same topology
- Computed as expectation value of Wilson loops in Chern-Simons theory
- For SU(2) gauge group: Jones polynomial J(K,q) = ⟨W_K⟩
- Generalizations: HOMFLY polynomial, Kauffman polynomial

• Quantum Invariants:
- Reshetikhin-Turaev construction relates quantum groups to 3-manifold invariants
- Witten's approach: path integral quantization of Chern-Simons theory
- Turaev-Viro model: state sum model for 3-manifold invariants
- Relation to 4D topological invariants via surgery theory

• Applications and Connections:
- Quantum computation: topological quantum computers use anyonic excitations
- Condensed matter physics: topological phases of matter
- String theory: relation to D-branes and mirror symmetry
- Mathematics: categorification of knot invariants (Khovanov homology)`
      }
    ]
  },
  'Algebraic Quantum Field Theory': {
    title: 'Algebraic Quantum Field Theory',
    description: 'Mathematical approach to quantum field theory focusing on algebras of observables rather than fields, providing a rigorous framework for understanding quantum systems.',
    sections: [
      {
        title: 'Axiomatic Approach and Local Algebras',
        content: `• Fundamental Framework:
- AQFT focuses on algebras of observables rather than quantum fields
- Associates C*-algebras A(O) to spacetime regions O
- Observables in A(O) represent measurements that can be performed in region O
- Provides mathematically rigorous approach to quantum field theory

• Haag-Kastler Axioms:
- Isotony: If O₁ ⊆ O₂, then A(O₁) ⊆ A(O₂)
- Locality/Causality: If O₁ and O₂ are spacelike separated, then [A(O₁), A(O₂)] = 0
- Poincaré covariance: Representation of Poincaré group acts on algebra
- Spectrum condition: Energy-momentum spectrum lies in forward light cone
- Existence of vacuum: Unique translation-invariant state`
      },
      {
        title: 'Haag\'s Theorem and Implications',
        content: `• Haag's Theorem:
- No unitary transformation can connect the interacting field representation with the free field representation in infinite volume
- Implies that perturbative QFT based on interaction picture is mathematically inconsistent
- Necessitates careful treatment of interactions in QFT

• Consequences and Resolutions:
- Conventional perturbation theory requires regularization and renormalization
- AQFT addresses these issues through rigorous mathematical structures
- Constructive QFT: building interacting models satisfying AQFT axioms
- Finite volume regularization or algebraic scattering theory as alternatives`
      },
      {
        title: 'Applications and Developments',
        content: `• Rigorous Results:
- Spin-statistics theorem: Particles with integer spin are bosons, half-integer spin are fermions
- PCT theorem: Any Lorentz-invariant QFT is invariant under combined parity, charge conjugation, and time reversal
- Reeh-Schlieder theorem: Vacuum is cyclic and separating for local algebras

• Modern Developments:
- Operator product expansions with rigorous convergence properties
- Conformal field theory: Algebraic approach to conformally invariant theories
- Topological quantum field theory: Algebraic structures in topological theories
- Quantum field theory on curved spacetimes

• Connections to Other Areas:
- Von Neumann algebras and modular theory
- Tomita-Takesaki theory and KMS states
- Quantum information theory and entanglement
- Noncommutative geometry`
      }
    ]
  },
  'Renormalization Group': {
    title: 'Renormalization Group',
    description: 'Theoretical framework for analyzing how physical systems change under scale transformations, with applications in statistical mechanics, quantum field theory, and critical phenomena.',
    sections: [
      {
        title: 'Basic Concepts and Flow Equations',
        content: `• Fundamental Idea:
- The renormalization group (RG) describes how physical systems transform under changes of scale
- Not actually a group but a semi-group (transformations cannot always be reversed)
- Involves coarse-graining: eliminating short-distance degrees of freedom
- Rescaling to restore original system size after coarse-graining

• RG Flow Equations:
- Coupling constants g evolve with scale parameter l: dg/dl = β(g)
- β-functions determine how couplings change under rescaling
- Flow equations map the physics at one scale to another
- Example: β(g) = (d-4)g + bg² for φ⁴ theory in d dimensions`
      },
      {
        title: 'Fixed Points and Critical Phenomena',
        content: `• Fixed Points:
- Points g* where β(g*) = 0, representing scale-invariant theories
- Ultraviolet (UV) fixed points: stable at short distances
- Infrared (IR) fixed points: stable at long distances
- Relevant, irrelevant, and marginal operators classified by behavior near fixed points

• Critical Phenomena:
- Phase transitions characterized by diverging correlation length
- Scale invariance at critical points leads to power-law behavior
- Critical exponents determined by fixed point properties
- Universality: different physical systems with same critical behavior belong to same universality class`
      },
      {
        title: 'Applications in Physics',
        content: `• Statistical Mechanics:
- Wilson's numerical renormalization group for the Kondo problem
- Kadanoff's block-spin transformation for the Ising model
- Calculation of critical exponents in phase transitions
- Crossover phenomena between different fixed points

• Quantum Field Theory:
- Regularization and renormalization of divergent integrals
- Running coupling constants (e.g., QCD asymptotic freedom)
- Effective field theories valid at different energy scales
- Wilsonian approach: integrating out high-energy modes

• Other Applications:
- Dynamical systems and chaos theory
- Fluid turbulence and structure formation
- Condensed matter systems (e.g., Anderson localization)
- String theory and quantum gravity approaches`
      }
    ]
  },
  'Functional Integration': {
    title: 'Functional Integration',
    description: 'Mathematical techniques for integrating over spaces of functions, with applications in quantum field theory, statistical mechanics, and stochastic processes.',
    sections: [
      {
        title: 'Path Integrals in Quantum Mechanics',
        content: `• Feynman Path Integral Formulation:
- Quantum amplitudes expressed as sums over all possible paths
- Propagator: K(x₂,t₂;x₁,t₁) = ∫ D[x(t)] exp(iS[x(t)]/ħ)
- D[x(t)] represents a measure on the space of paths
- S[x(t)] is the classical action along path x(t)
- Each path contributes with phase determined by its action

• Properties and Interpretation:
- Classical limit (ħ → 0): dominant contribution from paths near classical trajectory
- Stationary phase approximation recovers classical mechanics
- Tunneling: paths can traverse classically forbidden regions
- Provides intuitive understanding of quantum interference`
      },
      {
        title: 'Feynman-Kac Formula and Applications',
        content: `• Feynman-Kac Formula:
- Connection between diffusion processes and partial differential equations
- For parabolic PDEs: u(x,t) = E^x[f(X_t)exp(-∫₀ᵗ V(X_s)ds)]
- Represents solution as expectation over Brownian paths
- Euclidean (imaginary time) version of path integrals

• Applications:
- Quantum statistical mechanics: partition function Z = ∫ D[x(τ)] exp(-S_E[x(τ)]/ħ)
- Euclidean action S_E related to energy by Wick rotation
- Quantum field theory: vacuum expectation values
- Financial mathematics: option pricing via stochastic processes`
      },
      {
        title: 'Wiener Measure and Rigorous Approaches',
        content: `• Wiener Measure:
- Rigorous measure on continuous paths for Brownian motion
- Defined on space C[0,T] of continuous functions
- Gaussian measure with covariance min(s,t)
- Provides mathematical foundation for path integrals

• Rigorous Functional Integration:
- Challenges: infinite-dimensional integration requires careful definition
- Cylindrical functions and projective limits
- White noise analysis and Malliavin calculus
- Constructive quantum field theory approaches

• Connections to Other Areas:
- Stochastic differential equations
- Large deviation theory
- Infinite-dimensional analysis
- Quantum field theory on curved spacetimes`
      }
    ]
  },
  'Spectral Theory': {
    title: 'Spectral Theory',
    description: 'Mathematical framework for analyzing the spectrum of operators, with applications in quantum mechanics and other areas of mathematical physics.',
    sections: [
      {
        title: 'Operator Spectra and Resolvents',
        content: `• Basic Concepts:
- The spectrum σ(T) of an operator T consists of values λ where (T-λI) is not invertible
- For self-adjoint operators, the spectrum is real
- The resolvent operator R(λ,T) = (T-λI)^(-1) exists for λ outside the spectrum
- The resolvent identity: R(λ,T) - R(μ,T) = (μ-λ)R(λ,T)R(μ,T)

• Types of Spectra:
- Point/discrete spectrum: eigenvalues where (T-λI) is not injective
- Continuous spectrum: where (T-λI) is injective but not surjective, with non-closed range
- Residual spectrum: where (T-λI) is injective but not surjective, with closed range
- For self-adjoint operators, the residual spectrum is empty`
      },
      {
        title: 'Spectral Theorem and Decomposition',
        content: `• Spectral Theorem:
- For bounded self-adjoint operators T on a Hilbert space:
  T = ∫ λ dE(λ) where E(λ) is the spectral measure
- The operator can be decomposed using projection-valued measures
- For unbounded self-adjoint operators, domain considerations are needed

• Spectral Decomposition:
- For compact operators, the spectrum consists of eigenvalues with possible accumulation at 0
- For normal operators (T*T = TT*), the spectral theorem provides a functional calculus
- Functions of operators: f(T) = ∫ f(λ) dE(λ)
- Example: exp(iHt) represents time evolution in quantum mechanics`
      },
      {
        title: 'Applications in Quantum Mechanics',
        content: `• Quantum Spectra:
- Discrete spectrum corresponds to bound states with quantized energy levels
- Continuous spectrum corresponds to scattering states with continuous energy ranges
- The hydrogen atom has both discrete spectrum (negative energies) and continuous spectrum (positive energies)

• Physical Interpretation:
- Discrete eigenvalues: stable, normalizable states with definite energy
- Continuous spectrum: unbound states representing scattering processes
- Spectral gap: energy difference between ground state and excited states
- Density of states: distribution of energy levels in the spectrum

• Mathematical Methods:
- Green's functions related to the resolvent: G(x,y;E) = ⟨x|(H-E)^(-1)|y⟩
- Spectral density: ρ(E) related to the imaginary part of the Green's function
- SUSY quantum mechanics: partner Hamiltonians with related spectra
- WKB approximation provides semiclassical estimates of the spectrum`
      }
    ]
  },
  'Variational Calculus': {
    title: 'Variational Calculus',
    description: 'Mathematical framework for finding functions that optimize functionals, with applications in mechanics, field theory, and optimization problems.',
    sections: [
      {
        title: 'Fundamentals of Variational Calculus',
        content: `• Functionals and Variations:
- A functional maps functions to real numbers: J[f] = ∫ L(x, f(x), f'(x))dx
- The variation δJ represents the change in J due to a small change δf in the function
- First variation: δJ = J[f + δf] - J[f] (to first order in δf)
- For an extremum (maximum or minimum), the first variation must vanish: δJ = 0

• Calculus of Variations Problems:
- Find functions that extremize (minimize or maximize) functionals
- Examples: shortest path, minimal surface area, least action
- Boundary conditions: fixed endpoints, natural boundary conditions, or mixed conditions
- Constraints can be incorporated using Lagrange multipliers`
      },
      {
        title: 'Euler-Lagrange Equations',
        content: `• Derivation and Form:
- For a functional J[f] = ∫ L(x, f, f')dx, the Euler-Lagrange equation is:
  ∂L/∂f - d/dx(∂L/∂f') = 0
- This is a necessary condition for f to be an extremal function
- For multiple functions, each function satisfies its own Euler-Lagrange equation
- For multiple independent variables, partial derivatives replace ordinary derivatives

• Properties and Extensions:
- The Euler-Lagrange equation is typically a second-order differential equation
- If L does not depend explicitly on x, there is a first integral: L - f'(∂L/∂f') = constant
- If L does not depend explicitly on f, there is another first integral: ∂L/∂f' = constant
- Higher derivatives: if L depends on f'', the Euler-Lagrange equation includes higher-order terms`
      },
      {
        title: 'Action Principles in Physics',
        content: `• Principle of Least Action:
- The action S is defined as the time integral of the Lagrangian: S = ∫ L(q, ḗ, t)dt
- Physical trajectories extremize the action: δS = 0
- Euler-Lagrange equations for mechanical systems: d/dt(∂L/∂ḗᵢ) - ∂L/∂qᵢ = 0
- This principle unifies classical mechanics, relativity, and quantum field theory

• Hamilton's Principle:
- The actual path taken by a system between two fixed configurations minimizes the action
- Equivalent to Newton's laws of motion for conservative systems
- Generalizes to non-conservative systems through appropriate Lagrangian formulation

• Field Theory Applications:
- Fields φ(x,t) are functions of space and time
- Action is a spacetime integral: S = ∫ L(φ, ∂φ/∂xᵢ, xᵢ)d⁴x
- Euler-Lagrange equations become partial differential equations
- Examples: Maxwell's equations, Klein-Gordon equation, Yang-Mills equations`
      }
    ]
  },
  'Group Theory in Physics': {
    title: 'Group Theory in Physics',
    description: 'The application of mathematical group theory to physical systems, providing a framework for understanding symmetries and conservation laws.',
    sections: [
      {
        title: 'Groups and Physical Symmetries',
        content: `• Group Definition and Properties:
- A group is a set G with an operation ∘ satisfying:
  * Closure: a ∘ b ∈ G for all a, b ∈ G
  * Associativity: (a ∘ b) ∘ c = a ∘ (b ∘ c)
  * Identity: there exists e ∈ G such that e ∘ a = a ∘ e = a
  * Inverse: for each a ∈ G, there exists a⁻¹ ∈ G such that a ∘ a⁻¹ = a⁻¹ ∘ a = e

• Physical Symmetry Groups:
- Discrete groups: rotational symmetries of crystals, permutation groups
- Continuous groups: rotation group SO(3), Lorentz group
- Symmetry transformations: operations that leave physical laws invariant
- Examples: rotations, translations, time reversal, parity`
      },
      {
        title: 'Representation Theory',
        content: `• Group Representations:
- A representation maps group elements to linear operators on a vector space
- Representation D(g) satisfies D(g₁)D(g₂) = D(g₁g₂) for all g₁, g₂ ∈ G
- Irreducible representations cannot be decomposed into smaller representations
- The character of a representation is the trace of the representation matrices: χ(g) = Tr(D(g))

• Representation Properties:
- Equivalent representations: D'(g) = S⁻¹D(g)S for some invertible S
- Direct sum: D = D₁ ⊕ D₂ means D(g) = diag(D₁(g), D₂(g))
- Orthogonality relations: Σₓ χᵢ(g)χᵣ*(g) = |G|δᵢᵣ for irreducible representations
- Dimension formula: Σᵢ (dim ρᵢ)² = |G| for finite groups`
      },
      {
        title: 'Applications in Physics',
        content: `• Crystal Symmetries and Character Tables:
- Point groups describe the symmetry of molecules and crystal structures
- Character tables summarize the properties of all irreducible representations
- Rows correspond to irreducible representations, columns to conjugacy classes
- Applications: selection rules, molecular vibrations, crystal field splitting

• Particle Physics:
- SU(3) classification of elementary particles (Eightfold Way)
- Isospin (SU(2)) describes nucleon states
- Standard Model based on SU(3) × SU(2) × U(1) gauge symmetry
- Symmetry breaking explains mass generation via the Higgs mechanism

• Conservation Laws:
- Noether's theorem: continuous symmetries → conservation laws
- Translational invariance → momentum conservation
- Rotational invariance → angular momentum conservation
- Time translation invariance → energy conservation`
      }
    ]
  },
  'Asymptotic Analysis': {
    title: 'Asymptotic Analysis',
    description: 'Mathematical techniques for approximating the behavior of functions and solutions to differential equations in limiting cases.',
    sections: [
      {
        title: 'Asymptotic Expansions',
        content: `• Basic Concepts:
- Asymptotic expansions approximate functions in limiting regions
- Notation: f(x) ~ Σₙ₀ⁿ aₙx⁻ⁿ as x → ∞
- Big O notation: f(x) = O(g(x)) means |f(x)| ≤ C|g(x)| for large x
- Little o notation: f(x) = o(g(x)) means f(x)/g(x) → 0 as x → ∞

• Methods and Properties:
- Method of dominant balance: identify leading terms in equations
- Matching of asymptotic expansions: connect solutions in different regions
- Asymptotic series often diverge but provide accurate approximations when truncated
- Examples: Stirling's formula for n!, asymptotic behavior of special functions`
      },
      {
        title: 'WKB Approximation',
        content: `• Wentzel-Kramers-Brillouin Method:
- Approximates solutions to linear second-order differential equations
- Applicable when a parameter makes the solution highly oscillatory
- For the equation ε²y'' + Q(x)y = 0 with small ε
- WKB ansatz: y(x) ~ exp(Σₙ₀ⁿ εⁿ Sₙ(x))

• Leading Order Approximation:
- S₀'(x) = ±√Q(x) gives the phase
- Solution: y(x) ~ A·Q(x)⁻¼·exp(±i∫√Q(x)dx/ε)
- Valid away from turning points where Q(x) = 0
- Connection formulas handle transitions through turning points

• Quantum Mechanical Applications:
- Schrödinger equation in semiclassical limit (ħ → 0)
- Tunneling through potential barriers
- Quantization conditions for bound states
- Connection to classical mechanics via the correspondence principle`
      },
      {
        title: 'Saddle Point Methods',
        content: `• Method of Steepest Descent:
- Evaluates integrals of the form I = ∫ e^{f(z)}dz in the limit of large parameter
- The main contribution comes from saddle points where f'(z) = 0
- The integration contour is deformed to pass through saddle points along paths of steepest descent
- Approximation: I ~ Σᵢ √(2π/|f''(zᵢ)|)·e^{f(zᵢ)}

• Stationary Phase Method:
- Variant for oscillatory integrals I = ∫ e^{iλf(x)}g(x)dx as λ → ∞
- Main contributions come from stationary points where f'(x) = 0
- Approximation includes phase factors depending on the signature of f''(x)

• Applications in Path Integrals:
- Feynman path integrals in quantum mechanics and field theory
- Classical paths correspond to saddle points of the action
- Semiclassical approximation recovers classical mechanics
- Instantons: non-perturbative effects from saddle points in Euclidean space
- Tunneling amplitudes and decay rates calculated via saddle point methods`
      }
    ]
  },
  'Fiber Bundles': {
    title: 'Fiber Bundles',
    description: 'Mathematical structures that formalize the concept of a family of spaces parameterized by points of another space, with applications in gauge theories and modern physics.',
    sections: [
      {
        title: 'Basic Concepts',
        content: `• Definition and Structure:
- A fiber bundle consists of a total space E, a base space B, and a projection map π: E → B
- For each point x in B, the fiber π^(-1)(x) is homeomorphic to a standard fiber F
- Locally, a bundle resembles a product space B × F
- Examples: tangent bundle, Möbius strip, vector bundles

• Key Components:
- Total space E: the entire bundle space
- Base space B: the parameter space
- Fiber F: the space attached to each point of B
- Projection π: maps each point in E to its base point in B
- Local trivializations: maps that locally identify the bundle with B × F`
      },
      {
        title: 'Principal Bundles and Gauge Theories',
        content: `• Principal Bundles:
- Special fiber bundles where the fiber is a Lie group G acting on itself by right multiplication
- The structure group G acts freely and transitively on each fiber
- Local trivializations transform by G-valued transition functions
- The tangent bundle frame bundle is a principal bundle with structure group GL(n)

• Connections on Bundles:
- A connection defines parallel transport between fibers
- Mathematically, it provides a decomposition of the tangent space to E into horizontal and vertical subspaces
- In a principal G-bundle, a connection is specified by a Lie algebra-valued 1-form (the connection form)
- The curvature measures the failure of parallel transport to return to the starting point when traversing a closed loop`
      },
      {
        title: 'Gauge Theories and Yang-Mills Fields',
        content: `• Gauge Theory Formulation:
- Physical fields are sections of associated bundles
- Gauge transformations are vertical automorphisms of the principal bundle
- The gauge potential A is a connection on a principal bundle
- The field strength F = dA + A ∧ A is the curvature of the connection

• Yang-Mills Theory:
- A non-Abelian gauge theory with structure group typically SU(N)
- The connection represents the gauge field (e.g., electromagnetic or gluon field)
- The Yang-Mills action is S = ∫ Tr(F ∧ *F)
- Equations of motion: D*F = 0 (where D is the covariant exterior derivative)

• Physical Applications:
- Electromagnetism: U(1) gauge theory with electromagnetic potential as connection
- Weak interactions: SU(2) gauge theory
- Strong interactions: SU(3) gauge theory (quantum chromodynamics)
- The Standard Model combines U(1) × SU(2) × SU(3) gauge theories`
      }
    ]
  },
  'Classification of PDEs': {
    title: 'Classification of PDEs',
    description: 'Systematic categorization of partial differential equations based on their mathematical properties and solution behaviors.',
    sections: [
      {
        title: 'Second-Order Linear PDEs',
        content: `• General Form:
- A second-order linear PDE in two variables has the form:
  A∂²u/∂x² + B∂²u/∂x∂y + C∂²u/∂y² + lower order terms = 0
- Classification depends on the discriminant B² - 4AC

• Three Main Types:
- Elliptic: B² - 4AC < 0 (e.g., Laplace's equation ∇²u = 0)
- Parabolic: B² - 4AC = 0 (e.g., Heat equation ∂u/∂t = α∇²u)
- Hyperbolic: B² - 4AC > 0 (e.g., Wave equation ∂²u/∂t² = c²∇²u)`
      },
      {
        title: 'Elliptic PDEs',
        content: `• Characteristics:
- No real characteristic curves
- Solutions tend to be smooth
- Boundary value problems: solution determined by values on a closed boundary
- Describe equilibrium or steady-state phenomena

• Examples:
- Laplace's equation: ∇²u = 0
- Poisson's equation: ∇²u = f
- Helmholtz equation: ∇²u + k²u = 0

• Physical Applications:
- Electrostatic potentials
- Steady-state temperature distributions
- Gravitational potentials
- Quantum mechanics (time-independent Schrödinger equation)`
      },
      {
        title: 'Parabolic and Hyperbolic PDEs',
        content: `• Parabolic PDEs:
- One family of real characteristic curves
- Initial value problems: solution evolves from initial conditions
- Describe diffusion processes and irreversible phenomena
- Examples: Heat equation ∂u/∂t = α∇²u, diffusion equation
- Applications: Heat conduction, diffusion processes, option pricing

• Hyperbolic PDEs:
- Two families of real characteristic curves
- Initial value problems with finite propagation speed
- Describe wave propagation and reversible phenomena
- Examples: Wave equation ∂²u/∂t² = c²∇²u, Klein-Gordon equation
- Applications: Mechanical waves, electromagnetic waves, relativistic quantum mechanics`
      }
    ]
  },
  'Sturm-Liouville Theory': {
    title: 'Sturm-Liouville Theory',
    description: 'Mathematical framework for analyzing a class of second-order linear differential equations, with applications in boundary value problems and quantum mechanics.',
    sections: [
      {
        title: 'Sturm-Liouville Differential Equations',
        content: `• Standard Form:
- The Sturm-Liouville equation is: d/dx[p(x)dy/dx] + q(x)y + λr(x)y = 0
- Alternatively written as: (py')' + qy + λry = 0
- Defined on an interval [a,b] with appropriate boundary conditions
- p(x) > 0, r(x) > 0 on [a,b], and p, p', q, r are continuous

• Self-Adjoint Form:
- Can be written as L[y] + λr(x)y = 0 where L is a self-adjoint operator
- The self-adjoint property ensures orthogonality of eigenfunctions
- Many physical problems can be cast in this form`
      },
      {
        title: 'Eigenvalues and Eigenfunctions',
        content: `• Eigenvalue Problem:
- Find values of λ (eigenvalues) for which the equation has non-trivial solutions satisfying the boundary conditions
- The corresponding solutions y(x) are called eigenfunctions

• Properties of Eigenvalues:
- The eigenvalues λₙ are real
- They form an infinite sequence: λ₁ < λ₂ < λ₃ < ... with λₙ → ∞ as n → ∞
- Each eigenvalue corresponds to a unique eigenfunction (up to a constant factor)

• Properties of Eigenfunctions:
- Eigenfunctions corresponding to different eigenvalues are orthogonal with respect to the weight function r(x):
  ∫ₐᵇ yₘ(x)yₙ(x)r(x)dx = 0 for m ≠ n
- The set of eigenfunctions forms a complete basis for functions on [a,b]`
      },
      {
        title: 'Applications in Physics',
        content: `• Quantum Mechanics:
- The time-independent Schrödinger equation is a Sturm-Liouville problem
- Eigenvalues correspond to energy levels
- Eigenfunctions represent quantum states
- Examples: harmonic oscillator, hydrogen atom, particle in a box

• Vibration Problems:
- Vibrating strings, membranes, and elastic bodies
- Eigenvalues correspond to natural frequencies
- Eigenfunctions represent normal modes of vibration

• Heat Conduction:
- Separation of variables in the heat equation leads to Sturm-Liouville problems
- Eigenfunctions used to construct series solutions

• Special Functions:
- Many special functions arise as solutions to Sturm-Liouville problems
- Legendre polynomials, Bessel functions, spherical harmonics`
      }
    ]
  },
  'Nonlinear PDEs': {
    title: 'Nonlinear PDEs',
    description: 'Partial differential equations with nonlinear terms, exhibiting complex behaviors such as solitons, shock waves, and chaotic dynamics.',
    sections: [
      {
        title: 'Introduction to Nonlinear PDEs',
        content: `• Characteristics of Nonlinear PDEs:
- Contain nonlinear terms involving the dependent variable or its derivatives
- Solutions often cannot be superposed (no superposition principle)
- May exhibit qualitatively different behaviors than linear equations
- Examples: Navier-Stokes equations, nonlinear Schrödinger equation, Korteweg-de Vries equation

• Solution Methods:
- Analytical: inverse scattering transform, Bäcklund transformations
- Perturbative: asymptotic expansions, multiple scales analysis
- Numerical: finite difference, finite element, spectral methods
- Qualitative: phase space analysis, stability theory`
      },
      {
        title: 'Solitons and Integrable Systems',
        content: `• Solitons:
- Localized wave packets that maintain their shape while propagating
- Result from a balance between nonlinearity and dispersion
- Interact with each other and emerge unchanged (except for phase shifts)

• Korteweg-de Vries (KdV) Equation:
- Prototypical equation exhibiting soliton solutions: ∂u/∂t + u∂u/∂x + ∂³u/∂x³ = 0
- Describes shallow water waves, plasma physics, and other physical systems
- Single soliton solution: u(x,t) = 3c sech²(√c/2 (x - ct))
- Discovered to have an infinite number of conservation laws

• Other Integrable Systems:
- Nonlinear Schrödinger equation: i∂ψ/∂t + ∂²ψ/∂x² + |ψ|²ψ = 0
- Sine-Gordon equation: ∂²u/∂t² - ∂²u/∂x² + sin(u) = 0
- Toda lattice, Benjamin-Ono equation
- Characterized by the existence of a Lax pair representation`
      },
      {
        title: 'Shock Waves and Conservation Laws',
        content: `• Shock Waves:
- Discontinuous solutions that develop in nonlinear hyperbolic PDEs
- Represent abrupt changes in physical quantities
- Require special mathematical treatment at the discontinuity

• Burgers' Equation:
- Simplest nonlinear PDE exhibiting shock formation: ∂u/∂t + u∂u/∂x = ν∂²u/∂x²
- In the inviscid limit (ν → 0), smooth initial data can develop discontinuities in finite time
- Can be solved exactly using the Cole-Hopf transformation for ν > 0

• Conservation Laws:
- PDEs in the form ∂u/∂t + ∂f(u)/∂x = 0 where f is the flux function
- Examples: Euler equations of gas dynamics, shallow water equations
- Weak solutions must satisfy the Rankine-Hugoniot jump conditions across shocks
- Entropy conditions determine physically relevant solutions

• Applications:
- Gas dynamics and fluid mechanics
- Traffic flow modeling
- Magnetohydrodynamics
- Nonlinear acoustics`
      }
    ]
  },
  'Manifolds & Tensors': {
    title: 'Manifolds & Tensors',
    description: 'Mathematical structures that generalize curved spaces and physical quantities with multiple components, essential in general relativity and field theories.',
    sections: [
      {
        title: 'Manifold Fundamentals',
        content: `• Definition and Properties:
- A manifold is a topological space that locally resembles Euclidean space
- An n-dimensional manifold is locally homeomorphic to Rⁿ
- Manifolds allow us to generalize calculus to curved spaces
- Examples: sphere (2D), spacetime (4D), phase space in mechanics

• Charts and Atlases:
- A chart is a homeomorphism from an open subset of a manifold to an open subset of Rⁿ
- An atlas is a collection of charts that cover the entire manifold
- Transition maps between overlapping charts must be smooth (differentiable)
- Differentiable manifolds have smooth transition functions`
      },
      {
        title: 'Tangent Spaces and Vectors',
        content: `• Tangent Space:
- At each point p on a manifold, there exists a vector space TₘM called the tangent space
- Tangent vectors can be defined as equivalence classes of curves or as directional derivative operators
- Dimension of the tangent space equals the dimension of the manifold

• Vector Fields:
- A vector field assigns a tangent vector to each point on the manifold
- Smooth vector fields: sections of the tangent bundle TM
- Vector fields act as differential operators on functions
- Examples: velocity field of a fluid, electromagnetic field`
      },
      {
        title: 'Tensors and Metric',
        content: `• Tensor Definition:
- Tensors are multilinear maps on products of tangent and cotangent spaces
- A tensor of type (r,s) has r contravariant and s covariant indices
- Tensors transform in specific ways under coordinate changes
- Physical quantities like stress, curvature, and electromagnetic field are tensors

• Metric Tensor:
- The metric tensor gμν defines notions of distance, angle, and volume
- It provides an inner product on tangent spaces
- In local coordinates: ds² = gμν dxμ dxν
- The metric determines the geometry of the manifold
- Examples: Euclidean metric δμν, Minkowski metric ημν

• Christoffel Symbols:
- Connection coefficients Γμνρ that define parallel transport
- Related to derivatives of the metric: Γμνρ = (1/2)gρσ(∂μgσν + ∂νgσμ - ∂σgμν)
- Used to define the covariant derivative ∇μ
- Determine how vectors change when parallel transported along curves
- Zero in flat space with Cartesian coordinates`
      }
    ]
  },
  'Lie Groups & Algebras': {
    title: 'Lie Groups & Algebras',
    description: 'Mathematical structures that describe continuous symmetries, with applications in particle physics, quantum mechanics, and field theories.',
    sections: [
      {
        title: 'Lie Group Fundamentals',
        content: `• Definition and Properties:
- A Lie group is a group that is also a differentiable manifold
- Group operations (multiplication and inversion) are smooth maps
- Describes continuous symmetry transformations
- Examples: rotation group SO(3), special unitary group SU(2), Lorentz group

• Matrix Lie Groups:
- Subgroups of GL(n,R) or GL(n,C) with matrix multiplication
- SO(3): 3×3 orthogonal matrices with determinant 1 (rotations in 3D space)
- SU(2): 2×2 unitary matrices with determinant 1 (spin transformations)
- U(1): complex numbers with absolute value 1 (phase transformations)`
      },
      {
        title: 'Lie Algebras and Generators',
        content: `• Lie Algebra Definition:
- The tangent space at the identity element of a Lie group
- Vector space equipped with a bilinear, antisymmetric bracket operation [X,Y]
- The bracket satisfies the Jacobi identity: [X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0
- For matrix groups, the bracket is the commutator: [X,Y] = XY - YX

• Generators:
- Basis elements of the Lie algebra
- Infinitesimal generators of one-parameter subgroups
- For SO(3), generators correspond to infinitesimal rotations around coordinate axes
- For SU(2), generators are related to Pauli matrices

• Commutation Relations:
- Define the structure of the Lie algebra
- For SO(3): [Jᵢ,Jᵣ] = εᵢᵣᵤJᵤ where εᵢᵣᵤ is the Levi-Civita symbol
- For SU(2): [Tᵢ,Tᵣ] = iεᵢᵣᵤTᵤ where Tᵢ = σᵢ/2 (Pauli matrices)`
      },
      {
        title: 'Applications in Physics',
        content: `• Symmetries and Conservation Laws:
- Noether's theorem: continuous symmetries correspond to conservation laws
- SO(3) symmetry → angular momentum conservation
- U(1) symmetry → charge conservation

• Quantum Mechanics:
- SU(2) describes spin-1/2 particles
- Representations of Lie groups correspond to particle multiplets
- Angular momentum operators form an SO(3) algebra

• Gauge Theories:
- Local symmetries lead to gauge theories
- U(1): electromagnetism
- SU(2): weak interactions
- SU(3): strong interactions (quantum chromodynamics)

• Group Representations:
- Linear actions of groups on vector spaces
- Irreducible representations classify particle states
- Character theory helps decompose complicated representations`
      }
    ]
  },
  'Differential Forms': {
    title: 'Differential Forms',
    description: 'Mathematical objects that generalize integration on manifolds, providing a coordinate-independent approach to vector calculus and field theory.',
    sections: [
      {
        title: 'Fundamentals of Differential Forms',
        content: `• Definition and Properties:
- A differential k-form is an antisymmetric tensor field of type (0,k)
- 0-forms are scalar functions, 1-forms are covectors (dual to vectors)
- 2-forms represent area elements, 3-forms represent volume elements
- Forms can be integrated over appropriate dimensional domains

• Wedge Product:
- Operation that combines a k-form and an l-form to produce a (k+l)-form
- Denoted by ∧, satisfies α ∧ β = (-1)^{kl} β ∧ α
- Examples: dx ∧ dy represents an oriented area element
- dx ∧ dy ∧ dz represents an oriented volume element`
      },
      {
        title: 'Exterior Derivative and Stokes\'s Theorem',
        content: `• Exterior Derivative:
- Maps k-forms to (k+1)-forms: d: Ω^k(M) → Ω^{k+1}(M)
- Generalizes gradient, curl, and divergence operations
- Properties: d(dα) = 0 (nilpotency), d(α ∧ β) = dα ∧ β + (-1)^k α ∧ dβ
- For a 0-form f: df = (∂f/∂xᵢ)dxᵢ (gradient)
- For a 1-form α = αᵢdxᵢ: dα = (∂αᵣ/∂xᵢ - ∂αᵢ/∂xᵣ)dxᵢ ∧ dxᵣ (curl)

• Stokes's Theorem:
- Generalizes the fundamental theorem of calculus to manifolds
- For a k-form α on a (k+1)-dimensional manifold M with boundary ∂M:
  ∫_M dα = ∫_{∂M} α
- Special cases:
  * k=0: Fundamental theorem of calculus
  * k=1: Green's theorem in the plane
  * k=2: Classical Stokes's theorem for surfaces
  * k=3: Gauss's divergence theorem`
      },
      {
        title: 'Applications in Physics',
        content: `• Electromagnetism:
- The electromagnetic field tensor F is a 2-form
- Maxwell's equations: dF = 0 and d*F = J (where * is the Hodge star operator)
- The potential A is a 1-form with F = dA
- Electric field E and magnetic field B components are encoded in F

• General Relativity:
- The connection 1-forms ωμν describe parallel transport
- The curvature 2-forms Ωμν = dωμν + ωμρ ∧ ωρν represent spacetime curvature
- Einstein's field equations relate the curvature to the energy-momentum tensor

• Symplectic Geometry:
- Phase space in Hamiltonian mechanics is equipped with a symplectic 2-form ω
- Hamilton's equations can be written using ω
- Liouville's theorem: the symplectic form is preserved under time evolution`
      }
    ]
  },
  'Complex Analysis': {
    title: 'Complex Analysis',
    description: 'The study of functions of complex variables, providing powerful methods for solving problems in physics and engineering.',
    sections: [
      {
        title: 'Complex Functions and Analyticity',
        content: `• Complex Functions:
- Functions of the form f(z) where z = x + iy is a complex variable
- Can be expressed as f(z) = u(x,y) + iv(x,y) where u and v are real functions
- A function is analytic if it is complex differentiable in a region

• Cauchy-Riemann Equations:
- Necessary conditions for a function to be analytic
- For f(z) = u(x,y) + iv(x,y), the equations are:
  * ∂u/∂x = ∂v/∂y
  * ∂u/∂y = -∂v/∂x
- If these equations are satisfied and the partial derivatives are continuous, the function is analytic

• Analytic Functions:
- Possess derivatives of all orders (infinitely differentiable)
- Can be represented by convergent power series
- Examples: polynomials, exponential function e^z, trigonometric functions sin(z) and cos(z)`
      },
      {
        title: 'Contour Integration',
        content: `• Complex Line Integrals:
- Defined as ∫_C f(z)dz = ∫_C f(z(t))z'(t)dt where C is a curve parameterized by z(t)
- For closed contours, we write ∮_C f(z)dz

• Cauchy's Integral Theorem:
- If f(z) is analytic inside and on a simple closed contour C, then ∮_C f(z)dz = 0
- Implies path independence of integrals in simply connected domains

• Cauchy's Integral Formula:
- If f(z) is analytic inside and on a simple closed contour C, and a is a point inside C, then:
  f(a) = (1/2πi)∮_C f(z)/(z-a)dz
- Provides a way to compute the value of an analytic function at any point inside a contour
- Derivatives can be computed using: f^(n)(a) = (n!/2πi)∮_C f(z)/(z-a)^(n+1)dz`
      },
      {
        title: 'Residue Theorem and Applications',
        content: `• Singularities and Residues:
- Isolated singularity: a point z₀ where f(z) is not analytic but is analytic in some punctured disk around z₀
- Types: removable, pole, essential
- Residue at z₀: coefficient of (z-z₀)^(-1) in the Laurent series expansion of f(z) around z₀
- For a simple pole at z₀: Res(f,z₀) = lim(z→z₀) (z-z₀)f(z)

• Residue Theorem:
- If f(z) is analytic inside and on a simple closed contour C except at finitely many points inside C, then:
  ∮_C f(z)dz = 2πi·∑Res(f,zₖ) where zₖ are the singularities inside C

• Applications in Physics:
- Evaluation of definite integrals: ∫_{-∞}^{∞} f(x)dx can often be computed using contour integration
- Quantum field theory: computation of Feynman diagrams
- Dispersion relations: connecting real and imaginary parts of response functions
- Green's functions: solving differential equations in electrodynamics and quantum mechanics`
      }
    ]
  },
  'Green Functions': {
    title: 'Green Functions',
    description: 'Mathematical tools used to solve inhomogeneous differential equations by representing the solution in terms of the source distribution.',
    sections: [
      {
        title: 'Fundamentals of Green Functions',
        content: `• Basic Concept:
- A Green's function G(x,x') is the impulse response of a differential operator L
- It satisfies the equation L[G(x,x')] = δ(x-x') where δ is the Dirac delta function
- Used to solve inhomogeneous differential equations of the form L[u] = f
- The solution is given by u(x) = ∫G(x,x')f(x')dx'

• Properties:
- Linearity: Green's functions respect the linearity of the differential operator
- Symmetry: For self-adjoint operators, G(x,x') = G(x',x)
- Uniqueness: Determined by boundary conditions of the problem

• Types of Green's Functions:
- Retarded/causal Green's function: G⁺(x,t;x',t') = 0 for t < t'
- Advanced Green's function: G⁻(x,t;x',t') = 0 for t > t'
- Time-independent Green's function: For stationary problems`
      },
      {
        title: 'Green Functions for Common Differential Equations',
        content: `• Poisson's Equation:
- ∇²u = -f
- Green's function satisfies ∇²G(r,r') = -δ(r-r')
- In 3D free space: G(r,r') = 1/(4π|r-r'|)
- The solution is u(r) = ∫G(r,r')f(r')dr'

• Helmholtz Equation:
- (∇² + k²)u = -f
- Green's function satisfies (∇² + k²)G(r,r') = -δ(r-r')
- In 3D free space: G(r,r') = e^(ik|r-r'|)/(4π|r-r'|)

• Heat Equation:
- ∂u/∂t - α∇²u = f
- Green's function satisfies ∂G/∂t - α∇²G = δ(r-r')δ(t-t')
- In 1D: G(x,t;x',t') = (1/√(4πα(t-t')))e^(-(x-x')²/(4α(t-t'))) for t > t'`
      },
      {
        title: 'Applications in Physics',
        content: `• Electrostatics:
- Electric potential from charge distribution: φ(r) = (1/4πε₀)∫ρ(r')/|r-r'|dr'
- Green's function G(r,r') = 1/(4πε₀|r-r'|) is the potential due to a point charge

• Quantum Mechanics:
- Propagators: G(x,t;x',t') represents the probability amplitude for a particle to move from x' at time t' to x at time t
- Schrödinger equation: i∂ψ/∂t = Hψ
- Feynman path integral formulation uses Green's functions

• Scattering Theory:
- The Lippmann-Schwinger equation relates the scattered wave to the incident wave via Green's functions
- S-matrix elements can be expressed in terms of Green's functions

• Field Theory:
- Green's functions correspond to propagators in quantum field theory
- Correlation functions are related to Green's functions
- Dyson's equation relates full propagators to free propagators`
      }
    ]
  },
  'Integral Transforms': {
    title: 'Integral Transforms',
    description: 'Mathematical techniques that transform differential equations into algebraic equations, simplifying their solution.',
    sections: [
      {
        title: 'Fourier Transform',
        content: `• Definition and Properties:
- Forward transform: F(k) = (1/√(2π))∫_{-∞}^{∞} f(x)e^{-ikx}dx
- Inverse transform: f(x) = (1/√(2π))∫_{-∞}^{∞} F(k)e^{ikx}dk
- Transforms differential operators: d/dx → ik, d²/dx² → -k²

• Important Properties:
- Linearity: F{af + bg} = aF{f} + bF{g}
- Convolution theorem: F{f * g} = √(2π)F{f}·F{g}
- Parseval's theorem: ∫|f(x)|²dx = ∫|F(k)|²dk
- Shift property: F{f(x-a)} = e^{-ika}F{k}

• Applications in Physics:
- Momentum-space representations in quantum mechanics
- Wave propagation and diffraction
- Signal processing and spectral analysis
- Solution of partial differential equations`
      },
      {
        title: 'Laplace Transform',
        content: `• Definition and Properties:
- Forward transform: F(s) = ∫_{0}^{∞} f(t)e^{-st}dt
- Inverse transform: f(t) = (1/2πi)∫_{c-i∞}^{c+i∞} F(s)e^{st}ds
- Transforms differential operators: d/dt → s, d²/dt² → s²

• Important Properties:
- Linearity: L{af + bg} = aL{f} + bL{g}
- Convolution theorem: L{f * g} = L{f}·L{g}
- Initial value theorem: lim(t→0) f(t) = lim(s→∞) sF(s)
- Final value theorem: lim(t→∞) f(t) = lim(s→0) sF(s)

• Applications in Physics:
- Solving ordinary differential equations with initial conditions
- Circuit analysis in electrical engineering
- Control theory and system response
- Heat conduction and diffusion problems`
      },
      {
        title: 'Mellin Transform and Other Transforms',
        content: `• Mellin Transform:
- Definition: M{f}(s) = ∫_{0}^{∞} f(x)x^{s-1}dx
- Related to the Fourier and Laplace transforms
- Useful for studying asymptotic behavior of functions
- Applications in number theory and complex analysis

• Hankel Transform:
- Fourier-Bessel transform using Bessel functions
- Definition: F(k) = ∫_{0}^{∞} f(r)J_ν(kr)rdr
- Used for problems with cylindrical symmetry

• Hilbert Transform:
- Definition: H{f}(x) = (1/π)P∫_{-∞}^{∞} f(t)/(x-t)dt
- P denotes the Cauchy principal value
- Relates real and imaginary parts of analytic functions
- Used in signal processing and dispersion relations

• Z-Transform:
- Discrete version of the Laplace transform
- Definition: Z{f}(z) = ∑_{n=0}^{∞} f[n]z^{-n}
- Used for discrete-time signals and difference equations`
      }
    ]
  },
  'Special Functions': {
    title: 'Special Functions',
    description: 'Important mathematical functions that arise in the solution of differential equations in physics and engineering applications.',
    sections: [
      {
        title: 'Orthogonal Polynomials',
        content: `• General Properties:
- Orthogonal polynomials form complete sets of orthogonal functions with respect to specific weight functions
- They satisfy orthogonality relations of the form: ∫w(x)Pₙ(x)Pₘ(x)dx = 0 when n ≠ m
- These polynomials arise naturally when solving differential equations using separation of variables

• Legendre Polynomials:
- Defined on the interval [-1, 1] with weight function w(x) = 1
- Satisfy the Legendre differential equation: (1-x²)y'' - 2xy' + n(n+1)y = 0
- First few polynomials: P₀(x) = 1, P₁(x) = x, P₂(x) = ½(3x² - 1)
- Orthogonality relation: ∫₍₋₁₎¹ Pₙ(x)Pₘ(x)dx = 0 for n ≠ m
- Applications in multipole expansions and solutions to Laplace's equation in spherical coordinates

• Hermite Polynomials:
- Defined on (-∞, ∞) with weight function w(x) = e⁻ˣ²
- Satisfy the Hermite differential equation: y'' - 2xy' + 2ny = 0
- First few polynomials: H₀(x) = 1, H₁(x) = 2x, H₂(x) = 4x² - 2
- Orthogonality relation: ∫₍₋∞₎^∞ e⁻ˣ² Hₙ(x)Hₘ(x)dx = 0 for n ≠ m
- Applications in quantum harmonic oscillator solutions and Gaussian beam optics`
      },
      {
        title: 'Bessel Functions',
        content: `• Definition and Properties:
- Solutions to Bessel's differential equation: x²y'' + xy' + (x² - n²)y = 0
- Two main types: Bessel functions of the first kind Jₙ(x) and second kind Yₙ(x)
- Jₙ(x) is finite at x = 0, while Yₙ(x) diverges at x = 0
- For integer n, Jₙ(x) = (1/π)∫₀^π cos(nτ - xsinτ)dτ

• Types of Bessel Functions:
- First kind Jₙ(x): Regular at origin, oscillatory behavior
- Second kind Yₙ(x): Singular at origin (also called Neumann functions)
- Modified Bessel functions Iₙ(x) and Kₙ(x): Solutions to the modified Bessel equation

• Recurrence Relations:
- Jₙ₊₁(x) = (2n/x)Jₙ(x) - Jₙ₋₁(x)
- J'ₙ(x) = ½[Jₙ₋₁(x) - Jₙ₊₁(x)]

• Physical Applications:
- Cylindrical boundary value problems
- Wave propagation in cylindrical geometries
- Vibrations of circular membranes
- Diffraction patterns and electromagnetic wave propagation`
      },
      {
        title: 'Gamma Function',
        content: `• Definition and Properties:
- Extension of the factorial function to complex numbers
- Defined by the integral: Γ(z) = ∫₀^∞ t^(z-1)e^(-t)dt for Re(z) > 0
- Satisfies the functional equation: Γ(z+1) = zΓ(z)
- For positive integers: Γ(n) = (n-1)!

• Key Properties:
- Reflection formula: Γ(z)Γ(1-z) = π/sin(πz)
- Duplication formula: Γ(z)Γ(z+½) = 2^(1-2z)√π·Γ(2z)
- Asymptotic behavior: Stirling's approximation Γ(z) ~ √(2π/z)(z/e)^z for large |z|

• Related Functions:
- Beta function: B(x,y) = Γ(x)Γ(y)/Γ(x+y)
- Digamma function: ψ(z) = d/dz[ln(Γ(z))]

• Applications in Physics:
- Statistical mechanics and thermodynamics
- Dimensional regularization in quantum field theory
- Evaluation of definite integrals
- Solutions to differential equations`
      }
    ]
  },
  'Linear Vector Spaces': {
    title: 'Linear Vector Spaces',
    description: 'Mathematical structures that satisfy vector space axioms, forming the foundation for quantum mechanics and many areas of mathematical physics.',
    sections: [
      {
        title: 'Vector Space Fundamentals',
        content: `• Definition:
- A vector space V over a field F consists of a set with two operations: vector addition and scalar multiplication
- These operations must satisfy specific axioms including associativity, commutativity, and distributivity
- Common examples include Rⁿ (n-dimensional real space), Cⁿ (complex space), and function spaces

• Vector Space Axioms:
- Closure under addition: u + v ∈ V for all u, v ∈ V
- Commutativity: u + v = v + u
- Associativity: (u + v) + w = u + (v + w)
- Existence of zero vector: 0 + v = v for all v ∈ V
- Existence of additive inverse: For each v ∈ V, there exists -v such that v + (-v) = 0
- Closure under scalar multiplication: αv ∈ V for all α ∈ F, v ∈ V
- Distributivity: α(u + v) = αu + αv and (α + β)v = αv + βv
- Scalar multiplication identity: 1v = v`
      },
      {
        title: 'Basis and Dimension',
        content: `• Basis:
- A basis for a vector space is a linearly independent set of vectors that spans the entire space
- Every vector in the space can be written uniquely as a linear combination of basis vectors
- The standard basis for Rⁿ consists of vectors e₁, e₂, ..., eₙ where eᵢ has 1 in the ith position and 0 elsewhere

• Linear Independence:
- Vectors v₁, v₂, ..., vₙ are linearly independent if the equation α₁v₁ + α₂v₂ + ... + αₙvₙ = 0 implies α₁ = α₂ = ... = αₙ = 0
- If one vector can be expressed as a linear combination of others, the set is linearly dependent

• Dimension:
- The dimension of a vector space is the number of vectors in any basis
- Finite-dimensional spaces have a finite basis
- Infinite-dimensional spaces (like function spaces) have no finite basis`
      },
      {
        title: 'Inner Products and Orthogonality',
        content: `• Inner Product:
- An inner product on a vector space V is a function ⟨·,·⟩: V × V → F that satisfies:
  * Conjugate symmetry: ⟨u,v⟩ = ⟨v,u⟩* (where * denotes complex conjugate)
  * Linearity in first argument: ⟨αu + βv, w⟩ = α⟨u,w⟩ + β⟨v,w⟩
  * Positive definiteness: ⟨v,v⟩ > 0 for v ≠ 0
- The standard inner product in Rⁿ is the dot product: ⟨u,v⟩ = u₁v₁ + u₂v₂ + ... + uₙvₙ

• Orthogonality:
- Two vectors u and v are orthogonal if ⟨u,v⟩ = 0
- An orthogonal set is a set of vectors where any two distinct vectors are orthogonal
- An orthonormal set is an orthogonal set where each vector has unit norm (⟨v,v⟩ = 1)

• Gram-Schmidt Process:
- A procedure to convert any linearly independent set of vectors into an orthonormal set
- Preserves the span of the original set, creating an orthonormal basis`
      },
      {
        title: 'Hilbert Spaces in Quantum Mechanics',
        content: `• Hilbert Space Definition:
- A complete inner product space, where completeness means that all Cauchy sequences converge within the space
- The state space of quantum mechanics is a complex Hilbert space

• Quantum Mechanical Applications:
- State vectors: Pure quantum states are represented as unit vectors in Hilbert space
- Observables: Physical observables correspond to Hermitian operators on the Hilbert space
- Measurement: The probability of measuring a state |ψ⟩ in the eigenstate |φ⟩ is |⟨φ|ψ⟩|²

• Function Spaces in Quantum Mechanics:
- L²(R), the space of square-integrable functions, is the Hilbert space for position-space wavefunctions
- The inner product is defined as ⟨f|g⟩ = ∫f*(x)g(x)dx
- Completeness allows for convergent expansions in terms of basis functions (e.g., Fourier series)

• Dirac Notation:
- |ψ⟩ represents a state vector (ket)
- ⟨ψ| represents the dual vector (bra)
- ⟨φ|ψ⟩ represents the inner product (bracket)`
      }
    ]
  }
};
