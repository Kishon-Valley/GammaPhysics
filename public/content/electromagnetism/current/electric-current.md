## Electric Current

### Introduction 

Electric current represents the organized motion of charge carriers through a conductor, forming the foundation of practical electricity and electronic systems. The microscopic behavior of these charge carriers, typically electrons in metals or ions in electrolytes, gives rise to macroscopic current flow that powers modern technology.

## Fundamental Concepts

The concept of electric current emerges from the fundamental nature of charge transport in materials. Electric current is the flow of charge carriers through a material—like electrons in metals, ions in liquids, or holes in semiconductors. This movement, while appearing continuous at the macroscopic level, is actually the net result of countless individual charge carrier motions at the microscopic scale.

Electric current is the directed flow of electric charge through a conducting medium. At the microscopic level, charge carriers (typically electrons in metals) undergo both random thermal motion and a net drift motion in response to an applied electric field.

![Electron drift velocity in a conductor](/content/images/electromagnetism/current/drift-velocity.svg)

The mathematical description of current begins with understanding charge flow rate. Consider a cross-sectional surface through which charge carriers move. The amount of charge $\Delta Q$ passing through this surface during a time interval $\Delta t$ gives rise to the average current:

$I_{avg} = \frac{\Delta Q}{\Delta t}$

This average value, while useful for many practical applications, doesn't capture the instantaneous variations in current flow. For a more precise description, we consider the instantaneous current by taking the mathematical limit as the time interval approaches zero:

$I = \lim_{\Delta t \to 0} \frac{\Delta Q}{\Delta t} = \frac{dQ}{dt}$

The SI unit of current, the ampere (A), is defined through this relationship: one ampere represents one coulomb of charge passing through the surface in one second (1 A = 1 C/s). This definition provides a bridge between the abstract concept of charge and measurable quantities in the laboratory.

### Microscopic Nature of Current Flow

At the microscopic level, current flow involves a relationship between charge carriers and their environment. The charge carriers experience two distinct types of motion:

1. Thermal Motion: A random, high-speed movement with velocities typically around $10^5$ m/s at room temperature. This motion, while energetic, contributes no net current flow as it is completely random in direction.

2. Drift Motion: A directed motion superimposed on the thermal motion, resulting from an applied electric field. This relatively slow motion (typically millimeters per second) is responsible for the net current flow.

The drift velocity $v_d$ of charge carriers responds linearly to an applied electric field $E$ according to the relation:

$v_d = \mu E$

Here, $\mu$ represents the mobility of charge carriers, a material-specific property that quantifies how readily charges move in response to an electric field. The mobility depends on various factors including:

- Temperature (T): $\mu \propto T^{-3/2}$ for metals
- Carrier effective mass ($m^*$): $\mu \propto \frac{1}{m^*}$
- Mean free time between collisions ($\tau$): $\mu = \frac{q\tau}{m^*}$

### Current Density and Charge Transport

To describe current flow more completely, we introduce the concept of current density $J$, which represents current flow per unit area. The relationship between current density and drift velocity is given by:

$J = nqv_d$

where:
- $n$ is the number density of charge carriers (carriers per unit volume)
- $q$ is the charge per carrier
- $v_d$ is the drift velocity

This equation provides a link between microscopic carrier motion and macroscopic current flow. The total current $I$ through a surface area $A$ can be found by integrating the current density:

$I = \int_A \vec{J} \cdot d\vec{A}$

For uniform current density perpendicular to the surface, this simplifies to:

$I = JA = nqv_dA$

This allows us to analyze current flow in various materials and under different conditions, forming the foundation for understanding more complex electrical phenomena.

### Energy Considerations

The movement of charge carriers in an electric field involves energy transfer. The power $P$ delivered by a current $I$ under a potential difference $V$ is given by:

$P = VI = I^2R = \frac{V^2}{R}$

This energy transfer manifests as both useful work and heat dissipation in electrical systems.

## Charge Carrier Motion

In conductors, the actual motion of charge carriers involves two components: a slow drift velocity $v_d$ superimposed on rapid random thermal motion. The drift velocity in response to an electric field $E$ is given by:

$v_d = \mu E$

where $\mu$ is the mobility of the charge carriers, a material-dependent property measuring how readily charges move in response to an electric field.

