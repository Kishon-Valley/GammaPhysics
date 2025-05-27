## Dirac Notation and Bra-Ket Formalism

### Introduction to Dirac Notation

Dirac notation, developed by Paul A.M. Dirac, provides a powerful and elegant mathematical framework for quantum mechanics. This notation efficiently represents quantum states, operators, and measurements while making the underlying mathematical structure more transparent. The formalism has become the standard language for quantum mechanics and quantum information theory due to its clarity and versatility.

![Dirac Notation and Bra-Ket Formalism](/images/quantum-physics/dirac-bra-ket.svg)
*Figure: Dirac notation showing bras, kets, inner products, and outer products and their geometric relationships.*

### Kets, Bras, and Inner Products

In Dirac notation, a quantum state is represented by a ket vector, denoted as $|\psi\rangle$. This corresponds to a column vector in a Hilbert space. The dual of a ket is a bra vector, denoted as $\langle\psi|$, which corresponds to the conjugate transpose of the ket (a row vector).

The inner product between two state vectors is written as a bra-ket pair:

$$\langle\phi|\psi\rangle$$

This represents the projection of $|\psi\rangle$ onto $|\phi\rangle$ and yields a complex number. The inner product satisfies the following properties:

1. Conjugate symmetry: $\langle\phi|\psi\rangle = \langle\psi|\phi\rangle^*$
2. Linearity in the second argument: $\langle\phi|(\alpha|\psi_1\rangle + \beta|\psi_2\rangle) = \alpha\langle\phi|\psi_1\rangle + \beta\langle\phi|\psi_2\rangle$
3. Positive definiteness: $\langle\psi|\psi\rangle > 0$ for all $|\psi\rangle \neq 0$

![Dirac Notation Inner Product](/images/quantum-physics/dirac-inner-product.svg)
*Figure 1: Geometric interpretation of the inner product in Dirac notation, showing the projection of one state vector onto another.*

### Outer Products and Operators

The outer product of a ket and a bra is written as:

$$|\psi\rangle\langle\phi|$$

This represents an operator that projects onto the state $|\psi\rangle$ and then onto the dual space in the direction of $\langle\phi|$. When applied to a state $|\chi\rangle$, it gives:

$$(|\psi\rangle\langle\phi|)|\chi\rangle = |\psi\rangle(\langle\phi|\chi\rangle) = \langle\phi|\chi\rangle|\psi\rangle$$

The outer product is particularly useful for constructing projection operators. For a normalized state $|\psi\rangle$, the operator $P_\psi = |\psi\rangle\langle\psi|$ projects any state onto the direction of $|\psi\rangle$.

### Matrix Representation

In a given basis $\{|e_i\rangle\}$, the components of a ket $|\psi\rangle$ are given by:

$$\psi_i = \langle e_i|\psi\rangle$$

The matrix elements of an operator $A$ are:

$$A_{ij} = \langle e_i|A|e_j\rangle$$

This allows us to translate between the abstract Dirac notation and concrete matrix representations.

### Basis Expansion and Completeness

Any state $|\psi\rangle$ can be expanded in terms of a complete orthonormal basis $\{|e_i\rangle\}$:

$$|\psi\rangle = \sum_i |e_i\rangle\langle e_i|\psi\rangle = \sum_i c_i |e_i\rangle$$

where $c_i = \langle e_i|\psi\rangle$ are the expansion coefficients.

The completeness relation for a basis is expressed as:

$$\sum_i |e_i\rangle\langle e_i| = I$$

where $I$ is the identity operator. For continuous bases, such as position eigenstates, the sum becomes an integral:

$$\int |x\rangle\langle x| dx = I$$

### Change of Basis

Dirac notation elegantly handles changes of basis. If $\{|e_i\rangle\}$ and $\{|f_j\rangle\}$ are two different orthonormal bases, the transformation matrix elements are:

$$U_{ji} = \langle f_j|e_i\rangle$$

The state components transform as:

$$\langle f_j|\psi\rangle = \sum_i \langle f_j|e_i\rangle\langle e_i|\psi\rangle = \sum_i U_{ji} \psi_i$$

![Change of Basis in Dirac Notation](/images/quantum-physics/dirac-change-basis.svg)
*Figure: Visual representation of change of basis in quantum mechanics using Dirac notation, showing how state vectors transform between different basis representations.*

### Common Representations in Quantum Mechanics

#### Position and Momentum Representations

In the position representation, a quantum state is described by its wavefunction:

$$\psi(x) = \langle x|\psi\rangle$$

where $|x\rangle$ is the eigenstate of the position operator $\hat{x}$ with eigenvalue $x$.

In the momentum representation, the same state is described by:

$$\tilde{\psi}(p) = \langle p|\psi\rangle$$

where $|p\rangle$ is the eigenstate of the momentum operator $\hat{p}$ with eigenvalue $p$.

The transformation between these representations is given by the Fourier transform:

$$\langle p|\psi\rangle = \frac{1}{\sqrt{2\pi\hbar}} \int e^{-ipx/\hbar} \langle x|\psi\rangle dx$$

$$\langle x|\psi\rangle = \frac{1}{\sqrt{2\pi\hbar}} \int e^{ipx/\hbar} \langle p|\psi\rangle dp$$

This relationship arises from the inner product $\langle x|p\rangle = \frac{1}{\sqrt{2\pi\hbar}}e^{ipx/\hbar}$.

#### Energy Eigenbasis

For a time-independent Hamiltonian $\hat{H}$, the energy eigenstates $|E_n\rangle$ satisfy:

$$\hat{H}|E_n\rangle = E_n|E_n\rangle$$

Expanding a state in this basis is particularly useful for time evolution:

$$|\psi(t)\rangle = \sum_n c_n e^{-iE_nt/\hbar}|E_n\rangle$$

where $c_n = \langle E_n|\psi(0)\rangle$ are the expansion coefficients at $t=0$.

### Expectation Values and Measurement

The expectation value of an observable $\hat{A}$ in state $|\psi\rangle$ is:

$$\langle \hat{A} \rangle = \langle \psi|\hat{A}|\psi\rangle$$

If $\hat{A}$ has eigenstates $|a_i\rangle$ with eigenvalues $a_i$, then:

$$\langle \hat{A} \rangle = \sum_i a_i |\langle a_i|\psi\rangle|^2 = \sum_i a_i P(a_i)$$

where $P(a_i) = |\langle a_i|\psi\rangle|^2$ is the probability of measuring the eigenvalue $a_i$.

### Operators in Dirac Notation

Operators can be expressed in various forms using Dirac notation:

1. **Spectral decomposition**: For a Hermitian operator $\hat{A}$ with eigenvalues $a_i$ and eigenstates $|a_i\rangle$:
   $$\hat{A} = \sum_i a_i |a_i\rangle\langle a_i|$$

2. **Matrix elements**: In a basis $\{|e_i\rangle\}$:
   $$\hat{A} = \sum_{i,j} \langle e_i|\hat{A}|e_j\rangle |e_i\rangle\langle e_j|$$

   ![Matrix Representation of Operators](/images/quantum-physics/dirac-matrix-elements.svg)
   *Figure: Matrix representation of operators in Dirac notation, showing how matrix elements are calculated from basis vectors.*

3. **Position representation**: For operators like $\hat{x}$ and $\hat{p}$:
   $$\langle x|\hat{x}|\psi\rangle = x\psi(x)$$
   $$\langle x|\hat{p}|\psi\rangle = -i\hbar\frac{d}{dx}\psi(x)$$

![Operators in Quantum Mechanics](/images/quantum-physics/dirac-operators.svg)
*Figure: Illustration of operators in quantum mechanics, showing spectral decomposition and operator action on state vectors.*

### Applications in Quantum Systems

#### Two-Level Systems (Qubits)

For a two-level system (qubit), the standard basis states are $|0\rangle$ and $|1\rangle$. A general state can be written as:

$$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$$

where $|\alpha|^2 + |\beta|^2 = 1$ for normalization.

The density operator for this pure state is:

$$\rho = |\psi\rangle\langle\psi| = |\alpha|^2|0\rangle\langle 0| + \alpha\beta^*|0\rangle\langle 1| + \alpha^*\beta|1\rangle\langle 0| + |\beta|^2|1\rangle\langle 1|$$

In matrix form:

$$\rho = \begin{pmatrix} |\alpha|^2 & \alpha\beta^* \\ \alpha^*\beta & |\beta|^2 \end{pmatrix}$$

#### Harmonic Oscillator

For the quantum harmonic oscillator, the creation and annihilation operators $\hat{a}^\dagger$ and $\hat{a}$ satisfy:

$$[\hat{a}, \hat{a}^\dagger] = 1$$

