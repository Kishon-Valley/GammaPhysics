# Compatibility of Observables in Quantum Mechanics

## Introduction

In the framework of quantum mechanics, physical observables are represented by Hermitian operators acting on the state of a quantum system. While classical physics allows for the simultaneous measurement of any combination of physical quantities with arbitrary precision, quantum mechanics imposes fundamental restrictions on our ability to measure certain pairs of observables simultaneously. This property, deeply rooted in the mathematical structure of quantum theory, leads to the classification of observables as either compatible or incompatible.

The compatibility of observables represents a cornerstone concept in quantum mechanics that directly influences our understanding of measurement outcomes, state preparation, and the foundational interpretations of quantum theory. This concept stands alongside other fundamental postulates of quantum mechanics such as state superposition, measurement projection, and time evolution, forming a coherent framework that accurately describes the behavior of physical systems at the microscopic scale.

## Mathematical Formulation

The compatibility of two observables in quantum mechanics is determined by examining whether their corresponding operators commute. For two observables represented by operators Â and B̂, we calculate their commutator:

$$[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$$

When this commutator equals zero, the observables are said to be compatible or simultaneously measurable. Conversely, when the commutator does not vanish, the observables are incompatible. The mathematical significance of this relationship emerges from the uncertainty relations developed by Heisenberg, which establish a lower bound on the product of uncertainties for incompatible observables:

$$\Delta A \cdot \Delta B \geq \frac{1}{2}|⟨[\hat{A}, \hat{B}]⟩|$$

where ΔA and ΔB represent the standard deviations of measurements for observables A and B, respectively, and the right side involves the expectation value of their commutator. The most famous example is the position-momentum uncertainty relation, where the position operator x̂ and momentum operator p̂ yield a commutator of [x̂, p̂] = iħ, leading to the familiar form:

$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

This relation establishes that as the uncertainty in position decreases, the uncertainty in momentum must increase proportionally, and vice versa, ensuring their product never falls below ħ/2.

![Compatible vs Incompatible Observables](/images/quantum-physics/compatible-observables.svg)

## Physical Interpretation and Consequences

The compatibility of observables has profound implications for quantum measurement. When two observables commute, they share a common set of eigenstates, meaning they can be simultaneously diagonalized in the same basis. Physically, this implies that these quantities can be measured simultaneously with arbitrary precision, and a quantum state can be prepared as a simultaneous eigenstate of both observables.

Consider, for instance, components of angular momentum. Different components do not commute—the operators L̂x, L̂y, and L̂z satisfy commutation relations [L̂i, L̂j] = iħεijk L̂k, where εijk is the Levi-Civita symbol. This non-commutativity means that if a particle's angular momentum is precisely defined along one axis, it must be uncertain along the perpendicular axes. However, the squared magnitude of angular momentum L̂² commutes with any single component, so the total angular momentum and one component can be simultaneously known.

In contrast, when observables are incompatible, they represent physical quantities that can peacefully coexist in our measurement paradigm. For example, in a hydrogen atom, the Hamiltonian (energy operator), the squared angular momentum L̂², and one component of angular momentum such as L̂z all commute with each other. A quantum state can therefore be labeled simultaneously by energy, total angular momentum, and the z-component of angular momentum, forming the familiar spectroscopic notation for atomic states.

The compatibility or incompatibility of observables fundamentally shapes our understanding of quantum reality. It establishes which properties of a quantum system can be simultaneously well-defined and which combinations necessarily involve trade-offs in precision. This leads directly to the concept of complementarity introduced by Niels Bohr, which suggests that quantum objects possess properties that are equally real but mutually exclusive—they cannot be observed simultaneously.

## Visual Representation of Compatible vs. Incompatible Observables

The concept of compatible and incompatible observables can be visualized through their eigenbases. For compatible observables, we can imagine their eigenvectors as aligned along the same coordinate axes in Hilbert space. When operators commute, they can be simultaneously diagonalized, meaning there exists a common basis of eigenstates for both operators.

For instance, consider two compatible observables Â and B̂ with shared eigenstates |ψᵢ⟩:

$$\hat{A}|ψᵢ⟩ = a_i|ψᵢ⟩$$
$$\hat{B}|ψᵢ⟩ = b_i|ψᵢ⟩$$

In this case, measuring one observable does not disturb the eigenstate of the other. The measurement outcomes for both observables can be predicted with certainty if the system is prepared in one of their common eigenstates.

In contrast, incompatible observables like position and momentum have eigenbases that are maximally misaligned—they are related through a Fourier transform. The position eigenstates |x⟩ and momentum eigenstates |p⟩ represent complementary descriptions:

$$⟨x|p⟩ = \frac{1}{\sqrt{2\pi\hbar}}e^{ipx/\hbar}$$

This relationship illustrates that a state well-localized in position must be spread out in momentum space, and vice versa. The wave-particle duality in quantum mechanics can be understood as a manifestation of this complementarity between position and momentum observables.

Another instructive visualization comes from the Stern-Gerlach experiment with spin-1/2 particles. Measuring spin along the z-axis produces either "spin-up" |↑⟩ or "spin-down" |↓⟩ states. If we subsequently measure the spin along the x-axis, we disturb the z-spin state because the operators σ̂z and σ̂x are incompatible. The eigenstates of x-spin, |→⟩ and |←⟩, are equal superpositions of z-spin eigenstates:

$$|→⟩ = \frac{1}{\sqrt{2}}(|↑⟩ + |↓⟩)$$
$$|←⟩ = \frac{1}{\sqrt{2}}(|↑⟩ - |↓⟩)$$

This relationship between complementary spin measurements provides a concrete demonstration of how incompatible observables relate to each other and why measuring one necessarily disturbs the other.

## Consequences for Measurement

When performing sequential measurements of incompatible observables, the order of measurements becomes critically important. If we measure observable A followed by B, the result will generally differ from measuring B followed by A. This non-commutativity of measurements reflects the underlying non-commutativity of the corresponding operators.

![Incompatible Observables and Measurement Consequences](/images/quantum-physics/incompatible-observables.svg)

The measurement process in quantum mechanics causes what is known as the "collapse" or projection of the wave function. When measuring an observable, the quantum state projects onto one of the eigenstates of the corresponding operator, with probability determined by the Born rule. For compatible observables, this projection preserves the eigenstate property for the other observable. However, for incompatible observables, measuring one destroys the system's status as an eigenstate of the other.

This phenomenon creates a fundamental limitation on information extraction from quantum systems and leads to interesting preparation procedures. For example, in quantum cryptography, communicating parties can exchange information securely by encoding data in incompatible observables, ensuring that any eavesdropping attempt would necessarily disturb the quantum state in a detectable manner.

## Compatible Observables and Conservation Laws

The concept of compatible observables connects deeply with conservation laws in physics through Noether's theorem. When an observable commutes with the Hamiltonian of a system, that observable represents a conserved quantity. For instance, if [Ĥ, P̂] = 0, where P̂ is the momentum operator, then momentum is conserved in the system.

These conservation principles emerge from symmetries in the physical system. Translational symmetry leads to momentum conservation, rotational symmetry to angular momentum conservation, and time-translation symmetry to energy conservation. The fact that these symmetry operations commute with the Hamiltonian reflects the compatibility of the corresponding observables with energy.

In practice, compatible observables allow physicists to classify quantum states according to multiple quantum numbers simultaneously. For example, in atomic physics, electrons in an atom can be classified by their principal quantum number n (related to energy), angular momentum quantum number ℓ, magnetic quantum number mℓ, and spin quantum number ms. The compatibility of these observables (except for cases involving spin-orbit coupling) simplifies the mathematical description of complex quantum systems.

## Practical Example: The Hydrogen Atom

The hydrogen atom provides an excellent practical example of compatible observables in quantum mechanics. The Hamiltonian for an electron in a hydrogen atom is:

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla^2 - \frac{e^2}{4\pi\epsilon_0 r}$$

This Hamiltonian commutes with several important operators:

1. The squared angular momentum operator L̂²
2. Any single component of angular momentum (typically chosen as L̂z)
3. The parity operator P̂

These compatible observables allow us to label the eigenstates of the hydrogen atom with multiple quantum numbers simultaneously. The energy eigenstates |n,ℓ,m⟩ are characterized by:

- Principal quantum number n (determined by energy): En = -13.6 eV/n²
- Angular momentum quantum number ℓ (determined by L̂²): eigenvalue ℓ(ℓ+1)ħ²
- Magnetic quantum number m (determined by L̂z): eigenvalue mħ

The wave functions for these states are expressed as:

$$\psi_{n\ell m}(r,\theta,\phi) = R_{n\ell}(r)Y_{\ell m}(\theta,\phi)$$

where R_{n\ell}(r) is the radial function and Y_{\ell m}(\theta,\phi) are spherical harmonics.

The existence of this complete set of compatible observables is why atomic spectroscopy works so efficiently—we can simultaneously specify multiple properties of electron states and predict transitions between them. The selection rules for transitions (Δℓ = ±1, Δm = 0,±1) arise from considering which operators do not commute with the interaction Hamiltonian for electromagnetic radiation.

In contrast, if we try to measure the position of the electron, we disturb its momentum and energy states because the position operator does not commute with either the momentum operator or the Hamiltonian. This illustrates why we typically work with the quantum numbers from compatible observables rather than attempting to describe electron "orbits" in the classical sense.

## Complete Sets of Compatible Observables

A particularly useful concept in quantum mechanics is that of a complete set of compatible observables (CSCO). This is a set of mutually commuting observables whose common eigenstates form a basis for the Hilbert space of the system. Having a CSCO allows for the complete specification of a quantum state using the eigenvalues of these observables.

For a particle in three dimensions, position coordinates (x, y, z) form a CSCO, as do momentum components (px, py, pz). However, we cannot combine position and momentum components due to their incompatibility. For a hydrogen atom, a common CSCO includes the Hamiltonian Ĥ, squared angular momentum L̂², and z-component of angular momentum L̂z.

The identification of a CSCO provides a powerful framework for analyzing quantum systems, as it identifies the maximum amount of information that can be simultaneously known about the system. It also guides experimental setups, as measurements can be designed to determine the eigenvalues of a CSCO, thereby completely characterizing the quantum state within the limitations imposed by the uncertainty principle.

## Compatibility in Quantum Computing

The concept of compatible and incompatible observables extends naturally to quantum computing, where it influences the design of quantum algorithms and error correction codes. Quantum bits or qubits are typically measured in the computational basis (eigenstates of the Pauli-Z operator σz). However, measurements in complementary bases (such as the eigenstates of σx or σy) reveal different aspects of the quantum information.

In quantum error correction, the careful selection of compatible observables known as stabilizers allows for the detection and correction of errors without disturbing the encoded quantum information. By measuring certain compatible observables (syndrome measurements), quantum error correction protocols can identify errors without collapsing the quantum state of interest.

The development of fault-tolerant quantum computing relies heavily on understanding which measurements can be performed simultaneously and which necessarily disturb each other. This practical application of the compatibility of observables demonstrates how this fundamental quantum concept translates into cutting-edge technological developments.

## Compatibility and Quantum Entanglement

The compatibility of observables also plays a crucial role in understanding quantum entanglement, one of the most distinctive features of quantum mechanics. When two particles are entangled, certain joint observables of the composite system have well-defined values, even though the corresponding individual observables for each subsystem may be undefined.

Consider the famous Bell states of two qubits, such as |Φ⁺⟩ = (|00⟩ + |11⟩)/√2. This state is an eigenstate of joint observables such as σz⊗σz and σx⊗σx, but not of the individual σz or σx for either qubit. These joint observables are compatible with each other, allowing for correlations that exceed what is possible in classical physics.

The interplay between compatible and incompatible observables in multipartite systems leads to the phenomenon of quantum contextuality, where measurement outcomes depend not just on the observable being measured but also on which compatible observables are measured simultaneously. This contextual nature of quantum observables has been experimentally verified and represents another departure from classical intuition.

## Experimental Verification

The compatibility and incompatibility of quantum observables have been verified in numerous experiments. One of the most direct demonstrations comes from neutron interferometry, where spin and path observables can be measured in various sequences, confirming the non-commutative nature of incompatible measurements.

In quantum optics, the compatibility of observables is regularly tested through measurements of complementary properties of light, such as which-path information versus interference patterns in double-slit experiments. These experiments directly demonstrate Bohr's complementarity principle and verify the uncertainty relations for incompatible observables.

Recent advances in quantum technology have enabled even more precise tests of these principles. For example, experiments with trapped ions and superconducting qubits allow for the sequential measurement of incompatible observables with high fidelity, confirming the theoretical predictions about measurement disturbance and uncertainty relations.

## Conclusion

The compatibility of observables stands as a fundamental concept in quantum mechanics that shapes our understanding of how information can be extracted from quantum systems. By determining which properties can be simultaneously measured with arbitrary precision and which cannot, compatibility influences everything from the basic interpretation of quantum theory to practical applications in spectroscopy, quantum computing, and cryptography.

The mathematical formalism of commuting operators provides a powerful framework for analyzing quantum systems, identifying conserved quantities, and predicting measurement outcomes. The consequences of incompatibility—uncertainty relations, measurement disturbance, and complementarity—reveal the inherent limitations on our knowledge of quantum systems while also opening new possibilities for quantum technologies that exploit these features.

As quantum mechanics continues to evolve and find new applications, the concept of compatible observables remains central to our understanding of the quantum world. It reminds us that quantum reality fundamentally differs from classical intuition, not just in its probabilistic nature but in the very way properties can be defined and measured. This deep conceptual insight continues to guide both theoretical developments and experimental investigations in quantum physics.

## Practice Problems and Solutions

The following problems are designed to test and deepen your understanding of compatible and incompatible observables in quantum mechanics. They range from mathematical verifications to conceptual applications, covering key aspects of this fundamental quantum mechanical concept.

### Problem 1: Commutator Calculation
**Question:** Calculate the commutator [x̂, p̂²] where x̂ is the position operator and p̂ is the momentum operator.

**Solution:**
We can use the known commutator [x̂, p̂] = iħ and the product rule for commutators:
[Â, B̂Ĉ] = [Â, B̂]Ĉ + B̂[Â, Ĉ].

[x̂, p̂²] = [x̂, p̂p̂] = [x̂, p̂]p̂ + p̂[x̂, p̂] = iħp̂ + p̂(iħ) = 2iħp̂

This non-zero result confirms that position and kinetic energy (proportional to p̂²) are incompatible observables.

### Problem 2: Compatible Angular Momentum Operators
**Question:** Show that the operators L̂² and L̂z are compatible by verifying their commutator is zero.

**Solution:**
We can express L̂² = L̂x² + L̂y² + L̂z², so:
[L̂², L̂z] = [L̂x² + L̂y² + L̂z², L̂z]
         = [L̂x², L̂z] + [L̂y², L̂z] + [L̂z², L̂z]

The last term [L̂z², L̂z] = 0 since any operator commutes with itself.

For the first terms, we use the angular momentum commutation relations:
[L̂i, L̂j] = iħεijk L̂k where εijk is the Levi-Civita symbol.

Using the product rule again:
[L̂x², L̂z] = [L̂xL̂x, L̂z] = L̂x[L̂x, L̂z] + [L̂x, L̂z]L̂x = L̂x(iħL̂y) + (iħL̂y)L̂x = iħ(L̂xL̂y + L̂yL̂x)

Similarly, [L̂y², L̂z] = -iħ(L̂xL̂y + L̂yL̂x)

Therefore, [L̂x², L̂z] + [L̂y², L̂z] = 0, and thus [L̂², L̂z] = 0.

This confirms that the squared magnitude of angular momentum and its z-component are compatible observables.

### Problem 3: Pauli Matrices Commutators
**Question:** For a spin-1/2 particle, the spin operators are proportional to the Pauli matrices. Calculate all possible commutators between σx, σy, and σz, and determine which pairs of spin components are compatible.

**Solution:**
The Pauli matrices are:
$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

Calculating the commutators:
$$[\sigma_x, \sigma_y] = \sigma_x\sigma_y - \sigma_y\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} - \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

