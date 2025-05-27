## Magnetic Forces and the Biot-Savart Law

### Magnetic Forces

The magnetic force represents one of nature's fundamental interactions, distinct from yet intimately related to electric forces. When a charged particle moves through a magnetic field, it experiences a force that depends on its charge, velocity, and the magnetic field strength. This force, known as the Lorentz force, is given by:

$\vec{F} = q\vec{v} \times \vec{B}$

where q is the particle's charge, $\vec{v}$ is its velocity, and $\vec{B}$ is the magnetic field. The cross product in this equation reveals a crucial characteristic: the magnetic force is always perpendicular to both the velocity and the magnetic field.

![Magnetic force on a moving charged particle](/images/electromagnetism/magnetic-forces/magnetic-force-particle.svg)

#### Magnitude of the Magnetic Force

The magnitude of this force can be expressed as:

$F = |q|vB\sin\theta$

where θ is the angle between the velocity and magnetic field vectors. This relationship demonstrates that the force is maximum when the particle moves perpendicular to the field (θ = 90°) and zero when moving parallel to it (θ = 0° or 180°).

#### Circular Motion in a Uniform Magnetic Field

When a charged particle enters a uniform magnetic field with a velocity perpendicular to the field lines, it follows a circular path. The radius of this circle, known as the cyclotron radius, is given by:

$r = \frac{mv}{|q|B}$

This circular motion occurs because the magnetic force provides the centripetal force necessary for circular motion. The frequency of this circular motion, called the cyclotron frequency, is:

$f = \frac{|q|B}{2πm}$

This principle forms the basis of many particle accelerators and mass spectrometers. In a cyclotron, charged particles are accelerated in a spiral path by an oscillating electric field while a magnetic field keeps them in a circular trajectory. The particle's mass can be determined by measuring its radius of curvature in a known magnetic field, a technique used in mass spectrometry.

#### Force on a Current-Carrying Wire

For a current-carrying wire in a magnetic field, the force per unit length is:

$\frac{d\vec{F}}{dl} = I\vec{l} \times \vec{B}$

The total force on a wire segment is found by integrating along its length:

$\vec{F} = I\int \vec{dl} \times \vec{B}$

This principle is fundamental to the operation of electric motors. In a DC motor, current-carrying coils in a magnetic field experience a torque that causes rotation. The direction of rotation can be reversed by changing either the current direction or the magnetic field direction. The same principle is used in loudspeakers, where a current-carrying coil in a permanent magnetic field moves to produce sound waves.

### The Biot-Savart Law

The Biot-Savart law describes how electric currents generate magnetic fields, forming a cornerstone of magnetostatics. For a current element $I\vec{dl}$, the magnetic field at a point P is given by:

![Biot-Savart Law illustration](/images/electromagnetism/magnetic-forces/biot-savart.svg)

$d\vec{B} = \frac{μ_0}{4π}\frac{I\vec{dl} \times \hat{r}}{r^2}$

where:
- $μ_0$ is the permeability of free space ($4π × 10^{-7}$ T⋅m/A)
- $\vec{dl}$ is an infinitesimal current element
- $\hat{r}$ is the unit vector from the current element to point P
- r is the distance from the current element to point P

#### Total Magnetic Field

The total magnetic field is found by integrating this expression over the entire current distribution:

$\vec{B} = \frac{μ_0}{4π}\int \frac{I\vec{dl} \times \hat{r}}{r^2}$

#### Special Cases

For an infinite straight wire, this integration yields:

$B = \frac{μ_0I}{2πR}$

where R is the perpendicular distance from the wire. The field lines form concentric circles around the wire, with the field strength decreasing inversely with distance.

For a circular loop of radius a, the magnetic field along the axis at a distance x from the center is:

$B = \frac{μ_0Ia^2}{2(a^2 + x^2)^{3/2}}$

This expression is particularly useful in analyzing solenoids and magnetic dipoles. At the center of the loop (x = 0), the field simplifies to:

$B = \frac{μ_0I}{2a}$

This configuration is commonly used in electromagnets and magnetic sensing devices. Multiple loops can be wound into a solenoid to create stronger magnetic fields. The field inside a long solenoid is nearly uniform and proportional to the number of turns per unit length.

