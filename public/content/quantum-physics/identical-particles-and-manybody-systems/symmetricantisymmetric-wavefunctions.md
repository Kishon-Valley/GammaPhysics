## Symmetric and Antisymmetric Wavefunctions

### Introduction

Quantum mechanics introduces a fundamental principle about identical particles that has no classical analog. When particles are indistinguishable, their collective quantum state must satisfy specific symmetry requirements. These requirements lead to two distinct classes of particles: bosons with symmetric wavefunctions and fermions with antisymmetric wavefunctions.

## Indistinguishability in Quantum Mechanics

### The Principle of Indistinguishability

In quantum mechanics, identical particles (particles of the same type, such as electrons) are fundamentally indistinguishable. This means that any physical observable must remain unchanged when the particles are exchanged.

For a system of two identical particles, if we denote the wavefunction as $\Psi(r_1, r_2)$, where $r_1$ and $r_2$ represent the coordinates of the two particles, then the probability density must satisfy:

$$|\Psi(r_1, r_2)|^2 = |\Psi(r_2, r_1)|^2$$

This requirement allows two possibilities for the wavefunction under particle exchange:

$$\Psi(r_1, r_2) = \pm\Psi(r_2, r_1)$$

The (+) sign corresponds to symmetric wavefunctions, and the (-) sign corresponds to antisymmetric wavefunctions.

### Exchange Symmetry and Spin-Statistics

The connection between the exchange symmetry of the wavefunction and the spin of particles is given by the spin-statistics theorem:

- Particles with integer spin (0, 1, 2, ...) are bosons and have symmetric wavefunctions
- Particles with half-integer spin (1/2, 3/2, ...) are fermions and have antisymmetric wavefunctions

This fundamental distinction leads to dramatically different collective behaviors for bosons and fermions.

## Symmetric Wavefunctions and Bosons

### Mathematical Representation

For a system of N identical bosons, the wavefunction must be symmetric under the exchange of any two particles:

$$\Psi(r_1, r_2, ..., r_i, ..., r_j, ..., r_N) = \Psi(r_1, r_2, ..., r_j, ..., r_i, ..., r_N)$$

For a two-boson system with single-particle states $\phi_a$ and $\phi_b$, the properly symmetrized wavefunction is:

$$\Psi_S(r_1, r_2) = \frac{1}{\sqrt{2(1+|\langle\phi_a|\phi_b\rangle|^2)}}[\phi_a(r_1)\phi_b(r_2) + \phi_b(r_1)\phi_a(r_2)]$$

If the two bosons occupy the same state $\phi_a$, the wavefunction simplifies to:

$$\Psi_S(r_1, r_2) = \phi_a(r_1)\phi_a(r_2)$$

### Bose-Einstein Statistics

Bosons follow Bose-Einstein statistics, which allows multiple particles to occupy the same quantum state. The average occupation number of a single-particle state with energy $E$ at temperature $T$ is:

$$\langle n \rangle = \frac{1}{e^{(E-\mu)/k_BT} - 1}$$

where $\mu$ is the chemical potential and $k_B$ is the Boltzmann constant.

### Examples of Bosons

Common examples of bosons include:

- Photons (spin 1)
- Gluons (spin 1)
- W and Z bosons (spin 1)
- Higgs boson (spin 0)
- Composite particles with integer spin, such as helium-4 atoms

### Bose-Einstein Condensation

At very low temperatures, bosons can collectively occupy the lowest energy state, forming a Bose-Einstein condensate (BEC). This quantum state of matter exhibits macroscopic quantum phenomena such as superfluidity and superconductivity (through Cooper pairs).

The critical temperature for BEC formation in a three-dimensional ideal gas is:

$$T_c = \frac{2\pi\hbar^2}{m k_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}$$

where $n$ is the particle density and $\zeta(3/2) \approx 2.612$ is the Riemann zeta function.

## Antisymmetric Wavefunctions and Fermions

### Mathematical Representation

For a system of N identical fermions, the wavefunction must be antisymmetric under the exchange of any two particles:

$$\Psi(r_1, r_2, ..., r_i, ..., r_j, ..., r_N) = -\Psi(r_1, r_2, ..., r_j, ..., r_i, ..., r_N)$$