$$= \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix} - \begin{pmatrix} -i & 0 \\ 0 & i \end{pmatrix} = \begin{pmatrix} 2i & 0 \\ 0 & -2i \end{pmatrix} = 2i\sigma_z$$

Similarly, we can show that:
$$[\sigma_y, \sigma_z] = 2i\sigma_x$$
$$[\sigma_z, \sigma_x] = 2i\sigma_y$$

Since none of these commutators vanish, no pair of spin components is compatible. This means that if we know the spin component along one axis, the spin components along the other axes are inherently uncertain.

### Problem 4: Uncertainty Relation for Spin
**Question:** A spin-1/2 particle is in the state |↑⟩ along the z-axis. Calculate the uncertainties ΔSx, ΔSy, and ΔSz, and verify the uncertainty relation for ΔSx⋅ΔSy.

**Solution:**
For a spin-1/2 particle, the spin operators are Ŝi = (ħ/2)σi where i ∈ {x, y, z}.

In the state |↑⟩z, the expectation values are:
⟨Ŝx⟩ = ⟨↑z|Ŝx|↑z⟩ = 0
⟨Ŝy⟩ = ⟨↑z|Ŝy|↑z⟩ = 0
⟨Ŝz⟩ = ⟨↑z|Ŝz|↑z⟩ = ħ/2

