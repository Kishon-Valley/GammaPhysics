## Solving Simple Systems

### Introduction

Solving the Schrödinger equation for various physical systems is fundamental to quantum mechanics. While complex systems often require numerical methods or approximation techniques, several simple systems can be solved analytically. These solutions provide valuable insights into quantum behavior and serve as building blocks for understanding more complex quantum phenomena. This document examines analytical solutions to key quantum mechanical systems including the free particle, particle in a box (infinite potential well), finite potential well, harmonic oscillator, and hydrogen atom.

## The Free Particle

### One-Dimensional Free Particle

The free particle represents the simplest quantum system, where a particle moves in space with no forces acting on it. The potential energy is constant everywhere:

$$V(x) = 0 \quad \text{for all } x$$

The time-independent Schrödinger equation reduces to:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2} = E\psi(x)$$

This is a second-order differential equation with constant coefficients.

#### Solution and Energy Spectrum

The general solution is:

$$\psi(x) = Ae^{ikx} + Be^{-ikx}$$

Where $k = \sqrt{2mE}/\hbar$ is the wave number. This can also be written as:

$$\psi(x) = C\cos(kx) + D\sin(kx)$$

Key features of the free particle solution:

1. **Continuous Energy Spectrum**: Unlike bound systems, the free particle has a continuous energy spectrum with $E \geq 0$.

2. **Plane Wave Solutions**: The solutions are plane waves, extending throughout space with constant amplitude.

3. **Momentum Eigenstates**: The solutions $e^{ikx}$ are eigenstates of the momentum operator with eigenvalue $p = \hbar k$.

4. **Wave Packets**: Physically meaningful solutions are formed by superposing plane waves to create localized wave packets:

   $$\Psi(x,t) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} \phi(k)e^{i(kx-\omega t)}dk$$

   Where $\phi(k)$ is the momentum space wave function and $\omega = \frac{\hbar k^2}{2m}$.

5. **Uncertainty Relation**: Wave packets demonstrate the Heisenberg uncertainty principle, as localizing the particle in position space broadens its momentum distribution.

### Three-Dimensional Free Particle

In three dimensions, the solutions are:

$$\psi(\mathbf{r}) = Ae^{i\mathbf{k}\cdot\mathbf{r}}$$

With energy $E = \frac{\hbar^2k^2}{2m}$ where $k^2 = k_x^2 + k_y^2 + k_z^2$.

## The Particle in a Box

### One-Dimensional Infinite Potential Well

The one-dimensional infinite potential well (or particle in a box) represents one of the simplest quantum systems with an exact solution. The potential is defined as:

$$V(x) = 0 \quad \text{for } 0 < x < L$$
$$V(x) = \infty \quad \text{for } x \leq 0 \text{ or } x \geq L$$

Where $L$ is the width of the well. Inside the well, the time-independent Schrödinger equation becomes:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2} = E\psi(x)$$

The boundary conditions require that $\psi(0) = \psi(L) = 0$ since the wave function must vanish where the potential is infinite.

#### Solution and Energy Levels

The normalized wave functions that satisfy these conditions are:

$$\psi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right), \quad n = 1, 2, 3, ...$$

The corresponding energy eigenvalues are:

$$E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}, \quad n = 1, 2, 3, ...$$

Key observations about this system include:

1. **Quantized Energy**: Energy is quantized, with discrete values determined by the quantum number $n$.

2. **Zero-Point Energy**: Even in the ground state ($n = 1$), the particle possesses non-zero energy, demonstrating the uncertainty principle.

3. **Node Structure**: The wave function for quantum number $n$ has $(n-1)$ nodes (points where $\psi(x) = 0$) between the boundaries.

### Two and Three-Dimensional Infinite Potential Wells

The analysis extends to higher dimensions through separation of variables. For a particle in a rectangular box with dimensions $L_x$, $L_y$, and $L_z$, the wave functions are:

$$\psi_{n_x,n_y,n_z}(x,y,z) = \sqrt{\frac{8}{L_xL_yL_z}}\sin\left(\frac{n_x\pi x}{L_x}\right)\sin\left(\frac{n_y\pi y}{L_y}\right)\sin\left(\frac{n_z\pi z}{L_z}\right)$$