The current density $J$, representing current per unit area, relates to the drift velocity through:

$J = nqv_d$

where $n$ is the number density of charge carriers and $q$ is the charge per carrier. This equation connects microscopic carrier motion to macroscopic current flow.

## Current in Different Media

The mechanism of current flow varies significantly across different materials, reflecting the diverse nature of charge carriers and their interactions with their surrounding environment. Understanding these differences is necessary for both theoretical comprehension and practical applications in electronic devices.

### Metallic Conductors

In metallic conductors, the quantum mechanical nature of electrons plays a fundamental role in current flow. The free electron model, enhanced by band theory, explains how conduction electrons occupy energy states up to the Fermi level. These electrons, delocalized from their parent atoms, form an electron sea that enables current flow through the crystalline lattice.

The electron density in metals typically ranges from $10^{28}$ to $10^{29}$ electrons per cubic meter, contributing to their high conductivity. However, the actual drift velocity of electrons remains surprisingly low, typically on the order of millimeters per second. This apparent paradox is resolved by considering the enormous number of charge carriers available for conduction.

The current density in metals follows Ohm's law:

$\vec{J} = \sigma \vec{E}$

where $\sigma$ is the electrical conductivity tensor. For isotropic materials, $\sigma$ becomes a scalar quantity related to carrier mobility through:

$\sigma = nq\mu$

The temperature dependence of conductivity in metals follows the relation:

$\sigma(T) = \frac{\sigma_0}{1 + \alpha(T - T_0)}$

where $\alpha$ is the temperature coefficient of resistivity, typically positive for metals. This relationship arises from increased electron-phonon scattering at higher temperatures.

The mean free path $l$ of electrons between collisions relates to conductivity through:

$\sigma = \frac{ne^2l}{mv_F}$

where $v_F$ is the Fermi velocity, typically around $10^6$ m/s.

### Semiconductors

Semiconductor conduction presents a more complex scenario involving both electrons and holes. The dual-carrier nature of current flow arises from the band structure, where both conduction band electrons and valence band holes contribute to charge transport.

The total current density in semiconductors is the sum of electron and hole contributions:

$\vec{J} = \vec{J}_n + \vec{J}_p = nq\mu_n\vec{E} + pq\mu_p\vec{E}$

The carrier concentrations $n$ and $p$ are temperature-dependent and follow the mass action law:

$np = n_i^2$

where $n_i$ is the intrinsic carrier concentration:

$n_i = \sqrt{N_cN_v}e^{-E_g/2k_BT}$

Here, $N_c$ and $N_v$ are the effective density of states in the conduction and valence bands, $E_g$ is the bandgap energy, and $k_B$ is Boltzmann's constant.

The mobility of carriers in semiconductors depends on multiple scattering mechanisms:

$\frac{1}{\mu} = \frac{1}{\mu_{lattice}} + \frac{1}{\mu_{impurity}} + \frac{1}{\mu_{carrier}}$

This relationship accounts for scattering from lattice vibrations, impurities, and carrier-carrier interactions.

### Electrolytes

Electrolytic conduction involves the motion of ions in solution, presenting a distinct mechanism from electronic conduction. The current density for a solution containing multiple ionic species is:

$\vec{J} = \sum_i n_iz_iq\mu_i\vec{E}$

where for each ionic species $i$:
- $n_i$ is the number density
- $z_i$ is the ionic valence
- $\mu_i$ is the ionic mobility

The ionic mobility depends on factors including:

$\mu_i = \frac{|z_i|q}{6\pi\eta r_i}$

where $\eta$ is the solution viscosity and $r_i$ is the hydrated ionic radius.

The concentration dependence of electrolytic conductivity follows Kohlrausch's law:

$\Lambda_m = \Lambda_m^{\infty} - K\sqrt{c}$

where $\Lambda_m$ is the molar conductivity, $\Lambda_m^{\infty}$ is the limiting molar conductivity at infinite dilution, and $c$ is the concentration.

Temperature effects on ionic conductivity follow an Arrhenius-type relationship:

$\sigma = \sigma_0e^{-E_a/k_BT}$

where $E_a$ is the activation energy for ionic motion.

