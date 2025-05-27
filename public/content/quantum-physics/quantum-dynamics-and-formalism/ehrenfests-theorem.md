## Ehrenfest's Theorem

### Introduction

Ehrenfest's theorem, formulated by Paul Ehrenfest in 1927, establishes a connection between quantum mechanics and classical mechanics by showing how quantum expectation values follow approximately classical trajectories. This theorem provides insight into the quantum-classical correspondence and helps explain why macroscopic objects obey classical laws despite their quantum nature.

## Mathematical Formulation

### Basic Statement

Ehrenfest's theorem states that the time evolution of the expectation value of an observable follows approximately the classical equations of motion. For a quantum system described by a wavefunction $\psi(x,t)$, the expectation value of an observable $\hat{A}$ is:

$$\langle \hat{A} \rangle = \int \psi^*(x,t) \hat{A} \psi(x,t) dx$$

Ehrenfest's theorem gives the time evolution of this expectation value:

$$\frac{d}{dt}\langle \hat{A} \rangle = \frac{1}{i\hbar}\langle [\hat{A}, \hat{H}] \rangle + \left\langle \frac{\partial \hat{A}}{\partial t} \right\rangle$$

Where $\hat{H}$ is the Hamiltonian operator and $[\hat{A}, \hat{H}]$ is the commutator of $\hat{A}$ and $\hat{H}$.

### Derivation

Starting with the Schrödinger equation:

$$i\hbar \frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle$$

The time derivative of the expectation value is:

$$\frac{d}{dt}\langle \hat{A} \rangle = \frac{d}{dt}\langle \psi(t)|\hat{A}|\psi(t)\rangle$$

$$= \langle \frac{\partial \psi(t)}{\partial t}|\hat{A}|\psi(t)\rangle + \langle \psi(t)|\hat{A}|\frac{\partial \psi(t)}{\partial t}\rangle + \langle \psi(t)|\frac{\partial \hat{A}}{\partial t}|\psi(t)\rangle$$

Substituting the Schrödinger equation:

$$\frac{d}{dt}\langle \hat{A} \rangle = \langle \frac{-i\hat{H}}{\hbar}|\hat{A}|\psi\rangle + \langle \psi|\hat{A}|\frac{-i\hat{H}}{\hbar}\psi\rangle + \langle \frac{\partial \hat{A}}{\partial t}\rangle$$

$$= \frac{i}{\hbar}\langle \psi|\hat{H}\hat{A} - \hat{A}\hat{H}|\psi\rangle + \langle \frac{\partial \hat{A}}{\partial t}\rangle$$

$$= \frac{i}{\hbar}\langle [\hat{H}, \hat{A}] \rangle + \langle \frac{\partial \hat{A}}{\partial t}\rangle$$

Using the property that $[\hat{A}, \hat{B}] = -[\hat{B}, \hat{A}]$, we get:

$$\frac{d}{dt}\langle \hat{A} \rangle = \frac{1}{i\hbar}\langle [\hat{A}, \hat{H}] \rangle + \langle \frac{\partial \hat{A}}{\partial t}\rangle$$

## Applications to Position and Momentum

### Position Operator

For the position operator $\hat{x}$, which has no explicit time dependence, Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{1}{i\hbar}\langle [\hat{x}, \hat{H}] \rangle$$

For a Hamiltonian of the form $\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x})$, we have:

$$[\hat{x}, \hat{H}] = [\hat{x}, \frac{\hat{p}^2}{2m}] + [\hat{x}, V(\hat{x})]$$

Since $[\hat{x}, V(\hat{x})] = 0$ and $[\hat{x}, \hat{p}^2] = 2i\hbar\hat{p}$, we get:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{1}{i\hbar} \cdot \frac{2i\hbar\hat{p}}{2m} = \frac{\langle \hat{p} \rangle}{m}$$

This is analogous to the classical relation $v = \frac{p}{m}$.

### Momentum Operator

For the momentum operator $\hat{p}$, Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{p} \rangle = \frac{1}{i\hbar}\langle [\hat{p}, \hat{H}] \rangle$$

For the same Hamiltonian:

$$[\hat{p}, \hat{H}] = [\hat{p}, \frac{\hat{p}^2}{2m}] + [\hat{p}, V(\hat{x})]$$

Since $[\hat{p}, \hat{p}^2] = 0$ and $[\hat{p}, V(\hat{x})] = -i\hbar\frac{dV(\hat{x})}{d\hat{x}}$, we get:

$$\frac{d}{dt}\langle \hat{p} \rangle = \frac{1}{i\hbar} \cdot (-i\hbar)\left\langle\frac{dV(\hat{x})}{d\hat{x}}\right\rangle = -\left\langle\frac{dV(\hat{x})}{d\hat{x}}\right\rangle$$