The number operator $\hat{N} = \hat{a}^\dagger\hat{a}$ has eigenstates $|n\rangle$ with eigenvalues $n = 0, 1, 2, ...$:

$$\hat{N}|n\rangle = n|n\rangle$$

The action of these operators on the number states is:

$$\hat{a}|n\rangle = \sqrt{n}|n-1\rangle$$
$$\hat{a}^\dagger|n\rangle = \sqrt{n+1}|n+1\rangle$$

The Hamiltonian can be expressed as:

$$\hat{H} = \hbar\omega\left(\hat{N} + \frac{1}{2}\right)$$

### Practical Examples and Calculations

**Example 1: Inner Product Calculation**  
Consider two states $|\psi\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ and $|\phi\rangle = \frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle$. Calculate their inner product.

**Solution:**  
$$\langle\phi|\psi\rangle = \left(\frac{1}{\sqrt{3}}\langle 0| + \sqrt{\frac{2}{3}}\langle 1|\right)\left(\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)\right)$$

$$= \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{2}} \langle 0|0\rangle + \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{2}} \langle 0|1\rangle + \sqrt{\frac{2}{3}} \cdot \frac{1}{\sqrt{2}} \langle 1|0\rangle + \sqrt{\frac{2}{3}} \cdot \frac{1}{\sqrt{2}} \langle 1|1\rangle$$

Since $\langle i|j\rangle = \delta_{ij}$, we have:

$$\langle\phi|\psi\rangle = \frac{1}{\sqrt{3}} \cdot \frac{1}{\sqrt{2}} \cdot 1 + \sqrt{\frac{2}{3}} \cdot \frac{1}{\sqrt{2}} \cdot 1 = \frac{1 + \sqrt{2}}{\sqrt{6}}$$

**Example 2: Expectation Value Calculation**  
For a spin-1/2 particle in the state $|\psi\rangle = \cos\frac{\theta}{2}|0\rangle + \sin\frac{\theta}{2}|1\rangle$, calculate the expectation value of the Pauli matrix $\sigma_z$.

**Solution:**  
The Pauli matrix $\sigma_z$ is:

$$\sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = |0\rangle\langle 0| - |1\rangle\langle 1|$$

The expectation value is:

$$\langle \sigma_z \rangle = \langle \psi|\sigma_z|\psi\rangle$$

$$= \left(\cos\frac{\theta}{2}\langle 0| + \sin\frac{\theta}{2}\langle 1|\right)(|0\rangle\langle 0| - |1\rangle\langle 1|)\left(\cos\frac{\theta}{2}|0\rangle + \sin\frac{\theta}{2}|1\rangle\right)$$

$$= \cos^2\frac{\theta}{2} - \sin^2\frac{\theta}{2} = \cos\theta$$

**Example 3: Time Evolution**  
A particle in a one-dimensional infinite square well of width $L$ is initially in the ground state $|1\rangle$. At $t=0$, it is perturbed into a superposition state $|\psi(0)\rangle = \frac{1}{\sqrt{2}}(|1\rangle + |2\rangle)$. Find the state at time $t$.

**Solution:**  
The energy eigenvalues for the infinite square well are:

$$E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$$

Using the time evolution formula:

$$|\psi(t)\rangle = \sum_n c_n e^{-iE_nt/\hbar}|n\rangle$$

With $c_1 = c_2 = \frac{1}{\sqrt{2}}$ and $c_n = 0$ for $n > 2$, we get:

$$|\psi(t)\rangle = \frac{1}{\sqrt{2}}e^{-iE_1t/\hbar}|1\rangle + \frac{1}{\sqrt{2}}e^{-iE_2t/\hbar}|2\rangle$$

$$= \frac{1}{\sqrt{2}}e^{-i\pi^2\hbar t/2mL^2}|1\rangle + \frac{1}{\sqrt{2}}e^{-i4\pi^2\hbar t/2mL^2}|2\rangle$$

$$= \frac{1}{\sqrt{2}}e^{-i\pi^2\hbar t/2mL^2}\left(|1\rangle + e^{-i3\pi^2\hbar t/2mL^2}|2\rangle\right)$$

The global phase factor $e^{-i\pi^2\hbar t/2mL^2}$ does not affect physical observables, so the state effectively oscillates between $\frac{1}{\sqrt{2}}(|1\rangle + |2\rangle)$ and $\frac{1}{\sqrt{2}}(|1\rangle - |2\rangle)$ with a period determined by the energy difference $E_2 - E_1$.