With energy eigenvalues:

$$E_{n_x,n_y,n_z} = \frac{\pi^2\hbar^2}{2m}\left(\frac{n_x^2}{L_x^2} + \frac{n_y^2}{L_y^2} + \frac{n_z^2}{L_z^2}\right)$$

Where $n_x$, $n_y$, and $n_z$ are positive integers.

## The Quantum Harmonic Oscillator

### Mathematical Formulation

The quantum harmonic oscillator describes a particle in a parabolic potential well:

$$V(x) = \frac{1}{2}m\omega^2x^2$$

Where $m$ is the particle mass and $\omega$ is the angular frequency. The time-independent Schrödinger equation is:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2} + \frac{1}{2}m\omega^2x^2\psi(x) = E\psi(x)$$

#### Solution Approach

This equation can be solved using several methods, including:

1. **Series solution method**
2. **Operator method** using creation and annihilation operators
3. **Polynomial method** using Hermite polynomials

#### Wave Functions and Energy Levels

The normalized wave functions are:

$$\psi_n(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}\frac{1}{\sqrt{2^n n!}}H_n\left(\sqrt{\frac{m\omega}{\hbar}}x\right)e^{-\frac{m\omega x^2}{2\hbar}}$$

Where $H_n$ are the Hermite polynomials. The energy eigenvalues are:

$$E_n = \hbar\omega\left(n + \frac{1}{2}\right), \quad n = 0, 1, 2, ...$$

Significant features include:

1. **Equally Spaced Energy Levels**: Energy levels are separated by constant increments of $\hbar\omega$.

2. **Zero-Point Energy**: The ground state energy $E_0 = \frac{1}{2}\hbar\omega$ is non-zero.

3. **Gaussian Ground State**: The ground state wave function is a Gaussian distribution centered at the origin.

## The Hydrogen Atom

### The Coulomb Potential

The hydrogen atom consists of an electron bound to a proton by the Coulomb force. The potential energy is:

$$V(r) = -\frac{e^2}{4\pi\epsilon_0 r}$$

Where $e$ is the elementary charge, $\epsilon_0$ is the vacuum permittivity, and $r$ is the distance between the electron and proton.

### Solving in Spherical Coordinates

Due to the spherical symmetry of the problem, the Schrödinger equation is best expressed in spherical coordinates $(r, \theta, \phi)$. Using separation of variables, the wave function can be written as:

$$\psi(r, \theta, \phi) = R(r)Y_{l,m}(\theta, \phi)$$

Where $R(r)$ is the radial function and $Y_{l,m}(\theta, \phi)$ are the spherical harmonics.

#### Energy Levels and Wave Functions

The energy eigenvalues are:

$$E_n = -\frac{\mu e^4}{32\pi^2\epsilon_0^2\hbar^2}\frac{1}{n^2} = -\frac{13.6 \text{ eV}}{n^2}, \quad n = 1, 2, 3, ...$$

Where $\mu$ is the reduced mass of the electron-proton system.

The complete wave functions are characterized by three quantum numbers:

1. **Principal quantum number** $n$ (determines the energy level)
2. **Orbital angular momentum quantum number** $l$ (ranges from 0 to $n-1$)
3. **Magnetic quantum number** $m$ (ranges from $-l$ to $l$)

The radial part of the wave function involves associated Laguerre polynomials, while the angular part is described by spherical harmonics.

## Finite Potential Well

Unlike the infinite well, the finite potential well has a finite potential barrier:

$$V(x) = 0 \quad \text{for } |x| < a$$
$$V(x) = V_0 \quad \text{for } |x| \geq a$$

Where $V_0$ is the height of the potential barrier and $2a$ is the width of the well.

### Key Features

1. **Finite Number of Bound States**: Unlike the infinite well, the finite well supports only a finite number of bound states with $E < V_0$.

2. **Tunneling**: The wave function does not vanish outside the well but decays exponentially, demonstrating quantum tunneling.

3. **Transcendental Equation**: Energy levels are determined by solving transcendental equations that must be approached numerically for most cases.

## Potential Barriers and Tunneling

### The Rectangular Barrier

A rectangular potential barrier is defined as:

$$V(x) = V_0 \quad \text{for } 0 < x < a$$
$$V(x) = 0 \quad \text{for } x \leq 0 \text{ or } x \geq a$$

For a particle with energy $E < V_0$ incident from the left, the wave function in each region is:

- Region I ($x < 0$): $\psi_I(x) = Ae^{ikx} + Be^{-ikx}$
- Region II ($0 < x < a$): $\psi_{II}(x) = Ce^{\kappa x} + De^{-\kappa x}$
- Region III ($x > a$): $\psi_{III}(x) = Fe^{ikx}$

Where $k = \sqrt{2mE}/\hbar$ and $\kappa = \sqrt{2m(V_0-E)}/\hbar$.

### Tunneling Probability

The transmission coefficient, representing the probability of tunneling through the barrier, is:

$$T = \frac{|F|^2}{|A|^2} = \left[1 + \frac{V_0^2\sinh^2(\kappa a)}{4E(V_0-E)}\right]^{-1}$$

For a thin barrier ($\kappa a \ll 1$), this simplifies to:

$$T \approx 1 - \frac{V_0^2 a^2}{4E(V_0-E)}$$

For a thick barrier ($\kappa a \gg 1$), the transmission coefficient becomes:

$$T \approx \frac{16E(V_0-E)}{V_0^2}e^{-2\kappa a}$$

This exponential dependence on barrier width is a distinctive quantum mechanical effect with no classical analog.


## Practice Problems

### Problem 1: Particle in a Box

**Question**: An electron is confined to a one-dimensional box of width 1.0 nm. Calculate:

a) The energy of the ground state in electron volts (eV).
b) The energy difference between the first excited state and the ground state.
c) The probability of finding the electron in the middle third of the box when it is in the ground state.

**Solution**:

a) The ground state energy is given by:

$$E_1 = \frac{\pi^2\hbar^2}{2mL^2}$$

Substituting the values ($\hbar = 1.055 \times 10^{-34}$ J·s, $m_e = 9.11 \times 10^{-31}$ kg, $L = 1.0 \times 10^{-9}$ m):

$$E_1 = \frac{\pi^2 \times (1.055 \times 10^{-34})^2}{2 \times 9.11 \times 10^{-31} \times (1.0 \times 10^{-9})^2} \approx 6.03 \times 10^{-20} \text{ J}$$

Converting to eV ($1 \text{ eV} = 1.602 \times 10^{-19} \text{ J}$):

$$E_1 \approx 0.38 \text{ eV}$$

b) The energy difference between the first excited state and the ground state is:

$$\Delta E = E_2 - E_1 = \frac{4\pi^2\hbar^2}{2mL^2} - \frac{\pi^2\hbar^2}{2mL^2} = \frac{3\pi^2\hbar^2}{2mL^2} = 3E_1 \approx 1.14 \text{ eV}$$

c) For the ground state, the probability density is:

$$|\psi_1(x)|^2 = \frac{2}{L}\sin^2\left(\frac{\pi x}{L}\right)$$

The probability of finding the electron in the middle third of the box ($\frac{L}{3} < x < \frac{2L}{3}$) is:

$$P = \int_{L/3}^{2L/3} |\psi_1(x)|^2 dx = \frac{2}{L}\int_{L/3}^{2L/3} \sin^2\left(\frac{\pi x}{L}\right) dx$$

Evaluating this integral:

$$P = \frac{2}{L}\left[\frac{x}{2} - \frac{L}{4\pi}\sin\left(\frac{2\pi x}{L}\right)\right]_{L/3}^{2L/3} \approx 0.45 \text{ or } 45\%$$

### Problem 2: Quantum Harmonic Oscillator

**Question**: A particle of mass $m = 1.0 \times 10^{-25}$ kg is in a harmonic oscillator potential with angular frequency $\omega = 1.0 \times 10^{14}$ rad/s. Calculate:

a) The ground state energy in eV.
b) The classical turning points for a particle in the first excited state.
c) The probability of finding the particle outside the classical turning points in the ground state.

**Solution**:

a) The ground state energy is:

$$E_0 = \frac{1}{2}\hbar\omega = \frac{1}{2} \times 1.055 \times 10^{-34} \times 1.0 \times 10^{14} \approx 5.28 \times 10^{-21} \text{ J} \approx 0.033 \text{ eV}$$