This is analogous to the classical relation $F = -\frac{dV}{dx}$.

## Quantum-Classical Correspondence

### Conditions for Classical Behavior

Ehrenfest's theorem shows that expectation values follow classical equations of motion, but this does not mean that quantum systems always behave classically. The correspondence is exact only when:

1. The potential $V(x)$ is at most quadratic in position (e.g., harmonic oscillator)
2. For more general potentials, the correspondence holds approximately when the wavefunction is sharply peaked, so that:

   $$\langle V'(\hat{x}) \rangle \approx V'(\langle \hat{x} \rangle)$$

This approximation is valid when the spatial extent of the wavefunction is small compared to the length scale over which the potential varies significantly.

### Breakdown of Correspondence

The quantum-classical correspondence breaks down in several scenarios:

1. **Tunneling**: When a particle penetrates a classically forbidden region
2. **Interference**: When quantum interference effects become significant
3. **Highly anharmonic potentials**: When the potential varies rapidly compared to the spread of the wavefunction
4. **Long time evolution**: Quantum wave packets tend to spread over time, eventually violating the conditions for classical behavior

## Examples

### Harmonic Oscillator

For a quantum harmonic oscillator with potential $V(x) = \frac{1}{2}m\omega^2 x^2$, Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = -m\omega^2 \langle \hat{x} \rangle$$

These are exactly the classical equations of motion for a harmonic oscillator. This is one of the few cases where quantum and classical dynamics match exactly for all states.

### Particle in a Linear Potential

For a particle in a linear potential $V(x) = Fx$ (constant force), Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = -F$$

Again, these match the classical equations for a particle under constant force, leading to parabolic trajectories.

### Particle in an Anharmonic Potential

For an anharmonic potential like $V(x) = \frac{1}{2}m\omega^2 x^2 + \lambda x^4$, Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = -m\omega^2 \langle \hat{x} \rangle - 4\lambda \langle \hat{x}^3 \rangle$$

Here, the correspondence breaks down because generally $\langle \hat{x}^3 \rangle \neq \langle \hat{x} \rangle^3$, so the quantum expectation value doesn't follow the classical trajectory exactly.

## Generalizations

### Density Matrix Formulation

For mixed states described by a density matrix $\hat{\rho}$, Ehrenfest's theorem takes the form:

$$\frac{d}{dt}\langle \hat{A} \rangle = \frac{1}{i\hbar}\text{Tr}([\hat{A}, \hat{H}]\hat{\rho}) + \text{Tr}\left(\frac{\partial \hat{A}}{\partial t}\hat{\rho}\right)$$

### Heisenberg Picture

In the Heisenberg picture, where operators evolve in time while states remain fixed, Ehrenfest's theorem is directly related to the Heisenberg equation of motion:

$$\frac{d\hat{A}_H(t)}{dt} = \frac{1}{i\hbar}[\hat{A}_H(t), \hat{H}] + \left(\frac{\partial \hat{A}}{\partial t}\right)_H$$

The expectation value is then:

$$\frac{d}{dt}\langle \hat{A} \rangle = \langle \frac{d\hat{A}_H(t)}{dt} \rangle$$

## Practice Problems

### Problem 1: Free Particle Wave Packet

**Question:** A free particle is described by a Gaussian wave packet with initial average position $\langle x \rangle_0 = 0$ and average momentum $\langle p \rangle_0 = p_0$. Using Ehrenfest's theorem, find the average position and momentum as functions of time.

**Answer:** For a free particle, the Hamiltonian is $\hat{H} = \frac{\hat{p}^2}{2m}$. Applying Ehrenfest's theorem:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = 0$$

From the second equation, $\langle \hat{p} \rangle = \langle \hat{p} \rangle_0 = p_0$ (constant).

Substituting into the first equation and integrating:

$$\langle \hat{x} \rangle = \langle \hat{x} \rangle_0 + \frac{p_0}{m}t = \frac{p_0}{m}t$$

The average position moves with constant velocity $v = \frac{p_0}{m}$, exactly as expected classically.

### Problem 2: Harmonic Oscillator Coherent State

**Question:** A quantum harmonic oscillator is prepared in a coherent state with initial average position $\langle x \rangle_0 = A$ and average momentum $\langle p \rangle_0 = 0$. Using Ehrenfest's theorem, find the average position and momentum as functions of time.

**Answer:** For a harmonic oscillator with Hamiltonian $\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega^2 \hat{x}^2$, Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = -m\omega^2 \langle \hat{x} \rangle$$