For the squared operators:
⟨Ŝx²⟩ = ⟨↑z|(ħ/2)²σx²|↑z⟩ = (ħ/2)² since σx² = I
⟨Ŝy²⟩ = (ħ/2)² similarly
⟨Ŝz²⟩ = (ħ/2)²

The uncertainties are:
ΔSx = √(⟨Ŝx²⟩ - ⟨Ŝx⟩²) = √((ħ/2)² - 0²) = ħ/2
ΔSy = ħ/2
ΔSz = √((ħ/2)² - (ħ/2)²) = 0

The uncertainty relation requires:
ΔSx⋅ΔSy ≥ (1/2)|⟨[Ŝx, Ŝy]⟩|
ΔSx⋅ΔSy = (ħ/2)⋅(ħ/2) = ħ²/4

From Problem 3, we know [Ŝx, Ŝy] = iħŜz, so:
(1/2)|⟨[Ŝx, Ŝy]⟩| = (1/2)|iħ⟨Ŝz⟩| = (1/2)(ħ)(ħ/2) = ħ²/4

Therefore, ΔSx⋅ΔSy = ħ²/4 = (1/2)|⟨[Ŝx, Ŝy]⟩|, which means the uncertainty relation is satisfied with equality. This is expected for a minimum uncertainty state.