b) For the first excited state ($n = 1$), the energy is:

$$E_1 = \hbar\omega\left(1 + \frac{1}{2}\right) = \frac{3}{2}\hbar\omega \approx 1.58 \times 10^{-20} \text{ J}$$

The classical turning points occur where the total energy equals the potential energy:

$$E_1 = \frac{1}{2}m\omega^2x^2$$

Solving for $x$:

$$x = \pm\sqrt{\frac{2E_1}{m\omega^2}} = \pm\sqrt{\frac{3\hbar}{m\omega}} \approx \pm 1.95 \times 10^{-10} \text{ m}$$

c) For the ground state, the probability of finding the particle outside the classical turning points (where $x > \sqrt{\frac{\hbar}{m\omega}}$ or $x < -\sqrt{\frac{\hbar}{m\omega}}$) is approximately 16%. This can be calculated using the ground state wave function:

$$\psi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}e^{-\frac{m\omega x^2}{2\hbar}}$$

### Problem 3: Tunneling Through a Barrier

**Question**: An electron with energy $E = 5$ eV encounters a rectangular potential barrier with height $V_0 = 10$ eV and width $a = 0.5$ nm. Calculate the transmission coefficient (tunneling probability).

**Solution**:

For a thick barrier where $\kappa a \gg 1$, the transmission coefficient is approximately:

$$T \approx \frac{16E(V_0-E)}{V_0^2}e^{-2\kappa a}$$

where $\kappa = \sqrt{\frac{2m(V_0-E)}{\hbar^2}}$

Calculating $\kappa$:

$$\kappa = \sqrt{\frac{2 \times 9.11 \times 10^{-31} \times (10-5) \times 1.602 \times 10^{-19}}{(1.055 \times 10^{-34})^2}} \approx 1.15 \times 10^{10} \text{ m}^{-1}$$

Since $\kappa a = 1.15 \times 10^{10} \times 0.5 \times 10^{-9} = 5.75 > 1$, we can use the thick barrier approximation.

Calculating the transmission coefficient:

$$T \approx \frac{16 \times 5 \times (10-5)}{10^2}e^{-2 \times 1.15 \times 10^{10} \times 0.5 \times 10^{-9}} \approx 0.4 \times e^{-11.5} \approx 4 \times 10^{-6}$$

This means the electron has approximately a 0.0004% chance of tunneling through the barrier.

### Problem 4: Hydrogen Atom

**Question**: For the hydrogen atom, calculate:

a) The energy of the first excited state ($n = 2$) in eV.
b) The radius at which the radial probability density for the 1s state reaches its maximum value.
c) The selection rules for transitions between energy levels.

**Solution**:

a) The energy levels of the hydrogen atom are given by:

$$E_n = -\frac{13.6 \text{ eV}}{n^2}$$

For $n = 2$, the energy is:

$$E_2 = -\frac{13.6 \text{ eV}}{2^2} = -3.4 \text{ eV}$$

b) The radial probability density for the 1s state is:

$$P(r) = 4\pi r^2|R_{10}(r)|^2 = 4\pi r^2 \left(\frac{1}{\pi a_0^3}\right)e^{-2r/a_0}$$

where $a_0 = 0.529 \times 10^{-10}$ m is the Bohr radius.

To find the maximum, we differentiate with respect to $r$ and set equal to zero:

$$\frac{dP(r)}{dr} = 4\pi \left(\frac{1}{\pi a_0^3}\right)\left[2re^{-2r/a_0} - \frac{2r^2}{a_0}e^{-2r/a_0}\right] = 0$$

Solving for $r$:

$$2r - \frac{2r^2}{a_0} = 0$$
$$r(2 - \frac{2r}{a_0}) = 0$$

Since $r \neq 0$, we have $r = a_0$. The maximum radial probability density occurs at exactly the Bohr radius.

c) The selection rules for electric dipole transitions in the hydrogen atom are:

- The principal quantum number can change by any amount: $\Delta n = $ any integer
- The orbital angular momentum must change by exactly one unit: $\Delta l = \pm 1$
- The magnetic quantum number must change by -1, 0, or +1: $\Delta m = 0, \pm 1$