These form a system of coupled differential equations. Taking the second derivative of the first equation:

$$\frac{d^2}{dt^2}\langle \hat{x} \rangle = \frac{1}{m}\frac{d}{dt}\langle \hat{p} \rangle = -\omega^2 \langle \hat{x} \rangle$$

This is the equation for simple harmonic motion with solution:

$$\langle \hat{x} \rangle = A\cos(\omega t)$$

From the first equation:

$$\langle \hat{p} \rangle = m\frac{d}{dt}\langle \hat{x} \rangle = -mA\omega\sin(\omega t)$$

These match exactly the classical solutions for a harmonic oscillator.

### Problem 3: Particle in a Double-Well Potential

**Question:** Consider a particle in a double-well potential $V(x) = \lambda(x^2 - a^2)^2$. If the particle is initially localized in the left well with $\langle x \rangle_0 = -a$ and $\langle p \rangle_0 = 0$, discuss how Ehrenfest's theorem applies and whether the quantum expectation values will follow classical trajectories.

**Answer:** For this potential, Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = -\langle 4\lambda(x^2 - a^2)x \rangle = -4\lambda\langle x^3 \rangle + 4\lambda a^2\langle x \rangle$$

The classical equation would be:

$$\frac{d^2x}{dt^2} = -\frac{4\lambda}{m}(x^2 - a^2)x = -\frac{4\lambda}{m}x^3 + \frac{4\lambda a^2}{m}x$$

The quantum and classical equations differ because $\langle x^3 \rangle \neq \langle x \rangle^3$. 

Classically, a particle starting at rest at $x = -a$ would remain at that position (it's at a local minimum of the potential).

Quantum mechanically, however, the particle can tunnel through the barrier between the wells. Over time, the wavefunction will spread and develop non-zero probability in the right well. This leads to oscillations in $\langle x \rangle$ that have no classical counterpart.

This is a clear example of the breakdown of the quantum-classical correspondence due to tunneling and interference effects.

### Problem 4: Quantum Particle in a Linear Potential with Initial Momentum

**Question:** A quantum particle with mass $m$ is subject to a constant force $F$ (linear potential $V(x) = -Fx$). At $t = 0$, the particle is described by a Gaussian wave packet centered at $x = 0$ with average momentum $\langle p \rangle_0 = p_0$. Find the average position and momentum as functions of time using Ehrenfest's theorem.

**Answer:** For a linear potential $V(x) = -Fx$, Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = F$$

From the second equation:

$$\langle \hat{p} \rangle = \langle \hat{p} \rangle_0 + Ft = p_0 + Ft$$

Substituting into the first equation and integrating:

$$\langle \hat{x} \rangle = \langle \hat{x} \rangle_0 + \frac{p_0}{m}t + \frac{F}{2m}t^2 = \frac{p_0}{m}t + \frac{F}{2m}t^2$$

These are exactly the classical equations of motion for a particle under constant force, showing that for linear potentials, quantum expectation values follow classical trajectories exactly.

### Problem 5: Angular Momentum in a Central Potential

**Question:** A particle moves in a central potential $V(r)$. Using Ehrenfest's theorem, show that the expectation value of the angular momentum $\langle \hat{L} \rangle$ is conserved.

**Answer:** The angular momentum operator is $\hat{L} = \hat{r} \times \hat{p}$. According to Ehrenfest's theorem:

$$\frac{d}{dt}\langle \hat{L} \rangle = \frac{1}{i\hbar}\langle [\hat{L}, \hat{H}] \rangle$$

For a central potential, the Hamiltonian is $\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{r})$.

The commutator $[\hat{L}, \hat{H}]$ can be evaluated as:

$$[\hat{L}, \hat{H}] = [\hat{r} \times \hat{p}, \frac{\hat{p}^2}{2m}] + [\hat{r} \times \hat{p}, V(\hat{r})]$$

For the first term:
$$[\hat{r} \times \hat{p}, \hat{p}^2] = 0$$

This is because $\hat{p}^2$ is a scalar and commutes with all components of angular momentum.

For the second term:
$$[\hat{r} \times \hat{p}, V(\hat{r})] = 0$$

This is because $V(\hat{r})$ depends only on the magnitude of $\hat{r}$ and commutes with all components of angular momentum.

Therefore:
$$[\hat{L}, \hat{H}] = 0$$

And:
$$\frac{d}{dt}\langle \hat{L} \rangle = 0$$

This shows that the expectation value of angular momentum is conserved in a central potential, which is consistent with the classical result.

### Problem 6: Uncertainty Principle and Ehrenfest's Theorem

