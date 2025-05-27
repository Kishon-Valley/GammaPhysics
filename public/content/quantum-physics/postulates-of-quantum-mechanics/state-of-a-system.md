# State of a Quantum System

## Introduction

The concept of state is fundamental to quantum mechanics. In classical mechanics, the state of a system is completely specified by the positions and momenta of all its constituent particles. In quantum mechanics, however, the state of a system is described by a mathematical object called a wave function or state vector, which contains all the information that can be known about the system. This document examines the mathematical formalism of quantum states and their physical interpretation.

## Mathematical Representation

### Wave Functions

For a single non-relativistic particle, the state is typically represented by a complex-valued function $\Psi(\mathbf{r},t)$ called the wave function. This function depends on position $\mathbf{r}$ and time $t$. The wave function must satisfy several mathematical requirements:

1. **Continuity**: The wave function and its first spatial derivatives must be continuous everywhere except at points where the potential energy becomes infinite.

2. **Single-Valued**: At any point in space and time, the wave function must have a unique value.

3. **Square-Integrability**: The integral of the absolute square of the wave function over all space must be finite:

   $$\int_{-\infty}^{\infty} |\Psi(\mathbf{r},t)|^2 d^3\mathbf{r} < \infty$$

### State Vectors

In a more abstract formulation, the state of a quantum system is represented by a vector $|\Psi\rangle$ in a complex Hilbert space. This state vector contains all the information about the system that can be known. The wave function representation is related to the state vector through:

$$\Psi(\mathbf{r},t) = \langle\mathbf{r}|\Psi(t)\rangle$$

Where $|\mathbf{r}\rangle$ represents the position eigenstate.

## Normalization

For a wave function to represent a physical state, it must be normalized. This means that the probability of finding the particle somewhere in space must be exactly 1:

$$\int_{-\infty}^{\infty} |\Psi(\mathbf{r},t)|^2 d^3\mathbf{r} = 1$$

For a state vector, normalization is expressed as:

$$\langle\Psi|\Psi\rangle = 1$$

## Pure and Mixed States

### Pure States

A pure state represents a quantum system with a precisely defined wave function or state vector. The system is in a definite quantum state, and its behavior is completely determined by this state. Mathematically, a pure state can be represented by a single state vector $|\Psi\rangle$.

### Mixed States

A mixed state represents a statistical ensemble of pure states. It occurs when there is classical uncertainty about which pure state the system is in. Mixed states are described by a density operator (or density matrix) $\rho$:

$$\rho = \sum_i p_i |\Psi_i\rangle\langle\Psi_i|$$

Where $p_i$ is the probability that the system is in the pure state $|\Psi_i\rangle$, with $\sum_i p_i = 1$.

For a pure state, the density operator simplifies to:

$$\rho = |\Psi\rangle\langle\Psi|$$

A key property of the density operator is that $\text{Tr}(\rho^2) \leq 1$, with equality holding only for pure states.

## Superposition Principle

One of the most distinctive features of quantum mechanics is the superposition principle. It states that if $|\Psi_1\rangle$ and $|\Psi_2\rangle$ are possible states of a quantum system, then any linear combination:

$$|\Psi\rangle = c_1|\Psi_1\rangle + c_2|\Psi_2\rangle$$

Where $c_1$ and $c_2$ are complex numbers, is also a possible state of the system (provided that $|\Psi\rangle$ is properly normalized).

This principle has no classical analog and leads to phenomena such as quantum interference.

## Measurement and Collapse

When a measurement is performed on a quantum system, the state of the system changes. If the system is initially in a state $|\Psi\rangle$ and a measurement of an observable $A$ yields the value $a_n$ (corresponding to the eigenstate $|a_n\rangle$), then immediately after the measurement, the system is in the state $|a_n\rangle$.

This process, known as wave function collapse, is one of the most debated aspects of quantum mechanics. The probability of obtaining the measurement result $a_n$ is given by:

$$P(a_n) = |\langle a_n|\Psi\rangle|^2$$

## Time Evolution

The time evolution of a quantum state is governed by the Schrödinger equation:

$$i\hbar\frac{\partial}{\partial t}|\Psi(t)\rangle = H|\Psi(t)\rangle$$

Where $H$ is the Hamiltonian operator representing the total energy of the system.

For time-independent Hamiltonians, the formal solution is:

$$|\Psi(t)\rangle = e^{-iHt/\hbar}|\Psi(0)\rangle$$

