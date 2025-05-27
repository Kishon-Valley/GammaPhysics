## Operators, Eigenvalues, and Observables

### Mathematical Representation of Physical Quantities

In quantum mechanics, physical observables are represented by linear operators acting on the Hilbert space of states. The mathematical properties of these operators directly determine the possible outcomes of measurements and the subsequent evolution of quantum systems. This formalism establishes the connection between abstract mathematical structures and experimental observations, forming the foundation for quantum measurement theory.

### Linear Operators in Quantum Mechanics

A linear operator $\hat{A}: \mathcal{H} \rightarrow \mathcal{H}$ maps vectors in a Hilbert space to other vectors while preserving the operations of addition and scalar multiplication:

$$\hat{A}(\alpha|\psi_1\rangle + \beta|\psi_2\rangle) = \alpha\hat{A}|\psi_1\rangle + \beta\hat{A}|\psi_2\rangle$$

where $\alpha, \beta \in \mathbb{C}$ and $|\psi_1\rangle, |\psi_2\rangle \in \mathcal{H}$.

For a finite-dimensional Hilbert space with basis $\{|e_i\rangle\}$, an operator $\hat{A}$ can be represented as a matrix with elements:

$$A_{ij} = \langle e_i|\hat{A}|e_j\rangle$$

The action of $\hat{A}$ on a state $|\psi\rangle = \sum_j c_j |e_j\rangle$ is then:

$$\hat{A}|\psi\rangle = \sum_j c_j \hat{A}|e_j\rangle = \sum_j c_j \sum_i A_{ij} |e_i\rangle = \sum_i \left(\sum_j A_{ij} c_j\right) |e_i\rangle$$

### Hermitian Operators and Observables

Physical observables in quantum mechanics are represented by Hermitian operators, which satisfy:

$$\hat{A}^\dagger = \hat{A}$$

where $\hat{A}^\dagger$ is the adjoint of $\hat{A}$, defined by:

$$\langle\phi|\hat{A}^\dagger|\psi\rangle = \langle\psi|\hat{A}|\phi\rangle^*$$

for all $|\phi\rangle, |\psi\rangle \in \mathcal{H}$.

In matrix representation, $A^\dagger = (A^*)^T$, where $A^*$ is the complex conjugate and $A^T$ is the transpose of $A$.

The key properties of Hermitian operators that make them suitable for representing physical observables are:

1. Their eigenvalues are real, corresponding to the possible measurement outcomes.
2. Their eigenvectors form a complete orthonormal basis for the Hilbert space, allowing any state to be expressed as a superposition of eigenstates.

### Eigenvalues and Eigenvectors

An eigenvector $|\psi\rangle$ of an operator $\hat{A}$ satisfies:

$$\hat{A}|\psi\rangle = \lambda|\psi\rangle$$

where $\lambda \in \mathbb{C}$ is the corresponding eigenvalue.

For a Hermitian operator, the eigenvalues $\lambda$ are real, and eigenvectors corresponding to different eigenvalues are orthogonal. If an eigenvalue is degenerate (appears multiple times), the corresponding eigenspace may have dimension greater than one, but we can always choose an orthonormal basis for this subspace.

The spectral theorem states that any Hermitian operator $\hat{A}$ can be decomposed as:

$$\hat{A} = \sum_i \lambda_i |i\rangle\langle i|$$

where $\lambda_i$ are the eigenvalues and $|i\rangle$ are the corresponding normalized eigenvectors.

### Measurement Postulate

According to the measurement postulate of quantum mechanics:

1. The possible outcomes of measuring an observable $\hat{A}$ are its eigenvalues $\lambda_i$.
2. If the system is in state $|\psi\rangle$, the probability of obtaining outcome $\lambda_i$ is:
   
   $$P(\lambda_i) = |\langle i|\psi\rangle|^2$$
   
   where $|i\rangle$ is the normalized eigenvector corresponding to $\lambda_i$.
