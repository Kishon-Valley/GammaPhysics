# Sources of Magnetic Fields

## Introduction

Magnetic fields originate from moving electric charges and intrinsic magnetic moments of elementary particles. In classical physics, the primary sources of magnetic fields are electric currents, whether in wires, loops, or distributed as charge flow in materials. Understanding these sources is fundamental to the study of magnetostatics and the behavior of magnetic fields in various systems.

## Magnetic Field Due to a Straight Current-Carrying Wire

A long, straight conductor carrying a steady current $I$ produces a magnetic field that forms concentric circles around the wire. This field is a direct consequence of the motion of electric charges, as described by Ampère’s law. The magnitude of the magnetic field at a distance $r$ from the wire is given by:

$$
B = \frac{\mu_0 I}{2\pi r}
$$

where $\mu_0$ is the permeability of free space. As the distance from the wire increases, the magnetic field strength decreases inversely with $r$. The direction of the magnetic field at any point around the wire is determined by the right-hand rule: if the right hand's thumb points in the direction of the current, the curled fingers indicate the direction of the magnetic field lines. This configuration is fundamental to many practical applications, such as the operation of magnetic sensors and the basic principles behind electromagnets.

![Magnetic field around a straight current-carrying wire. The concentric circles represent the field lines, and the arrow shows the direction of current.](/content/electromagnetism/magnetostatics/magnetic-field-sources-wire.svg)

The animation above illustrates the magnetic field lines encircling a straight wire carrying current. The right-hand rule is depicted to clarify the relationship between current direction and field orientation.

## Magnetic Field of a Circular Current Loop

A circular loop of wire carrying a current $I$ generates a magnetic field that is strongest at the center of the loop and decreases with distance from the plane of the loop. At the geometric center of a loop of radius $R$, the magnetic field is given by:

$$
B = \frac{\mu_0 I}{2R}
$$

The field produced by a current loop resembles that of a magnetic dipole, with field lines emerging from one face of the loop, curving around, and re-entering at the opposite face, forming closed loops. The direction of the field at the center of the loop can be determined by the right-hand rule: when the fingers of the right hand curl in the direction of the current, the thumb points in the direction of the magnetic field at the center. This arrangement is the basis for devices such as magnetic compasses and plays a key role in the design of magnetic resonance imaging (MRI) systems, where uniform magnetic fields are required.

![Magnetic field of a current loop. The field lines form closed loops, and the dipole axis is shown.](/content/electromagnetism/magnetostatics/magnetic-field-sources-loop.svg)

The animation demonstrates the magnetic field structure around a current loop, highlighting the dipole-like nature and the direction of current.

## Magnetic Field of a Solenoid

A solenoid consists of a long coil of wire with $n$ turns per unit length, through which a current $I$ flows. The magnetic field inside an ideal solenoid is highly uniform and directed along the axis of the coil. The strength of this field is given by:

$$
B = \mu_0 n I
$$

This expression assumes the solenoid is much longer than its diameter, minimizing edge effects. Inside the solenoid, the field lines are nearly parallel and evenly spaced, indicating a uniform field. Outside the solenoid, the magnetic field is much weaker and rapidly diminishes with distance. Solenoids are widely used in laboratory electromagnets, inductors, and as actuators in various electromechanical devices. The uniformity and controllability of the solenoid's magnetic field make it essential for experiments and applications where a stable and predictable magnetic environment is necessary.

![Magnetic field inside a solenoid. The field is uniform and parallel to the axis inside, and weak outside.](/content/electromagnetism/magnetostatics/magnetic-field-sources-solenoid.svg)

This animation shows the structure of the magnetic field inside and outside a solenoid, emphasizing the uniform field within the coil and the direction of current.

## Biot-Savart Law

The Biot-Savart Law provides a fundamental method for calculating the magnetic field generated by any steady current distribution. According to this law, each infinitesimal segment of a current-carrying conductor contributes to the magnetic field at a given point in space. The contribution depends on the magnitude of the current, the orientation of the current element, and its position relative to the observation point. The law is mathematically expressed as:

$$
d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{\ell} \times \hat{r}}{r^2}
$$

where $d\vec{\ell}$ is the vector length element of the wire, $I$ is the current, $\hat{r}$ is the unit vector pointing from the current element to the observation point, and $r$ is the distance between them. The total magnetic field is found by integrating this expression over the entire current distribution. The Biot-Savart Law is particularly powerful because it can be applied to arbitrary geometries, making it essential for analyzing magnetic fields in complex systems, such as coils, loops, and curved conductors. It is the magnetic analog of Coulomb's law for electric fields, but with the added complexity of vector cross products reflecting the inherently directional nature of magnetic interactions.

## Ampère’s Law

Ampère’s Law provides a complementary approach to calculating magnetic fields, especially in cases where the current distribution exhibits a high degree of symmetry. The law states that the line integral of the magnetic field $\vec{B}$ around any closed loop is equal to $\mu_0$ times the total current $I_{enc}$ passing through the area enclosed by the loop:

$$
\oint \vec{B} \cdot d\vec{\ell} = \mu_0 I_{enc}
$$

This relationship is particularly useful for determining the magnetic field in situations with cylindrical, planar, or toroidal symmetry, such as infinite straight wires, solenoids, and toroids. By choosing an appropriate integration path that matches the symmetry of the system, the calculation of the magnetic field simplifies significantly. Ampère’s Law is a cornerstone of magnetostatics and forms one of Maxwell's equations, linking the behavior of magnetic fields to electric currents in a precise mathematical framework.

## Magnetic Dipoles