#### Applications in Technology

Magnetic forces and fields have numerous practical applications in modern technology. In magnetic resonance imaging (MRI), strong magnetic fields align hydrogen nuclei in the body, while radio frequency pulses perturb this alignment. The resulting signals create detailed images of internal body structures. The strength of MRI magnets typically ranges from 1.5 to 3 tesla, thousands of times stronger than Earth's magnetic field.

The Hall effect, discovered by Edwin Hall in 1879, occurs when a magnetic field deflects current-carrying charges in a conductor. This principle is used in Hall effect sensors to measure magnetic fields in various devices, from automotive applications to magnetic storage systems.

Magnetic levitation (maglev) trains use strong magnetic fields for propulsion and levitation. Superconducting magnets create powerful fields that lift the train above the track, eliminating friction and enabling high-speed travel. The world's fastest maglev train in Japan has reached speeds over 600 km/h.

In the field of data storage, magnetic fields are very useful for hard disk drives. Read/write heads use electromagnetic induction to store and retrieve data by manipulating the magnetic orientation of tiny regions on the disk surface. Modern hard drives can store hundreds of gigabytes per square inch using this technology.

#### Magnetic Fields in Nature

Earth's magnetic field, generated by the motion of molten iron in its outer core, provides essential protection from solar wind and cosmic radiation. This field has a strength of about 25-65 μT at the surface, varying by location. Many animals, including birds and sea turtles, use this field for navigation during migration.



### Practice Problems

#### Problem 1: Particle Motion in Magnetic Field

A proton with kinetic energy of 1.0 MeV enters a uniform magnetic field of 0.5 T perpendicular to its velocity. Calculate:

The velocity of the proton can be found by relating kinetic energy to velocity:
$KE = \frac{1}{2}mv^2$
$1.0 \text{ MeV} = 1.6 × 10^{-13} \text{ J}$
$v = \sqrt{\frac{2(1.6 × 10^{-13})}{1.67 × 10^{-27}}} = 1.38 × 10^7 \text{ m/s}$

The radius of its circular path is given by:
$r = \frac{mv}{|q|B} = \frac{(1.67 × 10^{-27})(1.38 × 10^7)}{(1.6 × 10^{-19})(0.5)} = 0.29 \text{ m}$

The frequency of circular motion (cyclotron frequency) is:
$f = \frac{|q|B}{2πm} = \frac{(1.6 × 10^{-19})(0.5)}{2π(1.67 × 10^{-27})} = 7.6 \text{ MHz}$

#### Problem 2: Magnetic Field of a Current Loop

A circular loop of radius 10 cm carries a current of 2.0 A. Find the magnetic field:

At the center of the loop:
$B = \frac{μ_0I}{2a} = \frac{(4π × 10^{-7})(2.0)}{2(0.10)} = 1.26 × 10^{-5} \text{ T}$

At a point 20 cm along the axis of the loop:
$B = \frac{μ_0IR^2}{2(R^2 + x^2)^{3/2}} = \frac{(4π × 10^{-7})(2.0)(0.10)^2}{2((0.10)^2 + (0.20)^2)^{3/2}} = 1.57 × 10^{-6} \text{ T}$

#### Problem 3: Force on a Current-Carrying Wire

A straight wire 30 cm long carries a current of 3.0 A in a uniform magnetic field of 0.2 T. Calculate:

When the wire is perpendicular to the field:
$F = ILB = (3.0)(0.30)(0.2) = 0.18 \text{ N}$

When the wire is rotated 30° from perpendicular (60° from parallel):
$F = ILB\sin(60°) = 0.18 \sin(60°) = 0.156 \text{ N}$

This demonstrates how the force depends on the orientation of the wire relative to the magnetic field, reaching its maximum when they are perpendicular and decreasing as the angle between them decreases.

#### Problem 4: Mass Spectrometer Design

A mass spectrometer uses a magnetic field to separate ions of different masses. Singly charged ions enter a magnetic field of 0.25 T with a velocity of 4.0 × 10^5 m/s perpendicular to the field. Two ions follow circular paths of radii 9.5 cm and 12.0 cm.