3. After the measurement yields outcome $\lambda_i$, the state of the system collapses to the corresponding eigenstate $|i\rangle$.

For a degenerate eigenvalue, the post-measurement state is the normalized projection of $|\psi\rangle$ onto the corresponding eigenspace.

### Expectation Values

The expectation value of an observable $\hat{A}$ in state $|\psi\rangle$ is:

$$\langle \hat{A} \rangle_\psi = \langle\psi|\hat{A}|\psi\rangle = \sum_i \lambda_i |\langle i|\psi\rangle|^2$$

This represents the average value one would obtain from repeated measurements of $\hat{A}$ on identically prepared systems in state $|\psi\rangle$.

The variance, which quantifies the statistical spread of measurement outcomes, is:

$$(\Delta A)^2 = \langle\psi|(\hat{A} - \langle \hat{A} \rangle_\psi)^2|\psi\rangle = \langle\psi|\hat{A}^2|\psi\rangle - \langle\psi|\hat{A}|\psi\rangle^2$$

### Commutators and Uncertainty Relations

The commutator of two operators $\hat{A}$ and $\hat{B}$ is defined as:

$$[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$$

If $[\hat{A}, \hat{B}] = 0$, the operators commute and have a common set of eigenvectors. This means the corresponding observables can be simultaneously measured with arbitrary precision.

If $[\hat{A}, \hat{B}] \neq 0$, the operators do not commute, and the corresponding observables cannot be simultaneously measured with arbitrary precision. This leads to the Heisenberg uncertainty principle:

$$\Delta A \cdot \Delta B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|$$

where $\Delta A$ and $\Delta B$ are the standard deviations of measurements of $\hat{A}$ and $\hat{B}$ in a given state.

The canonical commutation relation between position and momentum operators is:

$$[\hat{x}, \hat{p}] = i\hbar\hat{I}$$

which leads to the uncertainty relation:

$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

### Unitary Operators and Time Evolution

Unitary operators $\hat{U}$ satisfy:

$$\hat{U}^\dagger\hat{U} = \hat{U}\hat{U}^\dagger = \hat{I}$$

They preserve the norm of state vectors and represent symmetry transformations and time evolution in quantum mechanics.

The time evolution of a quantum state is governed by the Schrödinger equation:

$$i\hbar\frac{d}{dt}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle$$

where $\hat{H}$ is the Hamiltonian operator representing the total energy of the system.

The formal solution to this equation is:

$$|\psi(t)\rangle = e^{-i\hat{H}t/\hbar}|\psi(0)\rangle = \hat{U}(t)|\psi(0)\rangle$$

where $\hat{U}(t) = e^{-i\hat{H}t/\hbar}$ is the time evolution operator, which is unitary.

### Projection Operators

A projection operator $\hat{P}$ satisfies:

$$\hat{P}^2 = \hat{P}$$

$$\hat{P}^\dagger = \hat{P}$$

For a normalized state $|\phi\rangle$, the operator $\hat{P}_\phi = |\phi\rangle\langle\phi|$ projects any state onto the direction of $|\phi\rangle$.

Projection operators play a crucial role in the formulation of quantum measurements. The probability of finding a system in a subspace defined by projection operator $\hat{P}$ when the system is in state $|\psi\rangle$ is:

$$P = \langle\psi|\hat{P}|\psi\rangle$$

### Common Quantum Mechanical Operators

#### Position and Momentum Operators

In the position representation, the position and momentum operators act on wavefunctions as:

$$\hat{x}\psi(x) = x\psi(x)$$

$$\hat{p}\psi(x) = -i\hbar\frac{d}{dx}\psi(x)$$

In the momentum representation:

$$\hat{x}\tilde{\psi}(p) = i\hbar\frac{d}{dp}\tilde{\psi}(p)$$

$$\hat{p}\tilde{\psi}(p) = p\tilde{\psi}(p)$$

#### Angular Momentum Operators

The components of the angular momentum operator $\hat{\vec{L}} = \hat{\vec{r}} \times \hat{\vec{p}}$ satisfy the commutation relations:

$$[\hat{L}_i, \hat{L}_j] = i\hbar\epsilon_{ijk}\hat{L}_k$$

where $\epsilon_{ijk}$ is the Levi-Civita symbol.

The squared angular momentum operator $\hat{L}^2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2$ commutes with each component:

$$[\hat{L}^2, \hat{L}_i] = 0$$

The eigenvalues of $\hat{L}^2$ and $\hat{L}_z$ are:

$$\hat{L}^2|l,m\rangle = \hbar^2 l(l+1)|l,m\rangle$$

$$\hat{L}_z|l,m\rangle = \hbar m|l,m\rangle$$

where $l = 0, 1, 2, \ldots$ and $m = -l, -l+1, \ldots, l-1, l$.

#### Spin Operators

For a spin-1/2 particle, the spin operators are related to the Pauli matrices:

$$\hat{S}_x = \frac{\hbar}{2}\sigma_x = \frac{\hbar}{2}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

$$\hat{S}_y = \frac{\hbar}{2}\sigma_y = \frac{\hbar}{2}\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$

$$\hat{S}_z = \frac{\hbar}{2}\sigma_z = \frac{\hbar}{2}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

These operators satisfy the same commutation relations as the angular momentum operators.

### Practical Questions and Answers

**Question 1:**  
Calculate the expectation value and variance of the Pauli operator $\sigma_z$ for a qubit in the state $|\psi\rangle = \cos\theta|0\rangle + \sin\theta|1\rangle$.

**Answer:**  
The Pauli operator $\sigma_z$ has eigenvalues $+1$ and $-1$ with corresponding eigenvectors $|0\rangle$ and $|1\rangle$, respectively.

The expectation value is:
$$\langle \sigma_z \rangle = \langle\psi|\sigma_z|\psi\rangle = (\cos\theta\langle 0| + \sin\theta\langle 1|)(\sigma_z)(\cos\theta|0\rangle + \sin\theta|1\rangle)$$

Since $\sigma_z|0\rangle = |0\rangle$ and $\sigma_z|1\rangle = -|1\rangle$, we have:
$$\langle \sigma_z \rangle = \cos^2\theta \cdot 1 + \sin^2\theta \cdot (-1) = \cos^2\theta - \sin^2\theta = \cos(2\theta)$$

For the variance:
$$(\Delta \sigma_z)^2 = \langle\psi|\sigma_z^2|\psi\rangle - \langle\psi|\sigma_z|\psi\rangle^2$$

Since $\sigma_z^2 = I$ (the identity operator), we have:
$$\langle\psi|\sigma_z^2|\psi\rangle = \langle\psi|I|\psi\rangle = 1$$

Therefore:
$$(\Delta \sigma_z)^2 = 1 - \cos^2(2\theta) = \sin^2(2\theta)$$

And the standard deviation is:
$$\Delta \sigma_z = |\sin(2\theta)|$$

**Question 2:**  
Verify that the position and momentum operators satisfy the canonical commutation relation $[\hat{x}, \hat{p}] = i\hbar\hat{I}$ in the position representation.

**Answer:**  
In the position representation, the operators act as:
$$\hat{x}\psi(x) = x\psi(x)$$
$$\hat{p}\psi(x) = -i\hbar\frac{d}{dx}\psi(x)$$

To calculate the commutator, we apply the operators in sequence:
$$\hat{x}\hat{p}\psi(x) = \hat{x}(-i\hbar\frac{d}{dx}\psi(x)) = -i\hbar x\frac{d}{dx}\psi(x)$$

$$\hat{p}\hat{x}\psi(x) = \hat{p}(x\psi(x)) = -i\hbar\frac{d}{dx}(x\psi(x)) = -i\hbar\psi(x) - i\hbar x\frac{d}{dx}\psi(x)$$

Therefore:
$$[\hat{x}, \hat{p}]\psi(x) = (\hat{x}\hat{p} - \hat{p}\hat{x})\psi(x) = -i\hbar x\frac{d}{dx}\psi(x) - (-i\hbar\psi(x) - i\hbar x\frac{d}{dx}\psi(x))$$
$$= -i\hbar x\frac{d}{dx}\psi(x) + i\hbar\psi(x) + i\hbar x\frac{d}{dx}\psi(x) = i\hbar\psi(x)$$

This confirms that $[\hat{x}, \hat{p}] = i\hbar\hat{I}$.

**Question 3:**  
Find the eigenvalues and normalized eigenvectors of the operator $\hat{A} = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$. Verify that $\hat{A}$ is Hermitian.

**Answer:**  
First, let's verify that $\hat{A}$ is Hermitian:
$$\hat{A}^\dagger = (A^*)^T = \begin{pmatrix} 1 & -i \\ i & 1 \end{pmatrix}^T = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix} = \hat{A}$$