At the microscopic level, the origin of magnetism lies in the intrinsic properties of elementary particles, most notably the electron. Electrons possess both spin and orbital angular momentum, each contributing to a magnetic moment. When many atomic magnetic moments align in a material, their effects combine to produce observable macroscopic magnetism, as seen in ferromagnetic substances like iron, cobalt, and nickel. The concept of a magnetic dipole, characterized by a magnetic moment vector, is central to understanding the behavior of atoms and molecules in external magnetic fields. Magnetic dipoles interact with applied fields, experiencing torques and forces that underlie phenomena such as magnetic resonance, paramagnetism, and the alignment of domains in permanent magnets. The study of magnetic dipoles bridges the gap between quantum mechanical properties of matter and the classical theory of magnetostatics, providing a unified view of magnetic phenomena across scales.

## Questions and Solutions

1. A long, straight wire carries a current of 10 A. Calculate the magnitude of the magnetic field at a point 5 cm from the wire. 

To solve this, use the formula $B = \frac{\mu_0 I}{2\pi r}$, where $I = 10$ A and $r = 0.05$ m. Substituting $\mu_0 = 4\pi \times 10^{-7}$ T·m/A, the field is $B = \frac{4\pi \times 10^{-7} \times 10}{2\pi \times 0.05} = 2 \times 10^{-5}$ T.

2. Find the magnetic field at the center of a circular loop of radius 0.2 m carrying a current of 3 A.

The field at the center is given by $B = \frac{\mu_0 I}{2R}$. Substituting $I = 3$ A and $R = 0.2$ m, $B = \frac{4\pi \times 10^{-7} \times 3}{2 \times 0.2} = 3 \times 10^{-6}$ T.

3. A solenoid has 500 turns per meter and carries a current of 2 A. What is the magnetic field inside the solenoid?

For a long solenoid, $B = \mu_0 n I$, where $n = 500$ turns/m and $I = 2$ A. Thus, $B = 4\pi \times 10^{-7} \times 500 \times 2 = 1.26 \times 10^{-3}$ T.

4. Calculate the force per unit length between two parallel wires 10 cm apart, each carrying 5 A in the same direction.

The force per unit length is $F/L = \frac{\mu_0 I_1 I_2}{2\pi d}$, where $I_1 = I_2 = 5$ A and $d = 0.1$ m. Substituting values, $F/L = \frac{4\pi \times 10^{-7} \times 5 \times 5}{2\pi \times 0.1} = 5 \times 10^{-5}$ N/m.

5. A square loop of side 0.1 m carries a current of 4 A. Find the magnetic field at the center of the loop.

For a square loop, $B = \frac{2\sqrt{2}\mu_0 I}{\pi a}$, where $a = 0.1$ m and $I = 4$ A. Substituting, $B = \frac{2\sqrt{2} \times 4\pi \times 10^{-7} \times 4}{\pi \times 0.1} \approx 1.44 \times 10^{-5}$ T.

6. Determine the magnetic dipole moment of a circular loop with radius 0.05 m carrying a current of 2 A.

The magnetic dipole moment is $m = I \pi r^2$. With $I = 2$ A and $r = 0.05$ m, $m = 2 \times \pi \times (0.05)^2 = 1.57 \times 10^{-2}$ A·m$^2$.

7. If a proton moves perpendicular to a magnetic field of 0.2 T with a speed of $1 \times 10^6$ m/s, what is the radius of its circular path?

The radius is $r = \frac{mv}{qB}$, where $m = 1.67 \times 10^{-27}$ kg, $v = 1 \times 10^6$ m/s, $q = 1.6 \times 10^{-19}$ C, and $B = 0.2$ T. Thus, $r = \frac{1.67 \times 10^{-27} \times 1 \times 10^6}{1.6 \times 10^{-19} \times 0.2} = 5.22 \times 10^{-2}$ m.

8. What is the total current enclosed by a circular Amperian loop of radius 0.5 m if the magnetic field along the loop is $2 \times 10^{-6}$ T?

From Ampère’s Law, $\oint \vec{B} \cdot d\vec{\ell} = \mu_0 I_{enc}$. The integral is $B \cdot 2\pi r$, so $I_{enc} = \frac{B \cdot 2\pi r}{\mu_0} = \frac{2 \times 10^{-6} \times 2\pi \times 0.5}{4\pi \times 10^{-7}} = 5$ A.

9. A straight wire segment 0.2 m long carries a current of 6 A. What is the magnetic field at a point 0.1 m from the wire, at the midpoint of the segment?

For a finite wire, $B = \frac{\mu_0 I}{4\pi r}(\sin\theta_1 + \sin\theta_2)$. For the midpoint, $\theta_1 = \theta_2 = 90^\circ$, so $B = \frac{4\pi \times 10^{-7} \times 6}{4\pi \times 0.1}(1 + 1) = 3 \times 10^{-6}$ T.

10. Calculate the torque on a magnetic dipole of moment $2 \times 10^{-3}$ A·m$^2$ placed in a uniform magnetic field of 0.5 T at an angle of $30^\circ$ to the field.

The torque is $\tau = mB\sin\theta$. Substituting, $\tau = 2 \times 10^{-3} \times 0.5 \times \sin 30^\circ = 5 \times 10^{-4}$ N·m.


## Summary

Magnetic fields are generated by electric currents and magnetic dipoles. The Biot-Savart Law and Ampère’s Law provide the mathematical framework for calculating magnetic fields from various current distributions. These principles are fundamental for understanding electromagnets, electric motors, transformers, and many other applications in physics and engineering.
