## Time Evolution Operator

### Introduction

The time evolution operator is a fundamental concept in quantum mechanics that describes how quantum states change over time. It provides a mathematical framework for understanding the dynamics of quantum systems and forms the basis for studying quantum processes ranging from simple particle motion to complex many-body interactions.

## Mathematical Formulation

### Definition

For a quantum system with Hamiltonian $H$, the time evolution operator $U(t,t_0)$ connects the state vector at an initial time $t_0$ to the state vector at a later time $t$:

$$|\psi(t)\rangle = U(t,t_0)|\psi(t_0)\rangle$$

The formal solution for the time evolution operator is:

$$U(t,t_0) = e^{-\frac{i}{\hbar}H(t-t_0)}$$

This expression is valid when the Hamiltonian is time-independent. The exponential of an operator is defined through its power series expansion:

$$U(t,t_0) = e^{-\frac{i}{\hbar}H(t-t_0)} = \sum_{n=0}^{\infty} \frac{1}{n!}\left(-\frac{i}{\hbar}H(t-t_0)\right)^n$$

### Properties

The time evolution operator has several important properties:

1. **Unitarity**: $U^{\dagger}(t,t_0)U(t,t_0) = U(t,t_0)U^{\dagger}(t,t_0) = I$

   This ensures probability conservation in quantum mechanics.

2. **Composition**: $U(t_2,t_0) = U(t_2,t_1)U(t_1,t_0)$

   The evolution from $t_0$ to $t_2$ can be broken into evolution from $t_0$ to $t_1$ followed by evolution from $t_1$ to $t_2$.

3. **Inverse**: $U^{-1}(t,t_0) = U(t_0,t) = U^{\dagger}(t,t_0)$

   This allows for backward time evolution.

4. **Initial condition**: $U(t_0,t_0) = I$

   At the initial time, the state is unchanged.

### Time-Dependent Hamiltonians

For time-dependent Hamiltonians, the expression for the time evolution operator becomes more complex:

$$U(t,t_0) = \mathcal{T}\exp\left(-\frac{i}{\hbar}\int_{t_0}^{t} H(t')dt'\right)$$

Where $\mathcal{T}$ is the time-ordering operator.

The time-ordering operator is defined as follows: it orders operators at later times to the left of operators at earlier times.

## Schrödinger, Heisenberg, and Interaction Pictures

### Schrödinger Picture

In the Schrödinger picture, quantum states evolve in time while operators remain fixed:

$$|\psi_S(t)\rangle = U(t,t_0)|\psi_S(t_0)\rangle$$

$$O_S = \text{constant}$$

The time evolution of the state vector is governed by the Schrödinger equation:

$$i\hbar\frac{d}{dt}|\psi_S(t)\rangle = H|\psi_S(t)\rangle$$

### Heisenberg Picture

In the Heisenberg picture, operators evolve in time while states remain fixed:

$$|\psi_H\rangle = |\psi_S(t_0)\rangle = \text{constant}$$
$$O_H(t) = U^{\dagger}(t,t_0)O_S U(t,t_0)$$

The time evolution of operators is governed by the Heisenberg equation:

$$i\hbar\frac{d}{dt}O_H(t) = [O_H(t), H] + i\hbar\frac{\partial O_H}{\partial t}$$

Where the last term accounts for explicit time dependence in the operator.

### Interaction Picture

The interaction picture is useful when the Hamiltonian can be split into a simple part $H_0$ with known solutions and an interaction part $H_I$:

$$H = H_0 + H_I$$

In this picture:

$$|\psi_I(t)\rangle = e^{\frac{i}{\hbar}H_0(t-t_0)}|\psi_S(t)\rangle$$
$$O_I(t) = e^{\frac{i}{\hbar}H_0(t-t_0)}O_S e^{-\frac{i}{\hbar}H_0(t-t_0)}$$

The time evolution of the state vector in the interaction picture is:

$$i\hbar\frac{d}{dt}|\psi_I(t)\rangle = H_I(t)|\psi_I(t)\rangle$$

Where $H_I(t) = e^{\frac{i}{\hbar}H_0(t-t_0)}H_I e^{-\frac{i}{\hbar}H_0(t-t_0)}$ is the interaction Hamiltonian in the interaction picture.

## Applications

### Quantum Harmonic Oscillator

For a quantum harmonic oscillator with Hamiltonian $H = \frac{p^2}{2m} + \frac{1}{2}m\omega^2 x^2$, the time evolution operator is:

$$U(t) = e^{-\frac{i}{\hbar}Ht}$$

This leads to the time evolution of the position and momentum operators in the Heisenberg picture:

$$x_H(t) = x_H(0)\cos(\omega t) + \frac{p_H(0)}{m\omega}\sin(\omega t)$$
$$p_H(t) = p_H(0)\cos(\omega t) - m\omega x_H(0)\sin(\omega t)$$

These equations mirror the classical equations of motion for a harmonic oscillator.

### Two-Level System

For a two-level system (e.g., a spin-1/2 particle in a magnetic field) with Hamiltonian $H = \frac{\hbar\omega}{2}\sigma_z$, the time evolution operator is:

$$U(t) = e^{-\frac{i}{\hbar}Ht} = e^{-\frac{i\omega t}{2}\sigma_z} = \begin{pmatrix} e^{-\frac{i\omega t}{2}} & 0 \\ 0 & e^{\frac{i\omega t}{2}} \end{pmatrix}$$

This describes the precession of the spin around the z-axis with frequency $\omega$.

### Rabi Oscillations

For a two-level atom interacting with a resonant electromagnetic field, the time evolution leads to Rabi oscillations between the ground and excited states. The probability of finding the system in the excited state oscillates as:

$$P_e(t) = \sin^2(\Omega t/2)$$

Where $\Omega$ is the Rabi frequency, which depends on the strength of the coupling between the atom and the field.

## Propagators and Green's Functions

### Quantum Propagator

The time evolution operator is closely related to the quantum propagator $K(x,t;x',t_0)$, which gives the probability amplitude for a particle to move from position $x'$ at time $t_0$ to position $x$ at time $t$:

$$K(x,t;x',t_0) = \langle x|U(t,t_0)|x'\rangle$$

For a free particle, the propagator is:

$$K(x,t;x',t_0) = \sqrt{\frac{m}{2\pi i\hbar(t-t_0)}}\exp\left(\frac{im(x-x')^2}{2\hbar(t-t_0)}\right)$$

### Green's Functions

The time evolution operator is also related to the Green's function of the Schrödinger equation:

$$G(x,t;x',t') = -\frac{i}{\hbar}\theta(t-t')\langle x|U(t,t')|x'\rangle$$

Where $\theta(t-t')$ is the Heaviside step function.

Green's functions are particularly useful in scattering theory and many-body physics.

## Path Integral Formulation

### Feynman Path Integral

In the path integral formulation of quantum mechanics, the time evolution operator can be expressed as a sum over all possible paths connecting the initial and final states:

$$U(x_b,t_b;x_a,t_a) = \int \mathcal{D}[x(t)] e^{\frac{i}{\hbar}S[x(t)]}$$

Where $S[x(t)]$ is the action functional:

$$S[x(t)] = \int_{t_a}^{t_b} L(x(t),\dot{x}(t),t) dt$$

And $L$ is the Lagrangian of the system.

This formulation provides an alternative and powerful approach to quantum dynamics.

## Numerical Methods

### Explicit Methods

For numerical calculations, the time evolution operator for small time steps can be approximated as:

$$U(t+\Delta t, t) \approx 1 - \frac{i}{\hbar}H\Delta t$$

This is accurate to first order in $\Delta t$ and is known as the Euler method.

### Split-Operator Method

For Hamiltonians that can be split into kinetic and potential terms, $H = T + V$, the split-operator method provides a more accurate approximation:

$$U(t+\Delta t, t) \approx e^{-\frac{i}{\hbar}V\frac{\Delta t}{2}}e^{-\frac{i}{\hbar}T\Delta t}e^{-\frac{i}{\hbar}V\frac{\Delta t}{2}}$$

This is accurate to third order in $\Delta t$ and preserves the unitarity of the time evolution.

## Practice Problems

### Problem 1: Free Particle Evolution

**Question:** A free particle is initially described by a Gaussian wave packet centered at $x_0$ with momentum $p_0$ and width $\sigma$:

$$\psi(x,0) = \left(\frac{1}{2\pi\sigma^2}\right)^{1/4} e^{-\frac{(x-x_0)^2}{4\sigma^2}} e^{i\frac{p_0 x}{\hbar}}$$

Find the wave function at a later time $t$.

**Answer:** The time evolution of a free particle with Hamiltonian $H = \frac{p^2}{2m}$ is given by:

$$\psi(x,t) = \int_{-\infty}^{\infty} K(x,t;x',0) \psi(x',0) dx'$$

Where the propagator is:

$$K(x,t;x',0) = \sqrt{\frac{m}{2\pi i\hbar t}}\exp\left(\frac{im(x-x')^2}{2\hbar t}\right)$$