This comprehensive understanding of conduction mechanisms in different media forms the foundation for designing and optimizing electronic devices, from simple resistors to complex integrated circuits and electrochemical cells.

## Conservation of Charge and Current

The principle of charge conservation stands as one of the most fundamental laws in electromagnetism, leading to the concept of current continuity. This principle manifests mathematically through the continuity equation, which relates the flow of charge through a surface to the rate of change of charge within a volume.

### The Continuity Equation

Consider a closed surface S enclosing a volume V. The total charge within this volume can change only if there is a net flow of charge through the surface. This physical principle is expressed mathematically through the continuity equation:

$\oint_S \vec{J} \cdot d\vec{A} = -\frac{\partial}{\partial t}\int_V \rho dV$

This equation can be transformed using Gauss's divergence theorem:

$\int_V \nabla \cdot \vec{J} dV = -\frac{\partial}{\partial t}\int_V \rho dV$

Since this must hold for any arbitrary volume, we obtain the differential form:

$\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0$

For steady-state conditions, where charge density doesn't vary with time ($\frac{\partial \rho}{\partial t} = 0$), this reduces to:

$\nabla \cdot \vec{J} = 0$ or equivalently $\oint_S \vec{J} \cdot d\vec{A} = 0$

This simplified form expresses Kirchhoff's Current Law at a fundamental level: the net current entering any closed surface must equal the net current leaving it.

### Current Direction and Charge Flow

The conventional direction of current flow, established historically, follows the motion of positive charges. This convention, while seemingly at odds with electron flow in metals, provides a consistent framework for circuit analysis. The relationship between current and charge carrier velocity is:

$I = nqvA$

where A is the cross-sectional area of the conductor.

## Quantum Effects in Current Flow

Electric current behaves very differently when the size of a conductor becomes very small—close to the scale of atoms—where quantum effects start to play a major role.

At these nanoscale dimensions, the classical continuous description of current flow breaks down, revealing the fundamental quantum nature of charge transport. These quantum effects are evident in different ways that strongly affect how electricity flows through very small conductors.

### Conductance Quantization

In quantum-scale conductors, the conductance exhibits discrete steps rather than continuous variation. This quantization emerges from the wave nature of electrons and the quantum constraints on their transmission through narrow channels. The fundamental unit of conductance, known as the conductance quantum $G_0$, is given by:

$G_0 = \frac{2e^2}{h} \approx \frac{1}{12.9\text{ k}\Omega}$

where $e$ is the elementary charge and $h$ is Planck's constant. The factor of 2 arises from electron spin degeneracy. The total conductance becomes quantized in integer multiples of $G_0$:

$G = N\frac{2e^2}{h}$

where N represents the number of available quantum channels for conduction.

![Quantum conductance quantization](/content/images/electromagnetism/current/quantum-conductance.svg)

### Quantum Tunneling and Transport

The quantum tunneling effect becomes significant at nanoscale dimensions, allowing electrons to traverse potential barriers that would be classically forbidden. The tunneling current density through a barrier can be expressed using the WKB approximation:

$J_{tunnel} \propto \exp\left(-\frac{2}{\hbar}\sqrt{2m\phi}\,d\right)$

where $\phi$ is the barrier height, $d$ is the barrier width, and $m$ is the electron mass. This tunneling phenomenon forms the basis for numerous quantum electronic devices, including resonant tunneling diodes and scanning tunneling microscopes.

### Quantum Interference Effects

When the conductor dimensions become comparable to the electron coherence length, quantum interference effects emerge. The conductance becomes sensitive to the phase of the electron wave function, leading to phenomena such as weak localization. The correction to conductivity due to quantum interference can be expressed as:

$\Delta \sigma = -\frac{e^2}{2\pi^2\hbar}\ln\left(\frac{L_\phi}{l_e}\right)$

where $L_\phi$ is the phase coherence length and $l_e$ is the elastic mean free path.

### Ballistic Transport

In extremely small conductors, where the channel length becomes shorter than the electron mean free path, transport enters the ballistic regime. Here, electrons traverse the conductor without scattering, and the Landauer formula describes the conductance:

$G = \frac{2e^2}{h}\sum_{n} T_n$

where $T_n$ represents the transmission probability for each quantum channel n.