### Problem 5: Free Particle Wave Packet

**Question**: A free particle is described by a Gaussian wave packet with initial width $\sigma_0 = 1.0$ nm. 

a) Write the expression for the wave function at time $t = 0$.
b) How does the width of the wave packet evolve with time for a particle with mass $m = 9.11 \times 10^{-31}$ kg?
c) Calculate the time it takes for the wave packet to double its initial width.

**Solution**:

a) The initial wave function for a Gaussian wave packet centered at $x = 0$ with zero average momentum is:

$$\Psi(x,0) = \left(\frac{1}{2\pi\sigma_0^2}\right)^{1/4}e^{-x^2/4\sigma_0^2}$$

b) The width of a Gaussian wave packet evolves according to:

$$\sigma(t) = \sigma_0\sqrt{1 + \left(\frac{\hbar t}{2m\sigma_0^2}\right)^2}$$

Substituting the values ($\hbar = 1.055 \times 10^{-34}$ J·s, $m = 9.11 \times 10^{-31}$ kg, $\sigma_0 = 1.0 \times 10^{-9}$ m):

$$\sigma(t) = 10^{-9}\sqrt{1 + \left(\frac{1.055 \times 10^{-34} \times t}{2 \times 9.11 \times 10^{-31} \times (10^{-9})^2}\right)^2} = 10^{-9}\sqrt{1 + (5.79 \times 10^{13} \times t)^2}$$

c) For the width to double, we need $\sigma(t) = 2\sigma_0$, which means:

$$\sqrt{1 + (5.79 \times 10^{13} \times t)^2} = 2$$

Solving for $t$:

$$1 + (5.79 \times 10^{13} \times t)^2 = 4$$
$$(5.79 \times 10^{13} \times t)^2 = 3$$
$$t = \frac{\sqrt{3}}{5.79 \times 10^{13}} \approx 3.0 \times 10^{-14} \text{ s}$$

The wave packet doubles its width in approximately 30 femtoseconds.

### Problem 6: Two-Dimensional Infinite Potential Well

**Question**: An electron is confined to a two-dimensional square well with sides of length $L = 2.0$ nm.

a) What are the energy eigenvalues for the states with quantum numbers $(n_x, n_y)$?
b) What is the ground state energy?
c) How many distinct energy levels are there below 10 eV?

**Solution**:

a) The energy eigenvalues for a two-dimensional square well are:

$$E_{n_x,n_y} = \frac{\pi^2\hbar^2}{2mL^2}(n_x^2 + n_y^2)$$

where $n_x$ and $n_y$ are positive integers.

b) The ground state corresponds to $n_x = n_y = 1$, so:

$$E_{1,1} = \frac{\pi^2\hbar^2}{2mL^2}(1^2 + 1^2) = \frac{2\pi^2\hbar^2}{2mL^2} = \frac{\pi^2\hbar^2}{mL^2}$$

Substituting the values:

$$E_{1,1} = \frac{\pi^2 \times (1.055 \times 10^{-34})^2}{9.11 \times 10^{-31} \times (2.0 \times 10^{-9})^2} \approx 9.47 \times 10^{-21} \text{ J} \approx 0.059 \text{ eV}$$

c) The energy levels are determined by the sum $n_x^2 + n_y^2$. We need to find how many distinct values of this sum correspond to energies below 10 eV.

The condition is:

$$\frac{\pi^2\hbar^2}{2mL^2}(n_x^2 + n_y^2) < 10 \text{ eV}$$

Rearranging:

$$n_x^2 + n_y^2 < \frac{2mL^2 \times 10 \times 1.602 \times 10^{-19}}{\pi^2\hbar^2} \approx 169$$

Counting the distinct values of $n_x^2 + n_y^2$ less than 169 (considering that states with $n_x = a, n_y = b$ have the same energy as states with $n_x = b, n_y = a$ when $a \neq b$), we find approximately 28 distinct energy levels below 10 eV.

### Problem 7: Finite Potential Well

**Question**: Consider a particle in a finite potential well with width $2a = 1.0$ nm and height $V_0 = 10$ eV.

