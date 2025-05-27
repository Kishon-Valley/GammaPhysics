export const physicsDefinitions = {
  'Acceleration': {
    title: 'Acceleration',
    category: 'Mechanics',
    definition: 'The rate of change of velocity with respect to time.',
    formula: 'a = Δv/Δt',
    hasNotes: true
  },
  'Angular Momentum': {
    title: 'Angular Momentum',
    category: 'Mechanics',
    definition: 'A measure of the rotational motion of an object.',
    formula: 'L = I × ω',
    hasNotes: true
  },
  'Canonical Transformations': {
    title: 'Canonical Transformations',
    category: 'Mechanics',
    definition: 'Coordinate transformations in phase space that preserve the form of Hamilton\'s equations of motion.',
    formula: 'dQ/dt = ∂H/∂P, dP/dt = -∂H/∂Q',
    hasNotes: true
  },
  'Constraint Forces': {
    title: 'Constraint Forces',
    category: 'Mechanics',
    definition: 'Forces that restrict the motion of a system to follow specific paths or surfaces, classified as holonomic or non-holonomic based on their mathematical properties.',
    formula: 'f(q₁, q₂, ..., qₙ, t) = 0',
    hasNotes: true
  },
  'Continuum Mechanics Basics': {
    title: 'Continuum Mechanics Basics',
    category: 'Mechanics',
    definition: 'The study of the mechanical behavior of materials modeled as a continuous mass rather than as discrete particles, focusing on deformation and mechanical response.',
    formula: 'σᵢᵛ = Cᵢᵛᵏᵉεᵏᵉ',
    hasNotes: true
  },
  'Central Force Motion': {
    title: 'Central Force Motion',
    category: 'Mechanics',
    definition: 'The motion of a particle under the influence of a force directed toward a fixed point, with magnitude dependent only on the distance from that point.',
    formula: 'F = F(r)\hat{r}',
    hasNotes: true
  },
  'Chaos in Dynamical Systems': {
    title: 'Chaos in Dynamical Systems',
    category: 'Mechanics',
    definition: 'The study of systems whose behavior is highly sensitive to initial conditions, exhibiting complex, unpredictable patterns despite deterministic underlying rules.',
    formula: 'λ = \lim_{t \to \infty} \frac{1}{t} \ln \frac{|\delta Z(t)|}{|\delta Z_0|}',
    hasNotes: true
  },
  'D\'Alembert\'s Principle': {
    title: 'D\'Alembert\'s Principle',
    category: 'Mechanics',
    definition: 'A reformulation of Newton\'s laws that incorporates constraints and transforms dynamics problems into equivalent statics problems.',
    formula: '\sum_i (F_i - m_i a_i) \cdot \delta r_i = 0',
    hasNotes: true
  },
  'Field Theory Preliminaries': {
    title: 'Field Theory Preliminaries',
    category: 'Mechanics',
    definition: 'The conceptual and mathematical framework for transitioning from discrete particle systems to continuous fields, forming the foundation for classical and quantum field theories.',
    formula: '\mathcal{L} = \int L(\phi, \partial_\mu \phi) d^3x',
    hasNotes: true
  },
  'Hamilton-Jacobi Theory': {
    title: 'Hamilton-Jacobi Theory',
    category: 'Mechanics',
    definition: 'A formulation of classical mechanics that transforms Hamilton\'s equations into a single first-order partial differential equation.',
    formula: '∂S/∂t + H(q, ∂S/∂q, t) = 0',
    hasNotes: true
  },
  'Hamiltonian Mechanics': {
    title: 'Hamiltonian Mechanics',
    category: 'Mechanics',
    definition: 'A reformulation of classical mechanics that uses the total energy of a system to derive equations of motion.',
    formula: 'H = T + V',
    hasNotes: true
  },
  'Lagrangian Mechanics': {
    title: 'Lagrangian Mechanics',
    category: 'Mechanics',
    definition: 'A reformulation of classical mechanics that describes system dynamics using energy rather than forces.',
    formula: 'L = T - V',
    hasNotes: true
  },
  'Poisson Brackets': {
    title: 'Poisson Brackets',
    category: 'Mechanics',
    definition: 'A binary operation in Hamiltonian mechanics that relates classical observables and provides a bridge to quantum mechanics.',
    formula: '{f,g} = Σ(∂f/∂qᵢ·∂g/∂pᵢ - ∂f/∂pᵢ·∂g/∂qᵢ)',
    hasNotes: true
  },
  'Principle of Least Action': {
    title: 'Principle of Least Action',
    category: 'Mechanics',
    definition: 'A variational principle stating that the path taken by a physical system is the one that minimizes the action.',
    formula: 'δS = δ∫L dt = 0',
    hasNotes: true
  },
  'Rigid Body Dynamics': {
    title: 'Rigid Body Dynamics',
    category: 'Mechanics',
    definition: 'The study of motion of solid bodies where deformation is neglected, focusing on translation and rotation.',
    formula: 'τ = Iα',
    hasNotes: true
  },
  'Scattering Theory': {
    title: 'Scattering Theory',
    category: 'Mechanics',
    definition: 'The study of how particles and waves are deflected by matter or other particles, providing information about the interaction forces.',
    formula: 'dσ/dΩ = |f(θ,φ)|²',
    hasNotes: true
  },
  'Small Oscillations and Normal Modes': {
    title: 'Small Oscillations and Normal Modes',
    category: 'Mechanics',
    definition: 'The study of vibrations in systems with multiple degrees of freedom, focusing on coupled oscillators and their characteristic patterns.',
    formula: 'M\ddot{x} + Kx = 0',
    hasNotes: true
  },
  'Special Relativity': {
    title: 'Special Relativity',
    category: 'Mechanics',
    definition: 'Einstein\'s theory describing the relationship between space and time, based on the constancy of the speed of light and the principle of relativity.',
    formula: 'E = mc^2',
    hasNotes: true
  },
  'Stability of Motion': {
    title: 'Stability of Motion',
    category: 'Mechanics',
    definition: 'The study of how dynamical systems respond to small perturbations, determining whether the system returns to, remains near, or deviates from its original state.',
    formula: '\dot{\mathbf{x}} = \mathbf{A}\mathbf{x}',
    hasNotes: true
  },
  'Torque': {
    title: 'Torque',
    category: 'Mechanics',
    definition: 'The rotational force that causes angular acceleration.',
    formula: 'τ = r × F',
    hasNotes: true
  },
  'Moment of Inertia': {
    title: 'Moment of Inertia',
    category: 'Mechanics',
    definition: 'A measure of resistance to rotational acceleration.',
    formula: 'I = Σmr²',
    hasNotes: true
  },
  'Non-inertial Reference Frames': {
    title: 'Non-inertial Reference Frames',
    category: 'Mechanics',
    definition: 'Reference frames that are accelerating or rotating, requiring the introduction of fictitious forces to apply Newton\'s laws.',
    formula: 'F = ma + m(a₁ + 2ω × v + ω × (ω × r))',
    hasNotes: true
  },
  'Diffraction': {
    title: 'Diffraction',
    category: 'Waves',
    definition: 'The bending of waves around obstacles or through openings, resulting in the spreading of waves into regions that would otherwise be in shadow.',
    formula: '\sin \theta = \frac{m\lambda}{d}',
    hasNotes: true
  },
  'Dispersion Relation': {
    title: 'Dispersion Relation',
    category: 'Waves',
    definition: 'The mathematical function that relates the frequency or angular frequency of a wave to its wavenumber or wave vector, characterizing how waves propagate through a medium.',
    formula: '\omega = \omega(k)',
    hasNotes: true
  },
  'Phase & Group Velocity': {
    title: 'Phase & Group Velocity',
    category: 'Waves',
    definition: 'Phase velocity is the speed at which the phase of a wave propagates in space, while group velocity is the speed at which the overall envelope or energy of a wave travels.',
    formula: 'v_p = \omega/k, v_g = d\omega/dk',
    hasNotes: true
  },
  'Standing vs. Traveling Waves': {
    title: 'Standing vs. Traveling Waves',
    category: 'Waves',
    definition: 'Traveling waves propagate through space transferring energy, while standing waves oscillate in fixed positions with nodes (zero amplitude) and antinodes (maximum amplitude).',
    formula: 'y_{traveling}(x,t) = A\sin(kx-\omega t), y_{standing}(x,t) = 2A\sin(kx)\cos(\omega t)',
    hasNotes: true
  },
  'Harmonic Waves': {
    title: 'Harmonic Waves',
    category: 'Waves',
    definition: 'Waves with sinusoidal shape that are solutions to the linear wave equation, characterized by amplitude, wavelength, frequency, and phase.',
    formula: 'y(x,t) = A\sin(kx-\omega t+\phi)',
    hasNotes: true
  },
  'Wave Impedance': {
    title: 'Wave Impedance',
    category: 'Waves',
    definition: 'A property of a medium that characterizes the relationship between the driving force and the resulting velocity in a wave, affecting wave transmission and reflection at boundaries.',
    formula: 'Z = \sqrt{T\mu} \text{ (strings)}, Z = \rho c \text{ (acoustic)}, Z = \sqrt{\mu/\varepsilon} \text{ (EM)}',
    hasNotes: true
  },
  'Reflection & Transmission': {
    title: 'Reflection & Transmission',
    category: 'Waves',
    definition: 'Phenomena that occur when waves encounter a boundary between two media, where part of the wave energy is reflected and part is transmitted according to boundary conditions.',
    formula: 'r = \frac{Z_2 - Z_1}{Z_2 + Z_1}, t = \frac{2Z_2}{Z_2 + Z_1}',
    hasNotes: true
  },
  'Huygens Principle': {
    title: 'Huygens\' Principle',
    category: 'Waves',
    definition: 'A method of wave propagation analysis that treats each point on a wavefront as a source of secondary spherical wavelets, with the new wavefront forming as the envelope of these wavelets.',
    formula: 'E(P) = \frac{1}{4\pi}\oint_S \left(\frac{e^{ikr}}{r}\frac{\partial \psi}{\partial n} - \psi \frac{\partial}{\partial n}\frac{e^{ikr}}{r}\right) dS',
    hasNotes: true
  },
  'Interference': {
    title: 'Interference',
    category: 'Waves',
    definition: 'The phenomenon where two or more waves superpose to form a resultant wave of greater, lower, or the same amplitude, depending on their relative phase.',
    formula: 'I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta',
    hasNotes: true
  },
  'Polarization': {
    title: 'Polarization',
    category: 'Waves',
    definition: 'A property of transverse waves that describes the orientation of oscillations perpendicular to the direction of wave propagation.',
    formula: 'E = E_0(\hat{x}\cos\omega t + \hat{y}\sin\omega t)',
    hasNotes: true
  },
  'Wave Packets': {
    title: 'Wave Packets',
    category: 'Waves',
    definition: 'Localized wave disturbances formed by the superposition of waves with different frequencies, resulting in a spatially confined wave group.',
    formula: '\psi(x,t) = \int_{-\infty}^{\infty} A(k)e^{i(kx-\omega(k)t)}dk',
    hasNotes: true
  },
  'Normal Modes': {
    title: 'Normal Modes',
    category: 'Waves',
    definition: 'The characteristic patterns of oscillation in a bounded system, where all parts of the system oscillate at the same frequency with fixed amplitude ratios.',
    formula: '\psi_n(x,t) = A_n \phi_n(x) \cos(\omega_n t + \delta_n)',
    hasNotes: true
  },
  'Damped & Driven Waves': {
    title: 'Damped & Driven Waves',
    category: 'Waves',
    definition: 'Wave systems subject to energy dissipation (damping) and external forcing, exhibiting resonance behavior when the driving frequency approaches a natural frequency.',
    formula: '\frac{d^2x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = F_0\cos(\omega t)',
    hasNotes: true
  },
  'Nonlinear Waves': {
    title: 'Nonlinear Waves',
    category: 'Waves',
    definition: 'Waves governed by nonlinear equations, exhibiting phenomena such as amplitude-dependent propagation speed, solitons, and shock formation.',
    formula: '\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + \alpha\frac{\partial^3 u}{\partial x^3} = 0',
    hasNotes: true
  },
  'Doppler Effect': {
    title: 'Doppler Effect',
    category: 'Waves',
    definition: 'The change in frequency or wavelength of a wave in relation to an observer who is moving relative to the wave source.',
    formula: 'f_{observed} = f_{source}\frac{v \pm v_o}{v \mp v_s}',
    hasNotes: true
  },
  'Acoustic Waves': {
    title: 'Acoustic Waves',
    category: 'Waves',
    definition: 'Mechanical pressure waves that propagate through a medium by compression and rarefaction of the medium particles.',
    formula: 'c_s = \sqrt{\frac{\partial p}{\partial \rho}}',
    hasNotes: true
  },
  'Electromagnetic Waves in Vacuum': {
    title: 'Electromagnetic Waves in Vacuum',
    category: 'Waves',
    definition: 'Self-propagating waves of oscillating electric and magnetic fields that travel through vacuum or matter at the speed of light.',
    formula: '\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}',
    hasNotes: true
  },
  'Electromagnetic Waves': {
    title: 'Electromagnetic Waves',
    category: 'Electricity',
    definition: 'Self-propagating waves of oscillating electric and magnetic fields derived from Maxwell\'s equations, traveling at the speed of light in vacuum.',
    formula: '\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}',
    hasNotes: true
  },
  'Quantum Wave Mechanics': {
    title: 'Quantum Wave Mechanics',
    category: 'Waves',
    definition: 'The mathematical framework describing quantum particles as probability waves, where the wavefunction encodes all measurable information about a quantum system.',
    formula: 'i\hbar\frac{\partial\psi}{\partial t} = \hat{H}\psi',
    hasNotes: true
  },
  'Laws of Thermodynamics': {
    title: 'Laws of Thermodynamics',
    category: 'Thermodynamics',
    definition: 'The fundamental physical principles governing the transfer of energy as heat and work in thermodynamic systems.',
    formula: '\Delta U = Q - W, \quad \Delta S \geq 0',
    hasNotes: true
  },
  'Thermodynamic Systems': {
    title: 'Thermodynamic Systems',
    category: 'Thermodynamics',
    definition: 'Physical systems classified by their ability to exchange matter and energy with their surroundings, bounded by walls with specific properties.',
    formula: 'dU = \delta Q + \delta W + \sum_i \mu_i dN_i',
    hasNotes: true
  },
  'State Variables & Equations of State': {
    title: 'State Variables & Equations of State',
    category: 'Thermodynamics',
    definition: 'Parameters that characterize the equilibrium state of a thermodynamic system and the mathematical relationships between them.',
    formula: 'PV = nRT',
    hasNotes: true
  },
  'Thermodynamic Processes': {
    title: 'Thermodynamic Processes',
    category: 'Thermodynamics',
    definition: 'Transformations that change the state of a thermodynamic system, characterized by their path and reversibility.',
    formula: '\eta_{Carnot} = 1 - \frac{T_C}{T_H}',
    hasNotes: true
  },
  'Work & Heat': {
    title: 'Work & Heat',
    category: 'Thermodynamics',
    definition: 'The two primary mechanisms of energy transfer between a system and its surroundings, with work being organized energy transfer and heat being disorganized energy transfer.',
    formula: 'dW = -PdV',
    hasNotes: true
  },
  'Internal Energy': {
    title: 'Internal Energy',
    category: 'Thermodynamics',
    definition: 'The total energy contained within a thermodynamic system, excluding the kinetic and potential energy of the system as a whole.',
    formula: 'dU = δQ + δW',
    hasNotes: true
  },
  'Wave Equation': {
    title: 'Wave Equation',
    category: 'Waves',
    definition: 'The partial differential equation that describes how waves propagate through a medium, applicable to mechanical waves, electromagnetic waves, and quantum mechanical waves.',
    formula: '\nabla^2 \psi = \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2}',
    hasNotes: true
  },
  'Frequency': {
    title: 'Frequency',
    category: 'Waves',
    definition: 'The number of occurrences of a repeating event per unit time.',
    formula: 'f = 1/T',
    hasNotes: true
  },
  'Wave Speed': {
    title: 'Wave Speed',
    category: 'Waves',
    definition: 'The rate at which a wave propagates through a medium.',
    formula: 'v = λf',
    hasNotes: true
  },
  'Nuclear Decay Modes': {
    title: 'Nuclear Decay Modes',
    category: 'Nuclear Physics',
    definition: 'Different ways in which unstable atomic nuclei transform to achieve greater stability by emitting particles or radiation.',
    formula: 'A → B + radiation/particles',
    hasNotes: true
  },
  'Nuclear Stability': {
    title: 'Nuclear Stability',
    category: 'Nuclear Physics',
    definition: 'The tendency of an atomic nucleus to resist radioactive decay and maintain its current configuration.',
    formula: 'N/Z ratio, binding energy per nucleon',
    hasNotes: true
  },
  'Nuclear Reactions': {
    title: 'Nuclear Reactions',
    category: 'Nuclear Physics',
    definition: 'Processes involving changes in the nucleus of an atom, including transformations, emissions, and interactions.',
    formula: 'A(a,b)B',
    hasNotes: true
  },
  'Collective Model': {
    title: 'Collective Model',
    category: 'Nuclear Physics',
    definition: 'A nuclear model describing collective motion of nucleons, emphasizing nuclear deformations and collective excitations.',
    formula: 'Deformation parameter β, Rotational/Vibrational Energies',
    hasNotes: true
  },
  'Radioactive Decay Modes': {
    title: 'Radioactive Decay Modes',
    category: 'Nuclear Physics',
    definition: 'Different mechanisms by which unstable atomic nuclei transform to achieve greater stability through particle emissions.',
    formula: 'A → B + radiation/particles',
    hasNotes: true
  },
  'Fermi\'s Golden Rule': {
    title: 'Fermi\'s Golden Rule',
    category: 'Nuclear Physics',
    definition: 'A quantum mechanical formula describing transition rates between quantum states in interactions.',
    formula: 'Γ = 2π|⟨f|H\'|i⟩|²ρ(E_f)',
    hasNotes: true
  },
  'Gamow-Teller Transitions': {
    title: 'Gamow-Teller Transitions',
    category: 'Nuclear Physics',
    definition: 'Spin-dependent nuclear beta decay transitions involving changes in nuclear spin and isospin.',
    formula: 'ΔS = 0, 1; ΔT = 1',
    hasNotes: true
  },
  'Nuclear Reaction Cross-Sections': {
    title: 'Nuclear Reaction Cross-Sections',
    category: 'Nuclear Physics',
    definition: 'Measure of the probability of nuclear interactions as a function of incident particle energy.',
    formula: 'σ(E) = πr² f(E)',
    hasNotes: true
  },
  'Compound Nucleus Model': {
    title: 'Compound Nucleus Model',
    category: 'Nuclear Physics',
    definition: 'A theoretical approach describing nuclear reactions through formation of an intermediate, excited nuclear state.',
    formula: 'P(E) ∝ ρ(E_c)',
    hasNotes: true
  },
  'Stellar Nucleosynthesis': {
    title: 'Stellar Nucleosynthesis',
    category: 'Nuclear Physics',
    definition: 'Processes of element formation through nuclear fusion in stellar environments.',
    formula: 'A + B → C + energy',
    hasNotes: true
  },
  'r-Process': {
    title: 'r-Process',
    category: 'Nuclear Physics',
    definition: 'Rapid neutron capture process for synthesizing heavy elements in extreme astrophysical environments.',
    formula: 'A(n,γ)A+1 (repeated neutron captures)',
    hasNotes: true
  },
  'Supernovae Dynamics': {
    title: 'Supernovae Dynamics',
    category: 'Nuclear Physics',
    definition: 'Mechanism of stellar core collapse and explosive nucleosynthesis.',
    formula: 'M_core > M_Chandrasekhar',
    hasNotes: true
  },
  'Quark-Gluon Plasma': {
    title: 'Quark-Gluon Plasma',
    category: 'Nuclear Physics',
    definition: 'Deconfined state of quarks and gluons at extremely high temperatures and densities.',
    formula: 'T > T_c, ρ > ρ_c',
    hasNotes: true
  },
  'Neutrino Physics': {
    title: 'Neutrino Physics',
    category: 'Nuclear Physics',
    definition: 'Study of neutrino properties, interactions, and oscillations.',
    formula: 'Δm² = m_2² - m_1²',
    hasNotes: true
  },
  'Accelerators & Detectors': {
    title: 'Accelerators & Detectors',
    category: 'Nuclear Physics',
    definition: 'Experimental technologies for particle acceleration and detection.',
    formula: 'E = qV, Δp = FΔt',
    hasNotes: true
  },
  'Mössbauer Effect': {
    title: 'Mössbauer Effect',
    category: 'Nuclear Physics',
    definition: 'Recoilless emission and absorption of gamma rays by atomic nuclei in solid-state materials.',
    formula: 'E_γ = E_0(1 - v/c)',
    hasNotes: true
  },
  'Neutron Scattering': {
    title: 'Neutron Scattering',
    category: 'Nuclear Physics',
    definition: 'Technique for investigating nuclear and material structures through neutron interactions.',
    formula: 'I(q) ∝ |ρ(r)|',
    hasNotes: true
  },
  'Exotic Nuclei': {
    title: 'Exotic Nuclei',
    category: 'Nuclear Physics',
    definition: 'Nuclei with unusual proton-to-neutron ratios or structural properties that deviate from standard nuclear models.',
    formula: 'N >> Z or Z >> N',
    hasNotes: true
  },
  'Nuclear Quantum Chromodynamics': {
    title: 'Nuclear Quantum Chromodynamics',
    category: 'Nuclear Physics',
    definition: 'Application of quantum chromodynamics to understand nuclear forces and structure from first principles.',
    formula: 'V_{NN}(r) = V_{QCD}(r)',
    hasNotes: true
  },
  'Standing Wave': {
    title: 'Standing Wave',
    category: 'Waves',
    definition: 'A wave pattern that appears stationary, resulting from the interference of two waves of equal frequency and amplitude traveling in opposite directions.',
    formula: 'y(x,t) = 2A\sin(kx)\cos(\omega t)',
    hasNotes: true
  },
  'Superposition Principle': {
    title: 'Superposition Principle',
    category: 'Waves',
    definition: 'The principle stating that when two or more waves overlap, the resulting displacement at any point is the algebraic sum of the displacements of the individual waves.',
    formula: '\psi_{total} = \psi_1 + \psi_2 + ... + \psi_n',
    hasNotes: true
  },
  'Entropy': {
    title: 'Entropy',
    category: 'Thermodynamics',
    definition: 'A measure of the disorder or randomness in a system.',
    formula: 'ΔS = Q/T',
    hasNotes: true
  },
  'Heat Capacity': {
    title: 'Heat Capacity',
    category: 'Thermodynamics',
    definition: 'The amount of heat required to raise temperature by one degree.',
    formula: 'C = Q/ΔT',
    hasNotes: true
  },
  'Thermal Conductivity': {
    title: 'Thermal Conductivity',
    category: 'Thermodynamics',
    definition: 'The ability of a material to conduct heat.',
    formula: 'Q = -kA(dT/dx)',
    hasNotes: true
  },
  'Work': {
    title: 'Work',
    category: 'Energy',
    definition: 'The transfer of energy when a force acts upon an object to cause a displacement.',
    formula: 'W = F × d × cos(θ)',
    hasNotes: true
  },
  'Power': {
    title: 'Power',
    category: 'Energy',
    definition: 'The rate of doing work or transferring energy.',
    formula: 'P = W/t',
    hasNotes: true
  },
  'Kinetic Energy': {
    title: 'Kinetic Energy',
    category: 'Energy',
    definition: 'The energy possessed by an object due to its motion.',
    formula: 'KE = ½mv²',
    hasNotes: true
  },
  'Conductors & Electrostatics': {
    title: 'Conductors & Electrostatics',
    category: 'Electricity',
    definition: 'Materials that allow electric charge to flow freely, with properties including surface charge distribution, shielding, and grounding.',
    formula: '',
    hasNotes: true
  },
  'Dielectrics': {
    title: 'Dielectrics',
    category: 'Electricity',
    definition: 'Materials that can be polarized by an electric field, used as insulators and in capacitors to store charge.',
    formula: 'ε = ε₀(1 + χₑ)',
    hasNotes: true
  },
  'Current Density': {
    title: 'Current Density',
    category: 'Electricity',
    definition: 'The electric current flowing per unit area, describing the distribution of current in a conductor.',
    formula: 'J = σE; ∇⋅J = -∂ρ/∂t',
    hasNotes: true
  },
  'Relaxation Time': {
    title: 'Relaxation Time',
    category: 'Electricity',
    definition: 'The characteristic time for charge to dissipate in a conductor, determining how quickly excess charge redistributes.',
    formula: 'τ = ε/σ',
    hasNotes: true
  },
  'Ohm\'s Law': {
    title: 'Ohm\'s Law',
    category: 'Electricity',
    definition: 'The relationship between voltage, current, and resistance in a circuit.',
    formula: 'V = IR',
    hasNotes: true
  },
  'Kirchhoff\'s Laws': {
    title: 'Kirchhoff\'s Laws',
    category: 'Electricity',
    definition: 'Two laws that govern the behavior of electric circuits: the current law (sum of currents at a node is zero) and the voltage law (sum of voltages around a closed loop is zero).',
    formula: 'ΣI = 0 (node), ΣV = 0 (loop)',
    hasNotes: true
  },
  'RC/RL Circuits': {
    title: 'RC/RL Circuits',
    category: 'Electricity',
    definition: 'Circuits containing resistors with capacitors or inductors that exhibit transient responses when voltage or current changes, characterized by time constants.',
    formula: 'τ = RC, τ = L/R',
    hasNotes: true
  },
  'AC Circuits': {
    title: 'AC Circuits',
    category: 'Electricity',
    definition: 'Circuits powered by alternating current sources where voltage and current vary sinusoidally, analyzed using phasors and complex impedance.',
    formula: 'Z = R + iX',
    hasNotes: true
  },
  'Displacement Current': {
    title: 'Displacement Current',
    category: 'Electricity',
    definition: 'A changing electric field that produces a magnetic field, analogous to an electric current, completing Ampère\'s law for time-varying fields.',
    formula: 'J_d = ε₀ ∂E/∂t',
    hasNotes: true
  },
  'Maxwell\'s Equations (Electric Focus)': {
    title: 'Maxwell\'s Equations (Electric Focus)',
    category: 'Electricity',
    definition: 'The set of four equations that describe how electric fields are generated and altered by charges, currents, and changing magnetic fields, with emphasis on Faraday\'s law of induction.',
    formula: '∇×E = -∂B/∂t',
    hasNotes: true
  },
  'Plasma Physics': {
    title: 'Plasma Physics',
    category: 'Modern Physics',
    definition: 'The study of the fourth state of matter consisting of a gas of charged particles (ions and electrons) that exhibits collective behavior and electromagnetic interactions.',
    formula: 'λ_D = √(ε₀ k_B T/ne²)',
    hasNotes: true
  },
  'Green\'s Functions': {
    title: 'Green\'s Functions',
    category: 'Mathematical Physics',
    definition: 'Mathematical tools used to solve inhomogeneous differential equations, particularly useful for solving Poisson\'s equation with boundary conditions in electrostatics and other field theories.',
    formula: '∇²G(\mathbf{r}, \mathbf{r}\prime) = -δ(\mathbf{r} - \mathbf{r}\prime)',
    hasNotes: true
  },
  'Multipole Expansions': {
    title: 'Multipole Expansions',
    category: 'Electricity',
    definition: 'A mathematical series that represents a potential function as a sum of terms with increasing complexity, used to approximate potentials of charge distributions at large distances.',
    formula: 'V(r) = V_0 + V_1 + V_2 + ...',
    hasNotes: true
  },
  'Electrostatics in Matter': {
    title: 'Electrostatics in Matter',
    category: 'Electricity',
    definition: 'The study of electric fields and potentials in materials, distinguishing between bound charges (attached to atoms/molecules) and free charges (mobile), with the Clausius-Mossotti relation connecting microscopic and macroscopic properties.',
    formula: '(ε_r - 1)/(ε_r + 2) = (Nα)/(3ε_0)',
    hasNotes: true
  },
  'Electric Field': {
    title: 'Electric Field',
    category: 'Electricity',
    definition: 'The region around an electric charge where it exerts force on other charges.',
    formula: 'E = F/q',
    hasNotes: true
  },
  'Coulomb\'s Law': {
    title: 'Coulomb\'s Law',
    category: 'Electricity',
    definition: 'The mathematical formula describing the force between two point charges.',
    formula: 'F = k_e \\frac{q_1 q_2}{r^2}\\hat{r}',
    hasNotes: true
  },
  'Magnetism Basics': {
    title: 'Magnetism',
    category: 'Magnetism',
    definition: 'The study of magnetic fields and their interactions with matter.',
    formula: '',
    hasNotes: true
  },
  'Magnetic Field': {
    title: 'Magnetic Field',
    category: 'Magnetism',
    definition: 'A region where magnetic materials experience forces.',
    formula: 'B = F/(qv)',
    hasNotes: true
  },
  'Inductance': {
    title: 'Inductance',
    category: 'Magnetism',
    definition: 'A property of electrical circuits that describes how changes in current induce voltage, with self-inductance relating a circuit\'s own magnetic flux to its current, and mutual inductance describing flux linkage between circuits.',
    formula: 'L = Φ/I; M₁₂ = M₂₁',
    hasNotes: true
  },
  'Magnetic Materials': {
    title: 'Magnetic Materials',
    category: 'Magnetism',
    definition: 'Materials that respond to magnetic fields, characterized by their magnetization (M) which represents the density of magnetic dipole moments.',
    formula: 'H = B/μ₀ - M',
    hasNotes: true
  },
  'Dia/Paramagnetism': {
    title: 'Dia/Paramagnetism',
    category: 'Magnetism',
    definition: 'Two contrasting types of magnetic behavior in materials, characterized by their magnetic susceptibility.',
    formula: 'χₘ ≪ 1 (diamagnetic) vs. χₘ > 0 (paramagnetic)',
    hasNotes: true
  },
  'Ferromagnetism': {
    title: 'Ferromagnetism',
    category: 'Magnetism',
    definition: 'A magnetic property of materials characterized by spontaneous magnetization, magnetic domains, and hysteresis effects.',
    formula: 'M ≠ 0 when H = 0 (below Tc)',
    hasNotes: true
  },
  'Maxwell\'s Equations (Magnetic Focus)': {
    title: 'Maxwell\'s Equations (Magnetic Focus)',
    category: 'Magnetism',
    definition: 'The fundamental equations of electromagnetism that describe how magnetic fields are generated by currents and changing electric fields.',
    formula: '∇×B = μ₀J + μ₀ϵ₀∂E/∂t',
    hasNotes: true
  },
  'Poynting Vector': {
    title: 'Poynting Vector',
    category: 'Magnetism',
    definition: 'A vector quantity that represents the directional energy flux density of an electromagnetic field, describing the rate of energy transfer per unit area.',
    formula: 'S = E×B/μ₀',
    hasNotes: true
  },
  'Magnetic Energy': {
    title: 'Magnetic Energy',
    category: 'Magnetism',
    definition: 'The energy stored in magnetic fields, both in inductors carrying current and in free space containing magnetic fields.',
    formula: 'U = ½LI²; uᵦ = B²/(2μ₀)',
    hasNotes: true
  },
  'Superconductivity': {
    title: 'Superconductivity',
    category: 'Modern Physics',
    definition: 'A quantum mechanical phenomenon of exactly zero electrical resistance and expulsion of magnetic fields occurring in certain materials when cooled below a characteristic critical temperature.',
    formula: 'BCS theory: Cooper pairs, Meissner effect',
    hasNotes: true
  },
  'Magnetic Monopoles': {
    title: 'Magnetic Monopoles',
    category: 'Magnetism',
    definition: 'Hypothetical elementary particles that carry a single magnetic pole (north or south) and would be the magnetic analog of electric charges.',
    formula: 'qₘqₑ = 2πnℏ',
    hasNotes: true
  },
  'Landau Levels': {
    title: 'Landau Levels',
    category: 'Magnetism',
    definition: 'Quantized energy levels of charged particles moving in a magnetic field, leading to phenomena such as the quantum Hall effect.',
    formula: 'Eₙ = ℏωc(n + ½)',
    hasNotes: true
  },
  'Topological Magnets': {
    title: 'Topological Magnets',
    category: 'Magnetism',
    definition: 'Magnetic systems with topologically protected spin structures such as skyrmions, characterized by winding numbers and Berry phase effects.',
    formula: 'Q = (1/4π)∫m·(∂ₓm×∂ᵧm)dxdy',
    hasNotes: true
  },
  'Relativistic Magnetism': {
    title: 'Relativistic Magnetism',
    category: 'Magnetism',
    definition: 'The study of magnetic phenomena from the perspective of special relativity, showing that electric and magnetic fields transform into each other under Lorentz transformations.',
    formula: 'Fμν; E\' = γ(E + v×B); B\' = γ(B - v×E/c²)',
    hasNotes: true
  },
  'Unification': {
    title: 'Unification',
    category: 'Magnetism',
    definition: 'The coupling of electric and magnetic fields through Maxwell\'s equations, leading to electromagnetic waves and demonstrating the unified nature of electromagnetism.',
    formula: '∇×E = -∂B/∂t; ∇×B = μ₀J + μ₀ε₀∂E/∂t',
    hasNotes: true
  },
  'Gauge Theory': {
    title: 'Gauge Theory',
    category: 'Magnetism',
    definition: 'A field theory with a symmetry group that acts locally, where the magnetic vector potential A is interpreted as a gauge field, leading to the Aharonov-Bohm effect.',
    formula: 'B = ∇×A; A → A + ∇χ',
    hasNotes: true
  },
  'Magnetic Vector Potential': {
    title: 'Magnetic Vector Potential',
    category: 'Magnetism',
    definition: 'A vector field used to calculate the magnetic field, related to the magnetic field by the curl operation.',
    formula: 'B = ∇ × A',
    hasNotes: true
  },
  'Magnetic Dipoles': {
    title: 'Magnetic Dipoles',
    category: 'Magnetism',
    definition: 'A closed circulation of electric current or a pair of magnetic poles that produces a magnetic field similar to that of a bar magnet.',
    formula: 'm = IA, τ = m × B',
    hasNotes: true
  },
  'Gauss\'s Law for Magnetism': {
    title: 'Gauss\'s Law for Magnetism',
    category: 'Magnetism',
    definition: 'A law stating that the net magnetic flux through any closed surface is zero, indicating the absence of magnetic monopoles.',
    formula: '∇⋅B = 0',
    hasNotes: true
  },
  'Biot-Savart Law': {
    title: 'Biot-Savart Law',
    category: 'Magnetism',
    definition: 'A fundamental law of electromagnetism that relates magnetic fields to the currents which are their sources, allowing calculation of magnetic fields produced by current-carrying wires of arbitrary shape.',
    formula: 'd\mathbf{B} = \frac{\mu_0}{4\pi} \frac{I d\mathbf{l} \times \hat{\mathbf{r}}}{r^2}',
    hasNotes: true
  },
  'Ampère\'s Law': {
    title: 'Ampère\'s Law',
    category: 'Magnetism',
    definition: 'A fundamental law of electromagnetism that relates the integrated magnetic field around a closed loop to the electric current passing through the loop, with its differential form relating the curl of the magnetic field to current density.',
    formula: '\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{enc}; \nabla \times \mathbf{B} = \mu_0 \mathbf{J}',
    hasNotes: true
  },
  'Faraday\'s Law': {
    title: 'Faraday\'s Law',
    category: 'Magnetism',
    definition: 'The induced EMF in a circuit is equal to the rate of change of magnetic flux.',
    formula: 'ε = -dΦ/dt',
    hasNotes: true
  },
  'Magnetic Flux': {
    title: 'Magnetic Flux',
    category: 'Magnetism',
    definition: 'The measure of magnetic field passing through a surface.',
    formula: 'Φ = BA cos(θ)',
    hasNotes: true
  },
  'Magnetic Force': {
    title: 'Magnetic Force',
    category: 'Magnetism',
    definition: 'The force exerted on a moving charged particle in a magnetic field.',
    formula: 'F = qvB sin(θ)',
    hasNotes: true
  },
  'Wave Motion': {
    title: 'Wave Motion',
    category: 'Waves',
    definition: 'A disturbance that transfers energy through matter or space.',
    formula: 'v = fλ',
    hasNotes: true
  },
  'Quantum Mechanics': {
    title: 'Quantum Mechanics',
    category: 'Modern Physics',
    definition: 'The behavior of matter and energy at the molecular, atomic, nuclear, and even smaller microscopic levels.',
    formula: 'E = hf',
    hasNotes: true
  },
  'Thermodynamics': {
    title: 'Thermodynamics',
    category: 'Thermal Physics',
    definition: 'The study of heat, temperature, and their relation to energy and work.',
    formula: 'ΔU = Q - W',
    hasNotes: true
  },
  'Thermodynamic Potentials': {
    title: 'Thermodynamic Potentials',
    category: 'Thermal Physics',
    definition: 'State functions that characterize thermodynamic systems under different constraints, including Helmholtz free energy, Gibbs free energy, and enthalpy.',
    formula: 'F = U - TS, G = H - TS, H = U + PV',
    hasNotes: true
  },
  'Debye Model': {
    title: 'Debye Model',
    category: 'Thermal Physics',
    definition: 'A model for the heat capacity of solids that treats atomic vibrations as phonons with a maximum frequency, predicting the T³ dependence of heat capacity at low temperatures.',
    formula: 'CV ∝ T³ (at low T)',
    hasNotes: true
  },
  'Negative Temperature': {
    title: 'Negative Temperature',
    category: 'Thermal Physics',
    definition: 'A thermodynamic state where the temperature parameter is formally negative, occurring in systems with an upper bound on energy and population inversion.',
    formula: '1/T = ∂S/∂E < 0',
    hasNotes: true
  },
  'Information Thermodynamics': {
    title: 'Information Thermodynamics',
    category: 'Thermal Physics',
    definition: 'The study of the relationship between information processing and thermodynamics, connecting concepts from information theory with physical laws of thermodynamics.',
    formula: 'Landauer\'s principle: ΔE ≥ k₂T⋅ln(2) per bit erased',
    hasNotes: true
  },
  'Van der Waals Equation': {
    title: 'Van der Waals Equation',
    category: 'Thermal Physics',
    definition: 'An equation of state for real gases that accounts for molecular volume and intermolecular attractive forces, improving upon the ideal gas law.',
    formula: '(P + a/V²)(V - b) = nRT',
    hasNotes: true
  },
  'Helmholtz Free Energy': {
    title: 'Helmholtz Free Energy',
    category: 'Thermal Physics',
    definition: 'A thermodynamic potential that measures the useful work obtainable from a closed thermodynamic system at constant temperature and volume.',
    formula: 'F = U - TS',
    hasNotes: true
  },
  'Gibbs Free Energy': {
    title: 'Gibbs Free Energy',
    category: 'Thermal Physics',
    definition: 'A thermodynamic potential that measures the maximum reversible work that a system can perform at constant temperature and pressure, and indicates the spontaneity of a process.',
    formula: 'G = H - TS; ΔG ≤ 0 for spontaneous processes',
    hasNotes: true
  },
  'Critical Exponents': {
    title: 'Critical Exponents',
    category: 'Thermal Physics',
    definition: 'Parameters that describe how physical quantities scale near critical points in phase transitions, exhibiting universal behavior independent of microscopic details.',
    formula: 'CV ∼ |T-Tc|⁻ᵅ',
    hasNotes: true
  },
  'Carnot Efficiency': {
    title: 'Carnot Efficiency',
    category: 'Thermal Physics',
    definition: 'The maximum possible efficiency of a heat engine operating between two temperature reservoirs, as determined by the second law of thermodynamics.',
    formula: 'η = 1 - TC/TH',
    hasNotes: true
  },
  'Grand Canonical Ensemble': {
    title: 'Grand Canonical Ensemble',
    category: 'Thermal Physics',
    definition: 'A statistical ensemble that describes systems in thermal and chemical equilibrium with a reservoir, allowing exchange of both energy and particles.',
    formula: 'Z = ∑N,i e^−β(Ei−μN)',
    hasNotes: true
  },
  'Virial Theorem': {
    title: 'Virial Theorem',
    category: 'Thermal Physics',
    definition: 'A theorem in classical mechanics that relates the time-averaged kinetic energy of a stable system to the potential energy or forces acting on the system.',
    formula: '⟨K⟩ = −1/2⟨∑i Fi⋅ri⟩',
    hasNotes: true
  },
  'Liouville\'s Theorem': {
    title: 'Liouville\'s Theorem',
    category: 'Thermal Physics',
    definition: 'A fundamental theorem in Hamiltonian mechanics stating that the phase-space density is conserved along the trajectories of a Hamiltonian system.',
    formula: 'dρ/dt = 0',
    hasNotes: true
  },
  'Ergodic Hypothesis': {
    title: 'Ergodic Hypothesis',
    category: 'Thermal Physics',
    definition: 'A fundamental assumption in statistical mechanics that states the time average of a system equals the ensemble average over all accessible microstates.',
    formula: '⟨A⟩time = ⟨A⟩ensemble',
    hasNotes: true
  },
  'Density Matrix': {
    title: 'Density Matrix',
    category: 'Thermal Physics',
    definition: 'A quantum mechanical operator that describes the statistical state of a quantum system, generalizing classical probability distributions to quantum systems.',
    formula: 'ρ = ∑i pi|ψi⟩⟨ψi|, Tr(ρ) = 1',
    hasNotes: true
  },
  'Kubo Formula': {
    title: 'Kubo Formula',
    category: 'Thermal Physics',
    definition: 'A fundamental equation in linear response theory that relates the response of a system to an external perturbation through correlation functions of the unperturbed system.',
    formula: 'χAB(t) = (i/ℏ)⟨[A(t),B(0)]⟩θ(t)',
    hasNotes: true
  },
  'Landau Damping': {
    title: 'Landau Damping',
    category: 'Thermal Physics',
    definition: 'A collisionless damping mechanism in plasmas where waves transfer energy to particles moving at velocities close to the wave phase velocity, causing wave amplitude to decrease without entropy increase.',
    formula: 'γ ∝ -πω₂ₙ(∂f₀/∂v)|ᵥ=ω/ᵰ6',
    hasNotes: true
  },
  'Detailed Balance': {
    title: 'Detailed Balance',
    category: 'Thermal Physics',
    definition: 'A condition for equilibrium in Markov processes stating that the rate of transitions between any two states in a system at equilibrium must be equal in both directions.',
    formula: 'Wₙ→ₘPₙᵉᵅ = Wₘ→ₙPₘᵉᵅ',
    hasNotes: true
  },
  'Tsallis Entropy': {
    title: 'Tsallis Entropy',
    category: 'Thermal Physics',
    definition: 'A generalization of Boltzmann-Gibbs entropy for systems with long-range interactions, fractal structures, or long-time memory, characterized by a non-extensivity parameter q.',
    formula: 'Sᵅ = kᴱ(1-∑ᵢ pᵢ^q)/(q-1)',
    hasNotes: true
  },
  'Second Quantization': {
    title: 'Second Quantization',
    category: 'Modern Physics',
    definition: 'A mathematical framework in quantum field theory where fields are treated as operators acting on Fock space, enabling the description of systems with variable particle numbers.',
    formula: 'ϕ̂(x): Field operator creating/annihilating particles',
    hasNotes: true
  },
  'Feynman Diagrams': {
    title: 'Feynman Diagrams',
    category: 'Modern Physics',
    definition: 'Pictorial representations of mathematical expressions describing the behavior of subatomic particles, used to calculate scattering amplitudes in quantum field theory.',
    formula: 'Perturbative expansion of S-matrix elements',
    hasNotes: true
  },
  'Standard Model': {
    title: 'Standard Model',
    category: 'Modern Physics',
    definition: 'The comprehensive theory describing three of the four known fundamental forces (electromagnetic, weak, and strong interactions) and classifying all known elementary particles.',
    formula: 'SU(3)ᴄ × SU(2)ᴷ × U(1)ᴴ',
    hasNotes: true
  },
  'Quark Model': {
    title: 'Quark Model',
    category: 'Modern Physics',
    definition: 'A classification scheme for hadrons in terms of their valence quarks, providing a framework for understanding the properties and spectroscopy of strongly interacting particles.',
    formula: 'QCD: Confinement and asymptotic freedom',
    hasNotes: true
  },
  'Neutrino Oscillations': {
    title: 'Neutrino Oscillations',
    category: 'Modern Physics',
    definition: 'The quantum mechanical phenomenon where neutrinos change flavor (electron, muon, tau) as they propagate through space, indicating they have non-zero mass.',
    formula: 'Δmᵢᵗ²: Mass-squared differences',
    hasNotes: true
  },
  'CP Violation': {
    title: 'CP Violation',
    category: 'Modern Physics',
    definition: 'The violation of the combined symmetry of charge conjugation (C) and parity (P), which is crucial for explaining the matter-antimatter asymmetry in the universe.',
    formula: 'Sakharov conditions for baryogenesis',
    hasNotes: true
  },
  'Topological Insulators': {
    title: 'Topological Insulators',
    category: 'Modern Physics',
    definition: 'Materials that behave as insulators in their interior but have conducting states on their surface or edge, protected by time-reversal symmetry and characterized by a topological invariant.',
    formula: 'Bulk-boundary correspondence',
    hasNotes: true
  },
  'Quantum Hall Effects': {
    title: 'Quantum Hall Effects',
    category: 'Modern Physics',
    definition: 'Quantum mechanical version of the Hall effect observed in two-dimensional electron systems subjected to low temperatures and strong magnetic fields, exhibiting precisely quantized Hall resistance.',
    formula: 'σᵧᵧ = ν e²/h (ν: filling factor)',
    hasNotes: true
  },
  'Quantum Entanglement': {
    title: 'Quantum Entanglement',
    category: 'Modern Physics',
    definition: 'A quantum mechanical phenomenon where the quantum states of two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others, regardless of the distance separating them.',
    formula: 'Bell inequality: |E(a,b) + E(a,b′) + E(a′,b) - E(a′,b′)| ≤ 2',
    hasNotes: true
  },
  'Wave-Particle Duality': {
    title: 'Wave-Particle Duality',
    category: 'Modern Physics',
    definition: 'The concept that all matter and energy exhibits both wave-like and particle-like properties, a central concept of quantum mechanics demonstrated by phenomena such as the double-slit experiment.',
    formula: 'De Broglie wavelength: λ = h/p',
    hasNotes: true
  },
  'Schrödinger Equation': {
    title: 'Schrödinger Equation',
    category: 'Modern Physics',
    definition: 'A linear partial differential equation that describes how the quantum state of a physical system changes with time, forming the foundation of wave mechanics.',
    formula: 'Time-dependent: iℏ∂ₓψ = Ĥψ',
    hasNotes: true
  },
  'Heisenberg Uncertainty Principle': {
    title: 'Heisenberg Uncertainty Principle',
    category: 'Modern Physics',
    definition: 'A fundamental limit to the precision with which complementary variables, such as position and momentum, can be known simultaneously.',
    formula: 'ΔxΔp ≥ ℏ/2',
    hasNotes: true
  },
  'Big Bang Theory': {
    title: 'Big Bang Theory',
    category: 'Modern Physics',
    definition: 'The prevailing cosmological model explaining the origin and evolution of the universe from an initial high-density, high-temperature state to its current form through expansion.',
    formula: 'ΛCDM model: H² = (8πG/3)(ρₘ + ρᴿ + ρΛ)',
    hasNotes: true
  },
  'Dark Matter': {
    title: 'Dark Matter',
    category: 'Modern Physics',
    definition: 'A hypothetical form of matter that does not interact with the electromagnetic force but would still have gravitational effects on ordinary matter, explaining galactic rotation curves and other astronomical observations.',
    formula: 'vₐₒₜ ≈ √(GM(r)/r)',
    hasNotes: true
  },
  'Black Hole Thermodynamics': {
    title: 'Black Hole Thermodynamics',
    category: 'Modern Physics',
    definition: 'The area of study that applies the principles of thermodynamics to black holes, establishing relationships between black hole properties and thermodynamic quantities like temperature and entropy.',
    formula: 'Tₕ = ℏc³/8πGMkₕ',
    hasNotes: true
  },
  'Quantum Gravity': {
    title: 'Quantum Gravity',
    category: 'Modern Physics',
    definition: 'The field of theoretical physics seeking to describe gravity according to the principles of quantum mechanics, attempting to unify quantum mechanics and general relativity into a complete theory.',
    formula: 'S_{AdS/CFT} = \frac{c^3 A}{4G\hbar}',
    hasNotes: true
  },
  'Onsager Reciprocal Relations': {
    title: 'Onsager Reciprocal Relations',
    category: 'Thermodynamics',
    definition: 'Fundamental relations in non-equilibrium thermodynamics stating that in linear transport processes, the coupling between different fluxes and forces exhibits symmetry based on microscopic reversibility.',
    formula: 'Lᵢⱼ = Lⱼᵢ',
    hasNotes: true
  },
  'Velocity': {
    title: 'Velocity',
    category: 'Mechanics',
    definition: 'The rate of change of position with respect to time.',
    formula: 'v = Δx/Δt',
    hasNotes: true
  },
  'Displacement': {
    title: 'Displacement',
    category: 'Mechanics',
    definition: 'The change in position of an object.',
    formula: 'Δx = x₂ - x₁',
    hasNotes: true
  },

  'Bohr Energy Levels': {
    title: 'Bohr Energy Levels',
    category: 'Atomic Physics',
    definition: 'The discrete energy states of an electron in an atom.',
    formula: 'En = -13.6eV/n²',
    hasNotes: true
  },
  'Photoelectric Effect': {
    title: 'Photoelectric Effect',
    category: 'Atomic Physics',
    definition: 'The emission of electrons when light hits a material.',
    formula: 'KE = hf - φ',
    hasNotes: true
  },
  'Radioactive Decay': {
    title: 'Radioactive Decay',
    category: 'Nuclear Physics',
    definition: 'The spontaneous breakdown of an atomic nucleus.',
    formula: 'N(t) = N₀e^(-λt)',
    hasNotes: true
  },
  'Nuclear Binding Energy': {
    title: 'Nuclear Binding Energy',
    category: 'Nuclear Physics',
    definition: 'The energy required to break a nucleus into its constituent nucleons, described by the semi-empirical mass formula which accounts for volume, surface, Coulomb, asymmetry, and pairing effects.',
    formula: 'B(A,Z) = aᵥA - aₛA²/³ - aₖZ²A¹/³ - aₐ(N-Z)²/A + δ(A,Z); ΔE = Δmc²',
    hasNotes: true
  },
  'Transistor Gain': {
    title: 'Transistor Gain',
    category: 'Electronics',
    definition: 'The ratio of output current to input current in a transistor.',
    formula: 'β = Ic/Ib',
    hasNotes: true
  },
  'RC Time Constant': {
    title: 'RC Time Constant',
    category: 'Electronics',
    definition: 'The time taken for a capacitor to charge through a resistor.',
    formula: 'τ = RC',
    hasNotes: true
  },
  'Ohm\'s Law & Kirchhoff\'s Laws': {
    title: 'Ohm\'s Law & Kirchhoff\'s Laws',
    category: 'Electronics',
    definition: 'Fundamental principles governing electrical circuits: Ohm\'s Law relates voltage, current, and resistance; Kirchhoff\'s Current Law states that the sum of currents entering a node is zero; Kirchhoff\'s Voltage Law states that the sum of voltages in a closed loop is zero.',
    formula: 'V = IR, KCL (ΣI = 0 at nodes), KVL (ΣV = 0 in loops)',
    hasNotes: true
  },
  'Thevenin & Norton Equivalents': {
    title: 'Thevenin & Norton Equivalents',
    category: 'Electronics',
    definition: 'Circuit simplification techniques that replace complex networks with equivalent simple circuits consisting of a single voltage or current source and an equivalent impedance.',
    formula: 'Thevenin: Vs + Zs; Norton: Is || Zs',
    hasNotes: true
  },
  'Impedance & Admittance': {
    title: 'Impedance & Admittance',
    category: 'Electronics',
    definition: 'Complex measures of opposition to current flow in AC circuits, with impedance (Z) being the complex resistance and admittance (Y) being its reciprocal.',
    formula: 'Z = R + jX; Y = 1/Z',
    hasNotes: true
  },
  'Band Theory': {
    title: 'Band Theory',
    category: 'Electronics',
    definition: 'Quantum mechanical model explaining electrical properties of materials based on energy bands, distinguishing conductors, insulators, and semiconductors by their band structures and gaps.',
    formula: 'Eg = Ec - Ev',
    hasNotes: true
  },
  'Carrier Statistics': {
    title: 'Carrier Statistics',
    category: 'Electronics',
    definition: 'Statistical models describing the distribution and behavior of charge carriers (electrons and holes) in semiconductors, including intrinsic and extrinsic carrier concentrations.',
    formula: 'f(E) = 1/(1 + e^((E-EF)/kT))',
    hasNotes: true
  },
  'p-n Junction': {
    title: 'p-n Junction',
    category: 'Electronics',
    definition: 'The interface between p-type and n-type semiconductor materials, forming a depletion region with a built-in potential that enables rectification and other electronic functions.',
    formula: 'Vbi = (kT/q)ln(NA·ND/ni²)',
    hasNotes: true
  },
  'Diode Models': {
    title: 'Diode Models',
    category: 'Electronics',
    definition: 'Mathematical representations of diode behavior, ranging from ideal diodes to more complex models accounting for real-world effects and small-signal analysis.',
    formula: 'I = I₀(eᵚ/ⁿᵚᵀ - 1)',
    hasNotes: true
  },
  'BJT Operation': {
    title: 'BJT Operation',
    category: 'Electronics',
    definition: 'Operational principles of Bipolar Junction Transistors (BJTs), including their different operating modes and the Ebers-Moll model for analyzing their behavior.',
    formula: 'IC = β·IB (active mode)',
    hasNotes: true
  },
  'MOSFET Physics': {
    title: 'MOSFET Physics',
    category: 'Electronics',
    definition: 'Physical principles governing Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs), including inversion layer formation, threshold voltage, and channel-length modulation.',
    formula: 'ID = (μnCox W/2L)(VGS - Vth)²(1 + λVDS)',
    hasNotes: true
  },
  'Small-Signal Models': {
    title: 'Small-Signal Models',
    category: 'Electronics',
    definition: 'Linearized circuit models used to analyze transistor behavior for small AC signals around a DC operating point, including key parameters like transconductance and dynamic resistances.',
    formula: 'gm = IC/VT, rπ = β/gm, ro = VA/IC',
    hasNotes: true
  },
  'Operational Amplifiers': {
    title: 'Operational Amplifiers',
    category: 'Electronics',
    definition: 'Integrated circuit amplifiers with very high gain that form the basis of many analog circuits, typically used with negative feedback to create precise and predictable circuit behaviors.',
    formula: 'Vout = A(V+ - V-), A → ∞',
    hasNotes: true
  },
  'Feedback Topologies': {
    title: 'Feedback Topologies',
    category: 'Electronics',
    definition: 'Circuit configurations that return a portion of the output signal to the input, classified by how the feedback signal is sampled and applied, with implications for stability and performance.',
    formula: 'Aᶜ = A/(1 + Aβ)',
    hasNotes: true
  },
  'Logic Families': {
    title: 'Logic Families',
    category: 'Electronics',
    definition: 'Categories of digital integrated circuits with distinct electrical characteristics, switching behavior, and performance parameters such as power consumption and speed.',
    formula: 'Noise Margin = VIL - VOL, VIH - VOH',
    hasNotes: true
  },
  'CMOS Inverter': {
    title: 'CMOS Inverter',
    category: 'Electronics',
    definition: 'A basic digital logic gate implemented using complementary pairs of p-type and n-type MOSFETs, forming the building block of CMOS digital circuits.',
    formula: 'Pdynamic = CL·VDD²·f',
    hasNotes: true
  },
  'Filters': {
    title: 'Filters',
    category: 'Electronics',
    definition: 'Circuits that selectively pass signals within specific frequency ranges while attenuating others, implemented using passive components or active elements with feedback.',
    formula: 'fc = 1/(2πRC), H(s) = 1/(s² + 2ζωns + ωn²)',
    hasNotes: true
  },
  'Modulation Schemes': {
    title: 'Modulation Schemes',
    category: 'Electronics',
    definition: 'Techniques for encoding information onto carrier signals for transmission, including amplitude, frequency, phase, and digital modulation methods.',
    formula: 'AM: s(t) = A[1 + m·x(t)]cos(ωct), FM: s(t) = Acos[ωct + β·x(t)]',
    hasNotes: true
  },
  'Rectifiers & Regulators': {
    title: 'Rectifiers & Regulators',
    category: 'Electronics',
    definition: 'Circuits that convert AC to DC (rectifiers) and maintain a constant output voltage despite variations in input voltage or load current (regulators).',
    formula: 'Vdc = Vm/π (half-wave), Vdc = 2Vm/π (full-wave)',
    hasNotes: true
  },
  'Switching Converters': {
    title: 'Switching Converters',
    category: 'Electronics',
    definition: 'Power conversion circuits that use switches, inductors, and capacitors to efficiently transfer energy between input and output, with topologies for step-up, step-down, or both.',
    formula: 'Vout = D·Vin (buck), Vout = Vin/(1-D) (boost)',
    hasNotes: true
  },
  'Noise Analysis': {
    title: 'Noise Analysis',
    category: 'Electronics',
    definition: 'Study of random signal fluctuations in electronic circuits, including thermal, shot, and flicker noise, and their impact on circuit performance and signal integrity.',
    formula: 'v̄²n = 4kTRB (thermal noise), ī²n = 2qIB (shot noise)',
    hasNotes: true
  },
  'VLSI Basics': {
    title: 'VLSI Basics',
    category: 'Electronics',
    definition: 'Fundamental concepts in Very Large Scale Integration, including semiconductor device scaling, fabrication processes, and design methodologies for complex integrated circuits.',
    formula: 'Transistor count ≈ 2^((year-1971)/2) (Moore’s Law)',
    hasNotes: true
  },
  'Resonant Frequency': {
    title: 'Resonant Frequency',
    category: 'Electronics',
    definition: 'The natural frequency at which a circuit oscillates.',
    formula: 'f = 1/(2π√LC)',
    hasNotes: true
  },
  'Simple Harmonic Motion': {
    title: 'Simple Harmonic Motion',
    category: 'Mechanics',
    definition: 'A type of periodic motion where the restoring force is directly proportional to displacement from equilibrium position.',
    formula: 'F = -kx',
    hasNotes: true
  },
  'Momentum': {
    title: 'Momentum',
    category: 'Mechanics',
    definition: 'The quantity of motion of a moving body, measured as a product of its mass and velocity.',
    formula: 'p = mv',
    hasNotes: true
  },
  'Energy': {
    title: 'Energy',
    category: 'Energy',
    definition: 'The capacity to do work or cause change in a system.',
    formula: 'E = mc²',
    hasNotes: true
  },
  'Work-Energy Theorem': {
    title: 'Work-Energy Theorem',
    category: 'Energy',
    definition: 'The net work done on an object equals the change in its kinetic energy.',
    formula: 'W = ΔKE',
    hasNotes: true
  },
  'Conservative vs. Non-Conservative Forces': {
    title: 'Conservative vs. Non-Conservative Forces',
    category: 'Energy',
    definition: 'Forces classified by whether work done depends on the path taken. Conservative forces have path-independent work and can be expressed as the gradient of a potential energy function.',
    formula: 'F = -∇U (conservative forces)',
    hasNotes: true
  },
  'Potential Energy Landscapes': {
    title: 'Potential Energy Landscapes',
    category: 'Energy',
    definition: 'Graphical representations of how potential energy varies with position, used to analyze stability, equilibrium points, and dynamics of physical systems.',
    formula: 'F = -dU/dx',
    hasNotes: true
  },
  'Mechanical Energy Conservation': {
    title: 'Mechanical Energy Conservation',
    category: 'Energy',
    definition: 'The principle that the sum of kinetic and potential energy remains constant in systems where only conservative forces act.',
    formula: 'KE₁ + PE₁ = KE₂ + PE₂',
    hasNotes: true
  },
  'Energy-Momentum Tensor': {
    title: 'Energy-Momentum Tensor',
    category: 'Energy',
    definition: 'A tensor in relativity that describes the density and flux of energy and momentum in spacetime, serving as the source term in Einstein\'s field equations.',
    formula: 'Tᵘᵛ',
    hasNotes: true
  },
  'Rest Mass Energy': {
    title: 'Rest Mass Energy',
    category: 'Energy',
    definition: 'The energy equivalent of an object\'s mass when at rest, a fundamental concept in special relativity.',
    formula: 'E₀ = mc²',
    hasNotes: true
  },
  'Relativistic Kinetic Energy': {
    title: 'Relativistic Kinetic Energy',
    category: 'Energy',
    definition: 'The kinetic energy of an object moving at relativistic speeds, accounting for the increase in mass with velocity.',
    formula: 'KE = mc²(γ-1), γ = 1/√(1-v²/c²)',
    hasNotes: true
  },
  'Binding Energy': {
    title: 'Binding Energy',
    category: 'Energy',
    definition: 'The energy required to separate a system into its constituent parts, particularly important in nuclear and molecular physics.',
    formula: 'Eb = [Zm_p + (A-Z)m_n - m_nucleus]c²',
    hasNotes: true
  },

  'Chemical Potential': {
    title: 'Chemical Potential',
    category: 'Thermodynamics',
    definition: 'The energy that can be absorbed or released due to a change in the particle number of a given component, important in determining equilibrium in chemical reactions and phase transitions.',
    formula: 'μ = (∂G/∂N)T,P',
    hasNotes: true
  },
  'Zero-Point Energy': {
    title: 'Zero-Point Energy',
    category: 'Energy',
    definition: 'The lowest possible energy that a quantum mechanical system may have, present even at absolute zero temperature due to quantum fluctuations.',
    formula: 'E₀ = ½ℏω',
    hasNotes: true
  },
  'Energy Quantization': {
    title: 'Energy Quantization',
    category: 'Energy',
    definition: 'The principle that certain physical quantities can only take on discrete values rather than a continuous range, fundamental to quantum mechanics.',
    formula: 'E = hf',
    hasNotes: true
  },
  'Vacuum Energy': {
    title: 'Vacuum Energy',
    category: 'Energy',
    definition: 'The zero-point energy of all quantum fields in space, which may be responsible for the cosmological constant and the accelerating expansion of the universe.',
    formula: 'ρᵥ = Λc²/8πG',
    hasNotes: true
  },
  'Energy Bands': {
    title: 'Energy Bands',
    category: 'Energy',
    definition: 'Ranges of energy that an electron within a solid may have (allowed bands) or may not have (forbidden bands or band gaps), determining electrical properties of materials.',
    formula: 'E(k) = ℏ²k²/2m* + V(r)',
    hasNotes: true
  },
  'Dark Energy': {
    title: 'Dark Energy',
    category: 'Energy',
    definition: 'A hypothetical form of energy that permeates all of space and tends to accelerate the expansion of the universe, accounting for about 68% of the total energy in the observable universe.',
    formula: 'Ωₗ = ρₗ/ρc',
    hasNotes: true
  },
  'Noether\'s Theorem': {
    title: 'Noether\'s Theorem',
    category: 'Energy',
    definition: 'A theorem that states every differentiable symmetry of the action of a physical system has a corresponding conservation law, connecting symmetries with conserved quantities like energy.',
    formula: 'δS = 0 → conservation law',
    hasNotes: true
  },

  'Landauer\'s Principle': {
    title: 'Landauer\'s Principle',
    category: 'Energy',
    definition: 'A principle connecting information theory and thermodynamics, stating that any logically irreversible manipulation of information requires a corresponding amount of energy dissipation.',
    formula: 'ΔE ≥ kT·ln(2) per bit erased',
    hasNotes: true
  },
  'Negative Energy States': {
    title: 'Negative Energy States',
    category: 'Energy',
    definition: 'Energy states below the vacuum energy level, predicted by relativistic quantum mechanics and manifesting in phenomena like the Dirac sea and Casimir effect.',
    formula: 'E = ±√(p²c² + m²c⁴)',
    hasNotes: true
  },
  'Energy in General Relativity': {
    title: 'Energy in General Relativity',
    category: 'Energy',
    definition: 'The concept of energy in curved spacetime, which becomes complex due to the equivalence principle and the difficulty in defining global conservation laws.',
    formula: 'Gμν = 8πG/c⁴ Tμν',
    hasNotes: true
  },
  'Exergy': {
    title: 'Exergy',
    category: 'Energy',
    definition: 'The maximum useful work possible during a process that brings a system into equilibrium with its environment, accounting for irreversibilities.',
    formula: 'Ex = H - T₀S - Σμᵢnᵢ',
    hasNotes: true
  },
  'Thermodynamic Potentials in Statistical Mechanics': {
    title: 'Thermodynamic Potentials in Statistical Mechanics',
    category: 'Thermodynamics',
    definition: 'State functions that characterize thermodynamic systems under different constraints, including internal energy, enthalpy, Helmholtz free energy, and Gibbs free energy.',
    formula: 'U, H = U + PV, F = U - TS, G = H - TS',
    hasNotes: true
  },
  'Maxwell Relations': {
    title: 'Maxwell Relations',
    category: 'Thermodynamics',
    definition: 'A set of equations relating partial derivatives of thermodynamic variables, derived from the equality of mixed partial derivatives of thermodynamic potentials.',
    formula: '(∂T/∂V)S = -(∂P/∂S)V, (∂T/∂P)S = (∂V/∂S)P',
    hasNotes: true
  },
  'Phase Transitions': {
    title: 'Phase Transitions',
    category: 'Thermodynamics',
    definition: 'Transformations of a thermodynamic system from one phase or state of matter to another, classified by order and characterized by discontinuities in thermodynamic properties.',
    formula: 'ΔG = 0 (equilibrium), L = TΔS (latent heat)',
    hasNotes: true
  },
  'Heat Engines & Refrigerators': {
    title: 'Heat Engines & Refrigerators',
    category: 'Thermodynamics',
    definition: 'Devices that convert heat energy to work (engines) or use work to transfer heat from cold to hot regions (refrigerators), operating in thermodynamic cycles.',
    formula: 'η = W/QH = 1 - TC/TH (Carnot efficiency)',
    hasNotes: true
  },
  'Ensembles': {
    title: 'Ensembles',
    category: 'Thermodynamics',
    definition: 'Statistical collections of possible states of a system, including microcanonical (fixed energy), canonical (fixed temperature), and grand canonical (fixed chemical potential) ensembles.',
    formula: 'P(E) ∝ Ω(E) (microcanonical), P(E) ∝ e^(-βE) (canonical)',
    hasNotes: true
  },
  'Partition Function': {
    title: 'Partition Function',
    category: 'Thermodynamics',
    definition: 'A sum over all possible states of a system, weighted by their Boltzmann factors, from which all thermodynamic properties can be derived.',
    formula: 'Z = Σe^(-βE_i), F = -kT ln(Z)',
    hasNotes: true
  },
  'Boltzmann Distribution': {
    title: 'Boltzmann Distribution',
    category: 'Thermodynamics',
    definition: 'The probability distribution describing the relative likelihood of a system being in a particular state as a function of that state\'s energy and the temperature.',
    formula: 'P(E) = (1/Z)e^(-E/kT)',
    hasNotes: true
  },
  'Equipartition Theorem': {
    title: 'Equipartition Theorem',
    category: 'Thermodynamics',
    definition: 'A principle stating that energy is shared equally among all degrees of freedom in a system in thermal equilibrium.',
    formula: '<E_i> = (1/2)kT per quadratic degree of freedom',
    hasNotes: true
  },
  'Fluctuations & Response': {
    title: 'Fluctuations & Response',
    category: 'Thermodynamics',
    definition: 'The relationship between spontaneous fluctuations of a system in equilibrium and its response to external perturbations.',
    formula: 'Fluctuation-dissipation theorem, χ"(ω) = (ω/2kT)S(ω)',
    hasNotes: true
  },
  'Non-Equilibrium Thermodynamics': {
    title: 'Non-Equilibrium Thermodynamics',
    category: 'Thermodynamics',
    definition: 'The study of thermodynamic systems far from equilibrium, including irreversible processes and systems with gradients.',
    formula: 'dS = deS + diS, diS ≥ 0',
    hasNotes: true
  },
  'Blackbody Radiation': {
    title: 'Blackbody Radiation',
    category: 'Thermodynamics',
    definition: 'The electromagnetic radiation emitted by an idealized object that absorbs all incident radiation, with a spectrum determined solely by its temperature.',
    formula: 'u(ν,T) = (8πhν³/c³)/(e^(hν/kT) - 1)',
    hasNotes: true
  },
  'Bose-Einstein & Fermi-Dirac Statistics': {
    title: 'Bose-Einstein & Fermi-Dirac Statistics',
    category: 'Thermodynamics',
    definition: 'Quantum statistical distributions describing systems of identical particles with integer spin (bosons) or half-integer spin (fermions).',
    formula: 'nᵢ = 1/(e^((Eᵢ-μ)/kT) ± 1), + for fermions, - for bosons',
    hasNotes: true
  },
  'Landau Theory of Phase Transitions': {
    title: 'Landau Theory of Phase Transitions',
    category: 'Thermodynamics',
    definition: 'A phenomenological theory describing phase transitions based on an order parameter and free energy expansion.',
    formula: 'F = F₀ + a(T-Tᶜ)ψ² + bψ⁴ + ...',
    hasNotes: true
  },
  'Jarzynski Equality': {
    title: 'Jarzynski Equality',
    category: 'Thermodynamics',
    definition: 'A relation connecting free energy differences between equilibrium states with the work done in non-equilibrium processes.',
    formula: '<e^(-βW)> = e^(-βΔF)',
    hasNotes: true
  },
  'Thermodynamic Limits': {
    title: 'Thermodynamic Limits',
    category: 'Thermodynamics',
    definition: 'The behavior of thermodynamic systems as they approach infinite size, where fluctuations become negligible and extensive variables scale with system size.',
    formula: 'lim(N→∞) F/N = f',
    hasNotes: true
  },
  'Force': {
    title: 'Force',
    category: 'Mechanics',
    definition: 'Any interaction that, when unopposed, will change the motion of an object.',
    formula: 'F = ma',
    hasNotes: true
  },
  'Quantum Magnetism': {
    title: 'Quantum Magnetism',
    category: 'Magnetism',
    definition: 'The quantum mechanical treatment of magnetic phenomena, including intrinsic spin magnetism and the Zeeman effect, which cannot be explained by classical physics.',
    formula: 'μₛ = -gₛ(e/2m)S; ΔE = μB·B',
    hasNotes: true
  },
  'Bohr Model': {
    title: 'Bohr Model',
    category: 'Atomic Physics',
    definition: 'A semi-classical model of the hydrogen atom with quantized electron orbits, explaining the emission and absorption spectra of hydrogen.',
    formula: 'Eₙ = -13.6 eV/n²; L = nℏ',
    hasNotes: true
  },
  'Schrödinger Equation for Hydrogen': {
    title: 'Schrödinger Equation for Hydrogen',
    category: 'Atomic Physics',
    definition: 'The quantum mechanical description of the hydrogen atom, providing a complete solution to the electron\'s wave function and energy levels.',
    formula: 'ψₙₗₘ(r,θ,ϕ) = Rₙₗ(r)Yₗᵐ(θ,ϕ)',
    hasNotes: true
  },
  'Quantum Numbers': {
    title: 'Quantum Numbers',
    category: 'Atomic Physics',
    definition: 'A set of numerical values that describe the state of an electron in an atom, including its energy, angular momentum, orientation, and spin.',
    formula: 'n (principal), l (angular), m (magnetic), s (spin)',
    hasNotes: true
  },
  'Stark Effect': {
    title: 'Stark Effect',
    category: 'Atomic Physics',
    definition: 'The splitting of spectral lines in the presence of an electric field due to the interaction between the field and the electric dipole moment of the atom.',
    formula: 'ΔE ∝ E (linear) or ΔE ∝ E² (quadratic)',
    hasNotes: true
  },
  'Hyperfine Structure': {
    title: 'Hyperfine Structure',
    category: 'Atomic Physics',
    definition: 'The small splitting of atomic energy levels due to the interaction between the nuclear spin and the magnetic field created by the electrons.',
    formula: 'Hhf = A I·J',
    hasNotes: true
  },
  'Atomic Spectra': {
    title: 'Atomic Spectra',
    category: 'Atomic Physics',
    definition: 'The pattern of emission or absorption lines characteristic of each element, resulting from electron transitions between energy levels.',
    formula: '1/λ = R(1/n₁² - 1/n₂²)',
    hasNotes: true
  },
  'Hartree-Fock Method': {
    title: 'Hartree-Fock Method',
    category: 'Atomic Physics',
    definition: 'A computational approach that approximates the many-electron wave function and energy of atoms and molecules by treating each electron as moving in an average field of all other electrons.',
    formula: 'F̂ψᵢ = εᵢψᵢ',
    hasNotes: true
  },
  'Spin-Orbit Coupling': {
    title: 'Spin-Orbit Coupling',
    category: 'Atomic Physics',
    definition: 'The interaction between an electron\'s spin and its orbital motion around the nucleus, leading to energy level splitting in atomic spectra.',
    formula: 'H₁₂ = ξ(r)L·S',
    hasNotes: true
  },
  'Fine Structure': {
    title: 'Fine Structure',
    category: 'Atomic Physics',
    definition: 'The splitting of spectral lines due to electron spin and relativistic effects, particularly spin-orbit coupling.',
    formula: 'ΔE ∝ Z⁴/n³',
    hasNotes: true
  },
  'Selection Rules': {
    title: 'Selection Rules',
    category: 'Atomic Physics',
    definition: 'Constraints that determine which transitions between atomic energy levels are allowed based on conservation laws and symmetry principles.',
    formula: 'Δl = ±1, Δm = 0,±1, Δs = 0',
    hasNotes: true
  },
  'Zeeman Effect': {
    title: 'Zeeman Effect',
    category: 'Atomic Physics',
    definition: 'The splitting of spectral lines in the presence of a magnetic field due to the interaction between the field and the magnetic moment of the atom.',
    formula: 'ΔE = μB·B',
    hasNotes: true
  },
  'Periodic Table Trends': {
    title: 'Periodic Table Trends',
    category: 'Atomic Physics',
    definition: 'Patterns in atomic properties that occur across periods and down groups in the periodic table, including atomic radius, ionization energy, and electron affinity.',
    formula: 'Eᵢ ∝ Z²ᵉₑₒₒ/n²',
    hasNotes: true
  },
  'Exchange Symmetry': {
    title: 'Exchange Symmetry',
    category: 'Atomic Physics',
    definition: 'The principle that the wave function of a system must be symmetric or antisymmetric under the exchange of identical particles, determining whether they are bosons or fermions.',
    formula: 'Ψ(r₁,r₂) = ±Ψ(r₂,r₁)',
    hasNotes: true
  },
  'Configuration Interaction': {
    title: 'Configuration Interaction',
    category: 'Atomic Physics',
    definition: 'A post-Hartree-Fock method that improves the accuracy of electronic structure calculations by including multiple electron configurations in the wave function.',
    formula: 'Ψ = Σᵢ cᵢΦᵢ',
    hasNotes: true
  },
  'Lasers & Atomic Transitions': {
    title: 'Lasers & Atomic Transitions',
    category: 'Atomic Physics',
    definition: 'The study of stimulated emission in atoms and its application in laser technology, including population inversion and optical amplification.',
    formula: 'hν = E₂ - E₁',
    hasNotes: true
  },
  'Cold Atoms & BEC': {
    title: 'Cold Atoms & BEC',
    category: 'Atomic Physics',
    definition: 'The study of atoms cooled to near absolute zero temperatures, where quantum effects dominate and Bose-Einstein condensation can occur.',
    formula: 'Tᶜ < 2πħ²n²₃/mkᴫ',
    hasNotes: true
  },
  'Optical Lattices': {
    title: 'Optical Lattices',
    category: 'Atomic Physics',
    definition: 'Periodic potentials created by interfering laser beams that can trap atoms in regular arrays, used for quantum simulation and quantum computing.',
    formula: 'V(x) = V₀sin²(kx)',
    hasNotes: true
  },
  'Quantum Defect Theory': {
    title: 'Quantum Defect Theory',
    category: 'Atomic Physics',
    definition: 'A framework for understanding the energy levels of atoms with a single valence electron, accounting for deviations from hydrogen-like behavior.',
    formula: 'Eₙ = -R/(n-δ)²',
    hasNotes: true
  },
  'Atomic Clocks': {
    title: 'Atomic Clocks',
    category: 'Atomic Physics',
    definition: 'Precision timekeeping devices that use atomic transitions to define the second, providing the basis for global time standards.',
    formula: 'ν = 9,192,631,770 Hz (Cs-133)',
    hasNotes: true
  },
  'Rydberg Atoms': {
    title: 'Rydberg Atoms',
    category: 'Atomic Physics',
    definition: 'Atoms with one or more electrons excited to very high principal quantum numbers, exhibiting exaggerated properties including large size and strong interactions.',
    formula: 'r ∝ n²a₀, E ∝ -1/n²',
    hasNotes: true
  },
  'Linear Vector Spaces': {
    title: 'Linear Vector Spaces',
    category: 'Mathematical Physics',
    definition: 'Mathematical structures that satisfy vector space axioms with operations of vector addition and scalar multiplication, providing the foundation for quantum mechanics.',
    formula: 'V = {v | v satisfies vector space axioms}',
    hasNotes: true
  },
  'Special Functions': {
    title: 'Special Functions',
    category: 'Mathematical Physics',
    definition: 'Important mathematical functions that arise in the solution of differential equations in physics, including orthogonal polynomials, Bessel functions, and the Gamma function.',
    formula: 'Jₙ(x), Pₙ(x), Hₙ(x), Γ(z)',
    hasNotes: true
  },
  'Complex Analysis': {
    title: 'Complex Analysis',
    category: 'Mathematical Physics',
    definition: 'The study of functions of complex variables, providing powerful methods for solving problems in physics through contour integration and residue theory.',
    formula: '∮_C f(z)dz = 2πi∑Res(f,zₖ)',
    hasNotes: true
  },
  'Green Functions': {
    title: 'Green Functions',
    category: 'Mathematical Physics',
    definition: 'Mathematical tools used to solve inhomogeneous differential equations by representing the solution in terms of the source distribution.',
    formula: '∇²G(r,r′) = -δ(r-r′)',
    hasNotes: true
  },
  'Integral Transforms': {
    title: 'Integral Transforms',
    category: 'Mathematical Physics',
    definition: 'Mathematical techniques that transform differential equations into algebraic equations, including Fourier, Laplace, and Mellin transforms.',
    formula: 'F(k) = ∫ f(x)K(x,k)dx',
    hasNotes: true
  },
  'Manifolds & Tensors': {
    title: 'Manifolds & Tensors',
    category: 'Mathematical Physics',
    definition: 'Mathematical structures that generalize curved spaces and physical quantities with multiple components, essential in general relativity and field theories.',
    formula: 'gμν dxμ dxν, Γμνρ',
    hasNotes: true
  },
  'Lie Groups & Algebras': {
    title: 'Lie Groups & Algebras',
    category: 'Mathematical Physics',
    definition: 'Mathematical structures that describe continuous symmetries, with applications in particle physics, quantum mechanics, and field theories.',
    formula: '[Jᵢ,Jᵣ] = εᵢᵣᵤJᵤ',
    hasNotes: true
  },
  'Differential Forms': {
    title: 'Differential Forms',
    category: 'Mathematical Physics',
    definition: 'Mathematical objects that generalize integration on manifolds, providing a coordinate-independent approach to vector calculus and field theory.',
    formula: '∫_M dα = ∫_{∂M} α',
    hasNotes: true
  },
  'Fiber Bundles': {
    title: 'Fiber Bundles',
    category: 'Mathematical Physics',
    definition: 'Mathematical structures that formalize the concept of a family of spaces parameterized by points of another space, with applications in gauge theories and modern physics.',
    formula: 'E →^π B, F ≅ π^{-1}(x)',
    hasNotes: true
  },
  'Classification of PDEs': {
    title: 'Classification of PDEs',
    category: 'Mathematical Physics',
    definition: 'Systematic categorization of partial differential equations based on their mathematical properties and solution behaviors, including elliptic, parabolic, and hyperbolic types.',
    formula: 'B² - 4AC: <0 (elliptic), =0 (parabolic), >0 (hyperbolic)',
    hasNotes: true
  },
  'Sturm-Liouville Theory': {
    title: 'Sturm-Liouville Theory',
    category: 'Mathematical Physics',
    definition: 'Mathematical framework for analyzing a class of second-order linear differential equations, with applications in boundary value problems and quantum mechanics.',
    formula: '(py\')\'+ qy + λry = 0',
    hasNotes: true
  },
  'Nonlinear PDEs': {
    title: 'Nonlinear PDEs',
    category: 'Mathematical Physics',
    definition: 'Partial differential equations with nonlinear terms, exhibiting complex behaviors such as solitons, shock waves, and chaotic dynamics.',
    formula: '∂u/∂t + u∂u/∂x + ∂³u/∂x³ = 0 (KdV)',
    hasNotes: true
  },
  'Variational Calculus': {
    title: 'Variational Calculus',
    category: 'Mathematical Physics',
    definition: 'Mathematical framework for finding functions that optimize functionals, with applications in mechanics, field theory, and optimization problems.',
    formula: 'δS/δq = 0',
    hasNotes: true
  },
  'Group Theory in Physics': {
    title: 'Group Theory in Physics',
    category: 'Mathematical Physics',
    definition: 'The application of mathematical group theory to physical systems, providing a framework for understanding symmetries and conservation laws.',
    formula: 'D(g₁)D(g₂) = D(g₁g₂)',
    hasNotes: true
  },
  'Asymptotic Analysis': {
    title: 'Asymptotic Analysis',
    category: 'Mathematical Physics',
    definition: 'Mathematical techniques for approximating the behavior of functions and solutions to differential equations in limiting cases.',
    formula: 'y(x) ∼ Q(x)⁻¼·exp(±i∫√Q(x)dx/ε)',
    hasNotes: true
  },
  'Spectral Theory': {
    title: 'Spectral Theory',
    category: 'Mathematical Physics',
    definition: 'Mathematical framework for analyzing the spectrum of operators, with applications in quantum mechanics and other areas of mathematical physics.',
    formula: 'T = ∫ λ dE(λ)',
    hasNotes: true
  },
  'Functional Integration': {
    title: 'Functional Integration',
    category: 'Mathematical Physics',
    definition: 'Mathematical techniques for integrating over spaces of functions, with applications in quantum field theory, statistical mechanics, and stochastic processes.',
    formula: 'K(x₂,t₂;x₁,t₁) = ∫ D[x(t)] exp(iS[x(t)]/ħ)',
    hasNotes: true
  },
  'Renormalization Group': {
    title: 'Renormalization Group',
    category: 'Mathematical Physics',
    definition: 'Theoretical framework for analyzing how physical systems change under scale transformations, with applications in statistical mechanics, quantum field theory, and critical phenomena.',
    formula: 'dg/dl = β(g)',
    hasNotes: true
  },
  'Algebraic Quantum Field Theory': {
    title: 'Algebraic Quantum Field Theory',
    category: 'Mathematical Physics',
    definition: 'Mathematical approach to quantum field theory focusing on algebras of observables rather than fields, providing a rigorous framework for understanding quantum systems.',
    formula: '[A(O₁), A(O₂)] = 0 for spacelike separated regions',
    hasNotes: true
  },
  'Topological Field Theories': {
    title: 'Topological Field Theories',
    category: 'Mathematical Physics',
    definition: 'Quantum field theories that are independent of the metric of spacetime, describing physical systems whose observables depend only on topological properties.',
    formula: 'S_{CS} = (k/4π)∫ Tr(A∧dA + (2/3)A∧A∧A)',
    hasNotes: true
  },
  'Hodge Decomposition': {
    title: 'Hodge Decomposition',
    category: 'Mathematical Physics',
    definition: 'Mathematical technique for decomposing differential forms on manifolds into orthogonal components, with applications in geometry, topology, and physics.',
    formula: 'ω = dα + δβ + γ',
    hasNotes: true
  },
  'Gelfand Triples': {
    title: 'Gelfand Triples',
    category: 'Mathematical Physics',
    definition: 'Mathematical structure consisting of a Hilbert space with associated spaces of test functions and distributions, providing the rigorous foundation for the Dirac bra-ket formalism in quantum mechanics.',
    formula: 'Φ ⊂ H ⊂ Φ*',
    hasNotes: true
  },
  'Feshbach Resonances': {
    title: 'Feshbach Resonances',
    category: 'Atomic Physics',
    definition: 'A phenomenon in which the scattering length between atoms can be tuned by adjusting an external magnetic field, allowing control of atomic interactions.',
    formula: 'a = aᴬᵍ(1-ΔB/(B-B₀))',
    hasNotes: true
  },
  'Dressed States': {
    title: 'Dressed States',
    category: 'Atomic Physics',
    definition: 'Quantum states that describe the combined system of an atom and the electromagnetic field with which it interacts, used to understand light-matter interactions.',
    formula: '|±⟩ = (|g,n+1⟩ ± |e,n⟩)/√2',
    hasNotes: true
  },
  'Quantum Information': {
    title: 'Quantum Information',
    category: 'Atomic Physics',
    definition: 'The study of information processing using quantum systems, including quantum computing, quantum communication, and quantum cryptography.',
    formula: '|ψ⟩ = α|0⟩ + β|1⟩',
    hasNotes: true
  },
  'Gauss\'s Law': {
    title: 'Gauss\'s Law',
    category: 'Electricity',
    definition: 'A law relating the electric flux through a closed surface to the enclosed electric charge.',
    formula: '∮ E · dA = Q/ε₀',
    hasNotes: true
  },
  'Electric Potential': {
    title: 'Electric Potential',
    category: 'Electricity',
    definition: 'The electric potential energy per unit charge at a point in an electric field.',
    formula: 'V = -∫ E · dl',
    hasNotes: true
  },
  'Capacitance': {
    title: 'Capacitance',
    category: 'Electricity',
    definition: 'The ability of a system to store electric charge, defined as the ratio of charge to potential difference.',
    formula: 'C = Q/V',
    hasNotes: true
  },

  'Plasmas': {
    title: 'Plasmas',
    category: 'Electricity',
    definition: 'Ionized gases consisting of free electrons and ions, often referred to as the fourth state of matter.',
    formula: 'ωₚ = √(ne²/ε₀m)',
    hasNotes: true
  },
  'Green\'s Functions in Electrostatics': {
    title: 'Green\'s Functions in Electrostatics',
    category: 'Electricity',
    definition: 'Mathematical tools used to solve inhomogeneous differential equations in electrostatics and other fields.',
    formula: '∇²G(r,r′) = -δ(r-r′)',
    hasNotes: true
  },
  'Nuclear Constituents': {
    title: 'Nuclear Constituents',
    category: 'Nuclear Physics',
    definition: 'The fundamental particles that make up atomic nuclei, primarily protons and neutrons (collectively called nucleons), which themselves are composed of quarks.',
    formula: 'Protons (uud), neutrons (udd); N/Z stability ratio',
    hasNotes: true
  },
  'Liquid Drop Model': {
    title: 'Liquid Drop Model',
    category: 'Nuclear Physics',
    definition: 'A model that treats the nucleus as an incompressible fluid of nucleons, explaining nuclear properties like binding energy, fission, and fusion through surface tension and Coulomb repulsion.',
    formula: 'Semi-empirical mass formula; fission when Z²/A > ~45',
    hasNotes: true
  },
  'Shell Model': {
    title: 'Shell Model',
    category: 'Nuclear Physics',
    definition: 'A quantum mechanical model of the nucleus that explains nuclear structure in terms of energy levels and shell closures, analogous to the electron shell model in atoms.',
    formula: 'Magic numbers (2, 8, 20, 28, 50, 82, 126); spin-orbit coupling',
    hasNotes: true
  }
};