## Circuit Analysis Fundamentals

The analysis of electrical circuits builds upon the fundamental principles of current conservation and potential differences. These principles manifest through Kirchhoff's laws, which provide a systematic framework for analyzing complex electrical networks.

### Kirchhoff's Current Law (KCL)

The conservation of charge at a microscopic level leads to Kirchhoff's Current Law. For any node in a circuit, the algebraic sum of currents must vanish:

$\sum_{i} I_i = 0$

This law can be expressed more generally using the current density vector field:

$\oint_S \vec{J} \cdot d\vec{A} = 0$

The relationship between these forms emerges from integrating the current density over appropriate surfaces.

### Network Analysis Applications

The application of KCL, combined with Kirchhoff's Voltage Law (KVL), enables the systematic analysis of complex circuits. For a network with n nodes and b branches, the complete analysis requires:

$n-1$ independent KCL equations
$l = b-(n-1)$ independent KVL equations

where l represents the number of independent loops. The resulting system of equations can be expressed in matrix form:

$\begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} I \\ V \end{bmatrix} = \begin{bmatrix} S_1 \\ S_2 \end{bmatrix}$

where A, B, C, and D are coefficient matrices determined by the circuit topology, and S₁, S₂ represent source terms.

### Mesh and Nodal Analysis

The application of these principles leads to two primary methods of circuit analysis:

Mesh Analysis uses KVL as its foundation:
$\sum_{k} R_k I_k = \sum_{j} V_j$

Nodal Analysis builds upon KCL:
$\sum_{k} \frac{V_k}{R_k} = \sum_{j} I_j$

These methods, when combined with the quantum effects at small scales, provide a complete framework for analyzing electrical systems across all size scales, from quantum devices to macroscopic power networks.

## Time-Varying Currents

Many practical applications involve time-varying currents. Common forms include:

Sinusoidal current: $I(t) = I_0\sin(\omega t)$
Exponential decay: $I(t) = I_0e^{-t/\tau}$

The instantaneous power delivered by a current is:

$P = VI = I^2R = \frac{V^2}{R}$

where V is the potential difference and R is the resistance.

## Power and Energy Relations

The instantaneous power in an electrical circuit involves the product of current and voltage:

$P = VI$

For resistive elements following Ohm's law ($V = IR$):

$P = I^2R = \frac{V^2}{R}$

The energy transferred over a time interval is:

$E = \int_{t_1}^{t_2} P(t)dt = \int_{t_1}^{t_2} VI dt$

For reactive elements (inductors and capacitors), the instantaneous power represents the rate of change of stored energy:

Inductor: $P_L = LI\frac{dI}{dt}$
Capacitor: $P_C = CV\frac{dV}{dt}$

These relationships form the foundation for analyzing power flow and energy storage in electrical systems, from simple DC circuits to complex power distribution networks.

## Current Direction Convention

By convention, electric current direction is taken as the direction of positive charge flow, opposite to electron motion in metals. This conventional current flows from higher to lower potential. The relationship between current and charge carrier velocity is:

$I = nqvA$

where A is the cross-sectional area of the conductor.

## Applications in Circuit Analysis

Understanding electric current forms the basis for circuit analysis. Kirchhoff's Current Law (KCL) states that the algebraic sum of currents entering any node must equal zero:

$\sum_{i} I_i = 0$

This law, combined with Kirchhoff's Voltage Law (KVL), enables the analysis of complex electrical networks.

## Practice Problems

### Problem 1: Current Density and Drift Velocity

A copper wire with cross-sectional area 2.0 mm² carries a current of 2.5 A. Given that copper has approximately 8.5 × 10²⁸ free electrons per cubic meter, calculate:
a) The current density in the wire
b) The drift velocity of the electrons
c) The time taken for an electron to travel 1 meter along the wire

Solution:
a) Current density:
   $J = \frac{I}{A} = \frac{2.5}{2.0 × 10^{-6}} = 1.25 × 10^6$ A/m²

b) Drift velocity:
   $v_d = \frac{J}{nq} = \frac{1.25 × 10^6}{(8.5 × 10^{28})(1.6 × 10^{-19})} = 9.19 × 10^{-5}$ m/s