After performing the integration, the result is:

$$\psi(x,t) = \left(\frac{1}{2\pi\sigma_t^2}\right)^{1/4} e^{-\frac{(x-x_0-\frac{p_0 t}{m})^2}{4\sigma_t^2}} e^{i\frac{p_0 x}{\hbar}} e^{-i\frac{p_0^2 t}{2m\hbar}}$$

Where $\sigma_t^2 = \sigma^2 + \frac{i\hbar t}{2m}$ is the complex width parameter.

This shows that the wave packet moves with velocity $v = p_0/m$ (as expected classically) while spreading over time.

### Problem 2: Harmonic Oscillator Coherent State

**Question:** A quantum harmonic oscillator is prepared in a coherent state $|\alpha\rangle$ at $t=0$. Find the state at a later time $t$.

**Answer:** A coherent state is an eigenstate of the annihilation operator: $a|\alpha\rangle = \alpha|\alpha\rangle$. The time evolution of this state under the harmonic oscillator Hamiltonian $H = \hbar\omega(a^{\dagger}a + \frac{1}{2})$ is:

$$|\alpha(t)\rangle = U(t,0)|\alpha\rangle = e^{-\frac{i}{\hbar}Ht}|\alpha\rangle$$

Using the properties of coherent states:

$$|\alpha(t)\rangle = e^{-i\omega t/2}|\alpha e^{-i\omega t}\rangle$$

This means the coherent state remains a coherent state, but with a time-dependent parameter $\alpha(t) = \alpha e^{-i\omega t}$. In the position representation, this corresponds to a Gaussian wave packet that oscillates without changing its shape, mimicking the classical motion of a harmonic oscillator.

### Problem 3: Spin Precession

**Question:** A spin-1/2 particle is initially in the state $|+x\rangle = \frac{1}{\sqrt{2}}(|+z\rangle + |-z\rangle)$ and is subject to a magnetic field in the z-direction, with Hamiltonian $H = -\gamma B_0 S_z = -\frac{\hbar\omega_0}{2}\sigma_z$. Find the state at time $t$ and calculate the expectation values of $\sigma_x$, $\sigma_y$, and $\sigma_z$ as functions of time.

**Answer:** The time evolution operator is:

$$U(t) = e^{i\omega_0 t\sigma_z/2} = \begin{pmatrix} e^{i\omega_0 t/2} & 0 \\ 0 & e^{-i\omega_0 t/2} \end{pmatrix}$$

Applying this to the initial state:

$$|\psi(t)\rangle = U(t)|+x\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix} e^{i\omega_0 t/2} \\ e^{-i\omega_0 t/2} \end{pmatrix}$$

The expectation values are:

$$\langle\sigma_x\rangle = \cos(\omega_0 t)$$
$$\langle\sigma_y\rangle = -\sin(\omega_0 t)$$
$$\langle\sigma_z\rangle = 0$$

This describes the precession of the spin around the z-axis with frequency $\omega_0$.

### Problem 4: Time-Dependent Perturbation

**Question:** Consider a two-level system with Hamiltonian $H = H_0 + H'(t)$, where $H_0 = \frac{\hbar\omega_0}{2}\sigma_z$ and $H'(t) = \hbar\Omega\cos(\omega t)\sigma_x$. If the system is initially in the ground state $|0\rangle$, find the probability of transition to the excited state $|1\rangle$ as a function of time, assuming $\Omega \ll \omega_0$ (weak perturbation).

**Answer:** This problem is best approached in the interaction picture. The interaction Hamiltonian in the interaction picture is:

$$H_I(t) = \hbar\Omega\cos(\omega t)(e^{i\omega_0 t\sigma_z/2}\sigma_x e^{-i\omega_0 t\sigma_z/2})$$

Using the relation $e^{i\theta\sigma_z/2}\sigma_x e^{-i\theta\sigma_z/2} = \sigma_x\cos\theta - \sigma_y\sin\theta$:

$$H_I(t) = \hbar\Omega\cos(\omega t)(\sigma_x\cos(\omega_0 t) - \sigma_y\sin(\omega_0 t))$$

Expanding $\cos(\omega t)$ and keeping only the near-resonant terms (rotating wave approximation) when $\omega \approx \omega_0$:

$$H_I(t) \approx \frac{\hbar\Omega}{2}(\sigma_x\cos((\omega-\omega_0)t) - \sigma_y\sin((\omega-\omega_0)t))$$

This can be rewritten as:

$$H_I(t) \approx \frac{\hbar\Omega}{2}e^{-i(\omega-\omega_0)t\sigma_z/2}\sigma_x e^{i(\omega-\omega_0)t\sigma_z/2}$$

The probability of transition to the excited state is:

$$P_{0\to 1}(t) = \frac{\Omega^2}{\Omega^2 + (\omega-\omega_0)^2}\sin^2\left(\frac{\sqrt{\Omega^2 + (\omega-\omega_0)^2}}{2}t\right)$$

This is the formula for Rabi oscillations, with the maximum probability occurring at resonance ($\omega = \omega_0$).

### Problem 5: Sudden Perturbation

**Question:** A particle in a one-dimensional infinite square well of width $L$ is initially in the ground state. At $t=0$, the well is suddenly expanded to width $2L$. Find the probability that the particle remains in the ground state of the new well.

**Answer:** The ground state of the initial well is:

$$\psi_1(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{\pi x}{L}\right), \quad 0 \leq x \leq L$$

After the sudden expansion, this state does not evolve immediately (sudden approximation), but it's no longer an eigenstate of the new Hamiltonian. The ground state of the new well is:

$$\phi_1(x) = \sqrt{\frac{1}{L}}\sin\left(\frac{\pi x}{2L}\right), \quad 0 \leq x \leq 2L$$

The probability of finding the particle in the ground state of the new well is:

$$P = |\langle\phi_1|\psi_1\rangle|^2 = \left|\int_0^L \phi_1^*(x)\psi_1(x)dx\right|^2$$

Since $\psi_1(x) = 0$ for $L < x \leq 2L$, we only integrate from $0$ to $L$:

$$P = \left|\int_0^L \sqrt{\frac{1}{L}}\sin\left(\frac{\pi x}{2L}\right) \sqrt{\frac{2}{L}}\sin\left(\frac{\pi x}{L}\right)dx\right|^2$$

Evaluating this integral:

$$P = \frac{8}{\pi^2} \approx 0.8106$$

This means there's about an 81% probability that the particle will be found in the ground state of the new well.

### Problem 6: Adiabatic Theorem