For a two-fermion system with single-particle states $\phi_a$ and $\phi_b$, the properly antisymmetrized wavefunction is:

$$\Psi_A(r_1, r_2) = \frac{1}{\sqrt{2}}[\phi_a(r_1)\phi_b(r_2) - \phi_b(r_1)\phi_a(r_2)]$$

### Slater Determinants

For a system of N fermions, the antisymmetric wavefunction can be elegantly expressed as a Slater determinant:

$$\Psi(r_1, r_2, ..., r_N) = \frac{1}{\sqrt{N!}} \det\begin{pmatrix} \phi_1(r_1) & \phi_1(r_2) & \cdots & \phi_1(r_N) \\ \phi_2(r_1) & \phi_2(r_2) & \cdots & \phi_2(r_N) \\ \vdots & \vdots & \ddots & \vdots \\ \phi_N(r_1) & \phi_N(r_2) & \cdots & \phi_N(r_N) \end{pmatrix}$$

This mathematical structure automatically ensures antisymmetry under particle exchange.

### Pauli Exclusion Principle

A direct consequence of the antisymmetry requirement is the Pauli exclusion principle, which states that no two identical fermions can occupy the same quantum state simultaneously. Mathematically, if $\phi_a = \phi_b$, then $\Psi_A(r_1, r_2) = 0$, meaning such a state cannot exist.

### Fermi-Dirac Statistics

Fermions follow Fermi-Dirac statistics, with the average occupation number of a single-particle state with energy $E$ at temperature $T$ given by:

$$\langle n \rangle = \frac{1}{e^{(E-\mu)/k_BT} + 1}$$

At zero temperature, all states up to the Fermi energy $E_F = \mu(T=0)$ are occupied, while all states above it are empty.

### Examples of Fermions

Common examples of fermions include:

- Electrons (spin 1/2)
- Protons (spin 1/2)
- Neutrons (spin 1/2)
- Quarks (spin 1/2)
- Neutrinos (spin 1/2)
- Composite particles with half-integer spin, such as helium-3 atoms

## Spin and Spatial Wavefunctions

### Total Wavefunction

The total wavefunction of a multi-particle system must include both spatial and spin components. For a system of identical particles, the total wavefunction must have the appropriate exchange symmetry.

For a two-particle system, the total wavefunction is:

$$\Psi(r_1, s_1; r_2, s_2) = \psi(r_1, r_2) \chi(s_1, s_2)$$

where $\psi(r_1, r_2)$ is the spatial wavefunction and $\chi(s_1, s_2)$ is the spin wavefunction.

### Symmetry Requirements

The total wavefunction must have the appropriate exchange symmetry (symmetric for bosons, antisymmetric for fermions). This leads to the following requirements:

For bosons:
- If $\psi(r_1, r_2)$ is symmetric, $\chi(s_1, s_2)$ must be symmetric
- If $\psi(r_1, r_2)$ is antisymmetric, $\chi(s_1, s_2)$ must be antisymmetric

For fermions:
- If $\psi(r_1, r_2)$ is symmetric, $\chi(s_1, s_2)$ must be antisymmetric
- If $\psi(r_1, r_2)$ is antisymmetric, $\chi(s_1, s_2)$ must be symmetric

### Spin States for Two Particles

For two spin-1/2 particles, there are four possible spin states:

Symmetric triplet (S = 1):
- $|↑↑\rangle$
- $\frac{1}{\sqrt{2}}(|↑↓\rangle + |↓↑\rangle)$
- $|↓↓\rangle$

Antisymmetric singlet (S = 0):
- $\frac{1}{\sqrt{2}}(|↑↓\rangle - |↓↑\rangle)$

## Applications and Consequences

### Atomic Structure

The Pauli exclusion principle is fundamental to understanding atomic structure. It explains why electrons occupy different orbitals with increasing energy, leading to the periodic table of elements.

### Molecular Bonding

The symmetry of wavefunctions affects molecular bonding. For example, in H₂:
- The symmetric spatial wavefunction (bonding orbital) lowers the energy
- The antisymmetric spatial wavefunction (antibonding orbital) raises the energy

### Quantum Statistics in Many-Body Systems