This evolution is unitary, meaning that the norm of the state vector is preserved over time.

## Stationary States

Stationary states are eigenstates of the Hamiltonian:

$$H|\Psi_n\rangle = E_n|\Psi_n\rangle$$

Where $E_n$ is the energy eigenvalue. In these states, the probability density $|\Psi_n(\mathbf{r})|^2$ does not change with time, although the phase of the wave function does evolve:

$$\Psi_n(\mathbf{r},t) = \Psi_n(\mathbf{r})e^{-iE_nt/\hbar}$$

## Quantum Entanglement

When two or more quantum systems interact, they can become entangled, meaning that the state of the combined system cannot be factored into separate states for each subsystem. For a two-particle system, an entangled state might have the form:

$$|\Psi\rangle = \frac{1}{\sqrt{2}}(|0\rangle_A|1\rangle_B - |1\rangle_A|0\rangle_B)$$

Where the subscripts A and B refer to the two particles. Measurements on one particle instantaneously affect the state of the other, regardless of the distance between them. This non-local behavior, which Einstein called "spooky action at a distance," is a fundamental feature of quantum mechanics that has been experimentally verified.

## Practice Problems

### Problem 1: Normalization of a Wave Function

**Question**: A particle in a one-dimensional box of length $L$ has the wave function:

$$\psi(x) = A\sin\left(\frac{2\pi x}{L}\right)$$

Find the normalization constant $A$.

**Solution**:

For the wave function to be normalized, we need:

$$\int_0^L |\psi(x)|^2 dx = 1$$

Substituting the given wave function:

$$\int_0^L |A\sin\left(\frac{2\pi x}{L}\right)|^2 dx = |A|^2 \int_0^L \sin^2\left(\frac{2\pi x}{L}\right) dx = 1$$

Using the identity $\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$:

$$|A|^2 \int_0^L \frac{1 - \cos\left(\frac{4\pi x}{L}\right)}{2} dx = |A|^2 \left[\frac{x}{2} - \frac{L}{8\pi}\sin\left(\frac{4\pi x}{L}\right)\right]_0^L = |A|^2 \frac{L}{2} = 1$$

Therefore, $|A|^2 = \frac{2}{L}$ and $A = \sqrt{\frac{2}{L}}$.

### Problem 2: Expectation Values

**Question**: For a particle in the ground state of a one-dimensional harmonic oscillator with wave function:

$$\psi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} e^{-m\omega x^2/2\hbar}$$

Calculate the expectation values of (a) position $\langle x \rangle$, (b) position squared $\langle x^2 \rangle$, and (c) momentum squared $\langle p^2 \rangle$.

**Solution**:

a) The expectation value of position is:

$$\langle x \rangle = \int_{-\infty}^{\infty} \psi_0^*(x) x \psi_0(x) dx$$

Since $\psi_0(x)$ is an even function and $x$ is odd, the integrand is odd and the integral equals zero: $\langle x \rangle = 0$.

b) For position squared:

$$\langle x^2 \rangle = \int_{-\infty}^{\infty} \psi_0^*(x) x^2 \psi_0(x) dx = \left(\frac{m\omega}{\pi\hbar}\right)^{1/2} \int_{-\infty}^{\infty} x^2 e^{-m\omega x^2/\hbar} dx$$

This integral can be evaluated using the standard result $\int_{-\infty}^{\infty} x^2 e^{-ax^2} dx = \frac{1}{2}\sqrt{\frac{\pi}{a^3}}$:

$$\langle x^2 \rangle = \left(\frac{m\omega}{\pi\hbar}\right)^{1/2} \frac{1}{2}\sqrt{\frac{\pi}{(m\omega/\hbar)^3}} = \frac{\hbar}{2m\omega}$$

c) For momentum squared, we can use the virial theorem for the harmonic oscillator, which states that $\langle T \rangle = \langle V \rangle$ for the ground state, where $T = \frac{p^2}{2m}$ and $V = \frac{1}{2}m\omega^2 x^2$. Therefore:

$$\langle \frac{p^2}{2m} \rangle = \langle \frac{1}{2}m\omega^2 x^2 \rangle$$
$$\langle p^2 \rangle = m^2\omega^2 \langle x^2 \rangle = m^2\omega^2 \frac{\hbar}{2m\omega} = \frac{m\omega\hbar}{2}$$

### Problem 3: Superposition States

**Question**: A quantum system can be in either state $|0\rangle$ or state $|1\rangle$. It is prepared in the superposition state:

$$|\psi\rangle = \frac{3}{5}|0\rangle + \frac{4}{5}|1\rangle$$

a) Is this state normalized?
b) What is the probability of measuring the system in state $|0\rangle$?
c) What is the state of the system after measuring it in state $|1\rangle$?

**Solution**:

a) For the state to be normalized, we need $\langle\psi|\psi\rangle = 1$:

$$\langle\psi|\psi\rangle = \left|\frac{3}{5}\right|^2 + \left|\frac{4}{5}\right|^2 = \frac{9}{25} + \frac{16}{25} = \frac{25}{25} = 1$$

So the state is normalized.

b) The probability of measuring the system in state $|0\rangle$ is:

$$P(|0\rangle) = |\langle 0|\psi\rangle|^2 = \left|\frac{3}{5}\right|^2 = \frac{9}{25} = 0.36 \text{ or } 36\%$$

c) After measuring the system in state $|1\rangle$, the state collapses to:

$$|\psi'\rangle = |1\rangle$$

The system is now in a definite state $|1\rangle$ with 100% probability.

### Problem 4: Density Matrix

**Question**: Consider a quantum system that has a 70% probability of being in state $|\phi\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ and a 30% probability of being in state $|\chi\rangle = |0\rangle$.

a) Write the density matrix for this mixed state.
b) Is this a pure state? Justify your answer.
c) What is the probability of measuring the system in state $|0\rangle$?

**Solution**:

a) The density matrix for a mixed state is given by:

$$\rho = \sum_i p_i |\psi_i\rangle\langle\psi_i|$$

In this case:

$$\rho = 0.7 |\phi\rangle\langle\phi| + 0.3 |\chi\rangle\langle\chi|$$

For the state $|\phi\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$, we have:

$$|\phi\rangle\langle\phi| = \frac{1}{2}(|0\rangle\langle0| + |0\rangle\langle1| + |1\rangle\langle0| + |1\rangle\langle1|)$$

For the state $|\chi\rangle = |0\rangle$, we have:

$$|\chi\rangle\langle\chi| = |0\rangle\langle0|$$

Combining these with their respective probabilities:

$$\rho = 0.7 \cdot \frac{1}{2}(|0\rangle\langle0| + |0\rangle\langle1| + |1\rangle\langle0| + |1\rangle\langle1|) + 0.3 \cdot |0\rangle\langle0|$$

$$\rho = (0.35 + 0.3)|0\rangle\langle0| + 0.35|1\rangle\langle1| + 0.35|0\rangle\langle1| + 0.35|1\rangle\langle0|$$

$$\rho = 0.65|0\rangle\langle0| + 0.35|1\rangle\langle1| + 0.35|0\rangle\langle1| + 0.35|1\rangle\langle0|$$

In matrix form, using the basis $\{|0\rangle, |1\rangle\}$:

$$\rho = \begin{pmatrix} 0.65 & 0.35 \\ 0.35 & 0.35 \end{pmatrix}$$

b) To determine if this is a pure state, we calculate $\text{Tr}(\rho^2)$. For a pure state, $\text{Tr}(\rho^2) = 1$.

$$\rho^2 = \begin{pmatrix} 0.65 & 0.35 \\ 0.35 & 0.35 \end{pmatrix} \begin{pmatrix} 0.65 & 0.35 \\ 0.35 & 0.35 \end{pmatrix} = \begin{pmatrix} 0.5475 & 0.455 \\ 0.455 & 0.245 \end{pmatrix}$$

$$\text{Tr}(\rho^2) = 0.5475 + 0.245 = 0.7925 < 1$$

Since $\text{Tr}(\rho^2) < 1$, this is a mixed state, not a pure state.

c) The probability of measuring the system in state $|0\rangle$ is given by:

$$P(|0\rangle) = \langle0|\rho|0\rangle = \rho_{00} = 0.65 \text{ or } 65\%$$

### Problem 5: Time Evolution

**Question**: A particle is in the state $|\psi(0)\rangle = \frac{1}{\sqrt{3}}|E_1\rangle + \sqrt{\frac{2}{3}}|E_2\rangle$ at time $t = 0$, where $|E_1\rangle$ and $|E_2\rangle$ are energy eigenstates with energies $E_1 = 2$ eV and $E_2 = 5$ eV, respectively.

a) Write the state of the particle at time $t$.
b) What is the probability of finding the particle in state $|E_1\rangle$ at time $t = 10^{-15}$ s?
c) What is the expectation value of the Hamiltonian (energy)?

