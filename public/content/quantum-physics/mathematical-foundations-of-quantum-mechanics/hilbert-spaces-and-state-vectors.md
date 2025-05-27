## Hilbert Spaces and State Vectors

### Mathematical Structure of Quantum States

Quantum mechanics employs Hilbert spaces as the mathematical framework for representing physical systems. A Hilbert space $\mathcal{H}$ is a complete inner product space, which provides the necessary structure for formulating quantum states, observables, and their transformations. The completeness property ensures that all Cauchy sequences in the space converge to elements within the space, a crucial requirement for the mathematical consistency of quantum theory.

### Formal Definition and Properties

A Hilbert space $\mathcal{H}$ over the complex field $\mathbb{C}$ is a vector space equipped with an inner product $\langle \cdot | \cdot \rangle: \mathcal{H} \times \mathcal{H} \rightarrow \mathbb{C}$ that satisfies:

1. Conjugate symmetry: $\langle \phi | \psi \rangle = \langle \psi | \phi \rangle^*$
2. Linearity in the second argument: $\langle \phi | \alpha\psi_1 + \beta\psi_2 \rangle = \alpha\langle \phi | \psi_1 \rangle + \beta\langle \phi | \psi_2 \rangle$
3. Positive definiteness: $\langle \psi | \psi \rangle > 0$ for all $|\psi\rangle \neq 0$

Additionally, $\mathcal{H}$ is complete with respect to the norm induced by the inner product: $\|\psi\| = \sqrt{\langle \psi | \psi \rangle}$.

In quantum mechanics, we often encounter two types of Hilbert spaces:
- Finite-dimensional spaces $\mathbb{C}^n$, used for systems with finite degrees of freedom (e.g., spin states)
- Infinite-dimensional spaces, such as $L^2(\mathbb{R})$ (square-integrable functions), used for continuous variables like position and momentum

### State Vectors and Quantum States

In the Dirac notation, a quantum state is represented by a ket vector $|\psi\rangle \in \mathcal{H}$, which encodes all the physical information about the system. For a normalized state, $\langle \psi | \psi \rangle = 1$, the quantity $|\langle \phi | \psi \rangle|^2$ gives the probability of finding the system in state $|\phi\rangle$ when it is prepared in state $|\psi\rangle$.

The dual space $\mathcal{H}^*$ consists of linear functionals on $\mathcal{H}$. For each ket $|\psi\rangle$, there exists a corresponding bra $\langle\psi| \in \mathcal{H}^*$ such that $\langle\psi|(\cdot) = \langle\psi|\cdot\rangle$. The Riesz representation theorem establishes the isomorphism between $\mathcal{H}$ and $\mathcal{H}^*$.

### Basis Representations

A basis for a Hilbert space is a set of vectors $\{|e_i\rangle\}$ that spans the space and satisfies certain orthogonality conditions. In quantum mechanics, we typically work with orthonormal bases, where:

$$\langle e_i | e_j \rangle = \delta_{ij}$$

where $\delta_{ij}$ is the Kronecker delta.

Any state $|\psi\rangle$ can be expanded in terms of a basis:

$$|\psi\rangle = \sum_i c_i |e_i\rangle$$

where the coefficients $c_i = \langle e_i | \psi \rangle$ are the probability amplitudes. For continuous bases, such as position eigenstates $\{|x\rangle\}$, the expansion becomes an integral:

$$|\psi\rangle = \int dx \, \psi(x) |x\rangle$$

where $\psi(x) = \langle x | \psi \rangle$ is the wavefunction in position representation.

### Completeness Relation

For any orthonormal basis $\{|e_i\rangle\}$, the completeness relation states:

$$\sum_i |e_i\rangle\langle e_i| = \mathbb{I}$$

where $\mathbb{I}$ is the identity operator on $\mathcal{H}$. For continuous bases, this becomes:

$$\int dx \, |x\rangle\langle x| = \mathbb{I}$$

The completeness relation is fundamental for calculating inner products and expectation values.

### Tensor Products and Composite Systems

For a quantum system composed of subsystems A and B with respective Hilbert spaces $\mathcal{H}_A$ and $\mathcal{H}_B$, the Hilbert space of the composite system is the tensor product $\mathcal{H}_A \otimes \mathcal{H}_B$.

![Tensor Products in Quantum Mechanics](/images/quantum-physics/tensor-product.svg)