For the ion following the 9.5 cm path:
$m = \frac{|q|Br}{v} = \frac{(1.6 × 10^{-19})(0.25)(0.095)}{4.0 × 10^5} = 9.5 × 10^{-26} \text{ kg}$
This corresponds to approximately 57 atomic mass units, suggesting the ion is Fe⁵⁷.

For the 12.0 cm path:
$m = \frac{(1.6 × 10^{-19})(0.25)(0.120)}{4.0 × 10^5} = 12.0 × 10^{-26} \text{ kg}$
This corresponds to approximately 72 atomic mass units, suggesting the ion is Fe⁷².

#### Problem 5: MRI Machine Field Strength

An MRI machine produces a magnetic field of 2.5 T. A proton in tissue has a magnetic moment of 1.41 × 10^{-26} J/T. Calculate:

The potential energy of misalignment:
$U = -\vec{μ} · \vec{B} = 2μB = 2(1.41 × 10^{-26})(2.5) = 7.05 × 10^{-26} \text{ J}$

The frequency of precession (Larmor frequency):
$f = \frac{γB}{2π} = \frac{(2.675 × 10^8)(2.5)}{2π} = 106.5 \text{ MHz}$

This is the frequency at which radio waves must be applied to excite the protons during imaging.

#### Problem 6: Electric Motor Analysis

An electric motor has 85 turns of wire in its armature, forming a rectangular coil 4.0 cm × 6.0 cm. The motor operates in a magnetic field of 0.85 T.

The maximum torque when carrying 3.0 A:
$\tau_{\text{max}} = NIAB = (85)(3.0)(0.04)(0.06)(0.85) = 0.52 \text{ N}\cdot\text{m}$

Power output at 3600 RPM:
$P = \tau\omega = (0.52)(\frac{3600}{60})(2\pi) = 196 \text{ W}$

#### Problem 7: Magnetic Levitation System

A maglev train uses superconducting magnets to levitate. Each magnet has an effective area of 0.25 m² and the train mass is 35,000 kg. Calculate:

Minimum magnetic field required for levitation:
$F_g = mg = (35,000)(9.81) = 343,350 \text{ N}$
$B = \sqrt{\frac{2μ_0F_g}{A}} = \sqrt{\frac{2(4π × 10^{-7})(343,350)}{0.25}} = 2.34 \text{ T}$

Current required in a 1000-turn coil of length 0.5 m:
$I = \frac{BL}{μ_0N} = \frac{(2.34)(0.5)}{(4π × 10^{-7})(1000)} = 931 \text{ A}$

#### Problem 8: Hall Effect Sensor

A Hall effect sensor in an automotive application has a sensitivity of 45 μV/mT. When placed in the magnetic field of a rotating gear tooth, it produces a voltage of 225 μV.

Magnetic field strength:
$B = \frac{V}{sensitivity} = \frac{225 × 10^{-6}}{45 × 10^{-6}} = 5 \text{ mT}$

If the sensor is supplied with 5V and has an internal resistance of 2 kΩ, the current through the sensor is:
$I = \frac{V}{R} = \frac{5}{2000} = 2.5 \text{ mA}$

The Hall coefficient for the semiconductor material (assuming n-type silicon) is:
$R_H = \frac{V_H t}{IB} = \frac{(225 × 10^{-6})(0.5 × 10^{-3})}{(2.5 × 10^{-3})(5 × 10^{-3})} = 9 × 10^{-3} \text{ m³/C}$

### Conclusion

The Biot-Savart law demonstrates the fundamental connection between electricity and magnetism, showing how moving charges (current) create magnetic fields. This relationship, combined with Ampère's law and Faraday's law of induction, forms part of Maxwell's equations, which provide a complete classical description of electromagnetic phenomena.

Understanding magnetic forces and the Biot-Savart law is crucial for many practical applications, from particle accelerators and mass spectrometers to electric motors and magnetic resonance imaging (MRI) machines. The principles discussed here form the foundation for more advanced topics in electromagnetism and their technological applications.