**Solution**:

a) The time evolution of an energy eigenstate is given by $|E_n(t)\rangle = e^{-iE_nt/\hbar}|E_n\rangle$. For a superposition of energy eigenstates, each component evolves independently:

$$|\psi(t)\rangle = \frac{1}{\sqrt{3}}e^{-iE_1t/\hbar}|E_1\rangle + \sqrt{\frac{2}{3}}e^{-iE_2t/\hbar}|E_2\rangle$$

Substituting the values ($\hbar = 6.58 \times 10^{-16}$ eV·s, $E_1 = 2$ eV, $E_2 = 5$ eV):

$$|\psi(t)\rangle = \frac{1}{\sqrt{3}}e^{-i2t/(6.58 \times 10^{-16})}|E_1\rangle + \sqrt{\frac{2}{3}}e^{-i5t/(6.58 \times 10^{-16})}|E_2\rangle$$

$$|\psi(t)\rangle = \frac{1}{\sqrt{3}}e^{-i3.04 \times 10^{15}t}|E_1\rangle + \sqrt{\frac{2}{3}}e^{-i7.6 \times 10^{15}t}|E_2\rangle$$

b) The probability of finding the particle in state $|E_1\rangle$ at time $t$ is:

$$P(E_1, t) = |\langle E_1|\psi(t)\rangle|^2 = \left|\frac{1}{\sqrt{3}}e^{-i3.04 \times 10^{15}t}\right|^2 = \frac{1}{3}$$

At $t = 10^{-15}$ s, the probability remains $\frac{1}{3}$ or about 33.3%. This is because the probability of finding the system in an energy eigenstate doesn't change with time, only the relative phases change.

c) The expectation value of the Hamiltonian is:

$$\langle H \rangle = \langle\psi(t)|H|\psi(t)\rangle = \frac{1}{3}E_1 + \frac{2}{3}E_2 = \frac{1}{3} \cdot 2 + \frac{2}{3} \cdot 5 = \frac{2}{3} + \frac{10}{3} = 4 \text{ eV}$$

The expectation value of energy is constant in time for a closed quantum system.

### Problem 6: Quantum Measurement

**Question**: A quantum system is in the state $|\psi\rangle = \frac{1}{\sqrt{2}}|a\rangle + \frac{1}{2}|b\rangle + \frac{1}{2}|c\rangle$, where $|a\rangle$, $|b\rangle$, and $|c\rangle$ are orthonormal basis states.

a) Is this state normalized? If not, normalize it.
b) What is the probability of measuring the system in state $|b\rangle$?
c) If a measurement yields the result corresponding to state $|c\rangle$, what is the state of the system immediately after the measurement?

**Solution**:

a) To check normalization, we calculate $\langle\psi|\psi\rangle$:

$$\langle\psi|\psi\rangle = \left|\frac{1}{\sqrt{2}}\right|^2 + \left|\frac{1}{2}\right|^2 + \left|\frac{1}{2}\right|^2 = \frac{1}{2} + \frac{1}{4} + \frac{1}{4} = 1$$

The state is already normalized.

b) The probability of measuring the system in state $|b\rangle$ is:

$$P(|b\rangle) = |\langle b|\psi\rangle|^2 = \left|\frac{1}{2}\right|^2 = \frac{1}{4} \text{ or } 25\%$$

c) After measuring the system in state $|c\rangle$, the state collapses to:

$$|\psi'\rangle = |c\rangle$$

All information about the original superposition is lost, and the system is now in a definite state $|c\rangle$.

### Problem 7: Spin-1/2 System

**Question**: Consider a spin-1/2 particle in the state $|\psi\rangle = \cos(\theta/2)|\uparrow\rangle + \sin(\theta/2)e^{i\phi}|\downarrow\rangle$, where $|\uparrow\rangle$ and $|\downarrow\rangle$ are the eigenstates of the $S_z$ operator with eigenvalues $+\hbar/2$ and $-\hbar/2$, respectively.

a) Calculate the expectation values of the spin operators $S_x$, $S_y$, and $S_z$.
b) For what values of $\theta$ and $\phi$ is the particle in an eigenstate of $S_x$?
c) If $\theta = \pi/2$ and $\phi = 0$, what is the probability of measuring $S_z = +\hbar/2$?

**Solution**:

a) The spin operators for a spin-1/2 system are related to the Pauli matrices by $S_i = \frac{\hbar}{2}\sigma_i$. The expectation values are:

$$\langle S_x \rangle = \langle\psi|S_x|\psi\rangle = \frac{\hbar}{2}\sin\theta\cos\phi$$

$$\langle S_y \rangle = \langle\psi|S_y|\psi\rangle = \frac{\hbar}{2}\sin\theta\sin\phi$$

$$\langle S_z \rangle = \langle\psi|S_z|\psi\rangle = \frac{\hbar}{2}\cos\theta$$

b) The eigenstates of $S_x$ are $|\rightarrow\rangle = \frac{1}{\sqrt{2}}(|\uparrow\rangle + |\downarrow\rangle)$ and $|\leftarrow\rangle = \frac{1}{\sqrt{2}}(|\uparrow\rangle - |\downarrow\rangle)$.

For the state to be an eigenstate of $S_x$, we need either:

$\theta = \pi/2$ and $\phi = 0$ (for $|\rightarrow\rangle$), or
$\theta = \pi/2$ and $\phi = \pi$ (for $|\leftarrow\rangle$)

c) If $\theta = \pi/2$ and $\phi = 0$, the state is:

$$|\psi\rangle = \cos(\pi/4)|\uparrow\rangle + \sin(\pi/4)|\downarrow\rangle = \frac{1}{\sqrt{2}}|\uparrow\rangle + \frac{1}{\sqrt{2}}|\downarrow\rangle$$

The probability of measuring $S_z = +\hbar/2$ (corresponding to state $|\uparrow\rangle$) is:

$$P(|\uparrow\rangle) = |\langle \uparrow|\psi\rangle|^2 = \left|\frac{1}{\sqrt{2}}\right|^2 = \frac{1}{2} \text{ or } 50\%$$

### Problem 8: Harmonic Oscillator Coherent State

**Question**: A quantum harmonic oscillator is prepared in a coherent state $|\alpha\rangle$, which can be expressed as:

$$|\alpha\rangle = e^{-|\alpha|^2/2}\sum_{n=0}^{\infty}\frac{\alpha^n}{\sqrt{n!}}|n\rangle$$

where $|n\rangle$ are the energy eigenstates and $\alpha = 2$.

a) What is the probability of finding the oscillator in the ground state $|0\rangle$?
b) What is the expectation value of the number operator $\hat{N} = \hat{a}^\dagger\hat{a}$?
c) Calculate the uncertainty in position $\Delta x$ for this state.

**Solution**:

a) The probability of finding the oscillator in the ground state is:

$$P(|0\rangle) = |\langle 0|\alpha\rangle|^2 = e^{-|\alpha|^2} = e^{-4} \approx 0.018 \text{ or } 1.8\%$$

b) For a coherent state, the expectation value of the number operator is:

$$\langle \hat{N} \rangle = |\alpha|^2 = 4$$

This means that the average energy of the oscillator is $E = \hbar\omega(\langle \hat{N} \rangle + 1/2) = \hbar\omega(4 + 1/2) = 4.5\hbar\omega$.

c) For a coherent state, the uncertainty in position is the same as for the ground state:

$$\Delta x = \sqrt{\frac{\hbar}{2m\omega}}$$

This is the minimum uncertainty allowed by the Heisenberg uncertainty principle for a harmonic oscillator.

### Problem 9: Entangled States

**Question**: Consider the entangled state of two qubits:

$$|\psi\rangle = \frac{1}{\sqrt{3}}|00\rangle + \frac{1}{\sqrt{3}}|01\rangle + \frac{1}{\sqrt{3}}|11\rangle$$

a) Is this state normalized?
b) What is the reduced density matrix for the first qubit?
c) Is the first qubit in a pure state or a mixed state?

**Solution**:

a) To check normalization, we calculate:

$$\langle\psi|\psi\rangle = \left|\frac{1}{\sqrt{3}}\right|^2 + \left|\frac{1}{\sqrt{3}}\right|^2 + \left|\frac{1}{\sqrt{3}}\right|^2 = \frac{1}{3} + \frac{1}{3} + \frac{1}{3} = 1$$

The state is normalized.

b) The reduced density matrix for the first qubit is obtained by tracing out the second qubit:

$$\rho_1 = \text{Tr}_2(|\psi\rangle\langle\psi|)$$

Calculating this:

$$\rho_1 = \frac{1}{3}|0\rangle\langle0| + \frac{1}{3}|0\rangle\langle0| + \frac{1}{3}|1\rangle\langle1| = \frac{2}{3}|0\rangle\langle0| + \frac{1}{3}|1\rangle\langle1|$$

In matrix form:

$$\rho_1 = \begin{pmatrix} \frac{2}{3} & 0 \\ 0 & \frac{1}{3} \end{pmatrix}$$

c) To determine if the first qubit is in a pure state, we calculate $\text{Tr}(\rho_1^2)$:

$$\text{Tr}(\rho_1^2) = \left(\frac{2}{3}\right)^2 + \left(\frac{1}{3}\right)^2 = \frac{4}{9} + \frac{1}{9} = \frac{5}{9} < 1$$

Since $\text{Tr}(\rho_1^2) < 1$, the first qubit is in a mixed state. This is a characteristic feature of entanglement: when two systems are entangled, the individual subsystems are in mixed states even though the combined system is in a pure state.

### Problem 10: Quantum Teleportation

**Question**: In the quantum teleportation protocol, Alice wants to teleport an unknown qubit state $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ to Bob. They share an entangled pair in the Bell state $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$.

a) Write the initial state of the three-qubit system (Alice's unknown qubit and the shared entangled pair).
b) After Alice performs a Bell measurement on her two qubits, what are the possible measurement outcomes and with what probabilities?
c) For each measurement outcome, what operation must Bob apply to his qubit to recover the state $|\psi\rangle$?

**Solution**:

a) The initial state of the three-qubit system is:

$$|\Psi_0\rangle = |\psi\rangle \otimes |\Phi^+\rangle = (\alpha|0\rangle + \beta|1\rangle) \otimes \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$$

Expanding this:

$$|\Psi_0\rangle = \frac{1}{\sqrt{2}}\alpha|000\rangle + \frac{1}{\sqrt{2}}\alpha|011\rangle + \frac{1}{\sqrt{2}}\beta|100\rangle + \frac{1}{\sqrt{2}}\beta|111\rangle$$

Where the first two qubits belong to Alice and the third to Bob.

b) We can rewrite the initial state in terms of the Bell basis for Alice's qubits:

$$|\Psi_0\rangle = \frac{1}{2}|\Phi^+\rangle(\alpha|0\rangle + \beta|1\rangle) + \frac{1}{2}|\Phi^-\rangle(\alpha|0\rangle - \beta|1\rangle) + \frac{1}{2}|\Psi^+\rangle(\beta|0\rangle + \alpha|1\rangle) + \frac{1}{2}|\Psi^-\rangle(\beta|0\rangle - \alpha|1\rangle)$$

Where the Bell states are:

$$|\Phi^{\pm}\rangle = \frac{1}{\sqrt{2}}(|00\rangle \pm |11\rangle)$$
$$|\Psi^{\pm}\rangle = \frac{1}{\sqrt{2}}(|01\rangle \pm |10\rangle)$$

The probability of each measurement outcome is $\frac{1}{4}$ or 25%.

c) For each measurement outcome, Bob must apply the following operations to recover $|\psi\rangle$:

- If Alice measures $|\Phi^+\rangle$: Bob applies the identity operation $I$ (no operation needed).
- If Alice measures $|\Phi^-\rangle$: Bob applies the Pauli-Z gate $\sigma_z$.
- If Alice measures $|\Psi^+\rangle$: Bob applies the Pauli-X gate $\sigma_x$.
- If Alice measures $|\Psi^-\rangle$: Bob applies the combined operation $\sigma_z\sigma_x$ (or $-i\sigma_y$).

## Summary

The state of a quantum system is a fundamental concept in quantum mechanics that encapsulates all the information that can be known about the system. Unlike classical mechanics, where a system's state is described by precise values of position and momentum, quantum states are represented by wave functions or state vectors in a complex Hilbert space.

Key aspects of quantum states include:

- Mathematical representation through wave functions and state vectors
- Normalization requirements ensuring total probability equals one
- Pure states representing definite quantum states versus mixed states representing statistical ensembles
- The superposition principle allowing quantum systems to exist in multiple states simultaneously
- Measurement causing wave function collapse to an eigenstate of the measured observable
- Time evolution governed by the Schrödinger equation
- Entanglement creating non-local correlations between quantum systems

These concepts form the foundation of quantum mechanics and lead to phenomena with no classical analogs, such as quantum interference, tunneling, and teleportation. Understanding quantum states is essential for applications in quantum computing, cryptography, and sensing technologies.