If $\{|a_i\rangle\}$ is a basis for $\mathcal{H}_A$ and $\{|b_j\rangle\}$ is a basis for $\mathcal{H}_B$, then $\{|a_i\rangle \otimes |b_j\rangle\}$ forms a basis for $\mathcal{H}_A \otimes \mathcal{H}_B$. A general state in the composite system can be written as:

$$|\psi\rangle_{AB} = \sum_{i,j} c_{ij} |a_i\rangle \otimes |b_j\rangle$$

States that cannot be factored as $|\psi\rangle_A \otimes |\phi\rangle_B$ are called entangled states, a uniquely quantum phenomenon with no classical analog.

### Superposition Principle

One of the fundamental principles of quantum mechanics is the superposition principle, which states that if $|\psi_1\rangle$ and $|\psi_2\rangle$ are possible states of a quantum system, then any linear combination $\alpha|\psi_1\rangle + \beta|\psi_2\rangle$ (where $\alpha, \beta \in \mathbb{C}$) is also a possible state.

This principle is a direct consequence of the linearity of the Hilbert space and leads to quantum interference phenomena. The normalization condition requires that $|\alpha|^2 + |\beta|^2 = 1$ for a properly normalized superposition state.

### Density Operators and Mixed States

While pure states are represented by vectors in $\mathcal{H}$, mixed states (statistical ensembles of pure states) are represented by density operators $\rho: \mathcal{H} \rightarrow \mathcal{H}$. For a mixed state composed of pure states $|\psi_i\rangle$ with probabilities $p_i$, the density operator is:

$$\rho = \sum_i p_i |\psi_i\rangle\langle\psi_i|$$

The density operator satisfies:
1. Hermiticity: $\rho = \rho^\dagger$
2. Positive semi-definiteness: $\langle\phi|\rho|\phi\rangle \geq 0$ for all $|\phi\rangle \in \mathcal{H}$
3. Trace normalization: $\text{Tr}(\rho) = 1$

For a pure state $|\psi\rangle$, the density operator is simply $\rho = |\psi\rangle\langle\psi|$, and $\rho^2 = \rho$. For mixed states, $\text{Tr}(\rho^2) < 1$.

### Examples of Hilbert Spaces in Quantum Mechanics

#### Spin-1/2 System

The Hilbert space for a spin-1/2 particle is $\mathcal{H} = \mathbb{C}^2$. The standard basis states, corresponding to spin-up and spin-down along the z-axis, are:

$$|+\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad |-\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$$

A general spin state is:

$$|\psi\rangle = \alpha|+\rangle + \beta|-\rangle = \begin{pmatrix} \alpha \\ \beta \end{pmatrix}$$

where $|\alpha|^2 + |\beta|^2 = 1$.

#### Harmonic Oscillator

The Hilbert space for a quantum harmonic oscillator is infinite-dimensional. The energy eigenstates $\{|n\rangle\}$ form a countable orthonormal basis:

$$\langle m|n\rangle = \delta_{mn}$$

The position representation of these states involves Hermite polynomials:

$$\langle x|n\rangle = \frac{1}{\sqrt{2^n n!}} \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} e^{-m\omega x^2/2\hbar} H_n\left(\sqrt{\frac{m\omega}{\hbar}}x\right)$$

### Practical Questions and Answers

**Question 1:**  
Given two normalized states $|\psi\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ and $|\phi\rangle = \frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle$, calculate their inner product and determine if they are orthogonal.

**Answer:**  
The inner product is calculated as:

$$\langle\phi|\psi\rangle = \left(\frac{1}{\sqrt{3}}\langle 0| + \sqrt{\frac{2}{3}}\langle 1|\right)\left(\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)\right)$$

$$= \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{2}} \langle 0|0\rangle + \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{2}} \langle 0|1\rangle + \sqrt{\frac{2}{3}} \cdot \frac{1}{\sqrt{2}} \langle 1|0\rangle + \sqrt{\frac{2}{3}} \cdot \frac{1}{\sqrt{2}} \langle 1|1\rangle$$

Since $\langle i|j\rangle = \delta_{ij}$, we have:

$$\langle\phi|\psi\rangle = \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{2}} \cdot 1 + \sqrt{\frac{2}{3}} \cdot \frac{1}{\sqrt{2}} \cdot 1 = \frac{1}{\sqrt{6}} + \sqrt{\frac{2}{6}} = \frac{1 + \sqrt{2}}{\sqrt{6}}$$