**Question:** Consider a quantum system with a time-dependent Hamiltonian $H(t)$ that changes slowly from $H(0)$ to $H(T)$ over a time $T$. If the system is initially in the $n$-th eigenstate of $H(0)$, what is the probability that it will be found in the $n$-th eigenstate of $H(T)$ at time $T$, according to the adiabatic theorem?

**Answer:** According to the adiabatic theorem, if a quantum system with a time-dependent Hamiltonian $H(t)$ starts in the $n$-th eigenstate $|n(0)\rangle$ of the initial Hamiltonian $H(0)$, and if the Hamiltonian changes sufficiently slowly, then the system will end up in the $n$-th eigenstate $|n(T)\rangle$ of the final Hamiltonian $H(T)$.

The condition for "sufficiently slowly" is:

$$\max_{t\in[0,T]}\left|\frac{\langle m(t)|\frac{dH(t)}{dt}|n(t)\rangle}{(E_n(t) - E_m(t))^2}\right| \ll 1, \quad \forall m \neq n$$

Where $|m(t)\rangle$ and $E_m(t)$ are the instantaneous eigenstates and eigenvalues of $H(t)$.

If this condition is satisfied, then the probability of finding the system in the $n$-th eigenstate of $H(T)$ at time $T$ is:

$$P = |\langle n(T)|\psi(T)\rangle|^2 \approx 1 - O\left(\max_{t\in[0,T]}\left|\frac{\langle m(t)|\frac{dH(t)}{dt}|n(t)\rangle}{(E_n(t) - E_m(t))^2}\right|^2\right)$$

In the limit of infinitely slow change ($T \to \infty$), this probability approaches 1.

The system also acquires a phase factor known as the Berry phase, in addition to the usual dynamical phase.

### Problem 7: Quantum Zeno Effect

**Question:** A two-level system is prepared in the state $|0\rangle$ at $t=0$ and evolves under the Hamiltonian $H = \frac{\hbar\Omega}{2}\sigma_x$. If the system is measured in the $\{|0\rangle, |1\rangle\}$ basis $N$ times during a fixed interval $[0,T]$, find the probability that the system is still in state $|0\rangle$ at time $T$ as a function of $N$.

**Answer:** Without any measurements, the probability of finding the system in state $|0\rangle$ at time $T$ would be:

$$P_0(T) = \cos^2\left(\frac{\Omega T}{2}\right)$$

With $N$ equally spaced measurements, the evolution is reset after each measurement if the system is found in state $|0\rangle$. The probability of finding the system in state $|0\rangle$ after the first time interval $\Delta t = T/N$ is:

$$p = \cos^2\left(\frac{\Omega \Delta t}{2}\right) = \cos^2\left(\frac{\Omega T}{2N}\right)$$

For small $\Delta t$, we can approximate this as:

$$p \approx 1 - \frac{\Omega^2 T^2}{4N^2}$$

The probability of finding the system in state $|0\rangle$ after all $N$ measurements is:

$$P_0(T,N) = p^N \approx \left(1 - \frac{\Omega^2 T^2}{4N^2}\right)^N$$

In the limit of large $N$:

$$\lim_{N\to\infty} P_0(T,N) = \lim_{N\to\infty} \left(1 - \frac{\Omega^2 T^2}{4N^2}\right)^N = e^{-\frac{\Omega^2 T^2}{4N}} = 1$$

This demonstrates the quantum Zeno effect: frequent measurements can inhibit the time evolution of a quantum system, effectively "freezing" it in its initial state.

## Conclusion

The time evolution operator is a central concept in quantum mechanics that provides a unified framework for understanding how quantum systems change over time. From simple systems like the harmonic oscillator to complex many-body problems, the time evolution operator offers powerful analytical and computational tools for predicting quantum behavior.

The different pictures of quantum mechanics—Schrödinger, Heisenberg, and interaction—provide complementary perspectives on quantum dynamics, each with its own advantages for specific problems. The connection between the time evolution operator and concepts like propagators, Green's functions, and path integrals further enriches our understanding of quantum mechanics and its applications across physics.