**Example 4: Projection Operators**  
Construct the projection operator onto the state $|\psi\rangle = \frac{3}{5}|0\rangle + \frac{4}{5}|1\rangle$, and calculate the probability of finding a system in state $|\phi\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ if it is projected onto $|\psi\rangle$.

**Solution:**  
The projection operator onto state $|\psi\rangle$ is:

$$P_{\psi} = |\psi\rangle\langle\psi| = \left(\frac{3}{5}|0\rangle + \frac{4}{5}|1\rangle\right)\left(\frac{3}{5}\langle 0| + \frac{4}{5}\langle 1|\right)$$

$$= \frac{9}{25}|0\rangle\langle 0| + \frac{12}{25}|0\rangle\langle 1| + \frac{12}{25}|1\rangle\langle 0| + \frac{16}{25}|1\rangle\langle 1|$$

In matrix form:

$$P_{\psi} = \begin{pmatrix} \frac{9}{25} & \frac{12}{25} \\ \frac{12}{25} & \frac{16}{25} \end{pmatrix}$$

The probability of finding the system in state $|\phi\rangle$ after projection onto $|\psi\rangle$ is:

$$P = \frac{|\langle\psi|\phi\rangle|^2}{\langle\psi|\psi\rangle \cdot \langle\phi|\phi\rangle} = |\langle\psi|\phi\rangle|^2$$

since both states are normalized.

$$\langle\psi|\phi\rangle = \left(\frac{3}{5}\langle 0| + \frac{4}{5}\langle 1|\right)\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle) = \frac{1}{\sqrt{2}}\left(\frac{3}{5} + \frac{4}{5}\right) = \frac{7}{5\sqrt{2}}$$

Therefore:

$$P = \left|\frac{7}{5\sqrt{2}}\right|^2 = \frac{49}{50} = 0.98$$

The probability is 0.98 or 98%.

**Example 5: Change of Basis**  
Consider a qubit state $|\psi\rangle = \frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle$ in the computational basis. Express this state in the basis $\{|+\rangle, |-\rangle\}$, where $|+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ and $|-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$.

**Solution:**  
To express $|\psi\rangle$ in the new basis, we need to find the coefficients $c_+$ and $c_-$ such that:

$$|\psi\rangle = c_+|+\rangle + c_-|-\rangle$$

These coefficients are given by the inner products:

$$c_+ = \langle+|\psi\rangle = \frac{1}{\sqrt{2}}(\langle 0| + \langle 1|)\left(\frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle\right)$$

$$= \frac{1}{\sqrt{2}}\left(\frac{1}{\sqrt{3}} + \sqrt{\frac{2}{3}}\right) = \frac{1}{\sqrt{2}}\frac{1 + \sqrt{2}}{\sqrt{3}} = \frac{1 + \sqrt{2}}{\sqrt{6}}$$

Similarly:

$$c_- = \langle-|\psi\rangle = \frac{1}{\sqrt{2}}(\langle 0| - \langle 1|)\left(\frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle\right)$$

$$= \frac{1}{\sqrt{2}}\left(\frac{1}{\sqrt{3}} - \sqrt{\frac{2}{3}}\right) = \frac{1}{\sqrt{2}}\frac{1 - \sqrt{2}}{\sqrt{3}} = \frac{1 - \sqrt{2}}{\sqrt{6}}$$

Therefore, in the $\{|+\rangle, |-\rangle\}$ basis:

$$|\psi\rangle = \frac{1 + \sqrt{2}}{\sqrt{6}}|+\rangle + \frac{1 - \sqrt{2}}{\sqrt{6}}|-\rangle$$

We can verify that $|c_+|^2 + |c_-|^2 = 1$, confirming that the state is still normalized.

**Example 6: Tensor Product States**  
Consider two qubits in states $|\psi_1\rangle = \cos\theta|0\rangle + \sin\theta|1\rangle$ and $|\psi_2\rangle = |0\rangle$. Calculate the tensor product state $|\psi_1\rangle \otimes |\psi_2\rangle$ and express it in the computational basis $\{|00\rangle, |01\rangle, |10\rangle, |11\rangle\}$.

**Solution:**  
The tensor product state is:

$$|\psi_1\rangle \otimes |\psi_2\rangle = (\cos\theta|0\rangle + \sin\theta|1\rangle) \otimes |0\rangle$$

Using the distributive property of the tensor product:

$$|\psi_1\rangle \otimes |\psi_2\rangle = \cos\theta(|0\rangle \otimes |0\rangle) + \sin\theta(|1\rangle \otimes |0\rangle)$$

Using the notation $|a\rangle \otimes |b\rangle = |ab\rangle$, we get:

$$|\psi_1\rangle \otimes |\psi_2\rangle = \cos\theta|00\rangle + \sin\theta|10\rangle$$

In the computational basis $\{|00\rangle, |01\rangle, |10\rangle, |11\rangle\}$, the state is represented as:

$$|\psi_1\rangle \otimes |\psi_2\rangle = \begin{pmatrix} \cos\theta \\ 0 \\ \sin\theta \\ 0 \end{pmatrix}$$

**Example 7: Partial Trace**  
Consider a two-qubit system in the Bell state $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$. Calculate the reduced density matrix for the first qubit by taking the partial trace over the second qubit.

**Solution:**  
The density matrix for the Bell state is:

$$\rho = |\Phi^+\rangle\langle\Phi^+| = \frac{1}{2}(|00\rangle + |11\rangle)(\langle 00| + \langle 11|)$$

$$= \frac{1}{2}(|00\rangle\langle 00| + |00\rangle\langle 11| + |11\rangle\langle 00| + |11\rangle\langle 11|)$$

The reduced density matrix for the first qubit is obtained by taking the partial trace over the second qubit:

$$\rho_1 = \text{Tr}_2(\rho) = \sum_j \langle j|_2 \rho |j\rangle_2$$

where $\{|j\rangle_2\}$ is a basis for the second qubit's Hilbert space. Using the computational basis $\{|0\rangle_2, |1\rangle_2\}$:

$$\rho_1 = \langle 0|_2 \rho |0\rangle_2 + \langle 1|_2 \rho |1\rangle_2$$

Calculating each term:

$$\langle 0|_2 \rho |0\rangle_2 = \frac{1}{2}\langle 0|_2(|00\rangle\langle 00| + |00\rangle\langle 11| + |11\rangle\langle 00| + |11\rangle\langle 11|)|0\rangle_2$$

$$= \frac{1}{2}(|0\rangle_1\langle 0|_1 + 0 + 0 + 0) = \frac{1}{2}|0\rangle_1\langle 0|_1$$

Similarly:

$$\langle 1|_2 \rho |1\rangle_2 = \frac{1}{2}\langle 1|_2(|00\rangle\langle 00| + |00\rangle\langle 11| + |11\rangle\langle 00| + |11\rangle\langle 11|)|1\rangle_2$$

$$= \frac{1}{2}(0 + 0 + 0 + |1\rangle_1\langle 1|_1) = \frac{1}{2}|1\rangle_1\langle 1|_1$$

Therefore, the reduced density matrix for the first qubit is:

$$\rho_1 = \frac{1}{2}|0\rangle\langle 0| + \frac{1}{2}|1\rangle\langle 1| = \frac{1}{2}I$$

where $I$ is the identity matrix. This shows that the first qubit is in a completely mixed state, which is a characteristic of maximally entangled states.

**Example 8: Measurement in a Different Basis**  
A qubit is in the state $|\psi\rangle = |0\rangle$. Calculate the probabilities of obtaining outcomes $|+\rangle$ and $|-\rangle$ when measuring in the basis $\{|+\rangle, |-\rangle\}$.

**Solution:**  
The probability of obtaining outcome $|+\rangle$ is:

$$P(+) = |\langle+|\psi\rangle|^2 = \left|\frac{1}{\sqrt{2}}(\langle 0| + \langle 1|)|0\rangle\right|^2 = \left|\frac{1}{\sqrt{2}}\right|^2 = \frac{1}{2}$$

The probability of obtaining outcome $|-\rangle$ is:

$$P(-) = |\langle-|\psi\rangle|^2 = \left|\frac{1}{\sqrt{2}}(\langle 0| - \langle 1|)|0\rangle\right|^2 = \left|\frac{1}{\sqrt{2}}\right|^2 = \frac{1}{2}$$

Thus, there is an equal probability (50%) of obtaining either outcome when measuring the state $|0\rangle$ in the $\{|+\rangle, |-\rangle\}$ basis.

**Example 9: Commutator Calculation**  
Using Dirac notation, calculate the commutator $[\hat{a}, \hat{a}^\dagger]$ for the harmonic oscillator annihilation and creation operators, where $\hat{a}|n\rangle = \sqrt{n}|n-1\rangle$ and $\hat{a}^\dagger|n\rangle = \sqrt{n+1}|n+1\rangle$.