### Problem 5: Simultaneous Eigenstates
**Question:** Identify whether the following pairs of operators share simultaneous eigenstates, and if they do, find an example:
(a) Ĥ and p̂ for a free particle
(b) L̂² and L̂z for a particle in a central potential
(c) x̂ and p̂ for any system

**Solution:**
(a) For a free particle, Ĥ = p̂²/2m. Since this is a function of p̂, these operators commute: [Ĥ, p̂] = 0. Thus, they share simultaneous eigenstates. An example eigenstate is a plane wave:
ψp(x) = Aeⁱᵖˣ/ħ which satisfies:
p̂ψp(x) = pψp(x)
Ĥψp(x) = (p²/2m)ψp(x)

(b) As we proved in Problem 2, [L̂², L̂z] = 0, so these operators share simultaneous eigenstates. The spherical harmonics Ylm(θ,φ) are examples:
L̂²Ylm(θ,φ) = l(l+1)ħ²Ylm(θ,φ)
L̂zYlm(θ,φ) = mħYlm(θ,φ)

(c) We know [x̂, p̂] = iħ ≠ 0, so these operators do not commute and cannot share simultaneous eigenstates. This mathematical fact reflects the fundamental uncertainty principle between position and momentum.

### Problem 6: Conservation and Compatibility
**Question:** A quantum particle is subject to a time-independent potential V(x) that is periodic: V(x+a) = V(x) for some constant a. Determine whether momentum is conserved, and explain how this relates to the compatibility of the momentum operator with the Hamiltonian.