So $\hat{A}$ is indeed Hermitian, which means its eigenvalues will be real.

To find the eigenvalues, we solve the characteristic equation:
$$\det(\hat{A} - \lambda I) = 0$$
$$\det\begin{pmatrix} 1-\lambda & i \\ -i & 1-\lambda \end{pmatrix} = 0$$
$$(1-\lambda)^2 - (-i)(i) = 0$$
$$(1-\lambda)^2 - 1 = 0$$
$$(1-\lambda)^2 = 1$$
$$1-\lambda = \pm 1$$
$$\lambda = 1 \mp 1 = 0, 2$$

So the eigenvalues are $\lambda_1 = 0$ and $\lambda_2 = 2$.

For $\lambda_1 = 0$, we solve $\hat{A}|\psi_1\rangle = 0$:
$$\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

This gives us:
$$a + ib = 0$$
$$-ia + b = 0$$

From the first equation, $a = -ib$. Substituting into the second:
$$-i(-ib) + b = 0$$
$$-i^2b + b = 0$$
$$b + b = 0$$
$$2b = 0$$

This implies $b = 0$, which means $a = 0$. This is a contradiction because eigenvectors cannot be zero. Let's double-check our calculation.

The characteristic equation should be:
$$(1-\lambda)^2 - (i)(-i) = 0$$
$$(1-\lambda)^2 - 1 = 0$$
$$(1-\lambda)^2 = 1$$
$$1-\lambda = \pm 1$$
$$\lambda = 1 \mp 1 = 0, 2$$

