## **Coulomb's Law**  
*The Fundamental Law of Electrostatic Force*  

---

### **Introduction**  
Coulomb's Law, discovered by Charles-Augustin de Coulomb in 1785, describes the electrostatic force between charged particles. This fundamental principle forms the cornerstone of electrostatics and provides a mathematical framework for understanding electric interactions.


## **Mathematical Expression**

The electrostatic force between two point charges is given by Coulomb's law:

![Coulomb's Law: Point Charge Interactions](/content/images/electromagnetism/coulomb-force.svg)

$$ F = k\frac{q_1q_2}{r^2} $$

In this expression, F represents the electrostatic force measured in Newtons, while k denotes Coulomb's constant, approximately 8.99 × 10⁹ N⋅m²/C². The quantities q₁ and q₂ represent the magnitudes of the charges in Coulombs, and r measures the distance between the charges in meters.

The nature of this force reveals itself through the signs of the charges involved. When two charges bear opposite signs, they attract each other; when they share the same sign, they repel. In all cases, the force acts along the line connecting the charges, embodying the fundamental principle of action and reaction.

## **Vector Form**

The vector formulation of Coulomb's law incorporates spatial directionality through the unit vector $\hat{r}_{12}$. The force vector between two point charges is expressed as:

$$ \vec{F}_{12} = k\frac{q_1q_2}{r^2}\hat{r}_{12} $$

The unit vector $\hat{r}_{12}$ points from charge q₁ to q₂ and can be expressed in Cartesian coordinates as $\hat{r}_{12} = \frac{\vec{r}_2 - \vec{r}_1}{|\vec{r}_2 - \vec{r}_1|}$, where $\vec{r}_1$ and $\vec{r}_2$ are the position vectors of the respective charges. The force magnitude follows an inverse square dependence on separation distance, while the direction aligns with the inter-charge axis. For a system of n point charges, the net force on any charge follows the superposition principle: $\vec{F}_\text{net} = \sum_{i\neq j} k\frac{q_iq_j}{r_{ij}^2}\hat{r}_{ij}$. The conservative nature of the electrostatic force ensures path independence of work done, enabling the definition of electric potential energy.

## **Electric Field**

The electric field formalism provides a method for analyzing electrostatic interactions through space. For a source charge Q, the electric field vector $\vec{E}$ at position $\vec{r}$ is defined as the force per unit charge experienced by a test charge q:

$$ \vec{E}(\vec{r}) = \lim_{q \to 0} \frac{\vec{F}}{q} = k\frac{Q}{r^2}\hat{r} $$

The field exhibits radial symmetry for point charges, with magnitude decreasing as $1/r^2$ and direction determined by the source charge polarity. For a continuous charge distribution $\rho(\vec{r'})$, the field is obtained through integration:

$$ \vec{E}(\vec{r}) = k\int \frac{\rho(\vec{r'})}{|\vec{r}-\vec{r'}|^2}\hat{r'}\,d^3r' $$

The field lines representation visualizes the field's directional properties:

![Electric Field Lines](/content/images/electromagnetism/electric-field.svg)

The electric field satisfies Gauss's law, relating the flux through a closed surface to the enclosed charge:

$$ \oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0} $$

The field is conservative, enabling the definition of electric potential V through:

$$ \vec{E} = -\nabla V $$

This potential formulation provides an alternative method for field calculations and energy analysis in electrostatic systems.


The electric field concept transforms our understanding from action-at-a-distance to a field theory, where charges interact with the field present at their location.

## **Superposition Principle**

The superposition principle states that electrostatic interactions obey linear superposition. For a system of discrete point charges, this principle manifests in both force and field calculations.

### **Force Superposition**

The net electrostatic force on a test charge Q in a multi-charge system is the vector sum of individual Coulomb forces:

$$ \vec{F}_{\text{net}} = \sum_{i=1}^{N} \vec{F}_i = kQ\sum_{i=1}^{N} \frac{q_i}{r_i^2}\hat{r}_i $$

where $q_i$ represents the i-th source charge at distance $r_i$ from Q. The vector addition of forces is illustrated below:

![Superposition of Electric Forces](/content/images/electromagnetism/superposition.svg)

The principle extends to continuous charge distributions through integration:

$$ \vec{F}_{\text{net}} = kQ\int \frac{\rho(\vec{r'})}{|\vec{r}-\vec{r'}|^2}\hat{r'}\,d^3r' $$

### **Field Superposition**

The total electric field at any point results from the superposition of individual fields:

$$ \vec{E}_{\text{total}} = \sum_{i=1}^{N} \vec{E}_i = k\sum_{i=1}^{N} \frac{q_i}{r_i^2}\hat{r}_i $$

This principle enables the analysis of complex charge configurations through decomposition into simpler arrangements. The superposition principle remains valid for static charges in both vacuum and linear dielectric media, though modifications are required for nonlinear materials or dynamic situations.

## **Continuous Charge Distributions**

For continuous charge distributions, the discrete summation transforms into volume, surface, or line integrals. The charge element dq relates to charge density through:

- Volume charge density: $dq = \rho(\vec{r'})\,d^3r'$
- Surface charge density: $dq = \sigma(\vec{r'})\,da'$
- Linear charge density: $dq = \lambda(\vec{r'})\,dl'$

The electric field integral takes the form:

$$ \vec{E}(\vec{r}) = k\int \frac{\rho(\vec{r'})}{|\vec{r}-\vec{r'}|^2}\hat{r'}\,d^3r' $$

For symmetric charge distributions, Gauss's law often provides a more efficient calculation method:

$$ \oint_S \vec{E}\cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0} $$

This approach is particularly effective for:
- Spherical charge distributions
- Infinite line charges
- Infinite plane charges
- Cylindrical charge distributions

## **Experimental Verification**

Coulomb's law has undergone extensive experimental validation through multiple methodologies:

$$ \frac{|F_{\text{measured}} - F_{\text{predicted}}|}{F_{\text{predicted}}} < 10^{-16} $$

Key experimental verifications include:

1. Torsion balance measurements (modern versions of Coulomb's original apparatus)
2. Cavendish-type experiments measuring electrostatic force nullification
3. High-precision capacitor experiments
4. Quantum Hall effect measurements

The inverse square dependence has been verified from submicroscopic scales (~10⁻¹⁵ m) to astronomical distances, with no observed deviations within experimental uncertainty.

## Practical Applications

Consider a practical scenario: two small charged spheres separated by 0.1 meters. If one sphere carries 2 μC and the other -3 μC, the resulting force demonstrates both the strength and directional nature of electrostatic interactions. The force magnitude reaches 5.39 N, significant enough to observe macroscopically.

In another scenario, three equal charges arranged in an equilateral triangle create a fascinating balance of forces. Each charge experiences a net force that depends on both the geometric arrangement and the charge magnitudes, illustrating the vector nature of electrostatic interactions.

## Theoretical Framework

Coulomb's law serves as the foundation for more advanced electromagnetic concepts. It leads naturally to the idea of electric potential, forms the basis for Gauss's law, and ultimately becomes incorporated into Maxwell's equations. The inverse square nature of the force parallels gravitational interactions, suggesting a deep connection between fundamental forces in nature.





## **Quantum Electrodynamic Effects**

At quantum scales, electrostatic interactions require modification through quantum electrodynamics (QED). The potential between charged particles becomes:

$$ V(r) = -\frac{\alpha\hbar c}{r}\left(1 + \frac{\alpha}{\pi}\frac{\lambda_c}{r} + O(\alpha^2)\right) $$

where:
$\alpha$ is the fine structure constant
$\lambda_c$ is the Compton wavelength

The electron probability density $|\psi(\vec{r})|^2$ modifies the classical point charge model, leading to:

$$ \vec{E}(\vec{r}) = \frac{e}{4\pi\epsilon_0}\int \frac{|\psi(\vec{r'})|^2(\vec{r}-\vec{r'})}{|\vec{r}-\vec{r'}|^3}\,d^3r' $$

Quantum tunneling and exchange interactions further modify electrostatic screening in materials.

## **Cross-disciplinary Applications**

### **Chemical Systems**
Electrostatic interactions determine molecular structure through:

$$ E_{\text{bond}} = \sum_{i,j} \frac{q_iq_j}{4\pi\epsilon_0r_{ij}} + E_{\text{exchange}} + E_{\text{correlation}} $$

### **Biological Systems**
Membrane potential dynamics follow the Nernst equation:

$$ V_m = \frac{RT}{zF}\ln\left(\frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}}\right) $$

### **Materials Science**
Colloidal stability is governed by DLVO theory:

$$ V_{\text{total}} = V_{\text{electrostatic}} + V_{\text{van der Waals}} $$

where the electrostatic term derives from overlapping electric double layers. 

## Practice Problems

Q1: Two point charges q₁ = 3 μC and q₂ = -4 μC are separated by 2 cm. Calculate the magnitude and direction of the electrostatic force between them.

Solution:
Using Coulomb's law: F = k|q₁q₂|/r², we can substitute the values directly. The force magnitude becomes:
$$ F = (8.99 × 10^9)\frac{(3 × 10^{-6})(-4 × 10^{-6})}{(0.02)^2} = -26.97\text{ N} $$
The negative result indicates an attractive force. The charges will pull toward each other with a force of 26.97 N along the line connecting them.

Q2: An electron (q = -1.6 × 10⁻¹⁹ C) experiences an electric field of 5000 N/C. What is the magnitude of the force acting on it?

Solution:
The force on a charge in an electric field follows F = qE. Substituting the values:
$$ F = (-1.6 × 10^{-19})(5000) = 8 × 10^{-16}\text{ N} $$
The electron experiences a force of 8 × 10⁻¹⁶ N in the direction opposite to the electric field due to its negative charge.

Q3: Three identical positive charges of 2 μC each are placed at the vertices of an equilateral triangle with sides of 10 cm. Calculate the net force on one of the charges.

Solution:
Consider one charge at a vertex. It experiences repulsion from the other two charges with equal magnitude. Using Coulomb's law, each force has magnitude F = kq²/r² = (8.99 × 10⁹)(4 × 10⁻¹²)/(0.1)² = 3.596 N. Due to the equilateral arrangement, these forces act at 60° to each other. The net force follows from vector addition, with magnitude F_net = F√3 = 6.23 N, directed along the bisector of the angle formed by the two forces, pointing away from the triangle's center.

Q4: A point charge creates an electric field of 200 N/C at a distance of 50 cm. What is the magnitude of the charge?

Solution:
The electric field strength follows E = kQ/r². Rearranging to solve for the charge:
$$ Q = \frac{Er^2}{k} = \frac{(200)(0.5)^2}{8.99 × 10^9} = 5.56 × 10^{-9}\text{ C} = 5.56\text{ nC} $$
This charge would create the specified field strength at the given distance in all directions, following the inverse square law.

## Summary

Coulomb's law describes the electrostatic force between charged particles, varying inversely with the square of their separation and directly with the product of their charges. The force is repulsive for like charges and attractive for opposite charges. This fundamental principle leads to the concept of electric fields, where E = F/q describes the force per unit charge at any point. Multiple charges follow the superposition principle, with total forces and fields found by vector addition. These principles form the foundation of electrostatics and explain phenomena from atomic binding to lightning.