c) Time to travel 1 meter:
   $t = \frac{d}{v_d} = \frac{1}{9.19 × 10^{-5}} = 1.09 × 10^4$ s ≈ 3 hours

### Problem 2: Quantum Conductance

A quantum point contact shows conductance plateaus. Calculate:
a) The value of one conductance quantum in siemens
b) The current at the first plateau when a voltage of 1 mV is applied
c) The number of quantum channels if the measured conductance is 4.92 × 10⁻⁴ S

Solution:
a) Conductance quantum:
   $G_0 = \frac{2e^2}{h} = \frac{2(1.602 × 10^{-19})^2}{6.626 × 10^{-34}} = 7.748 × 10^{-5}$ S

b) Current at first plateau:
   $I = G_0V = (7.748 × 10^{-5})(0.001) = 7.748 × 10^{-8}$ A

c) Number of channels:
   $N = \frac{G}{G_0} = \frac{4.92 × 10^{-4}}{7.748 × 10^{-5}} = 6.35 ≈ 6$ channels

### Problem 3: Circuit Analysis

In the circuit shown below, calculate:
a) The currents in each branch using KCL
b) The power dissipated in the 4 Ω resistor
c) The voltage across the 6 Ω resistor

Circuit parameters:
- Voltage source: 12 V
- Resistors: R₁ = 2 Ω, R₂ = 4 Ω, R₃ = 6 Ω (parallel configuration)

Solution:
a) Total resistance:
   $\frac{1}{R_T} = \frac{1}{2} + \frac{1}{4} + \frac{1}{6} = \frac{12}{12} = 1$ Ω
   Total current: $I_T = \frac{12}{1} = 12$ 
   
   Individual currents:
   $I_1 = \frac{12}{2} = 6$ A
   $I_2 = \frac{12}{4} = 3$ A
   $I_3 = \frac{12}{6} = 2$ A

b) Power in 4 Ω resistor:
   $P = I_2^2R_2 = (3)^2(4) = 36$ W

c) Voltage across 6 Ω resistor:
   $V = I_3R_3 = (2)(6) = 12$ V

### Problem 4: Time-Varying Current Analysis

An alternating current in a conductor is described by $I(t) = 5\sin(120\pi t + \pi/6)$ amperes.
Calculate:
a) The peak current and frequency
b) The current at t = 5 ms
c) The time when the current first reaches 2.5 A
d) The average value of |I(t)| over one complete cycle

Solution:
a) Peak current: $I_0 = 5$ A
   Angular frequency: $\omega = 120\pi$ rad/s
   Frequency: $f = \frac{\omega}{2\pi} = 60$ Hz

b) At t = 5 ms:
   $I(0.005) = 5\sin(120\pi(0.005) + \pi/6)$
   $= 5\sin(1.885\pi + \pi/6)$
   $= -2.5$ A

c) For I = 2.5 A:
   $2.5 = 5\sin(120\pi t + \pi/6)$
   $0.5 = \sin(120\pi t + \pi/6)$
   $t = \frac{arcsin(0.5) - \pi/6}{120\pi} = 1.39$ ms

d) Average absolute value:
   $|I|_{avg} = \frac{2I_0}{\pi} = \frac{2(5)}{\pi} = 3.18$ A

### Problem 5: Semiconductor Current Analysis

A silicon semiconductor bar has electron concentration n = 4 × 10¹⁶ cm⁻³, hole concentration p = 2 × 10¹⁵ cm⁻³, electron mobility μₙ = 1400 cm²/V·s, and hole mobility μₚ = 450 cm²/V·s. Calculate:
a) The conductivity of the semiconductor
b) The current density when E = 100 V/m
c) The ratio of electron current to hole current
d) The resistivity of the material

Solution:
a) Conductivity:
   $\sigma = q(n\mu_n + p\mu_p)$
   $= (1.6 × 10^{-19})[(4 × 10^{22})(0.14) + (2 × 10^{21})(0.045)]$
   $= 9.28$ S/m

b) Current density:
   $J = \sigma E = (9.28)(100) = 928$ A/m²

c) Ratio:
   $\frac{J_n}{J_p} = \frac{n\mu_n}{p\mu_p} = \frac{(4 × 10^{16})(1400)}{(2 × 10^{15})(450)} = 62.2$