Since $\langle\phi|\psi\rangle \neq 0$, the states are not orthogonal.

**Question 2:**  
For a two-qubit system, express the Bell state $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$ in terms of the tensor product of single-qubit states. Is this state separable or entangled?

**Answer:**  
To determine if the Bell state is separable, we need to check if it can be written as a tensor product of two single-qubit states:

$$|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle) = \frac{1}{\sqrt{2}}(|0\rangle \otimes |0\rangle + |1\rangle \otimes |1\rangle)$$

If $|\Phi^+\rangle$ were separable, there would exist states $|\alpha\rangle = a_0|0\rangle + a_1|1\rangle$ and $|\beta\rangle = b_0|0\rangle + b_1|1\rangle$ such that:

$$|\Phi^+\rangle = |\alpha\rangle \otimes |\beta\rangle = (a_0|0\rangle + a_1|1\rangle) \otimes (b_0|0\rangle + b_1|1\rangle)$$

$$= a_0b_0|00\rangle + a_0b_1|01\rangle + a_1b_0|10\rangle + a_1b_1|11\rangle$$

Comparing with the original expression:
- $a_0b_0 = \frac{1}{\sqrt{2}}$
- $a_0b_1 = 0$
- $a_1b_0 = 0$
- $a_1b_1 = \frac{1}{\sqrt{2}}$

From the second and third equations, either $a_0 = 0$ or $b_1 = 0$, and either $a_1 = 0$ or $b_0 = 0$. But this contradicts the first and fourth equations. Therefore, $|\Phi^+\rangle$ cannot be written as a tensor product of single-qubit states, making it an entangled state.

**Question 3:**  
Calculate the density operator for the state $|\psi\rangle = \cos\theta|0\rangle + \sin\theta|1\rangle$. Then find the probability of measuring the system in state $|+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$.

**Answer:**  
The density operator for the pure state $|\psi\rangle$ is:

$$\rho = |\psi\rangle\langle\psi| = (\cos\theta|0\rangle + \sin\theta|1\rangle)(\cos\theta\langle 0| + \sin\theta\langle 1|)$$

$$= \cos^2\theta|0\rangle\langle 0| + \cos\theta\sin\theta|0\rangle\langle 1| + \sin\theta\cos\theta|1\rangle\langle 0| + \sin^2\theta|1\rangle\langle 1|$$

In matrix form, using the basis $\{|0\rangle, |1\rangle\}$:

$$\rho = \begin{pmatrix} \cos^2\theta & \cos\theta\sin\theta \\ \cos\theta\sin\theta & \sin^2\theta \end{pmatrix}$$

The probability of measuring the system in state $|+\rangle$ is:

$$P(+) = \langle +|\rho|+\rangle = \text{Tr}(|+\rangle\langle +|\rho)$$

$$= \text{Tr}\left(\frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} \cos^2\theta & \cos\theta\sin\theta \\ \cos\theta\sin\theta & \sin^2\theta \end{pmatrix}\right)$$

$$= \frac{1}{2}\text{Tr}\begin{pmatrix} \cos^2\theta + \cos\theta\sin\theta & \cos^2\theta + \sin^2\theta \\ \cos\theta\sin\theta + \sin^2\theta & \cos\theta\sin\theta + \sin^2\theta \end{pmatrix}$$

$$= \frac{1}{2}(\cos^2\theta + \cos\theta\sin\theta + \cos\theta\sin\theta + \sin^2\theta)$$

$$= \frac{1}{2}(\cos^2\theta + \sin^2\theta + 2\cos\theta\sin\theta)$$

$$= \frac{1}{2}(1 + \sin 2\theta)$$

Therefore, the probability of measuring the system in state $|+\rangle$ is $\frac{1}{2}(1 + \sin 2\theta)$.

### Summary

Hilbert spaces provide the mathematical foundation for quantum mechanics, enabling the precise formulation of quantum states, measurements, and dynamics. The key features of this framework—complex vector spaces, inner products, basis expansions, and tensor products—directly correspond to physical concepts such as superposition, probability amplitudes, measurement outcomes, and composite systems. Understanding the structure and properties of Hilbert spaces is essential for analyzing quantum phenomena and developing quantum technologies.