For $\lambda_1 = 0$, we have:
$$\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

This gives:
$$a + ib = 0$$
$$-ia + b = 0$$

From the first equation, $a = -ib$. Substituting into the second:
$$-i(-ib) + b = 0$$
$$i^2b + b = 0$$
$$-b + b = 0$$
$$0 = 0$$

This is consistent for any value of $b$. Let's choose $b = 1$, which gives $a = -i$. The unnormalized eigenvector is:
$$|\psi_1\rangle = \begin{pmatrix} -i \\ 1 \end{pmatrix}$$

To normalize:
$$\||\psi_1\rangle\| = \sqrt{|-i|^2 + |1|^2} = \sqrt{1 + 1} = \sqrt{2}$$

So the normalized eigenvector is:
$$|\psi_1\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix} -i \\ 1 \end{pmatrix}$$

Similarly, for $\lambda_2 = 2$, we find the normalized eigenvector:
$$|\psi_2\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix} i \\ 1 \end{pmatrix}$$

We can verify that these eigenvectors are orthogonal:
$$\langle\psi_1|\psi_2\rangle = \frac{1}{2}(i \cdot i + 1 \cdot 1) = \frac{1}{2}(-1 + 1) = 0$$

![Eigenvalue Decomposition of a Hermitian Operator](/images/quantum-physics/eigenvalue-decomposition.svg)
*Figure 1: Visualization of eigenvalue decomposition of a Hermitian operator, showing how a quantum state can be expressed as a superposition of eigenstates.*