d) Resistivity:
   $\rho = \frac{1}{\sigma} = 0.108$ Ω·m

### Problem 6: Electrolytic Conduction

An electrolytic cell contains a solution of CuSO₄. The Cu²⁺ ions have mobility 5.6 × 10⁻⁸ m²/V·s and concentration 0.1 M. Calculate:
a) The drift velocity of Cu²⁺ ions in an electric field of 500 V/m
b) The current density due to Cu²⁺ ions
c) The mass of copper deposited in 2 hours if the current is 1.5 A
d) The number of Cu²⁺ ions reaching the cathode per second

Solution:
a) Drift velocity:
   $v_d = \mu E = (5.6 × 10^{-8})(500) = 2.8 × 10^{-5}$ m/s

b) Current density:
   $J = nqv_d = (6.02 × 10^{25})(3.2 × 10^{-19})(2.8 × 10^{-5})$
   $= 5.38$ A/m²

c) Mass deposited (using Faraday's law):
   $m = \frac{MIt}{zF} = \frac{(63.5)(1.5)(7200)}{(2)(96500)} = 1.78$ g

d) Ion flux:
   $\frac{I}{ze} = \frac{1.5}{(2)(1.6 × 10^{-19})} = 4.69 × 10^{18}$ ions/s

### Problem 7: Quantum Transport

A quantum wire exhibits conductance plateaus. At temperature T = 4.2 K:
a) Calculate the thermal energy kT and compare it to the subband spacing ΔE = 2.3 meV
b) If the wire length is 100 nm, determine if transport is ballistic (mean free path = 150 nm)
c) Calculate the resistance at the third conductance plateau
d) Find the current at the second plateau with applied voltage 0.5 mV

Solution:
a) Thermal energy:
   $kT = (8.617 × 10^{-5})(4.2) = 0.362$ meV
   Ratio: $\frac{\Delta E}{kT} = \frac{2.3}{0.362} = 6.35$ (quantization observable)

b) Length comparison:
   $L < l_e$ (100 nm < 150 nm)
   Transport is ballistic

c) Third plateau resistance:
   $R = \frac{h}{6e^2} = \frac{25.813 × 10^3}{6} = 4.302$ kΩ

d) Second plateau current:
   $I = \frac{2e^2}{h}(2)V = (7.748 × 10^{-5})(2)(0.5 × 10^{-3})$
   $= 7.748 × 10^{-8}$ A

### Problem 8: Current in Magnetic Fields

![Moving conductor in magnetic field](/content/images/electromagnetism/current/rod-magnetic-field.svg)

A conducting rod of length 25 cm moves with velocity 4 m/s perpendicular to a magnetic field of 0.5 T. Calculate:
a) The induced EMF across the rod
b) If the rod's resistance is 0.2 Ω, find the induced current
c) The magnetic force on the moving charges
d) The power required to maintain the rod's motion

Solution:
a) Induced EMF:
   $\varepsilon = Blv = (0.5)(0.25)(4) = 0.5$ V

b) Induced current:
   $I = \frac{\varepsilon}{R} = \frac{0.5}{0.2} = 2.5$ A

c) Magnetic force:
   $F = IlB = (2.5)(0.25)(0.5) = 0.3125$ N

d) Power required:
   $P = Fv = (0.3125)(4) = 1.25$ W

This demonstrates the interaction between mechanical motion, magnetic fields, and electric current, illustrating the principles of electromagnetic induction and energy conversion.

## Summary

Electric current represents the flow of charge carriers through a conductor, characterized by both classical and quantum behaviors. At the classical level, current flow is described by drift velocity and current density, following Ohm's law and conservation principles. The quantum regime reveals conductance quantization, tunneling effects, and ballistic transport.

Key concepts include:
- Current density $J = nqv_d$ relates microscopic carrier motion to macroscopic current
- Conductance quantization in units of $\frac{2e^2}{h}$ at nanoscale dimensions
- Kirchhoff's laws provide the foundation for circuit analysis
- Time-varying currents exhibit both sinusoidal and exponential behaviors

Applications range from conventional circuit analysis to quantum electronic devices, with the mathematical framework spanning from simple algebraic relationships to complex quantum mechanical descriptions.
