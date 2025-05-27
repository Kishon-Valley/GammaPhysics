export const physicsNotes = {
  'Angular Momentum': {
    title: 'Angular Momentum',
    description: `A vector quantity that measures rotational motion, representing the rotational equivalent of linear momentum. It is conserved in isolated systems, which makes it an important concept in analyzing rotational dynamics.`,
    sections: [
      {
        title: 'Definition and Mathematical Formulation',
        content: `Angular momentum can be expressed in two equivalent ways:

1. For a particle:
   L = r × p = r × mv
   • L: Angular momentum vector (kg·m²/s)
   • r: Position vector from rotation axis to particle
   • p: Linear momentum vector (mv)
   • m: Mass of particle
   • v: Velocity of particle

2. For a rigid body:
   L = Iω
   • I: Moment of inertia (kg·m²)
   • ω: Angular velocity vector (rad/s)

Direction determined by right-hand rule, perpendicular to both r and p.`
      },
      {
        title: 'Conservation of Angular Momentum',
        content: `In the absence of external torques, the total angular momentum of a system remains constant:

ΣL = constant

This principle explains:
• A spinning ice skater speeds up when pulling arms inward
• Formation of spiral galaxies
• Stability of planetary orbits
• Gyroscopic precession

When moment of inertia I decreases, angular velocity ω must increase to maintain constant L = Iω.`
      },
      {
        title: 'Quantization in Quantum Mechanics',
        content: `In quantum systems, angular momentum is quantized:
• Orbital angular momentum: L = √[l(l+1)]ħ
  - l = 0, 1, 2, ...
• Spin angular momentum: S = √[s(s+1)]ħ
  - s = 0, 1/2, 1, ...
• ħ = h/2π (reduced Planck constant)

This quantization explains atomic spectra and particle properties.`
      },
      {
        title: 'Applications',
        content: `• Astrophysics: Stellar rotation, galaxy formation, planetary motion
• Engineering: Gyroscopes, stabilization systems, reaction wheels
• Sports: Diving, figure skating, gymnastics
• Quantum Physics: Atomic structure, particle spin
• Everyday examples: Spinning tops, bicycle wheels, rotating machinery`
      }
    ]
  },
  
  'Simple Harmonic Motion': {
    title: 'Simple Harmonic Motion',
    description: 'A type of periodic motion where a restoring force is directly proportional to displacement from equilibrium position.',
    sections: [
      {
        title: 'Key Characteristics',
        content: `• Oscillates about equilibrium position
        • Restoring force F = -kx (Hooke's Law)
        • Period T = 2π√(m/k)
        • Frequency f = 1/T
        • Maximum displacement: Amplitude (A)`
      },
      {
        title: 'Examples',
        content: `• Mass on a spring
        • Simple pendulum
        • LC circuits
        • Sound waves
        • Molecular vibrations`
      }
    ]
  },

  'Momentum': {
    title: 'Momentum',
    description: 'A fundamental concept in physics representing the quantity of motion possessed by an object.',
    sections: [
      {
        title: 'Basic Concepts',
        content: `• Linear momentum: p = mv
        • Conservation of momentum
        • Impulse: J = F∆t = ∆p
        • Elastic vs. inelastic collisions`
      },
      {
        title: 'Applications',
        content: `• Vehicle collisions
        • Rocket propulsion
        • Sports physics
        • Particle physics`
      }
    ]
  },

  'Energy': {
    title: 'Energy',
    description: 'The capacity to do work or cause change in a system, existing in various forms.',
    sections: [
      {
        title: 'Forms of Energy',
        content: `• Kinetic Energy: KE = ½mv²
        • Potential Energy: PE = mgh
        • Thermal Energy
        • Nuclear Energy: E = mc²
        • Electromagnetic Energy`
      },
      {
        title: 'Conservation Laws',
        content: `• Conservation of Energy
        • Energy transformations
        • Work-Energy Theorem
        • Power: P = dE/dt`
      }
    ]
  },

  'Force': {
    title: 'Force',
    description: 'A push or pull that can cause an object to start moving, stop moving, or change its motion.',
    sections: [
      {
        title: 'Newton\'s Laws',
        content: `• First Law: Inertia
        • Second Law: F = ma
        • Third Law: Action-Reaction
        • Units: Newtons (N)`
      },
      {
        title: 'Types of Forces',
        content: `• Gravitational Force
        • Electromagnetic Force
        • Strong Nuclear Force
        • Weak Nuclear Force
        • Friction and Normal Force`
      }
    ]
  },

  'Electric Field': {
    title: 'Electric Field',
    description: 'A vector field that represents the electric force per unit charge at each point in space.',
    sections: [
      {
        title: 'Mathematical Definition',
        content: `The electric field is defined as the force per unit charge:

• Vector definition:
  - E = F/q
  - E: Electric field vector (N/C or V/m)
  - F: Force on a test charge (N)
  - q: Test charge (C)

• From point charge:
  - E = kₑq/r² × r̂
  - kₑ: Coulomb constant (8.99 × 10⁹ N·m²/C²)
  - q: Source charge (C)
  - r: Distance from charge (m)
  - r̂: Unit vector pointing from charge

• From continuous charge distribution:
  - E = ∫ρ(r')kₑ(r-r')/|r-r'|³ dV'
  - ρ: Charge density (C/m³)
  - r': Source point
  - r: Field point`
      },
      {
        title: 'Field Properties and Visualization',
        content: `Electric fields have specific properties that help visualize and understand them:

• Field lines:
  - Start at positive charges, end at negative charges
  - Direction indicates force on positive test charge
  - Density proportional to field strength
  - Never cross (except at points of zero field)
  - Perpendicular to equipotential surfaces

• Superposition principle:
  - Eₜₒₜ = E₁ + E₂ + ... + Eₙ
  - Vector addition of fields from all sources
  - Allows analysis of complex charge distributions

• Symmetry considerations:
  - Spherical: E = kq/r² (outside sphere), E = kqr/R³ (inside uniform sphere)
  - Cylindrical: E = λ/(2πε₀r) (infinite line charge)
  - Planar: E = σ/(2ε₀) (infinite sheet of charge)`
      },
      {
        title: 'Relation to Potential and Energy',
        content: `Electric fields relate to potential and energy in important ways:

• Electric potential:
  - E = -∇V
  - V: Electric potential (volts)
  - Field points in direction of decreasing potential
  - Work done by field: W = q∫E·dl = q(V₁-V₂)

• Energy density in electric field:
  - uₑ = ½ε₀E²
  - uₑ: Energy density (J/m³)
  - ε₀: Vacuum permittivity

• Gauss's law connection:
  - ∮ E·dA = Qₑₙ₉/ε₀
  - Relates flux through closed surface to enclosed charge
  - Powerful tool for calculating E in symmetric situations`
      },
      {
        title: 'Applications and Phenomena',
        content: `Electric fields are central to many technologies and natural phenomena:

• Technological applications:
  - Capacitors (energy storage)
  - Particle accelerators (charged particle manipulation)
  - Electrostatic precipitators (pollution control)
  - Cathode ray tubes and electron microscopes
  - Inkjet printers and electrostatic painting
  - Van de Graaff generators
  - Field emission displays

• Natural phenomena:
  - Lightning (electrical breakdown of air)
  - Aurora borealis (charged particles in Earth's field)
  - Cell membrane potentials
  - Electrostatic discharge

• Material interactions:
  - Dielectric polarization
  - Conductors (field zero inside, perpendicular to surface)
  - Semiconductors (band bending at interfaces)
  - Piezoelectric effects`
      }
    ]
  },

  'Coulomb\'s Law': {
    title: 'Coulomb\'s Law',
    description: 'The mathematical formula describing the force between two point electric charges.',
    sections: [
      {
        title: 'Mathematical Formulation',
        content: `Coulomb's Law quantifies the electrostatic force between charged particles:

• Vector form:
  F = k_e \frac{q_1 q_2}{r^2}\hat{r}
  - F: Force vector (newtons)
  - k_e: Coulomb constant (8.99 × 10^9 N·m²/C²)
  - q₁, q₂: Electric charges (coulombs)
  - r: Distance between charges (meters)
  - \hat{r}: Unit vector pointing from q₁ to q₂

• Scalar form (magnitude only):
  F = k_e \frac{|q_1 q_2|}{r^2}

• Alternative form using electric permittivity:
  F = \frac{1}{4π\varepsilon_0} \frac{q_1 q_2}{r^2}
  - ε₀: Vacuum permittivity (8.85 × 10^-12 F/m)`
      },
      {
        title: 'Properties and Applications',
        content: `Key properties of Coulomb's Law:

• Inverse-square relationship with distance
• Force is attractive between opposite charges
• Force is repulsive between like charges
• Obeys superposition principle for multiple charges
• Valid for point charges or spherically symmetric charge distributions

Applications in physics and engineering:

• Atomic and molecular structure calculations
• Electrostatic precipitators
• Powder coating processes
• Photocopiers and laser printers
• Electron microscopes
• Particle accelerators`
      },
      {
        title: 'Limitations and Extensions',
        content: `Limitations of Coulomb's Law:

• Assumes static charges (electrostatics)
• Breaks down at relativistic speeds
• Quantum effects become significant at atomic scales
• Dielectric materials modify the effective force

Extensions and related concepts:

• Electric field: E = F/q = k_e \frac{q}{r^2}\hat{r}
• Electric potential: V = k_e \frac{q}{r}
• Gauss's Law: ∮E·dA = q_enclosed/ε₀
• Relation to Maxwell's equations in electrodynamics`
      }
    ]
  },

  'Gauss\'s Law': {
    title: 'Gauss\'s Law',
    description: 'A fundamental law in electromagnetism that relates electric flux through a closed surface to the enclosed electric charge.',
    sections: [
      {
        title: 'Mathematical Formulation',
        content: `Gauss's Law can be expressed in integral and differential forms:

• Integral form:
  - ∮ₑ E·dA = Qₑₙ₉/ε₀
  - ∮ₑ: Integral over a closed surface (Gaussian surface)
  - E: Electric field vector
  - dA: Differential area element (vector normal to surface)
  - Qₑₙ₉: Total enclosed charge
  - ε₀: Vacuum permittivity (8.85 × 10⁻¹² F/m)

• Differential form:
  - ∇·E = ρ/ε₀
  - ∇·: Divergence operator
  - ρ: Charge density (C/m³)

• In terms of electric displacement field:
  - ∮ₑ D·dA = Qₑₙ₉,ₒₓₑₑ
  - D = ε₀E + P
  - P: Electric polarization`
      },
      {
        title: 'Physical Interpretation',
        content: `Gauss's Law has important physical interpretations:

• Flux concept:
  - Electric flux (Φₑ) measures the flow of electric field through a surface
  - Proportional to number of field lines crossing the surface
  - Positive for field lines exiting the surface, negative for entering

• Source and sink interpretation:
  - Positive charges act as sources of electric field lines
  - Negative charges act as sinks of electric field lines
  - Net flux through closed surface depends only on enclosed charge

• Field visualization:
  - Field lines begin on positive charges and end on negative charges
  - Field strength proportional to line density
  - Field lines never cross (except at points of zero field)`
      },
      {
        title: 'Applications and Calculations',
        content: `Gauss's Law is particularly useful for calculating electric fields in symmetric situations:

• Spherical symmetry:
  - Point charge: E = kq/r² (outside)
  - Spherical shell: E = kq/r² (outside), E = 0 (inside)
  - Solid sphere with uniform charge: E = kqr/R³ (inside), E = kq/r² (outside)

• Cylindrical symmetry:
  - Infinite line charge: E = λ/(2πε₀r)
  - Infinite cylinder: E = λ/(2πε₀r) (outside), E = ρr/(2ε₀) (inside)

• Planar symmetry:
  - Infinite sheet of charge: E = σ/(2ε₀) (perpendicular to sheet)
  - Two parallel sheets: E = σ/ε₀ (between sheets), E = 0 (outside)`
      },
      {
        title: 'Relation to Other Laws',
        content: `Gauss's Law is one of Maxwell's equations and relates to other electromagnetic principles:

• Connection to Coulomb's Law:
  - Gauss's Law can be derived from Coulomb's Law and vice versa
  - Both describe the same electric field, but from different perspectives

• Maxwell's equations context:
  - First of Maxwell's four equations
  - Together with Gauss's law for magnetism, Faraday's law, and Ampère's law
  - Forms complete description of classical electromagnetism

• Poisson's and Laplace's equations:
  - ∇²V = -ρ/ε₀ (Poisson's equation, with charge)
  - ∇²V = 0 (Laplace's equation, charge-free region)
  - Derived from Gauss's law and E = -∇V`
      }
    ]
  },

  'Magnetic Field': {
    title: 'Magnetic Field',
    description: 'A region where magnetic materials experience forces and moving charges are deflected.',
    sections: [
      {
        title: 'Field Properties',
        content: `• B-field lines form closed loops
        • Force on moving charge: F = qvB
        • Biot-Savart Law
        • Ampère's Law`
      },
      {
        title: 'Applications',
        content: `• Electric motors
        • Magnetic resonance imaging
        • Mass spectrometers
        • Electromagnetic induction`
      }
    ]
  },

  'Wave Motion': {
    title: 'Wave Motion',
    description: 'A disturbance that propagates through a medium or space, transferring energy without transferring matter.',
    sections: [
      {
        title: 'Wave Properties',
        content: `• Wavelength (λ)
        • Frequency (f)
        • Speed (v = fλ)
        • Amplitude
        • Phase`
      },
      {
        title: 'Wave Phenomena',
        content: `• Interference
        • Diffraction
        • Reflection
        • Refraction
        • Standing waves`
      }
    ]
  },

  'Quantum Mechanics': {
    title: 'Quantum Mechanics',
    description: 'The theory describing the behavior of matter and energy at the atomic and subatomic scale.',
    sections: [
      {
        title: 'Key Concepts',
        content: `• Wave-particle duality
        • Uncertainty principle
        • Quantum states
        • Schrödinger equation
        • Quantum tunneling`
      },
      {
        title: 'Applications',
        content: `• Atomic structure
        • Quantum computing
        • Laser technology
        • Quantum cryptography
        • Semiconductor devices`
      }
    ]
  },

  'Thermodynamics': {
    title: 'Thermodynamics',
    description: 'The study of heat, work, temperature, and their relation to energy and entropy.',
    sections: [
      {
        title: 'Laws of Thermodynamics',
        content: `• Zeroth Law: Thermal equilibrium
        • First Law: Energy conservation
        • Second Law: Entropy increase
        • Third Law: Absolute zero`
      },
      {
        title: 'Applications',
        content: `• Heat engines
        • Refrigeration
        • Phase transitions
        • Chemical reactions
        • Climate science`
      }
    ]
  },

  'Torque': {
    title: 'Torque',
    description: 'The rotational effect of a force that causes angular acceleration, analogous to force in linear motion.',
    sections: [
      {
        title: 'Definition and Mathematical Expression',
        content: `τ = r × F = |r||F|sin(θ)
        • τ: torque (vector quantity, units: N⋅m)
        • r: position vector from axis of rotation to point of force application
        • F: applied force
        • θ: angle between r and F
        • Direction determined by right-hand rule
        
        Scalar form (magnitude only):
        τ = |r||F|sin(θ) = Fd
        where d = |r|sin(θ) is the perpendicular distance from the line of action of the force to the axis of rotation (lever arm)`
      },
      {
        title: 'Relationship to Angular Motion',
        content: `• Newton's Second Law for rotation: τ = Iα
          - τ: net torque
          - I: moment of inertia
          - α: angular acceleration
        • Work done by torque: W = τθ
          - W: work
          - θ: angular displacement
        • Power: P = τω
          - P: power
          - ω: angular velocity`
      },
      {
        title: 'Equilibrium Conditions',
        content: `For a rigid body in static equilibrium:
        • Sum of all forces = 0
        • Sum of all torques = 0
        
        This principle is used in structural analysis, mechanical design, and biomechanics to determine forces in complex systems.`
      },
      {
        title: 'Applications',
        content: `• Mechanical systems: gears, levers, pulleys
        • Tools: wrenches, screwdrivers, pliers
        • Vehicles: steering, engine operation
        • Human body: joint movements, muscle actions
        • Engineering: structural analysis, machine design
        • Physics: rotational dynamics, gyroscopes`
      }
    ]
  },

  'Moment of Inertia': {
    title: 'Moment of Inertia',
    description: 'A physical quantity that determines an object\'s resistance to rotational acceleration, analogous to mass in linear motion.',
    sections: [
      {
        title: 'Definition and Mathematical Expression',
        content: `I = ∫r²dm
        • I: moment of inertia (kg·m²)
        • r: perpendicular distance from rotation axis (m)
        • dm: differential mass element (kg)
        
        For discrete masses: I = Σmᵢrᵢ²
        
        The moment of inertia depends on:
        • Mass distribution of the object
        • Shape and size of the object
        • Position of the rotation axis`
      },
      {
        title: 'Common Formulas',
        content: `• Point mass: I = mr²
        • Thin rod (about center): I = (1/12)mL²
        • Thin rod (about end): I = (1/3)mL²
        • Solid cylinder (about axis): I = (1/2)mR²
        • Hollow cylinder (about axis): I = mR²
        • Solid sphere (about diameter): I = (2/5)mR²
        • Hollow sphere (about diameter): I = (2/3)mR²
        • Rectangular plate (about center): I = (1/12)m(a² + b²)`
      },
      {
        title: 'Parallel Axis Theorem',
        content: `I = Icm + md²
        • Icm: moment of inertia about center of mass
        • m: total mass of object
        • d: perpendicular distance between parallel axes
        
        This theorem allows calculation of moment of inertia about any axis parallel to an axis through the center of mass.`
      },
      {
        title: 'Applications',
        content: `• Rotational dynamics: τ = Iα (torque = moment of inertia × angular acceleration)
        • Rotational kinetic energy: KE = (1/2)Iω²
        • Angular momentum: L = Iω
        • Gyroscopes and spinning tops
        • Flywheels for energy storage
        • Figure skater's spin (conservation of angular momentum)`
      }
    ]
  },

  'Waves': {
    title: 'Waves',
    description: 'Disturbances that propagate through a medium or space, transferring energy.',
    sections: [
      {
        title: 'Wave Properties',
        content: `• Wavelength (λ)
        • Frequency (f)
        • Amplitude (A)
        • Period (T)
        • Wave speed (v = λf)`
      },
      {
        title: 'Wave Types',
        content: `• Mechanical waves (sound, water waves)
        • Electromagnetic waves (light)
        • Matter waves (de Broglie waves)
        • Standing waves
        • Traveling waves`
      }
    ]
  },

  'Kinematics': {
    title: 'Kinematics',
    description: 'The study of motion without considering the forces causing it.',
    sections: [
      {
        title: 'Basic Equations',
        content: `• v = d/t (average velocity)
        • a = Δv/Δt (acceleration)
        • x = x₀ + v₀t + ½at² (position)
        • v = v₀ + at (velocity)
        • v² = v₀² + 2a(x - x₀)`
      },
      {
        title: 'Key Concepts',
        content: `• Displacement vs. distance
        • Speed vs. velocity
        • Uniform motion
        • Accelerated motion
        • Projectile motion`
      }
    ]
  },

  'Work': {
    title: 'Work',
    description: 'The transfer of energy when a force moves an object over a distance.',
    sections: [
      {
        title: 'Definition and Formula',
        content: `• W = F·d (force parallel to displacement)
        • W = F·d·cosθ (general case)
        • Units: Joules (N·m)
        • Work can be positive, negative, or zero`
      },
      {
        title: 'Applications',
        content: `• Lifting objects
        • Compressing springs
        • Moving against friction
        • Conservative vs. non-conservative forces
        • Work-energy theorem`
      }
    ]
  },

  'Acceleration': {
    title: 'Acceleration',
    description: 'A vector quantity that measures the rate of change of velocity with respect to time. As a vector, acceleration specifies both the magnitude of velocity change and its direction.',
    sections: [
      {
        title: 'Mathematical Definition',
        content: `Acceleration can be expressed in several equivalent forms:

Average acceleration: a = Δv/Δt = (v₂ - v₁)/(t₂ - t₁)

Instantaneous acceleration: a = dv/dt (the derivative of velocity)

Components in coordinate systems:
• Cartesian: a = aₓî + aᵧĵ + aᵣk̂
• Polar/cylindrical: a = aᵣr̂ + aₜθ̂ + aᵣẑ

Units: meters per second squared (m/s²)`
      },
      {
        title: 'Kinematic Equations',
        content: `For motion with constant acceleration:

v = v₀ + at
x = x₀ + v₀t + ½at²
v² = v₀² + 2a(x - x₀)
x = x₀ + ½(v₀ + v)t

Where:
v₀ = initial velocity
v = final velocity
x₀ = initial position
x = final position
t = time interval
a = acceleration (constant)`
      },
      {
        title: 'Types of Acceleration',
        content: `Linear acceleration: Changes the magnitude of velocity in straight-line motion.

Angular acceleration (α): Rate of change of angular velocity (α = dω/dt).

Centripetal acceleration: Directed toward the center of circular motion (aₑ = v²/r).

Tangential acceleration: Changes speed in curvilinear motion (aₜ = dv/dt).

Normal/radial acceleration: Changes direction in curvilinear motion (aₙ = v²/ρ, where ρ is radius of curvature).

Coriolis acceleration: Appears in rotating reference frames.`
      },
      {
        title: 'Physical Significance',
        content: `According to Newton's Second Law, acceleration is directly proportional to the net force acting on an object and inversely proportional to its mass:

a = F/m

This relationship connects kinematics (motion description) with dynamics (causes of motion).

Acceleration due to gravity near Earth's surface is approximately 9.8 m/s² downward, though this varies slightly with latitude and altitude.

In relativity, proper acceleration refers to acceleration measured by an accelerometer, distinguishing it from coordinate acceleration.`
      },
      {
        title: 'Applications',
        content: `Engineering: Vehicle performance, structural analysis, vibration studies

Physics: Particle dynamics, orbital mechanics, wave propagation

Transportation: Braking systems, aircraft takeoff calculations, rocket launches

Sports science: Sprint analysis, jumping mechanics, projectile optimization

Everyday examples: Elevator starts/stops, vehicle acceleration/deceleration, falling objects`
      }
    ]
  },

  'Velocity': {
    title: 'Velocity',
    description: 'The rate of change of position with respect to time, including direction.',
    sections: [
      {
        title: 'Basic Concepts',
        content: `• v = Δx/Δt
        • Vector quantity
        • Units: m/s
        • Includes speed and direction
        • Instantaneous vs. average velocity`
      },
      {
        title: 'Applications',
        content: `• Motion analysis
        • Relative velocity
        • Projectile motion
        • Circular motion
        • Terminal velocity`
      }
    ]
  },

  'Displacement': {
    title: 'Displacement',
    description: 'The change in position of an object, measured from initial to final position.',
    sections: [
      {
        title: 'Properties',
        content: `• Vector quantity
        • Δx = x₂ - x₁
        • Shortest path between two points
        • Independent of actual path taken
        • Units: meters (m)`
      },
      {
        title: 'Differences from Distance',
        content: `• Displacement is a vector
        • Distance is a scalar
        • Displacement ≤ Distance
        • Zero displacement possible with non-zero distance
        • Important in work calculations`
      }
    ]
  },

  'Wave Equation': {
    title: 'Wave Equation',
    description: 'The fundamental partial differential equation that describes wave propagation in various physical systems, from vibrating strings and membranes to electromagnetic and quantum mechanical waves.',
    sections: [
      {
        title: 'Mathematical Form',
        content: `The wave equation in its standard form is a second-order linear partial differential equation:

∇²ψ = (1/v²)(∂²ψ/∂t²)

where:
- ψ(x,t) is the wave function representing the displacement or field amplitude
- ∇² is the Laplacian operator (∂²/∂x² + ∂²/∂y² + ∂²/∂z² in Cartesian coordinates)
- v is the wave propagation speed
- t is time

In one dimension, the equation simplifies to:

∂²ψ/∂x² = (1/v²)(∂²ψ/∂t²)

This equation appears in many areas of physics with different interpretations of ψ and v:

- Mechanical waves: ψ represents displacement, v is determined by medium properties
- Electromagnetic waves: ψ represents field components, v is the speed of light
- Quantum mechanics: ψ represents the wave function, v depends on particle properties`
      },
      {
        title: 'Derivation and Physical Meaning',
        content: `The wave equation can be derived from physical principles in various contexts:

1. Vibrating string:
   Starting with Newton's second law applied to a small segment of string and assuming small displacements:
   - Tension force: T(∂²y/∂x²)dx
   - Mass of segment: ρdx
   - Acceleration: ∂²y/∂t²
   - Applying F = ma: T(∂²y/∂x²)dx = ρdx(∂²y/∂t²)
   - Rearranging: ∂²y/∂x² = (ρ/T)(∂²y/∂t²)
   - Wave speed: v = √(T/ρ)

2. Electromagnetic waves:
   Maxwell's equations in vacuum can be combined to yield wave equations for the electric and magnetic fields with v = c (speed of light).

3. Acoustic waves:
   Starting from fluid dynamics equations and linearizing for small perturbations leads to a wave equation for pressure variations with v = √(B/ρ), where B is the bulk modulus.

The wave equation expresses a balance between spatial curvature (∇²ψ) and temporal acceleration (∂²ψ/∂t²), with the wave speed v determining how quickly disturbances propagate through the medium.`
      },
      {
        title: 'Solutions and Wave Properties',
        content: `The general solution to the one-dimensional wave equation can be written as:

ψ(x,t) = f(x - vt) + g(x + vt)

where f and g are arbitrary functions representing waves traveling in the positive and negative x-directions, respectively.

For harmonic waves, specific solutions include:

1. Traveling waves: ψ(x,t) = A sin(kx - ωt + φ)
   where:
   - A is the amplitude
   - k = 2π/λ is the wave number
   - ω = 2πf is the angular frequency
   - φ is the phase constant
   - The wave speed v = ω/k = λf

2. Standing waves: ψ(x,t) = [A sin(kx)][B cos(ωt)]
   These arise from the superposition of traveling waves moving in opposite directions.

Key properties of wave solutions:

1. Superposition: Solutions can be added to form new solutions (linearity)

2. Dispersion relation: The relationship between ω and k
   - For the standard wave equation: ω = vk (linear dispersion)
   - In dispersive media: v depends on frequency, causing wave packets to spread

3. Wave impedance: The ratio of field variables that characterizes the medium's response

4. Energy transport: Waves carry energy at the group velocity dω/dk`
      },
      {
        title: 'Boundary Conditions and Initial Conditions',
        content: `To determine a unique solution to the wave equation, boundary conditions and initial conditions must be specified:

1. Initial conditions (at t = 0):
   - Initial displacement: ψ(x,0) = f(x)
   - Initial velocity: ∂ψ/∂t(x,0) = g(x)

2. Common boundary conditions:
   - Fixed ends (Dirichlet): ψ = 0 at boundaries
   - Free ends (Neumann): ∂ψ/∂n = 0 at boundaries
   - Periodic: ψ(x) = ψ(x + L) for systems with periodicity L
   - Radiation/Sommerfeld: Ensures waves propagate outward at infinity

Boundary conditions lead to important phenomena:

1. Standing waves in bounded systems:
   - Vibrating string with fixed ends: ψ(x,t) = Σ Aₙ sin(nπx/L)cos(nπvt/L + φₙ)
   - Resonant frequencies: fₙ = (nv)/(2L)

2. Reflection and transmission at interfaces:
   - When waves encounter boundaries between different media
   - Reflection coefficient R and transmission coefficient T depend on impedance mismatch

3. Diffraction:
   - Wave bending around obstacles or through apertures
   - Described by Huygens-Fresnel principle`
      },
      {
        title: 'Extensions and Applications',
        content: `The wave equation has numerous extensions and applications across physics:

1. Damped wave equation:
   ∇²ψ = (1/v²)(∂²ψ/∂t²) + (2β/v²)(∂ψ/∂t)
   - Includes energy dissipation with damping coefficient β
   - Solutions decay exponentially with time

2. Inhomogeneous wave equation:
   ∇²ψ - (1/v²)(∂²ψ/∂t²) = S(x,t)
   - Source term S(x,t) represents external excitation
   - Solutions involve Green's functions

3. Applications in physics:
   - Mechanical waves: Vibrations in strings, membranes, solids
   - Acoustics: Sound propagation in fluids and solids
   - Electromagnetics: Light, radio waves, microwave propagation
   - Seismology: Earthquake waves (P-waves, S-waves)
   - Quantum mechanics: Schrödinger equation (time-dependent form)

4. Numerical methods:
   - Finite difference methods
   - Finite element analysis
   - Spectral methods
   - Time-domain techniques like FDTD (Finite-Difference Time-Domain)

The wave equation serves as the starting point for understanding wave phenomena across scales, from quantum particles to cosmic structures, making it one of the most important equations in physics.`
      }
    ]
  },

  'Wavelength': {
    title: 'Wavelength',
    description: 'The distance between two consecutive peaks or troughs in a wave.',
    sections: [
      {
        title: 'Key Concepts',
        content: `• Symbol: λ (lambda)
        • Formula: λ = v/f
        • Units: meters (m)
        • Inversely proportional to frequency
        • Determines wave properties like diffraction`
      },
      {
        title: 'Applications',
        content: `• Light spectrum analysis
        • Sound wave characteristics
        • Radio wave transmission
        • X-ray and gamma ray studies
        • De Broglie wavelength in quantum mechanics`
      }
    ]
  },

  'Frequency': {
    title: 'Frequency',
    description: 'The number of occurrences of a repeating event per unit time.',
    sections: [
      {
        title: 'Basic Properties',
        content: `• Symbol: f
        • Formula: f = 1/T (T is period)
        • Units: Hertz (Hz)
        • Related to angular frequency: ω = 2πf
        • Determines wave energy: E = hf`
      },
      {
        title: 'Common Applications',
        content: `• Sound pitch
        • Radio and TV broadcasting
        • AC electrical systems
        • Electromagnetic spectrum
        • Resonance phenomena`
      }
    ]
  },

  'Wave Speed': {
    title: 'Wave Speed',
    description: 'The rate at which a wave propagates through a medium.',
    sections: [
      {
        title: 'Fundamental Relations',
        content: `• Formula: v = λf
        • Units: meters per second (m/s)
        • Depends on medium properties
        • Independent of frequency for non-dispersive media
        • Examples: c (speed of light), v_sound`
      },
      {
        title: 'Medium Effects',
        content: `• Air: v ≈ 343 m/s (sound)
        • Water: v ≈ 1500 m/s (sound)
        • Vacuum: c = 3×10⁸ m/s (light)
        • String tension effects
        • Temperature dependence`
      }
    ]
  },

  'Superposition Principle': {
    title: 'Superposition Principle',
    description: 'A key concept in wave physics stating that when multiple waves overlap in space, the resulting wave is the sum of the individual wave displacements at each point.',
    sections: [
      {
        title: 'Mathematical Formulation',
        content: `The superposition principle is expressed mathematically as:

ψₜₒₜₐₗ(ₓ, ₜ) = ψ₁(ₓ, ₜ) + ψ₂(ₓ, ₜ) + ... + ψₙ(ₓ, ₜ)

where:
- ψₜₒₜₐₗ is the total wave displacement
- ψ₁, ψ₂, ..., ψₙ are the individual wave displacements
- x represents position
- t represents time

This principle applies to any linear wave system where the governing equations (such as the wave equation) are linear. The principle states that if ψ₁, ψ₂, etc. are solutions to the wave equation, then their sum is also a solution.

The superposition principle is a direct consequence of the linearity of the wave equation:

∇²ψ = (1/v²)(∂²ψ/∂t²)

If we substitute ψ = ψ₁ + ψ₂, the equation remains satisfied because the differential operators are linear.`
      },
      {
        title: 'Constructive and Destructive Interference',
        content: `When waves superpose, they can interfere constructively or destructively:

1. Constructive interference occurs when waves combine to create a larger amplitude. This happens when the peaks of the waves align. For two waves of equal amplitude A:
   - Maximum constructive interference: When waves are in phase (phase difference = 0, 2π, 4π, etc.)
   - Result: Amplitude = 2A

2. Destructive interference occurs when waves combine to create a smaller amplitude. This happens when the peak of one wave aligns with the trough of another. For two waves of equal amplitude A:
   - Maximum destructive interference: When waves are out of phase (phase difference = π, 3π, etc.)
   - Result: Amplitude = 0

3. Partial interference: When the phase difference is between 0 and π, partial constructive or destructive interference occurs.

For two harmonic waves with the same frequency but different amplitudes and phases:

A₁sin(ωt + φ₁) + A₂sin(ωt + φ₂) = A₃sin(ωt + φ₃)

where:
- A₃ = √(A₁² + A₂² + 2A₁A₂cos(φ₁ - φ₂))
- φ₃ = tan⁻¹((A₁sinφ₁ + A₂sinφ₂)/(A₁cosφ₁ + A₂cosφ₂))`
      },
      {
        title: 'Applications and Examples',
        content: `The superposition principle has numerous applications in wave physics:

1. Sound waves:
   - Musical beats: When two sound waves with slightly different frequencies interfere
   - Noise cancellation: Destructive interference used to eliminate unwanted sound
   - Room acoustics: Standing waves and resonance in enclosed spaces

2. Light waves:
   - Interference patterns in thin films (soap bubbles, oil slicks)
   - Diffraction gratings and spectroscopy
   - Interferometers for precise measurements
   - Holograms: Recording and reconstruction of wave fronts

3. Water waves:
   - Wave patterns in harbors and coastal structures
   - Tsunami propagation and interaction

4. Quantum mechanics:
   - Wave function superposition
   - Quantum interference effects
   - Double-slit experiment

Example: Two-Source Interference

When two coherent sources emit waves, an interference pattern forms. For two point sources separated by distance d, the condition for constructive interference at a point is:

Δr = d sin θ = nλ

where:
- Δr is the path difference
- θ is the angle from the midpoint between sources
- n is an integer (0, 1, 2, ...)
- λ is the wavelength

Destructive interference occurs when:

Δr = d sin θ = (n + 1/2)λ`
      },
      {
        title: 'Standing Waves',
        content: `Standing waves are a direct application of the superposition principle. They form when two waves of equal amplitude and frequency travel in opposite directions.

For two waves traveling in opposite directions:

ψ₁(x,t) = A sin(kx - ωt)
ψ₂(x,t) = A sin(kx + ωt)

The superposition gives:

ψₜₒₜₐₗ(x,t) = ψ₁ + ψ₂ = 2A sin(kx) cos(ωt)

Key features of standing waves:

1. Nodes: Points where the displacement is always zero
   - Located at x = nλ/2, where n is an integer

2. Antinodes: Points where the displacement reaches maximum amplitude
   - Located at x = (2n+1)λ/4, where n is an integer

3. No energy propagation: Energy remains localized, oscillating between kinetic and potential forms

Standing waves are important in:
- Musical instruments (strings, air columns)
- Resonant cavities and waveguides
- Vibrating membranes and plates
- Quantum mechanical bound states`
      },
      {
        title: 'Limitations and Extensions',
        content: `The superposition principle has certain limitations and extensions:

1. Limitations:
   - Applies only to linear wave systems
   - Does not apply to nonlinear waves (e.g., large amplitude water waves, shock waves)
   - Energy is not generally additive (intensity ≠ sum of individual intensities)

2. Coherence requirements:
   - For persistent interference patterns, waves must maintain a constant phase relationship
   - Temporal coherence: Stable frequency over time
   - Spatial coherence: Consistent phase across wavefront

3. Extensions to other fields:
   - Linear systems theory: Superposition applies to any linear system
   - Quantum superposition: Quantum states can exist in multiple states simultaneously
   - Electromagnetic theory: Superposition of electric and magnetic fields

4. Wave packets and group velocity:
   - Superposition of waves with different frequencies creates localized wave packets
   - Group velocity (vₕ = dω/dk) describes the packet's propagation speed
   - Dispersion causes wave packets to spread over time

Understanding the superposition principle is essential for analyzing wave behavior in complex systems and forms the basis for wave optics, acoustics, quantum mechanics, and many other fields of physics.`
      }
    ]
  },

  'Standing Wave': {
    title: 'Standing Wave',
    description: 'A wave pattern that appears stationary, resulting from the interference of two waves of equal frequency and amplitude traveling in opposite directions.',
    sections: [
      {
        title: 'Characteristics',
        content: `• Stationary wave pattern
• Nodes: points of zero amplitude
• Antinodes: points of maximum amplitude
• Harmonics: n = 1,2,3,...
• Fixed boundary conditions`
      },
      {
        title: 'Applications',
        content: `• Musical instruments
        • Resonant cavities
        • Microwave ovens
        • Laser cavities
        • Quantum well states`
      }
    ]
  },

  'Entropy': {
    title: 'Entropy',
    description: 'A measure of the disorder or randomness in a system.',
    sections: [
      {
        title: 'Thermodynamic Relations',
        content: `• ΔS = Q/T (reversible process)
        • Second Law: ΔS_universe ≥ 0
        • Statistical interpretation: S = k_B ln(W)
        • Units: J/K
        • State function property`
      },
      {
        title: 'Applications',
        content: `• Heat engines
        • Phase transitions
        • Chemical reactions
        • Information theory
        • Black hole physics`
      }
    ]
  },

  'Heat Capacity': {
    title: 'Heat Capacity',
    description: 'The amount of heat required to raise temperature by one degree.',
    sections: [
      {
        title: 'Definitions and Formulas',
        content: `• C = Q/ΔT
        • Specific heat capacity: c = C/m
        • Molar heat capacity: C_m
        • Units: J/K or J/(kg·K)
        • Constant pressure vs. constant volume`
      },
      {
        title: 'Material Properties',
        content: `• Water: 4186 J/(kg·K)
        • Aluminum: 900 J/(kg·K)
        • Temperature dependence
        • Phase transitions
        • Quantum effects at low T`
      }
    ]
  },

  'Thermal Conductivity': {
    title: 'Thermal Conductivity',
    description: 'The ability of a material to conduct heat.',
    sections: [
      {
        title: 'Key Concepts',
        content: `• Formula: Q = -kA(dT/dx)
        • k: thermal conductivity constant
        • Units: W/(m·K)
        • Temperature gradient dependent
        • Area and thickness dependent`
      },
      {
        title: 'Applications',
        content: `• Heat sinks
        • Building insulation
        • Cookware design
        • Industrial processes
        • Thermal management systems`
      }
    ]
  },

  'Power': {
    title: 'Power',
    description: 'The rate of doing work or transferring energy.',
    sections: [
      {
        title: 'Basic Concepts',
        content: `• P = W/t (work per time)
        • P = Fv (force × velocity)
        • Units: Watts (W)
        • Instantaneous vs. average power
        • Relationship to energy transfer`
      },
      {
        title: 'Applications',
        content: `• Electrical systems
        • Mechanical devices
        • Engine performance
        • Solar panels
        • Power transmission`
      }
    ]
  },

  'Kinetic Energy': {
    title: 'Kinetic Energy',
    description: 'The energy possessed by an object due to its motion.',
    sections: [
      {
        title: 'Formula and Properties',
        content: `• KE = ½mv²
        • Scalar quantity
        • Always positive
        • Quadratic with velocity
        • Frame-dependent`
      },
      {
        title: 'Applications',
        content: `• Vehicle impacts
        • Sports mechanics
        • Particle collisions
        • Wind energy
        • Ballistic motion`
      }
    ]
  },

  'Ohm\'s Law': {
    title: 'Ohm\'s Law',
    description: 'The fundamental relationship between voltage, current, and resistance in electrical circuits.',
    sections: [
      {
        title: 'Mathematical Formulation',
        content: `Ohm's Law describes the linear relationship between voltage and current:

• Basic formulations:
  - V = IR (voltage form)
  - I = V/R (current form)
  - R = V/I (resistance form)
  - Where:
    * V: Voltage or potential difference (volts, V)
    * I: Current (amperes, A)
    * R: Resistance (ohms, Ω)

• Microscopic form (material property):
  - J = σE
  - Where:
    * J: Current density (A/m²)
    * σ: Electrical conductivity (S/m)
    * E: Electric field strength (V/m)
    * Resistivity ρ = 1/σ (Ω·m)

• Resistance calculations:
  - For uniform conductors: R = ρL/A
    * L: Length of conductor
    * A: Cross-sectional area
  - Temperature dependence: R = R₀[1 + α(T - T₀)]
    * α: Temperature coefficient of resistance
    * T₀: Reference temperature`
      },
      {
        title: 'Circuit Analysis',
        content: `Ohm's Law is fundamental to analyzing electrical circuits:

• Series circuits:
  - Total resistance: Rₜₒₜ = R₁ + R₂ + ... + Rₙ
  - Same current through each component
  - Voltage divides: Vₙ = I×Rₙ

• Parallel circuits:
  - Total conductance: 1/Rₜₒₜ = 1/R₁ + 1/R₂ + ... + 1/Rₙ
  - Same voltage across each component
  - Current divides: Iₙ = V/Rₙ

• Power relationships:
  - P = VI = I²R = V²/R
  - Where P is power in watts (W)

• Kirchhoff's laws extension:
  - Voltage law (KVL): Sum of voltages around any closed loop is zero
  - Current law (KCL): Sum of currents at any node is zero`
      },
      {
        title: 'Limitations and Non-Ohmic Behavior',
        content: `Ohm's Law has specific conditions and limitations:

• Ohmic vs. non-ohmic materials:
  - Ohmic: Linear I-V relationship (most metals)
  - Non-ohmic: Non-linear I-V relationship
    * Semiconductors (diodes, transistors)
    * Vacuum tubes
    * Gas discharge devices
    * Superconductors

• Factors affecting resistance:
  - Temperature (generally increases for metals, decreases for semiconductors)
  - Mechanical strain
  - Frequency (skin effect at high frequencies)
  - Magnetic field (magnetoresistance)
  - Light (photoresistance)

• Breakdown conditions:
  - Excessive current causing thermal breakdown
  - Voltage exceeding dielectric strength
  - Electromigration in integrated circuits`
      },
      {
        title: 'Applications and Significance',
        content: `Ohm's Law has numerous practical applications:

• Electronic design:
  - Component selection and sizing
  - Voltage dividers and current dividers
  - Biasing of active components
  - Load matching for maximum power transfer

• Power systems:
  - Transmission line design
  - Power distribution calculations
  - Fault current analysis
  - Protection system design

• Measurement and instrumentation:
  - Ammeter and voltmeter design
  - Wheatstone bridge for precise resistance measurement
  - Shunts and multipliers for range extension
  - Four-point probe for sheet resistance

• Safety applications:
  - Circuit breaker and fuse sizing
  - Grounding system design
  - Electrical safety standards
  - Touch voltage and step voltage calculations`
      }
    ]
  },

  'Capacitance': {
    title: 'Capacitance',
    description: 'The ability of a system to store electric charge in the form of separated electric charge.',
    sections: [
      {
        title: 'Mathematical Formulation',
        content: `Capacitance is defined by the ratio of charge to potential difference:

• Basic definition:
  - C = Q/V
  - C: Capacitance (farads, F)
  - Q: Electric charge (coulombs, C)
  - V: Potential difference (volts, V)

• Capacitor geometries:
  - Parallel plate: C = ε₀εᵣA/d
    * ε₀: Vacuum permittivity (8.85 × 10⁻¹² F/m)
    * εᵣ: Relative permittivity of dielectric
    * A: Plate area
    * d: Plate separation
  - Cylindrical: C = 2πε₀εᵣL/ln(b/a)
    * L: Length of cylinder
    * a: Inner radius
    * b: Outer radius
  - Spherical: C = 4πε₀εᵣab/(b-a)
    * a: Inner radius
    * b: Outer radius`
      },
      {
        title: 'Energy and Circuit Properties',
        content: `Capacitors store energy in electric fields and affect circuit behavior:

• Energy storage:
  - Energy stored: U = ½CV² = ½QV = Q²/2C
  - Energy density: u = ½ε₀εᵣE²
    * E: Electric field strength

• Circuit behavior:
  - Charging: Q(t) = CV(1-e^(-t/RC))
  - Discharging: Q(t) = Q₀e^(-t/RC)
  - Time constant: τ = RC
    * R: Resistance in series with capacitor

• Impedance in AC circuits:
  - Z = 1/jωC
  - ω: Angular frequency
  - Phase shift: Current leads voltage by 90°

• Capacitors in combination:
  - Series: 1/C_eq = 1/C₁ + 1/C₂ + ... + 1/Cₙ
  - Parallel: C_eq = C₁ + C₂ + ... + Cₙ`
      },
      {
        title: 'Types and Characteristics',
        content: `Capacitors vary in construction and properties:

• Dielectric types:
  - Air: Simple, low capacitance
  - Ceramic: High capacitance, compact
  - Electrolytic: Very high capacitance, polarized
  - Film: Stable, good for AC applications
  - Mica: Precise, stable with temperature
  - Glass: High voltage applications

• Key parameters:
  - Capacitance value (F)
  - Voltage rating (maximum voltage before breakdown)
  - Tolerance (accuracy of stated capacitance)
  - Temperature coefficient (change with temperature)
  - Leakage current (small current flowing through dielectric)
  - Equivalent series resistance (ESR)
  - Dielectric absorption (ability to recover charge after discharge)`
      },
      {
        title: 'Applications',
        content: `Capacitors serve numerous functions in electrical systems:

• Power and energy:
  - Energy storage in power supplies
  - Power factor correction
  - Supercapacitors for energy storage
  - Pulse power applications

• Signal processing:
  - Coupling and decoupling (blocking DC while passing AC)
  - Filtering (low-pass, high-pass, band-pass filters)
  - Smoothing power supply output
  - Noise suppression

• Timing and control:
  - RC timing circuits
  - Oscillators
  - Phase shifting networks
  - Motor starting capacitors

• Memory and sensing:
  - Dynamic RAM (DRAM) memory cells
  - Capacitive touch sensors
  - Capacitive microphones
  - Capacitive position sensors`
      }
    ]
  },

  'Magnetic Flux': {
    title: 'Magnetic Flux',
    description: 'The measure of magnetic field passing through a surface.',
    sections: [
      {
        title: 'Key Concepts',
        content: `• Φ = BA cos(θ)
        • B: magnetic field strength
        • A: area of surface
        • θ: angle between B and surface normal
        • Units: Weber (Wb)`
      },
      {
        title: 'Applications',
        content: `• Electromagnetic induction
        • Transformers
        • Electric generators
        • Magnetic circuits
        • Inductors`
      }
    ]
  },

  'Faraday\'s Law': {
   title: 'Faraday\'s Law',
   description: 'A fundamental law of electromagnetism stating that the induced electromotive force in a closed circuit equals the negative rate of change of magnetic flux through the circuit.',
   sections: [
     {
       title: 'Mathematical Form',
       content: `• ε = -dΦ/dt
• ε: induced electromotive force (EMF)
• Φ: magnetic flux (Φ = ∫B·dA)
• B: magnetic field
• A: area vector
• Negative sign represents Lenz's Law
• Units: Volts (V)`
     },
     {
       title: 'Physical Interpretation',
       content: `• Changing magnetic flux induces an electric field
• Flux can change through:
 - Changing magnetic field strength
 - Changing area of the circuit
 - Changing orientation between field and circuit
• Lenz's Law: induced current opposes the change that produced it
• Quantifies the electromagnetic induction phenomenon`
     },
     {
       title: 'Applications',
       content: `• Electric generators: convert mechanical energy to electrical energy
• Transformers: transfer electrical energy between circuits
• Induction motors: convert electrical energy to mechanical energy
• Electromagnetic braking: slow vehicles without friction
• Metal detectors: detect conductive materials
• Induction cooktops: heat cookware directly`
     }
   ]
 },


  'Magnetic Force': {
    title: 'Magnetic Force',
    description: 'The force exerted on a moving charged particle in a magnetic field.',
    sections: [
      {
        title: 'Force Equation',
        content: `• F = qvB sin(θ)
        • q: charge
        • v: velocity
        • B: magnetic field
        • θ: angle between v and B`
      },
      {
        title: 'Applications',
        content: `• Mass spectrometers
        • Particle accelerators
        • Electric motors
        • Hall effect devices
        • Magnetic confinement`
      }
    ]
  },

  'Bohr Energy Levels': {
    title: 'Bohr Energy Levels',
    description: 'The discrete energy states of an electron in an atom.',
    sections: [
      {
        title: 'Energy Formula',
        content: `• En = -13.6eV/n²
        • n: principal quantum number
        • Ground state: n = 1
        • Excited states: n > 1
        • Ionization: E > 0`
      },
      {
        title: 'Applications',
        content: `• Atomic spectra
        • Laser operation
        • Chemical bonding
        • Quantum transitions
        • Spectroscopy`
      }
    ]
  },

  'Photoelectric Effect': {
    title: 'Photoelectric Effect',
    description: 'The emission of electrons when light hits a material.',
    sections: [
      {
        title: 'Einstein\'s Equation',
        content: `• KE = hf - φ
        • h: Planck's constant
        • f: frequency
        • φ: work function
        • Threshold frequency: f₀ = φ/h`
      },
      {
        title: 'Applications',
        content: `• Solar cells
        • Photomultipliers
        • Light sensors
        • Night vision
        • Photoelectric cells`
      }
    ]
  },

  'Radioactive Decay': {
    title: 'Radioactive Decay',
    description: 'The spontaneous breakdown of an atomic nucleus.',
    sections: [
      {
        title: 'Decay Law',
        content: `• N(t) = N₀e^(-λt)
        • N₀: initial number
        • λ: decay constant
        • Half-life: t₁/₂ = ln(2)/λ
        • Activity: A = λN`
      },
      {
        title: 'Applications',
        content: `• Carbon dating
        • Nuclear medicine
        • Radiation therapy
        • Archaeological dating
        • Nuclear power`
      }
    ]
  },

  'Nuclear Binding Energy': {
    title: 'Nuclear Binding Energy',
    description: 'The energy required to break a nucleus into its constituent nucleons.',
    sections: [
      {
        title: 'Mass-Energy Relation',
        content: `• ΔE = Δmc²
        • Mass defect
        • Binding energy per nucleon
        • Nuclear stability
        • Fusion/fission energy`
      },
      {
        title: 'Applications',
        content: `• Nuclear power
        • Nuclear weapons
        • Stellar nucleosynthesis
        • Mass spectroscopy
        • Nuclear medicine`
      }
    ]
  },

  'Transistor Gain': {
    title: 'Transistor Gain',
    description: 'The ratio of output current to input current in a transistor.',
    sections: [
      {
        title: 'Basic Parameters',
        content: `• β = Ic/Ib
        • Current gain
        • Amplification factor
        • DC vs. AC gain
        • Temperature dependence`
      },
      {
        title: 'Applications',
        content: `• Amplifiers
        • Digital logic
        • Current sources
        • Switching circuits
        • Signal processing`
      }
    ]
  },

  'RC Time Constant': {
    title: 'RC Time Constant',
    description: 'The time taken for a capacitor to charge through a resistor.',
    sections: [
      {
        title: 'Basic Relations',
        content: `• τ = RC
        • Charging: V = V₀(1 - e^(-t/RC))
        • Discharging: V = V₀e^(-t/RC)
        • 63.2% charge at t = τ
        • 5τ for full charge/discharge`
      },
      {
        title: 'Applications',
        content: `• Timing circuits
        • Filters
        • Pulse shaping
        • Delay circuits
        • Integration circuits`
      }
    ]
  },

  'Resonant Frequency': {
    title: 'Resonant Frequency',
    description: 'The natural frequency at which a circuit oscillates.',
    sections: [
      {
        title: 'Formula and Properties',
        content: `• f = 1/(2π√LC)
        • Maximum amplitude
        • Phase relationships
        • Bandwidth
        • Quality factor Q`
      },
      {
        title: 'Applications',
        content: `• Radio tuning
        • Filter design
        • Oscillators
        • Impedance matching
        • Wireless communication`
      }
    ]
  },

  'Lagrangian Mechanics': {
    title: 'Lagrangian Mechanics',
    description: 'A reformulation of classical mechanics that describes system dynamics using energy quantities rather than forces and vectors, simplifying the analysis of complex mechanical systems.',
    sections: [
      {
        title: 'Core Concepts',
        content: `The Lagrangian (L) is defined as the difference between kinetic energy (T) and potential energy (V):

L = T - V

For a system with n degrees of freedom described by generalized coordinates qᵢ, the equations of motion are given by the Euler-Lagrange equations:

d/dt(∂L/∂q̇ᵢ) - ∂L/∂qᵢ = 0

These equations provide the same results as Newton's laws but are often easier to apply in complex systems.`
      },
      {
        title: 'Advantages',
        content: `Coordinate system independence: Works with any generalized coordinates suitable for the problem.

Constraint handling: Automatically incorporates constraints when appropriate coordinates are chosen.

Conservation laws: Direct connection to symmetries through Noether's theorem.

Analytical mechanics: Provides a pathway to Hamiltonian mechanics and quantum mechanics.`
      },
      {
        title: 'Mathematical Structure',
        content: `Action principle: The system follows a path that minimizes the action integral:

S = ∫L dt

Stationary action principle (Hamilton's principle): δS = 0

For conservative systems, the Lagrangian is time-independent, leading to energy conservation.

For systems with symmetries, the corresponding generalized momenta are conserved:

pᵢ = ∂L/∂q̇ᵢ`
      },
      {
        title: 'Applications',
        content: `Classical mechanics: Multi-body systems, oscillations, rigid body dynamics

Field theory: Continuous systems, elasticity, fluid mechanics

Modern physics: Foundation for quantum field theory, relativity

Engineering: Robotics, spacecraft dynamics, control theory

The Lagrangian approach is particularly useful for systems with:
- Multiple degrees of freedom
- Complex constraints
- Symmetries`
      }
    ]
  },

  'Hamiltonian Mechanics': {
    title: 'Hamiltonian Mechanics',
    description: 'A mathematical formulation of classical mechanics that uses the total energy of a system to derive equations of motion, providing a powerful framework for analyzing complex systems.',
    sections: [
      {
        title: 'Core Concepts',
        content: `The Hamiltonian (H) represents the total energy of a system, expressed as the sum of kinetic (T) and potential (V) energies:

H = T + V

For a system with n degrees of freedom, the equations of motion are given by Hamilton's equations:

dq/dt = ∂H/∂p
dp/dt = -∂H/∂q

Where:
- q represents generalized coordinates
- p represents generalized momenta (p = ∂L/∂q̇)
- t is time`
      },
      {
        title: 'Relation to Lagrangian Mechanics',
        content: `The Hamiltonian is obtained from the Lagrangian through a Legendre transformation:

H(q,p,t) = Σ(pᵢq̇ᵢ) - L(q,q̇,t)

Where:
- L is the Lagrangian (L = T - V)
- q̇ is the time derivative of q
- pᵢ = ∂L/∂q̇ᵢ are the conjugate momenta

This transformation shifts focus from positions and velocities (q,q̇) to positions and momenta (q,p).`
      },
      {
        title: 'Phase Space',
        content: `Hamiltonian mechanics introduces the concept of phase space, a 2n-dimensional space where:
- n dimensions represent position coordinates (q)
- n dimensions represent momentum coordinates (p)

The system's state is represented by a point in phase space, and its evolution follows a trajectory determined by Hamilton's equations.

Key properties of phase space:
- Trajectories never cross (deterministic)
- Volume in phase space is conserved (Liouville's theorem)
- For conservative systems, trajectories lie on constant-energy surfaces`
      },
      {
        title: 'Applications and Extensions',
        content: `Classical mechanics: Provides analytical solutions for complex systems

Statistical mechanics: Foundation for phase space distributions and ensemble theory

Quantum mechanics: Forms the basis for quantum operators and the Schrödinger equation

Chaos theory: Analysis of nonlinear dynamical systems

Modern extensions include:
- Symplectic geometry
- Canonical transformations
- Hamilton-Jacobi theory
- Perturbation methods`
      }
    ]
  },

  'Principle of Least Action': {
    title: 'Principle of Least Action',
    description: 'A variational principle that states the path taken by a physical system between two points is the one that minimizes (or more generally, makes stationary) the action functional.',
    sections: [
      {
        title: 'Mathematical Formulation',
        content: `The action (S) is defined as the time integral of the Lagrangian (L) over the path of the system:

S = ∫L dt

Where:
- L is the Lagrangian, typically L = T - V
- T is kinetic energy
- V is potential energy
- The integral is taken from time t₁ to t₂

The principle states that the actual path followed by the system makes the action stationary:

δS = δ∫L dt = 0

This means that for small variations around the actual path, the change in action is zero to first order.`
      },
      {
        title: 'Physical Significance',
        content: `The principle of least action provides a unified approach to physics by:

1. Yielding the equations of motion for any physical system when the Lagrangian is specified
2. Connecting classical mechanics to quantum mechanics through the path integral formulation
3. Revealing conservation laws through symmetries (Noether's theorem)

Unlike Newton's laws which focus on forces at each instant, the principle of least action considers the entire trajectory at once, providing a global perspective on system dynamics.`
      },
      {
        title: 'Historical Development',
        content: `The concept evolved through several stages:

1. Fermat's principle of least time in optics (1600s)
2. Maupertuis' principle of least action (1740s)
3. Euler and Lagrange's development of the calculus of variations (1750s)
4. Hamilton's reformulation as a stationary principle (1830s)
5. Modern extensions to quantum field theory and general relativity

This evolution represents a shift from local to global descriptions of physical systems.`
      },
      {
        title: 'Applications',
        content: `The principle of least action is applied across physics:

Classical mechanics: Deriving equations of motion for complex systems
Field theory: Formulating electromagnetic and gravitational field equations
Quantum mechanics: Foundation for Feynman's path integral formulation
Optics: Explaining the behavior of light (Fermat's principle)
Relativity: Describing geodesics in curved spacetime

This principle demonstrates the mathematical unity underlying diverse physical phenomena.`
      }
    ]
  },

  'Chaos in Dynamical Systems': {
    title: 'Chaos in Dynamical Systems',
    description: 'The study of deterministic systems that exhibit aperiodic behavior with extreme sensitivity to initial conditions, making long-term prediction impossible despite the absence of random elements.',
    sections: [
      {
        title: 'Characteristics of Chaotic Systems',
        content: `Chaotic systems have several defining characteristics:

1. Deterministic nature: The system follows precise mathematical rules with no random elements.

2. Sensitivity to initial conditions: Often called the "butterfly effect," tiny differences in starting conditions lead to vastly different outcomes. Two nearly identical initial states will diverge exponentially over time.

3. Bounded dynamics: Despite unpredictable behavior, the system's variables remain within certain bounds and don't approach infinity.

4. Aperiodic long-term behavior: The system never settles into a regular, repeating pattern.

5. Topological mixing: The system evolves over time so that any given region of its phase space will eventually overlap with any other region.

Common examples of chaotic systems include the double pendulum, weather patterns, turbulent fluid flow, and certain biological populations.`
      },
      {
        title: 'Phase Space',
        content: `Phase space is a mathematical space where all possible states of a dynamical system are represented. Each point in phase space corresponds to a possible state of the system.

For a mechanical system with n degrees of freedom, the phase space is 2n-dimensional, with coordinates representing:
- n position variables (q₁, q₂, ..., qₙ)
- n momentum variables (p₁, p₂, ..., pₙ)

Key concepts in phase space analysis:

1. Trajectories: As the system evolves in time, it traces a path through phase space called a trajectory.

2. Attractors: Regions of phase space that trajectories tend to approach. Types include:
   - Fixed point attractors (stable equilibrium points)
   - Limit cycles (periodic orbits)
   - Strange attractors (complex, fractal structures characteristic of chaos)

3. Basins of attraction: Sets of initial conditions that lead to a particular attractor.

4. Poincaré sections: Two-dimensional slices of phase space that help visualize the structure of higher-dimensional dynamics.

In chaotic systems, trajectories in phase space exhibit complex patterns. While remaining within bounded regions (attractors), they never repeat exactly, creating intricate, often fractal structures.`
      },
      {
        title: 'Lyapunov Exponents',
        content: `Lyapunov exponents quantify the rate at which nearby trajectories in phase space diverge, providing a mathematical measure of chaos.

For a dynamical system, if we consider two initial conditions separated by a small distance δZ₀, the separation after time t is approximately:

δZ(t) ≈ δZ₀·eλt

where λ is the Lyapunov exponent, defined as:

λ = lim(t→∞) (1/t)·ln(|δZ(t)|/|δZ₀|)

Key properties:

1. A system has as many Lyapunov exponents as dimensions in its phase space.

2. Interpretation of values:
   - λ > 0: Exponential divergence of nearby trajectories (chaos)
   - λ = 0: Trajectories maintain their separation (marginally stable)
   - λ < 0: Trajectories converge (stable)

3. The largest Lyapunov exponent determines the overall predictability of the system.

4. The reciprocal of the largest positive Lyapunov exponent gives an estimate of the time horizon for reliable predictions.

Lyapunov exponents are used to distinguish between regular and chaotic motion and to quantify the degree of chaos in a system.`
      },
      {
        title: 'KAM Theorem',
        content: `The Kolmogorov-Arnold-Moser (KAM) theorem addresses what happens to integrable Hamiltonian systems when small perturbations are introduced.

An integrable system has as many conserved quantities as degrees of freedom, resulting in regular, predictable motion confined to tori in phase space. The KAM theorem states that:

1. Under small perturbations, most of these tori survive but are slightly deformed.

2. The surviving tori are those with "sufficiently irrational" frequency ratios (difficult to approximate by rational numbers).

3. As the perturbation strength increases, more and more tori break up, starting with those having rational or near-rational frequency ratios.

4. The destroyed tori are replaced by chaotic regions where trajectories wander irregularly.

Implications of the KAM theorem:

1. It explains the coexistence of regular and chaotic motion in the same system.

2. It provides a mechanism for the transition from regular to chaotic behavior as a parameter is varied.

3. It shows that chaos often emerges gradually rather than suddenly.

The theorem is particularly important in celestial mechanics for understanding the stability of planetary orbits and in plasma physics for particle confinement.`
      },
      {
        title: 'Applications in Physics',
        content: `Chaos theory has numerous applications across physics:

1. Celestial mechanics:
   - Stability of the solar system
   - Asteroid and comet trajectories
   - Three-body problem

2. Fluid dynamics:
   - Turbulent flow
   - Weather and climate modeling
   - Mixing processes

3. Plasma physics:
   - Particle confinement in fusion devices
   - Magnetohydrodynamic instabilities

4. Quantum chaos:
   - Quantum signatures of classical chaos
   - Energy level statistics
   - Quantum scarring

5. Solid state physics:
   - Electron transport in mesoscopic systems
   - Spin systems

Chaos theory has also led to practical applications such as chaos-based cryptography, chaos control techniques, and methods for predicting the behavior of complex systems within their predictability horizon.`
      }
    ]
  },

  'Central Force Motion': {
    title: 'Central Force Motion',
    description: 'The study of motion under the influence of a force directed toward or away from a fixed point, with the force magnitude depending only on the distance from that point.',
    sections: [
      {
        title: 'Key Properties',
        content: `A central force has the form:

F = F(r)r̂

Where:
- F(r) is a scalar function of distance r
- r̂ is the unit vector pointing from the center to the object

Important characteristics:

1. Angular momentum is conserved: L = constant
2. Motion is confined to a plane perpendicular to L
3. The torque is zero: τ = r × F = 0
4. For conservative central forces, energy is also conserved: E = T + V = constant`
      },
      {
        title: 'Equations of Motion',
        content: `In polar coordinates (r, θ), the equations of motion are:

r̈ - rθ̇² = F(r)/m
d/dt(r²θ̇) = 0

The second equation expresses conservation of angular momentum: L = mr²θ̇ = constant

The effective potential approach combines the radial kinetic energy and potential energy:

Veff(r) = V(r) + L²/(2mr²)

This allows the radial motion to be treated as one-dimensional: E = ½mr̈² + Veff(r)`
      },
      {
        title: 'Orbital Shapes',
        content: `For inverse-square central forces (F ∝ 1/r²), such as gravity and electrostatic forces, the orbits are conic sections:

1. Circle: e = 0
2. Ellipse: 0 < e < 1
3. Parabola: e = 1
4. Hyperbola: e > 1

Where e is the eccentricity parameter.

Kepler's laws describe planetary motion under gravitational central forces:
1. Orbits are ellipses with the central body at one focus
2. Equal areas are swept in equal times
3. The square of the orbital period is proportional to the cube of the semi-major axis`
      },
      {
        title: 'Applications',
        content: `Central force motion is essential for understanding:

Celestial mechanics: Planetary orbits, satellite motion, binary star systems

Atomic physics: Electron motion in the Bohr model of the atom

Scattering theory: Particle deflection in nuclear and particle physics

Molecular dynamics: Interatomic forces in molecules

Engineering applications:
- Spacecraft trajectories
- Orbital mechanics`
      }
    ]
  },

  'Rigid Body Dynamics': {
    title: 'Rigid Body Dynamics',
    description: 'The branch of mechanics that studies the motion of solid bodies where internal deformation is neglected, focusing on translation and rotation in three-dimensional space.',
    sections: [
      {
        title: 'Kinematics of Rigid Bodies',
        content: `A rigid body has six degrees of freedom:
- Three translational (position of center of mass)
- Three rotational (orientation in space)

The position of any point in the body can be expressed as:
r = R + s

Where:
- r is the position vector of the point
- R is the position vector of the center of mass
- s is the position vector from center of mass to the point

The velocity of any point is:
v = V + ω × s

Where:
- V is the velocity of the center of mass
- ω is the angular velocity vector`
      },
      {
        title: 'Equations of Motion',
        content: `Translational motion:
F = Ma

Where:
- F is the net external force
- M is the total mass
- a is the acceleration of the center of mass

Rotational motion:
τ = Iα

Where:
- τ is the net torque about the center of mass
- I is the moment of inertia tensor
- α is the angular acceleration

For general motion, the equations become:
F = M(dV/dt)
τ = I(dω/dt) + ω × (Iω)`
      },
      {
        title: 'Moment of Inertia Tensor',
        content: `The moment of inertia tensor is a 3×3 matrix that describes the mass distribution of a rigid body:

I = [Ixx Ixy Ixz]
    [Iyx Iyy Iyz]
    [Izx Izy Izz]

Where the components are:
- Diagonal elements (Ixx, Iyy, Izz): Moments of inertia about the coordinate axes
- Off-diagonal elements: Products of inertia

For any rigid body, there exists a set of principal axes where the moment of inertia tensor becomes diagonal:

I = [I₁ 0  0 ]
    [0  I₂ 0 ]
    [0  0  I₃]

The principal moments of inertia (I₁, I₂, I₃) are the eigenvalues of the inertia tensor.`
      },
      {
        title: 'Conservation Laws and Applications',
        content: `In the absence of external forces and torques:
- Linear momentum is conserved: P = MV = constant
- Angular momentum is conserved: L = Iω = constant
- Kinetic energy is constant: T = ½MV² + ½ω·Iω

Special cases of rigid body motion:
- Pure rotation about a fixed axis
- Precession and nutation of tops and gyroscopes
- Rolling without slipping

Applications:
- Vehicle dynamics and robotics
- Spacecraft attitude control
- Biomechanics of human movement
- Industrial machinery design
- Sports equipment performance`
      }
    ]
  },

  'Stability of Motion': {
    title: 'Stability of Motion',
    description: 'The mathematical analysis of how dynamical systems respond to perturbations from equilibrium or steady states, providing methods to determine whether a system will return to its original state, remain nearby, or diverge when disturbed.',
    sections: [
      {
        title: 'Concepts of Stability',
        content: `Stability is a property that describes how a dynamical system behaves when slightly disturbed from an equilibrium or reference state. A system can exhibit various types of stability:

1. Equilibrium points: States where the system remains at rest (in phase space)
   - Stable: Returns to equilibrium when disturbed
   - Unstable: Moves away from equilibrium when disturbed
   - Neutrally stable: Neither returns nor moves away

2. Orbital stability: Pertains to periodic or quasi-periodic motion
   - Stable orbit: Nearby trajectories remain close
   - Unstable orbit: Nearby trajectories diverge

3. Structural stability: Robustness to changes in the system parameters

4. Asymptotic stability: System not only remains close but converges to the equilibrium

The concept of stability is central to understanding the long-term behavior of mechanical systems, from simple pendulums to complex spacecraft dynamics.`
      },
      {
        title: 'Linear Stability Analysis',
        content: `Linear stability analysis examines the behavior of a nonlinear system near an equilibrium point by approximating it with a linear system. The approach involves:

1. Finding equilibrium points by setting all time derivatives to zero:
   \dot{\mathbf{x}} = \mathbf{f}(\mathbf{x}) = \mathbf{0}

2. Linearizing the system around an equilibrium point \mathbf{x}_0 using Taylor series expansion:
   \dot{\mathbf{x}} ≈ \mathbf{f}(\mathbf{x}_0) + \mathbf{J}(\mathbf{x} - \mathbf{x}_0) = \mathbf{J}\mathbf{y}
   where \mathbf{y} = \mathbf{x} - \mathbf{x}_0 and \mathbf{J} is the Jacobian matrix with elements J_{ij} = ∂f_i/∂x_j evaluated at \mathbf{x}_0

3. Analyzing the eigenvalues λ_i of the Jacobian matrix:
   - If all eigenvalues have negative real parts: asymptotically stable
   - If any eigenvalue has a positive real part: unstable
   - If the largest real part is zero: further analysis needed

4. For conservative mechanical systems, the linearized equations often take the form:
   \ddot{\mathbf{q}} + \mathbf{K}\mathbf{q} = \mathbf{0}
   where \mathbf{K} is a stiffness matrix

The general solution to the linearized system is a superposition of terms like e^{λt}\mathbf{v}, where λ is an eigenvalue and \mathbf{v} is the corresponding eigenvector.

Linear stability analysis is particularly useful for mechanical systems operating near equilibrium points, such as vibrating structures, control systems, and small oscillations of pendulums.`
      },
      {
        title: 'Lyapunov Stability',
        content: `Lyapunov stability theory, developed by Russian mathematician Aleksandr Lyapunov, provides a powerful method for analyzing stability without explicitly solving the differential equations of motion.

1. Lyapunov's direct method (second method):
   - Construct a scalar function V(\mathbf{x}) (Lyapunov function) that measures the "energy" or "distance" from equilibrium
   - If V(\mathbf{x}) > 0 for all \mathbf{x} ≠ \mathbf{x}_0 and V(\mathbf{x}_0) = 0
   - And \dot{V}(\mathbf{x}) ≤ 0 along system trajectories
   - Then the equilibrium is stable
   - If additionally \dot{V}(\mathbf{x}) < 0 for all \mathbf{x} ≠ \mathbf{x}_0, the equilibrium is asymptotically stable

2. Common Lyapunov function candidates:
   - For mechanical systems: total energy (kinetic + potential)
   - For linear systems: quadratic forms \mathbf{x}^T\mathbf{P}\mathbf{x} where \mathbf{P} is positive definite
   - For nonlinear systems: various problem-specific functions

3. Lyapunov's indirect method:
   - Stability of the linearized system implies stability of the nonlinear system under certain conditions
   - Instability of the linearized system implies instability of the nonlinear system

4. Limitations:
   - Finding a Lyapunov function is not algorithmic
   - Failure to find a Lyapunov function doesn't prove instability

Lyapunov stability theory is particularly valuable for nonlinear systems where explicit solutions are not available, and for establishing global stability properties beyond the reach of linear analysis.`
      },
      {
        title: 'Stability in Hamiltonian Systems',
        content: `Hamiltonian systems, which describe conservative mechanical systems, have special stability properties:

1. Conservation of energy constrains the motion to constant-energy surfaces

2. Equilibrium points correspond to critical points of the potential energy:
   - Minima of potential energy: stable equilibria
   - Maxima or saddle points: unstable equilibria

3. KAM theory (Kolmogorov-Arnold-Moser):
   - Describes stability of quasi-periodic motion under small perturbations
   - Most invariant tori survive small perturbations if frequency ratios are sufficiently irrational

4. Action-angle variables provide a natural framework for analyzing stability of periodic orbits

5. Poincaré-Birkhoff fixed point theorem describes the fate of resonant tori under perturbation

The stability analysis of Hamiltonian systems is central to celestial mechanics, plasma physics, and accelerator physics, where long-term stability is essential.`
      },
      {
        title: 'Applications and Examples',
        content: `Stability analysis has numerous applications across physics and engineering:

1. Mechanical systems:
   - Stability of equilibrium positions in mechanisms
   - Vibration analysis of structures
   - Vehicle dynamics and control

2. Control theory:
   - Feedback stabilization of unstable systems
   - Robust control design
   - Stability margins in control systems

3. Celestial mechanics:
   - Stability of planetary orbits
   - Lagrange points in three-body problems
   - Spacecraft trajectory design

4. Fluid dynamics:
   - Stability of fluid flows
   - Transition to turbulence
   - Convection patterns

Example: Inverted pendulum

The equations of motion for a simple inverted pendulum are:

\ddot{\theta} - (g/l)\sin\theta = 0

Linearizing around the unstable equilibrium θ = 0:

\ddot{\theta} - (g/l)\theta = 0

The characteristic equation is λ² - g/l = 0, with eigenvalues λ = ±√(g/l).
Since one eigenvalue is positive, the equilibrium is unstable.

A suitable Lyapunov function for the stable downward position (θ = π) would be the total energy:
V = (1/2)ml²\dot{\theta}² - mgl\cos\theta + mgl

This function is positive definite near θ = π and its time derivative is zero, confirming stability.`
      }
    ]
  },

  'Special Relativity': {
    title: 'Special Relativity',
    description: 'A theory proposed by Albert Einstein in 1905 that describes the relationship between space and time, based on two postulates: the laws of physics are the same in all inertial reference frames, and the speed of light in vacuum is constant regardless of the motion of the source or observer.',
    sections: [
      {
        title: 'Postulates and Implications',
        content: `Special relativity is built on two fundamental postulates:

1. Principle of Relativity: The laws of physics take the same form in all inertial reference frames.

2. Invariance of the Speed of Light: The speed of light in vacuum (c ≈ 3 × 10⁸ m/s) is the same for all observers, regardless of their relative motion or the motion of the light source.

These seemingly simple postulates lead to profound consequences:

- Relativity of simultaneity: Events that are simultaneous in one reference frame may not be simultaneous in another.

- Time dilation: Moving clocks run slower when observed from a reference frame in which they are moving.
   Δt' = γΔt, where γ = 1/√(1-v²/c²)

- Length contraction: Objects appear shorter in the direction of motion.
   L' = L/γ

- Relativistic mass increase: The mass of an object increases with its velocity.
   m = m₀γ

- Mass-energy equivalence: Mass and energy are different manifestations of the same physical quantity.
   E = mc²

These effects become significant only at speeds approaching the speed of light, which is why they are not noticeable in everyday experience.`
      },
      {
        title: 'Lorentz Transformations',
        content: `The Lorentz transformations describe how space and time coordinates transform between inertial reference frames moving at constant velocity relative to each other.

For two reference frames S and S', with S' moving at velocity v along the x-axis of S, the transformations are:

x' = γ(x - vt)
y' = y
z' = z
t' = γ(t - vx/c²)

where γ = 1/√(1-v²/c²) is the Lorentz factor.

Inverse transformations (S' to S):

x = γ(x' + vt')
y = y'
z = z'
t = γ(t' + vx'/c²)

Key properties of Lorentz transformations:

1. They reduce to Galilean transformations (x' = x - vt, t' = t) when v ≪ c.

2. They form a group, meaning successive transformations can be composed into a single transformation.

3. They preserve the spacetime interval: Δs² = c²Δt² - Δx² - Δy² - Δz²

4. They can be represented as hyperbolic rotations in spacetime, analogous to ordinary rotations in space.

The Lorentz transformations replace the Galilean transformations of classical mechanics and are consistent with the observed constancy of the speed of light.`
      },
      {
        title: '4-Vectors and Spacetime',
        content: `In special relativity, space and time are unified into a four-dimensional continuum called spacetime. Points in spacetime, called events, are described by four coordinates (ct, x, y, z).

A 4-vector is a quantity with four components that transform according to the Lorentz transformations. Important 4-vectors include:

1. Position 4-vector: x^μ = (ct, x, y, z)
   - Represents a point in spacetime

2. Velocity 4-vector: u^μ = γ(c, v_x, v_y, v_z)
   - Always has magnitude c
   - γ = 1/√(1-v²/c²)

3. Momentum 4-vector: p^μ = (E/c, p_x, p_y, p_z)
   - Energy is the temporal component
   - 3-momentum is the spatial component
   - Magnitude squared: p^μp_μ = (mc)²

4. Wave 4-vector: k^μ = (ω/c, k_x, k_y, k_z)
   - Describes plane waves in spacetime

5. Current 4-vector: j^μ = (cρ, j_x, j_y, j_z)
   - Combines charge density and current density

The scalar product of two 4-vectors A^μ and B^μ is defined as:
A·B = A^0B^0 - A^1B^1 - A^2B^2 - A^3B^3

This scalar product is invariant under Lorentz transformations, meaning all observers in different inertial frames will calculate the same value.`
      },
      {
        title: 'Relativistic Dynamics',
        content: `Relativistic dynamics extends classical mechanics to account for relativistic effects at high speeds.

1. Relativistic momentum:
p = γm₀v

where:
- p is the momentum
- m₀ is the rest mass
- v is the velocity
- γ = 1/√(1-v²/c²)

2. Relativistic energy:
E = γm₀c²

This can be separated into rest energy and kinetic energy:
E = m₀c² + K

where K = (γ-1)m₀c² is the relativistic kinetic energy.

3. Energy-momentum relation:
E² = (pc)² + (m₀c²)²

This is a consequence of the invariant magnitude of the momentum 4-vector.

4. Conservation laws:
- Total energy is conserved
- Total momentum is conserved
- Total rest mass is generally not conserved

5. Force and acceleration:
F = dp/dt = d(γm₀v)/dt

This leads to:
F = γm₀a + γ³m₀(v·a)v/c²

Unlike in classical mechanics, force and acceleration are not always parallel in relativistic dynamics.`
      },
      {
        title: 'Applications and Experimental Verification',
        content: `Special relativity has been confirmed by numerous experiments and has practical applications:

1. Experimental verifications:
   - Michelson-Morley experiment: Failed to detect the motion of Earth through the hypothetical ether
   - Time dilation in muon decay: Muons created in the upper atmosphere reach Earth's surface despite their short lifetime
   - Ives-Stilwell experiment: Confirmed the relativistic Doppler effect
   - Particle accelerators: Particles behave according to relativistic dynamics
   - GPS satellites: Time dilation corrections are necessary for accurate positioning

2. Particle physics applications:
   - Relativistic energy is essential in understanding particle creation and annihilation
   - Particle accelerators operate based on relativistic principles
   - Nuclear reactions involve mass-energy conversion (E = mc²)

3. Astrophysical applications:
   - Relativistic jets from active galactic nuclei
   - Relativistic effects in binary pulsars
   - Synchrotron radiation from relativistic electrons

4. Technological applications:
   - Nuclear energy (conversion of mass to energy)
   - Precision timekeeping
   - Particle beam therapy for cancer treatment

Special relativity, together with quantum mechanics, forms the basis of modern physics and has revolutionized our understanding of space, time, matter, and energy.`
      }
    ]
  },

  'Small Oscillations and Normal Modes': {
    title: 'Small Oscillations and Normal Modes',
    description: 'The study of vibrations in systems with multiple degrees of freedom, analyzing how coupled oscillators move in characteristic patterns called normal modes.',
    sections: [
      {
        title: 'Mathematical Framework',
        content: `For a system with n degrees of freedom, the equations of motion for small oscillations about equilibrium can be written in matrix form:

M ẍ + K x = 0

Where:
- x is an n-dimensional displacement vector
- M is the mass matrix (or inertia matrix)
- K is the stiffness matrix (related to potential energy)
- Both M and K are n×n symmetric matrices

For small oscillations, we can approximate the potential energy with a quadratic form:
V(x) ≈ V₀ + ½ xᵀKx

And the kinetic energy as:
T = ½ ẋᵀMẋ`
      },
      {
        title: 'Normal Modes',
        content: `Normal modes are special patterns of motion where all parts of the system oscillate with the same frequency and phase.

For a system with n degrees of freedom, there are n normal modes, each with:
- A characteristic frequency (eigenfrequency) ωᵢ
- A characteristic pattern of motion (eigenvector) ξᵢ

The general solution is a superposition of normal modes:
x(t) = Σ Aᵢ ξᵢ cos(ωᵢt + φᵢ)

Where:
- Aᵢ are amplitudes determined by initial conditions
- φᵢ are phase constants determined by initial conditions

The eigenvalue problem:
(K - ω²M)ξ = 0

This yields n eigenvalues ω²ᵢ and n eigenvectors ξᵢ`
      },
      {
        title: 'Coupled Oscillators',
        content: `A system of coupled oscillators consists of multiple masses connected by springs.

For a system of n coupled oscillators:
- Each oscillator has its own natural frequency
- Coupling allows energy transfer between oscillators
- The motion can be complex but is decomposable into normal modes

Example: Two masses connected by springs
- Two normal modes: in-phase and out-of-phase motion
- In-phase: both masses move in the same direction
- Out-of-phase: masses move in opposite directions

For two identical coupled oscillators with coupling constant k:
- In-phase frequency: ω₁ = √(k/m)
- Out-of-phase frequency: ω₂ = √((k+2κ)/m) where κ is the coupling strength`
      },
      {
        title: 'Applications',
        content: `Small oscillations and normal modes analysis applies to:

Mechanical systems:
- Vibrations in structures and machines
- Coupled pendulums
- Molecular vibrations

Wave phenomena:
- Standing waves on strings
- Acoustic resonances
- Lattice vibrations in solids (phonons)

Quantum mechanics:
- Normal modes of quantum oscillators
- Molecular vibrational spectra
- Quantum field theory

Engineering applications:
- Structural analysis
- Vibration isolation
- Musical instruments`
      }
    ]
  },

  'Non-inertial Reference Frames': {
    title: 'Non-inertial Reference Frames',
    description: 'Reference frames that are accelerating or rotating relative to an inertial frame, requiring the introduction of fictitious forces to correctly apply Newton\'s laws of motion.',
    sections: [
      {
        title: 'Inertial vs. Non-inertial Frames',
        content: `An inertial reference frame is one in which Newton's first law holds: an object with no net force acting on it moves with constant velocity. In contrast, a non-inertial reference frame is accelerating or rotating relative to an inertial frame.

Types of non-inertial frames:
1. Linearly accelerating frames (e.g., accelerating vehicles)
2. Rotating frames (e.g., Earth's surface, rotating platforms)
3. General non-inertial frames with both linear acceleration and rotation

In non-inertial frames, objects appear to accelerate even when no real forces act on them. To account for this apparent acceleration, we introduce fictitious forces (also called inertial or pseudo forces).`
      },
      {
        title: 'Fictitious Forces',
        content: `When transforming Newton's second law from an inertial to a non-inertial frame, the equation becomes:

F = ma + m(a₁ + 2ω × v + ω × (ω × r) + dω/dt × r)

Where:
- F represents real forces
- m is the mass of the object
- a is the acceleration in the non-inertial frame
- a₁ is the linear acceleration of the non-inertial frame
- ω is the angular velocity of the non-inertial frame
- r is the position vector
- v is the velocity in the non-inertial frame

The additional terms represent fictitious forces:
1. Translational inertial force: -ma₁
2. Coriolis force: -2m(ω × v)
3. Centrifugal force: -m(ω × (ω × r))
4. Azimuthal force: -m(dω/dt × r)

These forces appear only in non-inertial frames and do not correspond to any physical interaction.`
      },
      {
        title: 'Coriolis Effect',
        content: `The Coriolis force is given by:

F_coriolis = -2m(ω × v)

This force acts perpendicular to both the rotation axis and the velocity of the object. It causes moving objects to appear to deflect from their path when viewed from a rotating reference frame.

Key characteristics:
- Proportional to mass, angular velocity, and linear velocity
- Always perpendicular to the velocity vector
- Zero for objects at rest in the rotating frame
- Maximum when motion is perpendicular to the rotation axis

Examples of the Coriolis effect:
- Deflection of winds in Earth's atmosphere (clockwise in Northern Hemisphere, counterclockwise in Southern Hemisphere)
- Ocean currents
- Ballistic trajectories of long-range projectiles
- Foucault pendulum motion`
      },
      {
        title: 'Centrifugal Effect',
        content: `The centrifugal force is given by:

F_centrifugal = -m(ω × (ω × r))

This force points outward from the axis of rotation. It can be rewritten as:

F_centrifugal = mω²r_⊥

Where r_⊥ is the perpendicular distance from the rotation axis.

Key characteristics:
- Proportional to mass, square of angular velocity, and distance from rotation axis
- Always directed outward from the rotation axis
- Present even for objects at rest in the rotating frame

Applications:
- Earth's equatorial bulge
- Centrifuges for separation
- Banking of curved roads
- Design of rotating machinery

The centrifugal force is often balanced by a real centripetal force (like tension or normal force) to maintain circular motion.`
      },
      {
        title: 'Applications and Examples',
        content: `Non-inertial reference frames are used to analyze various physical systems:

1. Earth as a rotating reference frame:
   - Weather patterns and atmospheric circulation
   - Ocean currents
   - Missile trajectories

2. Engineering applications:
   - Rotating machinery vibration analysis
   - Vehicle dynamics on curved paths
   - Spacecraft attitude control

3. Laboratory demonstrations:
   - Rotating platform experiments
   - Foucault pendulum
   - Rotating fluid experiments

4. Theoretical physics:
   - General relativity (equivalence principle)
   - Mach's principle
   - Relativistic rotating reference frames

While fictitious forces are not "real" in the sense of resulting from physical interactions, they produce measurable effects and are essential for correctly applying Newton's laws in non-inertial frames.`
      }
    ]
  },

  'Field Theory Preliminaries': {
    title: 'Field Theory Preliminaries',
    description: 'The conceptual and mathematical transition from discrete particle mechanics to continuous field theories, providing the necessary background for understanding classical field theories like electromagnetism and fluid dynamics, as well as quantum field theories.',
    sections: [
      {
        title: 'From Particles to Fields',
        content: `Classical mechanics traditionally deals with discrete particles characterized by positions and momenta. Field theory extends this to continuous systems where physical quantities vary continuously in space and time. This transition involves several key conceptual steps:

1. Discrete to continuous variables:
   - Particles: Finite number of degrees of freedom (positions xᵢ)
   - Fields: Infinite degrees of freedom (field values φ(x) at each point in space)

2. Summation to integration:
   - Discrete systems: ∑ᵢ (sum over particles)
   - Continuous systems: ∫ d³x (integration over space)

3. Ordinary to partial differential equations:
   - Particle dynamics: ODEs (e.g., m¨x = F(x))
   - Field dynamics: PDEs (e.g., ∇²φ - (1/c²)∂²φ/∂t² = 0)

4. Localization of physical quantities:
   - Discrete: Properties assigned to particles
   - Continuous: Properties assigned to each point in space

This transition is not merely mathematical but represents a shift in how we conceptualize physical systems, from collections of distinct objects to continuous media with properties at each point.`
      },
      {
        title: 'Continuum Approximation',
        content: `The continuum approximation treats a system of many discrete particles as a continuous medium. This approximation is valid when:

1. The number of particles is very large
2. The length scale of interest is much larger than inter-particle spacing
3. The time scale of interest is much longer than microscopic collision times

Common examples of the continuum approximation:

1. Fluid dynamics: Discrete molecules → continuous fluid with density ρ(x,t) and velocity v(x,t)

2. Elasticity theory: Discrete atoms in a solid → continuous medium with displacement field u(x,t)

3. Electromagnetism: Discrete charges → continuous charge and current densities ρ(x,t) and J(x,t)

The continuum approximation introduces field quantities such as:

- Scalar fields: Single value at each point (e.g., temperature, pressure)
- Vector fields: Direction and magnitude at each point (e.g., velocity, electric field)
- Tensor fields: Multi-component quantities (e.g., stress tensor, electromagnetic field tensor)

These field quantities are related to their discrete counterparts through appropriate averaging procedures over small volume elements.`
      },
      {
        title: 'Lagrangian and Hamiltonian Formulations',
        content: `The powerful Lagrangian and Hamiltonian formalisms of classical mechanics extend naturally to field theories.

1. Discrete Lagrangian to field Lagrangian density:
   - Discrete: L(qᵢ, ḵᵢ)
   - Field: ℒ = ∫ ℓ(φ, ∂μφ) d³x
   where ℓ is the Lagrangian density

2. Discrete Euler-Lagrange equations to field equations:
   - Discrete: d/dt(∂L/∂ḵᵢ) - ∂L/∂qᵢ = 0
   - Field: ∂μ(∂ℓ/∂(∂μφ)) - ∂ℓ/∂φ = 0

3. Discrete Hamiltonian to field Hamiltonian density:
   - Discrete: H(qᵢ, pᵢ)
   - Field: ℒ = ∫ ℍ(φ, π) d³x
   where π = ∂ℓ/∂(∂₀φ) is the canonical momentum density

4. Canonical field equations:
   - ∂φ/∂t = δℒ/δπ
   - ∂π/∂t = -δℒ/δφ

The action principle remains central: physical fields evolve to extremize the action
S = ∫ ℓ(φ, ∂μφ) d⁴x

This formulation provides a unified approach to deriving field equations for diverse physical systems.`
      },
      {
        title: 'Conservation Laws and Noether\'s Theorem',
        content: `Noether's theorem, which connects symmetries with conservation laws, applies to both discrete and continuous systems but takes a different form in field theories.

1. Continuous symmetries in field theories:
   - Spatial translation → Conservation of momentum
   - Temporal translation → Conservation of energy
   - Rotation → Conservation of angular momentum
   - Internal symmetries → Conservation of charges (e.g., electric charge)

2. Local conservation laws:
   For a symmetry with infinitesimal parameter ε, Noether's theorem gives a conserved current jμ such that:
   ∂μjμ = 0

   The conserved charge is:
   Q = ∫ j⁰ d³x

3. Stress-energy tensor:
   A particularly important conserved quantity in field theories is the stress-energy tensor Tμν, which generalizes energy and momentum to continuous systems.

4. Continuity equation:
   The local form of conservation laws is expressed as continuity equations:
   ∂ρ/∂t + ∇·j = 0
   where ρ is a density (e.g., mass, charge) and j is the corresponding flux.

These conservation laws provide constraints on the possible evolution of fields and are essential for understanding the behavior of physical systems.`
      },
      {
        title: 'Examples and Applications',
        content: `The transition from discrete to continuous systems appears in many areas of physics:

1. Vibrating string:
   - Discrete: Chain of coupled oscillators with positions yᵢ(t)
   - Continuous: Displacement field y(x,t) governed by the wave equation
     ∂²y/∂t² = c²∂²y/∂x²

2. Elastic solids:
   - Discrete: Network of masses connected by springs
   - Continuous: Displacement field u(x,t) governed by elasticity equations
     ρ∂²uᵢ/∂t² = ∑ⱼ ∂σᵢⱼ/∂xⱼ

3. Electromagnetic field:
   - Discrete: Interacting charged particles
   - Continuous: Electric and magnetic fields E(x,t) and B(x,t) governed by Maxwell's equations

4. Fluid dynamics:
   - Discrete: Molecular dynamics
   - Continuous: Density ρ(x,t) and velocity v(x,t) governed by Navier-Stokes equations

The field theory approach provides powerful tools for analyzing these systems, especially when dealing with wave propagation, nonlinear effects, and collective behaviors that emerge at the macroscopic level.

Field theory serves as a bridge between classical mechanics and more advanced theories like general relativity and quantum field theory, where fields become the primary objects of study rather than particles.`
      }
    ]
  },

  'D\'Alembert\'s Principle': {
    title: 'D\'Alembert\'s Principle',
    description: 'A reformulation of Newton\'s laws of motion that transforms dynamics problems into equivalent statics problems by introducing inertial forces, simplifying the analysis of constrained mechanical systems.',
    sections: [
      {
        title: 'Mathematical Formulation',
        content: `D'Alembert's principle states that the sum of the differences between the applied forces and the inertial forces, multiplied by any virtual displacement consistent with the constraints, equals zero:

Σ(Fᵢ - mᵢaᵢ)·δrᵢ = 0

Where:
- Fᵢ represents the applied forces on particle i
- mᵢ is the mass of particle i
- aᵢ is the acceleration of particle i
- δrᵢ represents virtual displacements consistent with the constraints

The term (Fᵢ - mᵢaᵢ) is called the "effective force" or "reversed effective force."

This principle can be rewritten as:
ΣFᵢ·δrᵢ - Σmᵢaᵢ·δrᵢ = 0

The first term represents the virtual work of the applied forces, and the second term represents the virtual work of the inertial forces.`
      },
      {
        title: 'Constraints and Virtual Displacements',
        content: `D'Alembert's principle is particularly useful for systems with constraints. Constraints can be:

1. Holonomic: Expressible as equations relating coordinates (e.g., a particle constrained to move on a surface)

2. Non-holonomic: Expressible as inequalities or differential relations (e.g., rolling without slipping)

Virtual displacements (δrᵢ) are imaginary, instantaneous displacements consistent with the constraints at a given instant. They differ from actual displacements in that:

- They occur at a fixed time (no time variation)
- They need only satisfy the constraints instantaneously
- They are infinitesimal

For a system with m holonomic constraints, the number of independent virtual displacements is n - m, where n is the total number of degrees of freedom without constraints.`
      },
      {
        title: 'Connection to Other Formulations',
        content: `D'Alembert's principle serves as a bridge between Newtonian mechanics and Lagrangian mechanics:

1. From D'Alembert's principle, we can derive Lagrange's equations:
d/dt(∂L/∂q̇ᵢ) - ∂L/∂qᵢ = Qᵢ

Where:
- L is the Lagrangian (L = T - V)
- qᵢ are generalized coordinates
- Qᵢ are generalized forces

2. For conservative systems, where all forces derive from a potential energy function, D'Alembert's principle leads to the principle of least action.

3. The principle can be extended to include non-conservative forces through generalized forces.

This formulation eliminates the need to explicitly calculate constraint forces when they do no work in virtual displacements.`
      },
      {
        title: 'Applications',
        content: `D'Alembert's principle is applied in various areas of mechanics:

1. Rigid body dynamics: Analyzing complex multi-body systems with interconnections

2. Robotics: Deriving equations of motion for robotic manipulators with joints

3. Vehicle dynamics: Modeling suspension systems and wheel-ground interactions

4. Structural mechanics: Analyzing forces in trusses and frames

5. Biomechanics: Modeling joint constraints in human and animal movement

The principle is particularly valuable when:
- The system has many constraints
- Constraint forces are not of primary interest
- The system is more easily described using generalized coordinates

It simplifies problems by eliminating the need to solve for constraint forces directly.`
      }
    ]
  },

  'Hamilton-Jacobi Theory': {
    title: 'Hamilton-Jacobi Theory',
    description: 'A powerful formulation of classical mechanics that transforms Hamilton\'s equations into a single first-order partial differential equation, providing a complete solution method for mechanical systems.',
    sections: [
      {
        title: 'The Hamilton-Jacobi Equation',
        content: `The Hamilton-Jacobi equation is a first-order partial differential equation for Hamilton's principal function S(q,t):

∂S/∂t + H(q, ∂S/∂q, t) = 0

Where:
- S is Hamilton's principal function
- q represents generalized coordinates
- H is the Hamiltonian
- ∂S/∂q represents generalized momenta: p = ∂S/∂q

For time-independent systems, we can separate variables:
S(q,t) = W(q) - Et

Where E is the total energy and W(q) is Hamilton's characteristic function, which satisfies:
H(q, ∂W/∂q) = E

This reduced equation is called the time-independent Hamilton-Jacobi equation.`
      },
      {
        title: 'Complete Solutions and Constants of Motion',
        content: `A complete solution of the Hamilton-Jacobi equation contains n independent constants α₁, α₂, ..., αₙ (where n is the number of degrees of freedom):

S = S(q₁, q₂, ..., qₙ, α₁, α₂, ..., αₙ, t)

From this complete solution, we can derive:

1. New momenta (constants of motion): βᵢ = ∂S/∂αᵢ

2. New coordinates: ∂S/∂βᵢ = qᵢ

These equations implicitly define the solution q(t) to the original mechanical problem.

The transformation from (q,p) to (α,β) is canonical, with the new Hamiltonian K = 0, meaning α and β are constant in time.`
      },
      {
        title: 'Relation to Action and Wave Mechanics',
        content: `Hamilton's principal function S is related to the action integral:

S = ∫ L dt

Where L is the Lagrangian. This connection reveals that particles follow paths of stationary action.

The Hamilton-Jacobi equation also provides a bridge to quantum mechanics through the WKB approximation. In the short-wavelength limit, the Schrödinger equation:

-(ℏ²/2m)∇²ψ + Vψ = iℏ∂ψ/∂t

Can be approximated by writing ψ = e^(iS/ℏ), which yields the Hamilton-Jacobi equation in the limit ℏ → 0.

This connection helped guide the historical development of quantum mechanics from classical principles.`
      },
      {
        title: 'Applications and Methods',
        content: `The Hamilton-Jacobi theory is particularly useful for:

1. Separable systems: When the Hamilton-Jacobi equation can be separated into independent equations for each coordinate

2. Cyclic coordinates: When the Hamiltonian does not depend on certain coordinates

3. Action-angle variables: For periodic systems, providing a natural framework for perturbation theory

4. Geometrical optics: The eikonal equation in optics is analogous to the Hamilton-Jacobi equation

5. Relativistic mechanics: Extending to relativistic systems through proper time parameterization

Solution methods include:
- Separation of variables
- Canonical transformations to find suitable coordinates
- Method of characteristics
- Perturbation techniques for nearly integrable systems`
      }
    ]
  },

  'Scattering Theory': {
    title: 'Scattering Theory',
    description: 'A mathematical framework for analyzing how particles and waves are deflected by matter or other particles, providing direct information about the interaction forces and potential energy functions.',
    sections: [
      {
        title: 'Cross Sections',
        content: `The cross section is a measure of the probability of a scattering event occurring. It has dimensions of area and can be interpreted as the effective area that the target presents to the incident particle.

Types of cross sections:

1. Total cross section (σ): The probability of any type of scattering occurring, measured in units of area (often barns, where 1 barn = 10⁻²⁸ m²).

2. Differential cross section (dσ/dΩ): The probability of scattering into a specific solid angle dΩ, given by:
   dσ/dΩ = |f(θ,φ)|²
   where f(θ,φ) is the scattering amplitude.

3. Partial wave cross section: For a specific angular momentum component l:
   σₗ = 4π(2l+1)sin²δₗ/k²
   where δₗ is the phase shift and k is the wave number.

The differential cross section provides detailed information about the angular distribution of scattered particles, which directly reflects the nature of the interaction potential.`
      },
      {
        title: 'Impact Parameter',
        content: `The impact parameter b is the perpendicular distance between the initial trajectory of the incident particle and the center of the scattering potential.

Key relationships:

1. Classical relation between impact parameter and scattering angle θ:
   For a central force, the scattering angle θ is a function of the impact parameter b.

2. For a given potential V(r), the relation is:
   θ(b) = π - 2∫ᵣₘᵢₙ^∞ (b/r²)/√(1-(b/r)²-2V(r)/mv²) dr
   where rₘᵢₙ is the distance of closest approach.

3. The differential cross section can be expressed in terms of the impact parameter:
   dσ/dΩ = |b/(sin θ)(db/dθ)|

The impact parameter formulation is particularly useful for visualizing classical scattering processes and connecting classical and quantum mechanical descriptions.`
      },
      {
        title: 'Rutherford Scattering',
        content: `Rutherford scattering describes the elastic scattering of charged particles by the Coulomb force. It was first observed in Geiger-Marsden experiments (1909) and explained by Ernest Rutherford (1911), leading to the discovery of the atomic nucleus.

The Rutherford differential cross section for a projectile with charge z₁e and target with charge z₂e is:

dσ/dΩ = (z₁z₂e²/4πε₀)² · 1/(4E²sin⁴(θ/2))

where E is the kinetic energy of the incident particle.

Key features of Rutherford scattering:

1. Strong angular dependence: The probability of scattering decreases as sin⁻⁴(θ/2), showing that small-angle scattering is much more likely than large-angle scattering.

2. Energy dependence: The cross section is proportional to E⁻², meaning higher-energy particles are less likely to be scattered.

3. Charge dependence: The cross section is proportional to (z₁z₂)², so scattering is stronger for higher atomic number targets.

The relationship between impact parameter and scattering angle for Rutherford scattering is:

b = (z₁z₂e²/4πε₀) · 1/(mv² tan(θ/2))

where m is the reduced mass and v is the relative velocity.`
      },
      {
        title: 'Quantum Scattering Theory',
        content: `Quantum scattering theory extends classical scattering to account for wave-like properties of particles. The key elements are:

1. Scattering states: Solutions to the time-independent Schrödinger equation with asymptotic form:
   ψ(r) → eⁱᵏᶻ + f(θ,φ)eⁱᵏʳ/r as r → ∞
   where the first term represents the incident plane wave and the second term represents the scattered spherical wave.

2. Born approximation: For weak potentials, the scattering amplitude can be approximated as:
   f(θ) = -(m/2πħ²)∫V(r)e^(i(k-k')·r) d³r
   where k and k' are the initial and final wave vectors.

3. Partial wave analysis: The scattering amplitude can be expanded in terms of Legendre polynomials:
   f(θ) = (1/k)∑ₗ(2l+1)e^(iδₗ)sin(δₗ)Pₗ(cos θ)
   where δₗ are the phase shifts.

Quantum effects become significant when the de Broglie wavelength of the incident particle is comparable to the range of the interaction potential.`
      },
      {
        title: 'Applications',
        content: `Scattering theory has numerous applications across physics:

1. Nuclear and particle physics:
   - Determining nuclear structure and sizes
   - Identifying new particles and resonances
   - Measuring interaction strengths and coupling constants

2. Atomic and molecular physics:
   - Electron-atom scattering for atomic structure
   - Molecular collision cross sections
   - Chemical reaction dynamics

3. Condensed matter physics:
   - Neutron scattering to study crystal structures
   - X-ray diffraction
   - Electron diffraction in transmission electron microscopy

4. Astrophysics:
   - Compton scattering of photons
   - Gravitational scattering
   - Cosmic ray interactions

Scattering experiments continue to be one of the most direct methods for probing the structure of matter at various scales, from subatomic particles to astronomical objects.`
      }
    ]
  },

  'Poisson Brackets': {
    title: 'Poisson Brackets',
    description: 'A mathematical operation in classical mechanics that connects dynamical variables and provides a direct link to quantum mechanics through the correspondence principle.',
    sections: [
      {
        title: 'Definition and Properties',
        content: `The Poisson bracket of two functions f(q,p) and g(q,p) is defined as:

{f,g} = Σ(∂f/∂qᵢ·∂g/∂pᵢ - ∂f/∂pᵢ·∂g/∂qᵢ)

Where qᵢ and pᵢ are canonical coordinates and momenta.

Key properties:

1. Antisymmetry: {f,g} = -{g,f}
2. Linearity: {af+bg,h} = a{f,h}+b{g,h} where a,b are constants
3. Product rule: {fg,h} = f{g,h}+{f,h}g
4. Jacobi identity: {f,{g,h}}+{g,{h,f}}+{h,{f,g}} = 0

Fundamental Poisson brackets:
{qᵢ,qᴧ} = 0
{pᵢ,pᴧ} = 0
{qᵢ,pᴧ} = δᵢᴧ (Kronecker delta)`
      },
      {
        title: 'Relation to Dynamics',
        content: `Poisson brackets provide a compact way to express Hamilton's equations of motion:

dqᵢ/dt = {qᵢ,H}
dpᵢ/dt = {pᵢ,H}

For any function f(q,p,t) of phase space variables, its time evolution is given by:

df/dt = ∂f/∂t + {f,H}

This is known as the Poisson theorem or the equation of motion in Poisson bracket form.

Constants of motion C satisfy {C,H} = 0, meaning they have zero Poisson bracket with the Hamiltonian.`
      },
      {
        title: 'Connection to Quantum Mechanics',
        content: `Poisson brackets in classical mechanics correspond to commutators in quantum mechanics through the correspondence principle:

{f,g} → [F,G]/(iℏ)

Where:
- F,G are quantum operators corresponding to classical observables f,g
- [F,G] = FG-GF is the commutator
- ℏ is the reduced Planck constant

This correspondence reveals the deep connection between classical and quantum mechanics:

1. The uncertainty principle arises from non-zero commutators
2. Classical variables with non-zero Poisson brackets become non-commuting quantum operators
3. The canonical commutation relation [Q,P] = iℏ corresponds to {q,p} = 1

This relationship guided the historical development of quantum mechanics from classical principles.`
      },
      {
        title: 'Applications',
        content: `Poisson brackets have numerous applications in physics:

1. Identifying conserved quantities through Noether's theorem

2. Formulating canonical perturbation theory

3. Developing symplectic numerical integrators for Hamiltonian systems

4. Analyzing symmetries and conservation laws

5. Studying classical chaos and integrability

6. Constructing quantum theories from classical theories

The Poisson bracket structure also extends to infinite-dimensional systems in field theories, where it becomes the basis for canonical quantization.`
      }
    ]
  },

  'Continuum Mechanics Basics': {
    title: 'Continuum Mechanics Basics',
    description: 'The branch of mechanics that treats matter as a continuous medium rather than as discrete particles, providing a mathematical framework for analyzing the mechanical behavior of solids and fluids under various loading conditions.',
    sections: [
      {
        title: 'Continuum Approximation',
        content: `Continuum mechanics models materials as continuous media, ignoring their discrete molecular structure. This approximation is valid when:

1. The characteristic length scale of the problem is much larger than molecular dimensions
2. The material properties can be averaged over small volume elements
3. The material behavior can be described by continuous functions

The continuum approach allows us to define field variables such as displacement, velocity, stress, and strain at every point in the material. These fields are governed by conservation laws (mass, momentum, energy) and constitutive relations specific to the material.

The balance between microscopic reality and macroscopic approximation makes continuum mechanics applicable to a wide range of problems in structural analysis, fluid dynamics, and material science.`
      },
      {
        title: 'Stress',
        content: `Stress is a measure of the internal forces that neighboring particles of a material exert on each other. Mathematically, stress is represented as a second-order tensor σᵢⱼ.

The stress tensor can be written as a 3×3 matrix:

σ = [σₓₓ τₓᵧ τₓᵣ]
    [τᵧₓ σᵧᵧ τᵧᵣ]
    [τᵣₓ τᵣᵧ σᵣᵣ]

Where:
- σᵢᵢ are normal stress components (perpendicular to the face)
- τᵢⱼ are shear stress components (parallel to the face)

Key properties of the stress tensor:

1. Units: Force per unit area (N/m² or Pa)

2. Symmetry: σᵢⱼ = σⱼᵢ (due to conservation of angular momentum)

3. Principal stresses: The eigenvalues of the stress tensor, representing the normal stresses in a coordinate system where shear stresses vanish

4. Stress invariants: Quantities that remain unchanged under coordinate transformation:
   - First invariant: I₁ = σₓₓ + σᵧᵧ + σᵣᵣ
   - Second invariant: I₂ = σₓₓσᵧᵧ + σᵧᵧσᵣᵣ + σᵣᵣσₓₓ - τₓᵧ² - τᵧᵣ² - τᵣₓ²
   - Third invariant: I₃ = determinant of stress tensor

5. Deviatoric and hydrostatic components:
   - Hydrostatic stress: p = (σₓₓ + σᵧᵧ + σᵣᵣ)/3
   - Deviatoric stress: sᵢⱼ = σᵢⱼ - pδᵢⱼ`
      },
      {
        title: 'Strain',
        content: `Strain measures the deformation of a material relative to its original configuration. Like stress, strain is represented as a second-order tensor εᵢⱼ.

For small deformations, the strain tensor is defined as:

εᵢⱼ = (1/2)(∂uᵢ/∂xⱼ + ∂uⱼ/∂xᵢ)

Where u is the displacement vector.

The strain tensor can be written as a 3×3 matrix:

ε = [εₓₓ εₓᵧ εₓᵣ]
    [εᵧₓ εᵧᵧ εᵧᵣ]
    [εᵣₓ εᵣᵧ εᵣᵣ]

Key properties of the strain tensor:

1. Dimensionless (change in length per unit length)

2. Symmetry: εᵢⱼ = εⱼᵢ

3. Normal strain components (εᵢᵢ) represent elongation or contraction

4. Shear strain components (εᵢⱼ, i≠j) represent angular distortion

5. Principal strains: The eigenvalues of the strain tensor

6. Strain invariants: Similar to stress invariants, these remain unchanged under coordinate transformation

7. Volumetric strain: εᵥ = εₓₓ + εᵧᵧ + εᵣᵣ, representing the relative change in volume

For large deformations, more complex measures such as the Green-Lagrange strain tensor or the Euler-Almansi strain tensor are used.`
      },
      {
        title: 'Elasticity',
        content: `Elasticity describes the tendency of a material to return to its original shape after being deformed by external forces. The mathematical relationship between stress and strain in an elastic material is given by constitutive equations.

For a linear elastic material, Hooke's law applies:

σᵢⱼ = Cᵢⱼₖₗεₖₗ

Where Cᵢⱼₖₗ is the fourth-order elasticity tensor with up to 81 components. Due to symmetry considerations, this reduces to at most 21 independent elastic constants.

Special cases:

1. Isotropic materials: Materials with properties that are the same in all directions. The constitutive equation simplifies to:

   σᵢⱼ = λεₖₖδᵢⱼ + 2μεᵢⱼ

   Where:
   - λ and μ are Lamé parameters
   - μ is also called the shear modulus G
   - δᵢⱼ is the Kronecker delta

2. Common elastic constants:
   - Young's modulus (E): Measures stiffness in tension/compression
   - Poisson's ratio (ν): Ratio of transverse to axial strain
   - Bulk modulus (K): Resistance to volumetric deformation
   - Shear modulus (G): Resistance to shear deformation

   These constants are interrelated:
   - E = 2G(1+ν) = 3K(1-2ν)
   - ν = (3K-2G)/(6K+2G)
   - K = λ + 2G/3
   - λ = 2Gν/(1-2ν)

3. Orthotropic materials: Materials with different properties in three perpendicular directions (e.g., wood)

4. Anisotropic materials: Materials with properties that vary with direction, requiring more elastic constants`
      },
      {
        title: 'Stress-Strain Relationships',
        content: `The relationship between stress and strain characterizes the mechanical behavior of materials:

1. Linear elasticity:
   - Stress is proportional to strain (Hooke's law)
   - Deformation is completely recoverable upon unloading
   - Valid for small strains (typically <0.2%)
   - Stress-strain curve is a straight line with slope E (Young's modulus)

2. Nonlinear elasticity:
   - Stress-strain relationship is nonlinear but still recoverable
   - Common in rubber-like materials and biological tissues
   - Often modeled using hyperelastic constitutive equations

3. Viscoelasticity:
   - Time-dependent behavior combining elastic and viscous characteristics
   - Exhibits phenomena such as:
     * Creep: Increasing strain under constant stress
     * Stress relaxation: Decreasing stress under constant strain
     * Hysteresis: Different loading and unloading paths

4. Plasticity:
   - Permanent deformation beyond the elastic limit
   - Yield criteria determine the transition from elastic to plastic behavior:
     * Tresca criterion: Based on maximum shear stress
     * von Mises criterion: Based on distortion energy

5. Failure criteria:
   - Maximum normal stress theory
   - Maximum shear stress theory
   - Maximum strain energy theory
   - Maximum distortion energy theory

These relationships form the foundation for analyzing structural integrity, material selection, and design optimization in engineering applications.`
      }
    ]
  },

  'Constraint Forces': {
    title: 'Constraint Forces',
    description: 'Forces that restrict the motion of a mechanical system to follow specific paths or surfaces, playing a central role in the analysis of complex mechanical systems with restricted degrees of freedom.',
    sections: [
      {
        title: 'Constraints in Mechanical Systems',
        content: `Constraints are conditions that restrict the possible configurations or motions of a mechanical system. They reduce the number of degrees of freedom and can be expressed mathematically as equations involving the coordinates of the system.

Constraints arise in various physical situations:

1. Rigid bodies: The distances between particles in a rigid body remain constant

2. Rolling without slipping: A wheel rolling on a surface without sliding

3. Pendulums: The bob of a pendulum moves on a circular arc

4. Mechanical linkages: Connected rods or joints that restrict motion

5. Particles moving on surfaces: Motion restricted to a specific surface

Constraint forces are the forces that enforce these constraints. They do no work in ideal constraints (frictionless, rigid) and are often perpendicular to the allowed motion.`
      },
      {
        title: 'Holonomic Constraints',
        content: `Holonomic constraints can be expressed as equations relating the coordinates of the system and possibly time:

f(q₁, q₂, ..., qₙ, t) = 0

where q₁, q₂, ..., qₙ are generalized coordinates and t is time.

Key properties of holonomic constraints:

1. They can be integrated to give a relation between coordinates

2. They reduce the number of independent coordinates needed to specify the system configuration

3. The constraint equation represents a surface in configuration space

4. The number of degrees of freedom is reduced by the number of independent constraint equations

Examples of holonomic constraints:

1. Simple pendulum: r = l (constant length)

2. Particle on a surface: f(x, y, z) = 0

3. Two connected rigid bodies: fixed distance between connection points

4. Particle moving in a time-varying potential: explicit time-dependent constraint

Holonomic constraints allow for the use of Lagrangian mechanics with a reduced set of generalized coordinates.`
      },
      {
        title: 'Non-holonomic Constraints',
        content: `Non-holonomic constraints cannot be expressed as equations relating only the coordinates. They typically involve velocities and cannot be integrated to eliminate coordinates:

f(q₁, q₂, ..., qₙ, q̇₁, q̇₂, ..., q̇ₙ, t) = 0

where q̇₁, q̇₂, ..., q̇ₙ are generalized velocities.

Key properties of non-holonomic constraints:

1. They cannot be integrated to give a relation solely between coordinates

2. They restrict the possible velocities of the system but not its configuration space

3. They are often expressed as non-integrable differential equations

4. The system can reach any configuration, but not via all possible paths

Common examples of non-holonomic constraints:

1. Rolling without slipping: A wheel rolling on a surface has the constraint v = ωr, which cannot be integrated to eliminate coordinates

2. Knife-edge constraint: A blade that can only move in the direction of its edge

3. Conservation of angular momentum in some systems

4. Parallel parking a car: The car cannot move sideways

Non-holonomic constraints require special treatment in analytical mechanics, often using Lagrange multipliers or the principle of virtual work.`
      },
      {
        title: 'Mathematical Formulation',
        content: `The mathematical treatment of constraints in mechanics depends on their type:

1. For holonomic constraints, we can use Lagrangian mechanics with a reduced set of generalized coordinates, or introduce Lagrange multipliers:

   L = T - V - ∑λᵢfᵢ(q₁, q₂, ..., qₙ, t)

   where λᵢ are Lagrange multipliers and fᵢ are constraint equations.

2. For non-holonomic constraints of the form:

   ∑aᵢⱼq̇ⱼ + aᵢ = 0

   The equations of motion become:

   d/dt(∂L/∂q̇ᵢ) - ∂L/∂qᵢ = ∑λⱼaⱼᵢ

3. D'Alembert's principle for virtual displacements δqᵢ compatible with the constraints:

   ∑(mᵢaᵢ - Fᵢ)·δrᵢ = 0

4. Gauss's principle of least constraint:

   Z = ∑mᵢ(aᵢ - aᵢ⁽ᵘ⁾)²

   where aᵢ is the actual acceleration and aᵢ⁽ᵘ⁾ is the unconstrained acceleration.

The constraint forces themselves can be calculated from the Lagrange multipliers:

Fᵢ⁽ᶜ⁾ = ∑λⱼ∂fⱼ/∂qᵢ (for holonomic constraints)
Fᵢ⁽ᶜ⁾ = ∑λⱼaⱼᵢ (for non-holonomic constraints)`
      },
      {
        title: 'Applications and Examples',
        content: `Constraint forces and their classification have important applications in various areas of mechanics and engineering:

1. Robotics and mechanism design:
   - Robot arm kinematics involves multiple constraints
   - Mechanism synthesis requires understanding constraint types
   - Path planning for non-holonomic systems (e.g., wheeled robots)

2. Vehicle dynamics:
   - Automobile suspension systems
   - Bicycle and motorcycle dynamics
   - Aircraft landing gear systems

3. Biomechanics:
   - Joint constraints in human and animal movement
   - Muscle force distribution problems
   - Prosthetic limb design

4. Molecular dynamics:
   - Bond length and angle constraints
   - Conformational analysis of molecules

Example: Rolling disk

A disk rolling without slipping on a horizontal surface is a classic example of a non-holonomic constraint. The constraint equation is:

ẋ = Rφ̇cos(θ)
ẏ = Rφ̇sin(θ)

where (x,y) is the position of the center, θ is the orientation angle, φ is the rotation angle, and R is the radius. These constraints cannot be integrated to eliminate coordinates, making the system non-holonomic.

The analysis of such systems requires specialized techniques from non-holonomic mechanics, highlighting the importance of distinguishing between holonomic and non-holonomic constraints.`
      }
    ]
  },

  'Canonical Transformations': {
    title: 'Canonical Transformations',
    description: 'Mathematical transformations in phase space that preserve the form of Hamilton\'s equations, allowing for simplified analysis of complex mechanical systems.',
    sections: [
      {
        title: 'Definition and Properties',
        content: `A canonical transformation is a change of variables from one set of canonical coordinates (q, p) to another set (Q, P):

(q, p) → (Q, P)

Where:
- q, Q are generalized position coordinates
- p, P are conjugate momenta

The transformation preserves the form of Hamilton's equations:
dq/dt = ∂H/∂p,  dp/dt = -∂H/∂q  →  dQ/dt = ∂K/∂P,  dP/dt = -∂K/∂Q

Where K is the new Hamiltonian, possibly with a different functional form than H.

A transformation is canonical if it preserves the Poisson brackets:
{Qᵢ, Pⱼ} = δᵢⱼ,  {Qᵢ, Qⱼ} = 0,  {Pᵢ, Pⱼ} = 0

This is equivalent to preserving the symplectic structure of phase space.`
      },
      {
        title: 'Generating Functions',
        content: `Canonical transformations can be generated by scalar functions F(q, p, Q, P, t). There are four types of generating functions:

F₁(q, Q, t): p = ∂F₁/∂q,  P = -∂F₁/∂Q,  K = H + ∂F₁/∂t
F₂(q, P, t): p = ∂F₂/∂q,  Q = ∂F₂/∂P,  K = H + ∂F₂/∂t
F₃(p, Q, t): q = -∂F₃/∂p,  P = -∂F₃/∂Q,  K = H + ∂F₃/∂t
F₄(p, P, t): q = -∂F₄/∂p,  Q = ∂F₄/∂P,  K = H + ∂F₄/∂t

Each type corresponds to a different choice of independent variables.

The new Hamiltonian K differs from H only if the generating function explicitly depends on time.`
      },
      {
        title: 'Symplectic Structure',
        content: `The symplectic structure is a mathematical formulation that underlies canonical transformations.

A transformation is canonical if its Jacobian matrix J satisfies:
JᵀΩJ = Ω

Where Ω is the symplectic matrix:
Ω = [  0   I  ]
    [ -I   0  ]

And I is the identity matrix.

This condition ensures that the transformation preserves the volume in phase space (Liouville's theorem) and the Poisson bracket structure.

The symplectic structure connects classical mechanics to modern differential geometry and provides a bridge to quantum mechanics.`
      },
      {
        title: 'Applications',
        content: `Canonical transformations have several important applications:

1. Solving Hamilton-Jacobi equation: Finding a transformation where the new Hamiltonian K = 0, making the new coordinates constants of motion

2. Action-angle variables: Transforming to coordinates where one set (angles) evolves uniformly in time and the other set (actions) remains constant

3. Perturbation theory: Simplifying nearly integrable systems by transforming away non-integrable terms

4. Canonical perturbation theory: Analyzing weakly perturbed systems

5. Numerical methods: Symplectic integrators that preserve the canonical structure in numerical simulations

These techniques are used in celestial mechanics, plasma physics, accelerator physics, and quantum field theory.`
      }
    ]
  },

  'Dispersion Relation': {
    title: 'Dispersion Relation',
    description: 'The mathematical function that relates the frequency or angular frequency of a wave to its wavenumber or wave vector, characterizing how waves propagate through a medium.',
    sections: [
      {
        title: 'Basic Concept',
        content: `The dispersion relation is a function that connects the angular frequency ω (omega) of a wave to its wavenumber k:

ω = ω(k)

where:
- ω = 2πf is the angular frequency (radians per second)
- k = 2π/λ is the wavenumber (radians per meter)
- f is the frequency (Hz)
- λ is the wavelength (m)

This relation is determined by the physical properties of the medium and the type of wave. It describes how different frequency components of a wave travel at different speeds, which can lead to wave dispersion - the separation of a wave into its component frequencies.

The phase velocity of a wave is given by:

vₚ = ω/k

The group velocity, which describes the speed at which energy or information travels, is:

vg = dω/dk

In non-dispersive media, vₚ = vg (constant for all frequencies), while in dispersive media, these velocities differ and depend on frequency.`
      },
      {
        title: 'Linear and Nonlinear Dispersion',
        content: `Dispersion relations can be classified based on their mathematical form:

1. Linear dispersion relation: ω = vk
   - Phase velocity equals group velocity: vₚ = vg = v
   - Wave packets maintain their shape as they propagate
   - Examples: Light waves in vacuum, sound waves in ideal gases (at low frequencies)
   - Wave equation: ∇²ψ = (1/v²)(∂²ψ/∂t²)

2. Quadratic dispersion relation: ω = ak²
   - Common in quantum mechanics (free particle) and diffusion processes
   - Schrödinger equation: iℏ∂ψ/∂t = -(ℏ²/2m)∇²ψ
   - Group velocity depends on wavenumber: vg = 2ak

3. General nonlinear dispersion: ω = ω(k) (nonlinear function)
   - Phase velocity varies with wavelength: vₚ = ω(k)/k
   - Group velocity differs from phase velocity: vg = dω/dk
   - Wave packets spread out over time
   - Examples: Water waves, electromagnetic waves in dispersive media

The mathematical form of the dispersion relation directly determines how waves of different frequencies propagate and interact in a medium.`
      },
      {
        title: 'Examples in Physical Systems',
        content: `Dispersion relations appear in many physical systems:

1. Deep water waves:
   ω = √(gk)
   where g is the gravitational acceleration
   - Phase velocity: vₚ = √(g/k) = √(gλ/2π)
   - Group velocity: vg = vₚ/2
   - Longer wavelengths travel faster

2. Shallow water waves:
   ω = k√(gh)
   where h is the water depth
   - Non-dispersive: vₚ = vg = √(gh)

3. Electromagnetic waves in plasma:
   ω² = ωₚ² + c²k²
   where ωₚ is the plasma frequency
   - Cutoff frequency: no propagation below ωₚ
   - Approaches vacuum behavior at high frequencies

4. Electron waves in solids:
   ω = ω₀ - 2γ[cos(kₓa) + cos(kᵧa) + cos(kᵤa)]
   where ω₀, γ, and a are material parameters
   - Band structure determines electrical properties

5. Phonons in crystal lattices:
   ω = ωₘₐₓ sin(ka/2)
   where ωₘₐₓ is the maximum frequency
   - Acoustic and optical branches with different dispersion characteristics

These examples show how the dispersion relation captures the essential physics of wave propagation in different media.`
      },
      {
        title: 'Dispersion and Wave Packets',
        content: `Wave packets are localized wave disturbances formed by the superposition of waves with different frequencies. Their behavior is governed by the dispersion relation:

1. Formation of a wave packet:
   ψ(x,t) = ∫ A(k)eⁱ(kx-ω(k)t) dk
   where A(k) is the amplitude distribution in k-space

2. In non-dispersive media (ω = vk):
   - All frequency components travel at the same speed
   - Wave packet maintains its shape while propagating at velocity v

3. In dispersive media (ω is a nonlinear function of k):
   - Different frequency components travel at different speeds
   - Wave packet spreads out over time
   - The peak of the wave packet moves at the group velocity vg = dω/dk

4. Gaussian wave packet evolution:
   - Initial width σ₀
   - Width after time t: σ(t) = σ₀√[1 + (t/tₛ)²]
   - Where tₛ = mσ₀²/ℏ for a quantum particle

The dispersion of wave packets is important in quantum mechanics, signal transmission, and optical communications, where maintaining signal integrity requires managing dispersion effects.`
      },
      {
        title: 'Applications and Significance',
        content: `Understanding dispersion relations has important applications across physics and engineering:

1. Optical communications:
   - Chromatic dispersion in optical fibers causes signal distortion
   - Dispersion-shifted fibers and dispersion compensation techniques minimize these effects
   - Wavelength-division multiplexing relies on understanding dispersion

2. Acoustics and ultrasonics:
   - Dispersion affects sound propagation in complex media
   - Ultrasonic testing and medical imaging account for tissue-specific dispersion

3. Materials characterization:
   - Measuring dispersion relations provides information about material properties
   - Techniques like neutron scattering reveal phonon dispersion in solids

4. Quantum mechanics:
   - Energy-momentum relationship for particles: E = ℏω, p = ℏk
   - Dispersion relation determines particle dynamics
   - Band structure in solids determines electronic properties

5. Wave propagation in complex media:
   - Metamaterials with engineered dispersion relations
   - Photonic crystals with photonic band gaps
   - Negative index materials with unusual dispersion properties

The dispersion relation is a key concept that connects the microscopic properties of a medium to the macroscopic behavior of waves, making it essential for understanding and controlling wave phenomena in various physical systems.`
      }
    ]
  },

  'Phase & Group Velocity': {
    title: 'Phase & Group Velocity',
    description: 'Two distinct velocities that characterize wave propagation: phase velocity describes how individual wave crests move, while group velocity describes how the overall wave envelope or energy propagates.',
    sections: [
      {
        title: 'Definitions and Basic Concepts',
        content: `Phase velocity (vₚ) and group velocity (vg) are two distinct but related concepts in wave physics:

1. Phase Velocity (vₚ):
   - The speed at which a point of constant phase travels in a wave
   - Mathematically defined as: vₚ = ω/k
   - Where ω is the angular frequency and k is the wavenumber
   - Represents how fast individual wave crests or troughs move

2. Group Velocity (vg):
   - The speed at which the overall envelope or energy of a wave packet propagates
   - Mathematically defined as: vg = dω/dk
   - Represents the derivative of the dispersion relation
   - Often corresponds to the speed of information or energy transport

These velocities can be equal or different depending on the medium's dispersion properties.`
      },
      {
        title: 'Mathematical Formulation',
        content: `The mathematical relationship between phase and group velocities can be derived from the dispersion relation ω(k):

1. For a single-frequency wave with angular frequency ω and wavenumber k:
   - The wave function can be written as: ψ(x,t) = A·cos(kx - ωt + φ)
   - Phase velocity: vₚ = ω/k

2. For a wave packet composed of multiple frequencies:
   - The wave function is: ψ(x,t) = ∫ A(k)·e^i(kx-ω(k)t) dk
   - Group velocity: vg = dω/dk

3. Relationship between the velocities:
   - vg = vₚ + k·(dvₚ/dk)
   - In a non-dispersive medium where vₚ is constant: vg = vₚ
   - In a dispersive medium: vg ≠ vₚ

4. For a power-law dispersion relation (ω ∝ kⁿ):
   - vg = n·vₚ
   - For example, in deep water waves (n = 1/2): vg = vₚ/2`
      },
      {
        title: 'Physical Interpretation',
        content: `The physical meaning of phase and group velocities can be understood through various perspectives:

1. Wave Packet Visualization:
   - A wave packet consists of multiple waves with slightly different frequencies
   - The envelope of this packet moves at the group velocity
   - Individual oscillations within the envelope move at the phase velocity
   - When vg < vₚ: waves appear to move through the envelope from back to front
   - When vg > vₚ: waves appear to move through the envelope from front to back

2. Energy and Information Transport:
   - Group velocity typically represents the speed at which energy and information travel
   - In most physical systems, energy cannot propagate faster than the group velocity
   - This is consistent with causality requirements

3. Interference Patterns:
   - When two waves with slightly different frequencies interfere, they create a beat pattern
   - The beat pattern moves at the group velocity
   - The carrier wave within the beat pattern moves at the phase velocity`
      },
      {
        title: 'Examples in Physical Systems',
        content: `Phase and group velocities manifest differently across various physical systems:

1. Electromagnetic Waves in Vacuum:
   - Non-dispersive: vₚ = vg = c (speed of light)
   - Both velocities are independent of frequency

2. Electromagnetic Waves in Dispersive Media:
   - Glass and other transparent materials: vₚ > vg
   - Optical fibers: vg varies with wavelength, causing pulse spreading
   - Near absorption resonances: vₚ can even become negative

3. Water Waves:
   - Deep water waves: vₚ = √(g/k), vg = vₚ/2
   - Shallow water waves: vₚ = vg = √(gh) (non-dispersive)
   - Intermediate depths: complex dispersion relation

4. Quantum Mechanical Waves:
   - Free particle: ω = ℏk²/2m, vg = ℏk/m (proportional to momentum)
   - The group velocity corresponds to the classical particle velocity
   - Phase velocity has no direct classical analog

5. Plasma Waves:
   - Various wave modes with different dispersion relations
   - Some modes have frequency cutoffs where vg approaches zero
   - Whistler waves: vg decreases with increasing frequency`
      },
      {
        title: 'Applications and Significance',
        content: `Understanding phase and group velocities has important applications across science and engineering:

1. Optical Communications:
   - Pulse broadening in optical fibers due to group velocity dispersion
   - Dispersion compensation techniques to maintain signal integrity
   - Slow light and fast light phenomena for optical buffering

2. Wave Propagation in Complex Media:
   - Metamaterials with engineered dispersion properties
   - Negative index materials where vₚ and vg have opposite signs
   - Photonic crystals with band gaps and unusual dispersion

3. Quantum Mechanics:
   - Wave packet spreading in time
   - Tunneling phenomena and apparent superluminal effects
   - Connection to the uncertainty principle

4. Seismology:
   - Different seismic waves (P-waves, S-waves, surface waves) with distinct velocities
   - Dispersion-based methods for subsurface imaging

5. Signal Processing:
   - Filter design based on group delay considerations
   - Phase and group delay distortion in communication systems
   - Wavelet analysis and time-frequency representations

The distinction between phase and group velocities is not merely theoretical but has practical implications for how waves behave and how we can manipulate them for technological applications.`
      }
    ]
  },

  'Standing vs. Traveling Waves': {
    title: 'Standing vs. Traveling Waves',
    description: 'A comparison of two fundamental wave behaviors: traveling waves that propagate through space, and standing waves that remain fixed in position with distinct nodes and antinodes.',
    sections: [
      {
        title: 'Mathematical Description',
        content: `Traveling and standing waves can be described mathematically as solutions to the wave equation:

1. Traveling Wave:
   - One-dimensional form: y(x,t) = A·sin(kx - ωt + φ)
   - Represents a wave moving in the positive x-direction with:
     * A = amplitude
     * k = 2π/λ = wavenumber
     * ω = 2πf = angular frequency
     * φ = phase constant
   - For a wave traveling in the negative x-direction: y(x,t) = A·sin(kx + ωt + φ)

2. Standing Wave:
   - One-dimensional form: y(x,t) = 2A·sin(kx)·cos(ωt)
   - Can be derived as the superposition of two traveling waves moving in opposite directions:
     y(x,t) = A·sin(kx - ωt) + A·sin(kx + ωt) = 2A·sin(kx)·cos(ωt)
   - The spatial part sin(kx) determines the wave shape
   - The temporal part cos(ωt) causes all points to oscillate in phase

These mathematical forms highlight the key difference: traveling waves propagate through space, while standing waves oscillate in place.`
      },
      {
        title: 'Key Characteristics',
        content: `Traveling and standing waves exhibit distinct characteristics:

1. Traveling Waves:
   - Energy propagates in the direction of wave motion
   - All points along the wave undergo the same motion but with phase differences
   - Wave shape moves with phase velocity v = ω/k
   - Amplitude is uniform throughout the medium (in ideal cases)
   - Examples: water waves on a lake, sound waves in air, electromagnetic waves

2. Standing Waves:
   - Energy does not propagate (except during formation and decay)
   - Characterized by nodes and antinodes:
     * Nodes: fixed points where the amplitude is always zero
     * Antinodes: fixed points where the amplitude is maximum
   - Adjacent points between nodes oscillate with different amplitudes but in phase
   - Nodes occur at positions where sin(kx) = 0, or x = nπ/k = nλ/2 (n = 0, 1, 2, ...)
   - Antinodes occur at positions where sin(kx) = ±1, or x = (2n+1)π/2k = (2n+1)λ/4
   - The distance between adjacent nodes is λ/2
   - Examples: vibrating strings, acoustic resonance in wind instruments, electromagnetic waves in cavities`
      },
      {
        title: 'Formation and Boundary Conditions',
        content: `Standing waves typically form under specific conditions:

1. Reflection and Interference:
   - Standing waves form when traveling waves reflect and interfere with themselves
   - Common in bounded media where waves reflect at boundaries
   - Perfect reflection with 180° phase shift creates ideal standing waves

2. Boundary Conditions:
   - Fixed End (Dirichlet boundary condition): y = 0 at the boundary (node)
   - Free End (Neumann boundary condition): dy/dx = 0 at the boundary (antinode)
   - Mixed/Robin boundary conditions: combination of displacement and derivative constraints

3. Resonance and Quantization:
   - Standing waves only form at specific frequencies determined by boundary conditions
   - For a string fixed at both ends (length L), the allowed wavelengths are:
     λₙ = 2L/n (n = 1, 2, 3, ...)
   - The corresponding frequencies form a harmonic series:
     fₙ = nv/2L = nf₁ (n = 1, 2, 3, ...)
   - The lowest frequency f₁ is called the fundamental frequency
   - Higher frequencies are called overtones or harmonics

4. Two and Three Dimensions:
   - Standing waves can form in 2D and 3D systems (membranes, cavities)
   - Nodes become nodal lines or surfaces
   - More complex patterns emerge (Chladni figures on vibrating plates)`
      },
      {
        title: 'Energy Considerations',
        content: `The energy behavior of traveling and standing waves differs significantly:

1. Traveling Waves:
   - Energy flows continuously in the direction of propagation
   - Energy density is uniform throughout the medium (in ideal cases)
   - Energy flux is given by the Poynting vector (electromagnetic waves) or intensity (mechanical waves)
   - Average energy per unit length: E = ½μω²A² (μ = linear mass density)

2. Standing Waves:
   - No net energy flow (except during formation and decay)
   - Energy oscillates between potential and kinetic forms
   - Energy density varies with position - maximum at antinodes, zero at nodes
   - Total energy oscillates sinusoidally in time at twice the wave frequency
   - Average energy per unit length: E = ½μω²A² (same as traveling wave of amplitude A)

3. Energy Distribution:
   - In traveling waves, energy is distributed uniformly
   - In standing waves, energy is concentrated at antinodes
   - This concentration can lead to enhanced effects in applications like acoustic levitation or laser cavities`
      },
      {
        title: 'Applications and Examples',
        content: `Standing and traveling waves have numerous applications across physics and engineering:

1. Musical Instruments:
   - String instruments (violin, guitar): standing waves on strings
   - Wind instruments (flute, trumpet): standing sound waves in air columns
   - Percussion instruments (drums): standing waves on membranes

2. Electromagnetic Systems:
   - Transmission lines: can support both traveling and standing waves
   - Waveguides and resonant cavities: standing electromagnetic waves
   - Antennas: standing waves on dipole antennas, traveling waves on traveling wave antennas

3. Quantum Mechanics:
   - Electron standing waves in atoms (orbitals)
   - Particle in a box: quantized standing matter waves
   - Scanning tunneling microscopy: imaging electron standing waves

4. Acoustics and Vibration:
   - Room acoustics: standing waves create room modes
   - Mechanical resonance: standing waves in structures
   - Acoustic levitation: standing sound waves trap particles at pressure nodes

5. Fluid Dynamics:
   - Seiches: standing waves in enclosed bodies of water
   - Tsunami: primarily traveling waves that can form standing patterns in bays

Understanding the distinction between standing and traveling waves is essential for analyzing wave behavior in bounded and unbounded systems across all branches of physics.`
      }
    ]
  },

  'Harmonic Waves': {
    title: 'Harmonic Waves',
    description: 'Waves with sinusoidal shape that are solutions to the linear wave equation, characterized by amplitude, wavelength, frequency, and phase.',
    sections: [
      {
        title: 'Mathematical Description',
        content: `Harmonic waves are sinusoidal waves that represent the simplest solutions to the linear wave equation. They can be expressed mathematically as:

y(x,t) = A\sin(kx - \omega t + \phi)

where:
- y(x,t) is the displacement at position x and time t
- A is the amplitude (maximum displacement from equilibrium)
- k = 2\pi/\lambda is the wavenumber (\lambda is the wavelength)
- \omega = 2\pi f is the angular frequency (f is the frequency)
- \phi is the phase constant

Alternative forms include:
- Using cosine: y(x,t) = A\cos(kx - \omega t + \phi')
- Complex exponential: y(x,t) = Re[Ae^{i(kx - \omega t + \phi)}]

The wave propagates in the positive x-direction with phase velocity v_p = \omega/k. For propagation in the negative x-direction, the equation becomes:

y(x,t) = A\sin(kx + \omega t + \phi)`
      },
      {
        title: 'Properties and Parameters',
        content: `Harmonic waves are characterized by several key parameters:

1. Amplitude (A):
   - Measures the maximum displacement from equilibrium
   - Determines the energy carried by the wave (proportional to A²)
   - Remains constant for an ideal harmonic wave in a non-dissipative medium

2. Wavelength (\lambda) and Wavenumber (k):
   - Wavelength: spatial period of the wave (distance between adjacent crests)
   - Wavenumber: k = 2\pi/\lambda (spatial frequency, radians per unit length)
   - Determines the spatial scale of the wave pattern

3. Frequency (f) and Angular Frequency (\omega):
   - Frequency: number of oscillations per unit time (Hz)
   - Angular frequency: \omega = 2\pi f (radians per unit time)
   - Determines the temporal scale of the wave pattern

4. Phase (\phi):
   - Determines the initial condition of the wave at t = 0 and x = 0
   - Shift in phase corresponds to a shift in the wave pattern
   - Phase differences are important when considering wave interference

5. Wave Speed (v):
   - Phase velocity: v_p = \omega/k = \lambda f
   - Depends on the medium properties
   - For mechanical waves: v = √(elastic property/inertial property)
   - For electromagnetic waves in vacuum: v = c (speed of light)`
      },
      {
        title: 'Physical Significance',
        content: `Harmonic waves have special significance in physics for several reasons:

1. Fundamental Solutions:
   - They are the simplest solutions to the linear wave equation
   - Any solution to the linear wave equation can be expressed as a superposition of harmonic waves (Fourier's theorem)
   - They maintain their shape as they propagate (unlike non-linear waves)

2. Energy Transport:
   - Harmonic waves transport energy without transporting matter
   - Energy density is proportional to the square of the amplitude
   - Energy flux (power per unit area) is proportional to A²v

3. Wave Phenomena:
   - Serve as the basis for understanding interference, diffraction, and other wave phenomena
   - Two harmonic waves with the same frequency produce interference patterns
   - Harmonic waves exhibit the Doppler effect when source or observer is moving

4. Relation to Simple Harmonic Motion:
   - Each point in a harmonic wave undergoes simple harmonic motion
   - The phase of this motion varies with position
   - This connection links wave physics to oscillatory systems`
      },
      {
        title: 'Examples in Physical Systems',
        content: `Harmonic waves appear in many physical systems:

1. Mechanical Waves:
   - Transverse waves on a string: y(x,t) = A\sin(kx - \omega t), where v = √(T/μ)
     (T = tension, μ = linear mass density)
   - Sound waves in air: p(x,t) = p_0 + A\sin(kx - \omega t), where v = √(B/ρ)
     (p_0 = ambient pressure, B = bulk modulus, ρ = density)

2. Electromagnetic Waves:
   - Electric field: E(x,t) = E_0\sin(kx - \omega t)
   - Magnetic field: B(x,t) = B_0\sin(kx - \omega t)
   - Propagate at speed c in vacuum
   - Electric and magnetic fields are perpendicular to each other and to the direction of propagation

3. Water Waves:
   - Small amplitude surface waves: η(x,t) = A\sin(kx - \omega t)
   - Deep water dispersion relation: ω² = gk
   - Shallow water: v = √(gh) (h = water depth)

4. Quantum Mechanical Waves:
   - Free particle wavefunction: ψ(x,t) = Ae^{i(kx - ωt)}
   - de Broglie wavelength: λ = h/p (h = Planck's constant, p = momentum)`
      },
      {
        title: 'Limitations and Extensions',
        content: `While harmonic waves are mathematically elegant and widely applicable, they have limitations:

1. Idealized Model:
   - Real-world waves often deviate from perfect sinusoidal shape
   - Dissipation and dispersion can modify wave behavior
   - Nonlinear effects become important at high amplitudes

2. Dispersion:
   - In dispersive media, different frequency components travel at different speeds
   - Harmonic waves maintain their shape, but wave packets spread out
   - Dispersion relation: ω = ω(k) is not linear

3. Extensions to Harmonic Wave Theory:
   - Damped harmonic waves: y(x,t) = Ae^{-γx}\sin(kx - ωt)
   - Nonlinear waves: solutions to nonlinear wave equations (solitons, shock waves)
   - Evanescent waves: exponentially decaying waves in forbidden regions

4. Wave Packets:
   - Localized disturbances formed by superposition of harmonic waves
   - Gaussian wave packets: envelope with Gaussian shape
   - Uncertainty relation between spatial and momentum spread

Despite these limitations, harmonic waves provide the foundation for understanding more complex wave phenomena through the principles of superposition and Fourier analysis.`
      }
    ]
  },

  'Wave Impedance': {
    title: 'Wave Impedance',
    description: 'A property of a medium that characterizes the relationship between the driving force and the resulting velocity in a wave, affecting wave transmission and reflection at boundaries.',
    sections: [
      {
        title: 'Basic Concept',
        content: `Wave impedance (Z) is a measure of how a medium resists the propagation of waves. It is defined as the ratio of an appropriate driving force to the resulting velocity:

Z = (Driving Force) / (Particle Velocity)

The specific form of wave impedance depends on the type of wave and medium:

1. Mechanical Waves on Strings:
   - Z = √(Tμ)
   - Where T is tension and μ is linear mass density
   - Units: kg/s

2. Acoustic Waves in Fluids:
   - Z = ρc
   - Where ρ is density and c is sound speed
   - Units: kg/(m²·s) or rayl

3. Electromagnetic Waves:
   - Z = √(μ/ε)
   - Where μ is magnetic permeability and ε is electric permittivity
   - Units: ohms (Ω)
   - In vacuum: Z₀ = √(μ₀/ε₀) ≈ 377 Ω (characteristic impedance of free space)

Wave impedance is a characteristic property of the medium that affects how waves propagate, reflect, and transmit at boundaries.`
      },
      {
        title: 'Mathematical Formulation',
        content: `The mathematical formulation of wave impedance varies by wave type:

1. For Transverse Waves on a String:
   - Wave equation: ∂²y/∂t² = (T/μ)·∂²y/∂x²
   - Wave speed: v = √(T/μ)
   - Impedance: Z = √(Tμ)
   - Force to velocity relationship: F = Z·v

2. For Sound Waves in a Fluid:
   - Acoustic impedance: Z = ρc
   - Pressure to particle velocity relationship: p = Z·v
   - For a plane wave: p = ρc·v
   - Specific acoustic impedance depends on frequency and geometry for non-plane waves

3. For Electromagnetic Waves:
   - Wave impedance: Z = E/H = √(μ/ε)
   - Where E is electric field and H is magnetic field
   - For plane waves in vacuum: Z₀ = √(μ₀/ε₀) = 1/(ε₀c) ≈ 377 Ω
   - In a medium with refractive index n: Z = Z₀/n

4. General Wave Impedance Properties:
   - For a traveling wave: Z = (Energy Density)/(Energy Flux)
   - Related to wave energy: Z = (Energy Density)/(Power/Area)
   - Dimensional analysis: [Z] = [Force]·[Time]/[Area] or [Mass]/([Area]·[Time])`
      },
      {
        title: 'Impedance Matching and Mismatch',
        content: `When waves encounter a boundary between media with different impedances, reflection and transmission occur:

1. Reflection and Transmission Coefficients:
   - Reflection coefficient: r = (Z₂ - Z₁)/(Z₂ + Z₁)
   - Transmission coefficient: t = 2Z₂/(Z₂ + Z₁)
   - Power reflection coefficient: R = |r|² = |(Z₂ - Z₁)/(Z₂ + Z₁)|²
   - Power transmission coefficient: T = 1 - R = 4Z₁Z₂/(Z₁ + Z₂)²

2. Impedance Matching:
   - When Z₁ = Z₂: perfect transmission (r = 0, t = 1)
   - Used in electrical circuits, acoustics, and optics to maximize power transfer
   - Methods include quarter-wave transformers, tapered sections, and matching networks

3. Special Cases:
   - Z₂ >> Z₁ (hard boundary): r ≈ 1 (phase inversion for mechanical waves)
   - Z₂ << Z₁ (soft boundary): r ≈ -1 (no phase change)
   - Z₂ = 0 (free end): r = -1 (complete reflection with phase inversion)
   - Z₂ = ∞ (fixed end): r = 1 (complete reflection without phase change)

4. Multiple Reflections:
   - Standing waves form in bounded media due to multiple reflections
   - Resonance occurs when the length equals an integer multiple of half-wavelengths
   - Transmission line theory describes wave behavior in systems with multiple reflections`
      },
      {
        title: 'Applications in Different Fields',
        content: `Wave impedance concepts apply across various fields of physics and engineering:

1. Acoustics:
   - Acoustic impedance matching in musical instruments
   - Design of concert halls and sound studios
   - Ultrasound imaging and therapy (impedance matching gels)
   - Noise control and sound absorption materials

2. Electrical Engineering:
   - Transmission line design (characteristic impedance Z₀)
   - Antenna design and matching networks
   - Waveguides and resonant cavities
   - Impedance matching for maximum power transfer

3. Optics:
   - Anti-reflection coatings (quarter-wave layers)
   - Fiber optic coupling
   - Laser cavity design
   - Metamaterials with engineered impedance properties

4. Mechanical Systems:
   - Vibration isolation
   - Mechanical impedance matching for energy harvesting
   - Structural acoustics and vibration control
   - Seismic wave propagation and isolation

5. Medical Applications:
   - Ultrasound imaging (acoustic impedance differences create contrast)
   - Tissue characterization based on acoustic impedance
   - Impedance cardiography
   - Electrical impedance tomography`
      },
      {
        title: 'Complex Impedance and Frequency Dependence',
        content: `In many real systems, wave impedance is complex-valued and frequency-dependent:

1. Complex Impedance:
   - Z = R + jX (where j = √(-1))
   - Real part (R): represents dissipation or resistance
   - Imaginary part (X): represents reactance (energy storage)
   - Phase angle: φ = tan⁻¹(X/R)

2. Frequency Dependence:
   - In dispersive media, wave speed varies with frequency
   - Impedance becomes frequency-dependent: Z = Z(ω)
   - Examples: electrical transmission lines, viscoelastic materials, acoustic horns

3. Mechanical and Acoustic Systems:
   - Mechanical impedance: Z_m = F/v (force/velocity)
   - Mobility: Y = 1/Z_m = v/F (velocity/force)
   - Specific acoustic impedance: Z_s = p/v (pressure/particle velocity)
   - Acoustic admittance: Y_a = 1/Z_s = v/p

4. Distributed Systems:
   - Transmission line impedance: Z(x) varies with position
   - Tapered acoustic horns: gradually changing impedance for efficient coupling
   - Impedance transformers: devices that convert between different impedance levels

The complex and frequency-dependent nature of impedance is essential for understanding wave behavior in lossy and dispersive media, where simple models of perfect reflection and transmission no longer apply.`
      }
    ]
  },

  'Reflection & Transmission': {
    title: 'Reflection & Transmission',
    description: 'Phenomena that occur when waves encounter a boundary between two media, where part of the wave energy is reflected and part is transmitted according to boundary conditions.',
    sections: [
      {
        title: 'Basic Principles',
        content: `When a wave encounters a boundary between two different media, part of the wave energy is reflected back into the first medium, and part is transmitted into the second medium. This behavior is governed by:

1. Conservation of Energy:
   - The sum of reflected and transmitted energy equals the incident energy (in lossless media)
   - Power reflection coefficient (R) + power transmission coefficient (T) = 1

2. Boundary Conditions:
   - Continuity requirements at the interface between media
   - For mechanical waves: displacement and force must be continuous
   - For electromagnetic waves: tangential components of E and H fields must be continuous

3. Impedance Mismatch:
   - The degree of reflection depends on the impedance mismatch between media
   - Reflection coefficient: r = (Z₂ - Z₁)/(Z₂ + Z₁)
   - Transmission coefficient: t = 2Z₂/(Z₂ + Z₁)
   - Where Z₁ and Z₂ are the wave impedances of the first and second media

4. Phase Changes:
   - Reflection from a higher impedance medium: no phase change
   - Reflection from a lower impedance medium: 180° phase change
   - Transmitted wave: phase change depends on the ratio of wave speeds`
      },
      {
        title: 'Mechanical Waves',
        content: `Reflection and transmission of mechanical waves (such as sound waves or waves on strings) follow these principles:

1. Normal Incidence on Strings:
   - For a wave on a string encountering a junction with another string:
   - Reflection coefficient: r = (μ₂ - μ₁)/(μ₂ + μ₁) (μ = linear mass density)
   - Transmission coefficient: t = 2μ₂/(μ₂ + μ₁)
   - Fixed end (μ₂ → ∞): r = 1 (complete reflection, no phase change)
   - Free end (μ₂ → 0): r = -1 (complete reflection, 180° phase change)

2. Sound Waves at Interfaces:
   - Acoustic reflection coefficient: r = (Z₂ - Z₁)/(Z₂ + Z₁) (Z = ρc = acoustic impedance)
   - Intensity reflection coefficient: R = |r|² = |(Z₂ - Z₁)/(Z₂ + Z₁)|²
   - Intensity transmission coefficient: T = 1 - R = 4Z₁Z₂/(Z₁ + Z₂)²
   - Examples: air-water interface (strong reflection), matching layers in ultrasound

3. Mechanical Impedance Matching:
   - Gradual impedance transitions reduce reflection
   - Quarter-wavelength matching layers
   - Tapered mechanical structures
   - Applications: musical instruments, vibration isolation, ultrasound transducers`
      },
      {
        title: 'Electromagnetic Waves and Fresnel Equations',
        content: `The reflection and transmission of electromagnetic waves are described by the Fresnel equations, which account for polarization and angle of incidence:

1. Normal Incidence:
   - Reflection coefficient: r = (n₂ - n₁)/(n₂ + n₁) (n = refractive index)
   - Transmission coefficient: t = 2n₁/(n₂ + n₁)
   - Power reflection: R = |r|² = |(n₂ - n₁)/(n₂ + n₁)|²
   - Power transmission: T = 1 - R = 4n₁n₂/(n₁ + n₂)²

2. Oblique Incidence - s-polarization (TE mode):
   - Electric field perpendicular to the plane of incidence
   - Reflection coefficient: r_s = (n₁cosθᵢ - n₂cosθₜ)/(n₁cosθᵢ + n₂cosθₜ)
   - Transmission coefficient: t_s = 2n₁cosθᵢ/(n₁cosθᵢ + n₂cosθₜ)
   - Where θᵢ = angle of incidence, θₜ = angle of transmission

3. Oblique Incidence - p-polarization (TM mode):
   - Electric field parallel to the plane of incidence
   - Reflection coefficient: r_p = (n₂cosθᵢ - n₁cosθₜ)/(n₂cosθᵢ + n₁cosθₜ)
   - Transmission coefficient: t_p = 2n₁cosθᵢ/(n₂cosθᵢ + n₁cosθₜ)

4. Brewster's Angle:
   - Angle at which r_p = 0 (no reflection for p-polarized light)
   - Given by: tanθᵦ = n₂/n₁
   - Used in polarizing filters and laser applications

5. Total Internal Reflection:
   - Occurs when light travels from higher to lower refractive index medium
   - Critical angle: θc = sin⁻¹(n₂/n₁) when n₁ > n₂
   - Beyond critical angle, all energy is reflected (R = 1)
   - Applications: fiber optics, prisms, diamond brilliance`
      },
      {
        title: 'Boundary Conditions',
        content: `Boundary conditions are mathematical requirements that must be satisfied at interfaces between different media:

1. Mechanical Waves:
   - Continuity of displacement: y₁ = y₂ at the boundary
   - Continuity of force (or tension): T₁(∂y₁/∂x) = T₂(∂y₂/∂x)
   - For fluid interfaces: pressure and normal velocity components are continuous

2. Electromagnetic Waves:
   - Tangential components of E-field are continuous: n̂ × (E₂ - E₁) = 0
   - Tangential components of H-field are continuous: n̂ × (H₂ - H₁) = Js (surface current)
   - Normal components of D-field: n̂ · (D₂ - D₁) = ρs (surface charge)
   - Normal components of B-field: n̂ · (B₂ - B₁) = 0
   - In absence of free charges and currents: n̂ × (E₂ - E₁) = 0 and n̂ × (H₂ - H₁) = 0

3. Snell's Law:
   - Derived from boundary conditions for phase matching
   - n₁sinθᵢ = n₂sinθₜ
   - Applies to all types of waves with appropriate modifications

4. Wave Vectors and Phase Matching:
   - Incident, reflected, and transmitted waves must have matching phases at the boundary
   - Tangential component of wave vector is conserved across the boundary
   - Leads to the law of reflection (θᵣ = θᵢ) and Snell's law`
      },
      {
        title: 'Applications and Phenomena',
        content: `Reflection and transmission principles have numerous applications and lead to interesting phenomena:

1. Optical Applications:
   - Anti-reflection coatings: destructive interference of reflected waves
   - Dielectric mirrors: constructive interference from multiple layers
   - Fiber optics: total internal reflection for light guiding
   - Polarizers: utilizing Brewster's angle for polarization selection

2. Acoustic Applications:
   - Sound barriers and absorbers
   - Ultrasound imaging: contrast based on acoustic impedance differences
   - Acoustic matching layers for efficient energy transfer
   - Architectural acoustics: controlling reflections in concert halls

3. Interference Effects:
   - Thin film interference: iridescence in soap bubbles, oil slicks
   - Fabry-Pérot interferometers: multiple reflections between parallel surfaces
   - Distributed Bragg reflectors: periodic structures with high reflectivity

4. Quantum Mechanical Analogs:
   - Electron wave reflection and transmission at potential barriers
   - Quantum tunneling: transmission through classically forbidden regions
   - Scattering theory: reflection and transmission amplitudes for particles

5. Metamaterials and Advanced Concepts:
   - Negative refractive index materials: unusual reflection and transmission properties
   - Perfect absorbers: engineered to minimize reflection and maximize absorption
   - Transformation optics: controlling wave paths through material engineering`
      }
    ]
  },

  'Huygens Principle': {
    title: 'Huygens\' Principle',
    description: 'A method of wave propagation analysis that treats each point on a wavefront as a source of secondary spherical wavelets, with the new wavefront forming as the envelope of these wavelets.',
    sections: [
      {
        title: 'Historical Development',
        content: `Huygens' Principle was proposed by Dutch physicist Christiaan Huygens in 1678 as a geometric construction to explain wave propagation:

1. Original Formulation:
   - Every point on a wavefront acts as a source of secondary spherical wavelets
   - After a time t, the new position of the wavefront is the tangent surface (envelope) to all these secondary wavelets
   - Only the forward-propagating part of the wavelets was considered

2. Historical Context:
   - Developed to explain light propagation when the wave nature of light was still debated
   - Competed with Newton's corpuscular theory of light
   - Lacked mathematical rigor in its original form

3. Fresnel's Contribution (1818):
   - Augustin-Jean Fresnel added the concept of interference between secondary wavelets
   - Introduced mathematical formalism with phase relationships
   - Successfully explained diffraction phenomena

4. Kirchhoff's Formulation (1882):
   - Gustav Kirchhoff provided a rigorous mathematical derivation from wave equations
   - Showed that Huygens' Principle is a consequence of the wave equation
   - Developed the Kirchhoff diffraction formula as a mathematical expression of Huygens-Fresnel principle`
      },
      {
        title: 'Mathematical Formulation',
        content: `The modern mathematical formulation of Huygens' Principle can be expressed in several ways:

1. Kirchhoff Integral Theorem:
   - For a monochromatic wave with complex amplitude ψ:
   - ψ(P) = -\frac{1}{4π}\oint_S [ψ\frac{∂G}{∂n} - G\frac{∂ψ}{∂n}] dS
   - Where G = \frac{e^{ikr}}{r} is the Green's function representing a spherical wave
   - S is a closed surface containing point P
   - ∂/∂n denotes the normal derivative at the surface

2. Huygens-Fresnel Principle:
   - The amplitude at point P due to a wavefront Σ is:
   - ψ(P) = \frac{i}{λ}\int_Σ ψ(Q)\frac{e^{ikr}}{r}\cos(θ) dS
   - Where r is the distance from a point Q on the wavefront to point P
   - θ is the angle between the normal to Σ at Q and the line QP
   - The factor \cos(θ) is the obliquity factor added by Fresnel

3. Rayleigh-Sommerfeld Diffraction Formula:
   - A more accurate formulation that resolves inconsistencies in the Kirchhoff theory:
   - ψ(P) = \frac{1}{2π}\int_Σ ψ(Q)\frac{∂}{∂n}(\frac{e^{ikr}}{r}) dS
   - This formulation satisfies the boundary conditions more precisely`
      },
      {
        title: 'Physical Interpretation',
        content: `Huygens' Principle provides a physical picture of wave propagation with several key insights:

1. Wave Propagation Mechanism:
   - Explains how waves propagate through space without requiring action at a distance
   - Each point on a wavefront influences future wavefront positions
   - The collective behavior of all secondary wavelets determines the wave evolution

2. Wavefront Reconstruction:
   - New wavefronts form as envelopes of secondary wavelets
   - In homogeneous media, plane waves remain plane, and spherical waves remain spherical
   - In inhomogeneous media, wavefronts can deform according to local wave speeds

3. Relationship to Wave Equation:
   - Huygens' Principle is a solution method for the wave equation
   - For 3D waves, the principle gives exact solutions
   - For 2D waves, the principle requires modification (wavelets have "tails")

4. Limitations:
   - Strictly valid only for forward propagation (requires the obliquity factor)
   - Assumes wavelengths much smaller than obstacles or apertures
   - Does not directly account for polarization effects in electromagnetic waves`
      },
      {
        title: 'Applications in Wave Phenomena',
        content: `Huygens' Principle successfully explains numerous wave phenomena:

1. Reflection and Refraction:
   - Reflection: Secondary wavelets from a reflecting surface combine to form the reflected wavefront
   - Refraction: Different propagation speeds in different media cause wavefront bending
   - Both laws can be derived geometrically using Huygens' construction

2. Diffraction:
   - Explains how waves bend around obstacles or through apertures
   - Single-slit diffraction: Secondary wavelets from the slit opening interfere to create diffraction pattern
   - Edge diffraction: Wavelets from the edge of an obstacle spread into the geometric shadow region

3. Interference:
   - Young's double-slit experiment: Secondary wavelets from two slits interfere to create fringe patterns
   - Multiple-slit diffraction: Forms the basis for diffraction gratings
   - Thin film interference: Explains iridescence in soap bubbles and oil slicks

4. Wave Propagation in Complex Media:
   - Scattering: Interaction of waves with particles or inhomogeneities
   - Propagation through layered media: Explains behavior of seismic waves in Earth's layers
   - Wave guiding: Describes how waves propagate in waveguides and optical fibers`
      },
      {
        title: 'Modern Extensions and Applications',
        content: `Huygens' Principle has been extended and applied in various fields of modern physics and engineering:

1. Computational Wave Propagation:
   - Numerical methods based on Huygens' Principle for simulating wave propagation
   - Finite-difference time-domain (FDTD) methods
   - Boundary element methods for acoustic and electromagnetic simulations

2. Quantum Mechanics:
   - Feynman's path integral formulation has analogies to Huygens' Principle
   - Quantum wave functions propagate similarly to classical waves
   - Electron diffraction patterns can be analyzed using similar principles

3. Optical Systems:
   - Lens design and analysis
   - Holography: Recording and reconstruction of wavefronts
   - Phase-contrast microscopy and other advanced imaging techniques

4. Medical Imaging:
   - Ultrasound imaging uses principles of wave propagation and reflection
   - Synthetic aperture techniques in radar and sonar
   - Computed tomography reconstruction algorithms

5. Metamaterials and Transformation Optics:
   - Designing materials with engineered wave propagation properties
   - Cloaking devices and perfect lenses
   - Negative refractive index materials

Huygens' Principle remains a powerful conceptual and mathematical tool for understanding and analyzing wave phenomena across physics and engineering disciplines.`
      }
    ]
  },

  'Diffraction': {
    title: 'Diffraction',
    description: 'The bending of waves around obstacles or through openings, resulting in the spreading of waves into regions that would otherwise be in shadow.',
    sections: [
      {
        title: 'Physical Mechanism',
        content: `Diffraction is a wave phenomenon that occurs when waves encounter obstacles or apertures:

1. Basic Mechanism:
   - Waves bend around obstacles and spread out after passing through openings
   - Most pronounced when the wavelength is comparable to the size of the obstacle or aperture
   - Results in the spreading of wave energy into regions that would be in shadow according to geometric optics

2. Theoretical Foundations:
   - Huygens' Principle: Each point on a wavefront acts as a source of secondary wavelets
   - The diffracted wavefront is the envelope of these secondary wavelets
   - Fresnel added the concept of interference between these wavelets
   - Kirchhoff provided a mathematical formulation based on the wave equation

3. Types of Diffraction:
   - Fresnel diffraction: Near-field diffraction where wavefronts are curved
   - Fraunhofer diffraction: Far-field diffraction where wavefronts are approximately plane
   - Edge diffraction: Occurs at the edges of obstacles
   - Aperture diffraction: Occurs when waves pass through openings

4. Universal Wave Property:
   - Affects all types of waves: light, sound, water waves, matter waves
   - Demonstrates the wave nature of phenomena
   - More significant for longer wavelengths relative to obstacle size`
      },
      {
        title: 'Mathematical Description',
        content: `The mathematical treatment of diffraction involves several approaches:

1. Huygens-Fresnel Principle:
   - The amplitude at observation point P is given by:
   - U(P) = \frac{A}{i\lambda}\int_\Sigma \frac{e^{ikr}}{r}\cos(\theta) dS
   - Where:
     * A is a constant
     * \lambda is the wavelength
     * k = 2\pi/\lambda is the wavenumber
     * r is the distance from a point on the aperture to P
     * \theta is the angle between the normal to the aperture and the line to P
     * \Sigma is the aperture surface

2. Kirchhoff's Diffraction Formula:
   - U(P) = \frac{1}{4\pi}\oint_S \left[U\frac{\partial G}{\partial n} - G\frac{\partial U}{\partial n}\right] dS
   - Where:
     * U is the wave amplitude
     * G = \frac{e^{ikr}}{r} is the Green's function
     * \partial/\partial n is the normal derivative
     * S is a closed surface containing P

3. Fraunhofer Diffraction (Far-field):
   - For a single slit of width a:
   - I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 where \alpha = \frac{\pi a \sin\theta}{\lambda}
   - For a circular aperture of diameter D:
   - I(\theta) = I_0 \left(\frac{2J_1(x)}{x}\right)^2 where x = \frac{\pi D \sin\theta}{\lambda}
   - J_1 is the first-order Bessel function of the first kind

4. Fresnel Diffraction (Near-field):
   - Uses Fresnel integrals to calculate diffraction patterns
   - Involves Cornu spiral for visualization
   - More complex than Fraunhofer diffraction due to quadratic phase terms`
      },
      {
        title: 'Diffraction Patterns',
        content: `Diffraction produces characteristic patterns that depend on the geometry of the diffracting object:

1. Single-Slit Diffraction:
   - Central maximum flanked by secondary maxima of decreasing intensity
   - Minima occur at angles where \sin\theta = m\lambda/a (m = ±1, ±2, ...)
   - Width of central maximum inversely proportional to slit width
   - Angular width of central maximum ≈ 2\lambda/a

2. Double-Slit Diffraction:
   - Combines single-slit diffraction with two-source interference
   - Envelope follows single-slit pattern
   - Fine interference fringes within this envelope
   - Interference maxima at \sin\theta = m\lambda/d (m = 0, ±1, ±2, ...)
   - Diffraction minima at \sin\theta = m\lambda/a (m = ±1, ±2, ...)

3. Circular Aperture Diffraction:
   - Creates Airy disk pattern: bright central disk surrounded by concentric rings
   - First minimum occurs at \sin\theta = 1.22\lambda/D
   - Defines resolution limit in optical instruments (Rayleigh criterion)

4. Diffraction Gratings:
   - Multiple regularly spaced slits or reflective grooves
   - Sharp principal maxima at \sin\theta = m\lambda/d (m = 0, ±1, ±2, ...)
   - Higher spectral resolution than single or double slits
   - Used for spectroscopy and wavelength measurement`
      },
      {
        title: 'Applications in Science and Technology',
        content: `Diffraction has numerous applications across various fields:

1. Optical Instruments:
   - Determines resolution limits in microscopes and telescopes
   - Rayleigh criterion: two point sources are resolvable if separated by angle \theta = 1.22\lambda/D
   - Diffraction-limited imaging: best possible resolution for a given aperture size
   - Techniques to overcome diffraction limit: near-field microscopy, super-resolution methods

2. Spectroscopy:
   - Diffraction gratings separate light into constituent wavelengths
   - Higher spectral resolution than prisms
   - Applications in astronomy, chemistry, materials science
   - Spectrometers, monochromators, and spectrophotometers

3. Structure Determination:
   - X-ray diffraction reveals atomic and molecular structure
   - Bragg's law: n\lambda = 2d\sin\theta
   - Crystallography for determining protein structures
   - Electron and neutron diffraction for material analysis

4. Holography:
   - Records and reconstructs wavefronts using diffraction
   - Creates three-dimensional images
   - Applications in data storage, security features, and art

5. Optical Signal Processing:
   - Spatial filtering using Fourier optics
   - Pattern recognition
   - Optical computing`
      },
      {
        title: 'Advanced Concepts and Extensions',
        content: `Modern understanding of diffraction extends beyond classical wave optics:

1. Quantum Diffraction:
   - Matter waves exhibit diffraction (de Broglie wavelength \lambda = h/p)
   - Electron, neutron, and even molecule diffraction observed
   - Double-slit experiment with single particles demonstrates wave-particle duality
   - Quantum wave function follows same diffraction mathematics as classical waves

2. Computational Methods:
   - Numerical solutions to diffraction problems
   - Finite-difference time-domain (FDTD) methods
   - Angular spectrum method
   - Beam propagation method (BPM)

3. Diffraction in Complex Media:
   - Multiple scattering in disordered media
   - Diffraction in photonic crystals and metamaterials
   - Non-diffracting beams: Bessel beams, Airy beams
   - Self-healing beams that reconstruct after obstacles

4. Time-Domain Diffraction:
   - Diffraction of pulses and wave packets
   - Spatiotemporal coupling effects
   - Ultrafast phenomena

5. Non-Linear Diffraction:
   - Diffraction in non-linear media
   - Solitons: non-diffracting wave packets in non-linear media
   - Modulation instability

Diffraction remains a central concept in wave physics, connecting classical wave theory to quantum mechanics and continually finding new applications in emerging technologies.`
      }
    ]
  },

  'Interference': {
    title: 'Interference',
    description: 'The phenomenon where two or more waves superpose to form a resultant wave of greater, lower, or the same amplitude, depending on their relative phase.',
    sections: [
      {
        title: 'Basic Principles',
        content: `Interference occurs when two or more waves overlap in space, resulting in a new wave pattern:

1. Superposition Principle:
   - When waves overlap, the resultant displacement at any point is the algebraic sum of the individual wave displacements
   - For two waves: y(x,t) = y₁(x,t) + y₂(x,t)
   - This principle applies to all linear wave systems

2. Types of Interference:
   - Constructive interference: Waves reinforce each other, resulting in larger amplitude
   - Destructive interference: Waves partially or completely cancel each other
   - Intermediate interference: Partial reinforcement or cancellation

3. Phase Difference:
   - Determines the type of interference
   - For two waves with equal amplitude A:
     * Constructive interference: Phase difference δ = 0, 2π, 4π, ... (or path difference = nλ)
     * Destructive interference: Phase difference δ = π, 3π, 5π, ... (or path difference = (n+1/2)λ)
   - Phase difference can arise from path difference, reflection, or initial phase difference

4. Intensity Distribution:
   - For two coherent sources with intensities I₁ and I₂:
   - Resultant intensity: I = I₁ + I₂ + 2√(I₁I₂)cosδ
   - Maximum intensity (constructive): I = I₁ + I₂ + 2√(I₁I₂) = (√I₁ + √I₂)²
   - Minimum intensity (destructive): I = I₁ + I₂ - 2√(I₁I₂) = (√I₁ - √I₂)²`
      },
      {
        title: 'Coherence Requirements',
        content: `For stable interference patterns to form, the interfering waves must satisfy certain coherence conditions:

1. Temporal Coherence:
   - The waves must maintain a constant phase relationship over time
   - Related to the monochromaticity (single frequency) of the source
   - Characterized by coherence time (Δt) and coherence length (Lc = c·Δt)
   - Coherence length = average distance over which a wave maintains its phase
   - For a source with bandwidth Δν: Lc ≈ c/Δν

2. Spatial Coherence:
   - Points on a wavefront must have a fixed phase relationship
   - Related to the size of the source and its distance from the observation point
   - Characterized by the coherence area
   - For a circular source of diameter a at distance r: coherence width ≈ 0.16λr/a

3. Polarization Requirements:
   - For complete interference, the waves should have the same polarization
   - Orthogonally polarized waves cannot interfere (their electric fields oscillate in perpendicular planes)
   - Partially polarized waves can produce partial interference

4. Practical Sources:
   - Laser light: High temporal and spatial coherence
   - Filtered light: Improved temporal coherence but limited spatial coherence
   - Extended sources: Limited spatial coherence
   - White light: Limited temporal coherence (short coherence length)`
      },
      {
        title: 'Young\'s Double-Slit Experiment',
        content: `Young's double-slit experiment (1801) provided the first clear demonstration of the wave nature of light:

1. Experimental Setup:
   - Monochromatic light source illuminates a screen with two narrow, closely spaced slits
   - Light passing through the slits creates an interference pattern on a distant screen
   - The slits act as two coherent secondary sources (as explained by Huygens' Principle)

2. Mathematical Analysis:
   - For slits separated by distance d, observed at angle θ:
   - Path difference: Δr = d·sinθ
   - Condition for constructive interference: d·sinθ = mλ (m = 0, ±1, ±2, ...)
   - Condition for destructive interference: d·sinθ = (m+1/2)λ (m = 0, ±1, ±2, ...)

3. Fringe Pattern:
   - Equally spaced bright and dark fringes on the observation screen
   - Fringe spacing: y = λL/d (for small angles)
     * L = distance to the screen
     * d = slit separation
     * λ = wavelength
   - Central fringe (m = 0) is bright
   - Intensity distribution: I = I₀cos²(πdsinθ/λ)

4. Historical Significance:
   - Contradicted Newton's corpuscular theory of light
   - Established the wave theory of light
   - Later extended to demonstrate wave-particle duality with single photons`
      },
      {
        title: 'Interference in Thin Films',
        content: `Thin film interference occurs when light reflects from the top and bottom surfaces of a thin transparent layer:

1. Mechanism:
   - Light partially reflects at the first interface
   - Transmitted light reflects at the second interface
   - The two reflected waves interfere based on their path difference
   - Path difference includes both the extra distance traveled and phase changes due to reflection

2. Phase Considerations:
   - Reflection from a higher refractive index medium: 180° phase shift (π radians)
   - Reflection from a lower refractive index medium: No phase shift
   - Optical path difference: Δ = 2nt·cosθ₂
     * n = refractive index of the film
     * t = film thickness
     * θ₂ = angle of refraction in the film

3. Interference Conditions:
   - Constructive interference: 2nt·cosθ₂ + λ/2 (if needed) = mλ
   - Destructive interference: 2nt·cosθ₂ + λ/2 (if needed) = (m+1/2)λ
   - The λ/2 term is included only when there is a phase shift at one interface but not the other

4. Applications:
   - Soap bubbles and oil slicks: Colorful iridescence
   - Anti-reflection coatings: Destructive interference of reflected light
   - Optical filters: Selectively transmit or reflect specific wavelengths
   - Fabry-Pérot interferometers: Multiple reflections between parallel surfaces`
      },
      {
        title: 'Other Interference Phenomena and Applications',
        content: `Interference appears in many contexts beyond Young's experiment and thin films:

1. Multiple-Slit Interference:
   - N slits produce sharper principal maxima with N-2 secondary maxima between them
   - Principal maxima at same positions as double-slit: d·sinθ = mλ
   - Intensity distribution: I = I₀[sin(Nπdsinθ/λ)/sin(πdsinθ/λ)]²
   - Forms the basis for diffraction gratings

2. Michelson Interferometer:
   - Splits a beam of light into two paths using a beam splitter
   - Recombines the beams after they travel different paths
   - Used to measure small displacements, refractive indices, and wavelengths
   - Historical importance in the Michelson-Morley experiment (disproved luminiferous ether)

3. Mach-Zehnder Interferometer:
   - Uses two beam splitters and two mirrors
   - Light follows two separate paths before recombining
   - Applications in optical switching, quantum information, and phase contrast imaging

4. Acoustic Interference:
   - Sound waves interfere following the same principles
   - Applications in noise cancellation technology
   - Acoustic holography and imaging

5. Matter Wave Interference:
   - Electrons, neutrons, and even large molecules exhibit interference
   - Demonstrates the quantum wave nature of matter
   - Used in electron microscopy and neutron diffraction studies`
      }
    ]
  },

  'Polarization': {
    title: 'Polarization',
    description: 'A property of transverse waves that describes the orientation of oscillations perpendicular to the direction of wave propagation.',
    sections: [
      {
        title: 'Basic Concepts',
        content: `Polarization is a characteristic unique to transverse waves, where the oscillations occur perpendicular to the direction of wave propagation:

1. Types of Waves and Polarization:
   - Transverse waves (e.g., electromagnetic waves): Can be polarized
   - Longitudinal waves (e.g., sound waves): Cannot be polarized
   - Electromagnetic waves: Electric and magnetic field oscillations are perpendicular to each other and to the direction of propagation

2. Unpolarized Light:
   - Natural light consists of waves with electric field vectors oriented randomly in all directions perpendicular to the propagation direction
   - The oscillation directions change rapidly and randomly
   - Equal intensity in all transverse directions when averaged over time

3. Polarized Light:
   - The electric field oscillates in a specific pattern
   - Can be linear (in one plane), circular, or elliptical
   - Described mathematically using Jones vectors or Stokes parameters

4. Polarization Direction:
   - By convention, the polarization direction refers to the direction of the electric field oscillation
   - For electromagnetic waves, the magnetic field oscillates perpendicular to the electric field`
      },
      {
        title: 'Linear Polarization',
        content: `Linear polarization occurs when the electric field oscillates along a single fixed direction:

1. Mathematical Description:
   - Electric field: E(z,t) = E₀cos(kz-ωt)û
   - Where û is a unit vector in the direction of polarization
   - The oscillation amplitude varies sinusoidally with time, but the direction remains constant

2. Representation:
   - Can be represented as a superposition of two orthogonal components with zero phase difference
   - E = E₀(cosθx̂ + sinθŷ)cos(kz-ωt)
   - Where θ defines the angle of polarization with respect to the x-axis

3. Production of Linearly Polarized Light:
   - Polarizing filters (polarizers): Absorb components along one axis while transmitting perpendicular components
   - Reflection at Brewster's angle: Reflected light is partially polarized
   - Scattering: Light scattered at 90° from the incident beam is partially polarized
   - Birefringent crystals: Split unpolarized light into two linearly polarized beams

4. Malus's Law:
   - When linearly polarized light passes through a polarizer:
   - Transmitted intensity: I = I₀cos²θ
   - Where θ is the angle between the polarization direction and the polarizer axis`
      },
      {
        title: 'Circular and Elliptical Polarization',
        content: `Circular and elliptical polarization occur when the electric field vector traces a circle or ellipse perpendicular to the propagation direction:

1. Circular Polarization:
   - The electric field vector maintains constant magnitude but rotates with constant angular velocity
   - Requires two perpendicular linear components with equal amplitude and 90° phase difference
   - Mathematical form: E = E₀[x̂cos(kz-ωt) ± ŷsin(kz-ωt)]
   - The + sign gives right-handed (clockwise) polarization
   - The - sign gives left-handed (counterclockwise) polarization

2. Elliptical Polarization:
   - Most general form of polarization
   - Electric field vector traces an ellipse
   - Results from two perpendicular components with either:
     * Different amplitudes, or
     * Phase difference not equal to 0°, 90°, 180°, or 270°
   - Mathematical form: E = E₀ₓx̂cos(kz-ωt) + E₀ᵧŷcos(kz-ωt+δ)
   - Special cases: Linear (δ = 0° or 180°) and circular (E₀ₓ = E₀ᵧ and δ = ±90°)

3. Production and Conversion:
   - Quarter-wave plates: Convert linear to circular polarization and vice versa
   - Half-wave plates: Rotate the plane of linear polarization
   - Optical activity: Some materials naturally rotate polarization (e.g., sugar solutions)
   - Stress-induced birefringence: Mechanical stress creates polarization effects`
      },
      {
        title: 'Mathematical Formalism',
        content: `Several mathematical formalisms describe polarization states:

1. Jones Calculus:
   - Represents polarized light as a two-component complex vector
   - Linear polarization along x-axis: [1, 0]ᵀ
   - Linear polarization along y-axis: [0, 1]ᵀ
   - Linear polarization at 45°: [1/√2, 1/√2]ᵀ
   - Right circular polarization: [1/√2, i/√2]ᵀ
   - Left circular polarization: [1/√2, -i/√2]ᵀ
   - Optical elements represented by 2×2 matrices
   - Limited to fully polarized light

2. Stokes Parameters:
   - Four-parameter description (S₀, S₁, S₂, S₃)
   - S₀: Total intensity
   - S₁: Preference for horizontal vs. vertical polarization
   - S₂: Preference for +45° vs. -45° polarization
   - S₃: Preference for right vs. left circular polarization
   - Can describe partially polarized light
   - Degree of polarization: P = √(S₁² + S₂² + S₃²)/S₀

3. Poincaré Sphere:
   - Geometric representation of polarization states
   - Points on the sphere represent fully polarized light
   - North and south poles: Right and left circular polarization
   - Equator: Linear polarization at various angles
   - Other points: Elliptical polarization
   - Distance from origin: Degree of polarization`
      },
      {
        title: 'Applications and Phenomena',
        content: `Polarization has numerous applications in science and technology:

1. Optical Applications:
   - Polarized sunglasses: Reduce glare from reflected light
   - LCD displays: Use polarizers and liquid crystals to control light transmission
   - 3D cinema: Uses differently polarized light for left and right eyes
   - Stress analysis: Photoelasticity reveals stress patterns in transparent materials
   - Polarization microscopy: Enhances contrast for birefringent specimens

2. Telecommunications:
   - Polarization-division multiplexing: Increases data capacity in optical fibers
   - Satellite communications: Uses orthogonal polarizations to double channel capacity
   - Radar systems: Polarization helps identify target characteristics

3. Scientific Instruments:
   - Polarimeters: Measure optical rotation in solutions
   - Ellipsometers: Determine optical properties of thin films
   - Astronomical polarimetry: Studies cosmic dust and magnetic fields

4. Natural Phenomena:
   - Sky polarization: Scattered sunlight is partially polarized
   - Animal navigation: Some species can detect polarization patterns
   - Rainbow formation: Involves polarization effects
   - Birefringence in minerals: Creates double images and color effects

5. Quantum Applications:
   - Quantum key distribution: Uses photon polarization states
   - Quantum computing: Polarization represents quantum bits (qubits)
   - Bell's inequality tests: Fundamental tests of quantum mechanics`
      }
    ]
  },

  'Wave Packets': {
    title: 'Wave Packets',
    description: 'Localized wave disturbances formed by the superposition of waves with different frequencies, resulting in a spatially confined wave group.',
    sections: [
      {
        title: 'Concept and Formation',
        content: `Wave packets are localized wave disturbances that combine aspects of waves and particles:

1. Basic Concept:
   - A wave packet is a superposition of harmonic waves with different frequencies
   - The interference between these waves creates a localized disturbance
   - The packet has a central frequency and a range of frequencies around it
   - The spatial extent is limited, unlike infinite harmonic waves

2. Mathematical Formation:
   - Continuous superposition of harmonic waves:
   - ψ(x,t) = ∫ A(k)e^{i(kx-ω(k)t)} dk
   - Where:
     * A(k) is the amplitude distribution in k-space (wavenumber spectrum)
     * ω(k) is the dispersion relation connecting frequency to wavenumber
     * The integration is over all contributing wavenumbers

3. Gaussian Wave Packets:
   - Common form with Gaussian amplitude distribution:
   - A(k) = (1/√(2πσ_k))e^{-(k-k₀)²/(2σ_k²)}
   - Resulting in spatial distribution:
   - ψ(x,0) = e^{ik₀x}e^{-x²/(2σ_x²)}
   - Where σ_x = 1/(2σ_k) is the spatial width
   - The packet is centered at wavenumber k₀ with spread σ_k

4. Physical Interpretation:
   - Represents a particle-like entity with wave properties
   - Provides a bridge between wave and particle descriptions
   - Allows for localized energy transport
   - Central to quantum mechanics and wave-particle duality`
      },
      {
        title: 'Fourier Analysis',
        content: `Fourier analysis provides the mathematical foundation for understanding wave packets:

1. Fourier Transform Pair:
   - Space domain to wavenumber domain (k-space):
   - A(k) = (1/√(2π)) ∫ ψ(x,0)e^{-ikx} dx
   - Wavenumber domain to space domain:
   - ψ(x,0) = (1/√(2π)) ∫ A(k)e^{ikx} dk
   - Similar relations exist for frequency and time domains

2. Spectral Decomposition:
   - Any wave function can be decomposed into harmonic components
   - The amplitude A(k) represents the contribution of each wavenumber
   - Narrow A(k) distribution: broad spatial extent
   - Broad A(k) distribution: narrow spatial extent

3. Parseval's Theorem:
   - Energy conservation between spatial and spectral domains
   - ∫|ψ(x)|² dx = ∫|A(k)|² dk
   - Total probability (for quantum wave functions) is conserved

4. Discrete Fourier Transform:
   - Practical numerical implementation
   - Used in computational analysis of wave packets
   - Fast Fourier Transform (FFT) algorithms enable efficient calculations`
      },
      {
        title: 'Propagation and Dispersion',
        content: `Wave packets evolve in time according to the dispersion relation of the medium:

1. Group Velocity:
   - The velocity at which the envelope (overall shape) of the wave packet travels
   - v_g = dω/dk evaluated at the central wavenumber k₀
   - Represents the velocity of energy transport
   - In quantum mechanics, equals the classical particle velocity

2. Phase Velocity:
   - The velocity at which the phase of a single frequency component travels
   - v_p = ω/k for each component wave
   - Generally different from the group velocity

3. Dispersion Effects:
   - In dispersive media, different frequency components travel at different speeds
   - The dispersion relation ω(k) is not linear
   - Second-order dispersion: d²ω/dk² ≠ 0 causes wave packet spreading
   - Higher-order dispersion terms cause more complex distortions

4. Time Evolution:
   - Non-dispersive medium (d²ω/dk² = 0): packet maintains shape while translating
   - Dispersive medium: packet spreads and may distort
   - Gaussian packet width evolution: σ_x(t) = σ_x(0)√[1 + (t/t_d)²]
   - Where t_d is the dispersion time scale`
      },
      {
        title: 'Bandwidth Theorem and Uncertainty Relations',
        content: `The bandwidth theorem establishes fundamental limits on simultaneous localization in complementary domains:

1. Position-Wavenumber Uncertainty:
   - σ_x·σ_k ≥ 1/2
   - A wave packet cannot be arbitrarily well-localized in both position and wavenumber
   - Narrower spatial extent requires broader wavenumber distribution

2. Time-Frequency Uncertainty:
   - σ_t·σ_ω ≥ 1/2
   - A pulse cannot be arbitrarily short in time and narrow in frequency
   - Short pulses have broad frequency spectra

3. Quantum Mechanical Interpretation:
   - Heisenberg's uncertainty principle: Δx·Δp ≥ ℏ/2
   - With p = ℏk, this is directly related to the bandwidth theorem
   - Fundamental limitation on simultaneous knowledge of position and momentum

4. Applications:
   - Signal processing: determines minimum pulse duration for a given bandwidth
   - Laser physics: ultrashort pulses require broad spectral bandwidth
   - Communications: trade-off between temporal resolution and spectral efficiency`
      },
      {
        title: 'Applications and Examples',
        content: `Wave packets appear in various physical contexts:

1. Quantum Mechanics:
   - Electron wave packets: represent localized electrons
   - Free particle wave packet: spreads over time (quantum diffusion)
   - Coherent states: minimum uncertainty wave packets
   - Wave function collapse: localization of quantum wave packets upon measurement

2. Optics and Electromagnetics:
   - Laser pulses: ultrashort pulses are wave packets
   - Optical solitons: non-dispersive wave packets in nonlinear media
   - Pulse propagation in optical fibers: affected by dispersion and nonlinearity
   - Waveguide modes: spatially confined electromagnetic wave packets

3. Acoustics and Mechanical Waves:
   - Acoustic pulses: localized sound disturbances
   - Seismic wave packets: used in geophysical exploration
   - Vibration analysis: wave packet decomposition of complex vibrations

4. Signal Processing:
   - Wavelet analysis: decomposition into localized wave packets
   - Time-frequency representations: analyze non-stationary signals
   - Compressed sensing: efficient representation of signals

5. Water Waves:
   - Ocean wave groups: sets of larger waves among smaller ones
   - Tsunami propagation: modeled as wave packets
   - Ship wakes: complex wave packet structures`
      }
    ]
  },

  'Normal Modes': {
    title: 'Normal Modes',
    description: 'The characteristic patterns of oscillation in a bounded system, where all parts of the system oscillate at the same frequency with fixed amplitude ratios.',
    sections: [
      {
        title: 'Basic Concepts',
        content: `Normal modes are the natural patterns of oscillation in a bounded system:

1. Definition:
   - Specific oscillation patterns where all parts of the system move sinusoidally with the same frequency
   - Each point in the system maintains a fixed amplitude ratio with respect to other points
   - The system's motion can be decomposed into a superposition of normal modes
   - Also called eigenmodes, characteristic modes, or natural modes

2. Mathematical Properties:
   - Normal modes are solutions to the wave equation with boundary conditions
   - Each normal mode has a characteristic frequency (eigenfrequency)
   - Normal modes form a complete orthogonal set of functions
   - Any arbitrary motion of the system can be expressed as a linear combination of normal modes

3. Time Dependence:
   - Each normal mode oscillates with a single frequency: ψₙ(x,t) = Aₙφₙ(x)cos(ωₙt + δₙ)
   - φₙ(x) is the spatial pattern (eigenfunction)
   - ωₙ is the natural frequency (eigenvalue)
   - Aₙ is the amplitude determined by initial conditions
   - δₙ is the phase determined by initial conditions

4. Energy Distribution:
   - Each normal mode carries a specific amount of energy
   - Energy oscillates between potential and kinetic forms
   - Total energy is conserved in each mode in the absence of damping`
      },
      {
        title: 'Vibrating Strings',
        content: `A stretched string fixed at both ends is a classic example of a system with normal modes:

1. Wave Equation for a String:
   - ∂²y/∂t² = (T/μ)∂²y/∂x²
   - Where T is tension and μ is linear mass density
   - Wave speed: v = √(T/μ)

2. Boundary Conditions:
   - Fixed ends: y(0,t) = y(L,t) = 0
   - L is the length of the string

3. Normal Mode Solutions:
   - yₙ(x,t) = Aₙsin(nπx/L)cos(ωₙt + δₙ)
   - Eigenfrequencies: ωₙ = nπv/L = nπ√(T/μ)/L
   - Fundamental frequency (n=1): f₁ = ω₁/2π = v/2L
   - Harmonics (n=2,3,...): fₙ = nf₁

4. Node and Antinode Patterns:
   - Nodes: Points that remain stationary (y=0)
   - Located at x = mL/n where m = 0,1,2,...,n
   - Antinodes: Points of maximum amplitude
   - Located at x = (2m+1)L/2n where m = 0,1,2,...,n-1

5. General Motion:
   - y(x,t) = ∑ₙ Aₙsin(nπx/L)cos(ωₙt + δₙ)
   - Coefficients Aₙ determined by initial conditions
   - Represents a Fourier sine series`
      },
      {
        title: 'Coupled Oscillators',
        content: `Systems of coupled oscillators exhibit normal modes that describe collective oscillation patterns:

1. Two Coupled Oscillators:
   - Equations of motion: m¨x₁ = -kx₁ - κ(x₁-x₂), m¨x₂ = -kx₂ - κ(x₂-x₁)
   - Where k is the spring constant and κ is the coupling constant
   - Normal modes:
     * In-phase mode: both masses oscillate in the same direction
     * Frequency: ω₁ = √(k/m)
     * Out-of-phase mode: masses oscillate in opposite directions
     * Frequency: ω₂ = √((k+2κ)/m)

2. N Coupled Oscillators:
   - Equations written in matrix form: M¨X + KX = 0
   - M is the mass matrix, K is the stiffness matrix
   - Normal modes are eigenvectors of M⁻¹K
   - Frequencies are square roots of eigenvalues

3. Normal Coordinates:
   - Coordinate transformation that decouples the equations of motion
   - Each normal coordinate corresponds to a normal mode
   - System behaves as independent simple harmonic oscillators
   - Simplifies analysis of complex systems`
      },
      {
        title: 'Acoustic and Electromagnetic Cavities',
        content: `Cavities confine waves and support discrete normal modes:

1. Rectangular Acoustic Cavity:
   - 3D wave equation: ∇²p = (1/v²)∂²p/∂t²
   - Boundary conditions: ∂p/∂n = 0 at rigid walls
   - Normal modes: pₙₘₗ(x,y,z,t) = p₀cos(nπx/Lₓ)cos(mπy/Lᵧ)cos(lπz/Lᵤ)cos(ωₙₘₗt)
   - Eigenfrequencies: ωₙₘₗ = πv√((n/Lₓ)² + (m/Lᵧ)² + (l/Lᵤ)²)
   - Room acoustics: standing waves at these frequencies cause resonances

2. Electromagnetic Cavity Resonators:
   - Maxwell's equations with boundary conditions
   - Perfect electric conductor: tangential E-field = 0 at walls
   - Two types of modes:
     * Transverse Electric (TE): Eᵤ = 0
     * Transverse Magnetic (TM): Hᵤ = 0
   - Eigenfrequencies similar to acoustic case but with c (speed of light)

3. Optical Cavities:
   - Fabry-Pérot resonator: two parallel reflective surfaces
   - Longitudinal modes: fₙ = nc/2L
   - Transverse modes: additional patterns perpendicular to cavity axis
   - Q-factor: measure of energy storage vs. dissipation
   - Applications in lasers, spectroscopy, and interferometry`
      },
      {
        title: 'Applications and Significance',
        content: `Normal modes are important in many areas of physics and engineering:

1. Musical Instruments:
   - String instruments: normal modes determine the harmonic content
   - Wind instruments: standing waves in air columns
   - Percussion: membrane and plate vibrations (e.g., drums, cymbals)
   - Timbre: determined by the relative amplitudes of different modes

2. Structural Analysis:
   - Building and bridge vibrations
   - Modal analysis identifies potential resonances
   - Earthquake engineering: avoid resonance with seismic waves
   - Mechanical failure prevention

3. Quantum Mechanics:
   - Particle in a box: energy eigenstates are normal modes
   - Molecular vibrations: normal modes describe collective atomic motion
   - Phonons: quantized normal modes in crystal lattices
   - Quantum field theory: field excitations as normal modes

4. Optical and Microwave Systems:
   - Waveguides: electromagnetic wave propagation in confined geometries
   - Resonant cavities in microwave ovens, particle accelerators
   - Optical fibers: mode analysis for signal transmission
   - Photonic crystals: engineered electromagnetic mode structures

5. Numerical Methods:
   - Finite element analysis: approximates normal modes of complex structures
   - Modal decomposition techniques in fluid dynamics
   - Model order reduction: simplifies complex systems using dominant modes`
      }
    ]
  },

  'Damped & Driven Waves': {
    title: 'Damped & Driven Waves',
    description: 'Wave systems subject to energy dissipation (damping) and external forcing, exhibiting resonance behavior when the driving frequency approaches a natural frequency.',
    sections: [
      {
        title: 'Damping in Wave Systems',
        content: `Damping represents energy dissipation in wave systems:

1. Damping Mechanisms:
   - Viscous damping: proportional to velocity (e.g., fluid resistance)
   - Internal friction: material deformation losses
   - Radiation damping: energy carried away by waves
   - Thermal losses: conversion of mechanical energy to heat

2. Damped Wave Equation:
   - One-dimensional form: ∂²u/∂t² + 2γ∂u/∂t - v²∂²u/∂x² = 0
   - γ is the damping coefficient
   - Solutions show amplitude decay over time and distance

3. Damping Types:
   - Underdamped: oscillations decay gradually (γ < ω₀)
   - Critically damped: fastest return to equilibrium without oscillation (γ = ω₀)
   - Overdamped: slow return to equilibrium without oscillation (γ > ω₀)

4. Amplitude Decay:
   - Exponential decay envelope: A(t) = A₀e⁻ᵞᵗ
   - Spatial attenuation: A(x) = A₀e⁻ᵅˣ
   - Attenuation coefficient α related to damping
   - Energy decays as e⁻²ᵞᵗ (proportional to amplitude squared)`
      },
      {
        title: 'Driven Oscillations and Waves',
        content: `External forcing introduces energy into wave systems:

1. Driven Oscillator Equation:
   - d²x/dt² + 2γdx/dt + ω₀²x = F₀cos(ωt)
   - ω₀ is the natural frequency
   - ω is the driving frequency
   - F₀ is the forcing amplitude

2. Steady-State Solution:
   - After transients decay: x(t) = Acos(ωt - φ)
   - Amplitude: A = F₀/√[(ω₀² - ω²)² + 4γ²ω²]
   - Phase: φ = tan⁻¹[2γω/(ω₀² - ω²)]

3. Driven Wave Equation:
   - ∂²u/∂t² + 2γ∂u/∂t - v²∂²u/∂x² = f(x,t)
   - f(x,t) represents the external forcing function
   - Can be localized or distributed in space

4. Frequency Response:
   - System responds differently to different driving frequencies
   - Maximum response near natural frequencies
   - Phase shift varies with frequency`
      },
      {
        title: 'Resonance Phenomena',
        content: `Resonance occurs when a system is driven near its natural frequency:

1. Resonance Condition:
   - Maximum amplitude when driving frequency approaches natural frequency
   - For light damping: ωᵣ ≈ ω₀
   - For stronger damping: ωᵣ = √(ω₀² - 2γ²)

2. Amplitude at Resonance:
   - Maximum amplitude: Aₘₐₓ ≈ F₀/(2γω₀)
   - Inversely proportional to damping coefficient
   - Can be very large for lightly damped systems

3. Resonance Width:
   - Full width at half maximum: Δω ≈ 2γ
   - Narrower for lightly damped systems
   - Broader for heavily damped systems

4. Phase Behavior:
   - At ω << ω₀: φ ≈ 0 (in phase with driver)
   - At ω = ω₀: φ = 90° (quarter cycle lag)
   - At ω >> ω₀: φ ≈ 180° (out of phase with driver)

5. Energy Transfer:
   - Maximum energy transfer at resonance
   - Power absorbed: P = ½F₀²ω²A²/[(ω₀² - ω²)² + 4γ²ω²]
   - Maximum power: Pₘₐₓ ≈ F₀²/(8γ) at resonance`
      },
      {
        title: 'Quality Factor (Q)',
        content: `The quality factor characterizes the sharpness of resonance and rate of energy dissipation:

1. Definition and Interpretation:
   - Q = ω₀/(2γ) = 2π(Energy stored)/(Energy dissipated per cycle)
   - Measure of how underdamped an oscillator is
   - Higher Q means lower damping and sharper resonance
   - Q = ω₀/Δω (resonance frequency divided by resonance width)

2. Amplitude and Q:
   - Amplitude at resonance proportional to Q
   - A(ωᵣ) ≈ QF₀/ω₀²
   - Peak height increases linearly with Q

3. Decay Time and Q:
   - Amplitude decay: e⁻ᵗ/τ where τ = 1/γ = 2Q/ω₀
   - Time to decay to 1/e of initial amplitude: τ
   - Number of oscillations to decay to 1/e: N = τω₀/(2π) = Q/π

4. Bandwidth and Q:
   - Fractional bandwidth: Δω/ω₀ = 1/Q
   - Higher Q means narrower bandwidth
   - Frequency selectivity improves with higher Q

5. Typical Q Values:
   - Tuning fork: Q ≈ 1,000
   - Quartz crystal: Q ≈ 10,000-100,000
   - Superconducting microwave cavity: Q ≈ 10⁹-10¹⁰
   - Atomic transitions: Q ≈ 10⁸
   - Laser cavity: Q ≈ 10⁶-10⁹`
      },
      {
        title: 'Applications and Examples',
        content: `Damped and driven wave systems appear in many contexts:

1. Mechanical Systems:
   - Vibration isolation: dampers reduce transmission of vibrations
   - Seismic dampers in buildings
   - Shock absorbers in vehicles
   - Musical instruments: controlled damping affects tone quality

2. Electrical Systems:
   - RLC circuits: resonant electrical oscillators
   - Bandwidth of radio receivers and transmitters
   - Impedance matching networks
   - Filters: high-Q filters have narrow passbands

3. Acoustic Systems:
   - Room acoustics: controlling reverberation time
   - Acoustic resonators: Helmholtz resonators, organ pipes
   - Loudspeaker design: controlling resonances
   - Noise cancellation systems

4. Optical Systems:
   - Laser cavities: high-Q optical resonators
   - Optical filters and interferometers
   - Whispering gallery mode resonators
   - Cavity optomechanics

5. Quantum Systems:
   - Cavity quantum electrodynamics
   - Atomic and molecular spectroscopy
   - Quantum oscillators with dissipation
   - Resonant quantum tunneling`
      }
    ]
  },

  'Nonlinear Waves': {
    title: 'Nonlinear Waves',
    description: 'Waves governed by nonlinear equations, exhibiting phenomena such as amplitude-dependent propagation speed, solitons, and shock formation.',
    sections: [
      {
        title: 'Nonlinearity in Wave Systems',
        content: `Nonlinear waves differ from linear waves in several key aspects:

1. Linear vs. Nonlinear Waves:
   - Linear waves obey superposition principle; nonlinear waves do not
   - Linear wave speed is independent of amplitude; nonlinear wave speed often depends on amplitude
   - Linear waves maintain their shape; nonlinear waves can deform as they propagate
   - Linear waves are described by linear differential equations; nonlinear waves require nonlinear equations

2. Sources of Nonlinearity:
   - Material nonlinearity: nonlinear stress-strain relationship
   - Geometric nonlinearity: large deformations
   - Boundary condition nonlinearity: moving or deforming boundaries
   - Nonlinear advection: self-steepening of waves

3. Mathematical Description:
   - Nonlinear terms in wave equations
   - Example: Nonlinear advection term u∂u/∂x
   - Example: Nonlinear restoring force F(u) = -ku - αu³
   - Example: Nonlinear dispersion relation ω = ω(k,A)

4. Characteristic Behaviors:
   - Wave steepening and breaking
   - Self-focusing and self-modulation
   - Generation of harmonics
   - Formation of coherent structures (solitons, shocks)`
      },
      {
        title: 'Solitons and Solitary Waves',
        content: `Solitons are localized nonlinear waves that maintain their shape while propagating:

1. Definition and Properties:
   - Localized wave packets that propagate without changing shape
   - Result from balance between nonlinearity and dispersion
   - Particle-like behavior: maintain identity after collisions
   - Characterized by amplitude, width, and velocity

2. Mathematical Models:
   - Korteweg-de Vries (KdV) equation: ∂u/∂t + u∂u/∂x + α∂³u/∂x³ = 0
   - Nonlinear Schrödinger equation: i∂ψ/∂t + ∂²ψ/∂x² + |ψ|²ψ = 0
   - Sine-Gordon equation: ∂²u/∂t² - ∂²u/∂x² + sin(u) = 0

3. KdV Soliton Solution:
   - u(x,t) = 3c sech²[√(c/4)(x-ct)]
   - c is the soliton speed
   - Amplitude proportional to speed
   - Wider solitons move more slowly

4. Soliton Interactions:
   - Elastic collisions: solitons pass through each other unchanged
   - Phase shifts occur during collisions
   - Multiple soliton solutions (N-soliton solutions) exist
   - Soliton fission and fusion in certain conditions`
      },
      {
        title: 'The Korteweg-de Vries (KdV) Equation',
        content: `The KdV equation is a fundamental model for nonlinear waves with dispersion:

1. The Equation:
   - ∂u/∂t + u∂u/∂x + α∂³u/∂x³ = 0
   - First term: time evolution
   - Second term: nonlinear advection (causes wave steepening)
   - Third term: dispersion (causes wave spreading)

2. Physical Interpretation:
   - Models shallow water waves
   - Balance between nonlinearity and dispersion
   - Nonlinearity tends to steepen waves
   - Dispersion tends to spread waves
   - When balanced, solitons form

3. Mathematical Properties:
   - Completely integrable system
   - Infinite number of conservation laws
   - Solvable via inverse scattering transform
   - Admits multi-soliton solutions

4. Historical Significance:
   - First observed by John Scott Russell in 1834 ("wave of translation")
   - Mathematically derived by Korteweg and de Vries in 1895
   - Numerical simulation by Fermi, Pasta, Ulam, and Tsingou revealed unexpected recurrence
   - Zabusky and Kruskal coined the term "soliton" in 1965`
      },
      {
        title: 'Shock Waves',
        content: `Shock waves are abrupt, nearly discontinuous changes in medium properties:

1. Formation Mechanism:
   - Nonlinear steepening without sufficient dispersion
   - Faster parts of the wave catch up to slower parts
   - Eventually forms a near-discontinuity
   - Dissipation prevents true discontinuity

2. Mathematical Models:
   - Burgers' equation: ∂u/∂t + u∂u/∂x = ν∂²u/∂x²
   - Inviscid case (ν=0): forms perfect shock
   - Viscous case (ν>0): forms smoothed shock with width proportional to ν
   - Rankine-Hugoniot conditions relate properties across shock

3. Shock Wave Properties:
   - Propagation faster than local sound speed (supersonic)
   - Abrupt changes in pressure, temperature, density
   - Entropy increases across shock (irreversible process)
   - Energy dissipation within shock layer

4. Types of Shock Waves:
   - Acoustic shocks: high-amplitude sound waves
   - Detonation waves: coupled with chemical reactions
   - Bow shocks: form around objects moving supersonically
   - Magnetohydrodynamic shocks: in plasmas with magnetic fields`
      },
      {
        title: 'Applications and Examples',
        content: `Nonlinear waves appear in diverse physical systems:

1. Fluid Dynamics:
   - Tsunami propagation in shallow water
   - Internal waves in stratified fluids
   - Rogue waves in the ocean
   - Hydraulic jumps in open channel flow

2. Optics and Electromagnetics:
   - Optical solitons in fibers
   - Self-focusing of laser beams
   - Nonlinear optical pulse compression
   - Electromagnetic shock waves in nonlinear media

3. Plasma Physics:
   - Ion-acoustic solitons
   - Langmuir wave packets
   - Collisionless shock waves
   - Magnetosonic solitons

4. Solid Mechanics:
   - Nonlinear elastic waves
   - Stress waves in granular materials
   - Dislocation dynamics
   - Crack propagation

5. Biological Systems:
   - Nerve impulse propagation (action potentials)
   - Calcium waves in cells
   - Pressure waves in blood vessels
   - Mechanical waves in DNA`
      }
    ]
  },

  'Doppler Effect': {
    title: 'Doppler Effect',
    description: 'The change in frequency or wavelength of a wave in relation to an observer who is moving relative to the wave source.',
    sections: [
      {
        title: 'Basic Principles',
        content: `The Doppler effect describes how wave frequency changes with relative motion:

1. Core Concept:
   - Waves emitted by a moving source or received by a moving observer experience frequency shifts
   - Approaching motion increases observed frequency (blueshift)
   - Receding motion decreases observed frequency (redshift)
   - Applies to all types of waves: sound, light, water waves, etc.

2. Frequency Shift Mechanism:
   - Moving source: wave crests are emitted from different positions
   - Moving observer: wave crests arrive at different rates
   - Both effects change the apparent wavelength and frequency

3. General Formula:
   - f_observed = f_source × (v ± v_o)/(v ∓ v_s)
   - v is the wave propagation speed in the medium
   - v_o is the observer velocity relative to the medium
   - v_s is the source velocity relative to the medium
   - Signs depend on direction of motion:
     * + for observer moving toward source, - for away
     * - for source moving toward observer, + for away

4. Stationary Medium Requirement:
   - Classical Doppler effect assumes a stationary medium
   - Medium provides the reference frame for velocities
   - Different formulations for different wave types`
      },
      {
        title: 'Doppler Effect for Sound',
        content: `Sound waves require a medium and have distinct formulas for moving sources and observers:

1. Sound Wave Specifics:
   - Sound waves are mechanical waves requiring a medium
   - Wave speed depends on medium properties (e.g., air temperature)
   - Reference frame is the medium itself

2. Moving Observer, Stationary Source:
   - f_observed = f_source × (v ± v_o)/v
   - v is the speed of sound in the medium
   - v_o is the observer speed relative to medium
   - + sign when observer moves toward source
   - - sign when observer moves away from source

3. Stationary Observer, Moving Source:
   - f_observed = f_source × v/(v ∓ v_s)
   - v_s is the source speed relative to medium
   - - sign when source moves toward observer
   - + sign when source moves away from observer

4. Both Moving:
   - f_observed = f_source × (v ± v_o)/(v ∓ v_s)
   - Combined effect of both motions
   - Signs follow the same convention as above

5. Examples:
   - Ambulance siren changing pitch as it passes by
   - Train whistle changing tone during approach and departure
   - Sonic boom when source exceeds sound speed`
      },
      {
        title: 'Relativistic Doppler Effect',
        content: `For electromagnetic waves, relativistic effects must be considered:

1. Key Differences from Classical Effect:
   - No medium required for electromagnetic waves
   - Light speed is constant in all reference frames
   - Time dilation affects observed frequency
   - Only relative motion between source and observer matters

2. Longitudinal Motion Formula:
   - f_observed = f_source × √[(1-β)/(1+β)]
   - β = v/c (relative velocity as fraction of light speed)
   - v is the relative velocity between source and observer
   - + sign for receding motion, - sign for approaching motion

3. General Relativistic Formula:
   - f_observed = f_source × γ(1-β·cos θ)
   - γ = 1/√(1-β²) is the Lorentz factor
   - θ is the angle between the direction of motion and line of sight
   - Accounts for motion in any direction

4. Transverse Doppler Effect:
   - When motion is perpendicular to line of sight (θ = 90°)
   - f_observed = f_source × γ
   - Pure time dilation effect with no classical analog
   - Frequency always decreases regardless of direction`
      },
      {
        title: 'Applications in Science and Technology',
        content: `The Doppler effect has numerous practical applications:

1. Astronomy and Cosmology:
   - Redshift measurements determine galaxy recession velocities
   - Evidence for expanding universe and dark energy
   - Binary star velocity measurements
   - Exoplanet detection via stellar wobble

2. Medical Imaging:
   - Doppler ultrasound measures blood flow velocity
   - Detects arterial blockages and heart valve function
   - Color flow mapping visualizes direction and speed
   - Fetal heart monitoring

3. Radar Technology:
   - Doppler radar measures target velocity
   - Weather radar tracks precipitation movement
   - Police speed detection
   - Aircraft navigation and collision avoidance

4. Flow Measurement:
   - Laser Doppler velocimetry for fluid flow
   - Non-invasive industrial flow monitoring
   - Wind speed measurement
   - Acoustic Doppler current profilers for water flow`
      },
      {
        title: 'Advanced Concepts and Extensions',
        content: `Several extensions and related phenomena exist:

1. Doppler Broadening:
   - Thermal motion of atoms causes random Doppler shifts
   - Broadens spectral lines in hot gases
   - Temperature measurement tool in spectroscopy
   - Affects precision of atomic clocks

2. Sonic Boom:
   - Shock wave created when source exceeds sound speed
   - Mach cone with angle θ = sin⁻¹(1/M), where M is Mach number
   - Related to Doppler effect at supersonic speeds
   - Pressure discontinuity causes loud boom

3. Gravitational Redshift:
   - Frequency shift due to gravitational time dilation
   - Not a true Doppler effect (no relative motion required)
   - Photons lose energy climbing out of gravitational wells
   - Evidence for general relativity

4. Relativistic Beaming:
   - Radiation intensity enhanced in direction of motion
   - Makes approaching objects appear brighter
   - Important for jets from active galactic nuclei
   - Combined effect of Doppler shift and relativistic aberration`
      }
    ]
  },

  'Acoustic Waves': {
    title: 'Acoustic Waves',
    description: 'Mechanical pressure waves that propagate through a medium by compression and rarefaction of the medium particles.',
    sections: [
      {
        title: 'Physical Nature of Sound',
        content: `Acoustic waves are mechanical disturbances propagating through a medium:

1. Wave Characteristics:
   - Longitudinal waves: particle motion parallel to wave propagation
   - Require a medium (solid, liquid, or gas) to propagate
   - Cannot travel through vacuum
   - Involve compression and rarefaction of the medium

2. Physical Quantities:
   - Pressure variations: Δp around equilibrium pressure
   - Density variations: Δρ around equilibrium density
   - Particle displacement: ξ from equilibrium position
   - Particle velocity: v = ∂ξ/∂t

3. Linear Acoustic Wave Equation:
   - ∇²p - (1/c_s²)(∂²p/∂t²) = 0
   - p is the acoustic pressure
   - c_s is the speed of sound
   - Derived from conservation of mass and momentum

4. Harmonic Solutions:
   - p(x,t) = p_0 e^{i(kx-ωt)}
   - k = ω/c_s is the wave number
   - ω = 2πf is the angular frequency
   - λ = 2π/k is the wavelength`
      },
      {
        title: 'Speed of Sound',
        content: `The speed of sound depends on medium properties:

1. General Formula:
   - c_s = √(∂p/∂ρ)
   - Derivative taken under appropriate conditions
   - Represents how pressure responds to density changes
   - Measure of medium stiffness

2. In Ideal Gases:
   - c_s = √(γRT/M)
   - γ is the ratio of specific heats (c_p/c_v)
   - R is the universal gas constant
   - T is the absolute temperature
   - M is the molar mass
   - For air at 20°C: c_s ≈ 343 m/s

3. In Liquids:
   - c_s = √(B/ρ)
   - B is the bulk modulus
   - ρ is the density
   - For water at 20°C: c_s ≈ 1480 m/s

4. In Solids:
   - Longitudinal waves: c_l = √[(K + 4μ/3)/ρ]
   - Transverse waves: c_t = √(μ/ρ)
   - K is the bulk modulus
   - μ is the shear modulus
   - For steel: c_l ≈ 5900 m/s, c_t ≈ 3200 m/s`
      },
      {
        title: 'Acoustic Wave Properties',
        content: `Acoustic waves exhibit several important properties:

1. Energy and Intensity:
   - Energy density: E = ρ_0v²/2 + p²/(2ρ_0c_s²)
   - Intensity: I = p²/(2ρ_0c_s)
   - Intensity level (dB): IL = 10 log_10(I/I_0)
   - Reference intensity: I_0 = 10^-12 W/m²

2. Impedance and Transmission:
   - Acoustic impedance: Z = ρc_s
   - Reflection coefficient: R = (Z_2 - Z_1)/(Z_2 + Z_1)
   - Transmission coefficient: T = 2Z_2/(Z_2 + Z_1)
   - Impedance matching minimizes reflection

3. Attenuation:
   - Amplitude decay: A(x) = A_0e^{-αx}
   - Attenuation coefficient α depends on:
     * Viscous losses
     * Thermal conduction
     * Molecular relaxation
     * Scattering
   - Increases with frequency (approximately f²)

4. Dispersion:
   - In most cases, sound waves are non-dispersive
   - In certain media (e.g., bubbly liquids), different frequencies travel at different speeds
   - Can cause distortion of complex waveforms`
      },
      {
        title: 'Acoustic Phenomena',
        content: `Various phenomena occur with acoustic waves:

1. Reflection and Refraction:
   - Reflection: sound bounces off surfaces
   - Angle of incidence equals angle of reflection
   - Refraction: sound bends when entering a medium with different sound speed
   - Snell's law: sinθ_1/sinθ_2 = c_1/c_2

2. Diffraction:
   - Sound bends around obstacles
   - More pronounced when wavelength is comparable to obstacle size
   - Allows sound to be heard around corners
   - Huygens' principle applies to sound waves

3. Interference:
   - Constructive: pressure amplitudes add
   - Destructive: pressure amplitudes subtract
   - Standing waves form in bounded regions
   - Beat patterns when frequencies are close

4. Resonance:
   - Enhanced response at natural frequencies
   - Depends on boundary conditions
   - Examples: organ pipes, Helmholtz resonators
   - Quality factor Q determines resonance sharpness`
      },
      {
        title: 'Applications',
        content: `Acoustic waves have numerous applications:

1. Medical Applications:
   - Diagnostic ultrasound imaging
   - Doppler ultrasound for blood flow
   - Lithotripsy (kidney stone destruction)
   - Therapeutic ultrasound

2. Industrial Applications:
   - Nondestructive testing
   - Acoustic emission monitoring
   - Ultrasonic cleaning
   - Sonar and echo sounding

3. Environmental Acoustics:
   - Noise control and abatement
   - Architectural acoustics
   - Underwater acoustics
   - Seismic wave analysis

4. Scientific Research:
   - Material characterization
   - Acoustic microscopy
   - Acoustic levitation
   - Thermoacoustic engines and refrigerators`
      }
    ]
  },

  'Electromagnetic Waves': {
        title: 'Electromagnetic Waves',
    description: 'Self-propagating waves of oscillating electric and magnetic fields that travel through vacuum or matter at the speed of light.',
    sections: [
      {
        title: 'Maxwell\'s Equations and Wave Derivation',
        content: `Electromagnetic waves emerge directly from Maxwell's equations:

1. Maxwell's Equations (Differential Form):
   - Gauss's Law: ∇·ℒ = ρ/ε₀
   - Gauss's Law for Magnetism: ∇·ℓ = 0
   - Faraday's Law: ∇×ℒ = -∂ℓ/∂t
   - Ampère's Law with Maxwell's correction: ∇×ℓ = μ₀ℒ + μ₀ε₀∂ℒ/∂t

2. Wave Equation Derivation:
   - Taking curl of Faraday's Law: ∇×(∇×ℒ) = -∇×(∂ℓ/∂t)
   - Using vector identity: ∇×(∇×ℒ) = ∇(∇·ℒ) - ∇²ℒ
   - In vacuum: ∇·ℒ = 0, so ∇×(∇×ℒ) = -∇²ℒ
   - Substituting Ampère's Law: -∇²ℒ = -μ₀ε₀∂²ℒ/∂t²
   - Final wave equation: ∇²ℒ = μ₀ε₀∂²ℒ/∂t²
   - Similar equation for ℓ: ∇²ℓ = μ₀ε₀∂²ℓ/∂t²

3. Wave Speed:
   - Comparing with standard wave equation: ∇²ψ = (1/v²)∂²ψ/∂t²
   - Speed of electromagnetic waves: c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s
   - Matches measured speed of light
   - Maxwell's prediction: light is an electromagnetic wave

4. Wave Solutions:
   - Plane wave solutions: ℒ(r,t) = ℒ₀e^{i(k·r-ωt)}, ℓ(r,t) = ℓ₀e^{i(k·r-ωt)}
   - Wave vector k and frequency ω related by: |k| = ω/c
   - Dispersion relation: ω = c|k|`
      },
      {
        title: 'Properties of Electromagnetic Waves',
        content: `Electromagnetic waves have several distinctive properties:

1. Transverse Nature:
   - Electric and magnetic fields perpendicular to direction of propagation
   - ℒ ⊥ ℓ ⊥ k (mutually perpendicular)
   - Right-hand rule: k × ℒ = ωℓ
   - No longitudinal component (unlike sound waves)

2. Propagation in Media:
   - In dielectric media: v = c/n, where n is refractive index
   - Refractive index: n = √(εᵣμᵣ), where εᵣ and μᵣ are relative permittivity and permeability
   - Dispersion: n depends on frequency
   - Attenuation: amplitude decreases with distance

3. Boundary Conditions:
   - Tangential ℒ continuous across boundary
   - Normal ℓ continuous across boundary
   - Leads to reflection and refraction laws
   - Fresnel equations determine reflection and transmission coefficients

4. Spectrum:
   - Radio waves: f < 10⁹ Hz
   - Microwaves: 10⁹ Hz < f < 10¹¹ Hz
   - Infrared: 10¹¹ Hz < f < 10¹⁴ Hz
   - Visible light: 4×10¹⁴ Hz < f < 8×10¹⁴ Hz
   - Ultraviolet: 10¹⁵ Hz < f < 10¹⁷ Hz
   - X-rays: 10¹⁷ Hz < f < 10²⁰ Hz
   - Gamma rays: f > 10²⁰ Hz`
      },
      {
        title: 'Energy and Momentum',
        content: `Electromagnetic waves carry energy and momentum:

1. Energy Density:
   - Electric field contribution: uₑ = ε₀ℒ²/2
   - Magnetic field contribution: uₘ = ℓ²/(2μ₀)
   - Total energy density: u = uₑ + uₘ
   - In a plane wave: uₑ = uₘ, so u = ε₀ℒ² = ℓ²/μ₀

2. Poynting Vector:
   - Energy flux density: S = ℒ × ℓ/μ₀
   - Direction of energy flow
   - Magnitude equals intensity (W/m²)
   - Time-averaged Poynting vector: <S> = <ℒ × ℓ>/μ₀
   - For plane wave: |<S>| = ℒ₀²/(2μ₀c)

3. Radiation Pressure:
   - Momentum density: g = S/c²
   - Pressure on perfect absorber: P = I/c
   - Pressure on perfect reflector: P = 2I/c
   - Demonstrates wave-particle duality

4. Angular Momentum:
   - Circularly polarized waves carry spin angular momentum
   - Helical phase fronts carry orbital angular momentum
   - Used in optical tweezers and quantum information`
      },
      {
        title: 'Polarization',
        content: `Polarization describes the orientation of the electric field oscillations:

1. Types of Polarization:
   - Linear: ℒ oscillates along a fixed line
   - Circular: ℒ vector tip traces a circle
   - Elliptical: ℒ vector tip traces an ellipse
   - Unpolarized: random orientation (e.g., thermal sources)

2. Mathematical Description:
   - General form: ℒ(z,t) = ℒₓ cos(kz-ωt+δₓ) êₓ + ℒᵧ cos(kz-ωt+δᵧ) êᵧ
   - Linear polarization: δₓ = δᵧ or δₓ = δᵧ + π
   - Circular polarization: ℒₓ = ℒᵧ and δₓ - δᵧ = ±π/2
   - Right-handed: δₓ - δᵧ = -π/2
   - Left-handed: δₓ - δᵧ = π/2

3. Polarization Devices:
   - Polarizers: transmit specific polarization component
   - Wave plates: modify phase between components
   - Quarter-wave plate: linear to circular conversion
   - Half-wave plate: rotates linear polarization

4. Malus's Law:
   - Intensity after polarizer: I = I₀cos²θ
   - θ is angle between polarizer axis and incident polarization
   - Basis for polarization-based optical devices`
      },
      {
        title: 'Applications and Phenomena',
        content: `Electromagnetic waves are central to numerous technologies and natural phenomena:

1. Communications:
   - Radio and television broadcasting
   - Mobile phones and wireless networks
   - Satellite communications
   - Optical fiber data transmission

2. Sensing and Imaging:
   - Radar systems
   - Medical imaging (X-rays, MRI)
   - Remote sensing satellites
   - Night vision and thermal imaging

3. Energy Transfer:
   - Solar radiation
   - Microwave heating
   - Laser cutting and welding
   - Wireless power transfer

4. Wave Phenomena:
   - Diffraction through apertures
   - Interference patterns
   - Doppler effect for moving sources
   - Scattering from particles and surfaces`
      }
    ]
  },

  'Plasma Waves': {
    title: 'Plasma Waves',
    description: 'Collective oscillations in ionized gases (plasmas) involving charged particles and electromagnetic fields, including electrostatic Langmuir waves and magnetohydrodynamic Alfvén waves.',
    sections: [
      {
        title: 'Plasma as a Medium',
        content: `Plasmas support unique wave modes due to their charged particle nature:

1. Plasma Characteristics:
   - Ionized gas containing free electrons and ions
   - Quasi-neutral (approximately equal numbers of positive and negative charges)
   - Exhibits collective behavior due to long-range electromagnetic forces
   - Characterized by plasma frequency, Debye length, and plasma parameter

2. Key Parameters:
   - Plasma frequency: ωp = √(nee²/ε₀me)
   - Debye length: λD = √(ε₀kBTe/nee²)
   - Cyclotron frequency: ωc = qB/m
   - Plasma beta: β = nkBT/(B²/2μ₀)

3. Plasma Regimes:
   - Cold plasma: thermal effects negligible
   - Warm plasma: thermal effects important but non-relativistic
   - Hot plasma: relativistic thermal effects
   - Collisionless vs. collisional plasmas
   - Magnetized vs. unmagnetized plasmas

4. Wave Propagation:
   - Dispersion relations connect frequency ω and wavevector k
   - Multiple wave modes can exist simultaneously
   - Waves can couple and convert between different modes
   - Anisotropic propagation in magnetized plasmas`
      },
      {
        title: 'Electrostatic Plasma Waves',
        content: `Electrostatic waves involve oscillating electric fields with no magnetic field perturbations:

1. Langmuir Waves:
   - Electron plasma oscillations
   - Dispersion relation: ω² = ωp² + 3k²vₜₑ²
   - ωp is the plasma frequency
   - vₜₑ is the electron thermal velocity
   - Group velocity increases with wavenumber
   - Associated with electron density perturbations

2. Ion Acoustic Waves:
   - Sound-like waves in plasmas
   - Dispersion relation: ω = k√(kBTe/mi)
   - Phase velocity: cs = √(kBTe/mi)
   - Require Te >> Ti for weak damping
   - Involve both ion and electron dynamics

3. Electron Acoustic Waves:
   - Occur in plasmas with two electron temperature populations
   - Phase velocity between hot and cold electron thermal velocities
   - Dispersion relation: ω = k√(kBTc/me)
   - Tc is the cold electron temperature

4. Electrostatic Ion Cyclotron Waves:
   - Occur near ion cyclotron frequency
   - Dispersion relation: ω² = ωci² + k²cs²
   - ωci is the ion cyclotron frequency
   - Propagate nearly perpendicular to magnetic field`
      },
      {
        title: 'Magnetohydrodynamic Waves',
        content: `Magnetohydrodynamic (MHD) waves treat plasma as a conducting fluid in a magnetic field:

1. Alfvén Waves:
   - Transverse waves along magnetic field lines
   - Dispersion relation: ω = k∥vA
   - Alfvén velocity: vA = B₀/√(μ₀ρ)
   - B₀ is the background magnetic field
   - ρ is the plasma mass density
   - Magnetic field lines behave like strings under tension

2. Shear Alfvén Waves:
   - Incompressible transverse oscillations
   - Magnetic field and velocity perturbations perpendicular to B₀
   - Propagate primarily along field lines
   - Energy transported along magnetic field

3. Compressional Alfvén Waves (Fast Magnetosonic):
   - Compressible waves with magnetic pressure variations
   - Propagate in all directions
   - Dispersion relation: ω² = k²(vA² + cs²)
   - Faster than shear Alfvén waves

4. Slow Magnetosonic Waves:
   - Compressible waves with anti-correlated thermal and magnetic pressures
   - Dispersion relation: ω² = k²vA²cs²/(vA² + cs²)
   - Slower than both Alfvén and fast magnetosonic waves`
      },
      {
        title: 'Kinetic Plasma Waves',
        content: `Kinetic theory accounts for velocity distribution effects beyond fluid descriptions:

1. Electron Bernstein Waves:
   - Electrostatic waves near electron cyclotron harmonics
   - Propagate perpendicular to magnetic field
   - Dispersion relation has multiple branches near nωce
   - No fluid counterpart
   - Important for plasma heating

2. Ion Bernstein Waves:
   - Similar to electron Bernstein waves but near ion cyclotron harmonics
   - Dispersion relation has branches near nωci
   - Used for ion heating in fusion devices

3. Whistler Waves:
   - Right-hand circularly polarized electromagnetic waves
   - Frequency range: ωci << ω < ωce
   - Dispersion relation: ω = k²c²ωce cos θ / (ωpe² + k²c²)
   - Group velocity increases with frequency
   - Responsible for whistler radio emissions

4. Landau Damping:
   - Collisionless wave damping mechanism
   - Energy transfer between waves and particles moving at phase velocity
   - Critical for plasma stability analysis
   - Occurs when ∂f₀/∂v < 0 at v = ω/k`
      },
      {
        title: 'Applications and Observations',
        content: `Plasma waves play important roles in natural and laboratory plasmas:

1. Space Plasmas:
   - Solar wind Alfvén waves
   - Magnetospheric ULF waves
   - Auroral kilometric radiation
   - Ionospheric plasma oscillations

2. Laboratory Applications:
   - Plasma heating in fusion devices
   - Wave-based diagnostics
   - Current drive in tokamaks
   - Plasma processing of materials

3. Astrophysical Contexts:
   - Solar corona heating by wave dissipation
   - Cosmic ray scattering by Alfvén waves
   - Pulsar radio emission mechanisms
   - Accretion disk turbulence

4. Wave-Particle Interactions:
   - Particle acceleration by waves
   - Radiation belt dynamics
   - Anomalous resistivity
   - Turbulent plasma heating`
      }
    ]
  },

  'Gravitational Waves': {
    title: 'Gravitational Waves',
    description: 'Ripples in spacetime curvature that propagate at the speed of light, generated by accelerating mass distributions with time-varying quadrupole moments.',
    sections: [
      {
        title: 'General Relativity and Spacetime',
        content: `Gravitational waves emerge from Einstein's theory of general relativity:

1. Einstein's Field Equations:
   - Gμν = 8πG/c⁴ Tμν
   - Gμν is the Einstein tensor (describing spacetime curvature)
   - Tμν is the stress-energy tensor (describing matter and energy)
   - G is Newton's gravitational constant
   - c is the speed of light

2. Spacetime Metric:
   - ds² = gμν dxμ dxν
   - gμν is the metric tensor
   - Describes the geometry of spacetime
   - Determines how distances and time intervals are measured

3. Gravitational Waves as Metric Perturbations:
   - Small perturbations around flat spacetime: gμν = ημν + hμν
   - ημν is the Minkowski metric of flat spacetime
   - hμν is the gravitational wave perturbation (|hμν| << 1)

4. Wave Nature:
   - Propagate at the speed of light
   - Transverse waves with two polarization states
   - Carry energy and momentum
   - Extremely weak interaction with matter`
      },
      {
        title: 'Linearized Theory',
        content: `For weak gravitational fields, Einstein's equations can be linearized:

1. Linearization Process:
   - Expand field equations to first order in hμν
   - Apply gauge transformations to simplify
   - Choose the transverse-traceless (TT) gauge
   - Results in the wave equation: □hμν = 0
   - □ is the d'Alembertian operator: □ = -∂²/∂t² + ∇²

2. Wave Solutions:
   - Plane wave solutions: hμν = Aμν cos(kαxα)
   - kα is the wave four-vector with kαkα = 0
   - Aμν is the amplitude tensor
   - Transverse: Aμν kν = 0
   - Traceless: Aμμ = 0

3. Polarization States:
   - Two independent polarization states: h⁺ and h×
   - Plus polarization (h⁺): stretches space in x-direction while compressing in y-direction, then vice versa
   - Cross polarization (h×): similar effect but rotated by 45°
   - General wave is a superposition of these two states

4. Gauge Invariance:
   - Physical effects are gauge-invariant
   - Different coordinate choices can make waves appear or disappear
   - Only the TT part of hμν affects test particles`
      },
      {
        title: 'Generation of Gravitational Waves',
        content: `Gravitational waves are produced by accelerating mass distributions:

1. Quadrupole Formula:
   - Leading order radiation: hμν = (2G/c⁴r) ¨Qᵢⱼ(t-r/c)
   - Qᵢⱼ is the mass quadrupole moment tensor
   - ¨Qᵢⱼ is its second time derivative
   - r is the distance to the source
   - Valid in the far-field approximation (r >> wavelength)

2. Quadrupole Moment:
   - Qᵢⱼ = ∫ ρ(x) (xᵢxⱼ - (1/3)δᵢⱼx²) d³x
   - ρ(x) is the mass density
   - Spherically symmetric mass distributions have zero quadrupole moment
   - Time-varying asymmetric mass distributions generate waves

3. Power Emission:
   - Gravitational wave luminosity: L = (G/5c⁵) ⟨¨Qᵢⱼ¨Qᵢⱼ⟩
   - Angular brackets denote time average
   - Extremely small for typical laboratory sources
   - Significant for astrophysical systems

4. No Dipole Radiation:
   - Conservation of momentum forbids gravitational dipole radiation
   - Unlike electromagnetic waves which have dipole radiation
   - Quadrupole radiation is the leading contribution`
      },
      {
        title: 'Astrophysical Sources',
        content: `Several astrophysical systems produce detectable gravitational waves:

1. Compact Binary Systems:
   - Binary neutron stars
   - Binary black holes
   - Neutron star-black hole binaries
   - Waveform evolution: inspiral, merger, ringdown
   - Frequency increases with time ("chirp")

2. Continuous Sources:
   - Rotating neutron stars with asymmetries
   - Frequency determined by rotation rate
   - Amplitude depends on degree of asymmetry
   - Persistent but very weak signals

3. Burst Sources:
   - Supernovae core collapse
   - Gamma-ray burst engines
   - Cosmic string cusps
   - Short-duration, non-repeating signals

4. Stochastic Background:
   - Primordial gravitational waves from inflation
   - Unresolved superposition of many distant sources
   - Analogous to cosmic microwave background
   - Contains information about the early universe`
      },
      {
        title: 'Detection and Observations',
        content: `Gravitational wave detection requires extremely sensitive instruments:

1. Detection Methods:
   - Laser interferometers (LIGO, Virgo, KAGRA)
   - Measure differential arm length changes
   - Pulsar timing arrays
   - Space-based detectors (future LISA mission)

2. First Detection:
   - GW150914: Binary black hole merger
   - Detected September 14, 2015 by LIGO
   - Black holes of approximately 36 and 29 solar masses
   - Released energy equivalent to 3 solar masses
   - Nobel Prize in Physics 2017

3. Subsequent Observations:
   - Dozens of binary black hole mergers
   - Binary neutron star merger GW170817
   - Electromagnetic counterpart observed (multi-messenger astronomy)
   - Constraints on neutron star equation of state

4. Scientific Impact:
   - Tests of general relativity in strong-field regime
   - Black hole population statistics
   - Hubble constant measurement
   - Constraints on graviton mass
   - New probe of extreme astrophysical environments`
      }
    ]
  },

  'Quantum Wave Mechanics': {
    title: 'Quantum Wave Mechanics',
    description: 'The mathematical framework describing quantum particles as probability waves, where the wavefunction encodes all measurable information about a quantum system.',
    sections: [
      {
        title: 'The Wavefunction',
        content: `The wavefunction ψ is the central mathematical object in quantum mechanics:

1. Definition and Properties:
   - Complex-valued function of position and time: ψ(r,t)
   - Contains all information about a quantum system
   - Not directly observable
   - Normalized: ∫|ψ(r,t)|² d³r = 1
   - Continuous and differentiable

2. Probability Interpretation:
   - Probability density: P(r,t) = |ψ(r,t)|²
   - P(r,t)d³r is probability of finding particle in volume d³r around r
   - Born's rule: connects mathematical formalism with experimental results
   - Wavefunction collapse upon measurement

3. Superposition Principle:
   - If ψ₁ and ψ₂ are valid wavefunctions, then ψ = c₁ψ₁ + c₂ψ₂ is also valid
   - c₁ and c₂ are complex coefficients
   - Quantum systems can exist in multiple states simultaneously
   - Measurement forces system into one specific state

4. Time Evolution:
   - Wavefunctions evolve deterministically according to Schrödinger equation
   - Evolution is unitary (preserves normalization)
   - Becomes probabilistic only upon measurement
   - Quantum dynamics is reversible`
      },
      {
        title: 'Schrödinger Equation',
        content: `The Schrödinger equation governs the time evolution of quantum systems:

1. Time-Dependent Form:
   - iℏ∂ψ/∂t = Ĥψ
   - Ĥ is the Hamiltonian operator
   - ℏ is the reduced Planck constant
   - First-order in time, second-order in space
   - Linear differential equation

2. Time-Independent Form:
   - Ĥψ = Eψ
   - E is the energy eigenvalue
   - Stationary states have definite energy
   - ψ(r,t) = ψ(r)e⁻ᵢᴱᵗ/ℏ
   - Solutions form basis for general states

3. Hamiltonian Operator:
   - Ĥ = -(ℏ²/2m)∇² + V(r)
   - First term represents kinetic energy
   - Second term represents potential energy
   - Different potentials lead to different physical systems
   - Hermitian operator ensures real energy eigenvalues

4. Conservation Laws:
   - Probability conservation: ∂/∂t∫|ψ|²d³r = 0
   - Energy conservation for time-independent Hamiltonians
   - Momentum conservation for spatially uniform potentials
   - Angular momentum conservation for spherically symmetric potentials`
      },
      {
        title: 'Wave-Particle Duality',
        content: `Quantum objects exhibit both wave and particle properties:

1. Historical Development:
   - Light: Maxwell's waves vs. Einstein's photons
   - Matter: Particles vs. de Broglie waves
   - Complementary aspects of the same physical entity
   - Which aspect appears depends on the experimental setup

2. de Broglie Wavelength:
   - λ = h/p
   - h is Planck's constant
   - p is momentum
   - Applies to all particles
   - Macroscopic objects have negligibly small wavelengths

3. Experimental Evidence:
   - Electron diffraction through crystals
   - Double-slit interference with single electrons
   - Neutron interferometry
   - Atom and molecule interference

4. Uncertainty Principle:
   - ΔxΔp ≥ ℏ/2
   - Fundamental limitation on simultaneous knowledge
   - Not due to measurement disturbance
   - Consequence of wave nature of matter`
      },
      {
        title: 'Quantum States and Operators',
        content: `Quantum mechanics is formulated in terms of states and operators:

1. State Space:
   - Wavefunctions belong to Hilbert space
   - Complete, orthonormal basis sets
   - Inner product: ⟨ψ|φ⟩ = ∫ψ*φ d³r
   - Allows representation in different bases

2. Operators:
   - Position: Ŵ = r
   - Momentum: Ƥ = -iℏ∇
   - Energy: Ĥ = -(ℏ²/2m)∇² + V(r)
   - Angular momentum: Ń = r × Ƥ
   - Hermitian operators represent observables

3. Expectation Values:
   - ⟨A⟩ = ⟨ψ|Â|ψ⟩ = ∫ψ*Âψ d³r
   - Average value of many identical measurements
   - Time evolution: d⟨A⟩/dt = (i/ℏ)⟨[Ĥ,Â]⟩ + ⟨∂Â/∂t⟩
   - Ehrenfest's theorem connects to classical mechanics

4. Commutation Relations:
   - [x,p] = iℏ
   - Operators that don't commute cannot be measured simultaneously
   - Commuting operators share eigenfunctions
   - Basis for uncertainty relations`
      },
      {
        title: 'Applications and Interpretations',
        content: `Quantum wave mechanics has profound applications and interpretations:

1. Quantum Systems:
   - Particle in a box: discrete energy levels
   - Harmonic oscillator: equally spaced energy levels
   - Hydrogen atom: orbital structure
   - Tunneling: penetration of classically forbidden regions

2. Quantum Technologies:
   - Lasers: stimulated emission of radiation
   - Transistors: quantum tunneling
   - Magnetic resonance imaging
   - Quantum computers: superposition and entanglement

3. Interpretations:
   - Copenhagen interpretation: wavefunction collapse upon measurement
   - Many-worlds interpretation: all possibilities realized in parallel universes
   - Pilot wave theory: particles guided by real waves
   - Quantum decoherence: emergence of classical behavior

4. Conceptual Implications:
   - Determinism vs. probability
   - Locality vs. nonlocality
   - Reality vs. observation
   - Quantum entanglement and Bell's inequalities`
      }
    ]
  },

  'Laws of Thermodynamics': {
    title: 'Laws of Thermodynamics',
    description: 'The fundamental physical principles governing the transfer of energy as heat and work in thermodynamic systems.',
    sections: [
      {
        title: 'Zeroth Law of Thermodynamics',
        content: `The Zeroth Law establishes the concept of temperature and thermal equilibrium:

1. Statement:
   - If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other
   - Mathematically: If A ≃ C and B ≃ C, then A ≃ B (where ≃ denotes thermal equilibrium)

2. Physical Meaning:
   - Defines the concept of temperature as the property that determines thermal equilibrium
   - Systems in thermal equilibrium have the same temperature
   - Heat flows from higher to lower temperature systems until equilibrium is reached

3. Historical Context:
   - Named "zeroth" because it was formulated after the first and second laws
   - Recognized as logically prior to the other laws
   - Formalized by Ralph Fowler in the 1930s

4. Applications:
   - Basis for temperature measurement
   - Thermometers work by reaching thermal equilibrium with measured systems
   - Calibration of temperature scales
   - Foundation for heat transfer analysis`
      },
      {
        title: 'First Law of Thermodynamics',
        content: `The First Law expresses energy conservation in thermodynamic processes:

1. Mathematical Formulations:
   - ΔU = Q - W (sign convention: work done by system is positive)
   - ΔU = Q + W (alternative convention: work done on system is positive)
   - dU = δQ - δW (differential form)
   - dU = TdS - PdV (for reversible processes)

2. Key Concepts:
   - Internal energy (U): total energy contained within a system
   - Heat (Q): energy transferred due to temperature difference
   - Work (W): energy transferred by mechanical means
   - U is a state function; Q and W are path-dependent

3. For Different Processes:
   - Isothermal: ΔU = 0, Q = W
   - Adiabatic: Q = 0, ΔU = -W
   - Isochoric: W = 0, ΔU = Q
   - Isobaric: ΔU = Q - PΔV
   - Cyclic: ΔU = 0, Q = W

4. Significance:
   - Energy cannot be created or destroyed, only converted between forms
   - Invalidates perpetual motion machines of the first kind
   - Connects thermodynamics with other branches of physics
   - Basis for energy accounting in all physical processes`
      },
      {
        title: 'Second Law of Thermodynamics',
        content: `The Second Law introduces entropy and the directionality of natural processes:

1. Equivalent Statements:
   - Clausius: Heat cannot spontaneously flow from a colder to a hotter body
   - Kelvin-Planck: No process is possible whose sole result is the extraction of heat from a reservoir and its complete conversion to work
   - Entropy formulation: In an isolated system, entropy never decreases

2. Mathematical Expressions:
   - ΔS ≥ 0 (for isolated systems)
   - ΔS = ∫δQ/T (for reversible processes)
   - ΔS > ∫δQ/T (for irreversible processes)
   - ΔStotal = ΔSsystem + ΔSsurroundings > 0 (for spontaneous processes)

3. Entropy:
   - Measure of energy dispersal or molecular disorder
   - State function independent of path
   - Statistical interpretation: S = kₙlnΩ
   - kₙ is Boltzmann's constant
   - Ω is the number of possible microscopic states

4. Implications:
   - Establishes the arrow of time
   - Limits the efficiency of heat engines
   - Maximum efficiency: ηmax = 1 - TC/TH (Carnot efficiency)
   - Explains why many processes are irreversible
   - Invalidates perpetual motion machines of the second kind`
      },
      {
        title: 'Third Law of Thermodynamics',
        content: `The Third Law concerns the behavior of systems as they approach absolute zero temperature:

1. Statement:
   - The entropy of a perfect crystal at absolute zero is zero
   - Alternative: It is impossible to reach absolute zero in a finite number of steps

2. Mathematical Expression:
   - lim(T→0) S = 0 (for perfect crystals)
   - For imperfect crystals or glasses, residual entropy may exist

3. Physical Significance:
   - Provides an absolute reference point for entropy
   - Explains why absolute zero cannot be reached
   - As T approaches 0, all molecular motion does not cease completely
   - Quantum zero-point energy remains even at T = 0

4. Applications:
   - Calculation of absolute entropies
   - Understanding low-temperature physics
   - Design of cryogenic systems
   - Basis for third-law cooling methods (adiabatic demagnetization)`
      },
      {
        title: 'Applications and Connections',
        content: `The Laws of Thermodynamics have broad applications across science and engineering:

1. Engineering Applications:
   - Heat engines and refrigerators
   - Power plants and energy conversion
   - HVAC systems
   - Chemical process design

2. Connections to Other Fields:
   - Statistical mechanics provides microscopic foundation
   - Information theory: entropy as information measure
   - Biology: living systems maintain order by increasing environmental entropy
   - Cosmology: entropy and the fate of the universe

3. Thermodynamic Potentials:
   - Internal energy: U(S,V)
   - Enthalpy: H = U + PV
   - Helmholtz free energy: F = U - TS
   - Gibbs free energy: G = H - TS
   - Each potential is minimized at equilibrium under different constraints

4. Limitations and Extensions:
   - Classical thermodynamics applies to macroscopic systems in equilibrium
   - Non-equilibrium thermodynamics extends to systems with gradients
   - Quantum thermodynamics applies to microscopic systems
   - Relativistic thermodynamics incorporates special relativity effects`
      }
    ]
  },

  'Thermodynamic Systems': {
    title: 'Thermodynamic Systems',
    description: 'Physical systems classified by their ability to exchange matter and energy with their surroundings, bounded by walls with specific properties.',
    sections: [
      {
        title: 'System Classifications',
        content: `Thermodynamic systems are classified based on their interaction with surroundings:

1. Isolated Systems:
   - Cannot exchange energy or matter with surroundings
   - Both energy and mass are conserved within the system
   - Examples: Perfect thermos flask, idealized universe as a whole
   - Mathematical condition: dU = 0, dN = 0
   - Entropy always increases: dS > 0

2. Closed Systems:
   - Can exchange energy but not matter with surroundings
   - Mass is conserved, energy can be transferred
   - Examples: Sealed pressure cooker, closed piston-cylinder
   - Mathematical condition: dU ≠ 0, dN = 0
   - First law applies as: dU = δQ + δW

3. Open Systems:
   - Can exchange both energy and matter with surroundings
   - Neither mass nor energy is conserved within the system
   - Examples: Living organisms, chemical reactors with flows
   - Mathematical condition: dU ≠ 0, dN ≠ 0
   - First law includes material terms: dU = δQ + δW + ∑μᵢdNᵢ

4. Surroundings and Universe:
   - Surroundings: everything outside the system that interacts with it
   - Universe: system + surroundings
   - For any process: ΔSuniverse = ΔSsystem + ΔSsurroundings ≥ 0`
      },
      {
        title: 'System Boundaries and Walls',
        content: `The properties of system boundaries determine what can be exchanged:

1. Adiabatic Walls:
   - Prevent heat transfer (thermally insulating)
   - No thermal energy exchange: δQ = 0
   - Examples: Vacuum flask, perfect insulation
   - Allow work exchange but not heat
   - Systems with purely adiabatic walls undergo adiabatic processes

2. Diathermal Walls:
   - Allow heat transfer (thermally conducting)
   - Thermal energy can flow: δQ ≠ 0
   - Examples: Metal containers, thin glass walls
   - Permit thermal equilibrium between systems
   - Essential for temperature measurements

3. Rigid Walls:
   - Prevent volume changes and mechanical work
   - No mechanical energy exchange: δW = 0
   - Examples: Solid containers with fixed volume
   - Systems with rigid walls undergo isochoric processes

4. Movable Walls:
   - Allow volume changes and mechanical work
   - Mechanical energy can be exchanged: δW ≠ 0
   - Examples: Pistons, elastic membranes
   - Enable pressure equilibration between systems`
      },
      {
        title: 'Equilibrium States and Processes',
        content: `Thermodynamic systems undergo various processes between equilibrium states:

1. Thermodynamic Equilibrium:
   - Thermal equilibrium: uniform temperature throughout
   - Mechanical equilibrium: uniform pressure throughout
   - Chemical equilibrium: no net chemical reactions
   - No macroscopic changes occur in equilibrium state

2. Quasi-static Processes:
   - System remains infinitesimally close to equilibrium throughout
   - Infinitely slow processes
   - Reversible if no dissipative effects occur
   - Can be represented as continuous paths on thermodynamic diagrams

3. Non-equilibrium Processes:
   - System passes through non-equilibrium states
   - Finite rates of change
   - Always irreversible
   - Require extended thermodynamic descriptions

4. State Variables vs. Path Functions:
   - State variables (U, S, T, P, V): depend only on equilibrium state
   - Path functions (Q, W): depend on process path
   - Exact differentials (dU, dS) vs. inexact differentials (δQ, δW)
   - Cyclic integrals: ∮dU = 0, but ∮δQ ≠ 0 and ∮δW ≠ 0`
      },
      {
        title: 'System Analysis Methods',
        content: `Different approaches are used to analyze thermodynamic systems:

1. Control Mass Approach:
   - Focuses on a fixed amount of matter (closed system)
   - Mass remains constant
   - Useful for batch processes
   - Simplifies analysis when composition is fixed

2. Control Volume Approach:
   - Focuses on a fixed region in space (often an open system)
   - Mass and energy can flow across boundaries
   - Useful for steady-state flow processes
   - Requires accounting for inlet and outlet conditions

3. Black Box Analysis:
   - Focuses on inputs and outputs without internal details
   - Useful for overall efficiency and performance evaluation
   - Examples: Power plants, refrigeration cycles
   - Based on conservation principles across system boundaries

4. Composite Systems:
   - Multiple subsystems interacting with each other
   - Internal constraints between subsystems
   - Total entropy production is sum of individual contributions
   - Useful for complex engineering systems`
      },
      {
        title: 'Applications and Examples',
        content: `Thermodynamic system concepts apply to various practical situations:

1. Engineering Systems:
   - Heat engines: convert thermal energy to mechanical work
   - Refrigerators: move heat from cold to hot reservoirs
   - Power plants: generate electricity from heat sources
   - HVAC systems: control temperature and humidity

2. Natural Systems:
   - Earth's climate: complex open system with radiation balance
   - Biological cells: open systems maintaining order
   - Stars: quasi-isolated systems with internal energy generation
   - Geological processes: slow, near-equilibrium changes

3. Laboratory Systems:
   - Calorimeters: measure heat exchange in closed systems
   - Reaction vessels: control conditions for chemical processes
   - Vacuum chambers: create isolated environments
   - Pressure vessels: contain substances under controlled conditions

4. System Coupling:
   - Heat exchangers: thermal coupling between systems
   - Mechanical linkages: work coupling between systems
   - Semipermeable membranes: selective mass transfer
   - Cascaded systems: output of one system feeds another`
      }
    ]
  },

  'State Variables & Equations of State': {
    title: 'State Variables & Equations of State',
    description: 'Parameters that characterize the equilibrium state of a thermodynamic system and the mathematical relationships between them.',
    sections: [
      {
        title: 'Thermodynamic State Variables',
        content: `State variables define the macroscopic condition of a thermodynamic system:

1. Primary State Variables:
   - Pressure (P): force per unit area exerted by a system
   - Volume (V): space occupied by a system
   - Temperature (T): measure of average kinetic energy of particles
   - Number of moles (n): amount of substance
   - Internal energy (U): total energy contained within a system
   - Entropy (S): measure of energy dispersal or disorder

2. Intensive vs. Extensive Variables:
   - Intensive variables: independent of system size
     * Pressure (P)
     * Temperature (T)
     * Density (ρ)
     * Specific heat capacity (c)
     * Chemical potential (μ)
   - Extensive variables: proportional to system size
     * Volume (V)
     * Mass (m)
     * Number of moles (n)
     * Internal energy (U)
     * Entropy (S)

3. Specific Properties:
   - Specific volume: v = V/m
   - Specific internal energy: u = U/m
   - Specific entropy: s = S/m
   - Converting extensive to intensive properties
   - Molar properties use amount of substance instead of mass

4. Conjugate Pairs:
   - Pressure-volume (P, V): mechanical work δW = -PdV
   - Temperature-entropy (T, S): heat transfer δQ = TdS
   - Chemical potential-moles (μ, N): material exchange δW = μdN`
      },
      {
        title: 'Equations of State',
        content: `Equations of state relate state variables to each other:

1. Ideal Gas Law:
   - PV = nRT
   - P is pressure
   - V is volume
   - n is number of moles
   - R is universal gas constant (8.314 J/mol·K)
   - T is absolute temperature
   - Assumptions: negligible molecular volume, no intermolecular forces

2. Alternative Forms:
   - P = ρRT/M (using density ρ and molar mass M)
   - PV = NkT (using number of molecules N and Boltzmann constant k)
   - Z = PV/nRT = 1 (compressibility factor for ideal gas)

3. Real Gas Equations:
   - van der Waals: (P + a/V²)(V - b) = RT
   - a accounts for intermolecular attraction
   - b accounts for molecular volume
   - Redlich-Kwong: P = RT/(V-b) - a/(T^(1/2)V(V+b))
   - Peng-Robinson: more accurate at critical point

4. Virial Equation:
   - PV/nRT = 1 + B(T)/V + C(T)/V² + ...
   - B(T), C(T), etc. are virial coefficients
   - Power series expansion in 1/V
   - Useful for moderate deviations from ideality`
      },
      {
        title: 'Thermodynamic Potentials',
        content: `Thermodynamic potentials are state functions derived from energy and entropy:

1. Internal Energy (U):
   - Natural variables: S, V, N
   - dU = TdS - PdV + ∑μᵢdNᵢ
   - Appropriate for isolated systems

2. Enthalpy (H):
   - H = U + PV
   - Natural variables: S, P, N
   - dH = TdS + VdP + ∑μᵢdNᵢ
   - Useful for constant pressure processes

3. Helmholtz Free Energy (F):
   - F = U - TS
   - Natural variables: T, V, N
   - dF = -SdT - PdV + ∑μᵢdNᵢ
   - Useful for constant temperature and volume processes

4. Gibbs Free Energy (G):
   - G = H - TS = U + PV - TS
   - Natural variables: T, P, N
   - dG = -SdT + VdP + ∑μᵢdNᵢ
   - Useful for constant temperature and pressure processes
   - Minimum at equilibrium for these conditions`
      },
      {
        title: 'Maxwell Relations',
        content: `Maxwell relations connect partial derivatives of state variables:

1. Derivation Principle:
   - Based on equality of mixed second derivatives
   - Derived from thermodynamic potentials
   - Connect measurable quantities

2. Primary Maxwell Relations:
   - (∂T/∂V)ₛ = -(∂P/∂S)ᵥ (from internal energy)
   - (∂T/∂P)ₛ = (∂V/∂S)ₚ (from enthalpy)
   - (∂S/∂V)ₜ = (∂P/∂T)ᵥ (from Helmholtz free energy)
   - (∂S/∂P)ₜ = -(∂V/∂T)ₚ (from Gibbs free energy)

3. Applications:
   - Relate difficult-to-measure quantities to easier ones
   - Calculate entropy changes from P-V-T measurements
   - Derive thermodynamic identities
   - Verify consistency of experimental data

4. Thermodynamic Squares:
   - Mnemonic device for remembering Maxwell relations
   - Variables arranged in squares with cyclic relationships
   - Helps identify appropriate relation for specific problems`
      },
      {
        title: 'Applications and Examples',
        content: `State variables and equations of state have numerous practical applications:

1. Engineering Applications:
   - Gas compression in engines and compressors
   - Refrigeration cycles
   - Power generation cycles
   - HVAC system design

2. Phase Equilibria:
   - Vapor-liquid equilibrium calculations
   - Phase diagrams construction
   - Critical point determination
   - Triple point conditions

3. Chemical Reactions:
   - Equilibrium constants
   - Reaction yield predictions
   - Chemical potential calculations
   - Solution thermodynamics

4. Material Properties:
   - Thermal expansion coefficients
   - Compressibility
   - Heat capacity relations
   - Joule-Thomson coefficient`
      }
    ]
  },

  'Thermodynamic Processes': {
    title: 'Thermodynamic Processes',
    description: 'Transformations that change the state of a thermodynamic system, characterized by their path and reversibility.',
    sections: [
      {
        title: 'Process Classifications',
        content: `Thermodynamic processes can be classified based on their characteristics:

1. Quasi-static Processes:
   - System remains infinitesimally close to equilibrium throughout
   - Each intermediate state is an equilibrium state
   - Occurs infinitely slowly
   - Can be represented as a continuous path on thermodynamic diagrams
   - Theoretical concept, not physically achievable in finite time

2. Reversible Processes:
   - System and surroundings can be returned to initial states without net changes
   - No energy dissipation or entropy production
   - Requires quasi-static conditions and absence of friction, hysteresis, etc.
   - Maximum work output for work-producing processes
   - Minimum work input for work-consuming processes

3. Irreversible Processes:
   - Cannot be reversed without leaving net changes in surroundings
   - Entropy of universe increases: ΔSₜₒₜₐₗ > 0
   - All real processes are irreversible to some degree
   - Sources of irreversibility: friction, finite temperature differences, unrestrained expansion
   - Less efficient than reversible processes

4. Cyclic Processes:
   - System returns to its initial state after a series of processes
   - Net change in state variables is zero: ΔU = ΔS = ΔV = 0
   - Can produce net work output or heat transfer
   - Basis for heat engines, refrigerators, and heat pumps
   - Efficiency limited by second law of thermodynamics`
      },
      {
        title: 'Basic Thermodynamic Processes',
        content: `Several idealized processes serve as building blocks for thermodynamic cycles:

1. Isothermal Process (T = constant):
   - Temperature remains constant throughout
   - Requires heat exchange with surroundings
   - For ideal gas: PV = constant, Q = nRT ln(V₂/V₁) = W
   - Internal energy change is zero for ideal gas: ΔU = 0
   - Entropy change: ΔS = nR ln(V₂/V₁) = nR ln(P₁/P₂)

2. Adiabatic Process (Q = 0):
   - No heat exchange with surroundings
   - Thermally insulated system or very rapid process
   - For ideal gas: PVʳ = constant, where γ = Cₚ/Cᵥ
   - Work: W = (P₁V₁ - P₂V₂)/(γ-1) = -ΔU
   - Temperature change: T₂/T₁ = (V₁/V₂)ʳ⁻¹ = (P₂/P₁)(γ⁻¹)/γ

3. Isobaric Process (P = constant):
   - Pressure remains constant throughout
   - Work: W = P(V₂ - V₁)
   - Heat: Q = ΔH = nCₚΔT
   - Enthalpy change equals heat transfer
   - Entropy change: ΔS = nCₚ ln(T₂/T₁)

4. Isochoric Process (V = constant):
   - Volume remains constant throughout
   - No mechanical work: W = 0
   - Heat: Q = ΔU = nCᵥΔT
   - Internal energy change equals heat transfer
   - Entropy change: ΔS = nCᵥ ln(T₂/T₁)`
      },
      {
        title: 'Heat Engines and Refrigeration Cycles',
        content: `Thermodynamic cycles convert heat to work or use work to move heat:

1. Carnot Cycle:
   - Consists of two isothermal and two adiabatic processes
   - Most efficient possible cycle between two temperature reservoirs
   - Efficiency: η = 1 - Tᶜ/Tᴵ
   - Tᶜ is cold reservoir temperature
   - Tᴵ is hot reservoir temperature
   - Theoretical benchmark for all heat engines
   - Reversible cycle (in theory)

2. Otto Cycle:
   - Model for spark-ignition internal combustion engines
   - Four processes: adiabatic compression, isochoric heating, adiabatic expansion, isochoric cooling
   - Efficiency: η = 1 - 1/rʳ⁻¹
   - r is the compression ratio (Vₘₐₓ/Vₘᵢₙ)
   - Higher compression ratio increases efficiency
   - Limited by knock (pre-ignition) in real engines

3. Diesel Cycle:
   - Model for compression-ignition engines
   - Four processes: adiabatic compression, isobaric heating, adiabatic expansion, isochoric cooling
   - Efficiency: η = 1 - (1/rʳ⁻¹)[(rₚʳ-1)/(γ(rₚ-1))]
   - r is compression ratio, rₚ is cutoff ratio
   - Higher compression ratios than Otto cycle
   - More efficient at part load

4. Refrigeration Cycles:
   - Reverse heat engine cycles
   - Move heat from cold to hot reservoir using work input
   - Coefficient of performance: COP = Qᶜ/W
   - Vapor compression cycle most common in practice
   - Absorption refrigeration uses heat instead of mechanical work`
      },
      {
        title: 'Polytropic Processes',
        content: `Polytropic processes follow a power-law relationship between pressure and volume:

1. General Form:
   - PVⁿ = constant
   - n is the polytropic index
   - Generalizes many specific processes

2. Special Cases:
   - n = 0: isobaric (constant pressure)
   - n = 1: isothermal (constant temperature) for ideal gas
   - n = γ: adiabatic (no heat transfer) for ideal gas
   - n = ∞: isochoric (constant volume)

3. Work and Heat:
   - Work: W = (P₁V₁ - P₂V₂)/(1-n) for n ≠ 1
   - Heat: Q = W + ΔU
   - For ideal gas: Q = [nR/(1-n) + Cᵥ](T₂ - T₁) for n ≠ 1

4. Applications:
   - Gas compression in real compressors
   - Expansion in turbines
   - Approximating complex processes
   - Modeling non-ideal behavior`
      },
      {
        title: 'Process Analysis and Optimization',
        content: `Analyzing and optimizing thermodynamic processes is essential for efficient energy conversion:

1. Process Representation:
   - P-V diagrams: work represented as area under curve
   - T-S diagrams: heat represented as area under curve
   - H-S diagrams (Mollier): useful for steam processes
   - Indicator diagrams for reciprocating engines

2. Availability and Exergy:
   - Exergy: maximum useful work obtainable
   - Accounts for irreversibilities and environmental conditions
   - Exergy destruction proportional to entropy generation
   - Exergy analysis identifies inefficiencies

3. Process Improvements:
   - Reducing temperature differences in heat transfer
   - Minimizing pressure drops in fluid flow
   - Optimizing compression/expansion paths
   - Regeneration and heat recovery
   - Multi-staging for compression and expansion

4. Practical Considerations:
   - Rate effects on process efficiency
   - Material limitations (temperature, pressure)
   - Economic constraints and optimization
   - Environmental impacts
   - Trade-offs between efficiency, power density, and cost`
      }
    ]
  },

  'Work & Heat': {
    title: 'Work & Heat',
    description: 'The two primary mechanisms of energy transfer between a system and its surroundings, with work being organized energy transfer and heat being disorganized energy transfer.',
    sections: [
      {
        title: 'Thermodynamic Work',
        content: `Work in thermodynamics represents energy transfer through organized motion:

1. Definition and Basic Concepts:
   - Energy transfer associated with macroscopic forces and displacements
   - Path-dependent process quantity (not a state function)
   - Denoted by W or δW (inexact differential)
   - Convention: work done by system is positive, on system is negative

2. Mechanical Work Forms:
   - Pressure-volume work: δW = -PdV (most common form)
   - Boundary work in closed systems
   - Sign convention: system expansion (dV > 0) produces positive work
   - Compression (dV < 0) requires work input (negative work)

3. Path Dependence of Work:
   - Work depends on the specific path taken between states
   - Different paths between same initial and final states yield different work values
   - Calculated by integrating along specific process path: W = ∫δW
   - Visualized as area under curve on P-V diagram

4. Other Forms of Work:
   - Electrical work: δW = Edq (voltage × charge)
   - Surface work: δW = γdA (surface tension × area change)
   - Elastic work: δW = Fdx (force × displacement)
   - Chemical work: δW = μdn (chemical potential × moles)
   - Shaft work in open systems`
      },
      {
        title: 'Heat Transfer',
        content: `Heat represents energy transfer due to temperature differences:

1. Definition and Basic Concepts:
   - Energy transfer associated with microscopic random motion
   - Path-dependent process quantity (not a state function)
   - Denoted by Q or δQ (inexact differential)
   - Convention: heat added to system is positive, removed is negative

2. Heat Transfer Mechanisms:
   - Conduction: direct molecular transfer without bulk motion
     * Fourier's law: q = -k∇T
     * k is thermal conductivity
     * Dominant in solids
   - Convection: energy transfer via bulk fluid motion
     * Newton's law of cooling: q = hA(Ts - T∞)
     * h is convection coefficient
     * Natural (buoyancy-driven) or forced (externally driven)
   - Radiation: electromagnetic wave energy transfer
     * Stefan-Boltzmann law: q = εσA(T₁⁴ - T₂⁴)
     * σ is Stefan-Boltzmann constant
     * ε is emissivity
     * No medium required

3. Heat Transfer Rate and Quantity:
   - Heat transfer rate: Q̇ = dQ/dt (power units: W or J/s)
   - Total heat transferred: Q = ∫Q̇dt (energy units: J)
   - Thermal resistance concept: R = ΔT/Q̇
   - Combined heat transfer: resistances in series or parallel`
      },
      {
        title: 'First Law Applications',
        content: `The first law of thermodynamics relates work, heat, and energy changes:

1. First Law Statement:
   - ΔU = Q - W (closed system, sign convention as defined above)
   - Energy conservation applied to thermodynamic systems
   - Internal energy is a state function (path-independent)
   - Work and heat are path-dependent

2. Specific Processes:
   - Isothermal: ΔU = 0, therefore Q = W
   - Adiabatic: Q = 0, therefore ΔU = -W
   - Isochoric: W = 0 (no volume change), therefore ΔU = Q
   - Isobaric: W = P(V₂ - V₁), Q = ΔH (for constant pressure)

3. Cyclic Processes:
   - Net internal energy change is zero: ΔU = 0
   - Therefore: Qnet = Wnet
   - Heat engines: convert heat input to work output
   - Refrigerators: use work input to move heat

4. Open Systems:
   - First law includes mass flow terms
   - Steady flow energy equation: Q̇ - Ẇ = ṁ(h₂ - h₁ + V₂²/2 - V₁²/2 + g(z₂ - z₁))
   - Applications in turbines, compressors, heat exchangers`
      },
      {
        title: 'Work-Heat Relationship',
        content: `Work and heat are interrelated in thermodynamic processes:

1. Energy Conversion:
   - Work can be completely converted to heat (e.g., friction)
   - Heat cannot be completely converted to work (Second Law limitation)
   - Maximum work from heat: Wmax = Q(1 - Tc/Th) (Carnot efficiency)

2. Work and Heat as Process Quantities:
   - Neither are properties of a system
   - Both depend on the path taken between states
   - Only their combined effect (on internal energy) is path-independent
   - Differential forms (δW, δQ) are inexact differentials

3. Equivalence of Work and Heat:
   - Mechanical equivalent of heat: 1 cal = 4.186 J
   - Historical experiments by Joule established equivalence
   - Both measured in energy units (joules in SI)
   - Different quality of energy (work is higher quality)

4. Entropy Generation:
   - Heat transfer across finite temperature difference generates entropy
   - Work processes can be reversible (no entropy generation)
   - Irreversible work (e.g., friction) generates entropy
   - Entropy generation indicates energy quality degradation`
      },
      {
        title: 'Practical Applications',
        content: `Understanding work and heat is essential for engineering applications:

1. Power Generation:
   - Thermal power plants convert heat to work
   - Turbines extract work from fluid flow
   - Efficiency improvements focus on work extraction
   - Cogeneration uses both work and heat outputs

2. Heating and Cooling Systems:
   - Heat pumps move heat using work input
   - Refrigeration cycles
   - HVAC system design
   - Thermal insulation minimizes unwanted heat transfer

3. Energy Storage:
   - Compressed air energy storage (work)
   - Thermal energy storage (heat)
   - Pumped hydro storage (potential energy)
   - Batteries (chemical energy)

4. Thermal Management:
   - Electronic device cooling
   - Heat sinks and heat pipes
   - Thermal interface materials
   - Active vs. passive cooling strategies`
      }
    ]
  },

  'Internal Energy': {
    title: 'Internal Energy',
    description: 'The total energy contained within a thermodynamic system, excluding the kinetic and potential energy of the system as a whole.',
    sections: [
      {
        title: 'First Law of Thermodynamics',
        content: `The first law connects internal energy with heat and work:

1. Mathematical Statement:
   - dU = δQ + δW (sign convention: Q positive into system, W positive into system)
   - Alternative form: dU = δQ - δW (sign convention: Q positive into system, W positive out of system)
   - U is a state function (path-independent)
   - Q and W are process quantities (path-dependent)

2. Physical Interpretation:
   - Energy conservation applied to thermodynamic systems
   - Change in internal energy equals net energy transfer
   - System energy can change only through boundary interactions
   - Establishes energy as a conserved quantity

3. Closed System Applications:
   - Isothermal process (constant T): ΔU = 0 for ideal gas, so Q = -W
   - Adiabatic process (no heat transfer): ΔU = W
   - Isochoric process (constant V): ΔU = Q (no work)
   - Isobaric process (constant P): ΔU = Q - PΔV

4. Open System Extension:
   - Includes mass flow energy terms
   - Steady flow energy equation
   - Basis for analyzing flow devices (turbines, nozzles, etc.)`
      },
      {
        title: 'Microscopic Interpretation',
        content: `Internal energy has molecular origins:

1. Molecular Components:
   - Translational kinetic energy of molecules
   - Rotational kinetic energy of molecules
   - Vibrational energy of molecules
   - Electronic energy states
   - Intermolecular potential energy
   - Nuclear binding energy (typically not considered in thermodynamics)

2. Ideal Gas Internal Energy:
   - U depends only on temperature for ideal gas
   - U = f(T) only
   - Monatomic ideal gas: U = (3/2)nRT
   - Diatomic ideal gas: U = (5/2)nRT (at room temperature)
   - Polyatomic molecules have additional energy modes

3. Real Substances:
   - Internal energy depends on multiple variables
   - For simple compressible substances: U = U(T,V) or U = U(T,P)
   - Includes intermolecular forces
   - Phase changes involve significant internal energy changes

4. Statistical Mechanics Connection:
   - Internal energy as ensemble average
   - U = Σ(probability × energy of microstate)
   - Links macroscopic property to microscopic behavior`
      },
      {
        title: 'Mathematical Properties',
        content: `Internal energy has important mathematical characteristics:

1. State Function Properties:
   - Path-independent (depends only on current state)
   - Exact differential (dU is a complete differential)
   - Point function (defined at every equilibrium state)
   - ΔU = U₂ - U₁ (independent of path between states 1 and 2)

2. Relation to Other Properties:
   - (∂U/∂T)ᵥ = Cᵥ (constant-volume heat capacity)
   - (∂U/∂V)ₜ = T(∂P/∂T)ᵥ - P (from Maxwell relations)
   - For ideal gas: (∂U/∂V)ₜ = 0 (internal energy independent of volume)

3. Specific and Molar Forms:
   - Specific internal energy: u = U/m (per unit mass)
   - Molar internal energy: u = U/n (per mole)
   - Extensive property (scales with system size)
   - Specific internal energy is intensive

4. Reference States:
   - Only changes in internal energy are physically meaningful
   - Reference state must be defined for absolute values
   - Common reference: u = 0 at T = 0 K (third law)
   - Engineering reference states often use standard temperature and pressure`
      },
      {
        title: 'Measurement and Calculation',
        content: `Determining internal energy values:

1. Calorimetry:
   - Measure heat transfer under controlled conditions
   - Constant-volume calorimetry: ΔU = Q (for closed system)
   - Bomb calorimeter measures internal energy changes directly
   - Relates to enthalpy via ΔU = ΔH - Δ(PV)

2. Equations of State:
   - Calculate U changes from measurable properties
   - For ideal gas: ΔU = nCᵥΔT
   - For real gases: departure functions from ideal behavior
   - For liquids and solids: use empirical data and models

3. Tabulated Data:
   - Steam tables for water and steam
   - Refrigerant tables
   - Thermodynamic property software
   - Standard reference databases

4. Computational Methods:
   - Molecular dynamics simulations
   - Quantum chemistry calculations
   - Equation of state models
   - Empirical correlations`
      },
      {
        title: 'Applications',
        content: `Internal energy is central to many practical applications:

1. Energy Conversion Systems:
   - Power plants and engines
   - Refrigeration and heat pumps
   - Energy storage systems
   - Fuel cells and batteries

2. Chemical Processes:
   - Combustion and reaction energetics
   - Phase changes and material processing
   - Chemical equilibrium calculations
   - Heating and cooling processes

3. Material Science:
   - Phase transitions
   - Thermal properties of materials
   - Energy storage materials
   - Thermal stability analysis

4. Biological Systems:
   - Metabolic processes
   - Bioenergetics
   - Protein folding
   - Cellular energy transformations`
      }
      
    ]
  }


};