**Solution:**  
The commutator is defined as $[\hat{a}, \hat{a}^\dagger] = \hat{a}\hat{a}^\dagger - \hat{a}^\dagger\hat{a}$. To evaluate this, we apply both sides to a basis state $|n\rangle$ and compare the results.

First, calculate $\hat{a}\hat{a}^\dagger|n\rangle$:

$$\hat{a}\hat{a}^\dagger|n\rangle = \hat{a}(\sqrt{n+1}|n+1\rangle) = \sqrt{n+1}\hat{a}|n+1\rangle = \sqrt{n+1}\sqrt{n+1}|n\rangle = (n+1)|n\rangle$$

Next, calculate $\hat{a}^\dagger\hat{a}|n\rangle$:

$$\hat{a}^\dagger\hat{a}|n\rangle = \hat{a}^\dagger(\sqrt{n}|n-1\rangle) = \sqrt{n}\hat{a}^\dagger|n-1\rangle = \sqrt{n}\sqrt{n}|n\rangle = n|n\rangle$$

Therefore:

$$[\hat{a}, \hat{a}^\dagger]|n\rangle = (\hat{a}\hat{a}^\dagger - \hat{a}^\dagger\hat{a})|n\rangle = (n+1)|n\rangle - n|n\rangle = |n\rangle$$

Since this holds for all basis states $|n\rangle$, we conclude that $[\hat{a}, \hat{a}^\dagger] = I$, where $I$ is the identity operator.

**Example 10: Quantum Harmonic Oscillator Energy Calculation**  
Using Dirac notation, calculate the expectation value of energy for a quantum harmonic oscillator in the state $|\psi\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |2\rangle)$, where $|n\rangle$ are the energy eigenstates and the Hamiltonian is $\hat{H} = \hbar\omega(\hat{a}^\dagger\hat{a} + \frac{1}{2})$.

**Solution:**  
The energy expectation value is:

$$\langle \hat{H} \rangle = \langle\psi|\hat{H}|\psi\rangle = \langle\psi|\hbar\omega(\hat{a}^\dagger\hat{a} + \frac{1}{2})|\psi\rangle$$

Since $\hat{a}^\dagger\hat{a}|n\rangle = n|n\rangle$ (the number operator), we have $\hat{H}|n\rangle = \hbar\omega(n + \frac{1}{2})|n\rangle$. Therefore:

$$\langle \hat{H} \rangle = \frac{1}{2}\left(\langle 0| + \langle 2|\right)\hat{H}\left(|0\rangle + |2\rangle\right)$$

$$= \frac{1}{2}\left(\langle 0|\hat{H}|0\rangle + \langle 0|\hat{H}|2\rangle + \langle 2|\hat{H}|0\rangle + \langle 2|\hat{H}|2\rangle\right)$$

Since $\hat{H}|n\rangle = \hbar\omega(n + \frac{1}{2})|n\rangle$ and energy eigenstates are orthogonal, we get:

$$\langle \hat{H} \rangle = \frac{1}{2}\hbar\omega\left(\frac{1}{2} \cdot 1 + 0 + 0 + \frac{5}{2} \cdot 1\right)$$

$$= \frac{1}{2}\hbar\omega\left(\frac{1}{2} + \frac{5}{2}\right) = \frac{1}{2}\hbar\omega \cdot 3 = \frac{3}{2}\hbar\omega$$

Therefore, the expectation value of energy for the given state is $\frac{3}{2}\hbar\omega$.

### Summary

Dirac notation is a standardized mathematical formalism in quantum mechanics that enables precise and unambiguous representation of quantum states, operators, and measurement processes. The bra-ket framework distinguishes between state vectors (kets), dual vectors (bras), and operators, providing a systematic approach for expressing inner products, outer products, and operator actions.

Key features of Dirac notation:
1. Facilitates abstraction from specific coordinate or matrix representations while preserving mathematical rigor.
2. Clearly separates the roles of quantum states, dual states, and operators, supporting rigorous manipulations.
3. Provides a consistent method for expressing basis transformations and time evolution of quantum states.
4. Enables direct calculation and interpretation of measurement probabilities and expectation values.
5. Offers a unified formalism applicable to a wide range of quantum systems, from two-level systems to complex many-body models.

This notation is fundamental for both theoretical analysis and practical computations in quantum physics and quantum information science.