**Question 4:**  
Consider a quantum harmonic oscillator with Hamiltonian $\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega^2\hat{x}^2$. Express this Hamiltonian in terms of the creation and annihilation operators, and find the energy eigenvalues.

**Answer:**  
The creation and annihilation operators for the harmonic oscillator are defined as:

$$\hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i}{m\omega}\hat{p}\right)$$

$$\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i}{m\omega}\hat{p}\right)$$

These operators satisfy the commutation relation $[\hat{a}, \hat{a}^\dagger] = 1$.

We can express the position and momentum operators in terms of $\hat{a}$ and $\hat{a}^\dagger$:

$$\hat{x} = \sqrt{\frac{\hbar}{2m\omega}}(\hat{a}^\dagger + \hat{a})$$

$$\hat{p} = i\sqrt{\frac{m\omega\hbar}{2}}(\hat{a}^\dagger - \hat{a})$$

Substituting these expressions into the Hamiltonian:

$$\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega^2\hat{x}^2$$

$$= \frac{1}{2m}\left(i\sqrt{\frac{m\omega\hbar}{2}}(\hat{a}^\dagger - \hat{a})\right)^2 + \frac{1}{2}m\omega^2\left(\sqrt{\frac{\hbar}{2m\omega}}(\hat{a}^\dagger + \hat{a})\right)^2$$

$$= \frac{1}{2m}\left(-\frac{m\omega\hbar}{2}\right)(\hat{a}^\dagger - \hat{a})^2 + \frac{1}{2}m\omega^2\left(\frac{\hbar}{2m\omega}\right)(\hat{a}^\dagger + \hat{a})^2$$

$$= -\frac{\omega\hbar}{4}(\hat{a}^\dagger - \hat{a})^2 + \frac{\omega\hbar}{4}(\hat{a}^\dagger + \hat{a})^2$$

Expanding the squared terms:

$$\hat{H} = -\frac{\omega\hbar}{4}(\hat{a}^{\dagger 2} - \hat{a}^\dagger\hat{a} - \hat{a}\hat{a}^\dagger + \hat{a}^2) + \frac{\omega\hbar}{4}(\hat{a}^{\dagger 2} + \hat{a}^\dagger\hat{a} + \hat{a}\hat{a}^\dagger + \hat{a}^2)$$

$$= \frac{\omega\hbar}{4}(2\hat{a}^\dagger\hat{a} + 2\hat{a}\hat{a}^\dagger)$$

Using the commutation relation $\hat{a}\hat{a}^\dagger = \hat{a}^\dagger\hat{a} + 1$, we get:

$$\hat{H} = \frac{\omega\hbar}{4}(2\hat{a}^\dagger\hat{a} + 2(\hat{a}^\dagger\hat{a} + 1))$$

$$= \frac{\omega\hbar}{4}(4\hat{a}^\dagger\hat{a} + 2)$$

$$= \hbar\omega\left(\hat{a}^\dagger\hat{a} + \frac{1}{2}\right)$$

The number operator $\hat{N} = \hat{a}^\dagger\hat{a}$ has eigenvalues $n = 0, 1, 2, ...$, so the energy eigenvalues of the harmonic oscillator are:

$$E_n = \hbar\omega\left(n + \frac{1}{2}\right)$$

where $n = 0, 1, 2, ...$.

![Quantum Harmonic Oscillator](/images/quantum-physics/harmonic-oscillator.svg)
*Figure 2: Energy levels and wavefunctions of the quantum harmonic oscillator, showing the equally spaced energy levels and the probability densities for different quantum states.*

**Question 5:**  
A particle is in a superposition state $|\psi\rangle = \frac{1}{\sqrt{3}}|1\rangle + \sqrt{\frac{2}{3}}|2\rangle$, where $|1\rangle$ and $|2\rangle$ are energy eigenstates with energies $E_1 = \hbar\omega$ and $E_2 = 2\hbar\omega$, respectively. Calculate the expectation value of the Hamiltonian and the uncertainty in energy.