The different statistics of bosons and fermions lead to distinct behaviors in many-body systems:

- Fermions form a Fermi sea at low temperatures, with states filled up to the Fermi energy
- Bosons can condense into the lowest energy state, forming a Bose-Einstein condensate

### Superconductivity

Cooper pairs in superconductors consist of two electrons with opposite spins. Despite being composed of fermions, these pairs behave as bosons, allowing them to condense into a macroscopic quantum state that exhibits zero electrical resistance.

## Practice Problems

### Problem 1: Symmetrization of Wavefunctions

**Question:** Consider two non-interacting particles in a one-dimensional infinite square well of width $L$. The single-particle eigenfunctions are $\phi_n(x) = \sqrt{\frac{2}{L}}\sin(\frac{n\pi x}{L})$. Write the properly symmetrized and antisymmetrized wavefunctions for the state where one particle is in the ground state ($n=1$) and the other is in the first excited state ($n=2$).

**Answer:** 

The unsymmetrized wavefunction would be:
$$\Psi(x_1, x_2) = \phi_1(x_1)\phi_2(x_2) = \frac{2}{L}\sin\left(\frac{\pi x_1}{L}\right)\sin\left(\frac{2\pi x_2}{L}\right)$$

The properly symmetrized wavefunction (for bosons) is:
$$\Psi_S(x_1, x_2) = \frac{1}{\sqrt{2}}[\phi_1(x_1)\phi_2(x_2) + \phi_2(x_1)\phi_1(x_2)]$$
$$\Psi_S(x_1, x_2) = \frac{1}{\sqrt{2}} \cdot \frac{2}{L}\left[\sin\left(\frac{\pi x_1}{L}\right)\sin\left(\frac{2\pi x_2}{L}\right) + \sin\left(\frac{2\pi x_1}{L}\right)\sin\left(\frac{\pi x_2}{L}\right)\right]$$

The properly antisymmetrized wavefunction (for fermions) is:
$$\Psi_A(x_1, x_2) = \frac{1}{\sqrt{2}}[\phi_1(x_1)\phi_2(x_2) - \phi_2(x_1)\phi_1(x_2)]$$
$$\Psi_A(x_1, x_2) = \frac{1}{\sqrt{2}} \cdot \frac{2}{L}\left[\sin\left(\frac{\pi x_1}{L}\right)\sin\left(\frac{2\pi x_2}{L}\right) - \sin\left(\frac{2\pi x_1}{L}\right)\sin\left(\frac{\pi x_2}{L}\right)\right]$$

### Problem 2: Pauli Exclusion Principle

**Question:** Show that if two fermions occupy the same spatial state $\phi(r)$, the total wavefunction must vanish, regardless of their spin states.

**Answer:** 

For two fermions, the total wavefunction must be antisymmetric under particle exchange. If both fermions occupy the same spatial state $\phi(r)$, the spatial part of the wavefunction is:
$$\psi(r_1, r_2) = \phi(r_1)\phi(r_2)$$

This spatial wavefunction is symmetric under particle exchange: $\psi(r_1, r_2) = \psi(r_2, r_1)$.

For the total wavefunction to be antisymmetric, the spin part $\chi(s_1, s_2)$ must be antisymmetric. For two spin-1/2 particles, the only antisymmetric spin state is the singlet state:
$$\chi(s_1, s_2) = \frac{1}{\sqrt{2}}(|↑↓\rangle - |↓↑\rangle)$$

The total wavefunction is:
$$\Psi(r_1, s_1; r_2, s_2) = \phi(r_1)\phi(r_2) \cdot \frac{1}{\sqrt{2}}(|↑↓\rangle - |↓↑\rangle)$$

When we exchange the particles (both position and spin), we get:
$$\Psi(r_2, s_2; r_1, s_1) = \phi(r_2)\phi(r_1) \cdot \frac{1}{\sqrt{2}}(|↓↑\rangle - |↑↓\rangle) = -\phi(r_1)\phi(r_2) \cdot \frac{1}{\sqrt{2}}(|↑↓\rangle - |↓↑\rangle) = -\Psi(r_1, s_1; r_2, s_2)$$

This confirms that the total wavefunction is antisymmetric, as required for fermions.