**Solution:**
For a periodic potential, the system has discrete translational symmetry, but not continuous translational symmetry. Consequently, linear momentum is not conserved.

This can be verified by checking whether the momentum operator p̂ commutes with the Hamiltonian:
Ĥ = p̂²/2m + V(x̂)

The commutator [Ĥ, p̂] = [p̂²/2m, p̂] + [V(x̂), p̂] = 0 + [V(x̂), p̂]

Using the canonical commutation relation [x̂, p̂] = iħ and the fact that [f(x̂), p̂] = iħ(df/dx):
[V(x̂), p̂] = iħ(dV/dx)

For a non-constant potential, dV/dx ≠ 0 somewhere, so [Ĥ, p̂] ≠ 0.

The non-zero commutator indicates that momentum and energy are incompatible observables for this system. This incompatibility manifests physically as the non-conservation of momentum: a particle moving through the periodic potential can exchange momentum with the potential.

However, while linear momentum is not conserved, the system has a different conserved quantity: crystal momentum or quasi-momentum, which arises from the discrete translational symmetry of the periodic potential.

### Problem 7: Measurement Sequences
**Question:** A particle is initially in an eigenstate of position, |x₀⟩. We perform three sequential measurements: first momentum, then position, then momentum again. If the results of the measurements are p₁, x₂, and p₃ respectively, determine whether these values are correlated or independent.