a) Estimate how many bound states exist in this well.
b) For a particle with mass equal to that of an electron, approximately what is the ground state energy?
c) How does the probability of finding the particle outside the well in the ground state compare to the first excited state?

**Solution**:

a) The number of bound states in a finite potential well can be estimated using:

$$N \approx \frac{1}{\pi}\sqrt{\frac{2mV_0a^2}{\hbar^2}} + \frac{1}{2}$$

Substituting the values:

$$N \approx \frac{1}{\pi}\sqrt{\frac{2 \times 9.11 \times 10^{-31} \times 10 \times 1.602 \times 10^{-19} \times (0.5 \times 10^{-9})^2}{(1.055 \times 10^{-34})^2}} + \frac{1}{2} \approx 3.4$$

Rounding down, there are approximately 3 bound states.

b) For a finite potential well, the ground state energy is approximately:

$$E_1 \approx \frac{\pi^2\hbar^2}{8ma^2}\left(1 - \frac{2}{\pi^2}\frac{\hbar^2\pi^2}{2mV_0a^2}\right)$$

This simplifies to:

$$E_1 \approx \frac{\pi^2\hbar^2}{8ma^2} - \frac{\hbar^2}{4mV_0a^4}$$

Substituting the values, we get $E_1 \approx 1.5$ eV.

c) The probability of finding the particle outside the well is higher for the first excited state than for the ground state. For the ground state, this probability is approximately 10%, while for the first excited state, it can be around 20-25%. This is because higher energy states have wave functions that penetrate further into the classically forbidden regions.

### Problem 8: Quantum Tunneling Application

**Question**: In a scanning tunneling microscope (STM), electrons tunnel through a vacuum gap between the tip and the sample. If the work function of the metal is 5.0 eV and the gap width is 0.7 nm:

a) Calculate the tunneling current if the applied voltage is 0.5 V and the effective area is $10^{-18}$ m².
b) How does the current change if the gap width is reduced to 0.5 nm?
c) Explain why STM can achieve atomic resolution.

**Solution**:

a) The tunneling current in an STM can be approximated by:

$$I \approx I_0e^{-2\kappa d}$$

where $\kappa = \sqrt{\frac{2m\phi}{\hbar^2}}$, $\phi$ is the effective barrier height (work function minus half the applied voltage), $d$ is the gap width, and $I_0$ depends on the applied voltage and effective area.

With $\phi = 5.0 - 0.5/2 = 4.75$ eV:

$$\kappa = \sqrt{\frac{2 \times 9.11 \times 10^{-31} \times 4.75 \times 1.602 \times 10^{-19}}{(1.055 \times 10^{-34})^2}} \approx 1.12 \times 10^{10} \text{ m}^{-1}$$

Assuming $I_0 = 10^{-6}$ A for the given parameters:

$$I \approx 10^{-6} \times e^{-2 \times 1.12 \times 10^{10} \times 0.7 \times 10^{-9}} \approx 10^{-6} \times e^{-15.68} \approx 1.55 \times 10^{-13} \text{ A}$$

b) For a gap width of 0.5 nm:

$$I \approx 10^{-6} \times e^{-2 \times 1.12 \times 10^{10} \times 0.5 \times 10^{-9}} \approx 10^{-6} \times e^{-11.2} \approx 1.37 \times 10^{-11} \text{ A}$$

The current increases by a factor of about 88 when the gap width is reduced by 0.2 nm.

c) STM can achieve atomic resolution because the tunneling current is exponentially sensitive to the gap width. A change of just 0.1 nm in the gap width can change the current by an order of magnitude. This extreme sensitivity allows the STM to detect tiny variations in the surface topography corresponding to individual atoms.

### Problem 9: Superposition of States in a Harmonic Oscillator

**Question**: A quantum harmonic oscillator is prepared in a superposition state $\Psi(x) = \frac{1}{\sqrt{2}}(\psi_0(x) + \psi_1(x))$, where $\psi_0$ and $\psi_1$ are the ground and first excited state wave functions.

a) Write the time-dependent wave function for this superposition.
b) Calculate the expectation value of position $\langle x \rangle$ as a function of time.
c) Calculate the probability of measuring the system in the ground state if an energy measurement is performed.

**Solution**:

a) The time-dependent wave function is:

$$\Psi(x,t) = \frac{1}{\sqrt{2}}(\psi_0(x)e^{-iE_0t/\hbar} + \psi_1(x)e^{-iE_1t/\hbar})$$

Substituting $E_0 = \frac{1}{2}\hbar\omega$ and $E_1 = \frac{3}{2}\hbar\omega$:

$$\Psi(x,t) = \frac{1}{\sqrt{2}}(\psi_0(x)e^{-i\omega t/2} + \psi_1(x)e^{-3i\omega t/2})$$

b) The expectation value of position is:

$$\langle x \rangle = \int_{-\infty}^{\infty} \Psi^*(x,t) x \Psi(x,t) dx$$

For the harmonic oscillator, $\langle \psi_0 | x | \psi_0 \rangle = 0$ and $\langle \psi_1 | x | \psi_1 \rangle = 0$, but $\langle \psi_0 | x | \psi_1 \rangle = \sqrt{\frac{\hbar}{2m\omega}}$.

Therefore:

$$\langle x \rangle = \frac{1}{2}(\langle \psi_0 | x | \psi_1 \rangle e^{i\omega t} + \langle \psi_1 | x | \psi_0 \rangle e^{-i\omega t}) = \sqrt{\frac{\hbar}{2m\omega}}\cos(\omega t)$$

The expectation value oscillates with the classical frequency $\omega$.

c) The probability of measuring the system in the ground state is the square of the coefficient of $\psi_0$ in the superposition, which is $|\frac{1}{\sqrt{2}}|^2 = \frac{1}{2}$ or 50%.

### Problem 10: Particle in a Three-Dimensional Box

**Question**: A particle is confined to a three-dimensional rectangular box with dimensions $L_x = 1.0$ nm, $L_y = 2.0$ nm, and $L_z = 3.0$ nm.

a) What is the ground state energy?
b) What is the degeneracy of the first excited state?
c) Calculate the energy difference between the ground state and the first excited state.

**Solution**:

a) The energy eigenvalues for a particle in a three-dimensional box are:

$$E_{n_x,n_y,n_z} = \frac{\pi^2\hbar^2}{2m}\left(\frac{n_x^2}{L_x^2} + \frac{n_y^2}{L_y^2} + \frac{n_z^2}{L_z^2}\right)$$

The ground state corresponds to $n_x = n_y = n_z = 1$:

$$E_{1,1,1} = \frac{\pi^2\hbar^2}{2m}\left(\frac{1}{(1.0 \times 10^{-9})^2} + \frac{1}{(2.0 \times 10^{-9})^2} + \frac{1}{(3.0 \times 10^{-9})^2}\right)$$

For an electron ($m = 9.11 \times 10^{-31}$ kg):

$$E_{1,1,1} = \frac{\pi^2 \times (1.055 \times 10^{-34})^2}{2 \times 9.11 \times 10^{-31}}\left(10^{18} + 0.25 \times 10^{18} + 0.11 \times 10^{18}\right) \approx 0.15 \text{ eV}$$

b) The first excited state will have the next lowest energy after the ground state. Given the dimensions, the state with $n_x = 2, n_y = n_z = 1$ will have the lowest energy among the excited states. The degeneracy is 1 because there are no other states with the same energy (since the box dimensions are different).

c) The energy of the first excited state is:

$$E_{2,1,1} = \frac{\pi^2\hbar^2}{2m}\left(\frac{4}{(1.0 \times 10^{-9})^2} + \frac{1}{(2.0 \times 10^{-9})^2} + \frac{1}{(3.0 \times 10^{-9})^2}\right) \approx 0.45 \text{ eV}$$

The energy difference is $E_{2,1,1} - E_{1,1,1} \approx 0.30 \text{ eV}$.

## Conclusion

The analytical solutions to these simple quantum systems provide fundamental insights into quantum behavior. They demonstrate key quantum mechanical principles including:

1. Energy quantization
2. Zero-point energy
3. Wave-particle duality
4. Quantum tunneling
5. Probabilistic interpretation

These solutions serve as building blocks for understanding more complex quantum systems and form the foundation for advanced techniques in quantum mechanics, including perturbation theory and variational methods.