**Answer:**  
The Hamiltonian operator in the energy eigenbasis is:

$$\hat{H} = E_1|1\rangle\langle 1| + E_2|2\rangle\langle 2| = \hbar\omega|1\rangle\langle 1| + 2\hbar\omega|2\rangle\langle 2|$$

The expectation value of the Hamiltonian in state $|\psi\rangle$ is:

$$\langle \hat{H} \rangle = \langle\psi|\hat{H}|\psi\rangle$$

$$= \left(\frac{1}{\sqrt{3}}\langle 1| + \sqrt{\frac{2}{3}}\langle 2|\right)(\hbar\omega|1\rangle\langle 1| + 2\hbar\omega|2\rangle\langle 2|)\left(\frac{1}{\sqrt{3}}|1\rangle + \sqrt{\frac{2}{3}}|2\rangle\right)$$

Using the orthonormality of the energy eigenstates, $\langle i|j\rangle = \delta_{ij}$, we get:

$$\langle \hat{H} \rangle = \frac{1}{3}\hbar\omega + \frac{2}{3} \cdot 2\hbar\omega = \frac{1}{3}\hbar\omega + \frac{4}{3}\hbar\omega = \frac{5}{3}\hbar\omega$$

To calculate the uncertainty in energy, we need the expectation value of $\hat{H}^2$:

$$\hat{H}^2 = (\hbar\omega)^2|1\rangle\langle 1| + (2\hbar\omega)^2|2\rangle\langle 2|$$

$$\langle \hat{H}^2 \rangle = \langle\psi|\hat{H}^2|\psi\rangle = \frac{1}{3}(\hbar\omega)^2 + \frac{2}{3}(2\hbar\omega)^2 = \frac{1}{3}(\hbar\omega)^2 + \frac{8}{3}(\hbar\omega)^2 = \frac{9}{3}(\hbar\omega)^2 = 3(\hbar\omega)^2$$

The uncertainty in energy is:

$$\Delta E = \sqrt{\langle \hat{H}^2 \rangle - \langle \hat{H} \rangle^2} = \sqrt{3(\hbar\omega)^2 - \left(\frac{5}{3}\hbar\omega\right)^2}$$

$$= \sqrt{3(\hbar\omega)^2 - \frac{25}{9}(\hbar\omega)^2} = \sqrt{\frac{27 - 25}{9}}(\hbar\omega) = \sqrt{\frac{2}{9}}(\hbar\omega) = \frac{\sqrt{2}}{3}\hbar\omega$$

**Question 6:**  
Prove the Ehrenfest theorem for a particle moving in one dimension, which states that the time evolution of the expectation values of position and momentum follows the classical equations of motion:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{\langle \hat{p} \rangle}{m}$$

$$\frac{d}{dt}\langle \hat{p} \rangle = -\left\langle \frac{dV(\hat{x})}{dx} \right\rangle$$

where $V(x)$ is the potential energy.

**Answer:**  
The time evolution of the expectation value of any operator $\hat{A}$ that does not explicitly depend on time is given by the Heisenberg equation of motion:

$$\frac{d}{dt}\langle \hat{A} \rangle = \frac{1}{i\hbar}\langle [\hat{A}, \hat{H}] \rangle$$

where $\hat{H}$ is the Hamiltonian of the system.

For a particle moving in one dimension, the Hamiltonian is:

$$\hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x})$$

First, let's calculate the time evolution of the expectation value of position:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{1}{i\hbar}\langle [\hat{x}, \hat{H}] \rangle = \frac{1}{i\hbar}\left\langle \left[\hat{x}, \frac{\hat{p}^2}{2m} + V(\hat{x})\right] \right\rangle$$

Since $[\hat{x}, V(\hat{x})] = 0$ (position commutes with any function of position), we have:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{1}{i\hbar}\left\langle \left[\hat{x}, \frac{\hat{p}^2}{2m}\right] \right\rangle$$