However, if the two fermions have the same spin (both up or both down), the spin wavefunction would be symmetric, making it impossible to construct an antisymmetric total wavefunction. Therefore, two fermions cannot occupy the same spatial state with the same spin, which is the Pauli exclusion principle.

### Problem 3: Exchange Energy

**Question:** Two electrons in a helium atom can be described approximately by the spatial wavefunctions $\phi_{1s}(r)$ for the ground state. Calculate the exchange energy, which is the energy difference between the triplet state (parallel spins) and singlet state (antiparallel spins).

**Answer:** 

The spatial part of the wavefunction depends on the spin state:
- For the singlet state (antiparallel spins, S=0), the spatial wavefunction is symmetric
- For the triplet state (parallel spins, S=1), the spatial wavefunction is antisymmetric

The symmetric spatial wavefunction is:
$$\psi_S(r_1, r_2) = \phi_{1s}(r_1)\phi_{1s}(r_2)$$

The antisymmetric spatial wavefunction would need different spatial states, so this isn't applicable for two electrons both in the 1s state.

The energy difference comes from the Coulomb repulsion between the electrons. For the symmetric spatial wavefunction, the electrons have a higher probability of being close to each other, increasing the repulsion energy.

The exchange energy is given by:
$$\Delta E = E_{\text{triplet}} - E_{\text{singlet}} = -J$$

Where $J$ is the exchange integral:
$$J = \int \phi_{1s}^*(r_1)\phi_{1s}^*(r_2)\frac{e^2}{|r_1-r_2|}\phi_{1s}(r_2)\phi_{1s}(r_1)dr_1dr_2$$

For the 1s orbital of helium, $\phi_{1s}(r) = \frac{1}{\sqrt{\pi a_0^3}}e^{-Zr/a_0}$ where $Z$ is the effective nuclear charge and $a_0$ is the Bohr radius.

Evaluating this integral gives $J > 0$, meaning the triplet state has lower energy than the singlet state, which is consistent with Hund's first rule in atomic physics.

### Problem 4: Identical Particles in a Harmonic Oscillator

**Question:** Consider two identical particles in a one-dimensional harmonic oscillator with Hamiltonian $H = \frac{p_1^2 + p_2^2}{2m} + \frac{1}{2}m\omega^2(x_1^2 + x_2^2)$. Find the ground state energy for (a) two bosons and (b) two fermions.

**Answer:** 

The single-particle energy levels of a harmonic oscillator are $E_n = \hbar\omega(n + \frac{1}{2})$ for $n = 0, 1, 2, ...$

(a) For two bosons:
Both particles can occupy the ground state ($n=0$), so the total energy is:
$$E_{\text{boson}} = 2E_0 = 2 \cdot \hbar\omega \cdot \frac{1}{2} = \hbar\omega$$

(b) For two fermions:
Due to the Pauli exclusion principle, the fermions must occupy different energy levels. If we consider only spatial states, one fermion will be in the ground state ($n=0$) and the other in the first excited state ($n=1$), giving:
$$E_{\text{fermion}} = E_0 + E_1 = \hbar\omega \cdot \frac{1}{2} + \hbar\omega \cdot \frac{3}{2} = 2\hbar\omega$$

If we include spin, two fermions with opposite spins can occupy the same spatial ground state, giving:
$$E_{\text{fermion with spin}} = 2E_0 = \hbar\omega$$

### Problem 5: Fermi Energy

**Question:** A three-dimensional box of volume $V$ contains $N$ non-interacting fermions of mass $m$. Calculate the Fermi energy and the ground state energy of the system.

**Answer:** 

For a particle in a 3D box, the energy levels are:
$$E_{n_x, n_y, n_z} = \frac{\hbar^2\pi^2}{2mL^2}(n_x^2 + n_y^2 + n_z^2)$$
where $L = V^{1/3}$ is the length of the box and $n_x, n_y, n_z$ are positive integers.

The number of states with energy less than $E$ is approximately:
$$N(E) = \frac{V}{6\pi^2}\left(\frac{2mE}{\hbar^2}\right)^{3/2}$$