**Solution:**
Let's analyze this sequence of measurements:

1. Initial state: |x₀⟩ (position eigenstate)
2. First momentum measurement: The state collapses to |p₁⟩, which is a momentum eigenstate. The probability distribution for p₁ is given by |⟨p₁|x₀⟩|², which is uniform across all momentum values.
3. Position measurement: The state collapses to |x₂⟩. The probability distribution for x₂ is given by |⟨x₂|p₁⟩|², which is uniform across all position values.
4. Second momentum measurement: The state collapses to |p₃⟩. The probability distribution for p₃ is given by |⟨p₃|x₂⟩|², which is uniform across all momentum values.

Because position and momentum are incompatible observables ([x̂, p̂] = iħ), each measurement completely disrupts the previous one. The probability distributions at each step depend only on the immediately preceding measurement result, not on earlier measurements.

Therefore:
- The value p₁ depends on x₀
- The value x₂ depends on p₁ but not directly on x₀
- The value p₃ depends on x₂ but not directly on p₁ or x₀

The sequence of measurements creates a Markov chain where each result depends only on the immediately preceding state, demonstrating the disruptive nature of measuring incompatible observables.

### Problem 8: Complete Set of Compatible Observables
**Question:** For a 3D harmonic oscillator, identify a complete set of compatible observables (CSCO) and explain how many quantum numbers are needed to specify a state uniquely.

**Solution:**
The 3D harmonic oscillator Hamiltonian is:
Ĥ = p̂²/2m + (1/2)mω²r̂² = Ĥx + Ĥy + Ĥz

where Ĥi = p̂i²/2m + (1/2)mω²x̂i² for i ∈ {x, y, z} are the Hamiltonians for 1D oscillators along each axis.