Using the commutation relation $[\hat{x}, \hat{p}] = i\hbar$, we can derive:

$$[\hat{x}, \hat{p}^2] = [\hat{x}, \hat{p}]\hat{p} + \hat{p}[\hat{x}, \hat{p}] = i\hbar\hat{p} + \hat{p}(i\hbar) = 2i\hbar\hat{p}$$

Therefore:

$$\frac{d}{dt}\langle \hat{x} \rangle = \frac{1}{i\hbar}\left\langle \frac{2i\hbar\hat{p}}{2m} \right\rangle = \frac{\langle \hat{p} \rangle}{m}$$

This proves the first part of the Ehrenfest theorem.

Now, for the time evolution of the expectation value of momentum:

$$\frac{d}{dt}\langle \hat{p} \rangle = \frac{1}{i\hbar}\langle [\hat{p}, \hat{H}] \rangle = \frac{1}{i\hbar}\left\langle \left[\hat{p}, \frac{\hat{p}^2}{2m} + V(\hat{x})\right] \right\rangle$$

Since $[\hat{p}, \hat{p}^2] = 0$ (momentum commutes with any function of momentum), we have:

$$\frac{d}{dt}\langle \hat{p} \rangle = \frac{1}{i\hbar}\langle [\hat{p}, V(\hat{x})] \rangle$$

For a potential function $V(\hat{x})$, we can use the commutation relation $[\hat{p}, \hat{x}] = -i\hbar$ to calculate $[\hat{p}, V(\hat{x})]$. For a general function $f(\hat{x})$, it can be shown that:

$$[\hat{p}, f(\hat{x})] = -i\hbar\frac{df(\hat{x})}{dx}$$

Applying this to our case:

$$\frac{d}{dt}\langle \hat{p} \rangle = \frac{1}{i\hbar}\left\langle -i\hbar\frac{dV(\hat{x})}{dx} \right\rangle = -\left\langle \frac{dV(\hat{x})}{dx} \right\rangle$$

This proves the second part of the Ehrenfest theorem.

![Ehrenfest Theorem](/images/quantum-physics/ehrenfest-theorem.svg)
*Figure 3: Illustration of the Ehrenfest theorem, showing how the expectation values of position and momentum follow classical trajectories for a wave packet in a potential well.*

**Question 7:**  
A spin-1/2 particle is in the state $|\psi\rangle = \cos(\theta/2)|\uparrow\rangle + e^{i\phi}\sin(\theta/2)|\downarrow\rangle$, where $|\uparrow\rangle$ and $|\downarrow\rangle$ are the eigenstates of $\hat{S}_z$ with eigenvalues $+\hbar/2$ and $-\hbar/2$, respectively. Calculate the expectation values of the spin operators $\hat{S}_x$, $\hat{S}_y$, and $\hat{S}_z$.

**Answer:**  
The spin operators for a spin-1/2 particle are related to the Pauli matrices by:

$$\hat{S}_x = \frac{\hbar}{2}\sigma_x = \frac{\hbar}{2}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

$$\hat{S}_y = \frac{\hbar}{2}\sigma_y = \frac{\hbar}{2}\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$

$$\hat{S}_z = \frac{\hbar}{2}\sigma_z = \frac{\hbar}{2}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

In the basis $\{|\uparrow\rangle, |\downarrow\rangle\}$, the state $|\psi\rangle$ is represented as:

$$|\psi\rangle = \begin{pmatrix} \cos(\theta/2) \\ e^{i\phi}\sin(\theta/2) \end{pmatrix}$$

The expectation value of $\hat{S}_z$ is:

$$\langle \hat{S}_z \rangle = \langle\psi|\hat{S}_z|\psi\rangle = \frac{\hbar}{2}\langle\psi|\sigma_z|\psi\rangle$$

$$= \frac{\hbar}{2}\begin{pmatrix} \cos(\theta/2) & e^{-i\phi}\sin(\theta/2) \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} \cos(\theta/2) \\ e^{i\phi}\sin(\theta/2) \end{pmatrix}$$