The Fermi energy $E_F$ is defined as the energy of the highest occupied state at zero temperature. Setting $N(E_F) = N$:
$$E_F = \frac{\hbar^2}{2m}\left(\frac{6\pi^2N}{V}\right)^{2/3}$$

The ground state energy is the sum of the energies of all occupied states:
$$E_{\text{ground}} = \int_0^{E_F} E \cdot g(E) \cdot dE$$
where $g(E) = \frac{dN(E)}{dE}$ is the density of states.

Evaluating this integral:
$$E_{\text{ground}} = \frac{3}{5}NE_F = \frac{3}{5}\frac{\hbar^2}{2m}\left(\frac{6\pi^2N}{V}\right)^{2/3}N$$

### Problem 6: Bose-Einstein Condensation

**Question:** A three-dimensional box of volume $V$ contains $N$ non-interacting bosons of mass $m$. Calculate the critical temperature $T_c$ for Bose-Einstein condensation and the fraction of particles in the ground state at temperature $T < T_c$.

**Answer:** 

The critical temperature for Bose-Einstein condensation is:
$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{N}{V\zeta(3/2)}\right)^{2/3}$$
where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function.

Below $T_c$, the number of particles in the excited states is:
$$N_e = N\left(\frac{T}{T_c}\right)^{3/2}$$

Therefore, the number of particles in the ground state is:
$$N_0 = N - N_e = N\left[1 - \left(\frac{T}{T_c}\right)^{3/2}\right]$$

The fraction of particles in the ground state is:
$$\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

At $T = 0$, all particles are in the ground state ($N_0/N = 1$), while at $T = T_c$, the ground state population becomes macroscopic ($N_0/N \approx 0$).

### Problem 7: Exchange Symmetry and Molecular Bonding

**Question:** Consider the hydrogen molecule ion H₂⁺, consisting of two protons and one electron. Using the linear combination of atomic orbitals (LCAO) approach, explain how the symmetric and antisymmetric combinations of atomic wavefunctions affect the energy of the system.

**Answer:** 

In the LCAO approach, we construct molecular orbitals as linear combinations of atomic orbitals. For H₂⁺, we can use the 1s orbitals of hydrogen centered at each proton:
$$\phi_A(r) = \frac{1}{\sqrt{\pi a_0^3}}e^{-|r-R_A|/a_0}$$
$$\phi_B(r) = \frac{1}{\sqrt{\pi a_0^3}}e^{-|r-R_B|/a_0}$$

The symmetric (bonding) and antisymmetric (antibonding) combinations are:
$$\phi_+(r) = \frac{1}{\sqrt{2(1+S)}}[\phi_A(r) + \phi_B(r)]$$
$$\phi_-(r) = \frac{1}{\sqrt{2(1-S)}}[\phi_A(r) - \phi_B(r)]$$
where $S = \langle\phi_A|\phi_B\rangle$ is the overlap integral.

The energy of each state is:
$$E_{\pm} = \frac{\langle\phi_{\pm}|H|\phi_{\pm}\rangle}{\langle\phi_{\pm}|\phi_{\pm}\rangle}$$

For the symmetric state, the electron has a higher probability of being between the two protons, which lowers the energy by screening the proton-proton repulsion. This creates a bonding orbital with energy lower than that of an isolated hydrogen atom.

For the antisymmetric state, the electron density vanishes between the protons, leading to an antibonding orbital with energy higher than that of an isolated hydrogen atom.

The energy difference between these states explains why the symmetric wavefunction leads to a stable molecular bond, while the antisymmetric wavefunction does not.

## Conclusion

The symmetry properties of quantum mechanical wavefunctions for identical particles represent one of the most important aspects of quantum theory. The distinction between bosons with symmetric wavefunctions and fermions with antisymmetric wavefunctions leads to fundamentally different physical behaviors, from the structure of atoms to the properties of quantum gases and condensed matter systems.

The Pauli exclusion principle, arising from the antisymmetry requirement for fermions, shapes the electronic structure of atoms and molecules, while the ability of bosons to occupy the same quantum state enables phenomena like Bose-Einstein condensation and superfluidity.

These quantum statistical effects have no classical analog and highlight the unique nature of quantum many-body systems, where the indistinguishability of particles and the resulting exchange symmetry play a central role in determining physical properties.