These individual Hamiltonians commute with each other:
[Ĥx, Ĥy] = [Ĥy, Ĥz] = [Ĥz, Ĥx] = 0

This is because operators acting on different coordinates commute.

Therefore, a CSCO for the 3D harmonic oscillator consists of:
{Ĥx, Ĥy, Ĥz} or equivalently {n̂x, n̂y, n̂z} where n̂i are the number operators along each axis.

Alternatively, we could use {Ĥ, L̂², L̂z} since the total angular momentum operators commute with the isotropic 3D oscillator Hamiltonian. However, this set would require additional quantum numbers to completely specify the state.

Using the number operators, we need exactly three quantum numbers (nx, ny, nz) to uniquely specify a state. Each can take values 0, 1, 2, ... corresponding to the energy levels of each 1D oscillator: Ei = (ni + 1/2)ħω.

This confirms that the dimension of the CSCO matches the degrees of freedom of the system, as required for a complete specification of the quantum state.

### Problem 9: Compatibility in Time Evolution
**Question:** If observable Â commutes with the Hamiltonian Ĥ, show that its expectation value ⟨Â⟩ is conserved in time. Interpret this result in terms of the compatibility of observables.

**Solution:**
The time evolution of the expectation value of operator Â is given by Ehrenfest's theorem:
d⟨Â⟩/dt = (i/ħ)⟨[Ĥ, Â]⟩ + ⟨∂Â/∂t⟩

If Â does not explicitly depend on time, then ∂Â/∂t = 0.
If Â commutes with Ĥ, then [Ĥ, Â] = 0.

Therefore, d⟨Â⟩/dt = 0, meaning the expectation value is conserved.

Interpretation in terms of compatibility:
When an observable commutes with the Hamiltonian, it is compatible with energy. This compatibility means that the observable represents a conserved quantity of the system. The physical system can simultaneously have well-defined values of energy and this observable, and the value of this observable does not change during time evolution.

This result connects two fundamental concepts: the compatibility of observables and conservation laws. Noether's theorem from classical mechanics finds its quantum analog here: symmetries in the system (reflected as operators that commute with Ĥ) lead to conserved quantities.

For example, if the Hamiltonian has rotational symmetry, it commutes with angular momentum operators, leading to conservation of angular momentum.

### Problem 10: Quantum Erasure and Complementarity
**Question:** In a quantum eraser experiment, we can choose whether to obtain which-path information or interference patterns for particles passing through a double-slit. Explain how this relates to the compatibility of observables, and what happens if we try to measure both properties.

**Solution:**
In the quantum eraser experiment, we work with two complementary properties:
1. Which-path information (which slit the particle went through)
2. Interference pattern (wave-like behavior of the particle)

These properties correspond to incompatible observables. The which-path observable (let's call it Ŵ) can be represented as a projection operator onto the states corresponding to each slit. The interference observable (Î) measures the particle's momentum distribution, which shows the interference pattern.

These observables do not commute: [Ŵ, Î] ≠ 0. According to the principles of quantum mechanics, this means we cannot simultaneously measure both properties with arbitrary precision.

If we design the experiment to measure which-path information (for example, by placing detectors at each slit), the wave function collapses into a state with definite path information. This destroys the coherence between the two paths, and the interference pattern disappears.

If we instead choose not to measure which-path information and allow the particle to travel freely through both slits, we observe an interference pattern on the screen, but cannot tell which slit each particle went through.

In the quantum eraser configuration, we use entanglement to "mark" the path information on another particle (or degree of freedom), allowing us to choose later whether to read this information or erase it:
- If we measure the marker, we can determine the path, but lose the interference pattern
- If we "erase" the marker (by measuring it in a complementary basis), we recover the interference pattern, but lose the which-path information

This experiment dramatically demonstrates the principle of complementarity and the impossibility of simultaneously measuring incompatible observables. The fundamental reason is the non-commutativity of the corresponding operators, which represents a core feature of quantum mechanics with no classical analog. 