$$= \frac{\hbar}{2}\begin{pmatrix} \cos(\theta/2) & e^{-i\phi}\sin(\theta/2) \end{pmatrix}\begin{pmatrix} \cos(\theta/2) \\ -e^{i\phi}\sin(\theta/2) \end{pmatrix}$$

$$= \frac{\hbar}{2}(\cos^2(\theta/2) - \sin^2(\theta/2)) = \frac{\hbar}{2}\cos\theta$$

Similarly, for $\hat{S}_x$:

$$\langle \hat{S}_x \rangle = \frac{\hbar}{2}\langle\psi|\sigma_x|\psi\rangle$$

$$= \frac{\hbar}{2}\begin{pmatrix} \cos(\theta/2) & e^{-i\phi}\sin(\theta/2) \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} \cos(\theta/2) \\ e^{i\phi}\sin(\theta/2) \end{pmatrix}$$

$$= \frac{\hbar}{2}\begin{pmatrix} \cos(\theta/2) & e^{-i\phi}\sin(\theta/2) \end{pmatrix}\begin{pmatrix} e^{i\phi}\sin(\theta/2) \\ \cos(\theta/2) \end{pmatrix}$$

$$= \frac{\hbar}{2}(e^{i\phi}\cos(\theta/2)\sin(\theta/2) + e^{-i\phi}\sin(\theta/2)\cos(\theta/2))$$

$$= \frac{\hbar}{2}\sin\theta\cos\phi$$

And for $\hat{S}_y$:

$$\langle \hat{S}_y \rangle = \frac{\hbar}{2}\langle\psi|\sigma_y|\psi\rangle$$

$$= \frac{\hbar}{2}\begin{pmatrix} \cos(\theta/2) & e^{-i\phi}\sin(\theta/2) \end{pmatrix}\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}\begin{pmatrix} \cos(\theta/2) \\ e^{i\phi}\sin(\theta/2) \end{pmatrix}$$

$$= \frac{\hbar}{2}\begin{pmatrix} \cos(\theta/2) & e^{-i\phi}\sin(\theta/2) \end{pmatrix}\begin{pmatrix} -ie^{i\phi}\sin(\theta/2) \\ i\cos(\theta/2) \end{pmatrix}$$

$$= \frac{\hbar}{2}(-ie^{i\phi}\cos(\theta/2)\sin(\theta/2) + ie^{-i\phi}\sin(\theta/2)\cos(\theta/2))$$

$$= \frac{\hbar}{2}i(e^{-i\phi} - e^{i\phi})\cos(\theta/2)\sin(\theta/2) = \frac{\hbar}{2}\sin\theta\sin\phi$$

These expectation values can be written in vector form as:

$$\langle \vec{S} \rangle = \frac{\hbar}{2}\begin{pmatrix} \sin\theta\cos\phi \\ \sin\theta\sin\phi \\ \cos\theta \end{pmatrix}$$

This represents a vector of length $\hbar/2$ pointing in the direction specified by the spherical angles $\theta$ and $\phi$. This is the Bloch vector representation of a qubit state.

![Bloch Sphere](/images/quantum-physics/bloch-sphere.svg)
*Figure 4: The Bloch sphere representation of a qubit state, showing how any pure state of a two-level quantum system can be represented as a point on the surface of a unit sphere.*

### Summary

Operators in quantum mechanics provide the mathematical framework for representing physical observables and their measurement. The eigenvalues of Hermitian operators correspond to the possible measurement outcomes, while their eigenvectors represent the states with definite values of the corresponding observable. The non-commutativity of certain operators leads to fundamental uncertainty relations, such as the Heisenberg uncertainty principle, which impose limits on the precision with which complementary observables can be simultaneously measured. Understanding the properties and behavior of quantum mechanical operators is essential for analyzing quantum systems and predicting their behavior under various conditions.