**Question:** Consider a free particle described by a Gaussian wave packet with initial position uncertainty $\Delta x_0$ and momentum uncertainty $\Delta p_0 = \frac{\hbar}{2\Delta x_0}$ (minimum uncertainty). Using Ehrenfest's theorem and the properties of Gaussian wave packets, find how the position uncertainty $\Delta x$ evolves with time.

**Answer:** For a free particle, Ehrenfest's theorem gives:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = 0$$

While these equations describe the evolution of expectation values, they don't directly give the uncertainties. For a Gaussian wave packet, the position uncertainty evolves as:

$$(\Delta x)^2 = (\Delta x_0)^2 + \frac{(\Delta p_0)^2}{m^2}t^2 + \frac{\langle \hat{x}\hat{p} + \hat{p}\hat{x} \rangle_0 - 2\langle \hat{x} \rangle_0 \langle \hat{p} \rangle_0}{m}t$$

For a minimum uncertainty wave packet, the covariance term $\langle \hat{x}\hat{p} + \hat{p}\hat{x} \rangle_0 - 2\langle \hat{x} \rangle_0 \langle \hat{p} \rangle_0 = 0$.

Substituting $\Delta p_0 = \frac{\hbar}{2\Delta x_0}$:

$$(\Delta x)^2 = (\Delta x_0)^2 + \frac{\hbar^2}{4m^2(\Delta x_0)^2}t^2$$

$$\Delta x = \sqrt{(\Delta x_0)^2 + \frac{\hbar^2}{4m^2(\Delta x_0)^2}t^2}$$

This shows that the wave packet spreads over time, with the spreading rate inversely proportional to the mass and the initial width. This spreading is a purely quantum effect with no classical analog, illustrating a limitation of Ehrenfest's theorem.

### Problem 7: Ehrenfest's Theorem for a Charged Particle in an Electromagnetic Field

**Question:** A charged particle with charge $q$ and mass $m$ is in an electromagnetic field described by a vector potential $\vec{A}$ and scalar potential $\phi$. Using Ehrenfest's theorem, derive the quantum analog of the Lorentz force law.

**Answer:** The Hamiltonian for a charged particle in an electromagnetic field is:

$$\hat{H} = \frac{1}{2m}(\hat{\vec{p}} - q\vec{A})^2 + q\phi$$

Applying Ehrenfest's theorem to the position operator:

$$\frac{d}{dt}\langle \hat{\vec{r}} \rangle = \frac{1}{i\hbar}\langle [\hat{\vec{r}}, \hat{H}] \rangle$$

Computing the commutator:

$$[\hat{r}_i, \hat{H}] = \frac{1}{2m}[\hat{r}_i, (\hat{\vec{p}} - q\vec{A})^2]$$

Using the canonical commutation relations $[\hat{r}_i, \hat{p}_j] = i\hbar\delta_{ij}$:

$$\frac{d}{dt}\langle \hat{r}_i \rangle = \frac{1}{m}\langle \hat{p}_i - qA_i \rangle$$

This is the quantum analog of the classical relation $\vec{v} = \frac{1}{m}(\vec{p} - q\vec{A})$.

For the momentum operator:

$$\frac{d}{dt}\langle \hat{\vec{p}} \rangle = \frac{1}{i\hbar}\langle [\hat{\vec{p}}, \hat{H}] \rangle$$

After a lengthy calculation using the properties of commutators and the definitions of electric and magnetic fields ($\vec{E} = -\nabla\phi - \frac{\partial \vec{A}}{\partial t}$ and $\vec{B} = \nabla \times \vec{A}$):

$$\frac{d}{dt}\langle \hat{\vec{p}} \rangle = q\langle \vec{E} \rangle + q\langle \frac{\hat{\vec{p}} - q\vec{A}}{m} \times \vec{B} \rangle$$

This is the quantum analog of the Lorentz force law:

$$\frac{d\vec{p}}{dt} = q\vec{E} + q\vec{v} \times \vec{B}$$

Where $\vec{v} = \frac{\vec{p} - q\vec{A}}{m}$ is the velocity.

## Conclusion

Ehrenfest's theorem provides a bridge between quantum and classical mechanics by showing how quantum expectation values can follow classical trajectories under certain conditions. This correspondence helps explain why macroscopic objects, which are fundamentally quantum in nature, appear to obey classical laws.

The theorem has limitations, particularly for systems with highly non-linear potentials, when tunneling or interference effects are significant, or over long time scales when wave packet spreading becomes important. Nevertheless, it remains a fundamental result in quantum mechanics that illuminates the quantum-classical boundary and guides our understanding of how classical physics emerges from quantum principles.
